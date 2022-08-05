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
</script>
<template>
  <div class="w-full flex justify-between px-20 fixed top-0 z-50" style="mix-blend-mode: difference">
    <p class="text-xl italic font-bold leading-6 tracking-[0.005em] mt-8 text-white" style="font-family: corbel-bold-italic">Dashing</p>
    <div class="text-white mt-8">
      <div @click="onClickToggle">X</div>
    </div>
  </div>
</template>
