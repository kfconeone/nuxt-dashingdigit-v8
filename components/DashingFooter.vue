<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
  },
});
</script>
<template>
  <div class="hidden 3xl:block relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-20 gap-40">
      <div class="pl-11 mt-20">
        <p class="font-black text-[40px] text-[#41443B]" style="font-family: arial-black">
          JUST CALL ME <br />
          WE’VE GOT YOUR BACK!
        </p>
        <div class="relative w-fit mt-16">
          <img class="absolute w-32 right-5 top-9" src="~assets/imgs/letsgtw.png" />
          <img class="w-96" src="~assets/imgs/nokia.png" />
        </div>
        <div class="flex gap-3 mt-44">
          <img class="w-8" alt="instagram icon" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-8" alt="facebook icon" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-8" alt="behance icon" src="~assets/imgs/social-media-icon.svg" />
        </div>
      </div>
      <div class="pl-14 pr-16 text-[#262723] mt-28 font-bold">
        <p class="text-xl">
          請填寫下列表單詢問案件<br />
          我們會以Email回覆或是電話聯絡
        </p>
        <div class="mt-36 text-2xl">
          <div class="flex gap-12">
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="公司名稱" />
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="EMAIL" />
          </div>
          <div class="flex gap-12 mt-16">
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡人(先生/小姐)" />
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡電話" />
          </div>
          <div class="mt-16">
            <input :style="`background-color:${props.color}`" class="py-1.5 w-full placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="專案說明(請用幾句話描述您的需求)" />
          </div>
          <div class="mt-32 flex justify-end w-full">
            <button class="border-[1px] border-[#262723] rounded-[35px] px-20 py-1 tracking-widest" type="button">送~出~</button>
          </div>
          <div class="mt-24">
            <p class="underline underline-offset-[7px] leading-[58px] font-normal text-[40px] text-[#41443B] tracking-tighter" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
          </div>
          <div class="mt-10 flex gap-8 text-[#41443B]">
            <p>04 2262 7773</p>
            <p>402台中市南區美村路二段186號3F-1</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden xl:block 3xl:hidden relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-20">
      <div class="pl-11 mt-20">
        <p class="font-black text-4xl text-[#41443B]" style="font-family: arial-black">
          JUST CALL ME <br />
          WE’VE GOT YOUR BACK!
        </p>
        <div class="relative w-fit mt-16">
          <img class="absolute w-32 right-5 top-9" src="~assets/imgs/letsgtw.png" />
          <img class="w-96" src="~assets/imgs/nokia.png" />
        </div>
        <div class="flex gap-3 mt-44">
          <img class="w-8" alt="instagram icon" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-8" alt="facebook icon" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-8" alt="behance icon" src="~assets/imgs/social-media-icon.svg" />
        </div>
      </div>
      <div class="pl-14 pr-16 text-[#262723] mt-28 font-bold">
        <p class="text-base">
          請填寫下列表單詢問案件<br />
          我們會以Email回覆或是電話聯絡
        </p>
        <div class="mt-36 text-xl">
          <div class="flex gap-12">
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="公司名稱" />
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="EMAIL" />
          </div>
          <div class="flex gap-12 mt-16">
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡人(先生/小姐)" />
            <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡電話" />
          </div>
          <div class="mt-16">
            <input :style="`background-color:${props.color}`" class="py-1.5 w-full placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="專案說明(請用幾句話描述您的需求)" />
          </div>
          <div class="mt-32 flex justify-end w-full">
            <button class="border-[1px] border-[#262723] rounded-[35px] px-20 py-1 tracking-widest" type="button">送~出~</button>
          </div>
          <div class="mt-24">
            <p class="underline underline-offset-[7px] leading-[46px] font-normal text-[32px] text-[#41443B] tracking-tighter" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
          </div>
          <div class="mt-10 flex gap-8 text-[#41443B]">
            <p>04 2262 7773</p>
            <p>402台中市南區美村路二段186號3F-1</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden md:block xl:hidden relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-20">
      <div>
        <div class="flex justify-center gap-20 mt-8">
          <p class="font-black text-[24px] text-[#41443B] whitespace-nowrap" style="font-family: arial-black">
            JUST CALL ME <br />
            WE’VE GOT YOUR BACK!
          </p>

          <p class="text-base">
            請填寫下列表單詢問案件<br />
            我們會以Email回覆或是電話聯絡
          </p>
        </div>

        <div class="mt-20 flex justify-center">
          <div class="relative w-full">
            <img class="absolute w-16 right-[35%] top-0" src="~assets/imgs/letsgtw.png" />
            <img class="w-44" src="~assets/imgs/nokia.png" />
          </div>
          <div class="text-xs">
            <div class="flex gap-12">
              <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="公司名稱" />
              <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="EMAIL" />
            </div>
            <div class="flex gap-12 mt-12">
              <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡人(先生/小姐)" />
              <input :style="`background-color:${props.color}`" class="py-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡電話" />
            </div>
            <div class="mt-12">
              <input :style="`background-color:${props.color}`" class="py-1.5 w-full placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="專案說明(請用幾句話描述您的需求)" />
            </div>
            <div class="mt-12 flex justify-end w-full">
              <button class="border-[1px] border-[#262723] rounded-[35px] px-20 py-1 tracking-widest" type="button">送~出~</button>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-end mt-24">
          <div class="flex gap-3">
            <img class="w-8" alt="instagram icon" src="~assets/imgs/social-media-icon.svg" />
            <img class="w-8" alt="facebook icon" src="~assets/imgs/social-media-icon.svg" />
            <img class="w-8" alt="behance icon" src="~assets/imgs/social-media-icon.svg" />
          </div>
          <div>
            <div class="">
              <p class="underline underline-offset-[7px] leading-[35px] font-normal text-[24px] text-[#41443B] tracking-tighter" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
            </div>
            <div class="mt-10 flex gap-8 text-[#41443B]">
              <p>04 2262 7773</p>
              <p>402台中市南區美村路二段186號3F-1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-20">
      <div class="py-5 z-10 relative pl-5">
        <div class="text-[18px] font-black" style="font-family: arial-black">
          <p>JUST CALL ME</p>
          <p>WE'VE GOT YOUR BACK!</p>
        </div>

        <p class="mt-4 text-xs">請填寫下列表單詢問案件<br />我們會以Email回覆或是電話聯絡</p>
        <div class="mt-12 text-xs">
          <input :style="`background-color:${props.color}`" class="w-48 py-1.5 placeholder-black border-b-black border-b-[1px]" type="text" placeholder="公司名稱" />
          <input :style="`background-color:${props.color}`" class="w-48 mt-5 py-1.5 placeholder-black border-b-black border-b-[1px]" type="text" placeholder="EMAIL" />
          <input :style="`background-color:${props.color}`" class="w-48 mt-5 py-1.5 placeholder-black border-b-black border-b-[1px]" type="text" placeholder="聯絡人(先生/小姐)" />
          <input :style="`background-color:${props.color}`" class="w-48 mt-5 py-1.5 placeholder-black border-b-black border-b-[1px]" type="text" placeholder="聯絡電話" />
          <input :style="`background-color:${props.color}`" class="w-60 mt-5 py-1.5 placeholder-black border-b-black border-b-[1px]" type="text" placeholder="專案說明 (請用幾句話描述您的需求)" />
          <button class="mt-8 border-[1px] border-[#262723] rounded-[35px] px-12 py-1 tracking-widest" type="button">送~出~</button>
        </div>

        <div class="mt-32 text-[#41443B]">
          <p class="text-[18px] underline underline-offset-[7px] leading-[27px]" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
          <p class="text-xs mt-6 leading-5">04 2262 7773<br />402台中市南區美村路二段186號3F-1</p>
        </div>

        <div class="flex gap-4 mt-12">
          <img class="w-6 h-6" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-6 h-6" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-6 h-6" src="~assets/imgs/social-media-icon.svg" />
          <img class="w-6 h-6" src="~assets/imgs/social-media-icon.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
