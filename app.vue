<script setup lang="ts">
const isMenuOpen = ref(false);
provide("isMenuOpen", isMenuOpen);

onMounted(() => {});
</script>

<template>
  <div class="relative">
    <DashingHeader />
    <DashingMenu />
    <router-view></router-view>
  </div>
</template>
<style>
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none; /* IE and Edge */
scrollbar-width: none; /* Firefox */
</style>
