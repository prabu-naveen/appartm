import { api } from './config';
import { User, UserFormData } from '../types';

export const userApi = {
  create: async (data: UserFormData) => {
    const response = await api.post<User>('/users', data);
    return response.data;
  },

  update: async (id: string, data: UserFormData) => {
    const response = await api.put<User>(`/users/${id}`, data);
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  search: async (params: {
    name?: string;
    mobileNumber?: string;
    villageId?: number;
    page?: number;
    size?: number;
  }) => {
    const response = await api.get('/users', { params });
    return response.data;
  },

  delete: async (id: string) => {
    await api.delete(`/users/${id}`);
  },
};