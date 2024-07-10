import EventEmitter from "./EventEmitter";
import * as THREE from "three";

export default class Scene extends EventEmitter {
  constructor({ background, axesHelper } = {}) {
    super();

    this.value = new THREE.Scene();
    this.value.background = background || 0xffffff;

    // 坐标
    if (axesHelper) {
      this.value.add(new THREE.AxesHelper(axesHelper));
    }
  }
}
