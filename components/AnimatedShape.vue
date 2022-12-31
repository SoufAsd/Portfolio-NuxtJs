<template lang="">
  <canvas class="laptop" :style="{ opacity: ready ? 1 : 0 }" />
</template>
<script>
import { useLaptop } from "~/stores/laptop";

export default {
  setup() {
    const laptopModal = useLaptop();

    return { laptopModal };
  },
  data() {
    return {
      ready: false,
      zoom: this.laptopModal.Zoom,
      camera: "",
      control: "",
      laptop: "",
      animation: "",
      clock: "",
      previous: this.laptopModal.Previous,
    };
  },
  methods: {
    zoomIn() {
      let x = this.laptop.position.x,
        y = this.laptop.position.y,
        z = this.laptop.position.z;
      this.animationZoom(1, 4, z, 20);
      cancelAnimationFrame(this.animation);
      this.laptop.rotation.z = 0;
      this.zoom = !this.zoom;
    },
    zoomOut() {
      this.zoom = !this.zoom;
      this.clock.start();
      this.clock.elapsedTime = this.previous;
      this.animationZoom(0, 0, 0, 70);
    },
    animationZoom(x, y, z, zoom) {
      let tl = gsap
        .timeline({ defaults: { duration: 1.5, ease: "expo.out" } })
        .to(this.control.target, { x, y, z })
        .to(this.camera.position, { x, y, z: z + zoom }, 0);
    },
  },
  async mounted() {
    const THREE = await import("three").then((m) => m.default || m);
    const { OrbitControls } = await import(
      "three/examples/jsm/controls/OrbitControls.js"
    ).then((m) => m.default || m);
    const { GLTFLoader } = await import(
      "three/examples/jsm/loaders/GLTFLoader.js"
    ).then((m) => m.default || m);

    let canvas = document.querySelector("canvas.laptop");

    while (!canvas) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      canvas = document.querySelector("canvas.laptop");
    }

    const scene = new THREE.Scene();

    let laptop;
    let light;

    const gltfLoader = new GLTFLoader();

    /*!
     * @loading_3D_modal
     **/
    gltfLoader.load("/assets/laptop/scene.gltf", (gltf) => {
      laptop = gltf.scene.children[0];
      laptop.position.y = -8;
      scene.add(laptop);
      this.ready = true;
      this.laptop = laptop;
      this.laptopModal.setModel(laptop);
    });

    /*!
     * @lighting_setup
     **/
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    /*!
     * @setting_setup
     **/
    const size = {
      width: 600,
      height: 600,
    };

    /*!
     * @camera_setup
     **/
    const camera = new THREE.PerspectiveCamera(
      70,
      size.width / size.height,
      0.1,
      100
    );
    camera.position.set(0, 2, 60);
    scene.add(camera);

    this.camera = camera;
    this.laptopModal.setCamera(camera);

    /*!
     * @control_setup
     **/
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.target.set(0, 0.75, 0);
    controls.enableDamping = true;
    controls.enablePan = false;
    /*!
     * @Y_axis_lock
     **/
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    this.control = controls;
    this.laptopModal.setControl(controls);

    /*!
     * @render_modal_on_canvas
     **/
    const renderer = new THREE.WebGLRenderer({
      antialiasing: true,
      canvas,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.laptopModal.setRenderer(renderer);

    const clock = new THREE.Clock();
    let previousTime = 0;

    this.clock = clock;
    this.laptopModal.setClock(clock);

    const tick = () => {
      let elapsedTime = clock.getElapsedTime();
      const _deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      if (laptop) {
        laptop.rotation.z = 0.4 * elapsedTime;
      }

      /*!
       * @update_controls
       **/
      controls.update();

      /*!
       * @update_render
       **/
      renderer.render(scene, camera);

      /*!
       * @callback_of_tick_function_in_a_loop
       **/
      this.animation = requestAnimationFrame(tick);
    };

    tick();
    // this.laptopModal.setAnimation(this.animation)
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/laptop.sass";
</style>
