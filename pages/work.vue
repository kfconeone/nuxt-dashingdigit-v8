<script setup lang="ts">
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//gsap

//smooth scrollbar
import Scrollbar from "smooth-scrollbar";
//smooth scrollbar

gsap.registerPlugin(ScrollTrigger);
useHead({
  title: "Work",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位專案" }],
});
const onLoadedEvents = inject("onLoadedEvents");

onMounted(() => {
  onLoadedEvents.value["work"] = () => {
    console.log("work");

    initSmoothScrollbar();
    animateText();
    scaleCenter();
    animateWiggle();
  };
});

function initSmoothScrollbar() {
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".work-scroll");
  const myScroller = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".work-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        myScroller.scrollTop = value;
      }
      return myScroller.scrollTop;
    },
  });
  myScroller.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}

function scaleCenter() {
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
    // "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
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
    delay: 2,
    duration: 1.5,
    y: 0,
    ease: "power4",
    stagger: 0.3,
  });
}
</script>
<template>
  <div class="hidden 3xl:block">
    <div class="bg-white work-scroll h-screen">
      <div class="bg-[#262723] center pb-48 relative">
        <div>
          <div class="grid grid-cols-12 pl-10">
            <div style="font-family: dgo" class="col-start-3 col-span-full text-white mt-[345px]">
              <div class="work-text1-3xl-trigger overflow-hidden">
                <p class="work-text-3xl text-[64px] leading-[78px] w-fit translate-y-full">WE DON’T</p>
              </div>
              <div class="flex items-end gap-10">
                <div class="work-text2-3xl-trigger overflow-hidden">
                  <p class="work-text-3xl text-[64px] leading-[78px] w-fit translate-y-full">WORK FOR YOU</p>
                </div>
                <div class="w-44 work-text3-3xl-trigger overflow-hidden">
                  <img class="w-full work-greeting translate-y-full" src="~assets/imgs/greetinghand.gif" />
                </div>
              </div>
              <div class="work-text3-3xl-trigger overflow-hidden">
                <p class="text-[100px] work-text-3xl translate-y-full">WE WORK WITH YOU</p>
              </div>
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

          <div class="flex text-white justify-center mt-64">
            <div class="w-[500px] h-fit relative work-mia-pc">
              <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                <img class="w-full object-cover hero-mia-pc hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-mia-pc.jpg" />
              </div>

              <div class="border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <div class="pb-12">
                  <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                  <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
                </div>
                <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
              </div>
            </div>
            <div class="work-bella-pc w-[500px] h-fit relative mt-48">
              <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                <img class="w-full object-cover hero-mia-pc hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-bella-pc.png" />
              </div>

              <div class="border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <div class="pb-12">
                  <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                  <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
                </div>
                <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
              </div>
            </div>
          </div>
          <div class="flex text-white justify-center gap-12 mt-5">
            <div class="work-ancient-pc w-[500px] h-fit relative">
              <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full overflow-hidden" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                <img class="w-full object-cover hero-mia-pc hover:scale-[1.2] transition-all ease-in-out duration-[250ms]" src="~assets/imgs/hero-ancient-pc.jpg" />
              </div>

              <div class="border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <div class="pb-12">
                  <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                  <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
                </div>
                <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
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
    <div class="bg-white">
      <div class="bg-[#262723]">
        <div class="flex justify-center">
          <div class="text-white">
            <div style="font-family: dgo" class="mt-[345px] flex justify-between">
              <p class="text-4xl">
                WE DONT’T<br />
                WORK FOR YOU
              </p>
              <div class="w-28">
                <img class="w-full" src="~assets/imgs/greetinghand.gif" />
              </div>
            </div>
            <div style="font-family: dgo">
              <p class="text-5xl whitespace-nowrap">WE WORK WITH YOU</p>
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
        <div class="flex text-white justify-center">
          <div class="">
            <div class="flex gap-3">
              <div class="w-[320px] h-fit relative">
                <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                  <img class="w-full" w src="~assets/imgs/work-mia-sm.jpg" />
                </div>
                <div class="border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                  <div class="pb-12">
                    <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                    <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
                  </div>
                  <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
                </div>
              </div>
              <div class="w-[320px] h-fit relative mt-64">
                <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                  <img class="w-full" w src="~assets/imgs/work-bella-sm.jpg" />
                </div>
                <div class="border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                  <div class="pb-12">
                    <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                    <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
                  </div>
                  <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
                </div>
              </div>
            </div>

            <div class="w-[320px] h-fit mx-auto relative mt-3">
              <div class="border-[5px] border-[#D3E741] rounded-[5px] w-full" style="filter: drop-shadow(6px 4px 4px rgba(0, 0, 0, 0.25))">
                <img class="w-full" w src="~assets/imgs/work-ancient-sm.jpg" />
              </div>
              <div class="border-[5px] border-[#D3E741] rounded-[5px] flex justify-between -mt-1" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                <div class="pb-12">
                  <h1 class="text-[46px]" style="font-family: arial-bd">MIA TREASURE</h1>
                  <p class="mt-4 text-xs">人氣大生鮮蝦搭配藏壽司特製麻辣醬<br />絕妙搭配，顛覆你對壽司的想像!</p>
                </div>
                <img class="self-start mt-5" src="~assets/imgs/social-media-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashingFooter color="#FFFFFF" />
    </div>
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
