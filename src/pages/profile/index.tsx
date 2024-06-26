import { Link } from 'react-router-dom';
import { MapPinIcon, PencilLineIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Profile() {
    return (
        <div className="space-y-4">
            <UserDetails />
            <ProfileDescription />
        </div>
    );
}

function UserDetails() {
    return (
        <div className="rounded-md border">
            <div className="relative">
                <div className="h-52 bg-secondary"></div>
                <div className="absolute -bottom-16 left-8 size-32 rounded-full bg-primary outline outline-8 outline-white"></div>
            </div>
            <div className="flex justify-between px-4 pb-4 pt-20 sm:py-8 sm:pl-44 sm:pr-8">
                <div className="space-y-3 sm:space-y-4">
                    <h1 className="font-medium sm:text-3xl">
                        dr. Taylor gomez
                    </h1>
                    <p className="text-sm text-muted-foreground sm:text-lg">
                        Specialist of skin surgery in Moustafa bacha
                    </p>
                    <Badge
                        className="gap-2 p-3 text-sm font-normal sm:text-lg sm:font-medium"
                        variant="secondary"
                    >
                        <MapPinIcon />
                        <span>Algiers, Algeria</span>
                    </Badge>
                </div>
                <div>
                    <Link to="/edit-profile">
                        <Button
                            variant="outline"
                            className="gap-2 text-[#3EA2D0]"
                        >
                            <PencilLineIcon />
                            <span className="hidden sm:block">
                                Edit Profile
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ProfileDescription() {
    return (
        <div className="space-y-4 rounded-md border p-4 sm:p-8">
            <h2 className="font-semibold sm:text-2xl">Profile Description</h2>
            <div className="space-y-3 text-sm text-muted-foreground sm:space-y-4 sm:text-base">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et aliqua. Ut enim ad
                    minim veniam
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    to :
                </p>
                <ul className="list-disc px-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <li key={index}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do e
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
