<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
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
    <div class="max-w-[1920px] mx-auto relative">
      <div>1920</div>
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
          <div class="flex justify-center mt-20">MORE</div>
        </div>
      </div>

      <div class="w-full h-screen bg-orange-400 flex justify-center items-center">sss</div>
      <DashingFooter color="#D3E741" />
    </div>
  </div>

  <div class="hidden md:block xl:hidden">
    <div>768</div>
  </div>

  <div class="md:hidden">
    <div>320</div>
  </div>
</template>
<style>
body {
  font-family: arial-reg;
}
</style>
