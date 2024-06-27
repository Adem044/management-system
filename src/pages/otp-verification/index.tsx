import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

import { ButtonLoading } from '@/components/ui/button-loading';
import { Form } from '@/components/ui/form';

import { OTPInputField } from '@/components/form-fields';

import Heading from '../components/Heading';

export default function OTPVerification() {
    return (
        <>
            <Heading
                title="OTP Verification 📨"
                description="Enter the OTP sent to your email"
            />
            <OTPVerificationForm />
        </>
    );
}

const formSchema = z.object({
    otp: z.string().length(6),
});

type TFormSchema = z.infer<typeof formSchema>;

function OTPVerificationForm() {
    const navigate = useNavigate();
    const form = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: '',
        },
    });

    async function onSubmit(values: TFormSchema) {
        console.log(values);
        navigate('/sign-in');
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6"
            >
                <OTPInputField control={form.control} name="otp" />
                <ButtonLoading
                    className="w-full"
                    type="submit"
                    inProgress={false}
                >
                    Continue
                </ButtonLoading>
                <p className="text-center text-xs">
                    Didn't receive verification code?{' '}
                    <span className="cursor-pointer font-medium">Resend</span>
                </p>
            </form>
        </Form>
    );
}
