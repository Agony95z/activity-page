<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Header from '@/components/Header.vue';
import TitleWrapper from "@/components/TitleWrapper.vue";
import TransWrapper from "@/components/TransWrapper.vue";
import soft_1 from '@/assets/img/cado_soft_1.png';
import soft_2 from '@/assets/img/cado_soft_2.png';
import soft_3 from '@/assets/img/cado_soft_3.png';
import soft_4 from '@/assets/img/cado_soft_4.png';
import cado_module_1 from '@/assets/img/cado_module_1.svg';
import cado_module_2 from '@/assets/img/cado_module_2.svg';
import cado_module_3 from '@/assets/img/cado_module_3.svg';
import cado_module_4 from '@/assets/img/cado_module_4.svg';
import cado_module_5 from '@/assets/img/cado_module_5.svg';


const cfdArr = [
  {id: 1, text1: 'CFD求解', text2: '基于大规模多块结构网格和大规模混合网格的有限体积法求解器，用于工程复杂流场的定常，非定常流动分析。', img: cado_module_1},
  {id: 2, text1: '静气动弹性仿真', text2: '准确地模拟飞行器在飞行过程中结构变形情况，分析飞行器的弹性特性和气动性能，对结构静力学稳定性进行评估。', img: cado_module_2},
  {id: 3, text1: '颤振分析', text2: '模拟飞行器在飞行过程中的动态响应历程，对飞行器的颤振边界进行预测，分析飞行器的动稳定性。', img: cado_module_3},
  {id: 4, text1: '抖振仿真', text2: '跨声速飞行激波抖振边界的预测和分析。', img: cado_module_4},
  {id: 5, text1: '多学科耦合综合优化模块', text2: '将气动力和结构静/动力学紧密耦合，通过综合考虑不同学科间的相互作用，针对不同的优化问题，可实现气动外形优化，气动结构综合优化。', img: cado_module_5},
  {id: 6, text1: '', text2: '', img: ''},
];
const softArr = [
  {id:1, text: '跨声速激波抖振', img: soft_1},
  {id:2, text: '火星进入舱的配平翼抖振', img: soft_2},
  {id:3, text: '减阻杆气动弹性失稳', img: soft_3},
  {id:4, text: '飞机颤振', img: soft_4},
];

const featureArr = [
  {id:1, text: 'CFD求解', content: '可求解基于结构网格、混合网格的低，压，跨和超声速的复杂结构外形的流场分析，准确地模拟飞行器在不同飞行状态下的气动特性，包括升力、阻力、侧向力等。', img: ''},
  {id:2, text: '全过程分析', content: '考虑结构的柔性特征，准确模拟飞行器在飞行过程中的振动和变形。针对非线性结构（考虑结构几何非线性和间隙非线性）实现了气动力和结构两场非线性耦合的静气动弹性分析方法。', img: ''},
  {id:3, text: '抖振仿真', content: '提供能够考虑弹性效应的准确预测和描述跨声速抖振的仿真分析模型', img: ''},
  {id:4, text: '多学科耦合综合优化模块', content: '建立了基于代理模型的优化设计体系，代替复杂CFD或气动弹性耦合分析，提高优化设计的效率，在优化过程中引入了设计变量不确定区间分析方法和鲁棒优化设计方法，提高了综合优化设计的有效性。', img: ''},
];
const container = ref(null);

onMounted(() => {
  container.value.scrollTop = 0;
});
</script>

