<script setup lang="ts">
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//gsap

//smooth scrollbar
import Scrollbar from "smooth-scrollbar";
//smooth scrollbar

import { WindowSize, getCurrentWindowSize } from "~~/composables/windowSizeService";

gsap.registerPlugin(ScrollTrigger);
useHead({
  title: "Work",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位專案" }],
});
const onLoadedEvents: any = inject("onLoadedEvents");
var currentWindowSize: WindowSize = WindowSize.Mobile;

const scrollbarRef = ref();
provide("scrollbarRef", scrollbarRef);

onMounted(() => {
  currentWindowSize = getCurrentWindowSize();
  window.addEventListener("resize", () => (currentWindowSize = getCurrentWindowSize()));

  onLoadedEvents.value["work"] = () => {
    switch (currentWindowSize) {
      case WindowSize.Desktop:
      case WindowSize.Laptop:
        initSmoothScrollbarForDesktopAndLaptop();
        animateText();
        gsap.from(".work-mia-pc", {
          y: 200,
          x: 100,
          duration: 1,
          scale: 0,
          ease: "Power2.easeOut",
          scrollTrigger: {
            trigger: ".work-mia-pc-tri",
            start: "20% bottom",
            markers: true,
          },
        });
        shrinkCenterForDesktopAndLaptop();
        animateWiggle();

        break;
      case WindowSize.Tablet:
        initSmoothScrollbarForTablet();
        shrinkCenterForTablet();
        wiggleImgsForTablet();
        break;
      case WindowSize.Mobile:
        initSmoothScrollbarForMobile();
        shrinkCenterForMobile();
        break;
      default:
        break;
    }
  };
});

function initSmoothScrollbarForDesktopAndLaptop() {
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".work-scroll");
  scrollbarRef.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".work-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollTop = value;
      }
      return scrollbarRef.value.scrollTop;
    },
    scrollLeft(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollLeft = value; // setter
      }
      return scrollbarRef.value.scrollLeft; // getter
    },
  });
  scrollbarRef.value.addListener(({ offset }) => {
    var fixedElem = document.getElementById("bg-work-pc");

    ScrollTrigger.update();
    fixedElem.style.top = offset.y + "px";
    fixedElem.style.left = offset.x + "px";
  });
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}

function initSmoothScrollbarForTablet() {
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".md-work-scroll");
  scrollbarRef.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".md-work-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollTop = value;
      }
      return scrollbarRef.value.scrollTop;
    },
    scrollLeft(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollLeft = value; // setter
      }
      return scrollbarRef.value.scrollLeft; // getter
    },
  });
  scrollbarRef.value.addListener(({ offset }) => {
    var fixedElem = document.getElementById("bg-work-md");

    ScrollTrigger.update();
    fixedElem.style.top = offset.y + "px";
    fixedElem.style.left = offset.x + "px";
  });
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}
function initSmoothScrollbarForMobile() {
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".sm-work-scroll");
  scrollbarRef.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".sm-work-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollTop = value;
      }
      return scrollbarRef.value.scrollTop;
    },
    scrollLeft(value) {
      if (arguments.length) {
        scrollbarRef.value.scrollLeft = value; // setter
      }
      return scrollbarRef.value.scrollLeft; // getter
    },
  });
  scrollbarRef.value.addListener(({ offset }) => {
    var fixedElem = document.getElementById("bg-work-sm");

    ScrollTrigger.update();
    fixedElem.style.top = offset.y + "px";
    fixedElem.style.left = offset.x + "px";
  });
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}

