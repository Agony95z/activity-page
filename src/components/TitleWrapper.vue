<script setup lang="ts">
defineProps({
  text1: String,
  text2: String
});
</script>

<template>
  <div class="title_wrapper">
    <div class="title_text_l">
      <div class="text_1">{{ text1 }}</div>
      <div class="text_2">{{ text2 }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title_wrapper {
  padding: 0 15%;
  box-sizing: border-box;
  height: 90px;
  margin: 0 auto;
  display: flex;
  .title_text_l {
    flex: 1;
    position: relative;
    //border-right: 1px solid #D8D8D8;
    .text_1 {
      position: absolute;
      z-index: 1;
      top: 0;
      font-size: 30px;
      color: #E0E0E0;
    }
    .text_2 {
      font-size: 36px;
      position: relative;
      z-index: 2;
      color: #333333;
      width: 320px;
      height: 74px;
      line-height: 74px;
      //border-bottom: 4px solid #0055D5;
      text-align: left;
      &:after {
        content: '';
        position: absolute;
        width: 144px;
        height: 4px;
        background: #0055D5;
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>
