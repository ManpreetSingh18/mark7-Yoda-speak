//const { response } = require("express");

var btn = document.querySelector("#btn");
var txtinput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

//console.log(txtinput);

function errorHandler(error) {
    console.log("Error Occured ", error);
    alert("Something Wrong with server!!Try Again after some time")
}
function clickHandler() {
    var inputtxt = txtinput.value;
    fetch(getTranslationURL(inputtxt))
    .then(response => response.json())
    .then(json => {
        //console.log(json.contents.translated)
        var translatedText = json.contents.translated;
        //console.log(translatedText);
        output.innerText=translatedText;
    })
    .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);
