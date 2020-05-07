// document.getElementById("addProduct").onclick = addProductFunction;
// function addProductFunction() {
//     let textProductNumber = document.getElementById("productNumberID");
//     let textName = document.getElementById("name");
//     let textUnitPrice = document.getElementById("price");
//     let textQuantity = document.getElementById("quantity");
//     let textSupplier = document.getElementById("supplier");
//     let textDate = document.getElementById("date");
//     // console.log(textProductNumber);
//     alert(textProductNumber.value + "\n" + textName.value + "\n" + textUnitPrice.value + "\n" + textQuantity.value + "\n" + textSupplier.value + "\n" + textDate.value);
// };

$(document).ready(function () {
    // alert("Hello World!");
    $("#addProduct").click(function (event) {
        const textProductNumber = $("#productNumberID")[0].value;
        const textName = $("#name")[0].value;
        const textUnitPrice = $("#priceID")[0].value;
        const textQuantity = $("#quantity")[0].value;
        const textSupplier = $("#supplier")[0].value;
        const textDate = $("#date")[0].value;
        let textArr = `${textProductNumber}  <br> ${textName} <br>  ${textUnitPrice} <br> ${textQuantity} <br> ${textSupplier} <br> ${textDate}`;
        const newDivElement = $("<div>");
        newDivElement.append(textArr);
        $(".container").append(newDivElement)
        event.preventDefault();
    });
});

