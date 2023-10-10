package com.example.student.repository;

import com.example.student.model.ClassRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRoomRepository extends JpaRepository<ClassRoom,Long> {
}
