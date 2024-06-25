import {
    ActivityIcon,
    BarChart2Icon,
    CalendarIcon,
    MessageCircleMoreIcon,
    UsersIcon,
} from 'lucide-react';

export const NAV_LINKS = [
    {
        label: 'Dashboard',
        icon: <BarChart2Icon />,
        to: '/dashboard',
    },
    {
        label: 'Patients list',
        icon: <UsersIcon />,
        to: '/patients',
    },
    {
        label: 'Messages',
        icon: <MessageCircleMoreIcon />,
        to: '/messages',
    },
    {
        label: 'Appointment',
        icon: <CalendarIcon />,
        to: '/appointment',
    },
    {
        label: 'Medical History',
        icon: <ActivityIcon />,
        to: '/medical-history',
    },
];
