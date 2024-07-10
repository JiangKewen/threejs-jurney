import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.resize();
    // setTimeout(() => {
    //   this.trigger("resize");
    // }, 0);
  }

  resize() {
    window.addEventListener("resize", (resize) => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      this.trigger("resize");
    });
  }
}
