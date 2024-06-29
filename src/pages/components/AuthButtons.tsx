import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';

import { ButtonLoading } from '@/components/ui/button-loading';
import { useToast } from '@/components/ui/use-toast';

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

async function authenticateWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    localStorage.setItem(
        'user',
        JSON.stringify({ role: 'user', email: user.email }),
    );
}

export default function AuthButtons({ page }: { page: 'sign-in' | 'sign-up' }) {
    const navigate = useNavigate();
    const { toast } = useToast();
    const mutation = useMutation({
        mutationFn: authenticateWithGoogle,
        onSuccess: () => {
            navigate('/dashboard');
        },
        onError: (error) => {
            toast({
                title: error.message,
                variant: 'destructive',
            });
        },
    });

    function authenticateWithGoogleHandler() {
        mutation.mutate();
    }

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
                <ButtonLoading
                    inProgress={false}
                    variant="outline"
                    onClick={authenticateWithGoogleHandler}
                >
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
