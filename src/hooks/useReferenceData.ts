import { useState, useEffect } from 'react';
import { City, Village, Occupation, SubCaste } from '../types';
import { referenceApi } from '../api/reference';

export function useReferenceData() {
  const [cities, setCities] = useState<City[]>([]);
  const [villages, setVillages] = useState<Village[]>([]);
  const [occupations, setOccupations] = useState<Occupation[]>([]);
  const [subCastes, setSubCastes] = useState<SubCaste[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReferenceData = async () => {
      try {
        setIsLoading(true);
        const [citiesData, villagesData, occupationsData, subCastesData] = await Promise.all([
          referenceApi.getCities(),
          referenceApi.getVillages(),
          referenceApi.getOccupations(),
          referenceApi.getSubCastes(),
        ]);

        setCities(citiesData);
        setVillages(villagesData);
        setOccupations(occupationsData);
        setSubCastes(subCastesData);
      } catch (err) {
        setError('Failed to load reference data');
      } finally {
        setIsLoading(false);
      }
    };

    loadReferenceData();
  }, []);

  return {
    cities,
    villages,
    occupations,
    subCastes,
    isLoading,
    error,
  };
}