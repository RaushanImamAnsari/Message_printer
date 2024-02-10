// this is the first approach to do this task 


const inputBox = document.getElementById("input_box");
const message = document.querySelector(".message");

function addTask() {
    if (inputBox.value === '') {
        alert("Please Enter Any Message To Print!");
    }
    else {
        let p = document.createElement("p");
        p.innerHTML = inputBox.value;
        message.appendChild(p);
    }
    inputBox.value = '';
}






