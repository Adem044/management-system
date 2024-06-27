export default function InfoItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex justify-between text-sm sm:text-xs">
            <span className="text-muted-foreground">{label}</span>
            <span>{value}</span>
        </div>
    );
}
