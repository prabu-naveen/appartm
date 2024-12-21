import sql from 'mssql';
import { getConnection } from '../config';
import { User, Child } from '../../types';

export async function createUser(user: Omit<User, 'id'>) {
  const pool = await getConnection();
  
  const result = await pool.request()
    .input('name', sql.NVarChar, user.name)
    .input('mobileNumber', sql.NVarChar, user.mobileNumber)
    .input('dateOfBirth', sql.Date, user.dateOfBirth)
    .input('wifeName', sql.NVarChar, user.wifeName)
    .input('wifeDateOfBirth', sql.Date, user.wifeDateOfBirth)
    .input('fatherName', sql.NVarChar, user.fatherName)
    .input('fatherMobileNumber', sql.NVarChar, user.fatherMobileNumber)
    .input('weddingDate', sql.Date, user.weddingDate)
    .input('address', sql.NVarChar, user.address)
    .input('cityId', sql.Int, user.cityId)
    .input('occupationId', sql.Int, user.occupationId)
    .input('villageId', sql.Int, user.villageId)
    .input('subCasteId', sql.Int, user.subCasteId)
    .query(`
      INSERT INTO Users (
        Name, MobileNumber, DateOfBirth, WifeName, WifeDateOfBirth,
        FatherName, FatherMobileNumber, WeddingDate, Address,
        CityId, OccupationId, VillageId, SubCasteId
      )
      OUTPUT INSERTED.Id
      VALUES (
        @name, @mobileNumber, @dateOfBirth, @wifeName, @wifeDateOfBirth,
        @fatherName, @fatherMobileNumber, @weddingDate, @address,
        @cityId, @occupationId, @villageId, @subCasteId
      );
    `);

  return result.recordset[0].Id;
}

export async function addChild(child: Omit<Child, 'id'>) {
  const pool = await getConnection();
  
  const result = await pool.request()
    .input('userId', sql.UniqueIdentifier, child.userId)
    .input('name', sql.NVarChar, child.name)
    .input('gender', sql.NVarChar, child.gender)
    .input('dateOfBirth', sql.Date, child.dateOfBirth)
    .input('maritalStatus', sql.NVarChar, child.maritalStatus)
    .input('mobileNumber', sql.NVarChar, child.mobileNumber)
    .input('occupationId', sql.Int, child.occupationId)
    .query(`
      INSERT INTO Children (
        UserId, Name, Gender, DateOfBirth,
        MaritalStatus, MobileNumber, OccupationId
      )
      OUTPUT INSERTED.Id
      VALUES (
        @userId, @name, @gender, @dateOfBirth,
        @maritalStatus, @mobileNumber, @occupationId
      );
    `);

  return result.recordset[0].Id;
}

export async function getUserWithChildren(userId: string): Promise<User & { children: Child[] }> {
  const pool = await getConnection();
  
  const user = await pool.request()
    .input('userId', sql.UniqueIdentifier, userId)
    .query(`
      SELECT * FROM Users WHERE Id = @userId;
      SELECT * FROM Children WHERE UserId = @userId;
    `);

  return {
    ...user.recordsets[0][0],
    children: user.recordsets[1]
  };
}