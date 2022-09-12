<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollToPlugin);
useHead({
  title: "Services",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "達訊數位提供的服務" }],
  script: [{ src: "https://unpkg.com/spacingjs", async: true }],
});
const scrollbar: any = inject("scrollbarRef");

const isLtsgtwSvgPcShow = ref(false);
const footerBtnSendPc = ref();
const footerLtsgtwSvgPc = ref();
const props = defineProps({
  color: {
    type: String,
  },
});

const formForXl = ref();
const formForMd = ref();
const formForSm = ref();

onMounted(() => {
  animateSwipeBtn();
  animateFooterLtsgtwSvgPc();
});
function sendEmail(form) {
  //Regular expression Testing
  var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  var phoneRule = /^[0-9]{10}$/g;
  console.log("from_phone", form.from_phone.value.search(phoneRule) != -1);

  if (form.from_com.value != "" && form.from_email.value.search(emailRule) != -1 && form.from_name.value != "" && form.from_phone.value != "" && form.message.value != "") {
    emailjs.sendForm("service_1eg4y0l", "template_939p7pi", form, "DNs0jDKtU8ghbZyMt").then(
      (result) => {
        console.log("");
        alert("寄送郵件成功");
      },
      (error) => {
        // console.log("FAILED...", error.text);
        alert("寄送郵件失敗");
      }
    );
  } else {
    alert("請填寫正確內容");
  }
}
function animateFooterLtsgtwSvgPc() {
  footerLtsgtwSvgPc.value.addEventListener("mouseleave", (e) => {
    gsap.to(".svg-ltsgtw-circle-tip", {
      ease: "Power2.InOut",
      "--bg": "white",
      duration: 0.4,
    });
    isLtsgtwSvgPcShow.value = false;
  });

  footerLtsgtwSvgPc.value.addEventListener("mouseover", (e) => {
    gsap.to(".svg-ltsgtw-circle-tip", {
      "--bg": "#6372c6",
      duration: 0.4,
      ease: "Power2.InOut",
    });
    isLtsgtwSvgPcShow.value = true;
  });
}
function animateSwipeBtn() {
  footerBtnSendPc.value.addEventListener("mouseleave", (e) => {
    gsap.to(".swipe-span", {
      scaleX: 0,
      duration: 0.4,
      ease: "Power2.InOut",
    });

    gsap.to(".footer-swipe-text", {
      duration: 0.4,
      ease: "Power2.InOut",
      color: "black",
    });

    gsap.set(".footerBtnSendPc", {
      borderColor: "#262723",
    });
  });

  footerBtnSendPc.value.addEventListener("mouseover", (e) => {
    gsap.to(".swipe-span", {
      scaleX: 1,
      duration: 0.4,
      ease: "Power2.InOut",
    });

    gsap.to(".footer-swipe-text", {
      duration: 0.4,
      ease: "Power2.InOut",
      color: "white",
    });

    gsap.set(".footerBtnSendPc", {
      borderColor: props.color,
    });
  });
}

function scrollToPageTop() {
  try {
    scrollbar.value.scrollTo(0, 0, 600);
  } catch (error) {
    console.log("error:", error);
  }
}
</script>

