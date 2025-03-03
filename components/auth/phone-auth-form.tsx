'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const formSchema = z.object({
  phone: z.string().min(10, 'Please enter a valid phone number'),
  otp: z.string().min(6, 'Please enter the 6-digit code'),
});

type FormData = z.infer<typeof formSchema>;

export function PhoneAuthForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showOTP, setShowOTP] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      otp: '',
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    try {
      // TODO: Implement phone verification
      toast.info('Phone verification is currently disabled');
    } catch (error: any) {
      console.error('Phone auth error:', error);
      toast.error(error.message || 'Failed to send OTP');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1234567890"
          disabled={isLoading}
          {...form.register('phone')}
        />
        {form.formState.errors.phone && (
          <p className="text-sm text-destructive">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Sending code...
          </div>
        ) : (
          'Send verification code'
        )}
      </Button>
    </form>
  );
} 