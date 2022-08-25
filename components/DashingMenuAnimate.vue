<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const menuCanvas = ref();
const isMenuOpen = inject("isMenuOpen");

const menuObjects = ref([]);
const router = useRouter();
const route = useRoute();

onMounted(() => {
  emojiBackground(route.name);
});

const pointer = new THREE.Vector2();
var text;
var liltext;
function emojiBackground(routeName) {
  console.log(routeName);
  // Scene
  const scene = new THREE.Scene(); //建立場景
  const fontLoader = new FontLoader();
  fontLoader.load("/fonts/dgo.json", (font) => {
    const textMaterial = new THREE.MeshBasicMaterial({});
    const transparentTextMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
    const textMaterial2 = new THREE.MeshBasicMaterial({ color: "#6372C6" });
    const textMaterial3 = new THREE.MeshBasicMaterial({ color: "black" });

    // var menuTitles = ["HOME"];
    var menuTitles = ["HOME", "WORK", "ABOUT", "SERVICES"];
    var menuLilTitles = ["WHERE YOU WANNA GO?", "WHAT WE DO?", "WHO WE ARE?", "HOW WE DO?"];
    var menuPositions = [new THREE.Vector3(-1.5, 0.45, 0), new THREE.Vector3(0.5, 0.45, 0), new THREE.Vector3(-1.5, -0.45, 0), new THREE.Vector3(0.5, -0.45, 0)];
    var menuLilPositions = [new THREE.Vector3(-1.6, 0.65, 0), new THREE.Vector3(0.4, 0.65, 0), new THREE.Vector3(-1.6, -0.25, 0), new THREE.Vector3(0.4, -0.25, 0)];
    for (let i = 0; i < menuTitles.length; i++) {
      const textGeometry = new TextGeometry(menuTitles[i], {
        font: font,
        size: 0.125,
        height: 0.25,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.01,
        bevelOffset: 0,
        bevelSegments: 1,
      });
      const lilTextGeometry = new TextGeometry(menuLilTitles[i], {
        font: font,
        size: 0.03,
        height: 0,
      });
      textGeometry.computeBoundingBox();
      // textGeometry.center();

      //將現在路由的標題改為透明的
      if (routeName == "index") {
        if (menuTitles[i].toLowerCase() == "home") {
          text = new THREE.Mesh(textGeometry, [transparentTextMaterial, textMaterial2]);
        } else {
          text = new THREE.Mesh(textGeometry, [textMaterial, textMaterial2]);
        }
      } else if (routeName == menuTitles[i].toLowerCase()) {
        text = new THREE.Mesh(textGeometry, [transparentTextMaterial, textMaterial2]);
      } else {
        text = new THREE.Mesh(textGeometry, [textMaterial, textMaterial2]);
      }

      liltext = new THREE.Mesh(lilTextGeometry, textMaterial3);

      scene.add(text, liltext);
      menuObjects.value.push(text);
      text.position.copy(menuPositions[i]);
      liltext.position.copy(menuLilPositions[i]);
    }
  });

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(5, sizes.width / sizes.height, 0.1, 2000);

  camera.position.z = 30;
  // camera.position.y = 10;
  camera.lookAt(scene.position);
  scene.add(camera);

  //raycaster
  const raycaster = new THREE.Raycaster();

  var intersectedObjects = menuObjects.value;

  const onMouseClick = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    var isIntersected = raycaster.intersectObjects(intersectedObjects);

    if (isIntersected.length > 0) {
      console.log("Mesh clicked!");
      if (isIntersected[0].object == menuObjects.value[0]) {
        const route = router.resolve({
          name: "index",
        });

        window.open(route.href, "_top");
      }
      if (isIntersected[0].object == menuObjects.value[1]) {
        const route = router.resolve({
          name: "work",
        });

        window.open(route.href, "_top");
      }
      if (isIntersected[0].object == menuObjects.value[2]) {
        const route = router.resolve({
          name: "about",
        });

        window.open(route.href, "_top");
      }
      if (isIntersected[0].object == menuObjects.value[3]) {
        const route = router.resolve({
          name: "services",
        });

        window.open(route.href, "_top");
      }
    }
  };
  const onMouseMove = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // console.log(pointer.x, pointer.y);
  };
  window.addEventListener("click", onMouseClick, false);
  window.addEventListener("mousemove", onMouseMove, false);

  //raycaster

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: menuCanvas.value,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);

  // Control

  // const orbitControl = new OrbitControls(camera, menuCanvas.value);
  //以下為最簡短操作需求

  // Animate
  var currentIntersect = null;

  const tick = () => {
    /// hover event//
    if (isMenuOpen.value) {
      if (pointer.x && pointer.y) {
        raycaster.setFromCamera({ x: pointer.x, y: pointer.y }, camera);
      }

      var intersects = raycaster.intersectObjects(intersectedObjects);
      if (intersects.length) {
        if (!currentIntersect) {
          currentIntersect = intersects[0];
          document.body.style.cursor = "pointer";
        }
      } else {
        if (currentIntersect) {
          document.body.style.cursor = "default";
        }
        currentIntersect = null;
      }
    }
    /// hover event//
    // Render
    if (menuObjects.value.length > 0) {
      // camera.lookAt(text.position);
      menuObjects.value.forEach((text) => {
        text.rotation.y = pointer.x * -0.1;
        text.rotation.x = pointer.y * 0.1;
      });
    }

    renderer.render(scene, camera);
  };

  window.addEventListener("resize", () => {
    //Controls
    // Update sizes
    // orbitControl.update();
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    // Update camera
    camera.aspect = sizes.width / sizes.height; //這個值是預防圖像扭曲
    camera.updateProjectionMatrix(); //然後執行這個來更新camera內部數值
  });
  renderer.setAnimationLoop(tick);
}
</script>

<template>
  <canvas ref="menuCanvas"></canvas>
</template>
<style></style>
