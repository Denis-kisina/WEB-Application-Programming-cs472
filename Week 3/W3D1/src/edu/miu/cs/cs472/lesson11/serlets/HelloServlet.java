package edu.miu.cs.cs472.lesson11.serlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;

@WebServlet(name = "HelloServlet", urlPatterns = {"/HelloServlet", "/hello"})
public class HelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter printWriter = response.getWriter();
        response.setContentType("text/html"); //MIME-type -- text/html
        response.setBufferSize(1024);
        String strHelloMessage = "<h1>Hello Servlet 4.0</h1>";
        String strCurrentDateTime = LocalDateTime.now().toString();
        strHelloMessage += "<h3>The current date and time on the server is " + strCurrentDateTime + "</h3>";

        printWriter.println(strHelloMessage);
    }
}
