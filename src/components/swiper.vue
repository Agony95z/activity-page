<script lang="ts" setup>
import swiper_1 from '@/assets/img/swiper_1.png';
import swiper_2 from '@/assets/img/swiper_2.png';
import swiper_3 from '@/assets/img/swiper_3.png';
  const swiperArr = [
    {
      id: 1,
      text_1: 'LNM研究团队',
      text_2: '提高可拉伸电子器件弹性延展性的新策略',
      img: swiper_1
    },
    {
      id: 2,
      text_1: 'LNM研究团队',
      text_2: '力学所研发出一种超高强塑性钨高熵合金 ',
      img: swiper_2
    },
    {
      id: 3,
      text_1: 'NML研究团队',
      text_2: '力学所在微重力深低温工质冷凝传热研究中取得进展',
      img: swiper_3
    },
  ];
</script>
<template>
  <el-carousel
      height="400px"
      direction="vertical"
      type="card"
      :autoplay="false"
  >
    <el-carousel-item v-for="item in swiperArr" :key="item.id">
      <div class="swiper-container">
        <div class="swiper_pic">
          <img :src="item.img" alt="">
        </div>
        <div class="swiper_text">
          <div class="swiper_text_1">{{ item.text_1 }}</div>
          <div class="swiper_text_2">{{ item.text_2 }}</div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
:deep(.el-carousel__button) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #eee;
}
:deep(.el-carousel__indicator--vertical.is-active) {
  .el-carousel__button {
    background: #0055D5;
  }
}
:deep(.el-carousel__item.is-active) {
  .swiper_text_1, .swiper_text_2 {
    color:#333;
  }
}
.swiper-container {
  display: flex;
}
.swiper_pic {
  height: 200px;
  img {
    height: 100%;
  }
}
.swiper_text {
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  justify-content: center;
  .swiper_text_1 {
    color: #898989;
    font-weight: 600;
    font-size: 16px;
  }
  .swiper_text_2 {
    color: #898989;
    margin-top: 15px;
    font-size: 14px;
  }
}
.el-carousel__item {
  background-color: #fff;
}
</style>
