var curIndex = 0; //Hình xuất hiện ban đầu 
var time = 2000; // thời gian chuyển hình


var imgArray = [];
imgArray[0] = 'images/clownfish.jpg';
imgArray[1] = 'images/YellowTang.jpg';
imgArray[2] = 'images/butterflyfish.jpg';
imgArray[3] = 'images/emperorAngelfish.jpg';
imgArray[4] = 'images/greenMandarinGoby.jpg';
imgArray[5] = 'images/lionFish.jpg';

function changeImg() {
    document.slide.src = imgArray[curIndex];
    if(curIndex < imgArray.length - 1) {
        curIndex++;
    }
    else {
        curIndex = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


