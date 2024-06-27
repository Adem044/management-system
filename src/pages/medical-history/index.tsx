import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { EyeOffIcon, TrashIcon } from 'lucide-react';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/table/data-table';

import InfoCard from '../components/InfoCard';

import HistoryDetails from './components/HistoryDetails';
import StatusBadge, { STATUS } from './components/StatusBadge';

export default function MedicalHistory() {
    return (
        <div className="space-y-4 sm:space-y-6">
            <h1 className="sm:text-2xl sm:font-semibold">Medical History</h1>
            <div className="hidden sm:block">
                <MedicalHistoryTable />
            </div>
            <div className="sm:hidden">
                <MedicalHistoryList />
            </div>
        </div>
    );
}

export type TPatient = {
    name: string;
    id: string;
    status: keyof typeof STATUS;
    patient: string;
    date: string;
    time: string;
    total: number;
    payWith: string;
};

const patientsData: TPatient[] = [
    {
        name: 'Sarah Lee',
        id: '#DOC6353',
        status: 'success',
        patient: 'Monthly Medical Check-up',
        date: 'Dec 22, 2023',
        time: '12:00 Pm',
        total: 520,
        payWith: 'Oran Bank',
    },
    {
        name: 'John Smith',
        id: '#DOC6353',
        status: 'pending',
        patient: 'Diabetes Control Appointment',
        date: 'Dec 22, 2023',
        time: '12:00 Pm',
        total: 600,
        payWith: 'Oran Bank',
    },
    {
        name: 'Maria Rodriguez',
        id: '#DOC6353',
        status: 'canceled',
        patient: 'Root Canal',
        date: 'Dec 22, 2023',
        time: '12:00 Pm',
        total: 600,
        payWith: 'Oran Bank',
    },
];

export function MedicalHistoryList() {
    return (
        <div className="-mx-4 space-y-4 divide-y">
            {patientsData.map((data) => (
                <MedicalHistoryItem key={data.id} {...data} />
            ))}
        </div>
    );
}

function MedicalHistoryItem({
    name,
    id,
    status,
    patient,
    date,
    time,
    total,
    payWith,
}: TPatient) {
    return (
        <div className="space-y-2 px-4">
            <div className="-ml-2 flex items-center justify-between">
                <InfoCard title={name} subtitle={id} />
                <StatusBadge status={status} />
            </div>

            <DataInfo info="Patient" data={patient} active />
            <DataInfo info="Date" data={date} />
            <DataInfo info="Time" data={time} />
            <DataInfo info="Total" data={`$${total}`} active />
            <DataInfo info="Pay with" data={payWith} />
        </div>
    );
}

function DataInfo({
    info,
    data,
    active,
}: {
    info: string;
    data: string;
    active?: boolean;
}) {
    return (
        <div
            className={clsx(
                'flex items-center justify-between rounded-md p-2 text-xs',
                {
                    'bg-secondary': active,
                },
            )}
        >
            <span>{info}</span>
            <span>{data}</span>
        </div>
    );
}

const columns: ColumnDef<TPatient>[] = [
    {
        header: 'Patient',
        cell: ({ row }) => (
            <InfoCard
                className="p-0"
                title={row.original.name}
                subtitle={row.original.id}
            />
        ),
    },
    {
        accessorKey: 'patient',
        header: 'Appointment',
    },
    {
        accessorKey: 'date',
        header: 'Date',
    },
    {
        accessorKey: 'time',
        header: 'Time',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
        header: 'Action',
        cell: () => (
            <div className="flex text-muted-foreground">
                <Button size="icon" variant="ghost">
                    <EyeOffIcon size={18} />
                </Button>
                <Button size="icon" variant="ghost">
                    <TrashIcon size={18} />
                </Button>
            </div>
        ),
    },
];

export function MedicalHistoryTable() {
    const [open, setOpen] = React.useState(false);
    const [selectedPatient, setSelectedPatient] =
        React.useState<TPatient | null>(null);
    return (
        <>
            <DataTable
                columns={columns}
                data={patientsData}
                onRowClick={(data) => {
                    setOpen(true);
                    setSelectedPatient(data);
                }}
            />
            <HistoryDetails
                open={open}
                setOpen={setOpen}
                selectedPatient={selectedPatient}
            />
        </>
    );
}
