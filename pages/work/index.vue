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
  meta: [
    {
      name: "description",
      content: "我們不為你們工作，我們與你們合作，並共同解決你們遭遇的所有問題與困難，當一個可以與你密切溝通，且能始終如一交付高品質成果的夥伴。",
    },
    {
      property: "og:title",
      content: "Work",
    },
    {
      property: "og:description",
      content: "我們不為你們工作，我們與你們合作，並共同解決你們遭遇的所有問題與困難，當一個可以與你密切溝通，且能始終如一交付高品質成果的夥伴。",
    },
  ],
});
const onLoadedEvents: any = inject("onLoadedEvents");
var currentWindowSize: WindowSize | undefined = WindowSize.Mobile;

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
        bounceFrameForDesktopAndLaptop();
        shrinkCenterForDesktopAndLaptop();
        animateWiggle();

        break;
      case WindowSize.Tablet:
        initSmoothScrollbarForTablet();
        bounceFrameForTablet();

        shrinkCenterForTablet();
        wiggleImgsForTablet();
        break;
      case WindowSize.Mobile:
        initSmoothScrollbarForMobile();
        bounceFrameForMobile();

        shrinkCenterForMobile();
        wiggleImgsForMobile();

        break;
      default:
        break;
    }
  };
});

function bounceFrameForMobile() {
  gsap.from(".sm-work-mia", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".sm-work-mia-tri",
      start: "20% bottom",
    },
  });
  gsap.from(".sm-work-bella", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".sm-work-bella-tri",
      start: "20% bottom",
    },
  });

  gsap.from(".sm-work-ancient", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".sm-work-ancient-tri",
      start: "20% bottom",
    },
  });

  gsap.from(".sm-work-dashing-tee", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".sm-work-dashing-tee-tri",
      start: "20% bottom",
    },
  });
}

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
  scrollbarRef.value.addListener(({ offset }: any) => {
    var fixedElem = document.getElementById("bg-work-pc");

    ScrollTrigger.update();
    if (fixedElem) {
      fixedElem!.style.top = offset.y + "px";
      fixedElem!.style.left = offset.x + "px";
    }
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
  scrollbarRef.value.addListener(({ offset }: any) => {
    var fixedElem = document.getElementById("bg-work-md");

    ScrollTrigger.update();
    fixedElem!.style.top = offset.y + "px";
    fixedElem!.style.left = offset.x + "px";
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
  scrollbarRef.value.addListener(({ offset }: any) => {
    var fixedElem = document.getElementById("bg-work-sm");
    if (!fixedElem) return;
    ScrollTrigger.update();
    fixedElem!.style.top = offset.y + "px";
    fixedElem!.style.left = offset.x + "px";
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
  let animatedArray = [".work-mia-pc", ".work-bella-pc", ".work-ancient-pc", ".work-dashing-tee-pc"];
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

function wiggleImgsForMobile() {
  let animatedArray = [".sm-work-mia", ".sm-work-bella", ".sm-work-ancient", ".sm-work-dashing-tee"];
  for (let i = 0; i < animatedArray.length; i++) {
    var radius = Math.floor(Math.random() * 70) + 15;

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
  let animatedArray = [".md-work-mia", ".md-work-bella", ".md-work-ancient", ".md-work-dashing-tee"];
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

function bounceFrameForTablet() {
  gsap.from(".md-work-mia", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".md-work-mia-tri",
      start: "20% bottom",
    },
  });
  gsap.from(".md-work-bella", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".md-work-bella-tri",
      start: "20% bottom",
    },
  });

  gsap.from(".md-work-ancient", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".md-work-ancient-tri",
      start: "20% bottom",
    },
  });
  gsap.from(".md-work-dashing-tee", {
    y: 200,
    x: "random(-50,50)",
    duration: 1.5,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".md-work-dashing-tee-tri",
      start: "20% bottom",
    },
  });
}

function bounceFrameForDesktopAndLaptop() {
  gsap.from(".work-mia-pc", {
    y: 400,
    x: "random(-100,100)",
    duration: 1,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".work-mia-pc-tri",
      start: "20% bottom",
    },
  });
  gsap.from(".work-bella-pc", {
    y: 400,
    x: "random(-100,100)",
    duration: 1,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".work-bella-pc-tri",
      start: "20% bottom",
    },
  });

  gsap.from(".work-ancient-pc", {
    y: 400,
    x: "random(-100,100)",
    duration: 1,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".work-ancient-pc-tri",
      start: "20% bottom",
    },
  });

  gsap.from(".work-dashing-tee-pc", {
    y: 400,
    x: "random(-100,100)",
    duration: 1,
    scale: 0,
    ease: "Power2.easeOut",
    scrollTrigger: {
      trigger: ".work-dashing-tee-pc-tri",
      start: "20% bottom",
    },
  });
}
</script>
<template>
  <div class="hidden xl:block">
    <div class="bg-white work-scroll h-screen relative">
      <div class="bg-[#262723] center relative overflow-hidden">
        <img id="bg-work-pc" class="bg-work-pc w-full h-screen sticky top-0 z-0 pointer-events-none" src="~/assets/imgs/bg-workabout-1280.webp" />

        <div class="mt-[-100vh]">
          <div class="grid grid-cols-12 pl-10 relative z-10">
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
              <div class="w-fit mt-6 text-xl">
                <p class="bg-[#262723]" style="font-family: arial-reg">達訊團隊以感同身受的角度了解你們，我們不為你們工作</p>
              </div>
              <div class="w-fit mt-12 text-xl">
                <p class="bg-[#262723]" style="font-family: arial-reg">我們與你們合作共同解決你們遭遇的所有問題與困難，當一個</p>
              </div>
              <div class="w-fit mt-3 text-xl">
                <p class="bg-[#262723]" style="font-family: arial-reg">可以與你密切溝通，且能始終如一交付高品質成果的夥伴</p>
              </div>
            </div>
          </div>

          <div class="flex text-white justify-center mt-96 gap-12">
            <div class="work-mia-pc-tri">
              <NuxtLink class="pointer" href="/work/miatreasure">
                <div class="w-[500px] 3xl:w-[650px] h-fit relative work-mia-pc group">
                  <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                    <img class="w-full object-cover hero-mia-pc group-hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-mia-pc.webp" />
                  </div>

                  <div class="h-[275px] bg-[#262723] border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                    <div class="py-6 w-full">
                      <div class="flex justify-between items-center w-full">
                        <h1 class="text-[46px] w-fit" style="font-family: arial-bd">MIA TREASURE</h1>
                        <div class="w-9">
                          <img src="~assets/imgs/work-mia-diamond.png" />
                        </div>
                      </div>
                      <p class="mt-4 text-base 3xl:text-xl w-[300px] 3xl:w-[400px] leading-[1.5]">MIA TREASURE 品牌設計，結合品牌網站設計及社群行銷，將歐美飾品潮流作為其特色。</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div class="mt-48">
              <div class="work-bella-pc-tri">
                <NuxtLink class="pointer" href="/work/bellauno">
                  <div class="w-[500px] 3xl:w-[650px] h-fit relative work-bella-pc group">
                    <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                      <img class="w-full object-cover hero-mia-pc group-hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-bella-pc.webp" />
                    </div>

                    <div class="h-[275px] bg-[#262723] border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                      <div class="py-6 w-full">
                        <div class="flex justify-between items-center w-full">
                          <h1 class="text-[46px] w-fit" style="font-family: arial-bd">BELLA UNO</h1>
                          <div class="w-9">
                            <img src="~assets/imgs/work-bella-bee.png" />
                          </div>
                        </div>
                        <p class="mt-4 text-base 3xl:text-xl w-[300px] 3xl:w-[400px] leading-[1.5]">BELLA UNO 品牌識別再造，我們規劃了新的品牌定位，協助整體品牌在台灣地區傳遞其核心價值及新形象。</p>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="flex text-white justify-center gap-12 mt-5 pb-64">
            <div class="work-ancient-pc-tri">
              <NuxtLink class="pointer" href="/work/ancient">
                <div class="w-[500px] 3xl:w-[650px] h-fit relative work-ancient-pc group">
                  <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                    <img class="w-full object-cover hero-mia-pc group-hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-ancient-pc.webp" />
                  </div>

                  <div class="h-[275px] bg-[#262723] border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                    <div class="py-6 w-full">
                      <div class="flex justify-between items-center w-full">
                        <h1 class="text-[46px] w-fit font-bold" style="font-family: arial-bd">全國古蹟日</h1>
                        <div class="w-9">
                          <img src="~assets/imgs/work-ancient-tree.png" />
                        </div>
                      </div>
                      <p class="mt-4 text-base 3xl:text-xl w-[300px] 3xl:w-[400px] leading-[1.5]">全國古蹟日 視覺設計，榮幸受邀替 2021 全國古蹟日主視覺設計，透過親民活潑的視覺提高民眾認識文化資產保存與文化認同。</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div class="work-dashing-tee-pc-tri mt-32">
              <NuxtLink class="pointer" href="https://landingpage-dashing-tee.vercel.app/" target="_blank">
                <div class="w-[500px] 3xl:w-[650px] h-fit relative work-dashing-tee-pc group">
                  <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                    <img class="w-full object-cover hero-mia-pc group-hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="/pc-work-dashing-tee.jpg" />
                  </div>

                  <div class="h-[275px] bg-[#262723] border-[5px] px-10 border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                    <div class="py-6 w-full">
                      <div class="flex justify-between items-center w-full">
                        <h1 class="text-[46px] w-fit font-bold" style="font-family: arial-bd">DAS-01UT</h1>
                        <div class="w-9">
                          <svg viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_702_160)">
                              <path
                                d="M32.5649 9.27148C32.2749 8.06322 31.8318 6.95507 31.2345 5.94586C30.6373 4.93781 29.8791 4.04151 28.9575 3.25928C28.036 2.47705 26.9443 1.8252 25.6824 1.30371C24.625 0.869529 23.4396 0.543601 22.1264 0.325928C20.812 0.109419 19.2772 0 17.5209 0H7.47405C7.35186 0 7.2468 0.0873021 7.22168 0.209525L0.757111 31.7454C0.753685 31.7605 0.753685 31.7745 0.754827 31.7873C0.754827 31.7931 0.755969 31.7989 0.758253 31.8047C0.760537 31.8117 0.762821 31.8187 0.765105 31.8245C0.768531 31.8338 0.773098 31.842 0.778808 31.849C0.782234 31.8536 0.78566 31.8571 0.789086 31.8606C0.793653 31.8653 0.798221 31.8699 0.803931 31.8746C0.817634 31.8851 0.827912 31.8909 0.827912 31.8909C0.829054 31.8909 0.830196 31.8909 0.831338 31.892C0.834764 31.8932 0.838189 31.8944 0.841615 31.8955C0.851893 31.899 0.86217 31.9014 0.871306 31.9025C0.87359 31.9025 0.875874 31.9025 0.878158 31.9037C0.891861 31.9048 0.904422 31.9037 0.915842 31.9002C0.916984 31.9002 0.918126 31.899 0.92041 31.899C0.932971 31.8944 0.943249 31.8897 0.951242 31.8839C0.954668 31.8816 0.958094 31.8781 0.962662 31.8746C0.96723 31.8699 0.970655 31.8664 0.970655 31.8664C0.970655 31.8653 0.971797 31.8641 0.971797 31.8641C0.977507 31.8571 0.984359 31.8525 0.988927 31.8443C1.3041 31.3019 1.63184 30.7711 1.97329 30.2496C3.86207 27.3931 6.20648 24.8764 8.90262 22.8091C8.95287 22.7707 8.98713 22.716 8.99969 22.6532L11.4594 10.4274L12.3707 5.89813L12.429 5.60945C12.4529 5.48839 12.5569 5.40109 12.679 5.39876L17.2423 5.34755C18.5212 5.34755 19.605 5.41273 20.4911 5.5431C21.3784 5.67347 22.1538 5.88649 22.8195 6.18215C24.2013 6.77348 25.2073 7.67793 25.8388 8.89434C26.4692 10.1119 26.7684 11.6764 26.7341 13.5889C26.6999 15.0497 26.516 16.4931 26.1837 17.9179C25.8514 19.3438 25.3604 20.6825 24.7129 21.9338C24.0643 23.1851 23.3003 24.3619 22.3079 25.3502C21.4321 26.2232 21.0004 26.605 19.9612 27.2837L19.9178 27.3058C20.5071 24.3771 20.6693 23.582 21.4458 19.6977C21.5234 19.3101 21.2562 19.0004 21.1991 18.9492C21.1854 18.9376 21.1706 18.9283 21.1557 18.9178C21.1512 18.9155 21.1477 18.9131 21.1432 18.9096C20.8976 18.7455 20.5322 18.6803 20.1223 18.6768C19.7454 18.6675 19.3846 18.7071 19.1824 18.735C18.7976 18.7886 18.3854 18.8759 17.9537 18.9923C17.634 19.0726 17.4273 19.1378 17.4273 19.1378C17.3793 19.1541 17.3325 19.1715 17.2857 19.1878C17.2674 19.1948 17.2503 19.2018 17.232 19.2076C14.5553 20.076 11.3338 21.8744 9.10703 23.6146C7.32217 25.0091 5.42425 26.7435 3.58343 29.1414C3.52291 29.2206 3.46238 29.2998 3.40186 29.3789C3.39844 29.3824 3.39615 29.3871 3.39273 29.3905C2.18569 30.9771 1.12939 32.6859 0.243235 34.496C0.192989 34.5949 0.142743 34.6939 0.0924978 34.7951C0.0856461 34.8079 0.0856461 34.8196 0.0822202 34.8312C0.0548135 34.8883 0.0274067 34.9441 0 35.0012L0.196415 35C0.197557 35 0.198699 35.0012 0.199841 35.0012H2.49173C2.81147 35.0012 4.47643 34.9919 5.08966 34.9814C5.22555 34.7439 5.3683 34.5088 5.51104 34.276C6.45771 32.7604 9.21095 28.5932 14.4468 25.5062C14.5678 25.4352 14.6877 25.3642 14.8099 25.2955C14.9116 25.2385 15.0132 25.1814 15.116 25.1244L15.3364 25.0033C15.5293 24.8974 15.7543 25.0697 15.7098 25.2885L13.7913 34.567C13.757 34.7334 13.8827 34.8883 14.0494 34.8836C14.2663 34.8789 14.6044 34.865 15.0965 34.8301C16.0741 34.7602 16.8437 34.5693 17.5003 34.3447C18.5304 34.0944 19.4702 33.7778 20.5174 33.2668C22.188 32.4508 23.6669 31.5941 24.955 30.5674C26.2431 29.5419 27.3508 28.4291 28.2815 27.2289C29.211 26.0288 29.9784 24.7822 30.5836 23.4866C31.1889 22.191 31.6708 20.9176 32.0293 19.6663C32.3879 18.4149 32.6391 17.2241 32.7842 16.0939C32.9292 14.9636 33.0011 13.973 33.0011 13.1209C33 11.7625 32.855 10.4809 32.5649 9.27148Z"
                                fill="#F1FF8B"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_702_160">
                                <rect width="33" height="35" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <p class="mt-4 text-base 3xl:text-xl w-[300px] 3xl:w-[400px] leading-[1.5]">DAS-01UT 設定一個程式碼宇宙，在這個宇宙，程式碼將成為決定這個宇宙命運的唯一定律來看看更多在這個宇宙框架的故事吧!</p>
                    </div>
                  </div>
                </div>
              </NuxtLink>
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
                <div class="bg-[#262723] w-fit">
                  <p class="" style="font-family: arial-reg">達訊團隊以感同身受的角度了解你們，我們不為你們工作</p>
                </div>

                <div class="bg-[#262723] w-fit mt-12">
                  <p class="" style="font-family: arial-reg">我們與你們合作共同解決你們遭遇的所有問題與困難，當</p>
                </div>
                <div class="bg-[#262723] w-fit mt-3">
                  <p class="" style="font-family: arial-reg">一個可以與你密切溝通，且能始終如一交付高品質成果的</p>
                </div>
                <div class="bg-[#262723] w-fit mt-3">
                  <p class="" style="font-family: arial-reg">夥伴，你就擁有了顯著的競爭優勢</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex text-white justify-center pb-28">
            <div class="">
              <div class="flex gap-3">
                <div class="md-work-mia-tri">
                  <NuxtLink class="pointer" href="/work/miatreasure">
                    <div class="w-[320px] h-fit relative md-work-mia">
                      <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                        <img class="w-full" w src="~assets/imgs/work-mia-sm.webp" />
                      </div>
                      <div class="bg-[#262723] px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                        <div class="">
                          <div class="flex justify-between items-center">
                            <h1 class="text-2xl" style="font-family: arial-bd">MIA TREASURE</h1>
                            <div class="w-5">
                              <img src="~assets/imgs/work-mia-diamond.png" />
                            </div>
                          </div>
                          <p class="mt-4 text-sm">MIA TREASURE 品牌設計，結合品牌網站設計及社群行銷，將歐美飾品潮流作為其特色。</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>

                <div class="md-work-bella-tri">
                  <NuxtLink class="pointer" href="/work/bellauno">
                    <div class="w-[320px] h-fit relative mt-64 md-work-bella">
                      <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                        <img class="w-full" w src="~assets/imgs/work-bella-sm.webp" />
                      </div>
                      <div class="bg-[#262723] px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                        <div class="">
                          <div class="flex justify-between items-center">
                            <h1 class="text-2xl" style="font-family: arial-bd">BELLA UNO</h1>
                            <div class="w-5">
                              <img src="~assets/imgs/work-bella-bee.png" />
                            </div>
                          </div>
                          <p class="mt-4 text-sm">BELLA UNO 品牌識別再造，我們規劃了新的品牌定位，協助整體品牌在台灣地區傳遞其核心價值及新形象。</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="md-work-ancient-tri">
                  <NuxtLink class="pointer" href="/work/ancient" target="_blank">
                    <div class="w-[320px] h-fit mx-auto relative mt-3 md-work-ancient">
                      <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                        <img class="w-full" w src="~assets/imgs/work-ancient-sm.jpg" />
                      </div>

                      <div class="bg-[#262723] px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                        <div class="">
                          <div class="flex justify-between items-center">
                            <h1 class="text-2xl" style="font-family: arial-bd">全國古蹟日</h1>
                            <div class="w-5">
                              <img src="~assets/imgs/work-ancient-tree.png" />
                            </div>
                          </div>
                          <p class="mt-4 text-sm">全國古蹟日 視覺設計，榮幸受邀替 2021 全國古蹟日主視覺設計，透過親民活潑的視覺提高民眾認識文化資產保存與文化認同。</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="md-work-dashing-tee-tri mt-64">
                  <NuxtLink class="pointer" href="https://landingpage-dashing-tee.vercel.app/" target="_blank">
                    <div class="w-[320px] h-fit mx-auto relative mt-3 md-work-dashing-tee">
                      <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                        <img class="w-full" src="/md-work-dashing-tee.jpg" />
                      </div>

                      <div class="bg-[#262723] px-5 py-4 border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                        <div class="">
                          <div class="flex justify-between items-center">
                            <h1 class="text-2xl" style="font-family: arial-bd">DAS-01UT</h1>
                            <div class="w-5">
                              <svg viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_702_160)">
                                  <path
                                    d="M32.5649 9.27148C32.2749 8.06322 31.8318 6.95507 31.2345 5.94586C30.6373 4.93781 29.8791 4.04151 28.9575 3.25928C28.036 2.47705 26.9443 1.8252 25.6824 1.30371C24.625 0.869529 23.4396 0.543601 22.1264 0.325928C20.812 0.109419 19.2772 0 17.5209 0H7.47405C7.35186 0 7.2468 0.0873021 7.22168 0.209525L0.757111 31.7454C0.753685 31.7605 0.753685 31.7745 0.754827 31.7873C0.754827 31.7931 0.755969 31.7989 0.758253 31.8047C0.760537 31.8117 0.762821 31.8187 0.765105 31.8245C0.768531 31.8338 0.773098 31.842 0.778808 31.849C0.782234 31.8536 0.78566 31.8571 0.789086 31.8606C0.793654 31.8653 0.798221 31.8699 0.803931 31.8746C0.817634 31.8851 0.827912 31.8909 0.827912 31.8909C0.829054 31.8909 0.830196 31.8909 0.831338 31.892C0.834764 31.8932 0.838189 31.8944 0.841615 31.8955C0.851893 31.899 0.86217 31.9014 0.871306 31.9025C0.87359 31.9025 0.875874 31.9025 0.878158 31.9037C0.891861 31.9048 0.904422 31.9037 0.915842 31.9002C0.916984 31.9002 0.918126 31.899 0.92041 31.899C0.932971 31.8944 0.943249 31.8897 0.951242 31.8839C0.954668 31.8816 0.958094 31.8781 0.962662 31.8746C0.96723 31.8699 0.970655 31.8664 0.970655 31.8664C0.970655 31.8653 0.971797 31.8641 0.971797 31.8641C0.977507 31.8571 0.984359 31.8525 0.988927 31.8443C1.3041 31.3019 1.63184 30.7711 1.97329 30.2496C3.86207 27.3931 6.20648 24.8764 8.90262 22.8091C8.95287 22.7707 8.98713 22.716 8.99969 22.6532L11.4594 10.4274L12.3707 5.89813L12.429 5.60945C12.4529 5.48839 12.5569 5.40109 12.679 5.39876L17.2423 5.34755C18.5212 5.34755 19.605 5.41273 20.4911 5.5431C21.3784 5.67347 22.1538 5.88649 22.8195 6.18215C24.2013 6.77348 25.2073 7.67793 25.8388 8.89434C26.4692 10.1119 26.7684 11.6764 26.7341 13.5889C26.6999 15.0497 26.516 16.4931 26.1837 17.9179C25.8514 19.3438 25.3604 20.6825 24.7129 21.9338C24.0643 23.1851 23.3003 24.3619 22.3079 25.3502C21.4321 26.2232 21.0004 26.605 19.9612 27.2837L19.9178 27.3058C20.5071 24.3771 20.6693 23.582 21.4458 19.6977C21.5234 19.3101 21.2562 19.0004 21.1991 18.9492C21.1854 18.9376 21.1706 18.9283 21.1557 18.9178C21.1512 18.9155 21.1477 18.9131 21.1432 18.9096C20.8976 18.7455 20.5322 18.6803 20.1223 18.6768C19.7454 18.6675 19.3846 18.7071 19.1824 18.735C18.7976 18.7886 18.3854 18.8759 17.9537 18.9923C17.634 19.0726 17.4273 19.1378 17.4273 19.1378C17.3793 19.1541 17.3325 19.1715 17.2857 19.1878C17.2674 19.1948 17.2503 19.2018 17.232 19.2076C14.5553 20.076 11.3338 21.8744 9.10703 23.6146C7.32217 25.0091 5.42425 26.7435 3.58343 29.1414C3.52291 29.2206 3.46238 29.2998 3.40186 29.3789C3.39844 29.3824 3.39615 29.3871 3.39273 29.3905C2.18569 30.9771 1.12939 32.6859 0.243235 34.496C0.192989 34.5949 0.142743 34.6939 0.0924977 34.7951C0.0856461 34.8079 0.0856461 34.8196 0.0822202 34.8312C0.0548135 34.8883 0.0274067 34.9441 0 35.0012L0.196415 35C0.197557 35 0.198699 35.0012 0.199841 35.0012H2.49173C2.81147 35.0012 4.47643 34.9919 5.08966 34.9814C5.22555 34.7439 5.3683 34.5088 5.51104 34.276C6.45771 32.7604 9.21095 28.5932 14.4468 25.5062C14.5678 25.4352 14.6877 25.3642 14.8099 25.2955C14.9116 25.2385 15.0132 25.1814 15.116 25.1244L15.3364 25.0033C15.5293 24.8974 15.7543 25.0697 15.7098 25.2885L13.7913 34.567C13.757 34.7334 13.8827 34.8883 14.0494 34.8836C14.2664 34.8789 14.6044 34.865 15.0965 34.8301C16.0741 34.7602 16.8437 34.5693 17.5003 34.3447C18.5304 34.0944 19.4702 33.7778 20.5174 33.2668C22.188 32.4508 23.6669 31.5941 24.955 30.5674C26.2431 29.5419 27.3508 28.4291 28.2815 27.2289C29.211 26.0288 29.9784 24.7822 30.5836 23.4866C31.1889 22.191 31.6708 20.9176 32.0293 19.6663C32.3879 18.4149 32.6391 17.2241 32.7842 16.0939C32.9292 14.9636 33.0011 13.973 33.0011 13.1209C33 11.7625 32.855 10.4809 32.5649 9.27148Z"
                                    fill="#F1FF8B"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_702_160">
                                    <rect width="33" height="35" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <p class="mt-4 text-sm">DAS-01UT 設定一個程式碼宇宙，在這個宇宙，程式碼將成為決定這個宇宙命運的唯一定律來看看更多在這個宇宙框架的故事吧!</p>
                        </div>
                      </div>
                    </div>
                  </NuxtLink>
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
        <img id="bg-work-sm" class="bg-work-sm w-full h-screen sticky top-0 z-0 pointer-events-none" src="~/assets/imgs/bg-work-about-sm.png" />

        <div class="mt-[-100vh]">
          <div class="h-screen w-full flex justify-center items-end pb-[25vh] px-4 z-10">
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

              <div class="mt-10 text-xs" style="font-family: arial-reg">
                <div class="bg-[#262723] w-fit">
                  <p>達訊團隊以感同身受的角度了解你們</p>
                </div>
                <div class="bg-[#262723] w-fit my-1.5">
                  <p>我們不為你們工作</p>
                </div>
                <div class="bg-[#262723] w-fit my-1.5">
                  <p>我們與你們合作共同解決你們遭遇的所有問題與困難</p>
                </div>
                <div class="bg-[#262723] w-fit my-1.5">
                  <p>當一個可以與你密切溝通</p>
                </div>
                <div class="bg-[#262723] w-fit">
                  <p>且能始終如一交付高品質成果的</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-12 relative z-10">
            <div class="flex text-white justify-center gap-12 px-6 sm-work-mia-tri">
              <NuxtLink class="pointer" href="/work/miatreasure">
                <div class="bg-[#262723] group w-full max-w-[450px] border-[2.5px] border-[#D3E741] rounded-[5px] h-fit sm-work-mia">
                  <div class="overflow-hidden relative">
                    <img class="object-cover group-hover:scale-[1.2] transition-all ease-[cubic-bezier(.68,-.55,.265,1.55)] duration-[500ms]" src="~assets/imgs/work-mia-sm.webp" />
                  </div>
                  <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                    <div class="">
                      <h1 class="text-2xl" style="font-family: arial-bd">MIA TREASURE</h1>
                      <p class="mt-4 text-xs w-[220px]">MIA TREASURE 是來自紐約的精選飾品，歐美風格的款式主打俐落、陽光的都會女性。飾品分別有純K金、純銀兩種類型，鑲鑽飾品皆使用高度工藝製作的蘇聯鑽，品牌致力於提供多元，精緻且高品質的飾品。</p>
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
              </NuxtLink>
            </div>
            <div class="flex text-white justify-center gap-12 px-6 mt-20 sm-work-bella-tri">
              <NuxtLink class="pointer" href="/work/bellauno">
                <div class="bg-[#262723] group w-full max-w-[450px] border-[2.5px] border-[#D3E741] rounded-[5px] h-fit sm-work-bella">
                  <div class="overflow-hidden relative">
                    <img class="object-cover group-hover:scale-[1.2] transition-all ease-[cubic-bezier(.68,-.55,.265,1.55)] duration-[500ms]" src="~assets/imgs/work-bella-sm.webp" />
                  </div>
                  <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                    <div class="">
                      <h1 class="text-2xl" style="font-family: arial-bd">BELLA UNO</h1>
                      <p class="mt-4 text-xs w-[220px]">BELLA UNO 品牌識別再造，我們規劃了新的品牌定位，協助整體品牌在台灣地區傳遞其核心價值及新形象。</p>
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
              </NuxtLink>
            </div>

            <div class="flex text-white justify-center gap-12 px-6 mt-20 sm-work-ancient-tri">
              <NuxtLink class="pointer" href="/work/ancient">
                <div class="bg-[#262723] group w-full max-w-[450px] border-[2.5px] border-[#D3E741] rounded-[5px] h-fit sm-work-ancient">
                  <div class="overflow-hidden relative">
                    <img class="object-cover group-hover:scale-[1.2] transition-all ease-[cubic-bezier(.68,-.55,.265,1.55)] duration-[500ms]" src="~assets/imgs/work-ancient-sm.jpg" />
                  </div>

                  <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                    <div class="">
                      <h1 class="text-[28px] font-bold" style="font-family: arial-bd">全國古蹟日</h1>
                      <p class="mt-4 text-xs w-[220px]">全國古蹟日 視覺設計，榮幸受邀替 2021 全國古蹟日主視覺設計，透過親民活潑的視覺提高民眾認識文化資產保存與文化認同。</p>
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
              </NuxtLink>
            </div>

            <div class="flex text-white justify-center gap-12 px-6 mt-20 sm-work-dashing-tee-tri">
              <NuxtLink class="pointer" href="https://landingpage-dashing-tee.vercel.app/" target="_blank">
                <div class="bg-[#262723] group w-full max-w-[450px] border-[2.5px] border-[#D3E741] rounded-[5px] h-fit sm-work-dashing-tee">
                  <div class="overflow-hidden relative">
                    <img class="object-cover group-hover:scale-[1.2] transition-all ease-[cubic-bezier(.68,-.55,.265,1.55)] duration-[500ms]" src="/pc-work-dashing-tee.jpg" />
                  </div>

                  <div class="border-t-[2.5px] border-[#D3E741] px-3 pt-5 flex justify-between">
                    <div class="">
                      <h1 class="text-[28px] font-bold" style="font-family: arial-bd">DAS-01UT</h1>
                      <p class="mt-4 text-xs w-[220px]">DAS-01UT 設定一個程式碼宇宙，在這個宇宙，程式碼將成為決定這個宇宙命運的唯一定律來看看更多在這個宇宙框架的故事吧!</p>
                    </div>
                    <div class="self-start w-7">
                      <svg viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_702_160)">
                          <path
                            d="M32.5649 9.27148C32.2749 8.06322 31.8318 6.95507 31.2345 5.94586C30.6373 4.93781 29.8791 4.04151 28.9575 3.25928C28.036 2.47705 26.9443 1.8252 25.6824 1.30371C24.625 0.869529 23.4396 0.543601 22.1264 0.325928C20.812 0.109419 19.2772 0 17.5209 0H7.47405C7.35186 0 7.2468 0.0873021 7.22168 0.209525L0.757111 31.7454C0.753685 31.7605 0.753685 31.7745 0.754827 31.7873C0.754827 31.7931 0.755969 31.7989 0.758253 31.8047C0.760537 31.8117 0.762821 31.8187 0.765105 31.8245C0.768531 31.8338 0.773098 31.842 0.778808 31.849C0.782234 31.8536 0.78566 31.8571 0.789086 31.8606C0.793653 31.8653 0.798221 31.8699 0.803931 31.8746C0.817634 31.8851 0.827912 31.8909 0.827912 31.8909C0.829054 31.8909 0.830196 31.8909 0.831338 31.892C0.834764 31.8932 0.838189 31.8944 0.841615 31.8955C0.851893 31.899 0.86217 31.9014 0.871306 31.9025C0.87359 31.9025 0.875874 31.9025 0.878158 31.9037C0.891861 31.9048 0.904422 31.9037 0.915842 31.9002C0.916984 31.9002 0.918126 31.899 0.92041 31.899C0.932971 31.8944 0.943249 31.8897 0.951242 31.8839C0.954668 31.8816 0.958094 31.8781 0.962662 31.8746C0.96723 31.8699 0.970655 31.8664 0.970655 31.8664C0.970655 31.8653 0.971797 31.8641 0.971797 31.8641C0.977507 31.8571 0.984359 31.8525 0.988927 31.8443C1.3041 31.3019 1.63184 30.7711 1.97329 30.2496C3.86207 27.3931 6.20648 24.8764 8.90262 22.8091C8.95287 22.7707 8.98713 22.716 8.99969 22.6532L11.4594 10.4274L12.3707 5.89813L12.429 5.60945C12.4529 5.48839 12.5569 5.40109 12.679 5.39876L17.2423 5.34755C18.5212 5.34755 19.605 5.41273 20.4911 5.5431C21.3784 5.67347 22.1538 5.88649 22.8195 6.18215C24.2013 6.77348 25.2073 7.67793 25.8388 8.89434C26.4692 10.1119 26.7684 11.6764 26.7341 13.5889C26.6999 15.0497 26.516 16.4931 26.1837 17.9179C25.8514 19.3438 25.3604 20.6825 24.7129 21.9338C24.0643 23.1851 23.3003 24.3619 22.3079 25.3502C21.4321 26.2232 21.0004 26.605 19.9612 27.2837L19.9178 27.3058C20.5071 24.3771 20.6693 23.582 21.4458 19.6977C21.5234 19.3101 21.2562 19.0004 21.1991 18.9492C21.1854 18.9376 21.1706 18.9283 21.1557 18.9178C21.1512 18.9155 21.1477 18.9131 21.1432 18.9096C20.8976 18.7455 20.5322 18.6803 20.1223 18.6768C19.7454 18.6675 19.3846 18.7071 19.1824 18.735C18.7976 18.7886 18.3854 18.8759 17.9537 18.9923C17.634 19.0726 17.4273 19.1378 17.4273 19.1378C17.3793 19.1541 17.3325 19.1715 17.2857 19.1878C17.2674 19.1948 17.2503 19.2018 17.232 19.2076C14.5553 20.076 11.3338 21.8744 9.10703 23.6146C7.32217 25.0091 5.42425 26.7435 3.58343 29.1414C3.52291 29.2206 3.46238 29.2998 3.40186 29.3789C3.39844 29.3824 3.39615 29.3871 3.39273 29.3905C2.18569 30.9771 1.12939 32.6859 0.243235 34.496C0.192989 34.5949 0.142743 34.6939 0.0924978 34.7951C0.0856461 34.8079 0.0856461 34.8196 0.0822202 34.8312C0.0548135 34.8883 0.0274067 34.9441 0 35.0012L0.196415 35C0.197557 35 0.198699 35.0012 0.199841 35.0012H2.49173C2.81147 35.0012 4.47643 34.9919 5.08966 34.9814C5.22555 34.7439 5.3683 34.5088 5.51104 34.276C6.45771 32.7604 9.21095 28.5932 14.4468 25.5062C14.5678 25.4352 14.6877 25.3642 14.8099 25.2955C14.9116 25.2385 15.0132 25.1814 15.116 25.1244L15.3364 25.0033C15.5293 24.8974 15.7543 25.0697 15.7098 25.2885L13.7913 34.567C13.757 34.7334 13.8827 34.8883 14.0494 34.8836C14.2663 34.8789 14.6044 34.865 15.0965 34.8301C16.0741 34.7602 16.8437 34.5693 17.5003 34.3447C18.5304 34.0944 19.4702 33.7778 20.5174 33.2668C22.188 32.4508 23.6669 31.5941 24.955 30.5674C26.2431 29.5419 27.3508 28.4291 28.2815 27.2289C29.211 26.0288 29.9784 24.7822 30.5836 23.4866C31.1889 22.191 31.6708 20.9176 32.0293 19.6663C32.3879 18.4149 32.6391 17.2241 32.7842 16.0939C32.9292 14.9636 33.0011 13.973 33.0011 13.1209C33 11.7625 32.855 10.4809 32.5649 9.27148Z"
                            fill="#F1FF8B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_702_160">
                            <rect width="33" height="35" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
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
              </NuxtLink>
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
