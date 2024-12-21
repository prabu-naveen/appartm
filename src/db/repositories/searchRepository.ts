import { getConnection } from '../config';
import { User } from '../../types';
import sql from 'mssql';

export async function searchUsers(params: {
  name?: string;
  mobileNumber?: string;
  villageId?: number;
  page?: number;
  pageSize?: number;
}): Promise<{ users: User[]; total: number }> {
  const pool = await getConnection();
  const page = params.page || 1;
  const pageSize = params.pageSize || 10;
  const offset = (page - 1) * pageSize;

  let query = `
    SELECT 
      u.*,
      COUNT(*) OVER() as TotalCount
    FROM Users u
    WHERE IsActive = 1
  `;

  const queryParams: any = {};

  if (params.name) {
    query += ` AND u.Name LIKE @name`;
    queryParams.name = `%${params.name}%`;
  }

  if (params.mobileNumber) {
    query += ` AND u.MobileNumber LIKE @mobileNumber`;
    queryParams.mobileNumber = `%${params.mobileNumber}%`;
  }

  if (params.villageId) {
    query += ` AND u.VillageId = @villageId`;
    queryParams.villageId = params.villageId;
  }

  query += `
    ORDER BY u.Name
    OFFSET @offset ROWS
    FETCH NEXT @pageSize ROWS ONLY
  `;

  const request = pool.request();
  Object.entries(queryParams).forEach(([key, value]) => {
    request.input(key, value);
  });
  request.input('offset', sql.Int, offset);
  request.input('pageSize', sql.Int, pageSize);

  const result = await request.query(query);

  return {
    users: result.recordset,
    total: result.recordset[0]?.TotalCount || 0,
  };
}