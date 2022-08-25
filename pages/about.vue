<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//smooth scrollbar
import Scrollbar from "smooth-scrollbar";
//smooth scrollbar
const meetourteamRef = ref();
gsap.registerPlugin(ScrollTrigger);

const onLoadedEvents = inject("onLoadedEvents");

useHead({
  title: "About",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "關於達訊數位" }],
});
// linear-gradient(180deg, #6372c6 0%, #8b90ff 69.03%, #ffffff 88.36%), #6372c6
onMounted(() => {
  onLoadedEvents.value["about"] = () => {
    nextTick(() => {
      initSmoothScrollbar();
      ScrollTrigger.create({
        trigger: ".whitebg-tri",
        start: "40% bottom",
        end: "+=150%",
        toggleActions: "play none none reverse",

        onEnter: () => {
          gsap.to(".pc-about-bg-color", {
            backgroundColor: "white",
            duration: 0.4,
            ease: "Power2.easeInOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(".pc-about-bg-color", {
            backgroundColor: "black",
            duration: 0.4,
            ease: "Power2.easeInOut",
          });
        },
      });

      gsap.to(".pc-about-shark", {
        x: 150,
        y: 300,
        ease: "none",
        scrollTrigger: {
          trigger: ".test-tri",
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });
      gsap.to(".pc-about-shark", {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".test-tri",
          start: "25% top",
          end: "30% top",
          scrub: true,
        },
      });
      gsap.to(".pc-about-fuck-smile", {
        x: 150,
        y: 250,
        ease: "none",
        scrollTrigger: {
          trigger: ".test-tri",
          start: "top top",
          end: "30% top",
          scrub: true,
        },
      });

      gsap.to(".pc-about-fuck-smile", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".test-tri",
          start: "25% top",
          end: "30% top",
          scrub: true,
        },
      });

      initHorizontalScroll();

      //偵測進入 icons Canvas 進入重置 icons 位置
      ScrollTrigger.create({
        trigger: ".purplebg-tri",
        start: "-10% bottom",
        end: "bottom top",
        onEnter: () => {
          meetourteamRef.value.resetIconsPosition();
        },
      });
      scaleCenter();
    });
  };
});

function initHorizontalScroll() {
  gsap.to(".trait", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".trait",
      start: "top top",
      end: () => innerWidth,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  gsap.to(".trait-xl", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".trait-xl",
      start: "top top",
      end: () => innerWidth,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  gsap.to(".trait-md", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".trait-md",
      start: "top top",
      end: () => innerWidth * 3,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });

  gsap.to(".trait-sm", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".trait-sm",
      start: "top top",
      end: () => innerWidth * 3,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
}

function initSmoothScrollbar() {
  //smooth scrollbar//
  const indexScroller: any = document.querySelector(".about-scroll");
  const myScroller = Scrollbar.init(indexScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });

  ScrollTrigger.scrollerProxy(".about-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        myScroller.scrollTop = value;
      }
      return myScroller.scrollTop;
    },
    scrollLeft(value) {
      if (arguments.length) {
        myScroller.scrollLeft = value; // setter
      }
      return myScroller.scrollLeft; // getter
    },
  });
  myScroller.addListener(({ offset }) => {
    // var fixedElem = document.getElementById("bg-hero");

    ScrollTrigger.update();
    // fixedElem.style.top = offset.y + "px";
    // fixedElem.style.left = offset.x + "px";
  });
  ScrollTrigger.defaults({ scroller: indexScroller });
  //smooth scrollbar//
}

