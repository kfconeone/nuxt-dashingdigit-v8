<script setup lang="ts">
//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//swiper

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";
//gsap

//smooth scrollbar
import Scrollbar from "smooth-scrollbar";
//smooth scrollbar

gsap.registerPlugin(ScrollTrigger, CustomEase, ScrollToPlugin);

const btnSwipe = ref();
const svgGit = ref();
useHead({
  title: "Dashing",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位" }],
  // script: [{ src: "https://unpkg.com/spacingjs", async: true }],
});

onMounted(() => {
  //smooth scrollbar//
  const indexScroller: any = document.querySelector(".index-scroll");
  const myScroller = Scrollbar.init(indexScroller, { damping: 0.15, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false });

  ScrollTrigger.scrollerProxy(".index-scroll", {
    scrollTop(value) {
      if (arguments.length) {
        myScroller.scrollTop = value;
      }
      return myScroller.scrollTop;
    },
  });
  myScroller.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: indexScroller });
  //smooth scrollbar//

  animateSwipeBtn();

  marquee();

  animtePolygon();

  addListenerOnSvgCircle();
});

function addListenerOnSvgCircle() {
  svgGit.value.addEventListener("mouseenter", () => {
    console.log("enter");
    gsap.set(".svg-git-circle", {
      fill: "#D3E741",
    });
    gsap.set(".svg-git-circle-path", {
      opacity: 0,
    });
    gsap.set(".unicorn", {
      opacity: 1,
    });
  });

  svgGit.value.addEventListener("mouseleave", () => {
    console.log("leave");
    gsap.set(".svg-git-circle", {
      fill: "#6372C6",
    });
    gsap.set(".unicorn", {
      opacity: 0,
    });
    gsap.set(".svg-git-circle-path", {
      opacity: 1,
    });
  });

  gsap.to(".svg-git", {
    rotate: -36000,
    duration: 9999,
    repeat: -1,
  });
}

function onClickSvgCircle() {
  gsap.to(window, { duration: 1, ease: "power3.easeInOut", scrollTo: ".index-footer-tri-pc" });
}

function animateSwipeBtn() {
  btnSwipe.value.addEventListener("mouseleave", (e) => {
    console.log("mouseout");
    gsap.to(".swipe-span", {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.inout",
    });
    gsap.to(".swipe-text", {
      duration: 0.4,
      ease: "power2.inout",
      stroke: "#D3E741",
      color: "#D3E741",
    });
  });

  btnSwipe.value.addEventListener("mouseover", (e) => {
    console.log("mouseover");
    gsap.to(".swipe-span", {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.inout",
    });
    gsap.to(".swipe-text", {
      duration: 0.4,
      ease: "power2.inout",
      stroke: "black",
      color: "black",
    });
  });
}

function onSlideChange() {
  console.log("onSlideChange");
}

function marquee() {
  gsap.to(".front", {
    x: -1000,
    ease: "power2.inout",
    scrollTrigger: {
      trigger: ".mar-tri",
      start: "top bottom",
      end: "bottom center",
      scrub: 3,
    },
  });
  gsap.to(".back", {
    x: 1000,
    duration: 5,
    ease: "power2.inout",
    scrollTrigger: {
      trigger: ".mar-tri",
      start: "top bottom",
      end: "bottom center",
      scrub: 3,
    },
  });
}

