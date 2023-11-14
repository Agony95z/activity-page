<script setup lang="ts">
import HeaderPhone from "../components/HeaderPhone.vue";
import TabsPhone from "../components/TabsPhone.vue";
import SwiperPhoneHome from "../components/SwiperPhoneHome.vue";
const featureArr = [
  {id:1, text: '先进内核'},
  {id:2, text: '海量算力'},
  {id:3, text: '高效并行'},
  {id:4, text: '多场耦合'},
  {id:5, text: '即开即用'},
];
const softwareArr = [
  {id: 1, text: '3大领域核心求解器'},
  {id: 2, text: '1款多物理场通用仿真云平台'},
  {id: 3, text: '≥12个典型场景应用APP'},
  {id: 4, text: '≥1000个中间层接口脚本'},
];
</script>

<template>
  <div class="phone-container">
    <header-phone></header-phone>
    <div class="p-banner pt-[40px]">
      <div class="banner relative">
        <img src="../assets/img/p_banner.svg" alt="">
        <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="../assets/img/p_banner_text.svg" alt="">
      </div>
      <div class="banner-us h-[75px] flex flex-col justify-center items-center">
        <div class="text-white font-semibold text-[14px]">选择我们的理由 WHY CHOOSE US</div>
        <div class="flex text-white mt-2.5">
          <p class="px-2 text-[12px]" v-for="item in featureArr" :key="item.id">{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="software mt-[30px]">
      <div class="text-[20px] mb-[25px] w-full text-center font-semibold text-[#333]">软件中心</div>
    </div>
    <div class="px-[15px] w-full border-box">
      <div class="flex justify-between">
        <p class="soft-text flex-1 h-[35px] leading-[35px] text-center text-[12px] text-white font-medium" v-for="item in softwareArr.slice(0, 2)" :key="item.id">{{ item.text }}</p>
      </div>
    </div>
    <div class="px-[15px] w-full border-box mt-2.5">
      <div class="flex justify-between">
        <p class="soft-text flex-1 h-[35px] leading-[35px] text-center text-[12px] text-white font-medium" v-for="item in softwareArr.slice(2, 4)" :key="item.id">{{ item.text }}</p>
      </div>
    </div>

    <div class="my-[40px] flex justify-center items-center px-[15px] border-box">
      <img src="../assets/img/p_soft.png" alt="">
    </div>

    <div class="tabs px-[15px] border-box flex justify-center w-full">
      <tabs-phone></tabs-phone>
    </div>

    <div class="awards bg-[#F7F7F8] px-[8px] pt-[30px] pb-5 border-box">
      <div class="text-[20px] text-[#333] font-semibold text-center mb-[20px]">奖励荣誉</div>
      <div class="text-[14px] font-medium text-center text-[#232323] mb-2.5">中国空气动力学会科学技术一等奖</div>

      <swiper-phone-home></swiper-phone-home>
    </div>
  </div>
</template>

<style scoped lang="scss">
.phone-container {
  .banner-us {
    background: #333;
  }
  .soft-text {
    background: linear-gradient(90deg, #3545BD 0%, #528EE8 100%);
    border-radius: 2px;
    &:first-child {
      margin-right: 10px;
    }
  }
}

</style>
