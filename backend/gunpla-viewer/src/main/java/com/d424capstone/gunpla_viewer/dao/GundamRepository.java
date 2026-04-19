package com.d424capstone.gunpla_viewer.dao;

import com.d424capstone.gunpla_viewer.entities.Gundam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(originPatterns = {
        "http://localhost:4200",
        "https://*.vercel.app"
})
@RepositoryRestResource(collectionResourceRel = "gundams", path = "gundam")
public interface GundamRepository extends JpaRepository<Gundam, Integer> {

    Page<Gundam> findByNameContaining(@Param("name") String name, Pageable page);

    Page<Gundam> findByGrade(@Param("grade") String grade, Pageable page);

}
