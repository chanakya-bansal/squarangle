//starting matter.js
let engine = Matter.Engine.create();
let Events = Matter.Events;
let Bodies = Matter.Bodies;
let Body=Matter.Body;
let Detecter=Matter.Detector;

//starting render
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1500,
      height: 700, 
      wireframes: false,
      background: 'rgb(30,30,30)'
  }
});

//starting mouse constraint
// let mouse = Matter.Mouse.create(render.canvas);
// let mouseConstraint = Matter.MouseConstraint.create(engine, {
//       mouse: mouse,
//       constraint: {
//           render: {visible: false}
//       }
//   });
// render.mouse = mouse;

// limity jump height and can only jump while on ground

let squareContact=false
let triangleContact=false


///////////////////////////////////////////////// walls

w1=Matter.Bodies.rectangle(1000,607,20,76,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(245,90,60)',
   
}
})

w2=Matter.Bodies.rectangle(1150,463,20,145,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(241,160,72)',
   
}
})

w3=Matter.Bodies.rectangle(87,298,174,20,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(245,165,0)',
   
}
})

w4=Matter.Bodies.rectangle(492,239.5,20,97,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(255,69,0)',
   
}
})

w5=Matter.Bodies.rectangle(1007,239.5,20,97,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(255,140,0)',
   
}
})

///////////////////////////////////////////////// wall cover

wc1=Matter.Bodies.rectangle(490,116,50,150,{
  isStatic:true,
  collisionFilter: {
   mask:200
},
render: {
  fillStyle: 'rgb(30,30,30)',
 
}
})
wc2=Matter.Bodies.rectangle(1005,116,50,150,{
  isStatic:true,
  collisionFilter: {
   mask:200
},
render: {
  fillStyle: 'rgb(]30,30,30)',
 
}
})


///////////////////////////////////////////////// 1st floor
b1=Bodies.rectangle(750,690,1500,20,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b2=Bodies.rectangle(300,642.5,270,70,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b3=Bodies.rectangle(773,662.5,670,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

///////////////////////////////////////////////// 1st floor cover
c1=Bodies.rectangle(637,668,943,40,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)'
  }
})
///////////////////////////////////////////////// 2nd floor

b4=Bodies.rectangle(200,472.5,670,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b5=Bodies.rectangle(520.5,495,30,75,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b6=Bodies.rectangle(1300,552.5,670,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b7=Bodies.polygon(965,558,3,20,{
    isStatic:true,
    friction:0,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})
Matter.Body.rotate(b7,-0.52)


b8=Bodies.rectangle(1475,428,100,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})
b9=Bodies.rectangle(1450,458,125,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})
b10=Bodies.rectangle(1425,488,150,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})
b11=Bodies.rectangle(1400,520,175,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})
///////////////////////////////////////////////// 2nd floor cover
c2=Bodies.rectangle(510,472.5,20,29.25,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})

c3=Bodies.rectangle(979,553,29,29.5,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c4=Bodies.rectangle(1465,500,80,120,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c5=Bodies.rectangle(1408,500,40,90,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c6=Bodies.rectangle(1375,510,50,60,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c7=Bodies.rectangle(1352.5,550,80,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})

///////////////////////////////////////////////// 3rd floor

b12=Bodies.rectangle(875,340,350,100,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b13=Bodies.rectangle(1176,360,250,60,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b14=Bodies.rectangle(450,305,550,30,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b15=Bodies.rectangle(750,238,20,100,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})

b16=Bodies.polygon(750,175,3,50,{
    isStatic:true,
    friction:1,
    render: {
       fillStyle: 'rgb(0,0,0)',
       strokeStyle: 'yellow',
       lineWidth: 3
  }
})
Matter.Body.rotate(b16,0.52)

b17=Bodies.rectangle(450,55,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(0,0,0)',
    strokeStyle: 'yellow',
    lineWidth: 3
}
})
Matter.Body.rotate(b17,2.5)

b18=Bodies.rectangle(1050,55,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(0,0,0)',
    strokeStyle: 'yellow',
    lineWidth: 3
}
})
Matter.Body.rotate(b18,-2.5)

b19=Matter.Bodies.rectangle(492.5,150,20,80,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(0,0,0)',
    strokeStyle: 'yellow',
    lineWidth: 3
}
})