function shrinkCenterForDesktopAndLaptop() {
  gsap.to(".center", {
    scrollTrigger: {
      trigger: ".footer-tri",
      start: "20% bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    borderRadius: "30px",
    ease: "power4.easeOut",
  });
  gsap.to(".center", {
    transformOrigin: "center center",
    scale: 0.95,
    ease: "Power2.easeIn",

    scrollTrigger: {
      trigger: ".footer-tri",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      pin: ".center",
    },
  });
}

function shrinkCenterForMobile() {
  gsap.to(".sm-work-center", {
    scrollTrigger: {
      trigger: ".sm-work-footer-tri",
      start: "20% bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    borderRadius: "30px",
    ease: "power4.easeOut",
  });
  gsap.to(".sm-work-center", {
    transformOrigin: "center center",
    scale: 0.95,
    ease: "Power2.easeIn",

    scrollTrigger: {
      trigger: ".sm-work-footer-tri",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      pin: ".sm-work-center",
    },
  });
}
function shrinkCenterForTablet() {
  gsap.to(".md-work-center", {
    scrollTrigger: {
      trigger: ".md-work-footer-tri",
      start: "20% bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    borderRadius: "30px",
    ease: "power4.easeOut",
  });
  gsap.to(".md-work-center", {
    transformOrigin: "center center",
    scale: 0.95,
    ease: "Power2.easeIn",

    scrollTrigger: {
      trigger: ".md-work-footer-tri",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      pin: ".md-work-center",
    },
  });
}

function animateWiggle() {
  let animatedArray = [".work-mia-pc", ".work-bella-pc", ".work-ancient-pc"];
  for (let i = 0; i < animatedArray.length; i++) {
    var radius = Math.floor(Math.random() * 70) + 30;

    var xRandom = (Math.floor(Math.random() * 5) + 5) * (Math.floor(Math.random() * 2) + 1);
    var yRandom = (Math.floor(Math.random() * 5) + 5) * (Math.floor(Math.random() * 2) + 1);

    gsap.to(animatedArray[i], {
      duration: 4,
      yPercent: radius / yRandom,
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
    });

    gsap
      .to(animatedArray[i], {
        duration: 4,
        xPercent: radius / xRandom,
        ease: "Sine.easeInOut",
        repeat: -1,
        yoyo: true,
      })
      .progress(0.5);
  }
}

function wiggleImgsForTablet() {
  let animatedArray = [".work-mia-sm", ".work-bella-sm", ".work-ancient-sm"];
  for (let i = 0; i < animatedArray.length; i++) {
    var radius = Math.floor(Math.random() * 70) + 30;

    var xRandom = (Math.floor(Math.random() * 5) + 5) * (Math.floor(Math.random() * 2) + 1);
    var yRandom = (Math.floor(Math.random() * 5) + 5) * (Math.floor(Math.random() * 2) + 1);

    gsap.to(animatedArray[i], {
      duration: 4,
      yPercent: radius / yRandom,
      ease: "Sine.easeInOut",
      repeat: -1,
      yoyo: true,
    });

    gsap
      .to(animatedArray[i], {
        duration: 4,
        xPercent: radius / xRandom,
        ease: "Sine.easeInOut",
        repeat: -1,
        yoyo: true,
      })
      .progress(0.5);
  }
}

function animateText() {
  let tl = gsap.timeline();
  tl.to([".work-text-3xl", ".work-greeting"], {
    duration: 1.5,
    y: 0,
    ease: "power4",
    stagger: 0.3,
  });
}
</script>
<template>
  <div class="hidden xl:block">
    <div class="bg-white work-scroll h-screen relative">
      <div class="bg-[#262723] center relative overflow-hidden">
        <img id="bg-work-pc" class="bg-work-pc w-full h-screen sticky top-0" src="~/assets/imgs/bg-workabout-1280.webp" />

        <div class="mt-[-100vh]">
          <div class="grid grid-cols-12 pl-10">
            <div style="font-family: dgo" class="col-start-3 col-span-full text-white mt-[345px]">
              <div class="flex items-end gap-10">
                <div>
                  <div class="work-text1-3xl-trigger overflow-hidden">
                    <p class="work-text-3xl text-[40px] 3xl:text-[64px] leading-[1.5] 3xl:leading-[78px] w-fit translate-y-full">WE DON’T</p>
                  </div>
                  <div class="work-text2-3xl-trigger overflow-hidden">
                    <p class="work-text-3xl text-[40px] 3xl:text-[64px] leading-[1.5] 3xl:leading-[78px] w-fit translate-y-full">WORK FOR YOU</p>
                  </div>
                </div>
                <div class="w-44 work-text3-3xl-trigger overflow-hidden">
                  <img class="w-full work-greeting translate-y-full" src="~assets/imgs/greetinghand.gif" />
                </div>
              </div>
              <div class="work-text3-3xl-trigger overflow-hidden">
                <p class="text-[64px] 3xl:text-[100px] work-text-3xl translate-y-full">WE WORK WITH YOU</p>
              </div>
              <div class="w-fit mt-6 text-xl bg-black">
                <p class="" style="font-family: arial-reg">達訊團隊以感同身受的角度了解你們，我們不為你們工作</p>
              </div>
              <div class="w-fit mt-12 text-xl bg-black">
                <p class="" style="font-family: arial-reg">我們與你們合作共同解決你們遭遇的所有問題與困難，當一個</p>
              </div>
              <div class="w-fit mt-3 text-xl bg-black">
                <p class="" style="font-family: arial-reg">可以與你密切溝通，且能始終如一交付高品質成果的夥伴</p>
              </div>
            </div>
          </div>

          <div class="flex text-white justify-center mt-96">
            <div class="work-mia-pc-tri">
              <div class="w-[500px] 3xl:w-[650px] h-fit relative work-mia-pc">
                <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                  <img class="w-full object-cover hero-mia-pc hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-mia-pc.webp" />
                </div>

                <div class="h-[300px] bg-[#262723] border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                  <div class="py-6 w-full">
                    <div class="flex justify-between items-center w-full">
                      <h1 class="text-[46px] w-fit" style="font-family: arial-bd">MIA TREASURE</h1>
                      <div class="w-9">
                        <img src="~assets/imgs/work-mia-diamond.png" />
                      </div>
                    </div>
                    <p class="mt-4 text-base 3xl:text-xl w-[300px] 3xl:w-[400px] leading-[1.5]">MIA TREASURE 是來自紐約的精選飾品，品牌致力於提供多元，精緻且高品質的飾品。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="work-bella-pc w-[650px] h-fit relative mt-48">
              <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                <img class="w-full object-cover hero-mia-pc hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-bella-pc.webp" />
              </div>

              <div class="border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <div class="pb-12">
                  <h1 class="text-[46px]" style="font-family: arial-bd">BELLA UNO</h1>
                  <p class="mt-4 text-xs w-[400px]">Bella Uno 是來自紐約並富含創作理念的女性團隊所設計的品牌，他們追求休閒時尚並兼具環境保護的理念，每個飾品皆獨一無二並至少含有25%的回收金屬，是一家支持環境永續的飾品品牌。</p>
                </div>
                <img class="self-start mt-5" src="~assets/imgs/work-bella-bee.png" />
              </div>
            </div>
          </div>
          <div class="flex text-white justify-center gap-12 mt-5 pb-64">
            <div class="work-ancient-pc w-[650px] h-fit relative">
              <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                <img class="w-full object-cover hero-mia-pc hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-ancient-pc.webp" />
              </div>

              <div class="border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <div class="pb-12">
                  <h1 class="text-[46px]" style="font-family: arial-bd">全國古蹟日</h1>
                  <p class="mt-4 text-xs w-[400px]">全國古蹟日為全台灣各縣市在每年9月都會共同響應的一個活動，主要目的在提高民眾認識文化資產保存與文化認同等行為並舉辦各式講座、走讀、劇場表演、手作課程等多元方式吸引民眾使其達到寓教於樂的推廣方式。</p>
                </div>
                <img class="self-start mt-5" src="~assets/imgs/work-ancient-tree.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-tri">
        <DashingFooter color="#FFFFFF" />
      </div>
    </div>
  </div>

  <div class="hidden md:block xl:hidden">
    <div class="bg-white md-work-scroll h-screen relative">
      <div class="bg-[#262723] md-work-center relative overflow-hidden">
        <img id="bg-work-md" class="bg-work-md w-full h-screen sticky top-0" src="~/assets/imgs/bg-work-about-sm.png" />

        <div class="mt-[-100vh]">
          <div class="flex justify-center items-end pb-20 h-screen">
            <div class="text-white">
              <div style="font-family: dgo" class="mt-[345px] flex justify-between">
                <p class="text-4xl leading-[1.5]">
                  WE DONT’T<br />
                  WORK FOR YOU
                </p>
                <div class="w-28 self-end">
                  <img class="w-full" src="~assets/imgs/greetinghand.gif" />
                </div>
              </div>
              <div style="font-family: dgo">
                <p class="text-5xl whitespace-nowrap leading-[1.5]">WE WORK WITH YOU</p>
              </div>
              <div class="mt-10 text-xl">
                <div class="bg-black w-fit">
                  <p class="" style="font-family: arial-reg">達訊團隊以感同身受的角度了解你們，我們不為你們工作</p>
                </div>

                <div class="bg-black w-fit mt-12">
                  <p class="" style="font-family: arial-reg">我們與你們合作共同解決你們遭遇的所有問題與困難，當</p>
                </div>
                <div class="bg-black w-fit mt-3">
                  <p class="" style="font-family: arial-reg">一個可以與你密切溝通，且能始終如一交付高品質成果的</p>
                </div>
                <div class="bg-black w-fit mt-3">
                  <p class="" style="font-family: arial-reg">夥伴，你就擁有了顯著的競爭優勢</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex text-white justify-center pb-28">
            <div class="">
              <div class="flex gap-3">
                <div class="w-[320px] h-fit relative work-mia-sm">
                  <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                    <img class="w-full" w src="~assets/imgs/work-mia-sm.webp" />
                  </div>
                  <div class="px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                    <div class="">
                      <div class="flex justify-between items-center">
                        <h1 class="text-2xl" style="font-family: arial-bd">MIA TREASURE</h1>
                        <div class="w-5">
                          <img src="~assets/imgs/work-mia-diamond.png" />
                        </div>
                      </div>
                      <p class="mt-4 text-sm">MIA TREASURE 是來自紐約的精選飾品，歐美風格的款式主打俐落、陽光的都會女性。飾品分別有純K金、純銀兩種類型，鑲鑽飾品皆使用高度工藝製作的蘇聯鑽，品牌致力於提供多元，精緻且高品質的飾品。</p>
                    </div>
                  </div>
                </div>
                <div class="w-[320px] h-fit relative mt-64 work-bella-sm">
                  <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                    <img class="w-full" w src="~assets/imgs/work-bella-sm.webp" />
                  </div>
                  <div class="px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                    <div class="">
                      <div class="flex justify-between items-center">
                        <h1 class="text-2xl" style="font-family: arial-bd">BELLA UNO</h1>
                        <div class="w-5">
                          <img src="~assets/imgs/work-bella-bee.png" />
                        </div>
                      </div>
                      <p class="mt-4 text-sm">Bella Uno 是來自紐約並富含創作理念的女性團隊所設計的品牌，他們追求休閒時尚並兼具環境保護的理念，每個飾品皆獨一無二並至少含有25%的回收金屬，是一家支持環境永續的飾品品牌。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-[320px] h-fit mx-auto relative mt-3 work-ancient-sm">
                <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                  <img class="w-full" w src="~assets/imgs/work-ancient-sm.jpg" />
                </div>

                <div class="px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                  <div class="">
                    <div class="flex justify-between items-center">
                      <h1 class="text-2xl" style="font-family: arial-bd">全國古蹟日</h1>
                      <div class="w-5">
                        <img src="~assets/imgs/work-ancient-tree.png" />
                      </div>
                    </div>
                    <p class="mt-4 text-sm">全國古蹟日為全台灣各縣市在每年9月都會共同響應的一個活動，主要目的在提高民眾認識文化資產保存與文化認同等行為並舉辦各式講座、走讀、劇場表演、手作課程等多元方式吸引民眾使其達到寓教於樂的推廣方式。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-work-footer-tri">
        <DashingFooter color="#FFFFFF" />
      </div>
    </div>
  </div>

  <div class="md:hidden">
    <div class="sm-work-scroll bg-white h-screen relative">
      <div class="bg-[#262723] sm-work-center relative overflow-hidden">
        <img id="bg-work-sm" class="bg-work-sm w-full h-screen sticky top-0" src="~/assets/imgs/bg-work-about-sm.png" />

        <div class="mt-[-100vh]">
          <div class="bg-gray-700 h-screen w-full flex justify-center items-end pb-[25vh] px-4">
            <div class="text-white whitespace-nowrap" style="font-family: dgo">
              <div class="flex gap-5">
                <div class="">
                  <p class="text-xl">WE DON'T<br />WORK FOR YOU</p>
                </div>
                <div class="w-16 overflow-hidden">
                  <img class="w-full" src="~assets/imgs/greetinghand.gif" />
                </div>
              </div>
              <p class="text-2xl leading-[2]">WE WORK WITH YOU</p>
            </div>
          </div>

          <div class="bg-gray-700 pb-12">
            <div class="flex text-white justify-center gap-12 px-6">
              <div class="w-full border-[2.5px] border-[#D3E741] rounded-[5px] h-fit">
                <img class="w-full" src="~assets/imgs/work-mia-sm.webp" />
                <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                  <div class="">
                    <h1 class="text-2xl" style="font-family: arial-bd">MIA TREASURE</h1>
                    <p class="mt-4 text-xs w-[240px]">MIA TREASURE 是來自紐約的精選飾品，歐美風格的款式主打俐落、陽光的都會女性。飾品分別有純K金、純銀兩種類型，鑲鑽飾品皆使用高度工藝製作的蘇聯鑽，品牌致力於提供多元，精緻且高品質的飾品。</p>
                  </div>
                  <img class="self-start w-8" src="~assets/imgs/work-mia-diamond.png" />
                </div>
                <div class="px-3 flex justify-end py-5">
                  <button class="flex gap-1 items-center w-fit text-[#D3E741] text-xs border-[1px] rounded-[24px] py-0.5 px-4 border-[#D3E741]" type="button">
                    More
                    <div class="w-1.5">
                      <svg viewBox="0 0 10 11" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke-[#D3E741] swipe-text" x1="1.29289" y1="10.1818" x2="9.29289" y2="2.18181" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="2.88892" y1="1.88892" x2="10" y2="1.88892" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="9" y1="2" x2="9" y2="9.11111" stroke-width="2" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex text-white justify-center gap-12 px-6 mt-20">
              <div class="w-full border-[2.5px] border-[#D3E741] rounded-[5px] h-fit">
                <img class="w-full" src="~assets/imgs/work-bella-sm.webp" />
                <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                  <div class="">
                    <h1 class="text-2xl" style="font-family: arial-bd">BELLA UNO</h1>
                    <p class="mt-4 text-xs w-[240px]">Bella Uno 是來自紐約並富含創作理念的女性團隊所設計的品牌，他們追求休閒時尚並兼具環境保護的理念，每個飾品皆獨一無二並至少含有25%的回收金屬，是一家支持環境永續的飾品品牌</p>
                  </div>
                  <img class="self-start w-7" src="~assets/imgs/work-bella-bee.png" />
                </div>
                <div class="px-3 flex justify-end py-5">
                  <button class="flex gap-1 items-center w-fit text-[#D3E741] text-xs border-[1px] rounded-[24px] py-0.5 px-4 border-[#D3E741]" type="button">
                    More

                    <div class="w-1.5">
                      <svg viewBox="0 0 10 11" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke-[#D3E741] swipe-text" x1="1.29289" y1="10.1818" x2="9.29289" y2="2.18181" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="2.88892" y1="1.88892" x2="10" y2="1.88892" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="9" y1="2" x2="9" y2="9.11111" stroke-width="2" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex text-white justify-center gap-12 px-6 mt-20">
              <div class="w-full border-[2.5px] border-[#D3E741] rounded-[5px] h-fit">
                <img class="w-full" src="~assets/imgs/work-ancient-sm.jpg" />
                <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                  <div class="">
                    <h1 class="text-[28px] font-bold" style="font-family: arial-bd">全國古蹟日</h1>
                    <p class="mt-4 text-xs">全國古蹟日為全台灣各縣市在每年9月都會共同響應的一個活動，主要目的在提高民眾認識文化資產保存與文化認同等行為並舉辦各式講座、走讀、劇場表演、手作課程等多元方式吸引民眾使其達到寓教於樂的推廣方式。</p>
                  </div>
                  <img class="self-start w-7" src="~assets/imgs/work-ancient-tree.png" />
                </div>
                <div class="px-3 flex justify-end py-5">
                  <button class="flex gap-1 items-center w-fit text-[#D3E741] text-xs border-[1px] rounded-[24px] py-0.5 px-4 border-[#D3E741]" type="button">
                    More

                    <div class="w-1.5">
                      <svg viewBox="0 0 10 11" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke-[#D3E741] swipe-text" x1="1.29289" y1="10.1818" x2="9.29289" y2="2.18181" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="2.88892" y1="1.88892" x2="10" y2="1.88892" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="9" y1="2" x2="9" y2="9.11111" stroke-width="2" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm-work-footer-tri">
        <DashingFooter color="#FFFFFF" />
      </div>
    </div>
  </div>
</template>
