<script setup lang="ts">
useHead({
  title: "Services",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位提供的服務" }],
  script: [{ src: "https://unpkg.com/spacingjs", async: true }],
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
    <div class="flex justify-center mt-96 text-[#6372C6]">
      <div class="mr-24">
        <p style="font-family: dgo" class="text-6xl">
          OUR SERVICES<br />
          MAKE YOU SEXY!
        </p>
        <p class="text-xl leading-[34px] mt-8">
          我們負責創造各式SEXY IDEAS並積極實現<br />
          目的是使你的品牌充滿新奇、趣味、優雅的互動體驗
        </p>
      </div>
    </div>
    <div class="flex text-[#6372C6] justify-center">
      <div>
        <p class="text-4xl leading-[68px]" style="font-family: dgo">WEB DESIGN</p>
        <p class="text-sm font-black" style="font-family: arial-black">#品牌形象網站 #使用者介面 #網站後臺建置 #資料庫建置</p>
        <p class="text-sm mt-12">網站設計不僅只是數位化的展現，也包括品牌性的延伸，達訊<br />團隊致力於製作富含品牌視覺與互動元素的網站，使品牌在百<br />家爭鳴的線上時代也能具有強烈的識別性，使人印象深刻。</p>
      </div>
      <div></div>
    </div>
    <div class="flex text-[#6372C6] justify-center mt-12">
      <div></div>
      <div>
        <p class="text-4xl leading-[68px]" style="font-family: dgo">LANDING PAGE</p>
        <p class="text-sm font-black" style="font-family: arial-black">#UI / UX 設計 #icon 設計 #動畫設計 #插圖設計</p>
        <p class="text-sm mt-12">具有強烈目的性的著陸頁頁面，有更良好的導購效果<br />，達訊團隊提供強烈識別性的著陸頁面，與流暢的使<br />用者互動體驗，能大幅增加著陸頁的導流效果，轉換<br />效果也將隨之增加。</p>
      </div>
    </div>

    <div class="flex text-[#6372C6] justify-center mt-12">
      <div></div>
      <div>
        <p class="text-4xl leading-[68px]" style="font-family: dgo">GRAPHIC& MOTION</p>
        <p class="text-sm font-black" style="font-family: arial-black">#插圖設計 #動畫設計 #社群貼文設計 #廣告設計 #EMAIL設計</p>
        <p class="text-sm mt-12">隨著社群媒體的興起，圖像與動畫的觀看度與日俱增，<br />達訊團隊以擅長的動畫特效與圖像設計合併，提供不僅<br />使觀賞者驚艷的作品，也能提高品牌的關注度，創造更<br />高的使用者黏著度。</p>
      </div>
    </div>

    <div class="flex text-[#6372C6] justify-center mt-12">
      <div>
        <p class="text-4xl leading-[68px]" style="font-family: dgo">WEB APP</p>
        <p class="text-sm font-black" style="font-family: arial-black">#UI / UX 設計 #報表設計 #資料庫建置 #多平台登陸 #API串接 #金流串接</p>
        <p class="text-sm mt-12">WEB APP 比起原生應用程式，能更快速測試產品，有更<br />多靈活運用的空間，達訊團隊也看上WEB APP不限平台<br />的多種優勢，並運用達訊團隊本身的設計強項，為客戶<br />開發客製化且富含設計感的應用程式。</p>
      </div>
      <div></div>
    </div>
    <DashingFooter color="#D3E741" />
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
