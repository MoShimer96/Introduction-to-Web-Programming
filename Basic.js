if(document.readyState !== "loading"){
    console.log("Document is ready!");
} else{
    document.addEventListener("DOMContentLoaded", function(){
        console.log("Document is ready after waiting!");
        initalizeCode()
    })
}

function initalizeCode(){

const button = document.getElementById("my-button");
mainText = document.getElementById("DOMChange");

button.addEventListener("click", function(){
    console.log("hello world");
    mainText.innerText = "Moi maailma";
})


const buttonNumber2 = document.getElementById("add-data");
const unorderedList = document.getElementById("my-list");
newText = document.getElementById("textArea")
buttonNumber2.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.innerText = newText.value;
    unorderedList.appendChild(newItem);
})

}