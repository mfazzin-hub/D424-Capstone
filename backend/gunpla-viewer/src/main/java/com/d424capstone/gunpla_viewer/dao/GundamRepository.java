package com.d424capstone.gunpla_viewer.dao;

import com.d424capstone.gunpla_viewer.entities.Gundam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "gundams", path = "gundam")
public interface GundamRepository extends JpaRepository<Gundam, Integer> {


}
