<script setup lang="ts">

</script>

<template>
<div class="footer">
  <div class="footer_l">
    <div class="text_1">
      <div class="text_1_1">关于我们</div>
      <div class="text_1_2 text_con">力学仿真平台</div>
      <div class="text_1_3 text_con">资源中心</div>
    </div>
    <div class="text_2">
      <div class="text_2_1">快捷链接</div>
      <div class="text_2_2 text_con">服务与支持</div>
      <div class="text_2_3 text_con">开发者平台</div>
    </div>
  </div>
  <div class="footer_r">
    <div class="contact_us">
      <div class="contact_us_zh">联系我们</div>
      <div class="contact_us_en">CONTACT US</div>
    </div>
    <div class="contact_pic">
      <img src="../assets/img/qr.jpg" alt="">
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.footer_r {
  display: flex;
}
.contact_pic {
  width: 116px;
  height: 116px;
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.contact_us_zh {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 135px;
    height: 8px;
    background-color: #fff;
  }
}
.contact_us_en {
  margin-top: 20px;
}
.contact_us_zh, .contact_us_en {
  font-size: 36px;
  color: #fff;
}
.text_con {
  font-size: 22px;
  color: #999999;
  margin-bottom: 10px;
}
.text_1_1, .text_2_1 {
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 10px;
}
.text_2 {
  margin-left: 120px;
}
.footer_l {
  display: flex;
}
.footer {
  height: 400px;
  background: #232323;
  padding: 130px 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
</style>
