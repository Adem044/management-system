import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    AvatarProps,
} from '@/components/ui/avatar';

export default function UserAvatar(props: AvatarProps) {
    return (
        <Avatar {...props}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}
