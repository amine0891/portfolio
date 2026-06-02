package com.portfolio.portfolio.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.portfolio.portfolio.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}   
