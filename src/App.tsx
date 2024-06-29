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
        <div className="flex h-screen max-h-screen flex-col">
            <TopBar />
            <div className="flex grow overflow-auto">
                <Sidebar />
                <div className="flex grow overflow-auto">
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
        <div className="flex min-h-screen">
            <div className="container flex max-w-xl grow flex-col justify-center gap-6 py-8 sm:gap-12">
                <Outlet />
            </div>
            <WelcomeBanner />
        </div>
    );
}

function WelcomeBanner() {
    return (
        <div className="relative hidden max-w-md bg-[#56ccf2] pt-8 text-center text-white sm:block">
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
            <img
                className="absolute bottom-0"
                src="/doctors.png"
                alt="Our doctors"
            />
        </div>
    );
}
