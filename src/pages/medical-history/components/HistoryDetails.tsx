import * as React from 'react';
import { DownloadIcon, FileTextIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

import InfoCard from '../../components/InfoCard';

import { TPatient } from '..';

import StatusBadge from './StatusBadge';

export default function HistoryDetails({
    open,
    setOpen,
    selectedPatient,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedPatient: TPatient | null;
}) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Medical History</SheetTitle>
                </SheetHeader>
                {selectedPatient && (
                    <div className="space-y-8 py-4">
                        <HistorySection title="Patient Information">
                            <InfoCard
                                title={selectedPatient.name}
                                subtitle={selectedPatient.id}
                                className="p-0"
                            />
                        </HistorySection>
                        <PaymentDetail patient={selectedPatient} />
                        <InitialPayment patient={selectedPatient} />
                        <HistorySection title="Documentation">
                            <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                <FileTextIcon />
                                <span>Medical-invoice.pdf</span>
                                <Button
                                    className="ml-auto"
                                    variant="ghost"
                                    size="icon"
                                >
                                    <DownloadIcon />
                                </Button>
                            </div>
                        </HistorySection>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}

function PaymentDetail({ patient }: { patient: TPatient }) {
    return (
        <HistorySection title="Payment Detail">
            <div className="grid grid-cols-2 gap-y-4">
                <PaymentDetailItem label="From" value={patient.name} />
                <PaymentDetailItem label="Pay With" value={patient.name} />
                <PaymentDetailItem
                    label="Pay On"
                    value={`${patient.date} At ${patient.time}`}
                />
                <PaymentDetailItem
                    label="Status Payment"
                    value={<StatusBadge status={patient.status} />}
                />
            </div>
        </HistorySection>
    );
}

function InitialPayment({ patient }: { patient: TPatient }) {
    return (
        <HistorySection title="Initial Payment">
            <PaymentDetailItem
                label="Medical Check-Up"
                value={`$${patient.total}`}
                direction="row"
            />
            <PaymentDetailItem
                label="Medicine"
                value={`$${patient.total}`}
                direction="row"
            />
            <div className="border border-dashed" />
            <PaymentDetailItem
                label="Medical Check-Up"
                value={`$${patient.total}`}
                direction="row"
            />
            <PaymentDetailItem
                label="Medicine"
                value={`$${patient.total}`}
                direction="row"
            />
            <div className="border border-dashed" />
            <PaymentDetailItem
                label="Grand Total"
                value={`$${patient.total}`}
                direction="row"
                labelClassName="font-semibold text-secondary-foreground"
                valueClassName="text-lg font-semibold text-green-600"
            />
        </HistorySection>
    );
}

function PaymentDetailItem({
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

function HistorySection({
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
