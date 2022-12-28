<script setup lang="ts">
import workBg from "/work-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollToPlugin);
const scrollbarRef = ref();
const scrollbarForTablet = ref();
const scrollbarForMobile = ref();

onMounted(() => {
  initSmoothScrollbarForDesktopAndLaptop();
  initSmoothScrollbarForTablet();
  initSmoothScrollbarForMoblie();
});
function scrollToTopForDesktopAndLaptop() {
  console.log("scrollToTopForDesktopAndLaptop");
  try {
    scrollbarRef.value.scrollTo(0, 0, 600);
  } catch (error) {
    console.log("error:", error);
  }
}

function scrollToTopForTablet() {
  console.log("scrollToTopForTablet");
  try {
    scrollbarForTablet.value.scrollTo(0, 0, 600);
  } catch (error) {
    console.log("error:", error);
  }
}

function scrollToTopForMobile() {
  console.log("scrollToTopForMobile");
  try {
    scrollbarForMobile.value.scrollTo(0, 0, 600);
  } catch (error) {
    console.log("error:", error);
  }
}

function initSmoothScrollbarForDesktopAndLaptop() {
  //smooth scrollbar//
  if (!document.querySelector(".pc-bellauno-scroll")) return;
  const workScroller: any = document.querySelector(".pc-bellauno-scroll");
  scrollbarRef.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".pc-ancient-scroll", {
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
    var fixedElem = document.getElementById("pc-bellauno-sticky");

    ScrollTrigger.update();
    fixedElem!.style.top = offset.y + "px";
    fixedElem!.style.left = offset.x + "px";
  });
  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}

function initSmoothScrollbarForTablet() {
  //smooth scrollbar//
  if (!document.querySelector(".md-bellauno-scroll")) return;
  const workScroller: any = document.querySelector(".md-bellauno-scroll");
  scrollbarForTablet.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".md-bellauno-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarForTablet.value.scrollTop = value;
      }
      return scrollbarForTablet.value.scrollTop;
    },
    scrollLeft(value) {
      if (arguments.length) {
        scrollbarForTablet.value.scrollLeft = value; // setter
      }
      return scrollbarForTablet.value.scrollLeft; // getter
    },
  });

  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}

