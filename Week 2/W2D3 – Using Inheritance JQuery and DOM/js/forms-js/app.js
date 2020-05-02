
$(document).ready(function () {
    // alert("Hello World!");
    $("#submit").click(function (event) {
        const textURL = $("#url")[0];
        const textEmail = $("#email")[0];
        const textPassword = $("#password")[0];
        const checkMeOut = $("#checkout")[0];

        console.log(` URL: ` + textURL.value +` ` + `Email ` + textEmail.value + ` ` + `Password ` + textPassword.value + ` Checked? ` + checkMeOut.value);
        event.preventDefault();
    });
});

