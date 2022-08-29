<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);

const isMenuOpen = ref(false);
const isLoaded = ref(false);
const onLoadedEvents = ref({});

provide("isMenuOpen", isMenuOpen);
provide("onLoadedEvents", onLoadedEvents);

onMounted(() => {
  // Setup

  addEventListener("mousemove", (event) => {
    gsap.to(".mouse-normal", {
      x: event.clientX - 20,
      y: event.clientY - 15,
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
    <Loading v-show="!isLoaded" />

    <div v-show="isLoaded">
      <div class="hidden xl:block mouse-normal w-12 h-12 fixed top-0 left-0 z-50 pointer-events-none" style="mix-blend-mode: difference">
        <svg viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="39.5" cy="39.5" r="38.5" stroke="white" stroke-width="2" />
        </svg>
      </div>
      <!-- <img class="mouse-normal w-12 h-12 fixed top-0 left-0 z-50" src="~assets/imgs/mouse-normal.png" style="-webkit-filter: invert(1); filter: invert(1)" /> -->
      <DashingHeader />
      <!-- <DashingMenuAnimate /> -->
      <DashingMenu />
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
html {
  .pointer {
    cursor: url(/new-mouse-arrow.png), pointer;
  }
  scroll-behavior: smooth;
}
body {
  font-family: arial-reg;
}

::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */
</style>
