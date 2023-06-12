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

const See2 = document.querySelector('.See2');
See2.addEventListener('click', openFullImg2);

const FullImgBox = document.getElementById("fullImgBox");
fullImg = document.getElementById("fullImg");

var ImageSource
var pos=1
var posmax=1

function openFullImg(){
  FullImgBox.style.display = "flex";
  pos = 1
  posmax=11
  ImageSource = './images/Hike'
  fullImg.src = ImageSource+pos+'.jpg'
}

function openFullImg2(){
  FullImgBox.style.display = "flex";
  pos = 1
  posmax=3
  ImageSource = './images/bike'
  fullImg.src = ImageSource+pos+'.jpg'
}

function closeImg(){
  FullImgBox.style.display = "none";
}



function NextImg(){
  if (pos==posmax){
    pos=0
  }
  pos=pos+1
  fullImg.src = ImageSource + pos + '.jpg'
}

function PreviousImg(){
  pos=pos-1
  if (pos==0){
    pos=1
  }
  fullImg.src = './images/hike'+pos+'.jpg'
}