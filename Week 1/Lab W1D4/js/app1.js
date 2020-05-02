document.getElementById("addProduct").onclick = addProductFunction;
function addProductFunction() {
    let textProductNumber = document.getElementById("productNumber");
    let textName = document.getElementById("name");
    let textUnitPrice = document.getElementById("price");
    let textQuantity = document.getElementById("quantity");
    let textSupplier = document.getElementById("supplier");
    let textDate = document.getElementById("date");
    // console.log(textProductNumber);
    alert(textProductNumber.value + "\n" + textName.value + "\n" + textUnitPrice.value + "\n" + textQuantity.value + "\n" + textSupplier.value + "\n" + textDate.value);
};