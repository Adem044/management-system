import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { NAV_LINKS } from '@/constants';

export default function NavLinks({ links = NAV_LINKS }) {
    const location = useLocation();

    return (
        <nav>
            <ul className="flex flex-col sm:gap-2 sm:p-4">
                {links.map(({ label, icon, to }) => (
                    <li key={label}>
                        <Link
                            to={to}
                            className={clsx(
                                'flex items-center gap-4 rounded-sm p-4 text-sm',
                                {
                                    'bg-secondary': to === location.pathname,
                                    'text-muted-foreground':
                                        to !== location.pathname,
                                },
                            )}
                        >
                            {icon}
                            <span>{label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
