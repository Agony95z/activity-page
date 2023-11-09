<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const logoBtnArr = [
  {id: 1, text: 'OpenCFD'},
  {id: 2, text: 'CDEM'},
  {id: 3, text: 'CADO'},
  {id: 4, text: 'xScale'},
];
const handleBannerBtn = (idx) => {
  router.push(`/page2?idx=${idx}`)
};
const route = useRoute();
const Idx = route.query.idx;
const handleLogo = () => {
  router.push('/page1');
};
</script>

<template>
  <div class="logo_btn">
    <div class="logo_btn1 cursor-pointer" @click="handleLogo">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <div class="btn_wrapper flex">
      <div class="btn" @click="handleBannerBtn(index)" v-for="(item, index) in logoBtnArr" :class="{'btn_active': Number(Idx) === index}" :key="item.id">
        <div>{{ item.text }}</div>
        <div>+</div>
      </div>
    </div>
    <div class="login_wrapper pr-[60px] text-[#232323] text-xl font-medium cursor-pointer">登录</div>
  </div>
</template>

<style scoped lang="scss">
.logo_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 120px;
  .logo_btn1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    font-size: 45px;
    padding-left: 60px;
    font-family: yixinchongfenghao, sans-serif;
    color: #7E7E7E;
    img {
      height: 80px;
      width: 220px;
    }
  }
  .btn {
    flex: 1;
    width: 180px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,0.6);
    position: relative;
    cursor: pointer;
    &.btn_active {
      background: #5B95F8;
      color: #fff;
    }
    &:hover {
      background: #5B95F8;
      color: #fff;
    }
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 120px;
      background: #E0E0E0;
      top: 0;
      right: 0;
    }
    &:first-child::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 120px;
      background: #E0E0E0;
      top: 0;
      left: 0;
    }
  }
}
</style>
