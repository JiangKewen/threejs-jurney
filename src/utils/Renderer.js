import EventEmitter from "./EventEmitter";
import * as THREE from "three";

export default class Renderer extends EventEmitter {
  constructor() {
    super();

    this.value = new THREE.WebGLRenderer({ antialias: true });
    this.value.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // this.value.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.value.domElement);
  }
}
