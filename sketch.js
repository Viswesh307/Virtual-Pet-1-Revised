//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogSprite, dogSprite1;
var x=0;

function preload()
{
	//load images here
  dogSprite= loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");

}

function setup() {
  database= firebase.database();
	createCanvas(500, 500);

  dog=createSprite(260,200,20,20);
  dog.addImage(dogSprite);
  dog.scale=0.2;
  
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    //console.log("hi");
  }

  

  

    
  

  dog.display();

  drawSprites();
  //add styles here

  strokeWeight(5);
  stroke("red");
  textSize(30);
  text("Food Remaining:" + foodS, 150,480);
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  console.log("hello");
    
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })  
}
