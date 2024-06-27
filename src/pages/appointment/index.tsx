import * as React from 'react';
import {
    CalendarDaysIcon,
    ChevronDownIcon,
    DownloadIcon,
    FileTextIcon,
    SlidersHorizontalIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

import PageContainer from '../components/PageContainer';
import InfoCard from '../components/InfoCard';

type TModes = 'calendar' | 'list';

export default function Appointments() {
    const [mode, setMode] = React.useState<TModes>('calendar');
    return (
        <PageContainer title="Appointments">
            <Toolbar mode={mode} setMode={setMode} />
            {mode === 'calendar' && <AppointmentsSchedule />}
            {mode === 'list' && <AppointmentsList />}
        </PageContainer>
    );
}

function Toolbar({
    mode,
    setMode,
}: {
    mode: TModes;
    setMode: React.Dispatch<React.SetStateAction<TModes>>;
}) {
    return (
        <div className="flex justify-between gap-4 sm:justify-end">
            <Button variant="secondary" className="gap-2">
                <span>Jan 16, 2023</span>
                <ChevronDownIcon />
            </Button>
            <div className="flex">
                <Button
                    className="rounded-none"
                    size="icon"
                    variant={mode === 'calendar' ? 'default' : 'outline'}
                    onClick={() => setMode('calendar')}
                >
                    <CalendarDaysIcon />
                </Button>
                <Button
                    className="rounded-none"
                    size="icon"
                    variant={mode === 'list' ? 'default' : 'outline'}
                    onClick={() => setMode('list')}
                >
                    <SlidersHorizontalIcon />
                </Button>
            </div>
        </div>
    );
}

function AppointmentsSchedule() {
    return (
        <div className="flex flex-col divide-y-2 overflow-auto">
            <AppointmentHeader />

            <AppointmentRow
                time="08:00"
                appointments={[
                    {
                        id: 1,
                        name: 'Robert Fox',
                        status: 'checked-out',
                    },
                    null,
                    {
                        id: 3,
                        name: 'Cameron Williamson',
                        status: 'checked-in',
                    },
                    null,
                ]}
            />
            <AppointmentRow
                time="09:00"
                appointments={[
                    {
                        id: 1,
                        name: 'Cody Fisher',
                        status: 'checked-in',
                    },
                    null,
                    {
                        id: 3,
                        name: 'Jacob Jones',
                        status: 'checked-out',
                    },
                    null,
                ]}
            />
        </div>
    );
}

function AppointmentHeader() {
    return (
        <div className="flex divide-x-2">
            <div className="w-10 shrink-0 text-right">
                <span className="pr-0.5 text-xs">PST</span>
            </div>
            {[
                { id: 1, name: 'Abril Lewis', occupation: 'Physician' },
                {
                    id: 2,
                    name: 'Allan Hicks',
                    occupation: 'Physician',
                },
                {
                    id: 3,
                    name: 'Bianca Heath',
                    occupation: 'Nurse practitioner',
                },
                {
                    id: 4,
                    name: 'Emmy Massey',
                    occupation: 'Physician assistant',
                },
            ].map((data) => (
                <AppointmentHeaderItem key={data.id} {...data} />
            ))}
        </div>
    );
}

function AppointmentHeaderItem({
    name,
    occupation,
}: {
    name: string;
    occupation: string;
}) {
    return (
        <div className="flex w-64 shrink-0 grow items-center gap-2 p-3 pt-0">
            <div className="size-8 rounded-full bg-secondary" />
            <div className="flex flex-col">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs text-muted-foreground">
                    {occupation}
                </span>
            </div>
        </div>
    );
}

function AppointmentRow({
    time,
    appointments,
}: {
    time: string;
    appointments: ({
        id: number;
        name: string;
        status: keyof typeof STATUS;
    } | null)[];
}) {
    return (
        <div className="flex h-24 divide-x-2">
            <div className="w-10 shrink-0 text-right">
                <span className="pr-0.5 text-xs">{time}</span>
            </div>
            {appointments.map((appointment, index) =>
                appointment ? (
                    <AppointmentRowItem key={appointment.id} {...appointment} />
                ) : (
                    <div key={index} className="w-64 shrink-0 grow" />
                ),
            )}
        </div>
    );
}

const STATUS = {
    'checked-in': {
        color: 'border-violet-600',
        label: 'Checked in',
    },
    'checked-out': {
        color: 'border-green-600',
        label: 'Checked out',
    },
    confirmed: {
        color: 'border-blue-600',
        label: 'Confirmed',
    },
    scheduled: {
        color: 'border-yellow-600',
        label: 'Scheduled',
    },
};

function AppointmentRowItem({
    name,
    status,
}: {
    name: string;
    status: keyof typeof STATUS;
}) {
    const [open, setOpen] = React.useState(false);

    const { color = 'border-grey-600', label } = STATUS[status] || {};
    return (
        <>
            <div
                className="flex w-64 shrink-0 grow pl-0.5 pr-8"
                onClick={() => setOpen(true)}
            >
                <div
                    className={`flex grow flex-col rounded-s-md border-l-4 ${color} bg-secondary p-1`}
                >
                    <span className="text-xs">{name}</span>
                    {label && (
                        <span className="text-xs text-muted-foreground">
                            {label}
                        </span>
                    )}
                </div>
            </div>
            <AppointmentDetails open={open} setOpen={setOpen} />
        </>
    );
}

function AppointmentDetails({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const selectedPatient = {
        name: 'Sarah Lee',
        id: '#DOC6353',
        status: 'success',
        patient: 'Monthly Medical Check-up',
        date: 'Dec 22, 2023',
        time: '12:00 Pm',
        total: 520,
        payWith: 'Oran Bank',
    };
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Appointment Details</SheetTitle>
                </SheetHeader>

                <div className="space-y-8 py-4">
                    <AppointmentSection title="Patient Information">
                        <InfoCard
                            title={selectedPatient.name}
                            subtitle={selectedPatient.id}
                            className="p-0"
                        />
                    </AppointmentSection>
                    <AppointmentDetail />
                    <AppointmentSection title="Documentation">
                        <div className="flex h-14 items-center gap-2 rounded-md border px-4 py-2">
                            <FileTextIcon />
                            <span>Medical-check-up.pdf</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                            <FileTextIcon />
                            <span>Medical-check-up.pdf</span>
                            <Button
                                className="ml-auto"
                                variant="ghost"
                                size="icon"
                            >
                                <DownloadIcon />
                            </Button>
                        </div>
                    </AppointmentSection>
                </div>
            </SheetContent>
        </Sheet>
    );
}

function AppointmentDetail() {
    return (
        <AppointmentSection title="Appointment Detail">
            <div className="grid gap-y-4">
                <AppointmentDetailItem
                    label="Date"
                    value="Sunday Dec 16, 2023 At 08 AM - 12 AM"
                />
                <AppointmentDetailItem
                    label="Category"
                    value="Diabet Control Appointment"
                />
                <AppointmentDetailItem
                    label="Problem"
                    value="Blood sugar managment is especial important for people with diabets n as a chronically high blood sugar levles can lead"
                />
            </div>
        </AppointmentSection>
    );
}

function AppointmentDetailItem({
    label,
    value,
    direction = 'column',
    labelClassName,
    valueClassName,
}: {
    label: string;
    value: string | React.ReactNode;
    direction?: 'row' | 'column';
    labelClassName?: string;
    valueClassName?: string;
}) {
    const directionClass =
        direction === 'row' ? 'flex-row justify-between' : 'flex-col';
    return (
        <div className={`flex ${directionClass} gap-2`}>
            <span className={cn('text-muted-foreground', labelClassName)}>
                {label}
            </span>
            <span className={cn('text-sm font-medium', valueClassName)}>
                {value}
            </span>
        </div>
    );
}

function AppointmentSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-2">
            <span className="text-xs font-medium uppercase">{title}</span>
            {children}
        </div>
    );
}

