package com.temple.management.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String mobileNumber;

    @Column(nullable = false)
    private LocalDate dateOfBirth;

    private String wifeName;
    private LocalDate wifeDateOfBirth;

    @Column(nullable = false)
    private String fatherName;

    @Column(nullable = false)
    private String fatherMobileNumber;

    private LocalDate weddingDate;

    @Column(nullable = false)
    private String address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cityId")
    private City city;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "occupationId")
    private Occupation occupation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "villageId")
    private Village village;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subCasteId")
    private SubCaste subCaste;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Child> children = new ArrayList<>();
}