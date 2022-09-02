<script setup lang="ts">
const isMenuOpen = inject("isMenuOpen");
function onClickToggle() {
  if (isMenuOpen.value) {
    //移除 body overflow:hidden
    document.body.classList.remove("disabled-scroll");
    menuService.closeMenu();
  } else {
    //加入 body overflow:hidden
    window.document.body.classList.add("disabled-scroll");
    menuService.openMenu();
  }
  isMenuOpen.value = !isMenuOpen.value;
}
const fps = ref(0);

onMounted(() => {
  let requestTime;

  function loop(time) {
    if (requestTime) {
      fps.value = Math.round(1000 / (performance.now() - requestTime));
    }

    requestTime = time;
    window.requestAnimationFrame((timeRes) => loop(timeRes));
  }

  window.requestAnimationFrame((timeRes) => loop(timeRes));
});
</script>
<template>
  <div class="w-full flex justify-between px-5 xl:px-20 fixed top-0 z-50" style="mix-blend-mode: difference">
    <NuxtLink to="/" target="_top">
      <p class="text-xl italic font-bold leading-6 tracking-[0.005em] mt-8 text-white" style="font-family: corbel-bold-italic">Dashing{{ fps }}</p>
    </NuxtLink>

    <!-- <div class="text-white mt-8">
      <div @click="onClickToggle">X</div>
    </div> -->

    <button class="w-10 h-10 relative text-white self-end" @click="onClickToggle">
      <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{ 'rotate-45': isMenuOpen, ' -translate-y-1.5': !isMenuOpen }"></span>
      <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{ 'opacity-0': isMenuOpen }"></span>
      <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{ '-rotate-45': isMenuOpen, ' translate-y-1.5': !isMenuOpen }"></span>
    </button>
  </div>
</template>
