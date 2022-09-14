var resultBox = document.querySelector("div#result>input");

function clearResult() {
    resultBox.value = "";
}

function add(newValue) {
    if(!isNaN(newValue)) {
        resultBox.value += newValue;
    } else {
        if(!isNaN(String(resultBox.value).slice(-1))) {
            resultBox.value += newValue;
        }
    }
}

function result() {
    var resultString = String(resultBox.value);
    var resultFinal = eval(resultString);


    resultBox.value = resultFinal;
}