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
  <div class="app-phone-swiper">
    <el-carousel @change="handleChange" :autoplay="false" :height="'253px'" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in arr" :key="item.id">
        <div>
          <img :src="item.img" alt="">
        </div>
      </el-carousel-item>

    </el-carousel>
    <div class="text-[12px] text-[#181818] font-semibold pb-2.5 text-center">
      {{ arr[prevIndex].text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

.app-phone-swiper {
  :deep(.el-carousel__item) {
    padding: 0 40px;
    background: url('../assets/img/p_awards.svg') no-repeat;
    background-size: cover;
  }
  :deep(.el-carousel__indicator--horizontal.is-active) {
    .el-carousel__button {
      background: #0055D5;
    }
  }
}
</style>
