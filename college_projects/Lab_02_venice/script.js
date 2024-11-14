const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;

  header.style.transform = `translateY(${scrollY / 5}px)`;
  header.style.opacity = `${1 - scrollY / 200}`;
});
const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");

let currentImageIndex = 0;

function showNextImage() {
  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.add("active");
}

showNextImage();

setInterval(showNextImage, 5000);
