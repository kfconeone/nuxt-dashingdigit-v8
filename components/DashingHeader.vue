<script setup lang="ts">
const isMenuOpen: any = inject("isMenuOpen");
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
// const fps = ref(0);

onMounted(() => {
  let requestTime;

  // function loop(time) {
  //   if (requestTime) {
  //     fps.value = Math.round(1000 / (performance.now() - requestTime));
  //   }

  //   requestTime = time;
  //   window.requestAnimationFrame((timeRes) => loop(timeRes));
  // }

  // window.requestAnimationFrame((timeRes) => loop(timeRes));
});
</script>
<template>
  <div class="w-full flex justify-between px-5 xl:px-20 fixed top-0 xl:top-10 z-50" style="mix-blend-mode: difference">
    <div class="h-fit">
      <NuxtLink to="/" target="_top">
        <p class="text-xl italic font-bold leading-6 tracking-[0.005em] text-white" style="font-family: corbel-bold-italic">Dashing</p>
      </NuxtLink>
    </div>
    <div class="w-16 h-10 flex justify-center items-center pointer-detected" @click="onClickToggle">
      <button class="w-6 h-4 relative text-white">
        <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{ 'rotate-45': isMenuOpen, ' -translate-y-1.5': !isMenuOpen }"></span>
        <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{ 'opacity-0': isMenuOpen }"></span>
        <span aria-hidden="true" class="block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out" :class="{ '-rotate-45': isMenuOpen, ' translate-y-1.5': !isMenuOpen }"></span>
      </button>
    </div>
  </div>
</template>
