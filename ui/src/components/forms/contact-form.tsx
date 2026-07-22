'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.email('Enter a valid email'),
  company: z.string().optional(),
  message: z.string().min(20, 'Please share at least 20 characters'),
});
type FormData = z.infer<typeof schema>;
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = () => {
    /* API mutation will be connected when the backend is implemented. */
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input {...register('name')} autoComplete="name" />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <Input type="email" {...register('email')} autoComplete="email" />
        </Field>
      </div>
      <Field label="Company" error={errors.company?.message}>
        <Input {...register('company')} autoComplete="organization" />
      </Field>
      <Field label="How can we help?" error={errors.message?.message}>
        <textarea
          {...register('message')}
          className="min-h-36 w-full rounded-lg border bg-white p-4 text-sm"
        />
      </Field>
      <Button type="submit">Send enquiry</Button>
      {isSubmitSuccessful && (
        <p className="text-sm text-emerald-700">
          Thanks. This demo form is ready to connect to the future contact API.
        </p>
      )}
    </form>
  );
}
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-slate-800">
      {label}
      <div className="mt-2">{children}</div>
      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}
