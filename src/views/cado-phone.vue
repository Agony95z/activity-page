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
        <img src="../assets/img/banner_cado.png" alt="">
        <img class="absolute w-[280px] top-1/2 left-1/2 -translate-y-[230%] -translate-x-1/2" src="../assets/img/banner_cado_text.svg" alt="">
        <img class="w-[300px] h-[54px] mt-[3%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="../assets/img/cado.svg" alt="">
      </div>
      <div class="banner-us relative h-[50px] flex flex-col justify-center items-center">
        <div class="absolute w-[100px] h-[100px] bottom-0 left-1/2 -translate-x-1/2 text-[0]">
          <img src="../assets/img/cado_phone.png" alt="">
        </div>
      </div>
    </div>
    <div class="software pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">CADO简介</div>
      <div class="absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">About CADO</div>
    </div>
    <div class="px-[15px] mt-5 w-full border-box text-[12px] text-[#000] leading-[22px]">
      CADO软件是一款用于飞行器气动弹性数值仿真和优化设计的综合性软件。集成了高精度气动计算方法及气动弹性耦合仿真方法，并发展了考虑气弹耦合效应的基于代理模型的多学科耦合综合优化设计方法。可为新一代宽体客机的性能预测提供基础计算支持，为现阶段的飞机型号研制提供新的设计思路，为将来新型布局飞机的研究提供技术支持。CADO已经完成大量工程实际问题的数值仿真工作，相关工程型号任务多达十多项。其中国产C919飞机的静气弹型架外形修正和中俄联合研制的CR929项目静气动弹性相关研究工作，为本软件在民用领域的典型运用。该软件获得国防科学技术奖三等奖。
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
      <div class="mt-[15px] w-full">
        <div class="w-full flex justify-center">
          <div v-for="item in cfdArr.slice(0, 2)" :key="item.id">
            <div class="mx-2.5 flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text1 }}</div>
            <div class="mx-2.5 px-2.5 border-box mt-2.5 flex flex-col justify-center items-center">
              <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.text2 }}</div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center mt-5">
          <div v-for="item in cfdArr.slice(2, 4)" :key="item.id">
            <div class="mx-2.5 flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text1 }}</div>
            <div class="mx-2.5 px-2.5 border-box mt-2.5 flex flex-col justify-center items-center">
              <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.text2 }}</div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center mt-5">
          <div v-for="item in cfdArr.slice(4, 6)" :key="item.id" :class="{'isPlace': item.id===6}">
            <div class="mx-2.5 flex justify-center items-center w-[160px] h-[30px] feature_1 text-[12px] text-[#fff] font-semibold">{{ item.text1 }}</div>
            <div class="mx-2.5 px-2.5 border-box mt-2.5 flex flex-col justify-center items-center">
              <div class="text-[#232323] text-[12px] leading-[22px]">{{ item.text2}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">应用案例</div>
      <div class="absolute w-full text-center font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">APPLICATION CASES</div>
      <div class="mt-[1px]">
        <swiper-phone-app-case :arr="swiperArr"></swiper-phone-app-case>
      </div>
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
