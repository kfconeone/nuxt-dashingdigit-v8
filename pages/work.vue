<script setup lang="ts">
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { gsap } from "gsap";
useHead({
  title: "Work",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位專案" }],
  script: [{ src: "https://unpkg.com/spacingjs", async: true }],
});

onMounted(() => {});
</script>
<template>
  <div class="hidden 3xl:block">
    <div class="bg-white">
      <div class="bg-[#262723]">
        <div class="grid grid-cols-12 pl-10">
          <div style="font-family: dgo" class="col-start-3 col-span-full text-white mt-[345px]">
            <p class="text-[64px] leading-[78px]">
              WE DONT’T<br />
              WORK FOR YOU
            </p>
            <p class="text-[100px]">WE WORK WITH YOU</p>
            <div class="bg-black w-fit mt-6 text-xl">
              <p class="" style="font-family: arial-reg">達訊團隊以感同身受的角度了解你們，我們不為你們工作</p>
            </div>
            <div class="bg-black w-fit mt-12 text-xl">
              <p class="" style="font-family: arial-reg">我們與你們合作共同解決你們遭遇的所有問題與困難，當一個</p>
            </div>
            <div class="bg-black w-fit mt-3 text-xl">
              <p class="" style="font-family: arial-reg">可以與你密切溝通，且能始終如一交付高品質成果的夥伴</p>
            </div>
          </div>
        </div>
        <div class="flex text-white justify-center gap-12 mt-64">
          <div class="w-[500px] border-[5px] border-[#D3E741] rounded-[5px] h-fit">
            <img class="w-full" w src="~assets/imgs/demo.png" />
            <div class="border-t-[5px] border-[#D3E741] pl-8 pr-5 pt-5 flex justify-between">
              <div class="pb-12">
                <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
              </div>
              <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
            </div>
          </div>
          <div class="w-[500px] border-[5px] border-[#D3E741] rounded-[5px] h-fit mt-40">
            <img class="w-full" w src="~assets/imgs/demo.png" />
            <div class="border-t-[5px] border-[#D3E741] pl-8 pr-5 pt-5 flex justify-between">
              <div class="pb-12">
                <h1 class="text-[46px]" style="font-family: arial-bd">BELLA UNO</h1>
                <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
              </div>
              <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
            </div>
          </div>
        </div>
        <div class="flex text-white justify-center gap-12 mt-16">
          <div class="w-[500px] border-[5px] border-[#D3E741] rounded-[5px] h-fit mr-80">
            <img class="w-full" w src="~assets/imgs/demo.png" />
            <div class="border-t-[5px] border-[#D3E741] pl-8 pr-5 pt-5 flex justify-between">
              <div class="pb-12">
                <h1 class="text-[46px]" style="font-family: arial-bd">全國古蹟日</h1>
                <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
              </div>
              <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <DashingFooter color="#FFFFFF" />
    </div>
  </div>

  <div class="hidden xl:block 3xl:hidden">
    <div class="bg-white">
      <div class="bg-[#262723]">
        <div class="grid grid-cols-12 pl-10">
          <p class="col-span-1 text-white" style="font-family: corbel-bold-italic">Dashing</p>
          <div style="font-family: dgo" class="col-start-3 col-span-full text-white mt-[345px]">
            <p class="text-[40px] leading-[54px]">
              WE DONT’T<br />
              WORK FOR YOU
            </p>
            <p class="text-[64px]">WE WORK WITH YOU</p>
            <div class="bg-black w-fit mt-6">
              <p class="" style="font-family: arial-reg">達訊團隊以感同身受的角度了解你們，我們不為你們工作</p>
            </div>
            <div class="bg-black w-fit mt-12">
              <p class="" style="font-family: arial-reg">我們與你們合作共同解決你們遭遇的所有問題與困難，當一個</p>
            </div>
            <div class="bg-black w-fit mt-3">
              <p class="" style="font-family: arial-reg">可以與你密切溝通，且能始終如一交付高品質成果的夥伴</p>
            </div>
          </div>
        </div>
        <div class="flex text-white justify-center gap-12 mt-64">
          <div class="w-[500px] border-[5px] border-[#D3E741] rounded-[5px] h-fit">
            <img class="w-full" w src="~assets/imgs/demo.png" />
            <div class="border-t-[5px] border-[#D3E741] pl-8 pr-5 pt-5 flex justify-between">
              <div class="pb-12">
                <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
              </div>
              <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
            </div>
          </div>
          <div class="w-[500px] border-[5px] border-[#D3E741] rounded-[5px] h-fit mt-40">
            <img class="w-full" w src="~assets/imgs/demo.png" />
            <div class="border-t-[5px] border-[#D3E741] pl-8 pr-5 pt-5 flex justify-between">
              <div class="pb-12">
                <h1 class="text-[46px]" style="font-family: arial-bd">BELLA UNO</h1>
                <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
              </div>
              <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
            </div>
          </div>
        </div>
        <div class="flex text-white justify-center gap-12 mt-16">
          <div class="w-[500px] border-[5px] border-[#D3E741] rounded-[5px] h-fit mr-80">
            <img class="w-full" w src="~assets/imgs/demo.png" />
            <div class="border-t-[5px] border-[#D3E741] pl-8 pr-5 pt-5 flex justify-between">
              <div class="pb-12">
                <h1 class="text-[46px]" style="font-family: arial-bd">全國古蹟日</h1>
                <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
              </div>
              <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
            </div>
          </div>
        </div>
      </div>
      <DashingFooter color="#FFFFFF" />
    </div>
  </div>

  <div class="hidden md:block xl:hidden">
    <div class="bg-gray-700"></div>
  </div>

  <div class="md:hidden">
    <div class="bg-gray-700 h-screen w-full flex justify-center items-end pb-[25vh] px-4" style="">
      <div class="text-white" style="font-family: dgo">
        <p class="text-xl">WE DON'T<br />WORK FOR YOU</p>
        <p class="text-2xl whitespace-nowrap">WE WORK WITH YOU</p>
      </div>
    </div>

    <div class="bg-gray-700">
      <div class="flex text-white justify-center gap-12 px-6">
        <div class="w-full border-[2.5px] border-[#D3E741] rounded-[5px] h-fit">
          <img class="w-full" src="~assets/imgs/work-mia-sm.jpg" />
          <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
            <div class="">
              <h1 class="text-[28px]" style="font-family: arial-bd">MIA TREASURE</h1>
              <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
            </div>
            <img class="self-start w-7" src="~assets/imgs/social-media-icon.svg" />
          </div>
          <div class="px-3 flex justify-end py-5"><button class="w-fit text-[#D3E741] text-xs border-[1px] rounded-[24px] py-0.5 px-4 border-[#D3E741]" type="button">More</button></div>
        </div>
      </div>
      <div class="flex text-white justify-center gap-12 px-6 mt-20">
        <div class="w-full border-[2.5px] border-[#D3E741] rounded-[5px] h-fit">
          <img class="w-full" src="~assets/imgs/work-bella-sm.jpg" />
          <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
            <div class="">
              <h1 class="text-[28px]" style="font-family: arial-bd">BELLA UNO</h1>
              <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
            </div>
            <img class="self-start w-7" src="~assets/imgs/social-media-icon.svg" />
          </div>
          <div class="px-3 flex justify-end py-5"><button class="w-fit text-[#D3E741] text-xs border-[1px] rounded-[24px] py-0.5 px-4 border-[#D3E741]" type="button">More</button></div>
        </div>
      </div>
      <div class="flex text-white justify-center gap-12 px-6 mt-20">
        <div class="w-full border-[2.5px] border-[#D3E741] rounded-[5px] h-fit">
          <img class="w-full" src="~assets/imgs/work-ancient-sm.jpg" />
          <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
            <div class="">
              <h1 class="text-[28px] font-bold" style="font-family: arial-bd">全國古蹟日</h1>
              <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
            </div>
            <img class="self-start w-7" src="~assets/imgs/social-media-icon.svg" />
          </div>
          <div class="px-3 flex justify-end py-5"><button class="w-fit text-[#D3E741] text-xs border-[1px] rounded-[24px] py-0.5 px-4 border-[#D3E741]" type="button">More</button></div>
        </div>
      </div>

      <DashingFooter></DashingFooter>
    </div>
  </div>
</template>
<style>
body {
  font-family: arial-reg;
}
</style>
