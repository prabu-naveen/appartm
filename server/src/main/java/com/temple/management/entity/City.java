package com.temple.management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cities")
public class City extends ReferenceEntity {}