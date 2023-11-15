<script setup lang="ts">
import HeaderPhone from "../components/HeaderPhone.vue";
// import TabsPhone from "../components/TabsPhone.vue";
// import SwiperPhone from "../components/SwiperPhone.vue";
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
        <img src="../assets/img/banner_2.png" alt="">
        <img class="absolute w-[280px] top-1/2 left-1/2 -translate-y-[230%] -translate-x-1/2" src="../assets/img/banner_mech_text.svg" alt="">
        <img class="w-[300px] h-[54px] mt-[3%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="../assets/img/mech.svg" alt="">
      </div>
      <div class="banner-us relative h-[50px] flex flex-col justify-center items-center">
        <div class="absolute w-[100px] h-[100px] bottom-0 left-1/2 -translate-x-1/2 text-[0]">
          <img src="../assets/img/mech_phone.png" alt="">
        </div>
      </div>
    </div>
    <div class="software pt-[30px] relative">
      <div class="text-[20px] text-[#000] font-semibold text-center w-full">SiMech简介</div>
      <div class="absolute font-semibold text-[20px] text-[#e0e0e0] top-[15px] left-1/2 -translate-x-1/2 z-[-5]">About SiMech</div>
    </div>
    <div class="px-[15px] mt-5 w-full border-box text-[12px] text-[#000] leading-[22px]">
      SiMech（中文名：模力）是用于工程材料和结构多尺度力学分析的计算软件平台。SiMech由中国科学院力学研究所研究人员开发和维护，集成了研究过程中逐渐形成的固体力学计算模型、算法和程序，包括结构有限元分析、结构疲劳寿命分析、微观分子模拟、分子/有限元耦合分析等。基于此，SiMech的目标是通过构建工程材料和结构多尺度力学分析常用算法的基础软件框架，为科研工作者、工程技术人员和力学专业学生提供专业的计算软件和技术支持。
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
