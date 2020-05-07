package edu.miu.cs.cs472.lesson13jspmvc.service;

import edu.miu.cs.cs472.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.cs472.lesson13jspmvc.repository.ContactMessageRepository;

import java.util.List;
import java.util.stream.Collectors;

public class SearchedMessageService {
    private ContactMessageRepository contactMessageRepository;

    public SearchedMessageService() {
        this.contactMessageRepository =  new ContactMessageRepository();
    }

    public List<ContactMessage> searchContactMessage(String item) {
        return this.contactMessageRepository.getContactMessages().stream()
                .filter(str -> str.getCategory().equalsIgnoreCase(item))
                .collect(Collectors.toList());
    }
}
