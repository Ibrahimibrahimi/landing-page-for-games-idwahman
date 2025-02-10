

var container = document.querySelector("div.container");
var result = document.querySelector("div.result");




// create spans 
for (var i = 0; i<50 ; i++){
    var span = document.createElement("span");
    span.className = "element";
    container.appendChild(span);
    span.onclick = () => {
        result.innerText = span.getHTML("class");
    }
}