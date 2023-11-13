<script setup lang="ts">
defineProps({
  array: Array
})
</script>

<template>
  <el-carousel :autoplay="false" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in array" :key="item.id">
      <div class="honor_details">
        <div class="honor_pic">
          <img :src="item.url" alt="">
        </div>
        <div class="honor_content">
          <div class="honor_year">{{ item.text1 }}</div>
          <div class="honor_award">{{ item.text2 }}</div>
          <div class="type_1 mt-5">
            <div class="text-[18px] text-[#999]">类种</div>
            <div class="text-[18px] text-[#232323]">{{ item.text3 }}</div>
          </div>
          <div class="type_1 mt-5">
            <div class="text-[18px] text-[#999]">发证单位</div>
            <div class="text-[18px] text-[#232323]">{{ item.text4 }}</div>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>

</style>


<style scoped lang="scss">
.honor_details {
  margin: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 240px;
  padding: 20px;
  //box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
  box-sizing: border-box;
  .honor_pic {
    width: 400px;
    height: 270px;
    border: 1px dashed #ccc;
    font-size: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .honor_content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    height: 100%;
    .honor_year {
      margin-top: 10px;
      padding: 5px 0 5px 0;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      color: #000;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 4px;
        background: #0055D5;
        top: 0;
        left: 0;
      }
    }
    .honor_award {
      height: 30px;
      padding: 0 0 5px 0;
      line-height: 30px;
      font-size: 18px;
      color: #000;
    }
    .honor_text {
      font-size: 16px;
      color: #999;
    }
  }
}
</style>
