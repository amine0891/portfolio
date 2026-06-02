package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.model.Contact;
import com.portfolio.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ContactController {

    @Autowired
    private ContactRepository repo;

    @PostMapping("/contact")
    public String saveContact(@RequestBody Contact contact) {
        repo.save(contact);
        return "Message enregistré !";
    }
}