import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';

import { Form } from '@/components/ui/form';
import { CheckboxField, InputField } from '@/components/form-fields';
import { useToast } from '@/components/ui/use-toast';

import Heading from '../components/Heading';
import AuthButtons from '../components/AuthButtons';

export default function SignUp() {
    return (
        <>
            <Heading
                title="Sign up your account 👋"
                description="Let's enter your data to continue using healthy 24 services"
            />
            <SignUpForm />
        </>
    );
}

const formSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(8),
    terms: z.boolean().refine((value) => value === true, {
        message: 'You must accept the terms and conditions',
    }),
});

type TFormSchema = z.infer<typeof formSchema>;

async function signUpUser(values: TFormSchema) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    localStorage.setItem(
        'user',
        JSON.stringify({ role: 'user', email: values.email }),
    );
}

function SignUpForm() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const mutation = useMutation({
        mutationFn: signUpUser,
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
            name: '',
            email: '',
            password: '',
            terms: false,
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
                        name="name"
                        label="Name"
                        placeholder="Enter your name here"
                        autoFocus
                    />
                    <InputField
                        control={form.control}
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email here"
                    />
                    <InputField
                        control={form.control}
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password here"
                    />
                    <CheckboxField
                        control={form.control}
                        name="terms"
                        label={
                            <>
                                By sign up to healthy 24 you agree all{' '}
                                <a
                                    href="#"
                                    className="font-semibold"
                                    target="_blank"
                                >
                                    terms and conditions
                                </a>
                            </>
                        }
                    />
                </div>
                <AuthButtons page="sign-up" />
            </form>
        </Form>
    );
}
