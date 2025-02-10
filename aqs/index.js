/*
1. when delete button clicked => show confirm panel

*/
document.querySelector(".confirm-panel").style.display = "none";
var DeleteIt = 0; // don't delete

function ShowConfirm(){
    document.querySelector(".confirm-panel").style.display = "block";
    DeleteIt = 0
}
function HideConfirm(){
    document.querySelector(".confirm-panel").style.display = "none";
    DeleteIt = 0
}

function Delete(){
    DeleteIt = 1;
    HideConfirm()
}
function Cancel(){
    DeleteIt = 0;
    ShowConfirm()
}

var names = [0,1,2,3,4,5,6,47,8,9,4,5,6,7,6,9];

names.forEach(o=>{
    var span = document.createElement("span");
    span.className = "azertyu";
    document.querySelector(".container").appendChild(span);
    span.onclick = () => {
        ShowConfirm()
        if (DeleteIt == 1){
            span.style.display = "none";
            DeleteIt = 0;
        }else {
            
        }
    }
})

