    // Función para desplazarse suavemente a la sección cuando se hace clic en un enlace del menú
    document.addEventListener('DOMContentLoaded', function () {
      var links = document.querySelectorAll('.menu-options__item');

      links.forEach(function (link) {
          link.addEventListener('click', function (e) {
              e.preventDefault();

              var targetId = this.getAttribute('href').substring(1);
              var targetSection = document.getElementById(targetId);
              var offsetTop = targetSection.offsetTop;

              // Anima el desplazamiento suavemente
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          });
      });
  });