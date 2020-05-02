function changeText() {
    let textbox = document.getElementById("output");
    textbox.value = "Hello, world!";
}

function swapText() {
    let span = document.getElementById("output2");
    let textBox = document.getElementById("textbox2");
    let temp = span.innerHTML;
    span.innerHTML = textBox.value;
    textBox.value = temp;
}