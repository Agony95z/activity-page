<script lang="ts" setup>
import { ref } from "vue";
// import p_honor_1 from '@/assets/img/p_honor_1.png';
import honor_1 from '@/assets/img/honor_1.png';
import honor_2 from '@/assets/img/honor_2.png';
import honor_3 from '@/assets/img/cdem_honor_1.png';
import honor_4 from '@/assets/img/honor_4.png';
import honor_5 from '@/assets/img/honor_5.png';

const carouselArr = [
  {id: 1, text: '广州超算“天河之星”优秀应用奖', url: honor_2},
  {id: 2, text: '中国空气动力学会是国家一级学会，也是国内唯一一家空气动力学专业的社会团体。学会于1980年由中国科协批准成立，并报原国防科工委批准备案，于1991年7月在民政部登记注册。1997年根据中办、国务院有关文件要求，明确学会挂靠单位是中国空气动力研究与发展中心，业务主管单位是中国科协，登记管理单位是民政部。', url: honor_1},
  {id: 3, text: '地质体连续-非连续数值分析方法CDEM', url: honor_3},
  {id: 4, text: '天津超算“天河应用创新优秀奖”', url: honor_4},
  {id: 5, text: '中国科学院超级计算“最佳应用奖”', url: honor_5},
];
const prevIndex = ref(0);
const handleChange = (index) => {
  prevIndex.value = index;
};
</script>
<template>
  <div class="phone-swiper">
    <div v-if="prevIndex===1" class="text-[14px] font-medium text-center text-[#232323] mb-2.5">中国空气动力学会科学技术一等奖</div>
    <el-carousel @change="handleChange" :height="'180px'" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in carouselArr" :key="item.id">
        <div>
          <img :src="item.url" alt="">
        </div>
      </el-carousel-item>

    </el-carousel>
    <div class="text-[12px] text-[#999] text-center">
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
  .el-carousel__indicator--horizontal.is-active {
    .el-carousel__button {
      background: #0055D5;
    }
  }
</style>
