package com.example.calendarapi.repository;

import com.example.calendarapi.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> getEventByDateStartBetween(LocalDateTime dateStart, LocalDateTime dateStart2);
}
