import { ButtonLoading } from '@/components/ui/button-loading';
import { Link } from 'react-router-dom';

const CONTENT = {
    'sign-in': {
        submitButton: 'Sign In',
        googleButton: 'Sign In with Google',
        facebookButton: 'Sign In with Facebook',
        extraMessage: "You don't have an account ?",
        externalLink: {
            label: 'Sign Up',
            to: '/sign-up',
        },
    },
    'sign-up': {
        submitButton: 'Sign Up',
        googleButton: 'Sign Up with Google',
        facebookButton: 'Sign Up with Facebook',
        extraMessage: 'You already have an account ?',
        externalLink: {
            label: 'Sign In',
            to: '/sign-in',
        },
    },
};

export default function AuthButtons({ page }: { page: 'sign-in' | 'sign-up' }) {
    const {
        submitButton,
        googleButton,
        facebookButton,
        extraMessage,
        externalLink,
    } = CONTENT[page];
    return (
        <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <ButtonLoading type="submit" inProgress={false}>
                {submitButton}
            </ButtonLoading>
            <span className="text-center text-sm font-semibold">Or</span>
            <div className="flex flex-col space-y-3">
                <ButtonLoading inProgress={false} variant="outline">
                    {googleButton}
                </ButtonLoading>
                <ButtonLoading inProgress={false} variant="outline">
                    {facebookButton}
                </ButtonLoading>
            </div>
            <div className="text-center">
                <span className="text-xs">
                    {extraMessage}
                    <Link className="font-semibold" to={externalLink.to}>
                        {' '}
                        {externalLink.label}
                    </Link>
                </span>
            </div>
        </div>
    );
}
