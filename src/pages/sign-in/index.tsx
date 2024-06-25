import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';

import { ButtonLoading } from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';

import { InputField, CheckboxField } from '@/components/form-fields';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean().optional(),
});

type TFormSchema = z.infer<typeof formSchema>;

export default function SignIn() {
    return (
        <div className="sm:grid sm:grid-cols-2">
            <div className="container space-y-6 py-8 sm:space-y-12">
                <LoginHeader />
                <LoginForm />
            </div>
            <WelcomeBanner />
        </div>
    );
}

function LoginHeader() {
    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Welcome To Healthy 24 👌</h1>
            <p className="text-sm text-muted-foreground">
                Enter your account to use healthy 24 service
            </p>
        </div>
    );
}

function LoginForm() {
    const form = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
    });

    async function onSubmit(values: TFormSchema) {
        console.log(values);
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 sm:space-y-12"
            >
                <div className="space-y-4">
                    <InputField
                        control={form.control}
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email here"
                        autoFocus
                    />
                    <InputField
                        control={form.control}
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password here"
                    />
                    <div className="flex items-center justify-between">
                        <CheckboxField
                            control={form.control}
                            label="Remember Me"
                            name="remember"
                        />
                        <Link className="text-xs" to="/forgot-password">
                            Forgot Password
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 sm:gap-y-6">
                    <ButtonLoading type="submit" inProgress={false}>
                        Sign In
                    </ButtonLoading>
                    <span className="text-center text-sm font-semibold">
                        Or
                    </span>
                    <div className="flex flex-col space-y-3">
                        <ButtonLoading inProgress={false} variant="outline">
                            Sign in with Google
                        </ButtonLoading>
                        <ButtonLoading inProgress={false} variant="outline">
                            Sign in with Facebook
                        </ButtonLoading>
                    </div>
                    <div className="text-center">
                        <span className="text-xs">
                            You don't have an account ?
                            <Link className="font-semibold" to="/sign-up">
                                {' '}
                                Sign Up
                            </Link>
                        </span>
                    </div>
                </div>
            </form>
        </Form>
    );
}

function WelcomeBanner() {
    return (
        <div className="hidden bg-[#56ccf2] pt-8 text-center text-white sm:block">
            <div className="container space-y-6">
                <h2 className="text-2xl font-medium">
                    We give the best experience 😉
                </h2>
                <p className="text-xl">
                    Dedicated virtual consulting platform for docotrs and
                    patients to help them consult across vatious channels
                </p>
            </div>
            <div className="mt-8 overflow-hidden">
                <img
                    className="relative right-0 top-0 z-10"
                    src="/review.png"
                    alt="What people say about as"
                />
                <img
                    className="relative -right-40 -top-20"
                    src="/review.png"
                    alt="What people say about as"
                />
            </div>
            <img className="-mt-80" src="/doctors.png" alt="Our doctors" />
        </div>
    );
}
