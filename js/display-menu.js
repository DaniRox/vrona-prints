const menuOptions = document.querySelector(".js__menu-options");
const btnMenu = document.querySelector(".js__btn-menu");


function displayMenu(){
    if(menuOptions.style.display === "flex"){
        menuOptions.style.display = "none";
    } else {
        menuOptions.style.display = "flex";
    }
}

btnMenu.addEventListener("click", displayMenu);

function displayMenuDesktop(){
    if(menuOptions.style.display === "flex"){
        menuOptions.style.display = "none";
    }
}