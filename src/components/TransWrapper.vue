<script setup lang="ts">
import {computed, onMounted, ref} from "vue";

defineProps({
  arr: Array
})

const isShowArrow = ref(true);
const offserX = ref(0);
const transformStyle = computed({
  get() {
    return `translateX(${offserX.value}px)`;
  },
  set(value) {
  }
});

const stepL = ref(-30);
const stepR = ref(30);
const fa = ref(null);
const son = ref(null);
const contentContainer = ref(null);

const handleLeft = () => {
  if (offserX.value >= 0) return
  offserX.value = offserX.value + stepR.value
};
const handleRight = () => {
  const isOverFlow = fa?.value?.clientWidth + Math.abs(offserX.value) > son?.value?.clientWidth
  if (isOverFlow) return
  offserX.value = offserX.value + stepL.value
};
onMounted(() => {
  isShowArrow.value = computed(() => fa.value.clientWidth <= contentContainer.value.clientWidth);
});
</script>

<template>
  <div class="pro_two" :class="{'flex': !isShowArrow.value, 'justify-center': !isShowArrow.value}">
    <div v-if="isShowArrow.value" @click="handleLeft" class="arrow_l">
      <div style="width: 48px; height: 48px;" class="arrow_icon_l">
      </div>
    </div>
    <div ref="fa" class="center" :class="{'flex': !isShowArrow.value, 'justify-center': !isShowArrow.value}">
      <div ref="son" class="over_container" :style="{ transform: transformStyle }">
        <div ref="contentContainer" class="mb-5" style="display: flex;">
          <div class="content" v-for="item in arr" :key="item.id">
            <div class="con_5 w-[318px] h-[272px]">
              <img class="w-full h-full" style="" :src="item.img" alt="">
            </div>
            <div class="h-[6px] w-[318px] bg-[#0055D5]"></div>
            <div class="px-5 pt-[30px] text-[14px] text-[#181818]">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isShowArrow.value" @click="handleRight" class="arrow_r">
      <div style="width: 48px; height: 48px;" class="arrow_icon">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pro_two {
  width: 100%;
  padding: 100px 45px 120px 45px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  .center {
    width: calc(100% - 96px);
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .over_container {
      //display: flex;
      display: inline-block;
    }
    .content {
      width: 360px;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      z-index: 2;
      box-shadow: 0 0 6px 0 rgba(35,35,35,0.06);
      margin-top: 10px;
      &:not(:last-child) {
        margin-right: 20px;
      }
      .con_5 {
        border: 1px dashed #ccc;
        box-sizing: border-box;
      }
    }
  }
  .arrow_l, .arrow_r {
    cursor: pointer;
    width: 48px;
    display: flex;
    align-items: center;
    color: #000;
    font-size: 26px;
  }
  .arrow_icon {
    background: url("../assets/img/arrow_r.svg") no-repeat;
    background-size: cover;
    &:hover {
      background: url("../assets/img/arrow_r_active.svg") no-repeat;
      background-size: cover;
    }
  }
  .arrow_icon_l {
    background: url("../assets/img/arrow_l.svg") no-repeat;
    background-size: cover;
    &:hover {
      background: url("../assets/img/arrow_l_active.svg") no-repeat;
      background-size: cover;
    }
  }
}
</style>
