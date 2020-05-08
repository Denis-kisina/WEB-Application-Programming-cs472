<%@ page language="java" contentType="text/html; ISO-8859-1" pageEncoding="UTF-8" %>>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CS472-WAP-Lesson13 JSP-MVC-Search-Results</title>
    <%--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">--%>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="/Lesson13_JSPMVCDemo/css/style.css">
</head>
<body>
    <%@include file="/WEB-INF/fragments/header.jsp"%>

    <div class="container">
        <h2>List of Search Results</h2>
        <br>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Category</th>
                <th scope="col">Message</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="contactData" items="${contactMessages}" varStatus="iteration">
                <tr>
                    <th scope="row"><c:out value="${iteration.index+1}"></c:out></th>
                    <td><c:out value="${contactData.customerName}"></c:out></td>
                    <td><c:out value="${contactData.gender}"></c:out></td>
                    <td><c:out value="${contactData.category}"></c:out></td>
                    <td><c:out value="${contactData.message}"></c:out></td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>

</body>
</html>

