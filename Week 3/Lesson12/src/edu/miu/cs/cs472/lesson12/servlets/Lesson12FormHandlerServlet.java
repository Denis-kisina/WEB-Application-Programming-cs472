package edu.miu.cs.cs472.lesson12.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet(name = "Lesson12FormHandlerServlet", urlPatterns = {"/Lesson12FormHandlerServlet", "/lesson12formhandler"})
public class Lesson12FormHandlerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Hanlder form-data submission here
        // Check for missing data, name; if missing go back to form
        //if name is present, ok
        String fullName = request.getParameter("txtFullName");
        String personId = request.getParameter("personId");
        //use personId

        if(fullName == "" || fullName == null){
            //go back to the form
            String errMsg = "<span style='color:red;'>Your Name is required</span><br />";
            request.setAttribute("errMsg", errMsg);
            //forward back to the form servlet
            request.getRequestDispatcher("/lesson12").forward(request, response);
        }else {
            //go to greeting page
            HttpSession session = request.getSession(true);
            session.setAttribute("ShoppingCartName", "Shopping cart for " + fullName);
            session.setAttribute("personId", "Hello " + fullName + "Your id is " + personId);
            String url = "lesson12greeter?fullName=" + fullName;
            response.sendRedirect(url); // HTTP response code 302
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
