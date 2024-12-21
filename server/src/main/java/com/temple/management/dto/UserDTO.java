package com.temple.management.dto;

import lombok.Data;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Data
public class UserDTO {
    private UUID id;
    private String name;
    private String mobileNumber;
    private LocalDate dateOfBirth;
    private String wifeName;
    private LocalDate wifeDateOfBirth;
    private String fatherName;
    private String fatherMobileNumber;
    private LocalDate weddingDate;
    private String address;
    private Integer cityId;
    private Integer occupationId;
    private Integer villageId;
    private Integer subCasteId;
    private List<ChildDTO> children;
}