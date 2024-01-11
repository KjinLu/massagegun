document.getElementById('toggler').addEventListener('change', function () {
    const menuIcon = document.getElementById('menuIcon');
    if (this.checked) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-x');
    } else {
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add('fa-bars');
    }
});