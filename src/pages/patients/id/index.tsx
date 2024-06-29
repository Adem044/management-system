import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import Loader from '@/components/Loader';
import NoResultFound from '@/components/NoResultFound';

import { BASE_API_URL } from '@/constants';

import PageContainer from '../../components/PageContainer';

import InfoItem from '../components/InfoItem';

import { TPatient } from '..';

async function getPatient(id: string): Promise<TPatient> {
    return fetch(`${BASE_API_URL}patients/${id}`).then((res) => res.json());
}

export default function PatientDetails() {
    const { id } = useParams<{ id: string }>();
    const { data: patient, isFetching } = useQuery({
        queryKey: ['patient', id],
        queryFn: () => getPatient(id!),
    });

    if (isFetching) {
        return <Loader />;
    }

    if (!patient) {
        return <NoResultFound>Patient not found</NoResultFound>;
    }
    return (
        <PageContainer title="Patient Details">
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="min-w-72 space-y-4">
                    <PatientProfile {...patient} />
                    <PatientInformation {...patient} />
                </div>
                <PastAppointments />
            </div>
        </PageContainer>
    );
}

function PatientProfile({ name, id, avatar, street, city, country }: TPatient) {
    return (
        <div className="flex flex-col items-center gap-4 rounded-md border p-4">
            <img src={avatar} alt={name} className="size-14 rounded-full" />
            <span className="font-medium sm:text-sm">{name}</span>
            <div className="flex gap-4 text-sm sm:text-xs">
                <span className="text-muted-foreground">Patient ID</span>
                <span className="font-medium">#{id}</span>
            </div>
            <span className="text-sm text-muted-foreground sm:text-xs">
                {street}, {city}, {country}
            </span>
            <div className="flex w-full justify-evenly">
                <AppointmentStats label="Appointment" value="15" />
                <AppointmentStats label="Completed" value="12" />
            </div>
            <Button size="lg" className="h-12 w-full text-xs font-normal">
                View detail patient
            </Button>
        </div>
    );
}

function AppointmentStats({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <span className="text-lg font-medium">{value}</span>
            <span className="text-sm">{label}</span>
        </div>
    );
}

function PatientInformation({ weight, bloodGlucose, bloodPressure }: TPatient) {
    return (
        <div className="space-y-4 rounded-md border p-4">
            <h6 className="text-lg font-semibold">Patient information</h6>
            <InfoItem label="Weight" value={`${weight}lb`} />
            <InfoItem label="Height" value="1,80 m" />
            <InfoItem label="Blood Type" value="O- (Negative)" />
            <InfoItem label="Blood Glucose" value={bloodGlucose} />
            <InfoItem label="Blood Pressure" value={bloodPressure} />
            <InfoItem label="Disease" value="Diabetes" />
            <InfoItem label="Allergies" value="Peanut" />
        </div>
    );
}

function PastAppointments() {
    return (
        <div className="space-y-4 rounded-md border p-4">
            <h6 className="text-lg font-semibold">Past appointments</h6>
            <div>
                {Array.from({ length: 3 }).map((_, index) => (
                    <PastAppointment key={index} />
                ))}
            </div>
        </div>
    );
}

function PastAppointment() {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="size-4 rounded-full border-4 border-primary" />
                <div className="grow border-l border-dashed" />
            </div>
            <div className="mb-4 grow space-y-4 ">
                <span>March 22, 2023</span>
                <div className="space-y-4 rounded-md bg-secondary p-6 text-sm">
                    <h6 className="font-medium">
                        Diabetes Control Appointment
                    </h6>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Provident id velit ducimus molestiae sunt
                        voluptatibus error pariatur veniam? Nesciunt eveniet
                        facere consequuntur consequatur ipsam cum error repellat
                        totam, ea at.
                    </p>
                    <div className="grid grid-cols-3 pt-4">
                        <AppointmentDetail label="Treatment" value="Check-up" />
                        <AppointmentDetail label="Duration" value="3 months" />
                        {/* TODO */}
                        <AppointmentDetail
                            label="Document"
                            value="Check-up-result.pdf"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AppointmentDetail({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-muted-foreground">{label}</span>
            <span>{value}</span>
        </div>
    );
}