<template>
  <div class="hidden xl:block relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-20 3xl:gap-40 relative">
      <div class="pointer-detected w-fit absolute bottom-0" @click="scrollToPageTop">
        <div class="w-[150px] 3xl:w-[200px] relative flex justify-center items-center">
          <div class="absolute w-8 3xl:w-12">
            <svg viewBox="0 0 51 52" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.895 1.00044C28.4516 9.58336 36.8519 26.3109 50.0002 24.5578" stroke="black" stroke-width="2" stroke-linecap="round" />
              <path d="M26.0122 1.00044C23.4556 9.58336 15.0553 26.3109 1.90698 24.5578" stroke="black" stroke-width="2" stroke-linecap="round" />
              <path d="M25.8949 1V50.2384" stroke="black" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <svg viewBox="0 0 200 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C44.7715 0 0 44.7715 0 100H200C200 44.7715 155.228 0 100 0Z" :fill="props.color == '#FFFFFF' ? '#D3E741' : '#FFFFFF'" />
          </svg>
        </div>
      </div>

      <div class="pl-11 mt-20">
        <p class="font-black text-[38px] 3xl:text-[40px] text-[#41443B] whitespace-nowrap" style="font-family: arial-black">
          JUST CALL ME <br />
          WE’VE GOT YOUR BACK!
        </p>
        <div class="relative w-fit mt-16">
          <div ref="footerLtsgtwSvgPc" class="absolute w-32 right-5 top-9 flex justify-center items-center">
            <div v-show="isLtsgtwSvgPcShow" class="absolute w-full h-[75px]">
              <MailMarquee />
            </div>
            <svg viewBox="0 0 131 139" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-outside-1_301_761" maskUnits="userSpaceOnUse" x="0" y="0" width="131" height="133" fill="black">
                <rect fill="white" width="131" height="133" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M65.5 128C100.018 128 128 100.018 128 65.5C128 30.9822 100.018 3 65.5 3C30.9822 3 3 30.9822 3 65.5C3 85.1632 12.0803 102.705 26.2765 114.162L14.4849 127.729L38.7341 121.995C46.8474 125.846 55.9221 128 65.5 128Z" />
              </mask>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M65.5 128C100.018 128 128 100.018 128 65.5C128 30.9822 100.018 3 65.5 3C30.9822 3 3 30.9822 3 65.5C3 85.1632 12.0803 102.705 26.2765 114.162L14.4849 127.729L38.7341 121.995C46.8474 125.846 55.9221 128 65.5 128Z" fill="#6372C6" />
              <path
                d="M26.2765 114.162L28.5408 116.13L30.5819 113.782L28.1606 111.828L26.2765 114.162ZM14.4849 127.729L12.2206 125.761L6.10931 132.793L15.1753 130.649L14.4849 127.729ZM38.7341 121.995L40.0204 119.285L39.0688 118.833L38.0437 119.075L38.7341 121.995ZM125 65.5C125 98.3609 98.3609 125 65.5 125V131C101.675 131 131 101.675 131 65.5H125ZM65.5 6C98.3609 6 125 32.6391 125 65.5H131C131 29.3253 101.675 0 65.5 0V6ZM6 65.5C6 32.6391 32.6391 6 65.5 6V0C29.3253 0 0 29.3253 0 65.5H6ZM28.1606 111.828C14.6398 100.916 6 84.218 6 65.5H0C0 86.1083 9.52087 104.495 24.3924 116.497L28.1606 111.828ZM16.7492 129.697L28.5408 116.13L24.0122 112.194L12.2206 125.761L16.7492 129.697ZM38.0437 119.075L13.7945 124.81L15.1753 130.649L39.4245 124.914L38.0437 119.075ZM65.5 125C56.3764 125 47.7402 122.949 40.0204 119.285L37.4478 124.705C45.9546 128.743 55.4678 131 65.5 131V125Z"
                fill="#6372C6"
                mask="url(#path-1-outside-1_301_761)"
              />
              <circle class="svg-ltsgtw-circle-tip" cx="65.5" cy="65.5" r="62.5" />
              <path class="svg-ltsgtw-circle-tip" d="M13.3812 128.352L26.5214 113.233L41.0586 121.807L13.3812 128.352Z" />
              <path d="M23.0444 77.7711L11.9636 79.9998L11.5092 77.7446L20.7062 75.8972L19.5785 70.2889L21.4623 69.9108L23.0444 77.7711Z" fill="#6372C6" />
              <path d="M21.3925 68.8299L10 68.6209L10.1559 60.1736L12.0828 60.2101L11.9701 66.359L14.4973 66.4055L14.6034 60.6843L16.5237 60.7208L16.4176 66.4419L19.5186 66.4983L19.638 60.1338L21.5583 60.1703L21.3925 68.8299Z" fill="#6372C6" />
              <path d="M22.4175 56.3058L13.2106 54.0936L12.4213 57.3804L10.5474 56.9293L12.6634 48.1238L14.5373 48.5748L13.7479 51.8549L22.9548 54.0671L22.4175 56.3058Z" fill="#6372C6" />
              <path
                d="M13.7777 45.6073L14.6035 43.5842L16.0495 44.1746C16.6333 44.4134 17.0744 44.6522 17.3729 44.891C17.6714 45.1298 17.8969 45.4448 18.0495 45.8362C18.202 46.2276 18.2683 46.6687 18.2451 47.1628L17.2502 47.2192C17.2833 46.7582 17.217 46.3901 17.0512 46.1214C16.8853 45.8528 16.6034 45.6306 16.1988 45.4548L15.7975 46.4332L13.7777 45.6073Z"
                fill="#6372C6"
              />
              <path
                d="M22.2845 44.6519L23.2695 42.6288C23.9793 42.9074 24.5929 42.9638 25.1102 42.7946C25.6276 42.6288 26.0654 42.2474 26.4336 41.6504C26.8216 41.0203 26.9808 40.4598 26.9078 39.9755C26.8382 39.4913 26.6226 39.1397 26.2644 38.9209C26.0356 38.7782 25.7968 38.7285 25.5547 38.7617C25.3126 38.7981 25.0273 38.9474 24.7023 39.2094C24.4834 39.3918 24.0191 39.8263 23.316 40.5194C22.4105 41.4116 21.6378 41.9522 20.9977 42.1413C20.0956 42.4099 19.2631 42.3071 18.4936 41.8361C17.9995 41.5343 17.6214 41.1098 17.3627 40.5626C17.104 40.0186 17.0244 39.4117 17.1239 38.7451C17.2234 38.0784 17.502 37.372 17.9597 36.6258C18.7059 35.4053 19.5384 34.6524 20.4504 34.3639C21.3625 34.0753 22.2746 34.1914 23.1866 34.7055L22.0689 36.7186C21.5184 36.4964 21.0474 36.4566 20.6594 36.5992C20.2713 36.7419 19.9065 37.0868 19.5682 37.6406C19.22 38.2111 19.0608 38.7285 19.0973 39.1928C19.1205 39.4913 19.2565 39.7202 19.5085 39.8727C19.7374 40.012 19.9927 40.0385 20.278 39.9424C20.6362 39.823 21.2232 39.3553 22.0324 38.5394C22.8417 37.7236 23.5083 37.1597 24.029 36.8513C24.5497 36.5429 25.1003 36.387 25.6741 36.3837C26.2511 36.3803 26.8448 36.5694 27.4584 36.9442C28.0156 37.2858 28.4401 37.76 28.7386 38.367C29.0338 38.9739 29.1266 39.6339 29.0172 40.3437C28.9077 41.0534 28.5927 41.8328 28.0753 42.6752C27.3224 43.9024 26.4601 44.6718 25.4883 44.9836C24.5199 45.3053 23.4486 45.1925 22.2845 44.6519Z"
                fill="#6372C6"
              />
              <path
                d="M35.3423 27.9163L34.135 26.4239L37.9889 23.2996L40.8445 26.8285C40.7649 27.4951 40.4797 28.2513 39.9921 29.1037C39.5046 29.956 38.8977 30.6757 38.168 31.2661C37.2427 32.0156 36.2775 32.4766 35.2726 32.6458C34.271 32.8149 33.3026 32.679 32.3706 32.2379C31.4386 31.7967 30.6294 31.15 29.9395 30.301C29.1933 29.3789 28.7223 28.4039 28.5267 27.3724C28.331 26.3409 28.4537 25.336 28.8882 24.3477C29.2165 23.5948 29.8069 22.8751 30.6493 22.1886C31.7471 21.2997 32.7951 20.8321 33.7868 20.7923C34.7784 20.7525 35.6938 21.0676 36.5296 21.7375L35.0239 23.5086C34.5463 23.1736 34.0355 23.021 33.485 23.0476C32.9344 23.0741 32.4038 23.2963 31.8897 23.7142C31.1103 24.3477 30.6891 25.0972 30.6294 25.9662C30.5697 26.8351 30.9345 27.7571 31.7239 28.7322C32.5762 29.7836 33.4485 30.3806 34.3407 30.5298C35.2328 30.6757 36.0587 30.4436 36.8148 29.83C37.1896 29.5249 37.5047 29.1501 37.7634 28.6957C38.0221 28.2447 38.2012 27.8036 38.3007 27.3757L37.3886 26.2514L35.3423 27.9163Z"
                fill="#6372C6"
              />
              <path d="M43.1728 27.3693L38.3869 17.0281L46.0549 13.4794L46.8641 15.2305L41.2823 17.8108L42.3436 20.1026L47.5374 17.7014L48.3433 19.4426L43.1496 21.8438L44.453 24.6596L50.2305 21.9864L51.0364 23.7276L43.1728 27.3693Z" fill="#6372C6" />
              <path d="M54.8839 22.8316L52.8674 13.5817L49.5641 14.3014L49.1528 12.4175L58.0015 10.4906L58.4127 12.3744L55.116 13.0941L57.1325 22.3441L54.8839 22.8316Z" fill="#6372C6" />
              <path d="M68.1138 21.6479L68.9396 12.2155L65.5699 11.9203L65.7391 10L74.7602 10.7893L74.5911 12.7097L71.2314 12.4145L70.4055 21.8469L68.1138 21.6479Z" fill="#6372C6" />
              <path
                d="M75.692 16.7166C76.0535 15.6122 76.5245 14.7432 77.1016 14.1031C77.5294 13.6322 78.0269 13.2474 78.5973 12.9523C79.1678 12.6538 79.7416 12.4813 80.3186 12.4382C81.0881 12.3752 81.9106 12.4879 82.7928 12.7798C84.3881 13.3038 85.5025 14.2192 86.1326 15.5226C86.7661 16.826 86.7893 18.3616 86.2122 20.1227C85.6351 21.8706 84.7131 23.0811 83.4362 23.7544C82.1594 24.4277 80.7299 24.504 79.1379 23.9799C77.5294 23.4493 76.4117 22.5372 75.7849 21.2437C75.1547 19.947 75.1249 18.4412 75.692 16.7166ZM77.9672 17.3832C77.5659 18.6104 77.5427 19.6319 77.8975 20.4511C78.2557 21.2703 78.8693 21.8241 79.7416 22.1094C80.6138 22.3946 81.4297 22.3183 82.1958 21.8739C82.962 21.4295 83.549 20.5804 83.9636 19.3268C84.3715 18.0863 84.4047 17.0715 84.0598 16.2821C83.7182 15.4928 83.0946 14.9488 82.1925 14.6537C81.2904 14.3585 80.4646 14.4281 79.7084 14.8626C78.9622 15.2971 78.3784 16.1395 77.9672 17.3832Z"
                fill="#6372C6"
              />
              <path d="M90.3313 29.0273L95.6776 18.6033L97.4653 20.1355L93.6777 27.1966L100.351 22.6064L102.43 24.3874L98.7687 31.7337L105.276 26.8251L107.034 28.3308L97.5184 35.1862L95.6644 33.5976L99.4818 25.651L92.2218 30.6491L90.3313 29.0273Z" fill="#6372C6" />
              <path
                d="M104.151 34.1381C105.126 33.5113 106.042 33.1299 106.891 32.9972C107.517 32.901 108.148 32.9176 108.778 33.0469C109.408 33.173 109.962 33.4018 110.436 33.7335C111.073 34.168 111.64 34.7749 112.141 35.5576C113.046 36.9705 113.335 38.3833 113.003 39.7929C112.671 41.2024 111.723 42.4097 110.164 43.4113C108.615 44.4063 107.133 44.7612 105.72 44.4826C104.304 44.2006 103.146 43.3582 102.241 41.9487C101.325 40.5225 101.034 39.1097 101.362 37.7101C101.697 36.3072 102.625 35.1198 104.151 34.1381ZM105.498 36.0916C104.413 36.7881 103.75 37.5675 103.511 38.4298C103.272 39.2921 103.402 40.108 103.896 40.8774C104.39 41.6502 105.076 42.1046 105.949 42.2439C106.821 42.3832 107.816 42.0946 108.927 41.3815C110.025 40.6751 110.691 39.909 110.924 39.0798C111.156 38.2507 111.013 37.4381 110.502 36.6388C109.992 35.8395 109.302 35.3719 108.443 35.2359C107.584 35.0999 106.602 35.3851 105.498 36.0916Z"
                fill="#6372C6"
              />
              <path
                d="M105.767 47.5737L116.609 44.0647L118.101 48.6714C118.476 49.8289 118.652 50.7045 118.625 51.2916C118.599 51.8786 118.39 52.4126 117.995 52.8902C117.601 53.3677 117.08 53.7093 116.44 53.915C115.627 54.177 114.878 54.1571 114.191 53.8486C113.505 53.5435 112.941 52.9366 112.493 52.0278C112.37 52.5917 112.195 53.0792 111.962 53.4938C111.734 53.9083 111.279 54.5153 110.606 55.3113L108.921 57.3211L108.072 54.7043L109.919 52.3562C110.579 51.5204 110.987 50.9632 111.14 50.6879C111.293 50.4127 111.372 50.1407 111.379 49.8853C111.385 49.6266 111.306 49.2452 111.143 48.7444L111.001 48.3L106.473 49.7659L105.767 47.5737ZM112.732 47.7395L113.256 49.358C113.598 50.4093 113.853 51.0494 114.025 51.2816C114.198 51.5138 114.417 51.6696 114.682 51.7459C114.947 51.8222 115.243 51.8089 115.568 51.7028C115.932 51.5834 116.194 51.391 116.357 51.1257C116.519 50.8571 116.569 50.5387 116.516 50.1639C116.483 49.9782 116.324 49.4409 116.035 48.5554L115.481 46.8473L112.732 47.7395Z"
                fill="#6372C6"
              />
              <path d="M108.911 57.9945L120.28 57.2317L120.432 59.5268L115.385 59.8651L120.744 64.1634L120.95 67.2511L116.234 63.2679L109.594 68.2494L109.395 65.2777L114.522 61.792L112.496 60.0574L109.06 60.2896L108.911 57.9945Z" fill="#6372C6" />
              <path
                d="M108.918 71.5104L111.074 71.8554L110.729 74.0111L108.573 73.6662L108.918 71.5104ZM111.505 73.9349L111.82 71.9781C112.102 72.0179 112.274 72.0444 112.334 72.0544C112.967 72.1572 113.475 72.3462 113.85 72.6215C114.224 72.8968 114.619 73.3909 115.03 74.1007C115.442 74.8138 115.717 75.2416 115.853 75.3908C116.072 75.6197 116.334 75.759 116.636 75.8087C117.057 75.8751 117.441 75.7656 117.796 75.4804C118.151 75.1918 118.373 74.7673 118.463 74.1969C118.549 73.6496 118.47 73.1654 118.214 72.7475C117.962 72.3296 117.528 71.998 116.907 71.7592L117.471 69.819C118.377 70.0213 119.093 70.5354 119.617 71.3645C120.141 72.1903 120.307 73.1919 120.118 74.3693C119.919 75.6064 119.438 76.5417 118.672 77.1685C117.906 77.7954 117.093 78.0408 116.234 77.9015C115.76 77.8252 115.329 77.6196 114.947 77.2813C114.566 76.943 114.078 76.2764 113.488 75.2781C113.183 74.7607 112.924 74.429 112.712 74.2831C112.503 74.1339 112.102 74.0178 111.505 73.9349Z"
                fill="#6372C6"
              />
            </svg>
          </div>
          <img class="w-96" src="~assets/imgs/ufo.gif" />
        </div>
        <div class="flex gap-3 mt-[150px] 3xl:mt-44">
          <NuxtLink href="https://www.behance.net/dashing" target="_blank">
            <img class="w-8" alt="instagram icon" src="~assets/imgs/icon-behance.png" />
          </NuxtLink>
          <NuxtLink href="https://www.facebook.com/dashingdigitTW" target="_blank">
            <img class="w-8" alt="facebook icon" src="~assets/imgs/icon-facebook.png" />
          </NuxtLink>
          <NuxtLink href="https://www.instagram.com/dashing_digit/?igshid=YmMyMTA2M2Y%3D" target="_blank">
            <img class="w-8" alt="behance icon" src="~assets/imgs/icon-instagram.png" />
          </NuxtLink>
        </div>
      </div>

      <div class="pl-14 pr-16 text-[#262723] mt-[137px] font-bold">
        <p class="text-base 3xl:text-xl">
          請填寫下列表單詢問案件<br />
          我們會以Email回覆或是電話聯絡
        </p>

        <div class="mt-36 text-xl 3xl:text-2xl text-[#262723]">
          <form ref="formForXl" @submit.prevent="sendEmail(formForXl)">
            <div class="flex gap-12">
              <input name="from_com" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="公司名稱" />
              <input name="from_email" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="EMAIL" />
            </div>
            <div class="flex gap-12 mt-16">
              <input name="from_name" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡人(先生/小姐)" />
              <input name="from_phone" :style="`background-color:${props.color}`" class="w-full p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" maxlength="10" size="10" placeholder="聯絡電話" />
            </div>
            <div class="mt-16">
              <input name="message" :style="`background-color:${props.color}`" class="p-1.5 w-full placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="專案說明(請用幾句話描述您的需求)" />
            </div>
            <div class="mt-32 flex justify-end w-full">
              <button type="submit" value="Send" ref="footerBtnSendPc" class="text-black footerBtnSendPc relative overflow-hidden border-[1px] border-[#262723] rounded-[35px] px-20 py-1 tracking-widest w-fit h-fit">
                <div class="relative z-10 flex items-center gap-2.5">
                  <p class="footer-swipe-text text-base 3xl:text-xl">送~出~</p>
                </div>
                <span style="background: linear-gradient(90deg, #6372c6 0%, #ffffff 100%)" class="swipe-span w-[110%] h-[110%] absolute scale-x-0 top-0 left-0 origin-left"></span>
              </button>
            </div>
          </form>
          <div class="mt-24 flex justify-end w-full">
            <p class="underline underline-offset-[7px] leading-[58px] font-normal text-[32px] 3xl:text-[40px] text-[#41443B] tracking-tighter" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
          </div>
          <div class="mt-10 flex gap-8 text-[#41443B] self-end justify-end">
            <p>04 2262 7773</p>
            <p>402台中市南區美村路二段186號3F-1</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden md:block xl:hidden relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-20">
      <div class="w-fit absolute bottom-0" @click="scrollToPageTop">
        <div class="w-[150px] relative flex justify-center items-center">
          <div class="absolute w-8 3xl:w-12">
            <svg viewBox="0 0 51 52" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.895 1.00044C28.4516 9.58336 36.8519 26.3109 50.0002 24.5578" stroke="black" stroke-width="2" stroke-linecap="round" />
              <path d="M26.0122 1.00044C23.4556 9.58336 15.0553 26.3109 1.90698 24.5578" stroke="black" stroke-width="2" stroke-linecap="round" />
              <path d="M25.8949 1V50.2384" stroke="black" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <svg viewBox="0 0 200 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C44.7715 0 0 44.7715 0 100H200C200 44.7715 155.228 0 100 0Z" :fill="props.color == '#FFFFFF' ? '#D3E741' : '#FFFFFF'" />
          </svg>
        </div>
      </div>
      <div>
        <div class="flex justify-center gap-20 mt-8 items-end">
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
            <img class="w-44" src="~assets/imgs/ufo.gif" />
          </div>
          <form ref="formForMd" @submit.prevent="sendEmail(formForMd)">
            <div class="text-xs">
              <div class="flex gap-12">
                <input name="from_com" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="公司名稱" />
                <input name="from_email" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="EMAIL" />
              </div>
              <div class="flex gap-12 mt-12">
                <input name="from_name" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="聯絡人(先生/小姐)" />
                <input name="from_phone" :style="`background-color:${props.color}`" class="p-1.5 placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" maxlength="10" size="10" placeholder="聯絡電話" />
              </div>
              <div class="mt-12">
                <input name="message" :style="`background-color:${props.color}`" class="p-1.5 w-full placeholder-[#262723] border-b-[#262723] border-b-[0.5px]" type="text" placeholder="專案說明(請用幾句話描述您的需求)" />
              </div>
              <div class="mt-12 flex justify-end w-full">
                <button type="submit" value="Send" class="text-black border-[1px] border-[#262723] rounded-[35px] px-20 py-1 tracking-widest">送~出~</button>
              </div>
            </div>
          </form>
        </div>

        <div class="flex justify-between items-end mt-24">
          <div class="flex gap-3">
            <NuxtLink href="https://www.behance.net/dashing" target="_blank">
              <img class="w-8" alt="instagram icon" src="~assets/imgs/icon-behance.png" />
            </NuxtLink>
            <NuxtLink href="https://www.facebook.com/dashingdigitTW" target="_blank">
              <img class="w-8" alt="facebook icon" src="~assets/imgs/icon-facebook.png" />
            </NuxtLink>
            <NuxtLink href="https://www.instagram.com/dashing_digit/?igshid=YmMyMTA2M2Y%3D" target="_blank">
              <img class="w-8" alt="behance icon" src="~assets/imgs/icon-instagram.png" />
            </NuxtLink>
          </div>
          <div>
            <div class="flex justify-end">
              <p class="underline underline-offset-[7px] leading-[35px] font-normal text-[24px] text-[#41443B] tracking-tighter" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
            </div>
            <div class="mt-10 flex gap-8 text-xs text-[#41443B]">
              <p>04 2262 7773</p>
              <p>402台中市南區美村路二段186號3F-1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden relative z-10">
    <div :style="`background-color:${props.color}`" class="w-full flex justify-center pb-14 relative">
      <div class="w-fit absolute right-0 bottom-0" @click="scrollToPageTop">
        <div class="w-[75px] relative flex justify-center items-center">
          <div class="absolute w-6 bottom-[25%] right-[25%]">
            <svg width="100%" height="100%" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2956 1.00021C14.6061 5.39961 18.9119 13.9738 25.6514 13.0752" stroke="black" stroke-width="2" stroke-linecap="round" />
              <path d="M13.3557 1.00021C12.0453 5.39961 7.7395 13.9738 1 13.0752" stroke="black" stroke-width="2" stroke-linecap="round" />
              <path d="M13.2954 1V26.2384" stroke="black" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <svg viewBox="0 0 75 75" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75 0C33.5786 0 0 33.5786 0 75H75V0Z" :fill="props.color == '#FFFFFF' ? '#D3E741' : '#FFFFFF'" />
          </svg>
        </div>
      </div>

      <div class="py-5 z-10 pl-5 relative w-full">
        <div class="absolute w-32 right-0 top-28">
          <img src="~assets/imgs/ufo.gif" />
        </div>

        <div class="text-[18px] font-black" style="font-family: arial-black">
          <p>JUST CALL ME</p>
          <p>WE'VE GOT YOUR BACK!</p>
        </div>

        <p class="mt-4 text-xs">請填寫下列表單詢問案件<br />我們會以Email回覆或是電話聯絡</p>

        <form ref="formForSm" @submit.prevent="sendEmail(formForSm)">
          <div class="mt-12 text-xs">
            <input name="from_com" :style="`background-color:${props.color}`" class="w-32 p-1.5 placeholder-black border-b-black border-b-[1px] rounded-none" type="text" placeholder="公司名稱" />
            <br />
            <input name="from_email" :style="`background-color:${props.color}`" class="w-32 mt-5 p-1.5 placeholder-black border-b-black border-b-[1px] rounded-none" type="text" placeholder="EMAIL" />
            <br />
            <input name="from_name" :style="`background-color:${props.color}`" class="w-32 mt-5 p-1.5 placeholder-black border-b-black border-b-[1px] rounded-none" type="text" placeholder="聯絡人(先生/小姐)" />
            <br />
            <input name="from_phone" :style="`background-color:${props.color}`" class="w-32 mt-5 p-1.5 placeholder-black border-b-black border-b-[1px] rounded-none" type="text" maxlength="10" size="10" placeholder="聯絡電話" />
            <br />
            <input name="message" :style="`background-color:${props.color}`" class="w-52 mt-5 p-1.5 placeholder-black border-b-black border-b-[1px] rounded-none" type="text" placeholder="專案說明 (請用幾句話描述您的需求)" />
            <br />
            <button type="submit" value="Send" class="text-black mt-8 border-[1px] border-[#262723] rounded-[35px] px-12 py-1 tracking-widest group"><p class="group-hover:scale-[1.2] transition-all ease-[cubic-bezier(.68,-.55,.265,1.55)] duration-[500ms]">送~出~</p></button>
          </div>
        </form>

        <div class="mt-32 text-[#41443B]">
          <p class="text-[18px] underline underline-offset-[7px] leading-[27px]" style="font-family: dgo">SERVICE@<br />DASHINGDIGIT.COM</p>
          <p class="text-xs mt-6 leading-5">04 2262 7773<br />402台中市南區美村路二段186號3F-1</p>
        </div>

        <div class="flex gap-4 mt-12">
          <NuxtLink href="https://www.behance.net/dashing" target="_blank">
            <img class="w-8" alt="instagram icon" src="~assets/imgs/icon-behance.png" />
          </NuxtLink>
          <NuxtLink href="https://www.facebook.com/dashingdigitTW" target="_blank">
            <img class="w-8" alt="facebook icon" src="~assets/imgs/icon-facebook.png" />
          </NuxtLink>
          <NuxtLink href="https://www.instagram.com/dashing_digit/?igshid=YmMyMTA2M2Y%3D" target="_blank">
            <img class="w-8" alt="behance icon" src="~assets/imgs/icon-instagram.png" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.svg-ltsgtw-circle-tip {
  --bg: white;
  fill: var(--bg);
}
</style>