function animtePolygon() {
  gsap.to(".polygon-star", {
    rotate: 36000,
    duration: 9999,
    repeat: -1,
  });
  CustomEase.create("custom", "M0,0 C0,0 0.066,0.366 0.2,0.5 0.351,0.651 0.627,0.614 0.8,0.7 0.964,0.781 1,1 1,1 ");
  gsap.to(".polygon-arrow", {
    y: 189,
    duration: 1.5,
    ease: "custom",
    repeat: -1,
    onComplete: () => {
      gsap.set(".polygon-arrow", { y: 0 });
      gsap.to(".polygon-arrow-back", {
        duration: 1.5,
        ease: "custom",
        y: 189,
        onComplete: () => {
          gsap.set(".polygon-arrow-back", { y: 0 });
          gsap.to(".polygon-arrow", {
            y: 189,
            duration: 1.5,
            ease: "custom",
            onComplete: () => {
              gsap.to(".polygon-arrow-back", {
                duration: 1.5,
                ease: "custom",
                y: 189,
                onComplete: () => {
                  gsap.set(".polygon-arrow-back", { y: 0 });
                },
              });
              gsap.set(".polygon-arrow", { y: 0 });
            },
          });
        },
      });
    },
  });
}
</script>
<template>
  <div class="hidden 3xl:block">
    <div class="mx-auto relative bg-[#D3E741]">
      <img class="bg-hero w-full h-full fixed top-0" src="~/assets/imgs/bg-hero-sm.png" />
      <div class="index-scroll h-screen relative">
        <div class="index-center-pc">
          <div class="w-full h-screen min-h-screen grid grid-cols-12 pl-11 pr-9 pb-24 overflow-hidden relative z-10">
            <div class="pl-14 col-start-3 col-span-8 w-full gap-[7.3vw]">
              <div class="pt-64 text-white" style="font-family: dgo">
                <p class="font-normal text-[70px] leading-[110.8%]">We Create</p>
                <p class="text-[#D3E741] text-[130px] leading-[143px]">INSANELY</p>
                <p class="text-[80px] leading-[116px]">Digital experience</p>
                <div style="font-family: arial-bd" class="font-bold text-2xl tracking-[0.08em] mt-5">
                  <p>專注於新奇的互動設計</p>
                  <p>打造迷人的使用者體驗</p>
                </div>
              </div>
            </div>
            <div class="h-full col-start-11 flex items-end">
              <div ref="svgGit" class="cursor-pointer w-24 flex justify-center items-center relative" @click="onClickSvgCircle">
                <svg class="svg-git" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle class="svg-git-circle fill-[#6372C6]" cx="50.5" cy="50.5" r="50.5" />
                  <path
                    class="svg-git-circle-path"
                    d="M44.7442 12.2517L44.3087 9.37334L50.9416 8.38132L51.8309 14.2754C50.6901 15.3255 49.6567 16.0824 48.7276 16.5372C47.7984 16.992 46.6638 17.3217 45.3237 17.5232C43.674 17.7704 42.2879 17.691 41.1655 17.2851C40.0401 16.8822 39.111 16.1679 38.3719 15.1454C37.6329 14.1228 37.1545 12.8958 36.9399 11.4642C36.713 9.95634 36.8264 8.59498 37.2833 7.38625C37.7402 6.17751 38.5283 5.19159 39.6476 4.43461C40.5216 3.84855 41.7543 3.43343 43.3458 3.19535C44.8822 2.96642 46.0505 2.93284 46.8539 3.09462C47.6574 3.25639 48.3535 3.59215 48.9422 4.09885C49.531 4.60554 50.0216 5.28622 50.408 6.14088L46.3786 7.49613C46.1302 6.9986 45.7806 6.64452 45.3299 6.4278C44.8791 6.21108 44.3394 6.15004 43.7077 6.24466C42.7663 6.38507 42.064 6.82461 41.6041 7.55718C41.1441 8.2928 41.0184 9.36418 41.233 10.7713C41.4599 12.267 41.9015 13.2956 42.5639 13.8512C43.2262 14.4067 44.0634 14.6112 45.0723 14.4586C45.5537 14.3884 46.0014 14.248 46.4154 14.0465C46.8294 13.8451 47.2955 13.5337 47.8076 13.1155L47.6114 11.8152L44.7442 12.2517Z"
                    fill="white"
                  />
                  <path class="svg-git-circle-path" d="M57.0317 3.07938L68.2888 6.00354L67.5314 8.89108L60.4846 7.05966L59.9203 9.21158L66.4581 10.9087L65.7344 13.668L59.1966 11.9709L58.4975 14.6387L65.7467 16.522L64.9433 19.5866L53.4837 16.6075L57.0317 3.07938Z" fill="white" />
                  <path class="svg-git-circle-path" d="M73.5019 8.3447L84.1335 16.1252L82.079 18.9059L78.5126 16.2961L72.2477 24.7817L68.7488 22.2238L75.0137 13.7382L71.4474 11.1285L73.5019 8.3447Z" fill="white" />
                  <path class="svg-git-circle-path" d="M92.2383 27.1229L94.2224 30.975L81.7202 37.3544L79.7361 33.5023L92.2383 27.1229Z" fill="white" />
                  <path class="svg-git-circle-path" d="M96.9546 37.0156L97.571 41.002L90.6959 47.3845L98.3775 46.2063L99 50.2323L85.1148 52.3598L84.4923 48.3338L91.3153 41.9879L83.692 43.157L83.0695 39.14L96.9546 37.0156Z" fill="white" />
                  <path class="svg-git-circle-path" d="M96.9669 64.8379L91.4993 76.791L88.3408 75.3594L90.1746 71.3486L80.5457 66.9837L82.3458 63.0523L91.9746 67.4172L93.8084 63.4063L96.9669 64.8379Z" fill="white" />
                  <path
                    class="svg-git-circle-path"
                    d="M83.8606 75.8386C85.4338 77.4991 86.1943 79.2298 86.1421 81.0277C86.09 82.8255 85.2314 84.5043 83.5724 86.061C81.8705 87.6574 80.1287 88.4327 78.347 88.3869C76.5654 88.3411 74.9003 87.4987 73.3486 85.8626C72.2232 84.6722 71.4995 83.5092 71.1806 82.3707C70.8617 81.2322 70.8831 80.0936 71.2419 78.9582C71.6007 77.8227 72.3489 76.7208 73.4805 75.6555C74.6335 74.575 75.762 73.8607 76.8628 73.5188C77.9637 73.177 79.1259 73.18 80.3433 73.531C81.5607 73.8821 82.7352 74.6513 83.8606 75.8386ZM80.6899 78.7903C79.7178 77.7616 78.8254 77.2061 78.0189 77.1145C77.2124 77.023 76.4765 77.2916 75.8172 77.9112C75.1395 78.5491 74.8205 79.2603 74.8665 80.0478C74.9125 80.8354 75.4737 81.7999 76.5501 82.9384C77.4578 83.8969 78.3133 84.4127 79.1198 84.4921C79.9263 84.5684 80.6623 84.2967 81.3277 83.6741C81.9655 83.0758 82.263 82.3707 82.2231 81.5618C82.1802 80.7499 81.6711 79.8281 80.6899 78.7903Z"
                    fill="white"
                  />
                  <path
                    class="svg-git-circle-path"
                    d="M63.2199 97.2968L59.1077 98.6551L56.4705 90.7464C56.2099 89.962 56.0841 89.1805 56.0995 88.4052C56.1148 87.6299 56.2957 86.8913 56.6453 86.1953C56.9949 85.4994 57.4242 84.953 57.9302 84.5501C58.6324 83.9915 59.5432 83.5245 60.6655 83.1552C61.3156 82.9415 62.0362 82.7523 62.8335 82.5905C63.6308 82.4287 64.3331 82.3951 64.9372 82.4928C65.5413 82.5905 66.1392 82.8164 66.7341 83.1704C67.326 83.5245 67.789 83.9366 68.1202 84.4097C68.6568 85.1697 69.034 85.8748 69.2517 86.528L71.8889 94.4337L67.7767 95.792L65.0782 87.6971C64.836 86.9737 64.4465 86.4762 63.9068 86.2014C63.3671 85.9267 62.7415 85.9084 62.024 86.1465C61.3156 86.3815 60.825 86.7661 60.5551 87.3003C60.2852 87.8345 60.273 88.4694 60.5183 89.205L63.2199 97.2968Z"
                    fill="white"
                  />
                  <path
                    class="svg-git-circle-path"
                    d="M43.1741 90.2153L39.5035 88.7013C39.8622 87.6696 40.3529 86.8272 40.9693 86.1709C41.5856 85.5146 42.3185 85.0476 43.1649 84.7668C44.0112 84.486 45.06 84.4066 46.3142 84.5318C47.8352 84.6813 49.0526 85.0232 49.9725 85.5574C50.8925 86.0915 51.6469 86.9462 52.2356 88.1214C52.8244 89.2965 53.0329 90.7494 52.8612 92.474C52.6312 94.7755 51.84 96.4848 50.4877 97.599C49.1354 98.7131 47.3323 99.1618 45.0815 98.9389C43.3213 98.765 41.972 98.2735 41.0337 97.4647C40.0953 96.6558 39.4575 95.4928 39.114 93.9788L43.0116 93.5118C43.1036 93.9483 43.2109 94.2719 43.3397 94.4825C43.5482 94.8366 43.818 95.1174 44.1523 95.328C44.4835 95.5386 44.8668 95.6668 45.2992 95.7095C46.2774 95.8072 47.0686 95.4898 47.6665 94.7572C48.1173 94.2139 48.4056 93.3195 48.5313 92.0772C48.6846 90.5358 48.5558 89.4552 48.1418 88.8356C47.7279 88.216 47.0962 87.865 46.2437 87.7825C45.4188 87.7001 44.7687 87.8711 44.2995 88.2892C43.8272 88.7135 43.4531 89.3545 43.1741 90.2153Z"
                    fill="white"
                  />
                  <path class="svg-git-circle-path" d="M32.1101 95.9476L28.3475 93.7957L30.7976 89.5529L26.6854 87.1995L24.2353 91.4423L20.4543 89.2813L27.4521 77.1573L31.2331 79.3214L28.4027 84.2265L32.5149 86.5799L35.3453 81.6748L39.1079 83.8267L32.1101 95.9476Z" fill="white" />
                  <path
                    class="svg-git-circle-path"
                    d="M9.68471 77.606L6.10915 70.3413C5.51425 69.1296 5.35785 68.0551 5.63997 67.1119C5.92209 66.1718 6.5078 65.482 7.40015 65.0485C8.14532 64.6853 8.89968 64.6029 9.66017 64.8074C10.1692 64.9417 10.6721 65.2561 11.1689 65.7506C10.942 64.7433 10.991 63.8947 11.31 63.211C11.6319 62.5273 12.1931 61.9901 12.9965 61.5963C13.6497 61.2789 14.3121 61.1415 14.9836 61.1903C15.6552 61.2392 16.2716 61.4498 16.8328 61.8283C17.1823 62.0603 17.5626 62.4845 17.9704 63.1011C18.5163 63.9192 18.8567 64.4716 18.9977 64.7555L22.2942 71.4524L9.68471 77.606ZM12.7052 71.2784L11.8742 69.5905C11.5767 68.9861 11.264 68.6137 10.9389 68.4794C10.6139 68.3451 10.252 68.3726 9.85643 68.5679C9.48845 68.748 9.26153 69.0044 9.16953 69.3432C9.07754 69.682 9.17873 70.1429 9.47005 70.732L10.3133 72.4444L12.7052 71.2784ZM17.6638 68.8579L16.6886 66.88C16.3605 66.2115 16.0079 65.7994 15.6368 65.6407C15.2627 65.482 14.8763 65.5003 14.4746 65.6987C14.1036 65.8818 13.8705 66.1627 13.7754 66.5442C13.6834 66.9257 13.803 67.4569 14.1373 68.1375L15.1063 70.1063L17.6638 68.8579Z"
                    fill="white"
                  />
                  <path class="svg-git-circle-path" d="M13.708 50.6383L13.9901 55.5343L16.3452 56.0837L16.5966 60.4883L2.26985 56.0379L2 51.3342L15.7257 45.2906L15.9833 49.8081L13.708 50.6383ZM10.7273 51.7066L5.77488 53.535L10.9052 54.7743L10.7273 51.7066Z" fill="white" />
                  <path
                    class="svg-git-circle-path"
                    d="M2.83716 40.3457L5.61235 32.7423C6.0754 31.4755 6.74697 30.6178 7.62399 30.1661C8.50101 29.7174 9.40563 29.6594 10.3379 29.9951C11.1198 30.279 11.6994 30.7613 12.0827 31.4481C12.3372 31.9059 12.4599 32.4828 12.4476 33.1849C13.0211 32.3241 13.665 31.7716 14.3857 31.5244C15.1032 31.2802 15.8821 31.3107 16.7223 31.6129C17.4062 31.8601 17.9643 32.2417 18.3967 32.7575C18.826 33.2734 19.102 33.8625 19.2185 34.5279C19.2921 34.94 19.2491 35.5077 19.0866 36.225C18.872 37.1835 18.7125 37.8123 18.6021 38.1114L16.0416 45.1227L2.83716 40.3457ZM9.51296 38.1206L10.1569 36.3532C10.3869 35.7183 10.439 35.2391 10.3103 34.9125C10.1815 34.5859 9.91161 34.3478 9.49456 34.1952C9.11125 34.0548 8.76473 34.0731 8.45808 34.241C8.15143 34.4119 7.88464 34.8026 7.66079 35.4192L7.00455 37.2109L9.51296 38.1206ZM14.7015 39.9978L15.4589 37.9283C15.7135 37.2293 15.7687 36.692 15.6245 36.3135C15.4804 35.9381 15.1983 35.6726 14.7782 35.5199C14.3887 35.3795 14.0238 35.407 13.6804 35.6054C13.34 35.8038 13.0395 36.2586 12.7788 36.9698L12.0244 39.0302L14.7015 39.9978Z"
                    fill="white"
                  />
                  <path class="svg-git-circle-path" d="M10.8714 22.7274L18.7217 14.1808L20.9357 16.1954L16.0201 21.5462L17.6668 23.0449L22.2267 18.0817L24.3426 20.0078L19.7827 24.9679L21.8281 26.8268L26.8847 21.3203L29.2337 23.457L21.2393 32.1623L10.8714 22.7274Z" fill="white" />
                  <path class="svg-git-circle-path" d="M23.113 11.2414L26.6548 9.05286L28.3414 11.7603L31.0491 17.6209L28.8596 18.973L24.7996 13.9458L23.113 11.2414ZM28.829 20.136L32.1347 18.094L33.95 21.0029L30.6443 23.0449L28.829 20.136Z" fill="white" />
                </svg>
                <div class="absolute w-full h-full opacity-0 unicorn flex justify-center items-center">
                  <div>
                    <div class="w-5 mx-auto">
                      <img class="w-full" w src="~assets/imgs/unicorn.png" />
                    </div>
                    <div class="text-center mx-auto text-xs font-bold mt-1 w-full" style="font-family: arial-reg">
                      <p>LET’S START<br />THE PROJECT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full h-screen flex justify-center items-center relative z-10 min-h-[800px]">
            <div>
              <div class="w-[1350px] text-white text-sm leading-7">
                <swiper
                  :effect="'coverflow'"
                  :grabCursor="true"
                  :centeredSlides="true"
                  :slidesPerView="1.5"
                  :coverflowEffect="{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 3,
                    slideShadows: true,
                  }"
                  :loop="true"
                  :modules="[EffectCoverflow, Pagination]"
                  class="mySwiper"
                  @slideChange="onSlideChange()"
                >
                  <swiper-slide>
                    <div class="relative">
                      <div class="w-56 absolute -right-7 bottom-8">
                        <img class="w-full relative z-0" src="~assets/imgs/btn-miatreasure.png" />
                      </div>
                      <div>
                        <img src="~assets/imgs/hero-mia-pc.jpg" />
                      </div>
                      <div class="w-[335px]"><p>一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="relative">
                      <div class="w-56 absolute -right-7 bottom-8">
                        <img class="w-full relative z-0" src="~assets/imgs/btn-bella.png" />
                      </div>
                      <div>
                        <img src="~assets/imgs/hero-bella-pc.png" />
                      </div>
                      <div class="w-[335px]"><p>一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="relative">
                      <div class="w-56 absolute -right-7 bottom-8">
                        <img class="w-full relative z-0" src="~assets/imgs/btn-ancient.png" />
                      </div>
                      <div>
                        <img src="~assets/imgs/hero-ancient-pc.jpg" />
                      </div>
                      <div class="w-[335px]"><p>一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p></div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>

              <div class="flex justify-center mt-20 text-[#D3E741] text-xl font-bold" style="font-family: arial-black">
                <button ref="btnSwipe" class="overflow-hidden text-[#D3E741] rounded-[44px] border-2 flex flex-nowrap items-center justify-center border-[#D3E741] py-2.5 px-10 relative w-fit h-fit">
                  <span style="background: linear-gradient(90deg, #d3e741 2.04%, #ffffff 96.94%)" class="swipe-span w-[110%] h-[110%] absolute scale-x-0 top-0 left-0 origin-left"></span>
                  <div class="relative z-10 flex items-center gap-2.5">
                    <p class="swipe-text">MORE</p>
                    <div class="w-4">
                      <svg viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke-[#D3E741] swipe-text" x1="1.29289" y1="10.1818" x2="9.29289" y2="2.18181" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="2.88892" y1="1.88892" x2="10" y2="1.88892" stroke-width="2" />
                        <line class="stroke-[#D3E741] swipe-text" x1="9" y1="2" x2="9" y2="9.11111" stroke-width="2" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="text-8xl w-full h-fit overflow-hidden py-20 mar-tri text-white skew-y-[4.9deg] bg-[#30312D]" style="font-family: dgo">
            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="front flex whitespace-nowrap gap-12 py-10 items-center">
                <p>What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p>What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p>What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
              </div>
            </div>

            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="back justify-end flex whitespace-nowrap gap-12 py-10 items-center">
                <p>We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />
                <p>We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />
                <p>We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />
              </div>
            </div>

            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="front flex whitespace-nowrap gap-12 py-10 items-center">
                <p>We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />
                <p>We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />
                <p>We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />
              </div>
            </div>

            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="back justify-end flex whitespace-nowrap gap-12 py-10 items-center">
                <p>Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p>Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p>Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
              </div>
            </div>
            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="front flex whitespace-nowrap gap-12 py-10 items-center">
                <p>What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p>What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p>What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">What are you wating for?</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-7pupu-150.png" />
              </div>
            </div>

            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="back justify-end flex whitespace-nowrap gap-12 py-10 items-center">
                <p>We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />
                <p>We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />
                <p>We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We don’t work for you</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-qq-150.png" />
              </div>
            </div>

            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="front flex whitespace-nowrap gap-12 py-10 items-center">
                <p>We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />
                <p>We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />
                <p>We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />

                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">We work with you !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-love-150.png" />
              </div>
            </div>

            <div class="overflow-hidden border-b-[1px] border-white">
              <div class="back justify-end flex whitespace-nowrap gap-12 py-10 items-center">
                <p>Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p>Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p>Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
                <p class="text-[#30312D]" style="text-stroke: 1px #ffffff; -webkit-text-stroke: 1px #ffffff">Contact us now !</p>
                <img class="w-[120px]" src="~assets/imgs/emoji-heart-150.png" />
              </div>
            </div>
          </div>

          <div>
            <div class="w-[169px] flex justify-center relative overflow-hidden p-5">
              <svg class="polygon-star" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M89.8646 3.76639C91.1378 2.74635 93.031 3.59785 93.1125 5.22728L94.4877 32.696C94.5858 34.6567 96.0924 36.2563 98.0437 36.4718L125.381 39.4903C127.002 39.6694 127.739 41.6101 126.644 42.82L108.193 63.2156C106.876 64.6715 106.81 66.8679 108.038 68.4L125.234 89.8646C126.254 91.1378 125.402 93.031 123.773 93.1125L96.3041 94.4877C94.3434 94.5858 92.7437 96.0924 92.5282 98.0437L89.5097 125.381C89.3307 127.002 87.3899 127.739 86.1801 126.644L65.7844 108.193C64.3286 106.876 62.1321 106.81 60.6 108.038L39.1355 125.234C37.8622 126.254 35.9691 125.402 35.8875 123.773L34.5124 96.304C34.4142 94.3434 32.9077 92.7437 30.9564 92.5282L3.61942 89.5097C1.9978 89.3307 1.26126 87.3899 2.35576 86.1801L20.8067 65.7844C22.1237 64.3286 22.1896 62.1321 20.9621 60.6L3.7664 39.1355C2.74636 37.8622 3.59786 35.9691 5.22729 35.8875L32.696 34.5123C34.6567 34.4142 36.2564 32.9077 36.4718 30.9564L39.4903 3.61941C39.6694 1.9978 41.6101 1.26126 42.82 2.35576L63.2156 20.8067C64.6715 22.1237 66.8679 22.1896 68.4 20.9621L89.8646 3.76639Z"
                  stroke="#D3E741"
                  stroke-width="2"
                />
              </svg>
              <div class="w-[27px] absolute top-[-75px] polygon-arrow">
                <svg viewBox="0 0 27 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5124 1.10547V47.2874C12.2738 43.1292 8.20411 35.0253 1.8342 35.8746" stroke="#D3E741" stroke-width="2" stroke-linecap="round" />
                  <path d="M13.7778 1.10547V47.2874C15.0164 43.1292 19.0861 35.0253 25.456 35.8746" stroke="#D3E741" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>
              <div class="w-[27px] absolute top-[-75px] polygon-arrow-back">
                <svg viewBox="0 0 27 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5124 1.10547V47.2874C12.2738 43.1292 8.20411 35.0253 1.8342 35.8746" stroke="#D3E741" stroke-width="2" stroke-linecap="round" />
                  <path d="M13.7778 1.10547V47.2874C15.0164 43.1292 19.0861 35.0253 25.456 35.8746" stroke="#D3E741" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="index-footer-tri-pc">
          <DashingFooter color="#D3E741" />
        </div>
      </div>
    </div>
  </div>

  <div class="hidden xl:block 3xl:hidden">
    <div class="relative">
      <img class="w-full h-full fixed top-0 z-0" src="~/assets/imgs/bg-hero-sm.png" />

      <div class="w-full h-screen grid grid-cols-12 pl-11 pr-9 pb-24 relative z-10 text-white">
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

      <div class="w-full h-screen flex justify-center items-center relative z-10">
        <div>
          <div class="w-[960px] text-white text-sm leading-7">
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="1.5"
              :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 3,
                slideShadows: true,
              }"
              :loop="true"
              :modules="[EffectCoverflow, Pagination]"
              class="mySwiper"
            >
              <swiper-slide>
                <div class="relative">
                  <div class="w-56 absolute -right-7 bottom-8">
                    <img class="w-full relative z-0" src="~assets/imgs/btn-miatreasure.png" />
                  </div>
                  <div>
                    <img src="~assets/imgs/hero-mia-pc.jpg" />
                  </div>
                  <div class="w-[335px]"><p>一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p></div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <div class="w-56 absolute -right-7 bottom-8">
                    <img class="w-full relative z-0" src="~assets/imgs/btn-bella.png" />
                  </div>
                  <div>
                    <img src="~assets/imgs/hero-bella-pc.png" />
                  </div>
                  <div class="w-[335px]"><p>一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p></div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="relative">
                  <div class="w-56 absolute -right-7 bottom-8">
                    <img class="w-full relative z-0" src="~assets/imgs/btn-ancient.png" />
                  </div>
                  <div>
                    <img src="~assets/imgs/hero-ancient-pc.jpg" />
                  </div>
                  <div class="w-[335px]"><p>一些關於MIA TREASURE的介紹內文一些關於 MIA TREASURE的介紹內文一些關於MIA TREASURE 的介紹內文一些關於MIA TREASURE的介紹內文</p></div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="flex justify-center mt-20 text-[#D3E741]">MORE</div>
        </div>
      </div>

      <div class="w-full h-screen flex justify-center items-center relative z-10 text-white"></div>
    </div>
    <DashingFooter color="#D3E741" />
  </div>

  <div class="hidden md:block xl:hidden">
    <div class="relative">
      <img class="w-full h-full fixed top-0 z-0" src="~/assets/imgs/bg-hero-sm.png" />
      <div class="w-full flex justify-center items-center py-64 relative z-10">
        <div class="text-white" style="font-family: dgo">
          <p class="text-4xl">We create</p>
          <p class="text-[#D3E741] text-[68px]">INSANE</p>
          <p class="text-[40px]">Digital experience</p>
          <div class="mt-8">
            <p class="text-xl font-bold leading-[30px]" style="font-family: arial-reg">
              專注於新奇的互動設計<br />
              打造迷人的使用者體驗
            </p>
          </div>
          <div class="ml-auto bg-[#6372C6] rounded-full w-32 h-32 mt-32"></div>
        </div>
      </div>

      <div class="w-9/12 h-fit flex justify-center items-center z-10 relative mx-auto">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="1.5"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
          }"
          :loop="true"
          :modules="[EffectCoverflow, Pagination]"
          class="mySwiper"
        >
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project1-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project2-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project3-320.jpg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <DashingFooter color="#D3E741" />
  </div>

  <div class="md:hidden">
    <div class="relative">
      <img class="w-full h-full fixed top-0 z-10" src="~/assets/imgs/bg-hero-sm.png" />

      <div class="w-full flex justify-center items-center pb-64 relative z-10">
        <div class="text-white mt-48" style="font-family: dgo">
          <p class="text-xs">We create</p>
          <p class="text-[#D3E741] text-[24px]">INSANE</p>
          <p class="text-xl">Digital experience</p>
          <div class="mt-8">
            <p class="text-xs font-bold leading-[18px]" style="font-family: arial-reg">
              專注於新奇的互動設計<br />
              打造迷人的使用者體驗
            </p>
          </div>
          <div class="ml-auto bg-[#6372C6] rounded-full w-16 h-16 mt-11"></div>
        </div>
      </div>

      <div class="w-full h-fit flex justify-center items-center z-10 relative">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="1.5"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
          }"
          :loop="true"
          :modules="[EffectCoverflow, Pagination]"
          class="mySwiper"
        >
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project1-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project2-320.jpg" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <img src="~assets/imgs/project3-320.jpg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <DashingFooter color="#D3E741" />
  </div>
</template>
<style scoped>
.swiper-slide-next,
.swiper-slide-prev {
  --tw-blur: blur(12px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
</style>
