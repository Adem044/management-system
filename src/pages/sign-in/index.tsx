import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';

import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';

import { InputField, CheckboxField } from '@/components/form-fields';

import Heading from '../components/Heading';
import AuthButtons from '../components/AuthButtons';

export default function SignIn() {
    return (
        <>
            <Heading
                title="Welcome To Healthy 24 👌"
                description="Enter your account to use healthy 24 service"
            />
            <LoginForm />
        </>
    );
}

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean().optional(),
});

type TFormSchema = z.infer<typeof formSchema>;

async function signInUser(values: TFormSchema) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, values.email, values.password);
    localStorage.setItem(
        'user',
        JSON.stringify({ role: 'user', email: values.email }),
    );
}

function LoginForm() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const mutation = useMutation({
        mutationFn: signInUser,
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
    const form = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
    });

    async function onSubmit(values: TFormSchema) {
        mutation.mutate(values);
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
                <AuthButtons page="sign-in" />
            </form>
        </Form>
    );
}
