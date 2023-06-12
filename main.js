// functions for menu icon

const menuHamIcon = document.querySelector('.menuIcon');
const MobileMenu = document.querySelector('.navbar-right-mobile');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  MobileMenu.classList.toggle('inactive')
  
}

// Listen the click to open images
const See = document.querySelector('.See');
See.addEventListener('click', openFullImg);

const FullImgBox = document.getElementById("fullImgBox");
fullImg = document.getElementById("fullImg");


function openFullImg(){
  console.log('click');
  FullImgBox.style.display = "flex";
  fullImg.src = './images/hike1.jpg'
  
}

function closeImg(){
  FullImgBox.style.display = "none";
}