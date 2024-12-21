-- Reference Tables
CREATE TABLE Cities (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    IsActive BIT DEFAULT 1
);

CREATE TABLE Occupations (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    IsActive BIT DEFAULT 1
);

CREATE TABLE Villages (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    IsActive BIT DEFAULT 1
);

CREATE TABLE SubCastes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    IsActive BIT DEFAULT 1
);

-- Main User Table
CREATE TABLE Users (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Name NVARCHAR(100) NOT NULL,
    MobileNumber NVARCHAR(15) NOT NULL,
    DateOfBirth DATE NOT NULL,
    WifeName NVARCHAR(100),
    WifeDateOfBirth DATE,
    FatherName NVARCHAR(100) NOT NULL,
    FatherMobileNumber NVARCHAR(15) NOT NULL,
    WeddingDate DATE,
    Address NVARCHAR(500) NOT NULL,
    CityId INT FOREIGN KEY REFERENCES Cities(Id),
    OccupationId INT FOREIGN KEY REFERENCES Occupations(Id),
    VillageId INT FOREIGN KEY REFERENCES Villages(Id),
    SubCasteId INT FOREIGN KEY REFERENCES SubCastes(Id),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2,
    IsActive BIT DEFAULT 1
);

-- Children Table
CREATE TABLE Children (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    UserId UNIQUEIDENTIFIER FOREIGN KEY REFERENCES Users(Id),
    Name NVARCHAR(100) NOT NULL,
    Gender NVARCHAR(10) NOT NULL CHECK (Gender IN ('male', 'female', 'other')),
    DateOfBirth DATE NOT NULL,
    MaritalStatus NVARCHAR(20) NOT NULL CHECK (MaritalStatus IN ('single', 'married', 'divorced', 'widowed')),
    MobileNumber NVARCHAR(15),
    OccupationId INT FOREIGN KEY REFERENCES Occupations(Id),
    CreatedAt DATETIME2 DEFAULT GETDATE(),
    UpdatedAt DATETIME2,
    IsActive BIT DEFAULT 1
);