function AppointmentsList() {
    return (
        <div className="flex flex-col gap-4">
            <span className="text-center text-xs font-medium">
                Jan 16, 2023
            </span>
            <div className="grid gap-4 sm:grid-cols-2">
                <AppointmentCard />
                <AppointmentCard />
            </div>
            <span className="text-center text-xs font-medium">
                Jan 11, 2023
            </span>
            <div className="grid gap-4 sm:grid-cols-2">
                <AppointmentCard />
                <AppointmentCard />
            </div>
            <span className="text-center text-xs font-medium">
                Jan 05, 2023
            </span>
            <div className="grid gap-4 sm:grid-cols-2">
                <AppointmentCard />
            </div>
        </div>
    );
}

function AppointmentCard() {
    return (
        <div className="flex grow flex-col gap-4 rounded-md border p-4">
            <div className="flex items-center gap-4">
                <div className="size-16 rounded-full bg-secondary" />
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium">Mr. John Smith</span>
                    <span className="text-sm text-muted-foreground">
                        09AM - 10AM
                    </span>
                </div>
            </div>
            <p className="text-sm text-muted-foreground">
                I have been experiencing frequent headaches for the past week.
                It's becoming unbearable, and I'm worried
            </p>
            <div className="flex flex-wrap gap-4">
                <Button className="grow" size="lg" variant="outline">
                    Decline Appointment
                </Button>
                <Button className="grow" size="lg">
                    Accept Appointment
                </Button>
            </div>
        </div>
    );
}
