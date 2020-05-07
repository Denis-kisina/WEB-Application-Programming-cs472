package edu.miu.cs.cs472.lesson13jspmvc.controller;

import edu.miu.cs.cs472.lesson13jspmvc.service.ContactMessageService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ContactMessageController", urlPatterns = {"/contact-messages"})
public class ContactMessageController extends HttpServlet {
    public ContactMessageController() {
        //Noop
    }

    private ContactMessageService contactMessageService = new ContactMessageService();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("contactMessages", this.contactMessageService.getContactMessageSorted());
        request.getRequestDispatcher("/WEB-INF/views/contact-messages.jsp").forward(request, response);
    }
}
