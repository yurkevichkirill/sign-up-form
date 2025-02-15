const pass1 = document.getElementById("password");
const pass2 = document.getElementById("conf-password");

function passwordCompare(event){
    if(pass1.value != pass2.value){
        pass2.classList.add("pass-comp");
        event.preventDefault();
    }
    else{
        pass2.classList.remove("pass-comp");
    }
}

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    passwordCompare(event);
})