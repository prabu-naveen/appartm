import { api } from './config';
import { City, Village, Occupation, SubCaste } from '../types';

export const referenceApi = {
  getCities: async () => {
    const response = await api.get<City[]>('/reference/cities');
    return response.data;
  },

  getVillages: async () => {
    const response = await api.get<Village[]>('/reference/villages');
    return response.data;
  },

  getOccupations: async () => {
    const response = await api.get<Occupation[]>('/reference/occupations');
    return response.data;
  },

  getSubCastes: async () => {
    const response = await api.get<SubCaste[]>('/reference/sub-castes');
    return response.data;
  },
};