import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import Sizes from "./utils/Sizes";
import Timer from "./utils/Timer";
import Renderer from "./utils/Renderer";
import Scene from "./utils/Scene";

const size = new Sizes();
const timer = new Timer();
const renderer = new Renderer();
const scene = new Scene();

renderer.value.setSize(size.width, size.height);

const camera = new THREE.PerspectiveCamera(75, 100 / 100, 0.1, 100);
camera.aspect = size.width / size.height;
camera.updateProjectionMatrix();
camera.position.x = 3;
camera.position.z = 20;
camera.lookAt(0, 0, 0);
scene.value.add(camera);

const orbit = new OrbitControls(camera, renderer.value.domElement);

size.on("resize", () => {
  renderer.value.setSize(size.width, size.height);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
});
timer.on("tick", () => {
  if (renderer.value) {
    renderer.value.render(scene.value, camera);
    // const elapsedTime = timer.value.getElapsed();
    // material.uniforms.uTime.value = elapsedTime;
    orbit.update();
  }
});

const mesh = new THREE.Mesh(
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.MeshBasicMaterial({ color: 0x56f0e9 })
);
scene.value.add(mesh);
