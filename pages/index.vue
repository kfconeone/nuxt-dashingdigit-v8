<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import backgroundImagePath from "~/assets/imgs/bg-hero-sm.png";
useHead({
  title: "Dashing",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位" }],
  // script: [{ src: "https://unpkg.com/spacingjs", async: true }],
});

onMounted(() => {});
</script>
<template>
  <div class="hidden 3xl:block">
    <div class="mx-auto relative">
      <div class="w-full h-screen grid grid-cols-12 pl-11 pr-9 pb-24 bg-gray-700 overflow-hidden">
        <div class="pl-14 col-start-3 col-span-8 w-full gap-[7.3vw]">
          <div class="pt-64 text-white" style="font-family: dgo">
            <p class="font-normal text-[70px] leading-[110.8%]">We Create</p>
            <p class="text-[#D3E741] text-[130px] leading-[143px]">INSANELY</p>
            <p class="text-[80px] leading-[116px]">Digital experience</p>
            <div style="font-family: arial-bd" class="font-bold text-2xl tracking-[0.08em] mt-5">
              <p>專注於新奇的互動設計</p>
              <p>打造迷人的使用者體驗</p>
            </div>
          </div>
        </div>
        <div class="h-full col-start-11 flex items-end">
          <div class="w-24 h-24 rounded-full bg-[#6372C6]"></div>
        </div>
      </div>

      <div class="w-full h-screen bg-blue-400 flex justify-center items-center">
        <div>
          <div class="w-[960px]">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="1.5"
              :coverflowEffect="{
                rotate: 0,
                stretch: -50,
                depth: 500,
                modifier: 3,
                slideShadows: true,
              }"
              :loop="true"
              :modules="[EffectCoverflow, Pagination]"
              class="mySwiper"
            >
              <swiper-slide>
                <div>
                  <img src="~assets/imgs/kgold-demo.png" />
                  <p class="text-sm">一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="~assets/imgs/kgold-demo.png" />
                  <p class="text-sm">一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="~assets/imgs/kgold-demo.png" />
                  <p class="text-sm">一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="flex justify-center mt-20 text-[#D3E741] mx-auto py-3" style="width: 149px; background: #262723; border: 2px solid #d3e741; border-radius: 44px">
            <p>MORE</p>
          </div>
        </div>
      </div>
      <DashingFooter color="#D3E741" />
    </div>
  </div>

  <div class="hidden xl:block 3xl:hidden">
    <div class="relative">
      <div class="w-full h-screen grid grid-cols-12 pl-11 pr-9 pb-24 bg-red-400">
        <!-- <p class="text-xl italic font-bold leading-6 tracking-[0.005em] mt-8 text-white" style="font-family: corbel-bold-italic">Dashing</p> -->
        <div class="pl-14 col-start-3 col-span-8 w-full gap-[7.3vw]">
          <div class="pt-48" style="font-family: dgo">
            <p class="font-normal text-4xl leading-[110.8%]">We Create</p>
            <p class="text-[#D3E741] text-[80px] leading-[89px]">INSANELY</p>
            <p class="text-[64px] leading-[93px]">Digital experience</p>

            <div style="font-family: arial-bd" class="font-bold text-2xl tracking-[0.08em] mt-5">
              <p>專注於新奇的互動設計</p>
              <p>打造迷人的使用者體驗</p>
            </div>
          </div>
        </div>
        <div class="h-full col-start-11 flex items-end">
          <div class="w-24 h-24 rounded-full bg-[#6372C6]"></div>
        </div>
      </div>

      <div class="w-full h-screen bg-blue-400 flex justify-center items-center">
        <div>
          <div class="w-[960px]">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="2"
              :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 3,
                slideShadows: true,
              }"
              :loop="true"
              :modules="[EffectCoverflow, Pagination]"
              class="mySwiper"
            >
              <swiper-slide>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  <p class="text-sm">一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  <p class="text-sm">一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  <p class="text-sm">一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="flex justify-center mt-20 text-[#D3E741]">MORE</div>
        </div>
      </div>

      <div class="w-full h-screen bg-orange-400 flex justify-center items-center">sss</div>
      <DashingFooter color="#D3E741" />
    </div>
  </div>

  <div class="hidden md:block xl:hidden">
    <div class="relative bg-red-400">
      <!-- <div class="w-full h-full fixed top-0 flex justify-center items-center z-0" style="background-position: center; background-repeat: no-repeat; background-size: cover" :style="{ backgroundImage: `url(${backgroundImagePath})` }"></div> -->
      <div class="w-full flex justify-center items-center py-64 relative z-10">
        <div class="text-white" style="font-family: dgo">
          <p class="text-4xl">We create</p>
          <p class="text-[#D3E741] text-[68px]">INSANE</p>
          <p class="text-[40px]">Digital experience</p>
          <div class="mt-8">
            <p class="text-xl font-bold leading-[30px]" style="font-family: arial-reg">
              專注於新奇的互動設計<br />
              打造迷人的使用者體驗
            </p>
          </div>
          <div class="ml-auto bg-[#6372C6] rounded-full w-32 h-32 mt-32"></div>
        </div>
      </div>

      <div class="w-9/12 h-fit flex justify-center items-center z-10 relative mx-auto">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="1.5"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
          }"
          :loop="true"
          :modules="[EffectCoverflow, Pagination]"
          class="mySwiper"
        >
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project1-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project2-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project3-320.jpg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <DashingFooter color="#D3E741" />
  </div>

  <div class="md:hidden">
    <div class="relative bg-red-400">
      <!-- <div class="w-full h-full fixed top-0 flex justify-center items-center z-0" style="background-position: center; background-repeat: no-repeat; background-size: cover" :style="{ backgroundImage: `url(${backgroundImagePath})` }"></div> -->
      <div class="w-full flex justify-center items-center py-64 relative z-10">
        <div class="text-white" style="font-family: dgo">
          <p class="text-xs">We create</p>
          <p class="text-[#D3E741] text-[24px]">INSANE</p>
          <p class="text-xl">Digital experience</p>
          <div class="mt-8">
            <p class="text-xs font-bold leading-[18px]" style="font-family: arial-reg">
              專注於新奇的互動設計<br />
              打造迷人的使用者體驗
            </p>
          </div>
          <div class="ml-auto bg-[#6372C6] rounded-full w-16 h-16 mt-11"></div>
        </div>
      </div>

      <div class="w-full h-fit flex justify-center items-center z-10 relative">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="1.5"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
          }"
          :loop="true"
          :modules="[EffectCoverflow, Pagination]"
          class="mySwiper"
        >
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project1-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project2-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project3-320.jpg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <DashingFooter color="#D3E741" />
  </div>
</template>
<style>
body {
  font-family: arial-reg;
}
.swiper-slide-next,
.swiper-slide-prev {
  --tw-blur: blur(12px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
</style>
