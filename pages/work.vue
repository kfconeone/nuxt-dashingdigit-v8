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
  let animatedArray = [".sm-work-mia", ".sm-work-bella", ".sm-work-ancient"];
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
  let animatedArray = [".md-work-mia", ".md-work-bella", ".md-work-ancient"];
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
              <NuxtLink class="pointer" href="https://www.behance.net/gallery/134024959/MIA-TREASURE-web-design-visual-design" target="_blank">
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
                <NuxtLink class="pointer" href="https://www.behance.net/gallery/134835097/Bella-Uno-visual-design" target="_blank">
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
              <NuxtLink class="pointer" href="https://www.behance.net/gallery/134087187/2021-" target="_blank">
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
                  <NuxtLink class="pointer" href="https://www.behance.net/gallery/134024959/MIA-TREASURE-web-design-visual-design" target="_blank">
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
                  <NuxtLink class="pointer" href="https://www.behance.net/gallery/134835097/Bella-Uno-visual-design" target="_blank">
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
              <div class="md-work-ancient-tri">
                <NuxtLink class="pointer" href="https://www.behance.net/gallery/134087187/2021-" target="_blank">
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
              <NuxtLink class="pointer" href="https://www.behance.net/gallery/134024959/MIA-TREASURE-web-design-visual-design" target="_blank">
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
              <NuxtLink class="pointer" href="https://www.behance.net/gallery/134835097/Bella-Uno-visual-design" target="_blank">
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
              <NuxtLink class="pointer" href="https://www.behance.net/gallery/134087187/2021-" target="_blank">
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
          </div>
        </div>
      </div>

      <div class="sm-work-footer-tri">
        <DashingFooter color="#FFFFFF" />
      </div>
    </div>
  </div>
</template>
