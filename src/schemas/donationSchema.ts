import { z } from 'zod';

export const donationSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  purpose: z.string().min(2, 'Purpose must be at least 2 characters'),
  paymentMethod: z.enum(['cash', 'online', 'check']),
});

export type DonationFormData = z.infer<typeof donationSchema>;