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

onMounted(() => {
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
    });
    gsap.to(".mouse-default", {
      x: event.clientX - 15,
      y: event.clientY,
      ease: "Power4.easeOut",
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
