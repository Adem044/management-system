export default function NoResultFound({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="grow py-8 text-center text-xl">{children}</div>;
}
