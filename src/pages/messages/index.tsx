import { FileIcon, InfoIcon, SendIcon, VideoIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Container, Title } from '../components/PageContainer';
import SearchBar from '../components/SearchBar';

export default function Messages() {
    return (
        <Container className="sm:py-0">
            <div className="flex grow flex-col sm:flex-row">
                <div className="space-y-6 sm:border-r sm:pr-4 sm:pt-10">
                    <Title>Message</Title>
                    <SearchBar />
                    <div className="space-y-4">
                        {/* TODO */}
                        <Message />
                        <Message />
                        <Message numOfUnreadMessages={2} isActive />
                        <Message />
                        <Message />
                    </div>
                </div>
                <ChatDetails />
            </div>
        </Container>
    );
}
function Message({
    numOfUnreadMessages,
    isActive,
}: {
    numOfUnreadMessages?: number;
    isActive?: boolean;
}) {
    return (
        <div className="relative flex cursor-pointer gap-4">
            {isActive && (
                <div className="absolute -left-4 hidden h-full border-l-4 border-primary sm:block" />
            )}
            <div className="size-14 rounded-full bg-secondary" />
            <div className="flex grow justify-between py-2">
                <div className="flex flex-col justify-between">
                    <span className="text-sm font-medium">Sarah Lee</span>
                    <span className="text-xs text-muted-foreground">
                        Hi how are you?
                    </span>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                        12:45PM
                    </span>
                    {numOfUnreadMessages && (
                        <span className="grid size-6 place-items-center rounded-full bg-sky-100 text-xs font-medium text-sky-400">
                            {numOfUnreadMessages}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function ChatDetails() {
    return (
        <div className="hidden grow flex-col sm:flex">
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
            <div className="grow space-y-8 border-b p-4">
                <span className="flex justify-center">Jan 23</span>
                <div className="space-y-6 ">
                    {/* TODO */}
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
