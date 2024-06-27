import { Avatar, AvatarFallback, AvatarProps } from '@/components/ui/avatar';

export default function UserAvatar(props: AvatarProps) {
    return (
        <Avatar {...props}>
            <AvatarFallback>AZ</AvatarFallback>
        </Avatar>
    );
}
