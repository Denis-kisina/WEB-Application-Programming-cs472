package edu.miu.cs.cs472.lesson13jspmvc.service;

import edu.miu.cs.cs472.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.cs472.lesson13jspmvc.repository.ContactMessageRepository;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class ContactMessageService {
    private ContactMessageRepository contactMessageRepository;


    public ContactMessageService() {
        this.contactMessageRepository = new ContactMessageRepository();
    }

    public List<ContactMessage> getContactMessage() {
        return this.contactMessageRepository.getContactMessages();
    }
    public List<ContactMessage> getContactMessageSorted() {
        return this.contactMessageRepository.getContactMessages().stream()
                .sorted(Comparator.comparing(ContactMessage::getCategory))
                .collect(Collectors.toList());
    }



}
