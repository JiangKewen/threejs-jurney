import EventEmitter from "./EventEmitter";
import { Timer as THREETimer } from "three/addons/misc/Timer.js";

export default class Timer extends EventEmitter {
  constructor() {
    super();

    this.value = new THREETimer();
    this.tick = this.tick.bind(this);
    window.requestAnimationFrame((timestamp) => {
      this.tick(timestamp);
    });
  }
  tick(timestamp) {
    this.ticker = window.requestAnimationFrame(this.tick);

    this.value.update(timestamp);
    this.trigger("tick");
  }
  stop() {
    window.cancelAnimationFrame(this.ticker);
  }
}
