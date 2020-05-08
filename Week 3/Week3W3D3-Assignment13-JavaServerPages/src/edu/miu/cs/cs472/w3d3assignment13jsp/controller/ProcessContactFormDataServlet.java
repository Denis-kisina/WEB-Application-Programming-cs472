package edu.miu.cs.cs472.w3d3assignment13jsp.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "ProcessContactFormDataServlet", urlPatterns = {"/contact-form"})
public class ProcessContactFormDataServlet extends HttpServlet {
    public ProcessContactFormDataServlet() {
        super();
        //NOOP
    }

    @Override
    public void init() throws ServletException {
        super.init();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String missingFieldsMsg = "";
        String fullName = request.getParameter("nameTextArea");
        String gender = request.getParameter("gender");
        String category = request.getParameter("category");
        String msgArea = request.getParameter("txtArea");

        //check for missing fields data
        if(fullName.equals("")){
            missingFieldsMsg += "<span style='color:red;'>Your Name is required!</span><br />";
        }

        if (category.equals("null")) {
            missingFieldsMsg += "<span style='color:red;'>Category is missing.</span><br />";
        }
        if (gender == null){
            missingFieldsMsg += "<span style='color:red;'>Gender is missing.</span><br />";
        }
        if (msgArea.equals("")){
            missingFieldsMsg += "<span style='color:red;'>Message is missing.</span><br />";
        }
        if(!missingFieldsMsg.equals("")){
            //
            request.setAttribute("errMsgName", missingFieldsMsg);

            // Store Data in fields in HttpSession
            request.getSession(true).setAttribute("nameStrd", fullName);
            request.getSession(true).setAttribute("genderStrd", gender);
            request.getSession(true).setAttribute("categoryStrd", category);
            request.getSession(true).setAttribute("messageStrd", msgArea);
            // forward back to sender

             response.sendRedirect("/WEB-INF/views/contact-form.jsp");
//            request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);
        }
        else {
            //go thank you page
            HttpSession session = request.getSession(true);
            session.setAttribute("Name",fullName);
            session.setAttribute("Gender", gender);
            session.setAttribute("Category", category);
            session.setAttribute("TxtArea", msgArea);

            request.getRequestDispatcher("/WEB-INF/views/thankyou.jsp").forward(request, response);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);
    }

}
