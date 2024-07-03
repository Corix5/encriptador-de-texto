function toggleNav() {
    const nav = document.querySelector('nav');
    const openNavIcon = document.getElementById('open-nav-icon');
    
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        openNavIcon.classList.remove('is-active');
    } else {
        nav.classList.add('open');
        openNavIcon.classList.add('is-active');
    }
}
