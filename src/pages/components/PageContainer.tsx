import { cn } from '@/lib/utils';

export default function PageContainer({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    );
}

export function Title({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h1
            className={cn(
                'hidden sm:block sm:text-2xl sm:font-semibold',
                className,
            )}
        >
            {children}
        </h1>
    );
}

export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'flex min-h-full flex-col gap-4 sm:gap-6 sm:py-10',
                className,
            )}
        >
            {children}
        </div>
    );
}
