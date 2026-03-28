package com.d424capstone.gunpla_viewer.dao;

import com.d424capstone.gunpla_viewer.entities.Gundam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "gundam", path = "gundam")
public interface GundamRepository extends JpaRepository<Gundam, Integer> {


}
