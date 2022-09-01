<script setup lang="ts">
import { gsap } from "gsap";
const isMenuOpen = inject("isMenuOpen");

onMounted(() => {
  if (document.querySelector(".menu-vertical-track")) {
    gsap.to(".menu-vertical-track", {
      ease: "none",
      y: -10000,
      duration: 1000,
      repeat: -1,
    });
  }
  if (document.querySelector(".menu-horizontal-track")) {
    gsap.to(".menu-horizontal-track", {
      ease: "none",
      x: -10000,
      duration: 1000,
      repeat: -1,
    });
  }
});

function onClickToggle() {
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
  <div class="hidden xl:block">
    <div class="menu w-screen h-screen top-0 z-40 fixed origin-top translate-y-[-100%]" style="background: linear-gradient(90deg, #d3e741 42.69%, #ffffff 104.03%)">
      <div class="flex gap-3.5 mt-16 absolute right-[7.5%] bottom-[7.5%]">
        <NuxtLink href="https://www.behance.net/dashing" target="_blank">
          <img class="w-9 h-9" alt="instagram icon" src="~assets/imgs/icon-behance.png" />
        </NuxtLink>
        <NuxtLink href="https://www.facebook.com/dashingdigitTW" target="_blank">
          <img class="w-9 h-9" alt="facebook icon" src="~assets/imgs/icon-facebook.png" />
        </NuxtLink>
        <NuxtLink href="https://www.instagram.com/dashing_digit/?igshid=YmMyMTA2M2Y%3D" target="_blank">
          <img class="w-9 h-9" alt="behance icon" src="~assets/imgs/icon-instagram.png" />
        </NuxtLink>
      </div>

      <div class="bg-white fixed top-0 w-fit h-full whitespace-nowrap overflow-hidden py-3 sm:py-5">
        <p class="text-[#D3E741] text-base sm:text-4xl menu-vertical-track" style="writing-mode: vertical-lr">
          Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right
          reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all
          right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright
          all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022
          copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit
          ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing
          digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right
          reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.
        </p>
      </div>
      <DashingMenuAnimate />
    </div>
  </div>

  <div class="xl:hidden">
    <div class="menu w-screen h-screen top-0 z-40 fixed origin-top translate-y-[-100%] pt-[35%] sm:pt-[25%]" style="background: linear-gradient(90deg, #d3e741 42.69%, #ffffff 104.03%)">
      <div class="pl-14 sm:pl-36 text-white text-[30px] sm:text-[40px] leading-none tracking-wider w-fit">
        <div>
          <NuxtLink class="pointer" to="/" target="_top" @click="onClickToggle">
            <p style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">HOME</p>
          </NuxtLink>
        </div>
        <div class="mt-10 sm:mt-20">
          <NuxtLink class="pointer" to="/about" target="_top" @click="onClickToggle">
            <p class="" style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">ABOUT</p>
          </NuxtLink>
        </div>
        <div class="mt-10 sm:mt-20">
          <NuxtLink class="pointer" to="/work" target="_top" @click="onClickToggle">
            <p style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">WORK</p>
          </NuxtLink>
        </div>
        <div class="mt-10 sm:mt-20">
          <NuxtLink class="pointer" to="/services" target="_top" @click="onClickToggle">
            <p style="font-family: dgo; text-shadow: -5px 4px 0px #6372c6; text-border: 1px solid #6372c6; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #6372c6">SERVICES</p>
          </NuxtLink>
        </div>

        <div class="flex gap-3 mt-16">
          <NuxtLink href="https://www.behance.net/dashing" target="_blank">
            <img class="w-5 h-5" alt="instagram icon" src="~assets/imgs/icon-behance.png" />
          </NuxtLink>
          <NuxtLink href="https://www.facebook.com/dashingdigitTW" target="_blank">
            <img class="w-5 h-5" alt="facebook icon" src="~assets/imgs/icon-facebook.png" />
          </NuxtLink>
          <NuxtLink href="https://www.instagram.com/dashing_digit/?igshid=YmMyMTA2M2Y%3D" target="_blank">
            <img class="w-5 h-5" alt="behance icon" src="~assets/imgs/icon-instagram.png" />
          </NuxtLink>
        </div>
      </div>
      <div class="bg-white fixed bottom-0 w-full whitespace-nowrap overflow-hidden py-3 sm:py-5">
        <p class="text-[#D3E741] text-base sm:text-4xl menu-horizontal-track">
          Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right
          reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all
          right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright
          all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022
          copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit
          ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing
          digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right
          reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.Dashing digit ©2022 copyright all right reserved.
        </p>
      </div>
    </div>
  </div>
</template>
