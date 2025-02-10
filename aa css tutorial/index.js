
var created = 0;

function Save(dataIndex,text){
    localStorage.setItem(dataIndex,text)
}
function Create(){
    var text = document.getElementById("text").value;
    var tasks = document.querySelector(".tasks");
    if (!text == ""){
        var task = document.createElement("div");
        task.className = "task";
        task.setAttribute("data-index",created);
        created++;
        tasks.appendChild(task);

        var span = document.createElement("span");
        span.innerText = text ;
        task.appendChild(span);

        Save(task.getAttribute("data-index"),text)

        var button = document.createElement("button");
        button.className = "delete";
        button.innerHTML = "X";
        task.appendChild(button);
        button.onclick = () => {
            task.style.display = "none";
        }
    }
}
document.querySelector("button.add").onclick = () => {
    Create()
}