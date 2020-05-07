package edu.miu.cs.cs472.lesson13jspmvc.controller;

import edu.miu.cs.cs472.lesson13jspmvc.service.ContactMessageService;
import edu.miu.cs.cs472.lesson13jspmvc.service.SearchedMessageService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "SearchMessageController", urlPatterns = {"/searchMessageController"})
public class SearchMessageController extends HttpServlet {

    private SearchedMessageService searchedMessageService = new SearchedMessageService();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("contactMessages", this.searchedMessageService.searchContactMessage(request.getParameter("searchItem")));
        System.out.println((String) request.getAttribute("searchItem"));
        request.getRequestDispatcher("/WEB-INF/views/search-results.jsp").forward(request, response);
    }
}
