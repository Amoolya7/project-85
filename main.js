canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_img="parkingLot.jpg";
car_img="car2.png";
car_x=10;
car_y=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
car_imgTag.src=car_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
{
    up();
    console.log("up");

}
if(keyPressed=='40')
{
    down();
    console.log("down");

}
if(keyPressed=='37')
{
    left();
    console.log("left");

}
if(keyPressed=='39')
{
    right();
    console.log("right")

}
}
function up(){
    if (car_y>=0)
    {
        car_y=rover_y-10;
            console.log("when up is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadcar();
    }
}
function down(){
    if (car_y<=500)
    {
        car_y=car_y+10;
            console.log("when down is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadcar();
    }
}
function left(){
    if (car_x>=0)
    {
       car_x=car_x-10;
            console.log("when left is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadcar();
    }
}
function right(){
    if (car_x<=700)
    {
       car_x=car_x+10;
            console.log("when right is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadcarr();
    }
}