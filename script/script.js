var resultBox = document.querySelector("div#result>input");

function clearResult() {
    resultBox.value = "";
}

function add(newValue) {
    resultBox.value += newValue;
}
