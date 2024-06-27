import { Link } from 'react-router-dom';
import { DownloadIcon, FilterIcon, SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';
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

import PageContainer from '../components/PageContainer';

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
            <div className="relative flex-1 md:grow-0">
                <SearchIcon className="absolute left-2.5 top-3 size-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search for something"
                    className="h-11 w-full rounded-lg bg-background pl-8 md:w-[250px] lg:w-[336px]"
                />
            </div>
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

function PatientsList() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <PatientCard key={index} />
            ))}
        </div>
    );
}

function PatientCard() {
    return (
        <div className="flex flex-col gap-4 rounded-md border p-4">
            <div className="size-12 rounded-full bg-secondary"></div>
            <span className="font-medium sm:text-sm">John Smith</span>
            <span className="text-sm text-muted-foreground sm:text-xs">
                123 Main St, Anytown, USA
            </span>
            <Separator />
            <InfoItem label="Weight" value="165lb" />
            <InfoItem label="Blood Pressure" value="120/80mmHg" />
            <InfoItem label="Blood Glucose" value="92mg/dL" />
            <Link to="1">
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
