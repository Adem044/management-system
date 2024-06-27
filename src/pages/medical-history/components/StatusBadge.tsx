export const STATUS = {
    success: {
        color: 'bg-green-200 text-green-700',
        label: 'Success',
    },
    pending: {
        color: 'bg-yellow-200 text-yellow-700',
        label: 'Pending',
    },
    canceled: {
        color: 'bg-red-200 text-red-700',
        label: 'Canceled',
    },
};

export default function StatusBadge({
    status,
}: {
    status: keyof typeof STATUS;
}) {
    const { color, label } = STATUS[status];
    return (
        <div className={`w-max rounded-md p-2 text-xs ${color}`}>
            <span>{label}</span>
        </div>
    );
}
