package edu.miu.cs.cs472.lesson13jspmvc.repository;

import edu.miu.cs.cs472.lesson13jspmvc.model.ContactMessage;

import java.util.Arrays;
import java.util.List;

public class ContactMessageRepository {
    private List<ContactMessage> contactMessages = Arrays.asList(
            new ContactMessage("John H. Smith", "Male", "Feedback", "This is a feedback"),
            new ContactMessage("Anna Jones", "Female", "Inquiry", "This is an inquiry"),
            new ContactMessage("Bob W. Adamson", "Male", "Complaint", "This is a complaint "),
            new ContactMessage("Zacary Najib Ali", "Male", "Inquiry", "This is an inquiry"),
            new ContactMessage("Carlos Hernandez", "Male", "Inquiry", "This is an inquiry"),
            new ContactMessage("Tuyen Le Nguyen", "Female", "Feedback", "This is a Feedback")
    );

    public ContactMessageRepository() {
    }

    public List<ContactMessage> getContactMessages() {
        return contactMessages;
    }
}
