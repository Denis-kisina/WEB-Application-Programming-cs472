document.getElementById("submit").onclick = submitForm;
function submitForm() {
    let textURL = document.getElementById("url");
    let textEmail = document.getElementById("email");
    let textPassword = document.getElementById("password");
    const checkMeOut = document.getElementById("checkout");

    console.log(` URL: ` + textURL.value +` ` + `Email ` + textEmail.value + ` ` + `Password ` + textPassword.value + ` Checked? ` + checkMeOut.checked);
};


