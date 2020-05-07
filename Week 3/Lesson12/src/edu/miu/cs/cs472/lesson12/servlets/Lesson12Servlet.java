package edu.miu.cs.cs472.lesson12.servlets;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "Lesson12Servlet", urlPatterns = {"/Lesson12Servlet", "/lesson12"})
public class Lesson12Servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        response.setBufferSize(8192);
        StringBuilder sb = new StringBuilder();
        sb.append("<html>");
        ServletContext context = request.getServletContext();
        context.setAttribute("AppName", "My Lesson12 Java Webapp");

        sb.append("<h1>My Lesson12 Java Webapp</h1>");
        sb.append("<form action='./lesson12formhandler' method='post'>");
        Object objErrMsg = request.getAttribute("errMsg");
        if(objErrMsg != null){
            String strErrMsg = (String)objErrMsg;
            sb.append(strErrMsg);
        }
        sb.append("<input name='personId' type='hidden' value='1001'>");
        sb.append("<input name='txtFullName' type='text'>");
        sb.append("<input name='btnSubmit' value='submit' type='submit'>");
        sb.append("<br><h3>Number of visits:" + (Integer)request.getServletContext().getAttribute("totalHitCount") + "</h3>");
        sb.append("</form>");
        sb.append("</html>");
        Cookie cookie = new Cookie("default-name", "No_name");
        cookie.setMaxAge(10);
        response.addCookie(cookie);
        PrintWriter printWriter = response.getWriter();
        printWriter.println(sb.toString());

    }
}
