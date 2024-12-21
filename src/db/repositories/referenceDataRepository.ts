import { getConnection } from '../config';
import { City, Occupation, Village, SubCaste } from '../../types';

export async function getCities(): Promise<City[]> {
  const pool = await getConnection();
  const result = await pool.query`SELECT * FROM Cities WHERE IsActive = 1`;
  return result.recordset;
}

export async function getOccupations(): Promise<Occupation[]> {
  const pool = await getConnection();
  const result = await pool.query`SELECT * FROM Occupations WHERE IsActive = 1`;
  return result.recordset;
}

export async function getVillages(): Promise<Village[]> {
  const pool = await getConnection();
  const result = await pool.query`SELECT * FROM Villages WHERE IsActive = 1`;
  return result.recordset;
}

export async function getSubCastes(): Promise<SubCaste[]> {
  const pool = await getConnection();
  const result = await pool.query`SELECT * FROM SubCastes WHERE IsActive = 1`;
  return result.recordset;
}