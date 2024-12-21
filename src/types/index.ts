export interface User {
  id: string;
  name: string;
  mobileNumber: string;
  dateOfBirth: Date;
  wifeName: string | null;
  wifeDateOfBirth: Date | null;
  fatherName: string;
  fatherMobileNumber: string;
  weddingDate: Date | null;
  address: string;
  cityId: number;
  occupationId: number;
  villageId: number;
  subCasteId: number;
  children?: Child[];
}

export interface Child {
  id: string;
  userId: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: Date;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  mobileNumber: string | null;
  occupationId: number | null;
}

export interface ReferenceData {
  id: number;
  name: string;
  isActive: boolean;
}

export interface City extends ReferenceData {}
export interface Occupation extends ReferenceData {}
export interface Village extends ReferenceData {}
export interface SubCaste extends ReferenceData {}