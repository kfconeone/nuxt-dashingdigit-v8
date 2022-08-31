<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Scrollbar from "smooth-scrollbar";
import { WindowSize, getCurrentWindowSize } from "~~/composables/windowSizeService";
const scrollbarRef = ref();
provide("scrollbarRef", scrollbarRef);
gsap.registerPlugin(ScrollTrigger);
useHead({
  title: "Services",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位提供的服務" }],
  script: [{ src: "https://unpkg.com/spacingjs", async: true }],
});
const onLoadedEvents: any = inject("onLoadedEvents");
var currentWindowSize: WindowSize = WindowSize.Mobile;

onMounted(() => {
  currentWindowSize = getCurrentWindowSize();
  window.addEventListener("resize", () => (currentWindowSize = getCurrentWindowSize()));

  onLoadedEvents.value["service"] = () => {
    console.log("service init");

    switch (currentWindowSize) {
      case WindowSize.Desktop:
      case WindowSize.Laptop:
        initSmoothScrollbarForDesktopAndLaptop();
        initGsapParallaxForDesktopAndLaptop();
        shrinkCenterForDesktopAndLaptop();

        break;
      case WindowSize.Tablet:
      case WindowSize.Mobile:
        console.log("hello tablet & mobile");
        initSmoothScrollbarForMobileAndTablet();
        shrinkCenterForMobileAndTablet();
        initGsapParallaxForMobileAndTablet();
        break;
      default:
        break;
    }
  };
});

