<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a href="/Lesson13_JSPMVCDemo/home" class="navbar-brand">CS472 ::: Lesson13 - JSP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/Lesson13_JSPMVCDemo/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Lesson13_JSPMVCDemo/contact-messages">Contact Us Messages</a>
                </li>
            </ul>
            <form action="/Lesson13_JSPMVCDemo/searchMessageController" class="form-inline my-2 my-lg-0"  method="get"  >
                <input class="form-control mr-sm-2" type="text" placeholder="Search" name="searchItem">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</header>