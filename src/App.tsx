import { Outlet, useLocation, Navigate } from 'react-router-dom';

import TopBar from '@/components/layout/TopBar';
import Sidebar from '@/components/layout/Sidebar';

export default function Root() {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
}

export function Layout() {
    const user = localStorage.getItem('user');

    if (!user) {
        return <Navigate to="/sign-in" />;
    }

    return (
        <div className="flex min-h-screen flex-col pb-10 pt-20 sm:p-0">
            <TopBar />
            <div className="flex grow">
                <Sidebar />
                <div className="grow overflow-auto px-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export function AuthLayout() {
    const user = localStorage.getItem('user');

    if (user) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div className="items-center sm:grid sm:grid-cols-2">
            <div className="container space-y-6 py-8 sm:space-y-12">
                <Outlet />
            </div>
            <WelcomeBanner />
        </div>
    );
}

function WelcomeBanner() {
    return (
        <div className="hidden bg-[#56ccf2] pt-8 text-center text-white sm:block">
            <div className="container space-y-6">
                <h2 className="text-2xl font-medium">
                    We give the best experience 😉
                </h2>
                <p className="text-xl">
                    Dedicated virtual consulting platform for docotrs and
                    patients to help them consult across vatious channels
                </p>
            </div>
            <div className="mt-8 overflow-hidden">
                <img
                    className="relative right-0 top-0 z-10"
                    src="/review.png"
                    alt="What people say about as"
                />
                <img
                    className="relative -right-40 -top-20"
                    src="/review.png"
                    alt="What people say about as"
                />
            </div>
            <img className="-mt-80" src="/doctors.png" alt="Our doctors" />
        </div>
    );
}
