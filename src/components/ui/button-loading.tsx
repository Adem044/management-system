import React from 'react';
import { Loader2 } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';

export function ButtonLoading({
    inProgress,
    children,
    ...props
}: {
    inProgress: boolean;
    children: React.ReactNode;
} & ButtonProps) {
    return (
        <Button disabled={inProgress} {...props}>
            {inProgress && <Loader2 className="mr-2 size-4 animate-spin" />}
            {children}
        </Button>
    );
}
