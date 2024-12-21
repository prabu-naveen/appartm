package com.temple.management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Occupations")
public class Occupation extends ReferenceEntity {}