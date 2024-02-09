const btnSubmit = document.querySelector(".btn-form");
const msjSubmit = document.querySelector(".section-msj-submit");

btnSubmit.addEventListener("click", displayMsj);

function displayMsj(){
    msjSubmit.style.display = "flex";
}