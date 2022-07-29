<script setup lang="ts">
import { gsap } from "gsap";
const isMenuOpen = inject("isMenuOpen");

onMounted(() => {});

function onClickToggle() {
  console.log("onClickToggle");
  if (isMenuOpen.value) {
    //移除 body overflow:hidden
    document.body.classList.remove("disabled-scroll");
    menuService.closeMenu();
  } else {
    //加入 body overflow:hidden
    window.document.body.classList.add("disabled-scroll");
    menuService.openMenu();
  }
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div class="menu w-screen h-screen top-0 z-40 fixed origin-top translate-y-[-100%]" style="background: linear-gradient(90deg, #d3e741 42.69%, #ffffff 104.03%)">
    <div class="flex w-full h-full items-center gap-48 justify-center">
      <div>
        <div>
          <p class="text-black font-bold text-base" style="font-family: arial-bd">WHERE YOU WANNA GO?</p>
          <NuxtLink to="/" target="_top" @click="onClickToggle">
            <p class="text-white text-[40px] leading-none tracking-wider w-fit ml-8" style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">HOME</p>
          </NuxtLink>
        </div>
        <div class="mt-20">
          <p class="text-black font-bold text-base" style="font-family: arial-bd">WHAT WE DO?</p>
          <NuxtLink to="/work" target="_top" @click="onClickToggle">
            <p class="text-white text-[40px] leading-none tracking-wider w-fit ml-8" style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">WORK</p>
          </NuxtLink>
        </div>
      </div>
      <div>
        <div>
          <p class="text-black font-bold text-base" style="font-family: arial-bd">WHO WE ARE?</p>
          <NuxtLink to="/about" target="_top" @click="onClickToggle">
            <p class="text-white text-[40px] leading-none tracking-wider w-fit ml-8" style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">ABOUT</p>
          </NuxtLink>
        </div>
        <div class="mt-20">
          <p class="text-black font-bold text-base" style="font-family: arial-bd">HOW WE DO?</p>
          <NuxtLink to="/services" target="_top" @click="onClickToggle">
            <p class="text-white text-[40px] leading-none tracking-wider w-fit ml-8" style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">SERVICES</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