<template>
  <div ref="container" class="pc_container">
    <Header />
    <div class="banner-wrapper pt-[80px]">
      <div class="banner">
        <img src="../assets/img/banner_cado.png" alt="">
      </div>
      <div class="banner_text">
        <img src="../assets/img/banner_cado_text.svg" alt="">
      </div>
      <div class="banner_text_2">
        <img src="../assets/img/cado.svg" alt="">
      </div>
    </div>
    <div class="introduce">
      <div style="position: relative; height: 370px;">
        <div class="introduce_center">
          <div class="top_text">
            <div class="text_1">About CADO</div>
            <div class="text_2">CADO简介</div>
          </div>
          <div class="content">
            <div class="con_l">
              CADO软件是一款用于飞行器气动弹性数值仿真和优化设计的综合性软件。集成了高精度气动计算方法及气动弹性耦合仿真方法，并发展了考虑气弹耦合效应的基于代理模型的多学科耦合综合优化设计方法。可为新一代宽体客机的性能预测提供基础计算支持，为现阶段的飞机型号研制提供新的设计思路，为将来新型布局飞机的研究提供技术支持。CADO已经完成大量工程实际问题的数值仿真工作，相关工程型号任务多达十多项。其中国产C919飞机的静气弹型架外形修正和中俄联合研制的CR929项目静气动弹性相关研究工作，为本软件在民用领域的典型运用。该软件获得国防科学技术奖三等奖。
            </div>
            <div class="con_r">
              <img src="../assets/img/cado_introduce_1.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <title-wrapper :text1="'FEATURES'" :text2="'功能特色'"></title-wrapper>
      <div class="mt-[60px] mb-[100px] px-[10%] mx-auto feature_wrapper">
        <div class="feature_container flex">
          <div class="feature_content">
            <div class="flex">
              <div class="flex-1 flex flex-col item relative pt-[30px] pl-[30px] pr-[25px] pb-[25px]" v-for="item in featureArr.slice(0, 2)" :key="item.id">
                <p class="text-[#333] border-box font-semibold text-[16px]">{{ item.text }}</p>
                <p class="text-[#666] pr-[80px] border-box text-[15px] mt-2.5">{{ item.content }}</p>
                <!--              <div class="absolute bottom-[28px] right-[30px] item_img w-[36px] h-[36px] bg-[red]"></div>-->
              </div>
            </div>
            <div class="flex">
              <div class="flex-1 flex item item_2 flex-col relative pt-[30px] pl-[30px] pr-[25px] pb-[25px]" v-for="item in featureArr.slice(2, 4)" :key="item.id">
                <p class="text-[#333] border-box font-semibold text-[16px]">{{ item.text }}</p>
                <p class="text-[#666] pr-[80px] border-box text-[15px] mt-2.5">{{ item.content }}</p>
                <!--              <div class="absolute bottom-[28px] right-[30px] item_img w-[36px] h-[36px] bg-[red]"></div>-->
              </div>
            </div>
          </div>
          <div class="flex-1 feature_right flex flex-col pt-[30px] pl-[30px] pr-[25px] pb-[25px]">
            <div class="text-[#333] border-box font-semibold text-[16px]">多场耦合</div>
            <div class="text-[#666] pr-[80px] border-box text-[15px] mt-2.5">发展了基于多套重叠背景网格动网格方法，RBF动网格方法的网格变形技术。除常规线性结构颤振分析外，还实现了考虑结构几何非线性和间隙非线性的非线性颤振分析。为探究某些特殊颤振现象产生的物理机理提供技术支持，为某些飞行器结构动强度设计提供数据参考。</div>
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
          <div class="w-full h-[40px]">
            <div class="w-[200px] h-[40px] flex justify-end items-end absolute bottom-[20px] right-[20px]">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[30px] flex justify-center">
        <div class="cfd_content relative" :class="{'isSix': item.id === 6}" v-for="item in cfdArr.slice(3, 6)" :key="item.id">
          <div class="content_l">{{ item.text1 }}</div>
          <div class="content_r">{{ item.text2 }}</div>
          <div class="w-full h-[40px]">
            <div class="w-[200px] h-[40px] flex justify-end items-end absolute bottom-[20px] right-[20px]">
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
  .feature_container {
    background: #fff;
    box-shadow: 0 12px 12px 0 rgba(0,0,0,0.04);
    border-radius: 5px;
    .feature_right {
      position: relative;
      &:hover {
        background: #0055D5;
        border-radius: 5px;
        div {
          color: #fff;
        }
        &:after, &:before {
          z-index: -1;
        }
      }
      &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 70%;
        background: #e7e7e7;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
  .feature_content {
    flex: 2;
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
      font-size: 15px;
      color: #666;
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
      //border: 1px dashed #ccc;
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
