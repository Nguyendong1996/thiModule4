package com.example.student.controller;

import com.example.student.model.ClassRoom;
import com.example.student.service.IClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("api/classRooms")
public class ClassRoomController {
    @Autowired
    private IClassRoomService classRoomService;
    @GetMapping
    public ResponseEntity<Iterable<ClassRoom>> showList(){
        return new ResponseEntity<>(classRoomService.findAll(), HttpStatus.OK);
    }
}
