const btnClose = document.querySelector(".btn-close");
const msjSubmit = document.querySelector(".section-msj-submit");

btnClose.addEventListener("click", close);

function close(){
    msjSubmit.style.display = "none";
}