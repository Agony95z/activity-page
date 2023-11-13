<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Header from '@/components/Header.vue';
import TitleWrapper from "@/components/TitleWrapper.vue";
import TransWrapper from "@/components/TransWrapper.vue";
import soft_1 from '@/assets/img/mech_soft_1.png';
import soft_2 from '@/assets/img/mech_soft_2.png';
import soft_3 from '@/assets/img/mech_soft_3.png';
import soft_4 from '@/assets/img/mech_soft_4.png';
import mech_module_1 from '@/assets/img/mech_module_1.png';
import mech_module_2 from '@/assets/img/mech_module_2.png';
import mech_module_3 from '@/assets/img/mech_module_3.png';
import mech_module_4 from '@/assets/img/mech_module_4.png';
import mech_module_5 from '@/assets/img/mech_module_5.png';
import mech_feature_1 from '@/assets/img/mech_feature_1.svg';
import mech_feature_2 from '@/assets/img/mech_feature_2.svg';
import mech_feature_3 from '@/assets/img/mech_feature_3.svg';
import mech_feature_4 from '@/assets/img/mech_feature_4.svg';

const cfdArr = [
  {id: 1, text1: 'xScale', text2: 'SiMech xScale是为SiMech计算模块开发的前端集成软件，它拥有跨平台的用户操作界面，可为其它后端多尺度计算模块提供相应的前处理、任务提交和结果文件显示功能。', img: mech_module_1},
  {id: 2, text1: 'Feat', text2: 'SiMech Feat是结构有限元计算模块，支持多种单元、线性/非线性、静力学/动力学、模态、接触、耦合约束等功能，可直接导入INP文件，并集成多种高性能求解器。', img: mech_module_2},
  {id: 3, text1: 'Fatigue', text2: 'SiMech Fatigue是结构疲劳计算模块，支持多种模型数据输入、结点分组计算、单元分组、外表面识别，载荷载荷历程、应力文件组合、关联、编辑、插值，不同疲劳应力模型等功能。', img: mech_module_3},
  {id: 4, text1: 'Hymacs', text2: 'SiMech Hymacs是分子/准连继耦合跨尺度计算模块，用于针对微观材料开展跨尺度计算分析，它是基于耦合分子/集团统计热力学跨尺度计算理论框架，开发的并行计算程序，目前主要用于基础研究。', img: mech_module_4},
  {id: 5, text1: 'pyFEM', text2: 'pyFEM是一个完全基于python语言实现的极简有限元求解器。主要用于有限元方法的学习、有限元算法验证和快速建立材料本构模型的程序原型。', img: mech_module_5},
  {id: 6, text1: '', text2: '', img: ''},
];
const softArr = [
  {id:1, text: '高速列车整车结构应力和寿命分析', img: soft_1},
  {id:2, text: '高速列车关键构件的应力分析和寿命优化', img: soft_2},
  {id:3, text: '盾构刀盘结构服役工作的变形分析', img: soft_3},
  {id:4, text: '超高速电磁驱动结构的变形分析和优化设计', img: soft_4},
];

const featureArr = [
  {id:1, text: '多尺度力学基础框架', content: '构建了工程材料和结构的多尺度力学计算基础框架，由前处理、后处理、计算模块三大部分组成', img: mech_feature_1},
  {id:2, text: '计算模块集成', content: '包含结构有限元分析、结构疲劳寿命分析、微观分子模拟、分子/有限元耦合分析等计算模块', img: mech_feature_2},
  {id:3, text: '工程应用和基础研究结合', content: '既可应用于工程材料和结构的力学性能分析，也可用于基础力学机理和算法研究', img: mech_feature_3},
  {id:4, text: '灵活的可扩展性', content: '可针对具体行业需求进行定制化开发，也可通过面向对象开发进行功能扩展', img: mech_feature_4},
];
const container = ref(null);

onMounted(() => {
  container.value.scrollTop = 0;
});
</script>

