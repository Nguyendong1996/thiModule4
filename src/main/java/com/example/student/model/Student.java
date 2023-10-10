package com.example.student.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long phoneNumber;
    private String email;
    private LocalDate localDate;
    private String address;
    @ManyToOne
    private ClassRoom classRoom;


}
