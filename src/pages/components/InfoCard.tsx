import { cn } from '@/lib/utils';

export default function InfoCard({
    title,
    subtitle,
    className,
}: {
    title: string;
    subtitle: string;
    className?: string;
}) {
    return (
        <div
            className={cn('flex items-center gap-4 rounded-md p-2', className)}
        >
            <div className="size-8 rounded-full bg-gray-300"></div>
            <div className="space-y-1">
                <div className="text-sm font-medium">{title}</div>
                <div className="text-xs text-muted-foreground">{subtitle}</div>
            </div>
        </div>
    );
}
