<script setup lang="ts">
import workBg from "/work-bg.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
const pcMoreCheckBox: any = ref();

onMounted(() => {});
function scrollToTopForDesktopAndLaptop() {
  console.log("scrollToTopForDesktopAndLaptop");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function onPcAncientMoreClicked() {
  pcMoreCheckBox.value.checked = true;
  var pcMore = document.getElementById("pc-mia-more");
  pcMore?.classList.add("hidden");

  console.log(pcMoreCheckBox.value.checked);
}
function scrollToTopForTablet() {
  console.log("scrollToTopForTablet");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToTopForMobile() {
  console.log("scrollToTopForMobile");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
<template>
  <div class="hidden xl:block">
    <div class="px-10 pt-16 pb-12" :style="{ backgroundImage: `url(${workBg})` }">
      <div class="grid grid-cols-[75%,25%] justify-center gap-3">
        <div class="bg-white px-10 py-14 rounded-md">
          <img class="rounded-md" src="/work-ancient.jpg" />
        </div>
        <div id="pc-ancient-sticky" class="bg-white rounded-md px-12 pt-24 pb-40 text-[#262723] h-screen sticky top-0 overflow-scroll">
          <div class="text-xl font-black" style="font-family: arial-black">
            <p>全國古蹟日</p>
            <p>活動視覺設計</p>
          </div>
          <div class="font-bold text-[15px] 3xl:text-lg mt-12">
            <p>| Project Description</p>
            <br />
            <div class="w-[233px] 3xl:w-[288px] font-normal">
              <p>
                全國古蹟日為全台灣各縣市在每年9月都會共同響應的一個活動<br /><br />

                主要目的在提高民眾認識文化資產保存與文化認同等行為<br /><br />

                並舉辦各式講座、走讀、劇場表演、手作課程等多元方式吸引民眾<br /><br />

                使其達到寓教於樂的推廣方式
              </p>
            </div>
          </div>
          <div class="font-bold text-[15px] 3xl:text-lg mt-32">
            <p>| Visual Design</p>
            <br />
            <div class="w-[233px] 3xl:w-[288px] font-normal">
              <p>
                我們參與了本次活動的整體視覺識別與設計。<br /><br />

                包括了海報、宣傳DM、活動贈品設計、展場設計、市集布置。<br /><br />

                主視覺顏色上採用了青藍色、黃色等較為明亮活潑的設計。<br /><br />

                並以蠟筆筆觸插畫吸引年輕客群參與活動，使"古蹟"這個較為有歷史痕跡，老舊的刻板印象。<br /><br />

                演變成活潑、討喜的形象，以提高更多年輕人的認同與參與感
              </p>
            </div>
          </div>
          <div class="font-bold text-[15px] 3xl:text-lg mt-32">
            <p class="font-black text-xl" style="font-family: arial-black">CREDITS</p>
            <div class="w-[233px] 3xl:w-[288px] font-normal mt-12">
              <p>客戶 台中文化資產局<br />專案總監 PON<br />視覺設計 RINRAN<br />視覺設計 MACHI</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between text-white text-6xl 3xl:text-8xl mt-28 items-center" style="font-family: dgo">
        <NuxtLink class="pointer" href="/work" target="_top">
          <div class="flex gap-4 items-start stroke-white hover:stroke-[#D3E741] hover:text-[#D3E741]">
            <div class="w-[102px]">
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
          <div class="w-[102px]">
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
  <div class="hidden md:block xl:hidden">
    <div class="px-10 pt-16 pb-12" :style="{ backgroundImage: `url(${workBg})` }">
      <div class="bg-white rounded-t-md px-16 py-12 text-[#262723] h-fit">
        <div class="text-4xl font-black leading-[56px]" style="font-family: arial-black">
          <p>全國古蹟日</p>
          <p>活動視覺設計</p>
        </div>
        <div class="font-bold text-[15px] 3xl:text-lg mt-12">
          <p>| Project Description</p>
          <br />
          <div class="font-normal">
            <p>
              全國古蹟日為全台灣各縣市在每年9月都會共同響應的一個活動<br /><br />

              主要目的在提高民眾認識文化資產保存與文化認同等行為<br /><br />

              並舉辦各式講座、走讀、劇場表演、手作課程等多元方式吸引民眾<br /><br />

              使其達到寓教於樂的推廣方式
            </p>
          </div>
        </div>
        <div class="font-bold text-[15px] 3xl:text-lg mt-32">
          <p>| Visual Design</p>
          <br />
          <div class="font-normal">
            <p>
              我們參與了本次活動的整體視覺識別與設計。<br /><br />

              包括了海報、宣傳DM、活動贈品設計、展場設計、市集布置。<br /><br />

              主視覺顏色上採用了青藍色、黃色等較為明亮活潑的設計。<br /><br />

              並以蠟筆筆觸插畫吸引年輕客群參與活動，使"古蹟"這個較為有歷史痕跡，老舊的刻板印象。<br /><br />

              演變成活潑、討喜的形象，以提高更多年輕人的認同與參與感
            </p>
          </div>
        </div>
        <div class="flex 3xl:text-lg mt-32">
          <div class="font-bold text-[15px]">
            <p class="font-black text-xl" style="font-family: arial-black">CREDITS</p>
            <br />

            <div class="w-[233px] 3xl:w-[288px] font-normal">
              <p>客戶 BELLA UNO<br />專案總監 PON<br />視覺設計 RINRAN<br />視覺設計 MACHI</p>
            </div>
          </div>
        </div>

        <div class="justify-center text-xl 3xl:text-3xl mt-32" style="font-family: dgo">
          <p class="w-fit">BACK TO WORK</p>
        </div>
      </div>
      <div class="">
        <img src="/work-ancient.jpg" />
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

  <div class="md:hidden">
    <div class="px-8 pt-20 pb-5" :style="{ backgroundImage: `url(${workBg})` }">
      <div class="bg-white rounded-t-md px-7 pt-7 pb-5 text-[#262723] h-fit">
        <div class="text-xl font-black leading-[28px]" style="font-family: arial-black">
          <p>全國古蹟日</p>
          <p>活動視覺設計</p>
        </div>
        <div class="px-3 text-[13px]">
          <div class="font-bold mt-9">
            <p>| Project Description</p>
            <br />
            <div class="font-normal">
              <p>
                全國古蹟日為全台灣各縣市在每年9月都會共同響應的一個活動<br /><br />

                主要目的在提高民眾認識文化資產保存與文化認同等行為<br /><br />

                並舉辦各式講座、走讀、劇場表演、手作課程等多元方式吸引民眾<br /><br />

                使其達到寓教於樂的推廣方式
              </p>
            </div>
          </div>

          <div class="flex justify-center w-full">
            <div class="collapse">
              <input ref="pcMoreCheckBox" class="hidden" type="checkbox" />
              <div class="collapse-title text-xl font-medium flex justify-center items-center" @click="onPcAncientMoreClicked">
                <div id="pc-mia-more" class="w-[86px]">
                  <svg viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="85" height="23" rx="11.5" stroke="#262723" />
                    <path
                      d="M25.5678 16.3333V7.74349H28.1635L29.7221 13.6029L31.2631 7.74349H33.8646V16.3333H32.2533V9.57161L30.5482 16.3333H28.8783L27.1791 9.57161V16.3333H25.5678ZM36.7957 12.0911C36.7957 11.2161 36.9266 10.4818 37.1883 9.88802C37.3836 9.45052 37.6492 9.05794 37.9852 8.71029C38.325 8.36263 38.6961 8.10482 39.0985 7.93685C39.6336 7.71029 40.2508 7.597 40.95 7.597C42.2156 7.597 43.2274 7.98958 43.9852 8.77474C44.7469 9.55989 45.1278 10.6517 45.1278 12.0501C45.1278 13.4368 44.7508 14.5228 43.9969 15.3079C43.243 16.0892 42.2352 16.4798 40.9735 16.4798C39.6961 16.4798 38.6805 16.0911 37.9266 15.3138C37.1727 14.5326 36.7957 13.4583 36.7957 12.0911ZM38.5828 12.0326C38.5828 13.0052 38.8074 13.7435 39.2567 14.2474C39.7059 14.7474 40.2762 14.9974 40.9676 14.9974C41.659 14.9974 42.2254 14.7493 42.6668 14.2533C43.1121 13.7533 43.3348 13.0052 43.3348 12.0091C43.3348 11.0247 43.118 10.2904 42.6844 9.80599C42.2547 9.32161 41.6824 9.07943 40.9676 9.07943C40.2528 9.07943 39.6766 9.32552 39.2391 9.81771C38.8016 10.306 38.5828 11.0443 38.5828 12.0326ZM48.053 16.3333V7.74349H51.7034C52.6213 7.74349 53.2874 7.82161 53.7014 7.97786C54.1194 8.13021 54.4534 8.40364 54.7034 8.79818C54.9534 9.19271 55.0784 9.64388 55.0784 10.1517C55.0784 10.7962 54.8889 11.3294 54.51 11.7513C54.1311 12.1693 53.5647 12.4329 52.8108 12.5423C53.1858 12.7611 53.4944 13.0013 53.7366 13.263C53.9827 13.5247 54.3128 13.9896 54.7268 14.6576L55.7756 16.3333H53.7014L52.4475 14.4642C52.0022 13.7962 51.6975 13.3763 51.5335 13.2044C51.3694 13.0286 51.1956 12.9095 51.012 12.847C50.8284 12.7806 50.5374 12.7474 50.1389 12.7474H49.7874V16.3333H48.053ZM49.7874 11.3763H51.0706C51.9026 11.3763 52.4221 11.3411 52.6292 11.2708C52.8362 11.2005 52.9983 11.0794 53.1155 10.9076C53.2327 10.7357 53.2913 10.5208 53.2913 10.263C53.2913 9.97396 53.2131 9.74154 53.0569 9.56575C52.9045 9.38607 52.6878 9.27279 52.4065 9.22591C52.2659 9.20638 51.844 9.19661 51.1409 9.19661H49.7874V11.3763ZM58.279 16.3333V7.74349H64.6481V9.19661H60.0134V11.1009H64.3259V12.5482H60.0134V14.8861H64.8122V16.3333H58.279Z"
                      fill="#262723"
                    />
                  </svg>
                </div>
              </div>

              <div class="collapse-content">
                <div class="font-bold mt-9">
                  <p>| Visual Design</p>
                  <br />
                  <div class="font-normal">
                    <p>
                      我們參與了本次活動的整體視覺識別與設計。<br /><br />

                      包括了海報、宣傳DM、活動贈品設計、展場設計、市集布置。<br /><br />

                      主視覺顏色上採用了青藍色、黃色等較為明亮活潑的設計。<br /><br />

                      並以蠟筆筆觸插畫吸引年輕客群參與活動，使"古蹟"這個較為有歷史痕跡，老舊的刻板印象。<br /><br />

                      演變成活潑、討喜的形象，以提高更多年輕人的認同與參與感
                    </p>
                  </div>
                </div>
                <div class="font-bold text-[15px] mt-20">
                  <p class="font-black text-xl" style="font-family: arial-black">CREDITS</p>
                  <br />

                  <div class="w-[233px] 3xl:w-[288px] font-normal">
                    <p>客戶 BELLA UNO<br />專案總監 PON<br />視覺設計 RIARAN<br />視覺設計 MACHI</p>
                  </div>
                </div>
                <NuxtLink class="pointer" href="/work" target="_top">
                  <div class="flex w-full justify-center mt-16">
                    <p class="text-xl" style="font-family: dgo">BACK TO WORK</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <img src="/work-ancient.jpg" />
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
      <NuxtLink href="/work" target="_top">
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
</template>
