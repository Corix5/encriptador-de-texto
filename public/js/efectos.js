function abrirNav(){
    document.querySelector('nav').classList.add('open');
    //agregamos opacity 1 al nav-list para que sea visible
    document.getElementById('nav-list').style.opacity = '1';
    //agregamos style display none al icono de abrir
    document.getElementById('open-nav-icon').style.display = 'none';
    //agregamos style display block al icono de cerrar
    document.getElementById('close-nav-icon').style.display = 'block';
}

function cerrarNav(){
    document.querySelector('nav').classList.remove('open');
    //agregamos opacity 0 al nav-list para que sea invisible
    document.getElementById('nav-list').style.opacity = '0';
    //agregamos style display block al icono de abrir
    document.getElementById('open-nav-icon').style.display = 'block';
    //agregamos style display none al icono de cerrar
    document.getElementById('close-nav-icon').style.display = 'none';
}