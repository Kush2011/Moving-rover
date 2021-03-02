canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_height = 90;
var rover_width = 100;
background_image_array = ["image_1.jpg", "image_2.jpg", "image_3.jpeg, image_4.jpeg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
background_image = background_image_array[random_number];
rover_image = "rover.png";
x = 10, y = 10;
function add(){
    background = new Image();
    background.onload = upload_background;
    background.src = background_image;

    rover = new Image();
    rover.onload = upload_rover;
    rover.src = rover_image;
} 
function upload_background(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover, x, y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    var key_pressed = e.keyCode;
    console.log(key_pressed);
    if(key_pressed == '38'){
        up();
        console.log("up");
    }
    if(key_pressed == '39'){
        right();
        console.log("right");
    }
    if(key_pressed == '40'){
        down();
        console.log("down");
    }
    if(key_pressed == '37'){
        left();
        console.log("left");
    }
}
function up(){
    if (y >= 0){
        y = y - 10;
        console.log("y is"+y+"x is"+x);
        upload_background();
        upload_rover();
    }
}
function down(){
    if (y <= 500){
        y = y + 10;
        console.log("y is"+y+"x is"+x);
        upload_background();
        upload_rover();
    }
}
function left(){
    if (x >= 0){
        x = x - 10;
        console.log("y is"+y+"x is"+x);
        upload_background();
        upload_rover();
    }
}
function right(){
    if (x <= 700){
        x = x + 10;
        console.log("y is"+y+"x is"+x);
        upload_background();
        upload_rover();
    }
}