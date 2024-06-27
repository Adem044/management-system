import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import { InputField } from '@/components/form-fields';

const formSchema = z.object({
    fullName: z.string(),
    speciality: z.string(),
    location: z.string(),
    description: z.string(),
    cover: z.string(),
    profilePicture: z.string(),
});

type TFormSchema = z.infer<typeof formSchema>;

export default function EditProfile() {
    const form = useForm<TFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            description: '',
            speciality: '',
            location: '',
            cover: '',
            profilePicture: '',
        },
    });

    async function onSubmit(values: TFormSchema) {
        console.log(values);
    }

    return (
        <div className="sm:py-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mx-4 space-y-4 rounded-md border p-4 text-sm sm:mx-8 sm:p-6 sm:text-base"
                >
                    <h1 className="hidden text-2xl font-semibold sm:block">
                        Edit profile
                    </h1>
                    <p className="text-muted-foreground sm:text-sm">
                        Your profile will be displayed publicly so be careful
                        what you share
                    </p>
                    <div className="space-y-3">
                        <span className="font-medium">Cover</span>
                        <div className="h-20 rounded-md bg-secondary"></div>
                    </div>
                    <div className="space-y-3">
                        <span className="font-medium">Profile picture</span>
                        <div className="flex items-center gap-2">
                            <div className="size-16 rounded-full bg-secondary"></div>
                            <Button>Change photo</Button>
                            <Button variant="ghost">Remove</Button>
                        </div>
                    </div>
                    <InputField
                        control={form.control}
                        name="fullName"
                        label="Full name"
                        placeholder="Enter your name here"
                        autoFocus
                    />
                    <InputField
                        control={form.control}
                        name="speciality"
                        label="Speciality"
                        placeholder="Enter your speciality here"
                    />
                    <InputField
                        control={form.control}
                        name="location"
                        label="Location"
                        placeholder="Enter your location here"
                    />
                    <InputField
                        control={form.control}
                        name="description"
                        label="Profile description"
                        placeholder="Enter your description here"
                        component={Textarea}
                    />
                    <div className="flex gap-4 sm:justify-end">
                        <Button
                            className="w-full sm:w-auto"
                            size="lg"
                            variant="outline"
                        >
                            Cancel
                        </Button>
                        <Button
                            className="w-full sm:w-auto"
                            size="lg"
                            type="submit"
                        >
                            Save profile
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
