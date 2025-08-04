package com.example.calculator.controller;
import com.example.calculator.model.CalculationLog;
import com.example.calculator.repository.CalculationLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/logs")
public class LogController {
    @Autowired
    private CalculationLogRepository repo;
    @PostMapping
    public CalculationLog saveLog(@RequestBody CalculationLog log) {
        return repo.save(log);
    }
    @GetMapping
    public List<CalculationLog> getAllLogs() {
        return repo.findAll();
    }
}
