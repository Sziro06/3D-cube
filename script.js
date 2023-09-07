let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 65, window.innerWidth /window.innerHeight);

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry();
let textureAll = [];
let texture1 = new THREE.TextureLoader().load("images/one.jpg");
let texture2 = new THREE.TextureLoader().load("images/two.jpg");
let texture3 = new THREE.TextureLoader().load("images/three.jpg");
let texture4 = new THREE.TextureLoader().load("images/four.jpg");
let texture5 = new THREE.TextureLoader().load("images/five.jpg");
let texture6 = new THREE.TextureLoader().load("images/six.jpg");
textureAll.push(new THREE.MeshBasicMaterial( { map: texture1} ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture2} ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture3} ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture4} ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture5} ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture6} ));
//let material = new THREE.MeshBasicMaterial( { map: texture} );
let cube = new THREE.Mesh( geometry, textureAll);
scene.add( cube );

camera.position.z = 2;

function animate(){
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

}
animate();