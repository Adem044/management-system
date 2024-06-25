import { Control, FieldPath, FieldValues } from 'react-hook-form';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';

export type TInputFieldProps<
    TFieldValues extends object,
    TName = string,
> = InputProps & {
    control: Control<TFieldValues>;
    name: TName;
    label: string;
    description?: string;
    component?: React.ElementType;
};
export default function InputField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    control,
    name,
    label,
    description,
    component: Component = Input,
    ...InputProps
}: TInputFieldProps<TFieldValues, TName>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Component
                            placeholder={label}
                            {...field}
                            {...InputProps}
                        />
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
