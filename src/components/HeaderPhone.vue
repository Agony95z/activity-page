<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";
import Drawer from "./Drawer.vue";

const router = useRouter();

const isShowMenu = ref(false);
const handleLogin = () => {
  window.open('https://cae.hpccube.com/sso/login')
};
const handleLogo = () => {
  router.push('/home');
};
const handleOpenMenu = () => {
  isShowMenu.value = true;
};
</script>

<template>
  <div class="fixed z-10 bg-[#fff] h-[40px] w-full">
    <div class="flex h-[40px] items-center justify-between pl-2.5 pr-5">
      <img @click="handleLogo" class="h-[26px]" src="../assets/img/logo.png" alt="">
      <div class="flex">
        <img @click="handleLogin" class="" src="../assets/img/person_icon.svg" alt="">
        <img @click="handleOpenMenu" class="ml-5" src="../assets/img/menu_icon.svg" alt="">
      </div>
    </div>
    <Drawer v-model:visible="isShowMenu" />
  </div>
</template>

<style scoped lang="scss">

</style>