function scaleCenter() {
  gsap.to(".pc-about-center", {
    scrollTrigger: {
      trigger: ".about-footer-tri-pc",
      start: "20% bottom",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    duration: 0.5,
    borderRadius: "30px",
    ease: "power4.easeOut",
    // "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
  });
  gsap.to(".pc-about-center", {
    transformOrigin: "center center",
    scale: 0.95,
    ease: "Power2.easeIn",
    scrollTrigger: {
      trigger: ".about-footer-tri-pc",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      pin: ".pc-about-center",
    },
  });
}
</script>
<template>
  <div class="hidden 3xl:block">
    <div class="w-full mx-auto relative about-scroll h-screen bg-[#D3E741]">
      <div class="w-full overflow-x-hidden bg-black pc-about-bg-color pc-about-center">
        <div class="flex justify-center py-40 gap-20 min-h-screen test-tri">
          <div style="font-family: dgo" class="text-white text-8xl">
            <div class="flex items-center gap-10">
              <p>As nimble</p>
              <div class="relative">
                <div class="w-24 pc-about-shark origin-center">
                  <img src="~assets/imgs/emoji-shark.png" />
                </div>
                <div class="w-24 pc-about-fuck-smile absolute top-0 left-0 scale-0 origin-center">
                  <img class=" " src="~assets/imgs/emoji-fuck-smile.png" />
                </div>
              </div>
            </div>
            <br />
            <p>as the shark</p>
          </div>

          <div class="text-2xl text-white mt-96">
            <div>
              <p class="bg-black w-fit my-1">達訊團隊的工作哲學即是能因應不同的產業</p>
              <p class="bg-black w-fit my-1">狀況快速做出反應</p>
            </div>
            <div class="mt-8">
              <p class="bg-black w-fit my-1">我們針對你的品牌進行深度訪談與分析</p>
              <p class="bg-black w-fit my-1">跳脫你的舊有框架，挖掘品牌特色並融合現</p>
              <p class="bg-black w-fit my-1">代設計元素，幫助你在產業前端擁有讓人瘋</p>
              <p class="bg-black w-fit my-1">狂的線上與現下體驗</p>
            </div>
          </div>
        </div>

        <div class="trait whitebg-tri h-screen w-fit flex text-[#6372C6] items-center px-40">
          <div class="flex gap-[250px] pr-[500px]">
            <div class="flex">
              <div>
                <div class="relative">
                  <div class="w-[700px] absolute left-[-10%]">
                    <img class="w-full" src="~assets/imgs/about-neverbg-sm.gif" />
                  </div>
                  <p class="text-[80px] leading-[96px] mb-32 whitespace-nowrap" style="font-family: dgo">NEVER BE<br />THE SAME</p>
                </div>
                <p class="text-xl mb-10 leading-[33px]">達訊團隊擁有反骨的個性<br />我們脱離羊群，尋找藍海，想著“如果<br />不一樣，是不是更好”<br /></p>
                <p class="text-xl leading-[33px]">創新做事也讓我們更有活力，思考如何<br />能讓顧客跳脱制約框架，達到耳目一新<br />的感官衝擊。</p>
              </div>
              <div class="w-[600px]">
                <img src="~assets/imgs/about-mac-sm.gif" />
              </div>
            </div>
            <div class="flex">
              <div>
                <div class="relative flex">
                  <p class="text-[80px] leading-[96px] mb-32" style="font-family: dgo">QUICK<br />TEST</p>
                  <div class="w-[70px]">
                    <img class="w-full" src="~assets/imgs/about-question.gif" />
                  </div>
                </div>
                <p class="text-xl leading-[33px]">持續的提出假設，然後透過快速的小型<br />測試來驗證，這樣的方式讓我們創造更<br />多可能性，這也意味天馬行空的想法成<br />為實際的可能也隨之增加。</p>
              </div>
              <div class="w-[600px]">
                <img src="~assets/imgs/about-light.gif" />
              </div>
            </div>

            <div class="flex">
              <div>
                <div class="relative flex">
                  <p class="text-[80px] leading-[96px] mb-32" style="font-family: dgo">HIGH<br />PERFORMANCE</p>

                  <div class="w-[85px] absolute left-[31%]">
                    <img class="w-full" src="~assets/imgs/about-analyze.gif" />
                  </div>
                </div>

                <p class="text-xl leading-[33px]">我們專注於高效率的製作與高效能的產<br />出，通過將工作內容顆粒化，並解析出<br />各項工作流程，分類優先順序，來簡化<br />複雜的工作，這樣的方式可以更快速的<br />產出高質量的服務與產品。</p>
              </div>

              <div class="w-[787px]">
                <img src="~assets/imgs/about-shark.gif" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex relative h-screen purplebg-tri bg-[#6372C6]">
          <div class="absolute w-full h-full">
            <MeetOurTeam ref="meetourteamRef" />
          </div>
        </div>
      </div>
      <div class="about-footer-tri-pc">
        <DashingFooter color="#D3E741" />
      </div>
    </div>
  </div>

  <div class="hidden xl:block 3xl:hidden">
    <div class="w-full overflow-x-hidden">
      <div class="flex justify-center bg-gray-700 py-40">
        <div>
          <p style="font-family: dgo" class="text-white text-8xl">
            As nimble<br />
            as the shark
          </p>
        </div>

        <div class="text-base text-white mt-96">
          <div>
            <p class="bg-black w-fit my-1">達訊團隊的工作哲學即是能因應不同的產業</p>
            <p class="bg-black w-fit my-1">狀況快速做出反應</p>
          </div>
          <div class="mt-8">
            <p class="bg-black w-fit my-1">我們針對你的品牌進行深度訪談與分析</p>
            <p class="bg-black w-fit my-1">跳脫你的舊有框架，挖掘品牌特色並融合現</p>
            <p class="bg-black w-fit my-1">代設計元素，幫助你在產業前端擁有讓人瘋</p>
            <p class="bg-black w-fit my-1">狂的線上與現下體驗</p>
          </div>
        </div>
      </div>

      <div class="trait-xl h-screen w-fit flex text-[#6372C6] items-center px-40">
        <div class="flex gap-[500px]">
          <div>
            <p class="text-[64px] leading-[76.8px] mb-32 whitespace-nowrap" style="font-family: dgo">NEVER BE<br />THE SAME</p>
            <p class="text-base mb-10 leading-[22.7px]">達訊團隊擁有反骨的個性<br />我們脱離羊群，尋找藍海，想著“如果<br />不一樣，是不是更好”<br /></p>
            <p class="text-base leading-[22.7px]">創新做事也讓我們更有活力，思考如何<br />能讓顧客跳脱制約框架，達到耳目一新<br />的感官衝擊。</p>
          </div>
          <div>
            <p class="text-[64px] mb-32 leading-[76.8px]" style="font-family: dgo">QUICK<br />TEST</p>
            <p class="text-base leading-[22.7px]">持續的提出假設，然後透過快速的小型<br />測試來驗證，這樣的方式讓我們創造更<br />多可能性，這也意味天馬行空的想法成<br />為實際的可能也隨之增加。</p>
          </div>
          <div>
            <p class="text-[64px] mb-32 leading-[76.8px]" style="font-family: dgo">HIGH<br />PERFORMANCE</p>
            <p class="text-base leading-[22.7px]">我們專注於高效率的製作與高效能的產<br />出，通過將工作內容顆粒化，並解析出<br />各項工作流程，分類優先順序，來簡化<br />複雜的工作，這樣的方式可以更快速的<br />產出高質量的服務與產品。</p>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="w-full min-h-[855px] relative" style="background: linear-gradient(180deg, #6372c6 0%, #8b90ff 69.03%, #ffffff 88.36%), #6372c6">
          <img class="w-56 absolute" src="~assets/imgs/profile/r1.png" />
          <img class="w-56 absolute" src="~assets/imgs/profile/r2.png" />
          <img class="w-56 absolute" src="~assets/imgs/profile/r3.png" />
          <img class="w-56 absolute" src="~assets/imgs/profile/r2.png" />
          <img class="w-56 absolute" src="~assets/imgs/profile/r3.png" />
          <p style="font-family: arial-black" class="text-white text-4xl font-black tracking-widest mx-auto w-fit">MEET OUR TEAM</p>
          <div class="bg-white rounded-[76px] w-[550px] py-9 mx-auto mt-5" stlye="box-shadow: 1px 4px 8px #577FCD;">
            <div class="flex justify-center gap-8">
              <img class="w-20" src="~assets/imgs/profile/r1.png" />
              <div class="text-[#292F33] text-4xl tracking-widest font-black" style="font-family: arial-black">
                <p>RINRAN</p>
                <p class="text-2xl">VISUAL DESIGNER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashingFooter color="#D3E741" />
    </div>
  </div>

  <div class="hidden md:block xl:hidden">
    <div class="w-full mx-auto relative bg-gray-700">
      <div class="w-full max-w-[640px] overflow-x-hidden mx-auto">
        <div class="flex py-40">
          <div class="px-6 w-full">
            <div>
              <p style="font-family: dgo" class="text-white text-6xl whitespace-nowrap">
                As nimble<br />
                as the shark
              </p>
            </div>

            <div class="flex w-full justify-end">
              <div class="text-xl text-white mt-24">
                <div>
                  <p class="bg-black w-fit my-1">達訊團隊的工作哲學即是能因應不同的</p>
                  <p class="bg-black w-fit my-1">產業狀況快速做出反應</p>
                </div>
                <div class="mt-8">
                  <p class="bg-black w-fit my-1">我們針對你的品牌進行深度訪談與分析</p>
                  <p class="bg-black w-fit my-1">跳脫你的舊有框架，挖掘品牌特色並融</p>
                  <p class="bg-black w-fit my-1">合現代設計元素，幫助你在產業前端擁</p>
                  <p class="bg-black w-fit my-1">有讓人瘋狂的線上與現下體驗</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="trait-md h-screen w-fit flex text-[#6372C6] items-center pr-40">
          <div class="flex gap-48">
            <div class="">
              <div class="relative w-full">
                <div class="absolute w-[120%] -left-11 -top-11">
                  <img class="w-full" src="~assets/imgs/about-neverbg-sm.gif" />
                </div>
                <p class="ml-6 text-[40px] leading-[50px] whitespace-nowrap" style="font-family: dgo">NEVER BE<br />THE SAME</p>
              </div>

              <div class="w-[490px] ml-14 mb-14">
                <img class="w-full" src="~assets/imgs/about-mac-sm.gif" />
              </div>

              <p class="ml-6 text-base mb-10 leading-[22px]">達訊團隊擁有反骨的個性<br />我們脱離羊群，尋找藍海，想著“如果不一樣，是不是更好”<br /></p>
              <p class="ml-6 text-base leading-[22px]">創新做事也讓我們更有活力，思考如何能讓顧客跳脱制約框<br />架，達到耳目一新的感官衝擊。</p>
            </div>

            <div class="">
              <div class="relative w-full flex gap-3">
                <p class="ml-6 text-[40px] leading-[50px] whitespace-nowrap" style="font-family: dgo">QUICK<br />TEST</p>
                <div class="w-12">
                  <img class="w-full" src="~assets/imgs/about-question.gif" />
                </div>
              </div>
              <div class="w-[490px] ml-14 mb-14 mt-10">
                <img class="w-full" src="~assets/imgs/about-light.gif" />
              </div>
              <p class="ml-6 text-base leading-[22px]">持續的提出假設，然後透過快速的小型測試來驗證，這樣的方<br />式讓我們創造更多可能性，這也意味天馬行空的想法成為實際<br />的可能也隨之增加。</p>
            </div>

            <div class="">
              <div class="relative w-full">
                <div class="absolute w-16 left-[125px] top-[-15%]">
                  <img class="w-full" src="~assets/imgs/about-analyze.gif" />
                </div>
                <p class="text-[40px] leading-[50px]" style="font-family: dgo">HIGH<br /><span class="">PERFORMANCE</span></p>
              </div>
              <div class="w-[490px] mb-14 mt-10">
                <img class="w-full" src="~assets/imgs/about-shark.gif" />
              </div>
              <p class="text-base leading-[22px]">我們專注於高效率的製作與高效能的產出，通過將<br />工作內容顆粒化，並解析出各項工作流程，分類優<br />先順序，來簡化複雜的工作，這樣的方式可以更快<br />速的產出高質量的服務與產品。</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-700 text-white text-base font-black tracking-[0.095em] flex justify-center" style="font-family: arial-black">
          <p class="w-fit">MEET OUR TEAM</p>
          <button class="rounded-[76px] flex" style="box-shadow: 1px 4px 8px #577fcd">
            <img src="" />
          </button>
        </div>
      </div>
      <DashingFooter color="#D3E741" />
    </div>
  </div>

  <div class="md:hidden">
    <div class="max-w-[400px] mx-auto relative">
      <div class="w-full overflow-x-hidden">
        <div class="flex bg-gray-700 py-40">
          <div class="px-6 w-full">
            <div>
              <p style="font-family: dgo" class="text-white text-3xl whitespace-nowrap">
                As nimble<br />
                as the shark
              </p>
            </div>

            <div class="flex w-full justify-end">
              <div class="text-xs text-white mt-24">
                <div>
                  <p class="bg-black w-fit my-1">達訊團隊的工作哲學即是能因應不同的產業</p>
                  <p class="bg-black w-fit my-1">狀況快速做出反應</p>
                </div>
                <div class="mt-8">
                  <p class="bg-black w-fit my-1">我們針對你的品牌進行深度訪談與分析</p>
                  <p class="bg-black w-fit my-1">跳脫你的舊有框架，挖掘品牌特色並融合現</p>
                  <p class="bg-black w-fit my-1">代設計元素，幫助你在產業前端擁有讓人瘋</p>
                  <p class="bg-black w-fit my-1">狂的線上與現下體驗</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="trait-sm h-screen w-fit flex text-[#6372C6] items-center">
          <div class="flex gap-12">
            <div class="">
              <div class="relative w-full">
                <div class="absolute w-[120%] -left-11">
                  <img class="w-full" src="~assets/imgs/about-neverbg-sm.gif" />
                </div>
                <p class="ml-6 text-4xl leading-[40px] whitespace-nowrap" style="font-family: dgo">NEVER BE<br />THE SAME</p>
              </div>
              <div class="w-60 ml-14 mb-5">
                <img class="w-full" src="~assets/imgs/about-mac-sm.gif" />
              </div>
              <p class="ml-6 text-xs mb-10 leading-4">達訊團隊擁有反骨的個性<br />我們脱離羊群，尋找藍海，想著“如果<br />不一樣，是不是更好”<br /></p>
              <p class="ml-6 text-xs leading-[20px]">創新做事也讓我們更有活力，思考如何<br />能讓顧客跳脱制約框架，達到耳目一新<br />的感官衝擊。</p>
            </div>
            <div class="">
              <div class="relative w-full flex gap-3">
                <p class="ml-6 text-4xl leading-[40px] whitespace-nowrap" style="font-family: dgo">QUICK<br />TEST</p>
                <div class="w-12">
                  <img class="w-full" src="~assets/imgs/about-question.gif" />
                </div>
              </div>
              <div class="w-60 ml-14 mb-5">
                <img class="w-full" src="~assets/imgs/about-light.gif" />
              </div>
              <p class="ml-6 text-xs leading-[20px]">持續的提出假設，然後透過快速的小型<br />測試來驗證，這樣的方式讓我們創造更<br />多可能性，這也意味天馬行空的想法成<br />為實際的可能也隨之增加。</p>
            </div>
            <div class="pr-6">
              <div class="relative w-full">
                <div class="absolute w-16 right-[30%] top-[-15%]">
                  <img class="w-full" src="~assets/imgs/about-analyze.gif" />
                </div>
                <p class="text-4xl leading-[40px]" style="font-family: dgo">HIGH<br /><span class="text-[28px]">PERFORMANCE</span></p>
              </div>
              <div class="w-60 mb-5">
                <img class="w-full" src="~assets/imgs/about-shark.gif" />
              </div>
              <p class="text-xs leading-[20px]">我們專注於高效率的製作與高效能的產<br />出，通過將工作內容顆粒化，並解析出<br />各項工作流程，分類優先順序，來簡化<br />複雜的工作，這樣的方式可以更快速的<br />產出高質量的服務與產品。</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-700 text-white text-base font-black tracking-[0.095em] flex justify-center" style="font-family: arial-black">
          <p class="w-fit">MEET OUR TEAM</p>
          <button class="rounded-[76px] flex" style="box-shadow: 1px 4px 8px #577fcd">
            <img src="" />
          </button>
        </div>

        <div class="flex"></div>
        <DashingFooter color="#D3E741" />
      </div>
    </div>
  </div>
</template>
