const toggleButton = document.getElementById('toggleButton');
const navbarNav = document.getElementById('navbarNav');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    navbarNav.classList.remove('active');
});
