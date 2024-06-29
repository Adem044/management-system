import { Link } from 'react-router-dom';

import { Container, Title } from '../components/PageContainer';
import SearchBar from '../components/SearchBar';

import { ChatDetails } from './id';

export default function Messages() {
    return (
        <Container className="sm:p-0">
            <div className="flex grow flex-col overflow-auto sm:flex-row">
                <div className="flex flex-col gap-6 sm:border-r sm:px-4 sm:pt-10">
                    <Title>Message</Title>
                    <SearchBar />
                    <div className="-mx-4 flex grow flex-col gap-4 overflow-auto px-4">
                        {/* TODO */}
                        <Message />
                        <Message />
                        <Message numOfUnreadMessages={2} isActive />
                        <Message />
                        <Message />
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <ChatDetails />
                </div>
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
        <Link to="id">
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
        </Link>
    );
}
