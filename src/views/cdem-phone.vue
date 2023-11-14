<script setup lang="ts">
import HeaderPhone from "../components/HeaderPhone.vue";
// import TabsPhone from "../components/TabsPhone.vue";
import SwiperPhone from "../components/SwiperPhone.vue";
import SwiperPhoneAppCase from "../components/SwiperPhoneAppCase.vue";

defineProps({
  featureArr: Array,
  cfdArr: Array,
  swiperArr: Array,
  timeAwardsArr: Array,
})
</script>

<template>
  <div class="phone-container">
    <header-phone></header-phone>
    <div class="p-banner pt-[40px]">
      <div class="banner relative">
        <img src="../assets/img/banner_cdem.png" alt="">
        <img class="absolute w-[220px] top-1/2 left-1/2 -translate-y-[230%] -translate-x-1/2" src="../assets/img/banner_cdem_text.svg" alt="">
        <img class="w-[300px] h-[54px] mt-[3%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="../assets/img/cdem.svg" alt="">
      </div>
      <div class="banner-us relative h-[50px] flex flex-col justify-center items-center">
        <div class="absolute w-[100px] h-[100px] bg-[#333] bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
    <div class="software pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">CDEM简介</div>
      <div class="absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">About CDEM</div>
    </div>
    <div class="px-[15px] mt-5 w-full border-box text-[12px] text-[#000] leading-[22px]">
      该软件由中国科学院力学研究所历时25年自主研发，基于广义拉格朗日方程理论框架，将连续介质数值方法与非连续介质数值方法进行深度融合，在能量层面实现了有限元、离散元及无网格算法的统一，可实现静动载荷下地质体及人工材料渐进破坏过程的模拟。借助该软件，能模拟流-固-热多场耦合下固体材料的弹性、塑性、损伤、破裂、破碎、运动、碰撞、流动及堆积全过程。
    </div>

    <div class="px-[15px] w-full relative pt-[30px] pb-5 mt-5 bg-[#F7F7F8] z-[-5]">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">功能特色</div>
      <div class="absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-2]">FEATURES</div>
      <div class="mt-[15px] w-full">
        <div class="w-full flex justify-center">
          <div v-for="item in featureArr.slice(0, 2)" :key="item.id">
            <div class="mx-2.5 flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text }}</div>
            <div class="mx-2.5 px-2.5 border-box mt-2.5 flex flex-col justify-center items-center">
              <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center mt-5">
          <div v-for="item in featureArr.slice(2, 4)" :key="item.id">
            <div class="mx-2.5 flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text }}</div>
            <div class="mx-2.5 px-2.5 border-box mt-2.5 flex flex-col justify-center items-center">
              <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center mt-5">
          <div v-for="item in featureArr.slice(4, 6)" :key="item.id" :class="{'isPlace': item.id===6}">
            <div class="mx-2.5 flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text }}</div>
            <div class="mx-2.5 px-2.5 border-box mt-2.5 flex flex-col justify-center items-center">
              <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-[15px] w-full relative pt-[30px] pb-5 mt-5 bg-[#fff] z-[-5]">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">功能模块</div>
      <div class="w-full text-center absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-2]">FUNCTIONAL MODULE</div>
      <div v-for="item in cfdArr" class="mt-5">
        <div class="mx-auto flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text1 }}</div>
        <div class="text-[#232323] text-[12px] leading-[22px] mt-2.5">{{ item.text2 }}</div>
      </div>
    </div>

    <div class="pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">应用案例</div>
      <div class="absolute w-full text-center font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">APPLICATION CASES</div>
      <div class="mt-[1px]">
        <swiper-phone-app-case :arr="swiperArr"></swiper-phone-app-case>
      </div>
    </div>

    <div class="pt-[30px] relative bg-[#F7F7F8] z-[-5]">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">获奖情况</div>
      <div class="absolute w-full text-center font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-3]">HONOR & AWARDS</div>
    </div>
    <div class="pt-[30px] bg-[#F7F7F8]">
      <swiper-phone :arr="timeAwardsArr"></swiper-phone>
    </div>
  </div>
</template>

<style scoped lang="scss">
.phone-container {
  .isPlace {
    opacity: 0;
  }
  .feature_1 {
    background: linear-gradient(90deg, #3545BD 0%, #528EE8 100%);
    border-radius: 2px;
    //&:first-child {
    //  margin-right: 10px;
    //}
  }
}

</style>
