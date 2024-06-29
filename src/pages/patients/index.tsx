import { Link } from 'react-router-dom';
import { DownloadIcon, FilterIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import Loader from '@/components/Loader';
import NoResultFound from '@/components/NoResultFound';

import { BASE_API_URL } from '@/constants';

import PageContainer from '../components/PageContainer';
import SearchBar from '../components/SearchBar';

import InfoItem from './components/InfoItem';

export default function Patients() {
    return (
        <PageContainer title="Patient List">
            <Toolbar />
            <PatientsList />
            <PatientsListPagination />
        </PageContainer>
    );
}

function Toolbar() {
    return (
        <div className="flex justify-between gap-4">
            <SearchBar />
            <div className="flex gap-4">
                <Button size="lg" variant="secondary" className="gap-2 px-4">
                    <DownloadIcon size={18} />
                    <span className="hidden sm:block">Download Report</span>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 px-4">
                    <FilterIcon size={18} />
                    <span className="hidden sm:block">Filter</span>
                </Button>
            </div>
        </div>
    );
}

export type TPatient = {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
    street: string;
    city: string;
    country: string;
    weight: string;
    bloodPressure: string;
    bloodGlucose: string;
};

async function getPatients(): Promise<TPatient[]> {
    return fetch(`${BASE_API_URL}patients`).then((res) => res.json());
}

function PatientsList() {
    const { data: patients, isFetching } = useQuery({
        queryKey: ['patients'],
        queryFn: getPatients,
    });

    if (isFetching) {
        return <Loader />;
    }

    if (!patients) {
        return <NoResultFound>No patients found</NoResultFound>;
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {patients.map((patient) => (
                <PatientCard key={patient.id} {...patient} />
            ))}
        </div>
    );
}

function PatientCard({
    id,
    name,
    street,
    city,
    country,
    weight,
    bloodPressure,
    bloodGlucose,
}: TPatient) {
    return (
        <div className="flex flex-col gap-4 rounded-md border p-4">
            <div className="size-12 rounded-full bg-secondary"></div>
            <span className="font-medium sm:text-sm">{name}</span>
            <span className="text-sm text-muted-foreground sm:text-xs">
                {street}, {city}, {country}
            </span>
            <Separator />
            <InfoItem label="Weight" value={`${weight}lb`} />
            <InfoItem label="Blood Pressure" value={bloodPressure} />
            <InfoItem label="Blood Glucose" value={bloodGlucose} />
            <Link to={id}>
                <Button size="lg" className="h-12 w-full text-xs font-normal">
                    View detail patient
                </Button>
            </Link>
        </div>
    );
}

function PatientsListPagination() {
    return (
        <Pagination className="justify-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
