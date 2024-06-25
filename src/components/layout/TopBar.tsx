import { useLocation } from 'react-router-dom';
import { BellIcon, MenuIcon, SettingsIcon } from 'lucide-react';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    AvatarProps,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet';

import { NAV_LINKS } from '@/constants';

import NavLinks from './NavLinks';

export default function TopBar() {
    return (
        <>
            <TobBarDesktop />
            <TobBarMobile />
        </>
    );
}

function TobBarDesktop() {
    return (
        <div className="hidden items-center justify-between border-b py-3 pl-8 pr-4 sm:flex">
            <div>
                <img src="/logo.png" width={120} alt="Logo" />
            </div>
            <div className="flex items-center gap-6 text-muted-foreground">
                <div>
                    <BellIcon />
                </div>
                <div>
                    <SettingsIcon />
                </div>
                <UserAvatar />
            </div>
        </div>
    );
}

function TobBarMobile() {
    const location = useLocation();
    const title = NAV_LINKS.find(({ to }) => to === location.pathname)?.label;
    return (
        <div className="fixed inset-x-0 top-0 flex items-center justify-between bg-white p-4 sm:hidden">
            <MenuButton />
            <div>
                <span>{title}</span>
            </div>
            <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground"
            >
                <BellIcon />
            </Button>
        </div>
    );
}

function MenuButton() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" showCloseIcon={false}>
                <SheetHeader>
                    <div className="flex items-center gap-4">
                        <SheetClose asChild>
                            <Button size="icon" variant="ghost">
                                <MenuIcon />
                            </Button>
                        </SheetClose>
                        <img src="/logo.png" width={120} alt="Logo" />
                    </div>
                </SheetHeader>
                <div className="mb-8 mt-4">
                    <NavLinks
                        links={[
                            {
                                label: 'Edit My Profile',
                                icon: <UserAvatar size="sm" />,
                                to: '/profile',
                            },
                            {
                                label: 'Notifications',
                                icon: <BellIcon />,
                                to: '/notifications',
                            },
                            {
                                label: 'Settings',
                                icon: <SettingsIcon />,
                                to: '/settings',
                            },
                        ]}
                    />
                </div>
                <NavLinks />
            </SheetContent>
        </Sheet>
    );
}

function UserAvatar(props: AvatarProps) {
    return (
        <Avatar {...props}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}
