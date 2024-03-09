// Toggle untuk berubah class active
const navbarNav = document.querySelector('.navbar-nav');
// pas menunya di klik
document.querySelector('#rice-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// menghilangkan navdgn meng klik slidebar

const rice = document.querySelector('#rice-menu');


document.addEventListener('click', function(e) {
    if(!rice.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})