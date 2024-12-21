package com.temple.management.dto;

import com.temple.management.entity.Child.Gender;
import com.temple.management.entity.Child.MaritalStatus;
import lombok.Data;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class ChildDTO {
    private UUID id;
    private String name;
    private Gender gender;
    private LocalDate dateOfBirth;
    private MaritalStatus maritalStatus;
    private String mobileNumber;
    private Integer occupationId;
}