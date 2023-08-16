package com.example.calendarapi.service;

import com.example.calendarapi.entity.Event;
import com.example.calendarapi.repository.EventRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService {
    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }


    public List<Event> getEventsByPeriod(LocalDateTime startPeriod, LocalDateTime endPeriod) {
        return eventRepository.getEventByDateStartBetween(startPeriod, endPeriod);
    };

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
}