function initSmoothScrollbarForMoblie() {
  if (!document.querySelector(".sm-bellauno-scroll")) return;
  //smooth scrollbar//
  const workScroller: any = document.querySelector(".sm-bellauno-scroll");
  scrollbarForMobile.value = Scrollbar.init(workScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });
  ScrollTrigger.scrollerProxy(".sm-bellauno-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbarForMobile.value.scrollTop = value;
      }
      return scrollbarForMobile.value.scrollTop;
    },
    scrollLeft(value) {
      if (arguments.length) {
        scrollbarForMobile.value.scrollLeft = value; // setter
      }
      return scrollbarForMobile.value.scrollLeft; // getter
    },
  });

  ScrollTrigger.defaults({ scroller: workScroller });
  //smooth scrollbar//
}
</script>
<template>
  <div class="hidden xl:block">
    <div class="pc-bellauno-scroll h-screen">
      <div class="px-10 pt-16 pb-12" :style="{ backgroundImage: `url(${workBg})` }">
        <div class="grid grid-cols-[75%,25%] justify-center gap-3">
          <div class="bg-white px-10 py-14 rounded-md">
            <img class="rounded-md" src="/work-bellauno.jpg" />
          </div>
          <div id="pc-bellauno-sticky" class="bg-white rounded-md px-12 pt-24 pb-40 text-[#262723] h-screen sticky top-0 overflow-scroll">
            <div class="text-xl font-black" style="font-family: arial-black">
              <p>BELLA　UNO</p>
              <p>視覺設計</p>
            </div>
            <div class="font-bold text-[15px] 3xl:text-lg mt-12">
              <p>| Project Description</p>
              <br />
              <div class="w-[233px] 3xl:w-[288px] font-normal">
                <p>Bella Uno是來自紐約並富含創作理念的女性團隊所設計的品牌<br /><br />品牌追求休閒時尚並兼具環境保護的理念<br /><br />每個飾品皆獨一無二並至少含有25%的回收金屬，在2017年取得Underwriters Laboratories永續環境認證<br /><br />是一家站在環保最前線的飾品品牌</p>
              </div>
            </div>
            <div class="font-bold text-[15px] 3xl:text-lg mt-32">
              <p>| Web Design</p>
              <br />
              <div class="w-[233px] 3xl:w-[288px] font-normal">
                <p>
                  Bella Uno的飾品大膽而搶眼，但同時保有美國鄉村的樸質性質<br /><br />我們在網站設計上以較柔和的色調<br /><br />並搭配曲線線條動畫的延伸視覺<br /><br />強調品牌自由奔放的精神與高雅的個性<br /><br />也象徵Bella Uno裡充滿意義的蜜蜂logo的行徑路徑<br /><br />Be beautiful...Be
                  you的線條貫穿整體網站
                </p>
              </div>
            </div>
            <div class="font-bold text-[15px] 3xl:text-lg mt-32">
              <p class="font-black text-xl" style="font-family: arial-black">CREDITS</p>
              <div class="w-[233px] 3xl:w-[288px] font-normal mt-12">
                <p>客戶 BELLA UNO<br />專案總監 PON<br />視覺設計 MACHI<br />程式設計 KEVIN<br />程式設計 HANK<br />合作攝影 CHECHEN</p>
              </div>
            </div>
            <div class="font-bold text-[15px] 3xl:text-lg mt-32">
              <p class="font-black text-xl" style="font-family: arial-black">LINK</p>
              <br />

              <p>https://bella-uno.com</p>
              <br />

              <div class="flex items-center gap-3">
                <div class="w-4"><img src="/icon-facebook.png" /></div>
                <div><p>bellaunojewelry_tw</p></div>
              </div>
              <br />

              <div class="flex items-center gap-3">
                <div class="w-4"><img src="/icon-facebook.png" /></div>
                <div><p>@bellauno.tw</p></div>
              </div>
            </div>
            <div class="justify-center text-xl 3xl:text-3xl mt-32" style="font-family: dgo">
              <p class="w-fit mx-auto">BACK TO WORK</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between text-white text-6xl 3xl:text-8xl mt-28 items-center" style="font-family: dgo">
          <NuxtLink class="pointer" href="/work" target="_top">
            <div class="flex gap-4 items-start stroke-white hover:stroke-[#D3E741] hover:text-[#D3E741]">
              <div class="w-[75px] 3xl:w-[102px]">
                <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="83.0792" y1="51.5405" x2="21.8097" y2="51.5405" stroke-width="5" />
                  <line x1="46.4634" y1="77.3454" x2="19.2325" y2="50.1145" stroke-width="5" />
                  <line x1="20.2324" y1="52.8099" x2="46.2324" y2="26.8099" stroke-width="5" />
                  <circle cx="51.2886" cy="51.2886" r="47.9087" stroke-width="5" />
                </svg>
              </div>
              <p>BACK TO WORK</p>
            </div>
          </NuxtLink>
          <div @click="scrollToTopForDesktopAndLaptop" class="flex gap-4 items-center stroke-white hover:stroke-[#D3E741] hover:text-[#D3E741]">
            <p>UP</p>
            <div class="w-[75px] 3xl:w-[102px]">
              <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="51.0369" y1="83.0791" x2="51.0369" y2="21.8096" stroke-width="5" />
                <line x1="25.2323" y1="46.4632" x2="52.4632" y2="19.2323" stroke-width="5" />
                <line x1="49.7678" y1="20.2322" x2="75.7678" y2="46.2322" stroke-width="5" />
                <circle cx="51.2887" cy="51.2886" r="47.9087" stroke-width="5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden md:block xl:hidden">
    <div class="md-bellauno-scroll h-screen">
      <div class="px-10 pt-16 pb-12" :style="{ backgroundImage: `url(${workBg})` }">
        <div class="bg-white rounded-t-md px-16 py-12 text-[#262723] h-fit">
          <div class="text-4xl font-black leading-[56px]" style="font-family: arial-black">
            <p>BELLA UNO</p>
            <p>視覺設計</p>
          </div>
          <div class="font-bold text-[15px] 3xl:text-lg mt-12">
            <p>| Project Description</p>
            <br />
            <div class="font-normal">
              <p>Bella Uno是來自紐約並富含創作理念的女性團隊所設計的品牌<br /><br />品牌追求休閒時尚並兼具環境保護的理念<br /><br />每個飾品皆獨一無二並至少含有25%的回收金屬，在2017年取得<br />Underwriters Laboratories永續環境認證<br /><br />是一家站在環保最前線的飾品品牌</p>
            </div>
          </div>
          <div class="font-bold text-[15px] 3xl:text-lg mt-32">
            <p>| Web Design</p>
            <br />
            <div class="font-normal">
              <p>Bella Uno的飾品大膽而搶眼，但同時保有美國鄉村的樸質性質<br /><br />我們在網站設計上以較柔和的色調並搭配曲線線條動畫的延伸<br />視覺，強調品牌自由奔放的精神與高雅的個性也象徵Bella Uno<br />裡充滿意義的蜜蜂logo的行徑路徑。<br /><br />Be beautiful...Be you的線條貫穿整體網站</p>
            </div>
          </div>
          <div class="flex 3xl:text-lg mt-32">
            <div class="font-bold text-[15px]">
              <p class="font-black text-xl" style="font-family: arial-black">CREDITS</p>
              <br />

              <div class="w-[233px] 3xl:w-[288px] font-normal">
                <p>客戶 BELLA UNO<br />專案總監 PON<br />視覺設計 MACHI<br />程式設計 KEVIN<br />程式設計 HANK<br />合作攝影 CHECHEN</p>
              </div>
            </div>
            <div class="font-bold text-[15px]">
              <p class="font-black text-xl" style="font-family: arial-black">LINK</p>
              <br />

              <p>https://bella-uno.com</p>
              <br />

              <div class="flex items-center gap-3">
                <div class="w-4"><img src="/icon-facebook.png" /></div>
                <div><p>bellaunojewelry_tw</p></div>
              </div>
              <br />

              <div class="flex items-center gap-3">
                <div class="w-4"><img src="/icon-facebook.png" /></div>
                <div><p>@bellauno.tw</p></div>
              </div>
            </div>
          </div>

          <div class="justify-center text-xl 3xl:text-3xl mt-32" style="font-family: dgo">
            <p class="w-fit">BACK TO WORK</p>
          </div>
        </div>
        <div class="">
          <img src="/work-bellauno.jpg" />
        </div>
        <div @click="scrollToTopForTablet" class="flex justify-end items-center text-white text-[55px] mt-8 gap-5" style="font-family: dgo">
          <p>UP</p>
          <div class="w-[73px]">
            <svg viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-2" x2="44.2774" y2="-2" transform="matrix(-0.0263146 -0.999654 0.999654 0.0263146 38.7288 59.5088)" stroke="white" stroke-width="4" />
              <line x1="17.4813" y1="32.4149" x2="36.6355" y2="13.2607" stroke="white" stroke-width="4" />
              <line x1="34.9816" y1="13.8646" x2="54.2588" y2="33.1418" stroke="white" stroke-width="4" />
              <path d="M60.158 12.8422C74.0438 26.728 74.5104 48.5172 61.5137 61.5138C48.517 74.5105 26.7278 74.0439 12.8421 60.1582C-1.04368 46.2724 -1.51029 24.4832 11.4864 11.4866C24.4831 -1.51012 46.2723 -1.04351 60.158 12.8422Z" stroke="white" stroke-width="4" />
            </svg>
          </div>
        </div>
        <NuxtLink class="pointer" href="/work" target="_top">
          <div class="w-[73px] mt-24">
            <svg viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-2" x2="44.2774" y2="-2" transform="matrix(-0.999654 0.0263146 0.0263146 -0.999654 59.5085 34.271)" stroke="white" stroke-width="4" />
              <line x1="32.4146" y1="55.5187" x2="13.2605" y2="36.3645" stroke="white" stroke-width="4" />
              <line x1="13.8644" y1="38.0184" x2="33.1416" y2="18.7412" stroke="white" stroke-width="4" />
              <path d="M12.842 12.842C26.7277 -1.04376 48.5169 -1.51037 61.5136 11.4863C74.5103 24.483 74.0437 46.2722 60.1579 60.1579C46.2722 74.0437 24.483 74.5103 11.4863 61.5136C-1.51037 48.5169 -1.04376 26.7277 12.842 12.842Z" stroke="white" stroke-width="4" />
            </svg>
          </div>
          <div class="text-white text-[55px]" style="font-family: dgo">BACK TO WORK</div>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div class="md:hidden">
    <div class="sm-bellauno-scroll h-screen">
      <div class="px-8 pt-20 pb-5" :style="{ backgroundImage: `url(${workBg})` }">
        <div class="bg-white rounded-t-md px-7 pt-7 pb-5 text-[#262723] h-fit">
          <div class="text-xl font-black leading-[28px]" style="font-family: arial-black">
            <p>BELLA UNO</p>
            <p>視覺設計</p>
          </div>
          <div class="px-3 text-[13px]">
            <div class="font-bold mt-9">
              <p>| Project Description</p>
              <br />
              <div class="font-normal">
                <p>Bella Uno是來自紐約並富含創作理念的女性團隊所設計的品牌<br /><br />品牌追求休閒時尚並兼具環境保護的理念<br /><br />每個飾品皆獨一無二並至少含有25%的回收金屬，在2017年取得<br />Underwriters Laboratories永續環境認證<br /><br />是一家站在環保最前線的飾品品牌</p>
              </div>
            </div>
            <div class="font-bold mt-9">
              <p>| Web Design</p>
              <br />
              <div class="font-normal">
                <p>Bella Uno的飾品大膽而搶眼，但同時保有美國鄉村的樸質性質<br /><br />我們在網站設計上以較柔和的色調並搭配曲線線條動畫的延伸視覺，強調品牌自由奔放的精神與高雅的個性也象徵Bella Uno裡充滿意義的蜜蜂logo的行徑路徑。<br /><br />Be beautiful...Be you的線條貫穿整體網站</p>
              </div>
            </div>
            <div class="font-bold text-[15px] mt-20">
              <p class="font-black text-xl" style="font-family: arial-black">CREDITS</p>
              <br />

              <div class="w-[233px] 3xl:w-[288px] font-normal">
                <p>客戶 BELLA UNO<br />專案總監 PON<br />視覺設計 MACHI<br />程式設計 KEVIN<br />程式設計 HANK<br />合作攝影 CHECHEN</p>
              </div>
            </div>
            <div class="font-bold text-[15px] mt-20">
              <p class="font-black text-xl" style="font-family: arial-black">LINK</p>
              <br />

              <p>https://bella-uno.com</p>
              <br />

              <div class="flex items-center gap-3">
                <div class="w-4"><img src="/icon-facebook.png" /></div>
                <div><p>bellaunojewelry_tw</p></div>
              </div>
              <br />

              <div class="flex items-center gap-3">
                <div class="w-4"><img src="/icon-facebook.png" /></div>
                <div><p>@bellauno.tw</p></div>
              </div>
            </div>
          </div>

          <div class="justify-center text-xl mt-12" style="font-family: dgo">
            <p class="w-fit mx-auto">BACK TO WORK</p>
          </div>
        </div>
        <div class="">
          <img src="/work-bellauno.jpg" />
        </div>
        <div @click="scrollToTopForMobile" class="flex justify-end items-center text-white text-xl mt-5 gap-2.5" style="font-family: dgo">
          <p>UP</p>
          <div class="w-[34px]">
            <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-1" x2="19.6658" y2="-1" transform="matrix(-0.0263146 -0.999654 0.999654 0.0263146 17.8638 27.0928)" stroke="white" stroke-width="2" />
              <line x1="8.34758" y1="14.9801" x2="16.8549" y2="6.47283" stroke="white" stroke-width="2" />
              <line x1="16.2784" y1="6.74114" x2="24.8404" y2="15.3031" stroke="white" stroke-width="2" />
              <path d="M27.3024 6.44492C33.4301 12.5726 33.6295 22.1794 27.9045 27.9044C22.1795 33.6294 12.5727 33.43 6.44502 27.3023C0.317326 21.1746 0.117919 11.5678 5.8429 5.8428C11.5679 0.11782 21.1747 0.317227 27.3024 6.44492Z" stroke="white" stroke-width="2" />
            </svg>
          </div>
        </div>
        <NuxtLink class="pointer" href="/work" target="_top">
          <div class="w-[34px] mt-9">
            <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-1" x2="19.6658" y2="-1" transform="matrix(-0.999654 0.0263146 0.0263146 -0.999654 27.0933 15.8838)" stroke="white" stroke-width="2" />
              <line x1="14.9804" y1="25.4" x2="6.47307" y2="16.8927" stroke="white" stroke-width="2" />
              <line x1="6.74114" y1="17.4689" x2="15.3031" y2="8.90694" stroke="white" stroke-width="2" />
              <path d="M6.44492 6.44492C12.5726 0.317228 22.1794 0.11782 27.9044 5.8428C33.6294 11.5678 33.43 21.1746 27.3023 27.3023C21.1746 33.43 11.5678 33.6294 5.8428 27.9044C0.11782 22.1794 0.317227 12.5726 6.44492 6.44492Z" stroke="white" stroke-width="2" />
            </svg>
          </div>
          <div class="text-white text-xl mt-1" style="font-family: dgo">BACK TO WORK</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
