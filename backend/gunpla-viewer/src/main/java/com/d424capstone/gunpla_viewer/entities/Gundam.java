package com.d424capstone.gunpla_viewer.entities;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="gundam")
@Data
public class Gundam {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "release_year")
    private int release_year;
    @Column(name = "grade")
    private String grade;
    @Column(name = "series")
    private String series;
    @Column(name = "box_art")
    private String box_art;
}
