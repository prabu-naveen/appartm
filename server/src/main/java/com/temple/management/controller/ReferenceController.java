package com.temple.management.controller;

import com.temple.management.entity.*;
import com.temple.management.service.ReferenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reference")
@RequiredArgsConstructor
public class ReferenceController {
    private final ReferenceService referenceService;

    @GetMapping("/cities")
    public ResponseEntity<List<City>> getCities() {
        return ResponseEntity.ok(referenceService.getCities());
    }

    @GetMapping("/villages")
    public ResponseEntity<List<Village>> getVillages() {
        return ResponseEntity.ok(referenceService.getVillages());
    }

    @GetMapping("/occupations")
    public ResponseEntity<List<Occupation>> getOccupations() {
        return ResponseEntity.ok(referenceService.getOccupations());
    }

    @GetMapping("/sub-castes")
    public ResponseEntity<List<SubCaste>> getSubCastes() {
        return ResponseEntity.ok(referenceService.getSubCastes());
    }
}