<template>
  <div ref="container" class="pc_container">
    <Header />
    <div class="banner-wrapper">
      <div class="banner">
        <img src="../assets/img/banner_2.png" alt="">
      </div>
      <div class="banner_text">
        <img src="../assets/img/banner_mech_text.svg" alt="">
      </div>
      <div class="banner_text_2">
        <img src="../assets/img/mech.svg" alt="">
      </div>
    </div>
    <div class="introduce">
      <div style="position: relative; height: 370px;">
        <div class="introduce_center">
          <div class="top_text">
            <div class="text_1">About SiMech</div>
            <div class="text_2">SiMech简介</div>
          </div>
          <div class="content">
            <div class="con_l">
              SiMech（中文名：模力）是用于工程材料和结构多尺度力学分析的计算软件平台。SiMech由中国科学院力学研究所研究人员开发和维护，集成了研究过程中逐渐形成的固体力学计算模型、算法和程序，包括结构有限元分析、结构疲劳寿命分析、微观分子模拟、分子/有限元耦合分析等。基于此，SiMech的目标是通过构建工程材料和结构多尺度力学分析常用算法的基础软件框架，为科研工作者、工程技术人员和力学专业学生提供专业的计算软件和技术支持。
            </div>
            <div class="con_r">
              <img src="../assets/img/mech_introduce_1.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <title-wrapper :text1="'FEATURES'" :text2="'功能特色'"></title-wrapper>
      <div class="mt-[60px] mb-[100px] px-[10%] mx-auto feature_wrapper">
        <div class="feature_content">
          <div class="flex">
            <div class="flex-1 flex flex-col item relative pt-[40px] pl-[80px] pr-[30px] pb-[28px]" v-for="item in featureArr.slice(0, 2)" :key="item.id">
              <p class="text-[#333] border-box font-semibold text-[16px]">{{ item.text }}</p>
              <p class="text-[#666] pr-[80px] border-box text-[14px] mt-2.5">{{ item.content }}</p>
              <div class="absolute bottom-[28px] right-[30px] item_img w-[36px] h-[36px]">
                <img :src="item.img" alt="">
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex-1 flex item item_2 flex-col relative pt-[40px] pl-[80px] pr-[30px] pb-[28px]" v-for="item in featureArr.slice(2, 4)" :key="item.id">
              <p class="text-[#333] border-box font-semibold text-[16px]">{{ item.text }}</p>
              <p class="text-[#666] pr-[80px] border-box text-[14px] mt-2.5">{{ item.content }}</p>
              <div class="absolute bottom-[28px] right-[30px] item_img w-[36px] h-[36px]">
                <img :src="item.img" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <div class="cfd_wrapper">
      <div class="pro_text_l">
        <div class="text_1">FUNCTIONAL MODULE</div>
        <div class="text_2">功能模块</div>
      </div>
    </div>-->
    <title-wrapper :text1="'FUNCTIONAL MODULE'" :text2="'功能模块'"></title-wrapper>
    <div class="cfd_introduce">
      <div class="flex justify-center">
        <div class="cfd_content relative" v-for="item in cfdArr.slice(0, 3)" :key="item.id">
          <div class="content_l">{{ item.text1 }}</div>
          <div class="content_r">{{ item.text2 }}</div>
          <div class="w-full h-[90px]">
            <div class="w-[285px] h-[175px] absolute bottom-[0] right-[0]">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[30px] flex justify-center">
        <div class="cfd_content relative" :class="{'isSix': item.id === 6}" v-for="item in cfdArr.slice(3, 6)" :key="item.id">
          <div class="content_l">{{ item.text1 }}</div>
          <div class="content_r">{{ item.text2 }}</div>
          <div class="w-full h-[90px]">
            <div class="w-[285px] h-[175px] absolute bottom-[0] right-[0]">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="software_wrapper">
      <div class="pro_text_l">
        <div class="text_1">APPLICATION CASES</div>
        <div class="text_2">应用案例</div>
      </div>
    </div>
    <trans-wrapper :arr="softArr"></trans-wrapper>
  </div>
</template>

