import { cn } from '@/lib/utils';

export default function Container({
    children,
    title,
    className,
}: {
    children: React.ReactNode;
    title: string;
    className?: string;
}) {
    return (
        <div className={cn('space-y-4 rounded-md border p-4', className)}>
            <span className="font-bold">{title}</span>
            {children}
        </div>
    );
}
