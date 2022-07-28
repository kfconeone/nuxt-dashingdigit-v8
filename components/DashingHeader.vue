<script setup lang="ts">
const isMenuOpen = ref(false);
function onClickToggle() {
  if (isMenuOpen.value) {
    console.log("close");
    menuService.closeMenu();
  } else {
    console.log("open");
    menuService.openMenu();
  }
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <div class="w-full flex justify-between px-10 fixed top-0 z-50" style="mix-blend-mode: difference">
    <p class="text-xl italic font-bold leading-6 tracking-[0.005em] mt-8 text-white" style="font-family: corbel-bold-italic">Dashing</p>
    <div class="text-white mt-8">
      <div @click="onClickToggle">X</div>
    </div>
  </div>
</template>