<style scoped lang="scss">
.feature_wrapper {
  .feature_content {
    background: #fff;
    box-shadow: 0 12px 12px 0 rgba(0,0,0,0.04);
    border-radius: 5px;
    .item {
      &:hover {
        background: #0055D5;
        border-radius: 5px;
        p {
          color: #fff;
        }
        &:after, &:before {
          z-index: -1;
        }
      }
      &:after {
        content: '';
        position: absolute;
        width: 80%;
        height: 1px;
        left: 50%;
        bottom: 0;
        background: #e7e7e7;
        transform: translateX(-50%);
      }
    }
    .item:nth-child(2n-1) {
      &:before {
        content: '';
        position: absolute;
        width: 1px;
        height: 120px;
        right: 0;
        top: 50%;
        background: #e7e7e7;
        transform: translateY(-50%);
      }
    }
    .item.item_2 {
      &:after {
        display: none;
      }
    }
  }
}
.honor_details {
  margin: 0 20% 120px 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  padding: 20px;
  box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
  box-sizing: border-box;
  .honor_pic {
    width: 268px;
    height: 178px;
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
.time_wrapper {
  margin: 120px 20% 50px 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  .center {
    position: relative;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .center_line {
    width: 100%;
    height: 2px;
    position: absolute;
    background: #ccc;
    top: 50px;
  }
  .line {
    //width: 100%;
    //height: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    //background: #ccc;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      border: 1px solid #ccc;
      &.active {
        border: 1px solid #0055D5;
      }
    }
  }
  .arrow_l, .arrow_r {
    width: 50px;
    height: 120px;
    //background: firebrick;
    .arrow_dot {
      cursor: pointer;
      margin-top: 40px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      font-weight: bold;
      color: #ccc;
      background: #fff;
      border: 1px solid #ccc;
    }
  }
  .arrow_l {
    display: flex;
    justify-content: right;
  }
  .over_container {
    display: inline-block;
  }
  .time_text {
    width: 180px;
    height: 120px;
    display: flex;
    flex-direction: column;
    text-align: center;
    //background: yellow;
    .time_year {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 49px;
      padding-bottom: 10px;
      box-sizing: border-box;
      .active {
        color: #0055D5;
      }
    }
    .time_detail {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      height: 69px;
      padding-top: 10px;
      box-sizing: border-box;
      .active {
        color: #0055D5;
      }
    }
  }
}
.cfd_introduce {
  margin: 120px 0 0 0;
  padding: 0 10% 180px 10%;
  .cfd_content {
    width: 380px;
    padding: 25px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
    display: flex;
    flex-direction: column;
    &.isSix {
      opacity: 0;
    }
    /*&:hover {
      background: #0055D5;
    }
    &:hover .content_l {
      color: #fff;
    }
    &:hover .content_r {
      color: #fff;
    }*/
    &:not(:last-child) {
      margin-right: 20px;
    }
    .content_l {
      text-align: left;
      color: #181818;
      font-size: 16px;
      font-weight: 600;
    }
    .content_r {
      margin-top: 14px;
      font-size: 14px;
      color: #999999;
    }
  }
}
.cfd_wrapper, .software_wrapper, .award_wrapper {
  padding: 0 15%;
  box-sizing: border-box;
  height: 90px;
  margin: 0 auto;
  display: flex;
  .pro_text_l {
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
      text-align: center;
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
  .pro_text_r {
    flex: 1.2;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .text_x {
      font-size: 18px;
      color: #999999;
    }
    .text_cn {
      font-size: 18px;
      color: #313131;
      margin-top: 10px;
    }
  }
}
.software_wrapper, .award_wrapper, .cfd_wrapper {
  .pro_text_l {
    border-right: unset;
    .text_2 {
      text-align: left;
    }
  }
}
.introduce {
  position: relative;
  width: 100%;
  background: url("../assets/img/cfd_bg.svg") no-repeat;
  background-size: cover;
  .introduce_center {
    width: 70%;
    position: absolute;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.12);
    left: 50%;
    transform: translateX(-50%);
    top: -40%;
    padding: 30px 80px;
    box-sizing: border-box;
    //height: 400px;
    background: #fff;
  }
  .top_text {
    position: relative;
    .text_1 {
      position: absolute;
      z-index: 1;
      top: 0;
      font-size: 30px;
      color: #E0E0E0;
    }
    .text_2 {
      font-size: 36px;
      position: absolute;
      z-index: 2;
      color: #333333;
      width: 260px;
      height: 74px;
      line-height: 74px;
      text-align: left;
    }
  }
  .content {
    margin-top: 70px;
    display: flex;
    .con_l {
      flex: 1;
      font-weight: 400;
      color: #000000;
      line-height: 34px;
      font-size: 18px;
    }
    .con_r {
      width: 180px;
      height: 180px;
      margin-left: 70px;
      border: 1px dashed #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.pc_container {
  width: 100%;
  .banner-wrapper {
    position: relative;
  }
  .banner_text_2 {
    position: absolute;
    width: 40%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
    }
  }
  .banner_text {
    position: absolute;
    width: 1200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
    }
  }
  .banner {
    font-size: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
