export default function PageContainer({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-4 sm:space-y-6">
            <h1 className="hidden sm:block sm:text-2xl sm:font-semibold">
                {title}
            </h1>
            {children}
        </div>
    );
}
