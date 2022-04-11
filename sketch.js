const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle;
var pistola;
var tower;
var bala

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
angle=-PI/4          //45°
  tower=new Tower(150,350,160,310);
pistola=new Disparador(180,110,100,50,angle);
bala=new Bala(pistola.x,pistola.y);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
Engine.update(engine);
tower.display();
pistola.display();3
bala.display();
//muestra la torre(desafío 4)
 
}

function Disparar(){
if(keyCode===DOWN_ARROW){
bala.shoot()

}
}