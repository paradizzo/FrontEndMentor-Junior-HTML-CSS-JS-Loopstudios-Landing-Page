function openBtn() {
    var element = document.getElementById('menu-btn');
    var menu = document.querySelector('.menu-section');
    let menuOpen = false;
    element.classList.toggle('open');
    menu.classList.toggle('open');
}