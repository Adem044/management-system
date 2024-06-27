import { Outlet, useLocation, Navigate } from 'react-router-dom';

import TopBar from '@/components/layout/TopBar';
import Sidebar from '@/components/layout/Sidebar';

export default function App() {
    const { pathname } = useLocation();
    const user = localStorage.getItem('user');

    if (!user) {
        return <Navigate to="/sign-in" />;
    }

    if (pathname === '/') {
        return <Navigate to="/dashboard" />;
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
