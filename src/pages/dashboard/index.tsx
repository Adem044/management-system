import { cn } from '@/lib/utils';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

import UserAvatar from '@/components/UserAvatar';

import { MedicalHistoryList, MedicalHistoryTable } from '../medical-history';

import InfoCard from '../components/InfoCard';

export default function Dashboard() {
    return (
        <>
            <DashboardDesktop />
            <DashboardMobile />
        </>
    );
}

function DashboardDesktop() {
    return (
        <div className="hidden grow space-y-4 sm:block sm:px-4 sm:py-10">
            <div className="flex gap-4">
                <div className="flex grow flex-col justify-between">
                    <Heading />
                    <CurrentMonthVisits />
                </div>
                <div className="rounded-md border">
                    <Calendar />
                    <UpcomingAppointments />
                </div>
            </div>
            <Container title="Medical History">
                <MedicalHistoryTable />
            </Container>
        </div>
    );
}

function DashboardMobile() {
    return (
        <div className="grow space-y-4 px-4 sm:hidden">
            <Heading />
            <div className="rounded-md border">
                <Calendar />
                <UpcomingAppointments />
            </div>
            <CurrentMonthVisits />
            <Container title="Medical History">
                <MedicalHistoryList />
            </Container>
        </div>
    );
}

function Container({
    children,
    title,
    className,
}: {
    children: React.ReactNode;
    title: string;
    className?: string;
}) {
    return (
        <div className={cn('space-y-4 rounded-md border p-4', className)}>
            <span className="font-bold">{title}</span>
            {children}
        </div>
    );
}

function Heading() {
    return (
        <div className="mb-6 flex items-end justify-between gap-2">
            <h1 className="sm:text-2xl sm:font-semibold">
                Welcome back, 👋 Dr. Taylor
            </h1>
            <UserAvatar className="sm:hidden" />
        </div>
    );
}

function UpcomingAppointments() {
    return (
        <div className="space-y-2 p-4">
            <div className="flex items-center justify-between">
                <span className="font-bold">Upcoming</span>
                <Button
                    variant="link"
                    size="sm"
                    className="-mr-3 text-xs text-[#56CCF2] underline"
                >
                    View all
                </Button>
            </div>
            <div className="space-y-2">
                <InfoCard
                    className="bg-[#F0F9FD]"
                    title="Monthly doctor’s meet"
                    subtitle="8 April, 2021 | 04:00 PM"
                />
            </div>
        </div>
    );
}

function CurrentMonthVisits() {
    return (
        <Container title="Visits This Month">
            <div className="grid grid-cols-7">
                <div className="flex flex-col-reverse gap-2 sm:gap-8">
                    {[0, 10, 20, 30, 40, 50].map((n) => (
                        <span className="text-xs text-muted-foreground" key={n}>
                            {n}
                        </span>
                    ))}
                </div>
                {[
                    { index: 1, value: 30, height: 'h-14 sm:h-32' },
                    { index: 2, value: 40, height: 'h-20 sm:h-44' },
                    {
                        index: 3,
                        value: 50,
                        height: 'h-28 sm:h-56',
                        active: true,
                    },
                    { index: 4, value: 20, height: 'h-10 sm:h-20' },
                    { index: 5, value: 30, height: 'h-14 sm:h-32' },
                    { index: 6, value: 30, height: 'h-14 sm:h-32' },
                ].map(({ index, height, value, active }) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-end gap-2"
                    >
                        {active && (
                            <div className="rounded-sm bg-primary px-3 py-1 text-xs text-white">
                                {value}
                            </div>
                        )}
                        <div
                            className={cn(
                                clsx(
                                    `${height} w-6 rounded-t-md bg-secondary sm:w-10`,
                                    {
                                        'bg-[#56CCF2]': active,
                                    },
                                ),
                            )}
                        />
                        <span className="text-xs text-muted-foreground">
                            0{index}
                        </span>
                    </div>
                ))}
            </div>
        </Container>
    );
}
