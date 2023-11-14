<script setup lang="ts">
import HeaderPhone from "../components/HeaderPhone.vue";
import TabsPhone from "../components/TabsPhone.vue";
import SwiperPhone from "../components/SwiperPhone.vue";
import SwiperPhoneAppCase from "../components/SwiperPhoneAppCase.vue";

defineProps({
  featureArr: Array,
  swiperArr: Array,
  timeAwardsArr: Array,
})
</script>

<template>
  <div class="phone-container">
    <header-phone></header-phone>
    <div class="p-banner pt-[40px]">
      <div class="banner relative">
        <img src="../assets/img/banner_2.png" alt="">
        <img class="absolute w-[220px] top-1/2 left-1/2 -translate-y-[220%] -translate-x-1/2" src="../assets/img/banner_2_text.svg" alt="">
        <img class="w-[300px] h-[54px] mt-[5%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="../assets/img/faceid.svg" alt="">
      </div>
      <div class="banner-us relative h-[50px] flex flex-col justify-center items-center">
        <div class="absolute w-[100px] h-[100px] bg-[#333] bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
    <div class="software pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">OpenCFD简介</div>
      <div class="absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">About OpenCFD</div>
    </div>
    <div class="px-[15px] mt-5 w-full border-box text-[12px] text-[#000] leading-[22px]">
      OpenCFD软件是中国科学院力学研究所李新亮研究员课题组开发的一套高精度计算流体力学软件。该软件集成了课题组自行开发的系列高精度差分格式及当前流行的多种高精度差分格式，其最高计算精度最高可达7阶，主要用于湍流及燃烧直接数值模拟、大涡模拟等高分辨率模拟。此外，该软件具有非常强的并行性能，可支持上百亿网格，数十万CPU核心以及数万块GPU卡超大规模异构并行。
    </div>

    <div class="px-[15px] w-full relative pt-[30px] pb-5 mt-5 bg-[#F7F7F8] z-[-5]">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">功能特色</div>
      <div class="absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-2]">FEATURES</div>
      <div class="mt-[15px] w-full">
        <div class="w-full mt-5" v-for="item in featureArr" :key="item.id">
          <div class="m-auto flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text }}</div>
          <div class="mx-auto mt-2.5 flex flex-col justify-center items-center">
            <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.content }}</div>
            <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.content2 }}</div>
            <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.content3 }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">应用案例</div>
      <div class="absolute w-full text-center font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">FUNCTIONAL MODULE</div>
      <div class="mt-[1px]">
        <swiper-phone-app-case :arr="swiperArr"></swiper-phone-app-case>
      </div>
    </div>

    <div class="pt-[30px] relative bg-[#F7F7F8] z-[-5]">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">获奖情况</div>
      <div class="absolute w-full text-center font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-3]">APPLICATION CASES</div>
    </div>
    <div class="pt-[30px] bg-[#F7F7F8]">
      <swiper-phone :arr="timeAwardsArr"></swiper-phone>
    </div>
  </div>
</template>

<style scoped lang="scss">
.phone-container {
  .feature_1 {
    background: linear-gradient(90deg, #3545BD 0%, #528EE8 100%);
    border-radius: 2px;
    //&:first-child {
    //  margin-right: 10px;
    //}
  }
}

</style>
