// Seleccionamos todos los elementos del menú que tienen la clase 'menu-options__item'
const menuItems = document.querySelectorAll('.menu-options__item');

// Iteramos sobre cada elemento del menú
menuItems.forEach(item => {
    // Agregamos un event listener para el evento 'click'
    item.addEventListener('click', function(event) {
        // Prevenimos el comportamiento predeterminado del enlace
        event.preventDefault();
        
        // Obtenemos el valor del atributo 'href' del enlace clickeado
        const targetId = this.getAttribute('href').substring(1);

        // Seleccionamos la sección destino por su ID
        const targetSection = document.getElementById(targetId);

        // Comprobamos si la sección existe
        if (targetSection) {
            // Hacemos el desplazamiento suave hasta la sección objetivo
            targetSection.scrollIntoView({
                behavior: 'smooth', // Animación suave
                block: 'start' // Posición de la sección en la parte superior del viewport
            });
        }
    });
});
