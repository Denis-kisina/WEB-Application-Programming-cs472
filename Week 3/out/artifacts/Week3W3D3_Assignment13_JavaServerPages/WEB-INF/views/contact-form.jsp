<html>
<head>
    <title>Customer Contact Form Assignment 13</title>
    <%@include file="/WEB-INF/fragments/header.jsp" %>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="/Lesson13_JSPMVCDemo/css/style.css">
</head>

<div class="container">

    <h2>Customer Contact Form </h2>
    <% Object objErrMsg = request.getAttribute("errMsgName");
     if (objErrMsg != null) {
        String strErrMsg = (String) objErrMsg;
        out.println(strErrMsg);
    }%>
<%--++++++++++++++++++++++++++++++++++++--%>
<form method="post" action="${pageContext.request.contextPath}/contact-form">
<%

    // read and write existing values
    String customerName = request.getParameter("nameStrd");
    String gender = request.getParameter("genderStrd");
    String category = request.getParameter("categoryStrd");
    String message = request.getParameter("messageStrd");

    out.print(" <div class='row mt-5'>");
    out.print(" <div class='col-12 form-group '>");
        out.print("  <div class='form-group'>");
            out.print("  <label for='nameId'>*Name:</label>");
            if(customerName != null){
            if (customerName.equals("")){
            out.print("<input autofocus class='form-control form-control-lg' type='text' id='nameId' name='nameTextArea' placeholder='e.g. John Smith' />");
            }else {
            out.print("<input autofocus class='form-control form-control-lg' type='text' id='nameId' name='nameTextArea' placeholder='e.g. John Smith' value='" +customerName+ "'/>");
            }
            } else {
            out.print("<input autofocus class='form-control form-control-lg' type='text' id='nameId' name='nameTextArea' placeholder='e.g. John Smith' />");
            }
            out.print("    <p class='text-secondary'>Enter your full name.</p>");
            out.print("   </div>");
        out.print("  <div class='col-12 form-group'>");
            out.print("   <label>*Gender: </label><br>");
            out.print("  <input type='checkbox' id='maleId' name='gender' value='male'" );
            if(gender != null){
            if(gender.equals("male")){
            //                out.print("  <input checked type='checkbox' id='maleId' name='gender' value='male'>" );
            out.print(" checked>");
            }else {
            //                out.print("  <input type='checkbox' id='maleId' name='gender' value='male'>" );
            out.print(">");
            }
            }else {
            out.print("  <input type='checkbox' id='maleId' name='gender' value='male'>" );
            }
            out.print("  <label for='maleId'>Male</label>");
            out.print("     <input type='checkbox' id='femaleId' name='gender' value='female'");
            if(gender != null){
            if(gender.equals("female")){
            //                out.print("     <input checked type='checkbox' id='femaleId' name='gender' value='female'>");
            out.print(" checked>");
            }else {
            //                out.print("  <input type='checkbox' id='femaleId' name='gender' value='female'>" );
            out.print(">");
            }
            }else {
            out.print("  <input type='checkbox' id='femaleId' name='gender' value='female'>" );
            }
            out.print("   <label for='femaleId'>Female</label>");
            out.print("     </div>");
        out.print("  <div class='col-12 form-group'>");
            out.print("    <label for='categoryId'>*Category:</label>");
            out.print("    <select id='categoryId' class='form-control form-control-lg' name='category'>");
                if(category == null) {
                out.print("      <option value='null'>Select...</option>");
                out.print("      <option value='feedback'>Feedback</option>");
                out.print("      <option value='inquiry'>Inquiry</option>");
                out.print("      <option value='complaint'>Complaint</option>");
                } else {
                switch (category) {
                case "null":
                out.print("      <option selected value='null'>Select...</option>");
                out.print("      <option value='feedback'>Feedback</option>");
                out.print("      <option value='inquiry'>Inquiry</option>");
                out.print("      <option value='complaint'>Complaint</option>");
                break;
                case "feedback":
                out.print("      <option value='null'>Select...</option>");
                out.print("      <option selected value='feedback'>Feedback</option>");
                out.print("      <option value='inquiry'>Inquiry</option>");
                out.print("      <option value='complaint'>Complaint</option>");
                break;
                case "inquiry":
                out.print("      <option value='null'>Select...</option>");
                out.print("      <option value='feedback'>Feedback</option>");
                out.print("      <option selected value='inquiry'>Inquiry</option>");
                out.print("      <option value='complaint'>Complaint</option>");
                break;
                case "complaint":
                out.print("      <option value='null'>Select...</option>");
                out.print("      <option value='feedback'>Feedback</option>");
                out.print("      <option value='inquiry'>Inquiry</option>");
                out.print("      <option selected value='complaint'>Complaint</option>");
                break;
                default:
                break;
                }
                }
                out.print("    </select>");
            out.print("   </div>");
        out.print("  <div class='col-12 form-group'>");
            out.print("     <label for='messageId'>*Message:</label>");
            if(message != null){
            if(message.equals("")){
            out.print("<textarea class='form-control' id='messageId' rows='3' name='txtArea'></textarea>");
            }else {
            out.print("<textarea class='form-control' id='messageId' rows='3' name='txtArea'>"+message+"</textarea>");
            }
            }else {
            out.print("<textarea class='form-control' id='messageId' rows='3' name='txtArea'></textarea>");
            }

            out.print("</div>");
        out.print("<div class='col-12 form-group'>");
            out.print("<input id='submit' class='col-12 btn btn-primary btn-lg' type='submit' value='Submit'>");
            out.print("</div>");

        out.print("<p>Hit Count for this page:"+ request.getServletContext().getAttribute("totalHitCount")+ "</p>");
        out.print(" </div>");
    out.print(" </div>");
    out.print("</form>");
    out.print(" </div>");
    %>
    
    

