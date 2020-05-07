var button = document.getElementById("enter");
var box = document.getElementsByTagName("input")[0];
var ul = document.getElementsByTagName("ul")[0];


function addElementToList(text){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);

}


button.addEventListener("click",function(){
    var texxt = box.value;
    if(texxt.length>0){
    addElementToList(texxt);
    box.value = "";


    }
})

box.addEventListener("keypress",function(event){
    var texxt = box.value;
    if(texxt.length>0 && event.keyCode===13){
    addElementToList(texxt);
    box.value = "";


    }    
})

var list = document.querySelectorAll("li");
list.forEach(element => {
    element.addEventListener("click",function(){
        element.classList.toggle("done");

    })
});