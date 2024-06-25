import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';

import { ButtonLoading } from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';

import { InputField, CheckboxField } from '@/components/form-fields';

import Container from '../components/Container';
import Heading from '../components/Heading';

export default function SignIn() {
    return (
        <Container>
            <Heading
                title="Welcome To Healthy 24 👌"
                description="Enter your account to use healthy 24 service"
            />
            <LoginForm />
        </Container>
    );
}

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean().optional(),
});

type TFormSchema = z.infer<typeof formSchema>;

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
                        <Link className="text-xs" to="/forget-password">
                            Forget Password
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
