import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ButtonLoading } from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';

import { InputField } from '@/components/form-fields';

import Container from '../components/Container';
import Heading from '../components/Heading';

export default function ForgetPassword() {
    return (
        <Container>
            <Heading
                title="Forget Password"
                description="Enter your email to recover your password"
            />
            <ForgetPasswordForm />
        </Container>
    );
}

const formSchema = z.object({
    email: z.string().email(),
});

type TFormSchema = z.infer<typeof formSchema>;

function ForgetPasswordForm() {
    const form = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    async function onSubmit(values: TFormSchema) {
        console.log(values);
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
