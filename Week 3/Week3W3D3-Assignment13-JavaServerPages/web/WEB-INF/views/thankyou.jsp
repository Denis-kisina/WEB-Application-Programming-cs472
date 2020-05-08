<%@ page import="java.time.format.DateTimeFormatter" %>
<%@ page import="java.time.LocalDate" %><%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 5/7/20
  Time: 04:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Thank You!</title>
    <%--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">--%>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="/Lesson13_JSPMVCDemo/css/style.css">
</head>
<body>
<%@include file="/WEB-INF/fragments/header.jsp" %>
<div class="container">

    <div class='container border mt-5'>
        <div class='col-12 form-group mb-5 mt-1'>
            <p class='text-secondary float-right'> <% out.print(LocalDate.now().format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))); %> </p>
        </div>
        <div class='col-12 form-group bg-light mt-5'>
            <h1>Thank You! Your message has been received as follows:</h1>
        </div>
        <div class='col-12 form-group mt-5'>
            <p>Name: <%= request.getParameter("nameTextArea")%></p>
        </div>
        <div class='col-12 form-group mt-5'>
            <p> Gender: <%= request.getParameter("gender")%></p>

        </div>
        <div class='col-12 form-group mt-5'>
            <p>Category: <%= request.getParameter("category")%></p>
        </div>
        <div class='col-12 form-group mt-5'>
            <p>Message: <%= request.getParameter("txtArea")%></p>
        </div>

    </div>

</div>
<%@include file="/WEB-INF/fragments/footer.jsp" %>
</body>
</html>