b20=Matter.Bodies.rectangle(1007.5,150,20,80,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(0,0,0)',
    strokeStyle: 'yellow',
    lineWidth: 3
}
})

///////////////////////////////////////////////// 3rd floor cover

c8=Bodies.rectangle(750,245,20,180,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c9=Bodies.rectangle(1050,360,40,60,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c10=Bodies.rectangle(725,315,50,50,{
    isStatic:true,
    render: {
       fillStyle: 'rgb(0,0,0)',
      
  }
})
c11=Bodies.rectangle(490,109.5,20,17.5,{
  isStatic:true,
  render: {
     fillStyle: 'rgb(0,0,0)',
    
}
})
Matter.Body.rotate(c11,-2.3)

c12=Bodies.rectangle(1008.5,109.5,18,17.5,{
  isStatic:true,
  render: {
     fillStyle: 'rgb(0,0,0)',
    
}
})
Matter.Body.rotate(c12,2.3)

///////////////////////////////////////////////// adding edges

e1=Matter.Bodies.rectangle(-10,350,20,700,{
    isStatic:true
})

e2=Matter.Bodies.rectangle(1510,350,20,700,{
    isStatic:true
})
e3=Matter.Bodies.rectangle(750,-10,1500,20,{
    isStatic:true
})


///////////////////////////////////////////////// making square and triangle


let square=Matter.Bodies.rectangle(100,600,40,40,{
  mass:1
})
let triangle=Matter.Bodies.polygon(1400,600,3,27.5,{
  mass:1
})

///////////////////////////////////////////////// box to help complete the level

let box=Matter.Bodies.rectangle(570,258,40,40,{
  isStatic:false,
  render:{
    fillStyle:"rgb(0,200,122)"
  }
})

///////////////////////////////////////////////// key function

var keys = [];
document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
 
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

///////////////////////////////////////////////// buttons

bn1=Matter.Bodies.trapezoid(700,639,30,15,0.3,{
  isStatic:true,
  friction:1,
  render: {
    fillStyle: 'rgb(245,90,60)',
   
}
})

bn2=Matter.Bodies.trapezoid(350,450,30,15,0.3,{
  isStatic:true,
  friction:1,
  render: {
    fillStyle: 'rgb(241,160,72)',
   
}
})

bn3=Matter.Bodies.trapezoid(1475,405,30,15,0.3,{
  isStatic:true,
  friction:1,
  render: {
    fillStyle: 'rgb(245,165,0)',
   
}
})

bn4=Matter.Bodies.trapezoid(1200,321.5,30,15,0.3,{
  isStatic:true,
  friction:1,
  render: {
    fillStyle: 'rgb(255,69,0)',
   
}
})

bn5=Matter.Bodies.trapezoid(300,282,30,15,0.3,{
  isStatic:true,
  friction:1,
  render: {
    fillStyle: 'rgb(255,140,0)',
   
}
})

///////////////////////////////////////////////// win blocks
//10,250
wb1=Bodies.rectangle(-75,250,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(4,150,255)',
  }
})
Matter.Body.rotate(wb1,-2)

wb2=Bodies.rectangle(1575,250,20,150,{
  isStatic:true,
  render: {
    fillStyle: 'rgb(216,17,89)',
  }
})
Matter.Body.rotate(wb2,2)


////////////////////////////////////////////////// counters for doors and walls
counter1=-1
counter2=3.139999999999978
counter3=-1
counter4=-1
counter5=-1
maybe=1

let zer=true
let win=false

