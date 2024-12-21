package com.temple.management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "Villages")
public class Village extends ReferenceEntity {}