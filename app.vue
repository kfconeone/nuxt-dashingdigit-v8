<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import { WaitMilliseconds } from "flag-waiter";
gsap.registerPlugin(ScrollTrigger);

const isMobile = ref(false);
const isMenuOpen = ref(false);
const isLoaded = ref(false);
const onLoadedEvents = ref({});
const isPointer = ref(false);
provide("isPointer", isPointer);
provide("isMenuOpen", isMenuOpen);
provide("onLoadedEvents", onLoadedEvents);

useHead({
  title: "達訊數位股份有限公司",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊團隊專長於數位設計，致力於將新奇的互動元素帶進網頁設計、品牌設計、系統開發 ，提供品牌創造高流量的數位體驗。" }],
});

function loaded() {
  if ("ontouchstart" in document.documentElement) {
    console.log("mobile");
    isMobile.value = true;
  } else {
    console.log("desktop");
    isMobile.value = false;
  }

  var matches = [];
  const buttons = document.querySelectorAll("button");
  const inputs = document.querySelectorAll("input");
  const elementAs = document.querySelectorAll("a");
  const pointerDetected = document.querySelectorAll(".pointer-detected");
  matches = [...buttons, ...inputs, ...elementAs, ...pointerDetected];

  matches.forEach((d) => {
    d.addEventListener("mouseover", async () => {
      isPointer.value = true;
    });
    d.addEventListener("mouseleave", () => {
      isPointer.value = false;
    });
  });

  // Setup
  addEventListener("mousemove", (event) => {
    gsap.to(".mouse-normal", {
      x: event.clientX - 25,
      y: event.clientY - 10,
      duration: 0.25,
    });
    gsap.to(".mouse-default", {
      x: event.clientX - 15,
      y: event.clientY,
      ease: "Power4.easeOut",
      duration: 0.25,
    });
  });

  setTimeout(() => {
    isLoaded.value = true;
    document.body.style.overflow = "auto";
    for (let i in onLoadedEvents.value) {
      onLoadedEvents.value[i]();
    }
    nextTick(() => {
      ScrollTrigger.refresh();
    });
  }, 1000);
}

onMounted(async () => {
  let imgs: HTMLImageElement[] = Array.from(document.querySelectorAll("img"));
  console.log("imgs.filter((img) => img.complete == false).length", imgs.filter((img) => img.complete == false).length);
  while (imgs.filter((img) => img.complete == false).length > 0) {
    console.log("imgs.filter((img) => img.complete == false).length ", imgs.filter((img) => img.complete == false).length);
    await WaitMilliseconds(100);
  }

  loaded();
});
</script>

<template>
  <div id="container" class="relative">
    <!-- <Loading /> -->
    <Loading v-show="!isLoaded" />

    <div v-show="isLoaded">
      <div v-show="!isMobile">
        <div class="mouse-normal w-12 h-12 fixed top-0 left-0 z-[999] pointer-events-none" style="mix-blend-mode: difference">
          <svg viewBox="0 0 79 79" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39.5" cy="39.5" r="38.5" stroke="white" stroke-width="2" />
          </svg>
        </div>
        <div alt="cursor icon" :class="isPointer ? 'cursor-icon-pointer' : ''" class="mouse-default w-7 h-7 fixed top-0 left-0 z-[999] pointer-events-none" style="mix-blend-mode: difference">
          <img :src="isPointer ? '/mouse-pointer.png' : '/mouse-default.png'" />
        </div>
      </div>

      <DashingHeader />
      <DashingMenu />
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
html,
button,
input,
a,
.swiper-wrapper {
  cursor: none !important;
  scroll-behavior: smooth;
}

body {
  font-family: arial-reg;
}

::-webkit-scrollbar {
  display: none;
}

.cursor-icon-pointer {
}

/* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */
</style>
