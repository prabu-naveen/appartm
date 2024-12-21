import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  mobileNumber: z.string().min(10, 'Mobile number must be at least 10 digits'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  wifeName: z.string().nullable(),
  wifeDateOfBirth: z.string().nullable(),
  fatherName: z.string().min(2, 'Father name is required'),
  fatherMobileNumber: z.string().min(10, 'Father mobile number must be at least 10 digits'),
  weddingDate: z.string().nullable(),
  address: z.string().min(5, 'Address is required'),
  cityId: z.number().min(1, 'City is required'),
  occupationId: z.number().min(1, 'Occupation is required'),
  villageId: z.number().min(1, 'Village is required'),
  subCasteId: z.number().min(1, 'Sub caste is required'),
  children: z.array(z.object({
    name: z.string().min(2, 'Child name is required'),
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().min(1, 'Child date of birth is required'),
    maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),
    mobileNumber: z.string().nullable(),
    occupationId: z.number().nullable()
  })).optional()
});

export type UserFormData = z.infer<typeof userSchema>;