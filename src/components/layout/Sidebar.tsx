import NavLinks from './NavLinks';

export default function Sidebar() {
    return (
        <aside className="hidden max-w-max border-r sm:block">
            <NavLinks />
        </aside>
    );
}
