import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { donationSchema, type DonationFormData } from '../../schemas/donationSchema';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface DonationFormProps {
  onSubmit: (data: DonationFormData) => void;
}

export function DonationForm({ onSubmit }: DonationFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <Input
        label="User ID"
        {...register('userId')}
        error={errors.userId?.message}
      />
      
      <Input
        label="Amount"
        type="number"
        {...register('amount', { valueAsNumber: true })}
        error={errors.amount?.message}
      />
      
      <Input
        label="Purpose"
        {...register('purpose')}
        error={errors.purpose?.message}
      />
      
      <Select
        label="Payment Method"
        {...register('paymentMethod')}
        options={[
          { value: 'cash', label: 'Cash' },
          { value: 'online', label: 'Online' },
          { value: 'check', label: 'Check' },
        ]}
        error={errors.paymentMethod?.message}
      />

      <Button type="submit">Record Donation</Button>
    </form>
  );
}