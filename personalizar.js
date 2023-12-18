window.addEventListener('load', function () {
    console.log('Creador Carlos Lovera');
  });

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var contenido = document.getElementById('contenido');
    var scrollPosition = window.scrollY;

    if (scrollPosition > contenido.offsetTop) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});