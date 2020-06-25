
var rotationSpeed = 0.005;
var myOtherBox = document.getElementById('myOtherBox');
var myOtherOtherBox = document.getElementById('myOtherOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 50);


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 2;
	console.log('entered');
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.005;
	console.log('left');
});


/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

 var growspeed = 5;

 function grow(){
 	myOtherBox.object3D.scale.x *= growspeed;
	myOtherBox.object3D.scale.y *= growspeed;
 	myOtherBox.object3D.scale.z *= growspeed;
 	console.log(myOtherBox.object3D.scale);
 }

 myOtherBox.addEventListener('click', function(){ // uses a fuse
 	grow();
 	console.log('grew');
 });

  var growspeed = 1.2;

 function grow(){
 	myOtherOtherBox.object3D.scale.x *= growspeed;
	myOtherOtherBox.object3D.scale.y *= growspeed;
 	myOtherOtherBox.object3D.scale.z *= growspeed;
 	console.log(myOtherOtherBox.object3D.scale);
 }

 myOtherOtherBox.addEventListener('click', function(){ // uses a fuse
 	grow();
 	console.log('grew');
 });