function initGsapParallaxForDesktopAndLaptop() {
  gsap.to(".pc-text-wedesign", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-design-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".pc-img-wedesign", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-design-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".pc-webdesign", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-design-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(".pc-text-landing", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-landing-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".pc-img-landing", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-landing-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".pc-landing", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-landing-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(".pc-text-gm", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-gm-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".pc-img-gm", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-gm-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".pc-gm", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-gm-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(".pc-text-webapp", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-webapp-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".pc-img-webapp", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-webapp-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".pc-webapp", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".web-webapp-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
}
function initGsapParallaxForMobileAndTablet() {
  gsap.to(".sm-text-wedesign", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-design-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".sm-img-wedesign", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-design-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".sm-webdesign", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-design-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(".sm-text-landing", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-landing-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".sm-img-landing", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-landing-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".sm-landing", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-landing-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(".sm-text-gm", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-gm-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".sm-img-gm", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-gm-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".sm-gm", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-gm-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });

  gsap.to(".sm-text-webapp", {
    y: -300,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-webapp-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
  gsap.to(".sm-img-webapp", {
    y: -450,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-webapp-tri",
      start: "15% bottom",
      end: "+=200%",

      scrub: true,
    },
  });
  gsap.to(".sm-webapp", {
    y: -200,
    ease: "Power1.easeOut",
    scrollTrigger: {
      trigger: ".sm-web-webapp-tri",
      start: "15% bottom",
      end: "+=200%",
      scrub: true,
    },
  });
}

function shrinkCenterForDesktopAndLaptop() {
  gsap.to(".pc-service-center", {
    scrollTrigger: {
      trigger: ".pc-service-footer-tri",
      start: "20% bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    borderRadius: "30px",
    ease: "power4.easeOut",
    // "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
  });
  gsap.to(".pc-service-center", {
    transformOrigin: "center center",
    scale: 0.95,
    ease: "Power2.easeIn",

    scrollTrigger: {
      trigger: ".pc-service-footer-tri",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      pin: ".pc-service-center",
    },
  });
}
function shrinkCenterForMobileAndTablet() {
  gsap.to(".sm-service-center", {
    scrollTrigger: {
      trigger: ".sm-service-footer-tri",
      start: "20% bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    borderRadius: "30px",
    ease: "power4.easeOut",
    // "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
  });
  gsap.to(".sm-service-center", {
    transformOrigin: "center center",
    scale: 0.95,
    ease: "Power2.easeIn",

    scrollTrigger: {
      trigger: ".sm-service-footer-tri",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      pin: ".sm-service-center",
    },
  });
}

function initSmoothScrollbarForDesktopAndLaptop() {
  console.log("service smooth init");
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".service-scroll");
  scrollbarRef.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });

  ScrollTrigger.scrollerProxy(".service-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollTop = value;
      }
      return scrollbarRef.value.scrollTop;
    },
  });
  scrollbarRef.value.addListener(({ offset }) => {
    var fixedElem = document.getElementById("bg-services-pc");

    fixedElem.style.top = offset.y + "px";
    fixedElem.style.left = offset.x + "px";
    ScrollTrigger.update();
  });
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}
function initSmoothScrollbarForMobileAndTablet() {
  console.log("service smooth init");
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".sm-service-scroll");
  scrollbarRef.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });

  ScrollTrigger.scrollerProxy(".sm-service-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollTop = value;
      }
      return scrollbarRef.value.scrollTop;
    },
  });
  scrollbarRef.value.addListener(({ offset }) => {
    var fixedElem = document.getElementById("bg-services-sm");

    fixedElem.style.top = offset.y + "px";
    fixedElem.style.left = offset.x + "px";
    ScrollTrigger.update();
  });
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}
</script>
<template>
  <div class="hidden xl:block">
    <div class="bg-[#D3E741] service-scroll h-screen relative">
      <div class="bg-white pc-service-center relative overflow-hidden">
        <img id="bg-services-pc" class="bg-services-pc w-full h-screen sticky top-0" src="~/assets/imgs/bg-service-pc.png" />
        <div class="mt-[-100vh]">
          <div class="flex justify-center text-[#6372C6] w-full h-screen items-center relative">
            <div class="absolute z-0">
              <EmojiHandShake />
            </div>

            <div class="mr-24 relative z-10 flex flex-col 3xl:flex-row">
              <div class="3xl:pb-[300px] 3xl:order-last">
                <div class="w-72 ml-auto 3xl:ml-0">
                  <img src="~assets/imgs/allen.png" />
                </div>
              </div>
              <div class="relative z-10 self-end">
                <p style="font-family: dgo" class="text-[64px] 3xl:text-[80px]">
                  OUR SERVICES<br />
                  MAKE YOU SEXY!
                </p>
                <p class="text-xl 3xl:text-2xl 3xl:leading-[36px] mt-8">
                  我們負責創造各式SEXY IDEAS並積極實現<br />
                  目的是使你的品牌充滿新奇、趣味、優雅的互動體驗
                </p>
              </div>
            </div>
          </div>

          <div class="pb-[200px]">
            <div class="web-design-tri">
              <div class="relative">
                <div class="bg-white min-h-[450px] 3xl:min-h-[650px] pc-webdesign mx-auto mt-36 border-[3px] border-[#6372C6] w-[950px] 3xl:w-[1317px]"></div>

                <div class="absolute top-[2.5%] 3xl:top-[10%] left-0 w-full flex justify-center items-center gap-5 3xl:gap-10 py-7 px-10 text-[#6372C6]">
                  <div class="pc-text-wedesign">
                    <p class="text-[36px] 3xl:text-5xl" style="font-family: dgo">WEB DESIGN</p>
                    <p class="text-sm 3xl:text-2xl font-black 3xl:mt-6" style="font-family: arial-black">#品牌形象網站 #使用者介面<br class="hidden 3xl:block" />#網站後臺建置 #資料庫建置</p>
                    <p class="text-sm 3xl:text-xl leading-[1.5] 3xl:leading-[32px] mt-14">網站設計不僅只是數位化的展現，也包括品牌性的延伸，達訊<br />團隊致力於製作富含品牌視覺與互動元素的網站，使品牌在百<br />家爭鳴的線上時代也能具有強烈的識別性，使人印象深刻。</p>
                  </div>
                  <div class="w-[400px] 3xl:w-[550px] pc-img-wedesign">
                    <img class="w-full" src="~assets/imgs/web-design.gif" />
                  </div>
                </div>
              </div>
            </div>
            <div class="web-landing-tri">
              <div class="relative">
                <div class="bg-white min-h-[450px] 3xl:min-h-[650px] pc-landing mx-auto mt-36 border-[3px] border-[#6372C6] w-[950px] 3xl:w-[1317px]"></div>

                <div class="absolute top-0 left-0 w-full flex justify-center items-center gap-5 3xl:gap-10 py-7 px-10 text-[#6372C6]">
                  <div class="w-[400px] 3xl:w-[550px] pc-img-landing">
                    <img class="w-full" src="~assets/imgs/landing-page.gif" />
                  </div>
                  <div class="pc-text-landing">
                    <p class="text-[36px] 3xl:text-5xl" style="font-family: dgo">LANDING PAGE</p>
                    <p class="text-sm 3xl:text-2xl font-black 3xl:mt-6" style="font-family: arial-black">#UI / UX 設計 #icon 設計<br class="hidden 3xl:block" />#動畫設計 #插圖設計</p>
                    <p class="text-sm 3xl:text-xl leading-[1.5] 3xl:leading-[32px] mt-14">具有強烈目的性的著陸頁頁面，有更良好的導購效果<br />，達訊團隊提供強烈識別性的著陸頁面，與流暢的使<br />用者互動體驗，能大幅增加著陸頁的導流效果，轉換<br />效果也將隨之增加。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="web-gm-tri">
              <div class="relative">
                <div class="bg-white min-h-[450px] 3xl:min-h-[650px] pc-gm mx-auto mt-36 border-[3px] border-[#6372C6] w-[950px] 3xl:w-[1317px]"></div>

                <div class="absolute top-[10%] left-0 w-full flex justify-center items-center gap-5 3xl:gap-10 py-7 px-10 text-[#6372C6]">
                  <div class="pc-text-gm">
                    <p class="text-[36px] 3xl:text-5xl" style="font-family: dgo">GRAPHIC& MOTION</p>
                    <p class="text-sm 3xl:text-2xl font-black mt-6" style="font-family: arial-black">#插圖設計 #動畫設計 #社群貼文設計<br class="hidden 3xl:block" />#廣告設計 #EMAIL設計</p>
                    <p class="text-sm 3xl:text-xl leading-[1.5] 3xl:leading-[32px] mt-14">隨著社群媒體的興起，圖像與動畫的觀看度與日俱增，<br />達訊團隊以擅長的動畫特效與圖像設計合併，提供不僅<br />使觀賞者驚艷的作品，也能提高品牌的關注度，創造更<br />高的使用者黏著度。</p>
                  </div>
                  <div class="w-[400px] 3xl:w-[550px] pc-img-gm">
                    <img class="w-full" src="~assets/imgs/motion.gif" />
                  </div>
                </div>
              </div>
            </div>

            <div class="web-webapp-tri">
              <div class="relative">
                <div class="bg-white min-h-[450px] 3xl:min-h-[650px] pc-webapp mx-auto mt-36 border-[3px] border-[#6372C6] w-[950px] 3xl:w-[1317px]"></div>

                <div class="absolute top-[5%] left-0 w-full flex justify-center items-center gap-5 3xl:gap-10 py-7 px-10 text-[#6372C6]">
                  <div class="w-[400px] 3xl:w-[550px] pc-img-webapp">
                    <img class="w-full" src="~assets/imgs/web-app.gif" />
                  </div>
                  <div class="pc-text-webapp">
                    <p class="text-[36px] 3xl:text-5xl" style="font-family: dgo">WEB APP</p>
                    <p class="text-sm 3xl:text-2xl font-black mt-6" style="font-family: arial-black">#UI / UX 設計 #報表設計 #資料庫建置<br class="hidden 3xl:block" />#多平台登陸 #API串接 #金流串接</p>
                    <p class="text-sm 3xl:text-xl leading-[1.5] 3xl:leading-[32px] mt-14">WEB APP 比起原生應用程式，能更快速測試產品，有更<br />多靈活運用的空間，達訊團隊也看上WEB APP不限平台<br />的多種優勢，並運用達訊團隊本身的設計強項，為客戶<br />開發客製化且富含設計感的應用程式。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pc-service-footer-tri">
        <DashingFooter color="#D3E741" />
      </div>
    </div>
  </div>

  <div class="xl:hidden">
    <div class="bg-[#D3E741] sm-service-scroll h-screen relative">
      <div class="bg-white sm-service-center relative overflow-hidden">
        <img id="bg-services-sm" class="bg-services-sm w-full h-screen sticky top-0" src="~/assets/imgs/bg-service-sm.png" />
        <div class="mt-[-100vh]">
          <div class="flex justify-center h-screen items-end pb-[15%] text-[#6372C6] relative">
            <div class="absolute z-0">
              <EmojiHandShake />
            </div>
            <div>
              <div class="w-[110px] md:w-56 ml-auto">
                <img src="~assets/imgs/allen.png" />
              </div>
              <p style="font-family: dgo" class="w-fit md:text-5xl text-2xl md:leading-[1.5] leading-[1.5] md:mt-10 mt-5">
                OUR SERVICES<br />
                MAKE YOU SEXY!
              </p>
              <p class="text-xs md:text-xl leading-[18px] w-fit mt-4">
                我們負責創造各式SEXY IDEAS並積極實現<br />
                目的是使你的品牌充滿新奇、趣味、優雅的互動體驗
              </p>
            </div>
          </div>

          <div class="md:hidden flex justify-center mt-52 px-6 pb-24">
            <div class="pb-12">
              <div class="border-[3px] border-[#6372C6] rounded-br-[40px] px-3 pb-9 relative w-[280px] mx-auto">
                <div class="w-64">
                  <img class="w-full" src="~assets/imgs/web-design.gif" />
                </div>
                <p class="text-2xl text-[#6372C6]" style="font-family: dgo">WEB DESIGN</p>
                <p class="text-xs text-[#6372C6] font-bold mt-2">#品牌形象網站 #使用者介面 #網站後臺建置 <br />#資料庫建置</p>
                <p class="text-sm text-[#6372C6] font-bold mt-8">網站設計不僅只是數位化的展現，也包括品牌性的延伸，達訊團隊致力於製作富含品牌視覺與互動元素的網站，使品牌在百家爭鳴的線上時代也能具有強烈的識別性，使人印象深刻。</p>
              </div>

              <div class="border-[3px] text-[#6372C6] border-[#6372C6] rounded-br-[40px] px-3 pb-9 mt-48 w-[280px] mx-auto">
                <div class="w-64">
                  <img class="w-full" src="~assets/imgs/landing-page.gif" />
                </div>
                <p class="text-2xl" style="font-family: dgo">LANDING PAGE</p>
                <p class="text-xs font-bold mt-2">#UI / UX 設計 #icon 設計 #動畫設計 <br />#插圖設計</p>
                <p class="mt-8">具有強烈目的性的著陸頁頁面，有更良好的導購效果，達訊團隊提供強烈識別性的著陸頁面，與流暢的使用者互動體驗，能大幅增加著陸頁的導流效果，轉換效果也將隨之增加。</p>
              </div>

              <div class="border-[3px] border-[#6372C6] rounded-br-[40px] px-3 pb-9 mt-48 w-[280px] mx-auto">
                <div class="w-64">
                  <img class="w-full" src="~assets/imgs/motion.gif" />
                </div>
                <p class="text-2xl text-[#6372C6]" style="font-family: dgo">GRAPHIC &<br />MOTION</p>
                <p class="text-xs text-[#6372C6] font-bold mt-2">
                  #插圖設計 #動畫設計 #社群貼文設計<br />
                  #廣告設計 #EMAIL設計
                </p>
                <p class="text-sm text-[#6372C6] font-bold mt-8">隨著社群媒體的興起，圖像與動畫的觀看度與日俱增，達訊團隊以擅長的動畫特效與圖像設計合併，提供不僅使觀賞者驚艷的作品，也能提高品牌的關注度，創造更高的使用者黏著度。</p>
              </div>
              <div class="border-[3px] border-[#6372C6] rounded-br-[40px] px-3 pb-9 mt-48 w-[280px] mx-auto">
                <div class="w-64">
                  <img class="w-full" src="~assets/imgs/web-app.gif" />
                </div>
                <p class="text-2xl text-[#6372C6]" style="font-family: dgo">WEB APP</p>
                <p class="text-xs text-[#6372C6] font-bold mt-2">
                  #UI / UX 設計 #報表設計 #資料庫建置<br />
                  #多平台登陸 #API串接 #金流串接
                </p>
                <p class="text-sm text-[#6372C6] font-bold mt-8">Web app 比起原生應用程式，能更快速測試產品，有更多靈活運用的空間，達訊團隊也看上web app不限平台的多種優勢，並運用達訊團隊本身的設計強項，為客戶開發客製化且富含設計感的應用程式。</p>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="pb-12">
              <div class="sm-web-design-tri">
                <div class="relative">
                  <div class="bg-white min-h-[400px] sm-webdesign mx-auto mt-36 border-[3px] border-[#6372C6] w-[90%]"></div>

                  <div class="absolute top-[2.5%] 3xl:top-[10%] left-0 w-full flex justify-center items-center gap-2 py-7 text-[#6372C6]">
                    <div class="sm-text-wedesign">
                      <p class="text-2xl" style="font-family: dgo">WEB DESIGN</p>
                      <p class="text-base font-black mt-3" style="font-family: arial-black">#品牌形象網站 #使用者介面<br />#網站後臺建置 #資料庫建置</p>
                      <p class="text-xs mt-6 w-[300px]">網站設計不僅只是數位化的展現，也包括品牌性的延伸，達訊團隊致力於製作富含品牌視覺與互動元素的網站，使品牌在百家爭鳴的線上時代也能具有強烈的識別性，使人印象深刻。</p>
                    </div>
                    <div class="w-[300px] sm-img-wedesign">
                      <img class="w-full" src="~assets/imgs/web-design.gif" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm-web-landing-tri">
                <div class="relative">
                  <div class="bg-white min-h-[400px] sm-landing mx-auto mt-36 border-[3px] border-[#6372C6] w-[90%]"></div>

                  <div class="absolute top-0 left-0 w-full flex justify-center items-center gap-2 py-7 px-10 text-[#6372C6]">
                    <div class="w-[300px] sm-img-landing">
                      <img class="w-full" src="~assets/imgs/landing-page.gif" />
                    </div>
                    <div class="sm-text-landing">
                      <p class="text-2xl" style="font-family: dgo">LANDING PAGE</p>
                      <p class="text-base font-black mt-3" style="font-family: arial-black">#UI / UX 設計 #icon 設計<br />#動畫設計 #插圖設計</p>
                      <p class="text-xs mt-6 w-[300px]">具有強烈目的性的著陸頁頁面，有更良好的導購效果<br />，達訊團隊提供強烈識別性的著陸頁面，與流暢的使<br />用者互動體驗，能大幅增加著陸頁的導流效果，轉換<br />效果也將隨之增加。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sm-web-gm-tri">
                <div class="relative">
                  <div class="bg-white min-h-[400px] sm-gm mx-auto mt-36 border-[3px] border-[#6372C6] w-[90%]"></div>

                  <div class="absolute top-[10%] left-0 w-full flex justify-center items-center gap-2 py-7 px-10 text-[#6372C6]">
                    <div class="sm-text-gm">
                      <p class="text-2xl" style="font-family: dgo">GRAPHIC& MOTION</p>
                      <p class="text-base font-black mt-3" style="font-family: arial-black">#插圖設計 #動畫設計 #社群貼文設計<br />#廣告設計 #EMAIL設計</p>
                      <p class="text-xs mt-6 w-[300px]">隨著社群媒體的興起，圖像與動畫的觀看度與日俱增，<br />達訊團隊以擅長的動畫特效與圖像設計合併，提供不僅<br />使觀賞者驚艷的作品，也能提高品牌的關注度，創造更<br />高的使用者黏著度。</p>
                    </div>
                    <div class="w-[300px] sm-img-gm">
                      <img class="w-full" src="~assets/imgs/motion.gif" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="sm-web-webapp-tri">
                <div class="relative">
                  <div class="bg-white min-h-[400px] sm-webapp mx-auto mt-36 border-[3px] border-[#6372C6] w-[90%]"></div>

                  <div class="absolute top-[5%] left-0 w-full flex justify-center items-center gap-2 py-7 px-10 text-[#6372C6]">
                    <div class="w-[300px] sm-img-webapp">
                      <img class="w-full" src="~assets/imgs/web-app.gif" />
                    </div>
                    <div class="sm-text-webapp">
                      <p class="text-2xl" style="font-family: dgo">WEB APP</p>
                      <p class="text-base font-black mt-3" style="font-family: arial-black">#UI / UX 設計 #報表設計 #資料庫建置<br />#多平台登陸 #API串接 #金流串接</p>
                      <p class="text-xs mt-6 w-[300px]">WEB APP 比起原生應用程式，能更快速測試產品，有更<br />多靈活運用的空間，達訊團隊也看上WEB APP不限平台<br />的多種優勢，並運用達訊團隊本身的設計強項，為客戶<br />開發客製化且富含設計感的應用程式。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm-service-footer-tri">
        <DashingFooter color="#D3E741" />
      </div>
    </div>
  </div>
</template>
