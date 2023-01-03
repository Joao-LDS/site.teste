const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const prevButton = document.getElementsByClassName('prev')[0]
const nextButton = document.getElementsByClassName('next')[0]
const slides = document.getElementsByClassName('slides')[0]
const containerCarousel = document.getElementsByClassName('main-container')[0]
const images = document.getElementsByClassName('product-img')
const carouselItems = document.getElementsByClassName('carousel-item')
const imagesId = []
let count = 0
var interval
var imgList = []

for(var i = 0; i < images.length; i++) {
  imgList.push(images[i].getAttribute('src'))
}

console.log(imgList);

for (var i = 0; i < carouselItems.length; i++) {
  const imageId = '#' + carouselItems[i].id
  imagesId.push(imageId)
}

function openModal(n) {
  document.getElementById("myModal").style.display = "block"
  showSlides(n)
}
  
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 0;
// showSlides(slideIndex);

function plusSlides(n) {
  var index = slideIndex += n
  console.log("plusSlides", index);
  showSlides(index);
}

// function currentSlide(n) {
//   slideIndex = n
//   showSlides(n);
// }
  
function showSlides(n) {
  console.log("showSlides", n);
  if (n > imgList.length - 1) {
    slideIndex = 0
  } else if (n == -1) {
    slideIndex = imgList.length - 1
  } else {
    slideIndex = n
  }
  console.log("slideIndex: ", slideIndex);
  document.getElementById("imgid").src = imgList[slideIndex];
  console.log("imgList[n]: ", imgList[slideIndex]);
}