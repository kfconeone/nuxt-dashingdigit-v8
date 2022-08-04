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
<style></style>
