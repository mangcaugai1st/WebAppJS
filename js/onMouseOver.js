var out = new Image();
out.src = "images/large-empangelj.jpg";
var over = new Image();
over.src = "images/emperor-angelfish-swimming-food.jpg";
function mOver() {
    var picture = document.getElementById('picture');
    picture.src = over.src;
}
function mOut() {
    var picture = document.getElementById("picture");
    picture.src = out.src;

}