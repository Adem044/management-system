import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

import { ButtonLoading } from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';

import { InputField } from '@/components/form-fields';

import Heading from '../components/Heading';

export default function ForgetPassword() {
    return (
        <>
            <Heading
                title="Forget Password 🔒"
                description="Enter your email to recover your password"
            />
            <ForgetPasswordForm />
        </>
    );
}

const formSchema = z.object({
    email: z.string().email(),
});

type TFormSchema = z.infer<typeof formSchema>;

function ForgetPasswordForm() {
    const navigate = useNavigate();
    const form = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    async function onSubmit(values: TFormSchema) {
        console.log(values);
        navigate('/otp-verification');
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6"
            >
                <InputField
                    control={form.control}
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email here"
                    autoFocus
                />
                <ButtonLoading
                    className="w-full"
                    type="submit"
                    inProgress={false}
                >
                    Continue
                </ButtonLoading>
            </form>
        </Form>
    );
}
