import { SearchIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';

export default function SearchBar() {
    return (
        <div className="relative flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-3 size-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search for something"
                className="h-11 w-full rounded-lg bg-background pl-8 md:w-[250px] lg:w-[336px]"
            />
        </div>
    );
}
