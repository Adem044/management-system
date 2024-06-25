import { Outlet } from 'react-router-dom';

import TopBar from '@/components/layout/TopBar';
import Sidebar from '@/components/layout/Sidebar';

export default function App() {
    return (
        <div className="min-h-screen pt-20 sm:p-0">
            <TopBar />
            <div className="flex">
                <Sidebar />
                <div className="grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
