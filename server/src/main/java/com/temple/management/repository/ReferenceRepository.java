package com.temple.management.repository;

import com.temple.management.entity.ReferenceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import java.util.List;

@NoRepositoryBean
public interface ReferenceRepository<T extends ReferenceEntity> extends JpaRepository<T, Integer> {
    List<T> findByIsActiveTrue();
}