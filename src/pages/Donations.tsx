import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Donation } from '../types';

const donationSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  purpose: z.string().min(2, 'Purpose must be at least 2 characters'),
  paymentMethod: z.enum(['cash', 'online', 'check']),
});

type DonationFormData = z.infer<typeof donationSchema>;

export function Donations() {
  const [donations, setDonations] = React.useState<Donation[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
  });

  const onSubmit = (data: DonationFormData) => {
    const newDonation: Donation = {
      id: Date.now().toString(),
      ...data,
      date: new Date(),
      receiptNumber: `RCP${Math.floor(Math.random() * 10000)}`,
    };
    setDonations([...donations, newDonation]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Donation Management</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              {...register('userId')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
            {errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              {...register('amount', { valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Purpose</label>
            <input
              {...register('purpose')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
            {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <select
              {...register('paymentMethod')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            >
              <option value="cash">Cash</option>
              <option value="online">Online</option>
              <option value="check">Check</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Record Donation
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Donation History</h3>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.receiptNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{donation.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{donation.purpose}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{donation.paymentMethod}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(donation.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}