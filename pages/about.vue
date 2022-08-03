<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
useHead({
  title: "About",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "關於達訊數位" }],
  script: [{ src: "https://unpkg.com/spacingjs", async: true }],
});

onMounted(() => {
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
});
</script>
<template>
  <div class="hidden 3xl:block">
    <div class="max-w-[1920px] mx-auto relative">
      <div class="w-full overflow-x-hidden">
        <div class="flex justify-center bg-gray-700 py-40 gap-20">
          <div>
            <p style="font-family: dgo" class="text-white text-8xl">
              As nimble<br />
              as the shark
            </p>
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

        <div class="trait h-screen w-fit flex text-[#6372C6] items-center px-40">
          <div class="flex gap-[500px]">
            <div>
              <p class="text-[80px] leading-[96px] mb-32 whitespace-nowrap" style="font-family: dgo">NEVER BE<br />THE SAME</p>
              <p class="text-xl mb-10 leading-[33px]">達訊團隊擁有反骨的個性<br />我們脱離羊群，尋找藍海，想著“如果<br />不一樣，是不是更好”<br /></p>
              <p class="text-xl leading-[33px]">創新做事也讓我們更有活力，思考如何<br />能讓顧客跳脱制約框架，達到耳目一新<br />的感官衝擊。</p>
            </div>
            <div>
              <p class="text-[80px] leading-[96px] mb-32" style="font-family: dgo">QUICK<br />TEST</p>
              <p class="text-xl leading-[33px]">持續的提出假設，然後透過快速的小型<br />測試來驗證，這樣的方式讓我們創造更<br />多可能性，這也意味天馬行空的想法成<br />為實際的可能也隨之增加。</p>
            </div>
            <div>
              <p class="text-[80px] leading-[96px] mb-32" style="font-family: dgo">HIGH<br />PERFORMANCE</p>
              <p class="text-xl leading-[33px]">我們專注於高效率的製作與高效能的產<br />出，通過將工作內容顆粒化，並解析出<br />各項工作流程，分類優先順序，來簡化<br />複雜的工作，這樣的方式可以更快速的<br />產出高質量的服務與產品。</p>
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

      <div class="trait h-screen w-fit flex text-[#6372C6] items-center px-40">
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
    <div>768</div>
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

<style>
body {
  font-family: arial-reg;
}
</style>