///////////////////////////////////////////////// draw function (only updated)
Events.on(engine, "beforeTick", function(event) {



/////////////////////////////////////////////////collision variables
/////////////////////////////////////////////////C=collision, S=square, T=triangle, B=buttons, numbers indicate block

var CST = Matter.SAT.collides(square,triangle);
    
var CS1 = Matter.SAT.collides(square,b1);
var CS2 = Matter.SAT.collides(square,b2);
var CS3 = Matter.SAT.collides(square,b3);
var CS4 = Matter.SAT.collides(square,b4);
var CS5 = Matter.SAT.collides(square,b5);
var CS6 = Matter.SAT.collides(square,b6);
var CS7 = Matter.SAT.collides(square,b7);
var CS8 = Matter.SAT.collides(square,b8);
var CS9 = Matter.SAT.collides(square,b9);
var CS10 = Matter.SAT.collides(square,b10);
var CS11 = Matter.SAT.collides(square,b11);
var CS12 = Matter.SAT.collides(square,b12);
var CS13 = Matter.SAT.collides(square,b13);
var CS14 = Matter.SAT.collides(square,b14);
var CS15 = Matter.SAT.collides(square,b15);
var CS16 = Matter.SAT.collides(square,b16);

var CT1 = Matter.SAT.collides(triangle,b1);
var CT2 = Matter.SAT.collides(triangle,b2);
var CT3 = Matter.SAT.collides(triangle,b3);
var CT4 = Matter.SAT.collides(triangle,b4);
var CT5 = Matter.SAT.collides(triangle,b5);
var CT6 = Matter.SAT.collides(triangle,b6);
var CT7 = Matter.SAT.collides(triangle,b7);
var CT8 = Matter.SAT.collides(triangle,b8);
var CT9 = Matter.SAT.collides(triangle,b9);
var CT10 = Matter.SAT.collides(triangle,b10);
var CT11 = Matter.SAT.collides(triangle,b11);
var CT12 = Matter.SAT.collides(triangle,b12);
var CT13 = Matter.SAT.collides(triangle,b13);
var CT14 = Matter.SAT.collides(triangle,b14);
var CT15 = Matter.SAT.collides(triangle,b15);
var CT16 = Matter.SAT.collides(triangle,b16);

var CSB1=Matter.SAT.collides(square,bn1)
var CSB2=Matter.SAT.collides(square,bn2)
var CSB3=Matter.SAT.collides(square,bn3)
var CSB4=Matter.SAT.collides(square,bn4)
var CSB5=Matter.SAT.collides(square,bn5)

var CTB1=Matter.SAT.collides(triangle,bn1)
var CTB2=Matter.SAT.collides(triangle,bn2)
var CTB3=Matter.SAT.collides(triangle,bn3)
var CTB4=Matter.SAT.collides(triangle,bn4)
var CTB5=Matter.SAT.collides(triangle,bn5)

var CB5=Matter.SAT.collides(box,bn5)
var WINS=Matter.SAT.collides(square,b16)
var WINT=Matter.SAT.collides(triangle,b16)
if(CST.collided){
  triangleContact=true
  if(keys[38]){
   Matter.Body.setVelocity(triangle,{x:0,y:-6})
  }
}

// square colliders check
if (CS1.collided ||CS2.collided ||CS3.collided ||CS4.collided ||CS5.collided ||CS6.collided ||CS7.collided ||CS8.collided ||
CS9.collided ||CS10.collided ||CS11.collided ||CS12.collided ||CS13.collided ||CS14.collided ||CS15.collided ||CS16.collided){
    
if(square.position.x<677 && square.position.y>538){
squareContact=true
}
if(square.position.x>677 && square.position.y>580){
squareContact=true
}
if(square.position.x<677 && square.position.y>320 && square.position.y<440){
squareContact=true
}
if(square.position.x>677 && square.position.y>413 && square.position.y<520){
squareContact=true
}
if(CS8.collided){
squareContact=true
}
if(square.position.y<311){
squareContact=true
}
if(CS15.collided){
squareContact=false
}

}

// triangle colliders check
if (CT1.collided ||CT2.collided ||CT3.collided ||CT4.collided ||CT5.collided ||CT6.collided ||CT7.collided ||CT8.collided ||
CT9.collided ||CT10.collided ||CT11.collided ||CT12.collided ||CT13.collided ||CT14.collided ||CT15.collided ||CT16.collided){
        
if(triangle.position.x<677 && triangle.position.y>538){
triangleContact=true
}
if(triangle.position.x>677 && triangle.position.y>580){
triangleContact=true
}
if(triangle.position.x<677 && triangle.position.y>320 && triangle.position.y<445){
triangleContact=true
}
if(triangle.position.x>677 && triangle.position.y>413 && triangle.position.y<520){
triangleContact=true
}
if(CT8.collided){
triangleContact=true
}
if(triangle.position.y<320){
triangleContact=true
}
if(CT15.collided){
triangleContact=false
}
             
}


 
// square key controls  
if (keys[87] && squareContact) {
square.force={x:0,y:-0.004}
const func = () => {
squareContact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[87]&&keys[65]){
square.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[87]&&keys[68]){
square.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[65] ) {
square.force = {      x: -0.004,      y:0 }
} 
if (keys[68] ) {
square.force = {      x: 0.004,      y: 0 }
}
   

// triangle key controls
if (keys[38] && triangleContact) {
triangle.force = {      x: 0,      y: -0.004 };
const func = () => {
triangleContact=false
}
setTimeout(func, 0.125 * 1000);
if(keys[38]&&keys[37]){
triangle.force = {      x: -0.0025,      y:-0.0025 }
}
if(keys[38]&&keys[39]){
triangle.force = {      x: 0.0025,      y:-0.0025 }
}
}
if (keys[37] ) {
triangle.force = {      x: -0.0025,      y:0 }
} 
if (keys[39] ) {
triangle.force = {      x: 0.0025,      y: 0 }
}
    
      
// button clicked
//1st
if(CSB1.collided || CTB1.collided){
  counter1 += 0.01;

  if (counter1 < 0) {
      return;
  }

  var px = 607 + 75 * Math.sin(counter1);
  Matter.Body.setVelocity(w1, { x:0, y:  px - w1.position.y });
  Matter.Body.setPosition(w1, { x:  w1.position.x, y:px });
  if(bn1.position.y!==655){
  Matter.Body.setPosition(bn1, { x:  bn1.position.x, y:bn1.position.y+1 });
  }
  if(counter1===3.139999999999978){
    counter1=0.010000000000000753
  }

}else{
  if(bn1.position.y!==639){
    Matter.Body.setPosition(bn1, { x:  bn1.position.x, y:bn1.position.y-0.5 });
  }
  if(w1.position.y>606){
    Matter.Body.setPosition(w1, { x:  w1.position.x, y:w1.position.y-0.5 });
  }
  counter1=0.010000000000000753
}

// 2nd

if(CSB2.collided || CTB2.collided){
  counter2 += 0.01;
  if (counter2 < 0) {
      return;
  }
  var px = 463 + 120 * Math.sin(counter2);
  Matter.Body.setPosition(w2, { x:  w2.position.x, y:px });
   if(bn2.position.y!==465){
  Matter.Body.setPosition(bn2, { x:  bn2.position.x, y:bn2.position.y+0.5 });
   }
  if(counter2===6.289999999999911){
    counter2=3.139999999999978
  }
  if(counter2===5.209999999999934){
    zer=false
  }
  if(w2.position.y>357 && zer===true){
  Matter.Body.rotate(w2,0.015)
  }
  if(zer===false){
    Matter.Body.rotate(w2,-0.015)
    if(w2.position.y===463.81775680896175){
      zer=true
    }
  }
}else{
 if(bn2.position.y!==450){
     Matter.Body.setPosition(bn2, { x:  bn2.position.x, y:bn2.position.y-0.5 });
   }
  if(w2.position.y<463 && (square.position.x>bn2.position.x+100 || square.position.x<bn2.position.x-100)){
    zer=maybe
  }
  if(zer===maybe){
    Matter.Body.setPosition(w2,{x:1150,y:463})
   Matter.Body.setAngle(w2,0)
   counter2=3.139999999999978
   zer=true
  }
 }


// 3rd 

if(CSB3.collided || CTB3.collided){
  counter3 += 0.01;

  if (counter3 < 0) {
      return;
  }

  var px = 298 + 174 * Math.sin(counter3);
  Matter.Body.setVelocity(w3, { x:0, y:  px - w3.position.y });
  Matter.Body.setPosition(w3, { x:  w3.position.x, y:px });
   if(bn3.position.y!==420){
   Matter.Body.setPosition(bn3, { x:  bn3.position.x, y:bn3.position.y+1 });
   }
  if(counter3===3.139999999999978){
    counter3=0.010000000000000753
  }

}
else{
  if(bn3.position.y!==405){
    Matter.Body.setPosition(bn3, { x:  bn3.position.x, y:bn3.position.y-0.5 });
  }
  if(w3.position.y>298){
    Matter.Body.setPosition(w3, { x:  w3.position.x, y:w3.position.y-1 });
  }
  counter3=0.010000000000000753
}

// 4th

if(CSB4.collided || CTB4.collided){
  counter4 += 0.01;

  if (counter4 < 0) {
      return;
  }

  var px = 239.9 - 97 * Math.sin(counter4);
  Matter.Body.setPosition(w4, { x:  w4.position.x, y:px });
   if(bn4.position.y!==337.5){
   Matter.Body.setPosition(bn4, { x:  bn4.position.x, y:bn4.position.y+1 });
   }
  if(counter4===3.139999999999978){
    counter4=0.010000000000000753
  }

}
else{
  if(bn4.position.y!==321.5){
    Matter.Body.setPosition(bn4, { x:  bn4.position.x, y:bn4.position.y-0.5 });
  }
  if(w4.position.y>239){
    Matter.Body.setPosition(w4, { x:  w4.position.x, y:w4.position.y-1 });
  }
  counter4=0.010000000000000753
}

// 5th

if(CSB5.collided || CTB5.collided || CB5.collided){
  counter5 += 0.01;

  if (counter5 < 0) {
      return;
  }

  var px = 239.9 - 97 * Math.sin(counter5);
  Matter.Body.setPosition(w5, { x:  w5.position.x, y:px });
   if(bn5.position.y!==298){
   Matter.Body.setPosition(bn5, { x:  bn5.position.x, y:bn5.position.y+1 });
   }
  if(counter5===3.139999999999978){
    counter5=0.010000000000000753
  }

}
else{
  if(bn5.position.y!==282){
    Matter.Body.setPosition(bn5, { x:  bn5.position.x, y:bn5.position.y-0.5 });
  }
  if(w5.position.y>239){
    Matter.Body.setPosition(w5, { x:  w5.position.x, y:w5.position.y-1 });
  }
  counter5=0.010000000000000753
}


if(WINS.collided&&WINT.collided){
  win=true
}
if(win==true){
  if(wb1.position.x!==10){
    Matter.Body.setPosition(wb1,{x:wb1.position.x+1,y:wb1.position.y})
    Matter.Body.setPosition(wb2,{x:wb2.position.x-1,y:wb1.position.y})
   
  }
  if(wb1.position.x===10){
  Matter.World.add(engine.world, [
    qled= Matter.Bodies.rectangle(75,220,20,10),
    oled= Matter.Bodies.rectangle(1425,220,20,10)
    
    ])
    qled.force={x:0.006,y:-0.003}
    oled.force={x:-0.0061,y:-0.003}
    qled.collisionFilter.mask=200
    qled.collisionFilter.category=0x0008
    wb1.collisionFilter.category=0x0008
    wb1.collisionFilter.mask=200
     oled.collisionFilter.mask=200
    oled.collisionFilter.category=0x0008
    wb2.collisionFilter.category=0x0008
    wb2.collisionFilter.mask=200
  
   
  }
  
  

 
}


})
// end draw function
//10,250




//running everything and adding bodies
// b=blocks, c=covers, e=edges, w=walls, bn=button, wc=wall cover
Matter.World.add(engine.world, [w1,w2,w3,w4,w5]);
Matter.World.add(engine.world, [wc1,wc2]);
Matter.World.add(engine.world, [bn1,bn2,bn3,bn4,bn5]);
Matter.World.add(engine.world, [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20]);
Matter.World.add(engine.world, [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]);
Matter.World.add(engine.world, [square,triangle,box]);
Matter.World.add(engine.world, [e1,e2,e3]);
Matter.World.add(engine.world, [wb1,wb2]);
Matter.Engine.run(engine);
Matter.Render.run(render);
