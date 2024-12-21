import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, type UserFormData } from '../../schemas/userSchema';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { City, Occupation, Village, SubCaste } from '../../types';
import { getCities, getOccupations, getVillages, getSubCastes } from '../../db/repositories/referenceDataRepository';

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [occupations, setOccupations] = useState<Occupation[]>([]);
  const [villages, setVillages] = useState<Village[]>([]);
  const [subCastes, setSubCastes] = useState<SubCaste[]>([]);

  const { register, control, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      children: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "children"
  });

  useEffect(() => {
    const loadReferenceData = async () => {
      const [citiesData, occupationsData, villagesData, subCastesData] = await Promise.all([
        getCities(),
        getOccupations(),
        getVillages(),
        getSubCastes()
      ]);

      setCities(citiesData);
      setOccupations(occupationsData);
      setVillages(villagesData);
      setSubCastes(subCastesData);
    };

    loadReferenceData();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Name"
          {...register('name')}
          error={errors.name?.message}
        />
        
        <Input
          label="Mobile Number"
          {...register('mobileNumber')}
          error={errors.mobileNumber?.message}
        />
        
        <Input
          label="Date of Birth"
          type="date"
          {...register('dateOfBirth')}
          error={errors.dateOfBirth?.message}
        />
        
        <Input
          label="Wife Name"
          {...register('wifeName')}
          error={errors.wifeName?.message}
        />
        
        <Input
          label="Wife Date of Birth"
          type="date"
          {...register('wifeDateOfBirth')}
          error={errors.wifeDateOfBirth?.message}
        />
        
        <Input
          label="Father Name"
          {...register('fatherName')}
          error={errors.fatherName?.message}
        />
        
        <Input
          label="Father Mobile Number"
          {...register('fatherMobileNumber')}
          error={errors.fatherMobileNumber?.message}
        />
        
        <Input
          label="Wedding Date"
          type="date"
          {...register('weddingDate')}
          error={errors.weddingDate?.message}
        />
        
        <Input
          label="Address"
          {...register('address')}
          error={errors.address?.message}
        />
        
        <Select
          label="City"
          {...register('cityId', { valueAsNumber: true })}
          options={cities.map(city => ({ value: city.id.toString(), label: city.name }))}
          error={errors.cityId?.message}
        />
        
        <Select
          label="Occupation"
          {...register('occupationId', { valueAsNumber: true })}
          options={occupations.map(occupation => ({ value: occupation.id.toString(), label: occupation.name }))}
          error={errors.occupationId?.message}
        />
        
        <Select
          label="Village"
          {...register('villageId', { valueAsNumber: true })}
          options={villages.map(village => ({ value: village.id.toString(), label: village.name }))}
          error={errors.villageId?.message}
        />
        
        <Select
          label="Sub Caste"
          {...register('subCasteId', { valueAsNumber: true })}
          options={subCastes.map(subCaste => ({ value: subCaste.id.toString(), label: subCaste.name }))}
          error={errors.subCasteId?.message}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Children</h3>
          <Button
            type="button"
            onClick={() => append({
              name: '',
              gender: 'male',
              dateOfBirth: '',
              maritalStatus: 'single',
              mobileNumber: null,
              occupationId: null
            })}
          >
            Add Child
          </Button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Child {index + 1}</h4>
              <Button
                type="button"
                variant="secondary"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Name"
                {...register(`children.${index}.name`)}
                error={errors.children?.[index]?.name?.message}
              />
              
              <Select
                label="Gender"
                {...register(`children.${index}.gender`)}
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' }
                ]}
                error={errors.children?.[index]?.gender?.message}
              />
              
              <Input
                label="Date of Birth"
                type="date"
                {...register(`children.${index}.dateOfBirth`)}
                error={errors.children?.[index]?.dateOfBirth?.message}
              />
              
              <Select
                label="Marital Status"
                {...register(`children.${index}.maritalStatus`)}
                options={[
                  { value: 'single', label: 'Single' },
                  { value: 'married', label: 'Married' },
                  { value: 'divorced', label: 'Divorced' },
                  { value: 'widowed', label: 'Widowed' }
                ]}
                error={errors.children?.[index]?.maritalStatus?.message}
              />
              
              <Input
                label="Mobile Number"
                {...register(`children.${index}.mobileNumber`)}
                error={errors.children?.[index]?.mobileNumber?.message}
              />
              
              <Select
                label="Occupation"
                {...register(`children.${index}.occupationId`, { valueAsNumber: true })}
                options={[
                  { value: '', label: 'Select Occupation' },
                  ...occupations.map(occupation => ({
                    value: occupation.id.toString(),
                    label: occupation.name
                  }))
                ]}
                error={errors.children?.[index]?.occupationId?.message}
              />
            </div>
          </div>
        ))}
      </div>

      <Button type="submit" className="w-full">Save User</Button>
    </form>
  );
}