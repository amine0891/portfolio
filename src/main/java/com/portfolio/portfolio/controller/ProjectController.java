package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.model.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {

    @GetMapping("/api/projects")
    public List<Project> getProjects() {
        return List.of(
                new Project("Real time Credit card FraudDetection",
                        "This project implements a scalable, real-time fraud detection pipeline using Apache Spark, Kafka, Hudi, and Presto. It processes large-scale transaction data in real time, leveraging stream and batch processing to detect fraudulent activities efficiently.",
                        "https://github.com/amine0891/Fraud-Detection-with-Real-Time-Big-Data-Processing/tree/main",
                        "/md/fraud.md"),
                new Project("Car Sales and Traceability on Blockchain",
                        " Innovative platform that streamlines the sale and registration of vehicles, with manufacturer-certified ownership records and a full audit trail of all previous owners",
                        "https://github.com/amine0891/CarSaleDapp/tree/main", "/md/carSales.md"),
                new Project("Job-Offers Statistics",
                        "Application de web scraping permettant de collecter et d’analyser les statistiques des offres d’emploi en Tunisie",
                        "https://github.com/amine0891/job-offers-scraping-tunisia", "/md/jobsScrap.md")
                

        );
    }

}