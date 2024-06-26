import { Outlet } from 'react-router-dom';

import TopBar from '@/components/layout/TopBar';
import Sidebar from '@/components/layout/Sidebar';

export default function App() {
    return (
        <div className="min-h-screen pb-10 pt-20 sm:p-0">
            <TopBar />
            <div className="flex">
                <Sidebar />
                <div className="grow px-4 sm:py-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
