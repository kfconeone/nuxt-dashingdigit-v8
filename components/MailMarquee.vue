<script setup lang="ts">
import { gsap } from "gsap";
import * as THREE from "three";
const mailCanvas = ref();
onMounted(() => {
  emojiBackground();
});

function emojiBackground() {
  // Scene
  const scene = new THREE.Scene(); //建立場景

  const textureLoader = new THREE.TextureLoader();
  const mailTexture = textureLoader.load("/mail.png");

  // Object
  const geometry = new THREE.PlaneGeometry(1.38, 1);

  const materials = new THREE.MeshBasicMaterial({
    transparent: true,
    map: mailTexture,
  });
  const material1 = new THREE.MeshBasicMaterial({
    transparent: true,
    map: mailTexture,
  });
  const material2 = new THREE.MeshBasicMaterial({
    transparent: true,
    map: mailTexture,
  });
  const material3 = new THREE.MeshBasicMaterial({
    transparent: true,
    map: mailTexture,
  });

  // Mesh
  const mesh = new THREE.Mesh(geometry, materials);
  const mesh1 = new THREE.Mesh(geometry, material1);
  const mesh2 = new THREE.Mesh(geometry, material2);
  const mesh3 = new THREE.Mesh(geometry, material3);
  mesh.position.x = 0;
  mesh.position.z = 0;
  // mesh.position.y = 1;

  mesh1.position.x = -2.5;
  mesh1.position.z = -0.25;

  mesh2.position.x = 2.5;
  mesh2.position.z = -0.25;

  mesh3.position.x = 0;
  mesh3.position.z = -0.5;

  scene.add(mesh, mesh1, mesh2, mesh3);

  let ease = "Power2.easeInOut";
  animationTl1(mesh, ease);
  animationTl2(mesh1, ease);
  animationTl3(mesh2, ease);
  animationTl4(mesh3, ease);

  // Sizes
  const sizes = {
    width: 128,
    height: 75,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(120, sizes.width / sizes.height, 0.1, 0.8);

  camera.position.z = 0.5;

  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: mailCanvas.value,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);

  // Animate
  const tick = () => {
    // Render
    renderer.render(scene, camera);
  };

  window.addEventListener("resize", () => {
    //Controls
    // sizes.width = window.innerWidth;
    // sizes.height = window.innerHeight;
    // Update renderer
    // renderer.setSize(sizes.width, sizes.height);
    // Update camera
    // camera.aspect = sizes.width / sizes.height; //這個值是預防圖像扭曲
    camera.updateProjectionMatrix(); //然後執行這個來更新camera內部數值
  });
  renderer.setAnimationLoop(tick);
}

function animationTl1(mesh, ease) {
  // let mesh = this.mesh;
  //0 > -2.5 > 0 > 2.5 > 0
  //0 > -0.25 > -0.5 > -0.25 > 0
  //   mesh.position.x = 0;
  //   mesh.position.z = 0;

  let tl1 = gsap.timeline({ repeat: -1, ease: ease });
  tl1.to(mesh.position, {
    x: -2.5,
    z: -0.25,
  });
  tl1.to(mesh.position, {
    x: 0,
    z: -0.5,
  });
  tl1.to(mesh.position, {
    x: 2.5,
    z: -0.25,
  });
  tl1.to(mesh.position, {
    x: 0,
    z: 0,
  });
}

// animationTl2();
function animationTl2(mesh, ease) {
  let tl2 = gsap.timeline({ repeat: -1, ease: ease });
  //0 > -2.5 > 0 > 2.5 > 0
  //0 > -0.25 > -0.5 > -0.25 > 0

  // mesh1.position.x = -2.5;
  // mesh1.position.z = -0.25;

  tl2.to(mesh.position, {
    x: 0,
    z: -0.5,
  });
  tl2.to(mesh.position, {
    x: 2.5,
    z: -0.25,
  });
  tl2.to(mesh.position, {
    x: 0,
    z: 0,
  });
  tl2.to(mesh.position, {
    x: -2.5,
    z: -0.25,
  });
}

// animationTl3();
function animationTl3(mesh2, ease) {
  // let mesh2 = this.mesh2;

  let tl3 = gsap.timeline({ repeat: -1, ease: ease });

  //0 > -2.5 > 0 > 2.5 > 0
  //0 > -0.25 > -0.5 > -0.25 > 0

  // mesh2.position.x = 2.5;
  // mesh2.position.z = -0.25;

  tl3.to(mesh2.position, {
    x: 0,
    z: 0,
  });

  tl3.to(mesh2.position, {
    x: -2.5,
    z: -0.25,
  });

  tl3.to(mesh2.position, {
    x: 0,
    z: -0.5,
  });
  tl3.to(mesh2.position, {
    x: 2.5,
    z: -0.25,
  });
}

// animationTl4();
function animationTl4(mesh3, ease) {
  // let mesh3 = this.mesh3;

  let tl4 = gsap.timeline({ repeat: -1, ease: ease });

  //0 > -2.5 > 0 > 2.5 > 0
  //0 > -0.25 > -0.5 > -0.25 > 0

  // mesh3.position.x = 0;
  // mesh3.position.z = -0.5;

  tl4.to(mesh3.position, {
    x: 2.5,
    z: -0.25,
  });
  tl4.to(mesh3.position, {
    x: 0,
    z: 0,
  });
  tl4.to(mesh3.position, {
    x: -2.5,
    z: -0.25,
  });
  tl4.to(mesh3.position, {
    x: 0,
    z: -0.5,
  });
}
</script>

<template>
  <canvas width="100%" height="100%" ref="mailCanvas"></canvas>
</template>
<style></style>
