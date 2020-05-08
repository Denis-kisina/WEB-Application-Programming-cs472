
<body>
<%@include file="/WEB-INF/fragments/header.jsp" %>
<div class="container">

    <h2>Customer Contact Form </h2>
    <form method="post" action="/ProcessContactFormDataServlet">


        <div class="row mt-5">
            <div class="col-12 form-group ">
                <div class="form-group">
                    <label for="nameId">*Name:</label>
                    if(customerName != null){
                    if (customerName.equals("")){
                    <input autofocus class="form-control form-control-lg" type="text" id="nameId" name="nameTextArea"
                           placeholder="e.g. John Smith"/>

                    <p class="text-secondary">Enter your full name.</p>
                </div>
                <div class="col-12 form-group">
                    <label>*Gender: </label><br>
                    <input type="checkbox" id="maleId" name="gender" value="male">

                    <label for="maleId">Male</label>
                    <input type="checkbox" id="femaleId" name="gender" value="female">
                    <label for="femaleId">Female</label>
                </div>
                <div class="col-12 form-group">
                    <label for="categoryId">*Category:</label>
                    <select id="categoryId" class="form-control form-control-lg" name="category">

                        <option value="null">Select...</option>
                        <option value="feedback">Feedback</option>
                        <option value="inquiry">Inquiry</option>
                        <option value="complaint">Complaint</option>

                    </select>
                </div>
                <div class="col-12 form-group">
                    <label for="messageId">*Message:</label>
                    <textarea class="form-control" id="messageId" rows="3" name="txtArea"></textarea>

                </div>
                <div class="col-12 form-group">
                    <input id="submit" class="col-12 btn btn-primary btn-lg" type="submit" value="Submit">
                </div>

                <p>Hit Count for this page:"+ request.getServletContext().getAttribute("totalHitCount")+ "</p>
            </div>
        </div>
    </form>
</div>


</div>
<%@include file="/WEB-INF/fragments/footer.jsp" %>
</body>

