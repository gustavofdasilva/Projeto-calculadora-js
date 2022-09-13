var resultBox = document.querySelector("div#result>input");
var intResult;

function clearResult() {
    resultBox.value = "";
}

function add(newValue) {
    resultBox.value += newValue;
}

function result() {
    var resultString = String(resultBox.value);
    var resultNumber = Number(resultBox.value);
    
    for(var i = 0; i < String(resultBox.value).length ; i++) {
        
        if(Number(resultString.substring(i,i+1)) != isNaN) {
            window.alert(`Índice ${i} e Número ${Number(resultString.substring(i,i+1))}`);
        } 
    }
}