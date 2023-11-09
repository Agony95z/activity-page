<script lang="ts" setup>
import { ref } from "vue";
import p_honor_1 from '@/assets/img/p_honor_1.png';

const carouselArr = [
  {id: 1, text: '中国空气动力学会是国家一级学会，也是国内唯一一家空气动力学专业的社会团体。学会于1980年由中国科协批准成立，并报原国防科工委批准备案，于1991年7月在民政部登记注册，1997年根据中办、国务院有关文件要求，明确学会挂靠单位是中国空气动力研究与发展中心，业务主管单位是中国科协，等级管理单位是民政部。', img: p_honor_1},
  {id: 2, text: '中国空气动力学会是国家一级学会，也是国内唯一一家空气动力学专业的社会团体。学会于1980年由中国科协批准成立，并报原国防科工委批准备案，于1991年7月在民政部登记注册，1997年根据中办、国务院有关文件要求，明确学会挂靠单位是中国空气动力研究与发展中心，业务主管单位是中国科协，等级管理单位是民政部。', img: p_honor_1},
];
const prevIndex = ref(0);
const handleChange = (index) => {
  prevIndex.value = index;
};
</script>
<template>
  <div class="phone-swiper">
    <el-carousel @change="handleChange" :height="'180px'" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in carouselArr" :key="item.id">
        <div>
          <img :src="item.img" alt="">
        </div>
      </el-carousel-item>

    </el-carousel>
    <div class="text-[12px] text-[#999]">
      {{ carouselArr[prevIndex].text }}
    </div>
  </div>
</template>

<style lang="scss">
  .el-carousel__item {
    padding: 0 40px;
    background: url('../assets/img/p_awards.svg') no-repeat;
    background-size: cover;
  }
</style>
