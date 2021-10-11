
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;

var bg ;

function preload() {
    
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    
    if(backgroundImage){
        background(backgroundImage);
    }


    Engine.update(engine);

   

}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Amsterdam");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    console.log(datetime+"  " +hour);

    if(hour>=04 && hour<=06){
        bg = "sunrise.png";
    }else if(hour>=06 && hour<=08){
        bg = "sunrise.png";
    }else if(hour>=23 && hour==0){
        bg = "sunset.png";
    }else if(hour>=0 && hour==03){
        bg = "sunset.png";
    }else{
        bg = "sunset.png";
    }
backgroundImage = loadImage(bg);

} 