<%--    <form method="post" action="${pageContext.request.contextPath}/contact-form">--%>
<%--        <div class="row mt-5">--%>
<%--            <div class="col-12 form-group ">--%>
<%--                <div class="form-group">--%>
<%--                    <label for="nameId">*Name:</label>--%>
<%--                    <%--%>
<%--                        String customerName = request.getParameter("nameStrd");--%>
<%--                        if (customerName != null) {--%>
<%--                            if (customerName.equals("")) {--%>
<%--                                out.print("<input autofocus class='form-control form-control-lg' type='text' id='nameId' name='nameTextArea' placeholder='e.g. John Smith' />");--%>
<%--                            } else {--%>
<%--                                out.print ("<input autofocus class='form-control form-control-lg' type='text' id='nameId' name='nameTextArea' placeholder='e.g. John Smith' value='" + customerName + "'/>");--%>
<%--                            }--%>
<%--                        } else {--%>
<%--                            out.print("<input autofocus class='form-control form-control-lg' type='text' id='nameId' name='nameTextArea' placeholder='e.g. John Smith' />");--%>
<%--                        }%>--%>
<%--                    <input autofocus class="form-control form-control-lg" type="text" id="nameId" name="nameTextArea"--%>
<%--                           placeholder="e.g. John Smith"/>--%>

<%--                    <p class="text-secondary">Enter your full name.</p>--%>
<%--                </div>--%>
<%--                <div class="col-12 form-group">--%>
<%--                    <label>*Gender: </label><br>--%>
<%--                    <input type="checkbox" id="maleId" name="gender" value="male">--%>
<%--                    <label for="maleId">Male</label>--%>
<%--                    <input type="checkbox" id="femaleId" name="gender" value="female">--%>
<%--                    <label for="femaleId">Female</label>--%>
<%--                </div>--%>
<%--                <div class="col-12 form-group">--%>
<%--                    <label for="categoryId">*Category:</label>--%>
<%--                    <select id="categoryId" class="form-control form-control-lg" name="category">--%>

<%--                        <option value="null">Select...</option>--%>
<%--                        <option value="feedback">Feedback</option>--%>
<%--                        <option value="inquiry">Inquiry</option>--%>
<%--                        <option value="complaint">Complaint</option>--%>

<%--                    </select>--%>
<%--                </div>--%>
<%--                <div class="col-12 form-group">--%>
<%--                    <label for="messageId">*Message:</label>--%>
<%--                    <textarea class="form-control" id="messageId" rows="3" name="txtArea"></textarea>--%>

<%--                </div>--%>
<%--                <div class="col-12 form-group">--%>
<%--                    <input name="submit" class="col-12 btn btn-primary btn-lg" type="submit" value="Submit">--%>
<%--                </div>--%>

<%--                <p>Hit Count for this page:</p>--%>
<%--            </div>--%>
<%--        </div>--%>
<%--    </form>--%>
</div>
<%@include file="/WEB-INF/fragments/footer.jsp" %>
</body>
</html>

