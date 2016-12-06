console.log("ww=" + window.innerWidth + " wh=" + window.innerHeight);

var canvas = document.getElementById('babylonCanvas');
var engine = new BABYLON.Engine(canvas, true) ;
var sceneB = new BABYLON.Scene(engine);

var camera = new BABYLON.ArcRotateCamera("camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), sceneB);
sceneB.activeCamera.attachControl(canvas);

var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 0), sceneB);
light.diffuse = new BABYLON.Color3(1, 0, 0);
light.specular = new BABYLON.Color3(1, 1, 1);

var colors = new BABYLON.Color4(1, 0, 0, 0.2);
var box = BABYLON.MeshBuilder.CreateBox("box", {size: 3, faceColors: colors}, sceneB);

engine.runRenderLoop(function () {
     box.rotation.x += 0.005;
     box.rotation.y += 0.01;
     sceneB.render();
});

console.log("done");
