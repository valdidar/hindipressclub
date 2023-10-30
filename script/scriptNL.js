// note how much has person has scrolled, and transform class left 1/5th of that
// amount upwards and change style="transform: translate3d(0px, 0px, 0px);" y value
const parallax = document.getElementsByClassName("left");
window.addEventListener("scroll", function() {
  let offset = window.scrollY;
  parallax[0].style.transform = "translateY(" + offset * -0.133 + "px)";
});
const parallax2 = document.getElementsByClassName("left2");
window.addEventListener("scroll", function() {
  let offset = window.scrollY;
  parallax2[0].style.transform = "translateY(" + offset * -0.133 + "px)";
});


// if clicked on id: wallmag-button or article-button or cartoons-button,
// then add toggle class "hidden" in id: wallmag-div, article-div, cartoons-div
// respectively
const article = document.getElementById("article-button");
const cartoons = document.getElementById("cartoons-button");
const articleDiv = document.getElementById("article-div");
const cartoonsDiv = document.getElementById("cartoons-div");
article.addEventListener("click", function() {
  if (articleDiv.classList.contains("hidden")) {
    articleDiv.classList.toggle("hidden");
    article.classList.toggle("nava-off");
    if (!cartoonsDiv.classList.contains("hidden")) {
      cartoonsDiv.classList.toggle("hidden");
      cartoons.classList.toggle("nava-off");
    }
  }
});
cartoons.addEventListener("click", function() {
  if (cartoonsDiv.classList.contains("hidden")) {
    cartoonsDiv.classList.toggle("hidden");
    cartoons.classList.toggle("nava-off");
    if (!articleDiv.classList.contains("hidden")) {
      articleDiv.classList.toggle("hidden");
      article.classList.toggle("nava-off");
    }
  }
});

// listen to event when person scrolls on area of class "left" and "left2" 
// and scroll the actual page 3 times that amount
const left = document.getElementsByClassName("left");
const left2 = document.getElementsByClassName("left2");
left[0].addEventListener("wheel", function(e) {
  window.scrollBy(0, e.deltaY * 5);
});
left2[0].addEventListener("wheel", function(e) {
  window.scrollBy(0, e.deltaY * 5);
});


