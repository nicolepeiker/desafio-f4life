const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-link');

mobileMenu.onclick = () => navList.classList.toggle('active');

for (const link of links) {
  link.addEventListener('click', function () {
    navList.classList.remove('active');
  });
}
