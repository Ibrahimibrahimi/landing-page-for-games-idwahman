var checkbox = document.querySelector("input[type='checkbox']");
var submitBtn = document.querySelector("button.btn");

// check if already login => redirect to home.html
// if (localStorage.getItem("username") != ""){
//     window.location = "home.html"
// }
// else continue this
var checked = false;
checkbox.onclick = () => {
    checked = (checked == true)?false:true;
    console.log(checked);
}

submitBtn.onclick = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (checked){
        localStorage.setItem("name",username);
        localStorage.setItem("password",password);
        console.log(localStorage);
    }

}
