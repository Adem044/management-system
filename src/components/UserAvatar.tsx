import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarProps } from '@/components/ui/avatar';

export default function UserAvatar(props: AvatarProps) {
    return (
        <Link to="/profile">
            <Avatar {...props}>
                <AvatarFallback>AZ</AvatarFallback>
            </Avatar>
        </Link>
    );
}
