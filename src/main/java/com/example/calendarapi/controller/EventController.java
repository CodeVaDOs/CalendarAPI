package com.example.calendarapi.controller;

import com.example.calendarapi.entity.Event;
import com.example.calendarapi.service.EventService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RequestMapping("api/v1/event")
@CrossOrigin("http://localhost:5173")
@RestController
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> getEventsByPeriod(@RequestParam("start_period") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startPeriod,
                                    @RequestParam("end_period") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endPeriod) {
        return eventService.getEventsByPeriod(startPeriod, endPeriod);
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }
}
