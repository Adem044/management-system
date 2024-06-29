import { useNavigate } from 'react-router-dom';
import { LogOutIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import NavLinks from './NavLinks';

export default function Sidebar() {
    return (
        <aside className="hidden min-w-max overflow-auto border-r sm:block">
            <NavLinks />
            <Logout />
        </aside>
    );
}

function Logout() {
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        navigate('/sign-in');
    };

    return (
        <div className="px-4">
            <Button
                className="w-full justify-start gap-4 px-4 text-destructive"
                size="lg"
                variant="ghost"
                onClick={logoutUser}
            >
                <LogOutIcon />
                <span>Logout</span>
            </Button>
        </div>
    );
}
