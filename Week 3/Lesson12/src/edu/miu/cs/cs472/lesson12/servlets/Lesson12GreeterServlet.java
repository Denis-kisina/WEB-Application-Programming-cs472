package edu.miu.cs.cs472.lesson12.servlets;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "Lesson12GreeterServlet", urlPatterns = {"/Lesson12GreeterServlet", "/lesson12greeter"})
public class Lesson12GreeterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String fullName = request.getParameter("fullName");
        StringBuilder sb = new StringBuilder();

        ServletContext context = request.getServletContext();
        String strAppName = (String)context.getAttribute("AppName");
        sb.append("<h1>" + strAppName + "</h1>");

        sb.append("<h3>Hello, " + fullName + "</h3>");
        sb.append((String) request.getSession().getAttribute("ShoppingCartName"));
        sb.append((String) request.getSession().getAttribute("personId"));
        response.setContentType("text/html");
        response.getWriter().println(sb.toString());
    }
}
