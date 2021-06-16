const openMenu = document.querySelector('.openMenu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('.closeMenu');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close)
function show(){
navList.style.display='flex';
navList.style.top='0';
}
function close(){
navList.style.display='block';
navList.style.top='-110%';
}