var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampoInputText(){
    console.log("typeof: " + typeof nomeBootInputText);
    console.log("object call: " + Object.prototype.toString.call(nomeBootInputText));
    //alert(nomeBootInputText);
    console.log("recuperar valor com value: " + nomeBootInputText.value);
    //nomeBootInputText.disabled = true;
    console.log("disabled: nomeBootInputText.disabled = true;" )
    //nomeBootInputText.readOnly = true;
    console.log("readOnly: nomeBootInputText.readOnly = true;" )
    console.log("tagName: " + nomeBootInputText.tagName);
    console.log("tagName type: " + nomeBootInputText.type);
    //nomeBootInputText.value = "Pedro";
}

function selecionarCampoSelect(){
    console.log("object call: " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value " + estadoSelect.value)
    console.log("estadoSelect.selectedIndex " + estadoSelect.selectedIndex)
    console.log("tagName: " + estadoSelect.tagName);
    console.log("tagName type: " + estadoSelect.type);
    console.log("estadoSelect.options: " + estadoSelect.options);
    console.log("estadoSelect.selectedOptions: " + estadoSelect.selectedOptions);
    console.log("estadoSelect.selectedOptions.item(0): " + estadoSelect.selectedOptions.item(0));
    console.log("estadoSelect.selectedOptions[1]: " + estadoSelect.selectedOptions[1]);
    console.log("estadoSelect.length: " + estadoSelect.length);
    estadoSelect.disabled = true;
    console.log("estadoSelect.disabled = true ");
}

var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");

function selecionarCampoEmailCheck(){
    console.log("Object call tipo: ", Object.prototype.toString.call(emailPromocionalCheck));
    console.log("tagName: " + emailPromocionalCheck.tagName);
    console.log("tagName type: " + emailPromocionalCheck.type);
    console.log("Valor value: " + emailPromocionalCheck.value);
    console.log("Valor checked(marcado): " + emailPromocionalCheck.checked);
}