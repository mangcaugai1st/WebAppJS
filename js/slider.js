/*var sliderimg = document.querySelector('.slider-img');
var imageArr = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

var i = 0;
function prev() {
    if(i <= 0) i = imageArr.length;
    i--;
    return setImg();
}
function next() {
    if(i >= imageArr.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderimg.setAttribute('src', 'images/' + imageArr[i]);
} */ 

var currentIndex = 1;
displaySlides(currentIndex);

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

function setSlides(num) {
    displaySlides(currentIndex += num);
}