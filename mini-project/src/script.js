var image = null;
var orgImage = null;
var Canvas = null;
var pixel = null;
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
  for (pixel of image.values() ){
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
 redFilter();
  image.drawTo(Canvas);
}
function redFilter(){
    for (pixel of image.values() ){
    var avgR = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      var double = avgR * 2;
     if(avgR < 128){
        pixel.setRed(double);
    pixel.setGreen(0);
    pixel.setBlue(0); 
     }
     else{
    pixel.setRed(255);
    pixel.setGreen(double - 255);
    pixel.setBlue(double - 255); 
     }
}
}
function bluePinkImage(){
   bluePinkFilter();
  image.drawTo(Canvas);
}
function bluePinkFilter(){
  for (pixel of image.values() ){
    
   var x = pixel.getX();
    var y = pixel.getY();
    var avgPB = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    //  var doublePB = avgPB * 2;
     if(x >= y){
        pixel.setRed(173 - avgPB);
    pixel.setGreen(250 - avgPB);
    pixel.setBlue(228); 
     }
     else{
    pixel.setRed(240);
    pixel.setGreen(173 - avgPB);
    pixel.setBlue(194 - avgPB);
}
}
}
function resetImage(){
   orgImage.drawTo(Canvas);
}
