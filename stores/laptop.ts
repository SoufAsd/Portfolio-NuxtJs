import { defineStore } from "pinia";
import { gsap } from "gsap";

export interface LaptopInterface {
  Model: any;
  Camera: any;
  Control: any;
  Clock: any;
  Renderer: any;
  Previous: string;
  Zoom: boolean;
  Animation: number
}

export const useLaptop = defineStore("laptop", {
  state: (): LaptopInterface => ({
    Model: {},
    Camera: {},
    Control: {},
    Clock: {},
    Renderer: {},
    Previous: ``,
    Zoom: false,
    Animation: 0,
  }),
  actions: {
    setModel(Model: object) {
      this.Model = Model;
    },
    setCamera(Camera: object) {
      this.Camera = Camera;
    },
    setControl(Control: object) {
      this.Control = Control;
    },
    setClock(Clock: object) {
      this.Clock = Clock;
    },
    setRenderer(Renderer: object) {
      this.Renderer = Renderer;
    },
    setPrevious(Previous: string) {
      this.Previous = Previous;
    },
    setZoom(Zoom: boolean) {
      this.Zoom = Zoom;
    },
    setAnimation(Animation: number) {
      this.Animation = Animation;
    },
    zoomIn(next: Function) {
      let z = this.Model.position.z,
        width = window.innerWidth,
        height = window.innerHeight;
      this.Previous = this.Clock.getElapsedTime();
      this.Renderer.setSize(height+300,height+300);
      this.Zoom = !this.Zoom;
      this.Clock.elapsedTime = 0;
      this.Clock.stop();
      this.Model.rotation.z = 0;
      this.animationZoom(1, 4, z, 23);
      setTimeout(next,700)
    },
    zoomOut(next: Function) {
      this.Zoom = !this.Zoom;
      this.Clock.start();
      this.Clock.elapsedTime = this.Previous;
      this.Model.rotation.z = this.Clock.elapsedTime;
      this.animationZoom(0, 0, 0, 70);
      next();
    },
    animationZoom(x: number, y: number, z: number, zoom: number) {
      let tl = gsap
        .timeline({ defaults: { duration: 2, ease: "expo.out" } })
        .to(this.Control.target, { x, y, z })
        .to(this.Camera.position, { x, y, z: z + zoom }, 0);
    },
    reset() {
      this.Model = {};
      this.Camera = {};
      this.Control = {};
      this.Clock = {};
      this.Previous = ``;
      this.Zoom = false;
    },
  },
  getters: {
    getLaptop(): object {
      return {
        object: this.Model,
        camera: this.Camera,
        control: this.Control,
        clock: this.Clock,
        previous: this.Previous,
        zoom: this.Zoom,
      };
    },
  },
});
