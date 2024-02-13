
const menuItems = document.getElementsByClassName("menu-options__item");
const menu = document.getElementById("nav");
const menuNav = document.getElementById("menu-nav");
const btnMenu = document.getElementById("btn-menu-nav");

//función para mostrar/ocultar el menu en tamaño de pantalla menor a 770px
function displayMenu(){
    if(menuNav.style.display === "flex"){
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "flex";
    }
}

//escuchador de evento para el boton menu que activa la funcion
btnMenu.addEventListener("click", displayMenu);


