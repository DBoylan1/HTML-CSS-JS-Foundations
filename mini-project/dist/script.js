var image = null;
var orgImage = null;
var Canvas = null;
function loadImage(){
  var file = document.getElementById("file");
  image = new SimpleImage(file);
  Canvas = document.getElementById("can1");
  orgImage = new SimpleImage(file);
  image.drawTo(Canvas);
}
function isLoaded(image){
   if (image == null  || ! image.complete()) {
    alert("Image not loaded");
     return false;
  }
  return true;
}
function greyFilter(){
  for (var pixel of image.values() ){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg); 
}
}
function greyImage(){

   greyFilter();
  image.drawTo(Canvas);

}
function redImage(){
   alert("You clicked red!")
}
function otherImage(){
   alert("You clicked other!")
}
function resetImage(){
   orgImage.drawTo(Canvas);
}