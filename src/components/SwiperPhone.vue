<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  arr: Array
})
const prevIndex = ref(0);
const handleChange = (index) => {
  prevIndex.value = index;
};
</script>
<template>
  <div class="phone-swiper">
    <el-carousel @change="handleChange" :autoplay="false" :height="'190px'" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in arr" :key="item.id">
        <div class="w-full h-full">
          <img class="w-full h-full" :src="item.url" alt="">
        </div>
      </el-carousel-item>

    </el-carousel>
    <div class="text-[12px] text-[#232323] font-semibold text-center">
      {{ arr[prevIndex].text1 }}
    </div>
    <div class="text-[12px] text-[#232323] font-semibold text-center pb-5">
      {{ arr[prevIndex].text2 }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .phone-swiper {
    :deep(.el-carousel__item) {
      padding: 0 40px;
      background: url('../assets/img/p_awards.svg') no-repeat;
      background-size: cover;
    }
    :deep(.el-carousel__button) {
      width: 20px;
    }
    :deep(.el-carousel__indicator--horizontal.is-active) {
      .el-carousel__button {
        background: #0055D5;
      }
    }
  }
</style>
