import { FileIcon, InfoIcon, SendIcon, VideoIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function MessageDetails() {
    return <ChatDetails />;
}

export function ChatDetails() {
    return (
        <div className="-mx-4 flex h-full grow flex-col sm:mx-0">
            <div className="flex items-center gap-4 border-b p-4">
                <div className="size-14 rounded-full bg-secondary" />
                <div className="flex flex-col">
                    <span className="font-medium">Emily Johnson</span>
                    <span className="text-sm text-muted-foreground">
                        Contact
                    </span>
                </div>
                <div className="ml-auto text-muted-foreground">
                    <Button size="icon" variant="ghost">
                        <VideoIcon />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <InfoIcon />
                    </Button>
                </div>
            </div>
            <div className="grow space-y-8 overflow-auto border-b p-4">
                <span className="flex justify-center">Jan 23</span>
                <div className="space-y-6 ">
                    <LeftChatMessage />
                    <RightChatMessage />
                    <LeftChatMessage hasDate={false} hasLoadingIndicator />
                </div>
            </div>
            <div className="flex items-center gap-2 p-4">
                <Button size="icon" variant="ghost">
                    <FileIcon />
                </Button>
                <Input className="h-14" placeholder="Write something here" />
                <Button size="icon" className="size-14 shrink-0 rounded-full">
                    <SendIcon size={28} />
                </Button>
            </div>
        </div>
    );
}

function LeftChatMessage({
    hasLoadingIndicator = false,
    hasDate = true,
}: {
    hasLoadingIndicator?: boolean;
    hasDate?: boolean;
}) {
    return (
        <div className="flex gap-4">
            <div className="size-10 shrink-0 rounded-full bg-secondary" />
            <div className="flex flex-col gap-2">
                <p className="mr-5 rounded-e-md rounded-bl-md border bg-secondary p-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam ipsa iure enim a.
                </p>
                {hasDate && (
                    <span className="text-xs text-muted-foreground">
                        12:45PM
                    </span>
                )}
                {hasLoadingIndicator && <LoadingIndicator />}
            </div>
        </div>
    );
}

function RightChatMessage() {
    return (
        <div className="flex flex-col items-end gap-2">
            <p className="ml-5 rounded-s-md rounded-tr-md border bg-primary p-4 text-sm text-primary-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                ipsa iure enim a.
            </p>
            <span className="text-xs text-muted-foreground">12:45PM</span>
        </div>
    );
}

function LoadingIndicator() {
    return (
        <div className="flex max-w-max gap-2 rounded-e-md rounded-bl-md border bg-secondary p-4 text-sm">
            <div className="size-2 rounded-md bg-primary"></div>
            <div className="size-2 rounded-md bg-primary"></div>
            <div className="size-2 rounded-md bg-primary"></div>
        </div>
    );
}
