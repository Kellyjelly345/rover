canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_array = ["Nasa_image1.jpeg","Nasa_image2.jpeg","Nasa_image3.jpeg","Nasa_image4.jpeg"]
randomNumber = Math.floor(Math.random()*4)

rover_y = 100;
rover_x = 100;
rover_height = 100;
rover_width = 100;
rover_image ="rover.png";
background_image = nasa_array[randomNumber];

 function add_pic(){
     background_imagetag = new Image();
     background_imagetag.onload = uploadBackground;
     background_imagetag.src = background_image;


     rover_imagetag = new Image();
     rover_imagetag.onload = uploadRover;
     rover_imagetag.src = rover_image;
     

 }

 function uploadBackground(){
     ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

 }

 function uploadRover(){
     ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
 }

 window.addEventListener("keydown",my_keydown);

 function my_keydown(e){

    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed =="38") {
        console.log("up")
        up()
        
    }

    if (keypressed == "40") {
        console.log("down")
        down()
        
    }

    if (keypressed == "37") {
        console.log("left")
        left()
    }

    if (keypressed == "39") {
        console.log("right")
        right()
    }

 }

 function up(){
    if (rover_y >0) {
        rover_y = rover_y - 10
        uploadBackground()
        uploadRover()
        
    }




 }

 function down(){
     if (rover_y < 500) {
         rover_y = rover_y + 10
         uploadBackground()
         uploadRover()
         
     }
 }

 function left(){
     if (rover_x >0) {
         rover_x = rover_x - 10
         uploadBackground()
         uploadRover()
         
     }
 }


 function right(){
     if (rover_x < 700) {
         rover_x = rover_x + 10
         uploadBackground()
         uploadRover()
         
     }
 }