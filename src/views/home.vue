<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import { useRouter } from "vue-router";
// import Timeline from '@/components/timeline.vue'
// import Swiper from '@/components/swiper.vue'
import HomePhone from "./home-phone.vue";
import Header from '@/components/Header.vue';
import con_1 from '@/assets/img/con_1.png';
import con_2 from '@/assets/img/con_2.png';
import con_3 from '@/assets/img/con_3.png';
import con_4 from '@/assets/img/con_4.png';

import soft_1 from '@/assets/img/soft_1.svg';
import soft_2 from '@/assets/img/soft_2.svg';
import soft_3 from '@/assets/img/soft_3.svg';
import soft_4 from '@/assets/img/soft_4.svg';

import honor_1 from '@/assets/img/honor_1.png';
import honor_2 from '@/assets/img/honor_2.png';
import honor_3 from '@/assets/img/cdem_honor_1.png';
import honor_4 from '@/assets/img/honor_4.png';
import honor_5 from '@/assets/img/honor_5.png';

const router = useRouter();
const proArr = [
  {
    id: 1,
    text_1: '高精度计算流体力学软件',
    text_2: 'OpenCFD',
    text_3: '了解更多',
    text_4: 'OpenCFD是中国科学院力学研究所李新亮研究员课题组开发的一套高精度计算流体力学软件。该软件集成了课题组自行开发的系列高精度差分格式及当前流行的多种高精度差分格式，高计算精度可达7阶，主要用于湍流及燃烧直接数值模拟、大涡模拟等高分辨率模拟。',
    img: con_1
  },
  {
    id: 2,
    text_1: '连续•非连续数值分析系统',
    text_2: 'CDEM数值分析系统',
    text_3: '了解更多',
    text_4: '中国科学院力学研究所历时25年自主研发，基于广义拉格朗日方程理论框架，将连续介质数值方法与非连续介质数值方法进行深度融合，在能量层面实现了有限元、离散元及无网格算法的统一，可实现静动载荷下地质体及人工材料渐进破坏过程的模拟。',
    img: con_2
  },
  {
    id: 3,
    text_1: 'CADO分析系统',
    text_2: 'CADO',
    text_3: '了解更多',
    text_4: 'CADO系统一般分为二维和三维系统。系统内表达的任何设计都变成了几何图形，所依赖的数学模型是几何模型，系统记录了这些图素的几何特征。二维CAD系统一般由图形的输入与编辑、硬件接口、数据接口和二次开发工具等几部分组成。',
    img: con_3
  },
  {
    id: 4,
    text_1: '非线性力学国家重点实验室',
    text_2: 'SiMech跨尺度力学计算软件',
    text_3: '了解更多',
    text_4: 'SiMech构建了自主的前端界面+后端计算基础框架，前端界面包括前处理、计算调用、后处理、可视化功能；后端计算包括多个不同尺度的计算力学模块，针对高铁、海洋、航空、盾构等工程结构开展了广泛应用，面向具体需求，可实现高度定制化的应用开发。',
    img: con_4
  },
];
const honorArr = [
  {id: 1, text: '国家超算广州中心“天河之星”优秀应用奖'},
  {id: 2, text: '中国空气动力学会科学技术一等奖'},
  {id: 3, text: '地质体连续-非连续数值分析方法CDEM'},
  {id: 4, text: '天津超算“天河应用创新优秀奖”'},
  {id: 5, text: '中国科学院超级计算“最佳应用奖”'},
];
const softwareArr = [
  {id: 1, text: '3大领域核心求解器', img: soft_1},
  {id: 2, text: '1款多物理场通用仿真云平台', img: soft_2},
  {id: 3, text: '≥12个典型场景应用APP', img: soft_3},
  {id: 4, text: '≥1000个中间层接口脚本', img: soft_4},
];
const offserX = ref(0);
const transformStyle = computed({
  get() {
    return `translateX(${offserX.value}px)`;
  },
  set(value) {
  }
});

const stepL = ref(-100);
const stepR = ref(100);
const fa = ref(null);
const son = ref(null);
const contentContainer = ref(null);
const container = ref(null);
const isShowArrow = ref(true);
const handleLeft = () => {
  if (offserX.value >= 0) return
  offserX.value = offserX.value + stepR.value
};
const handleRight = () => {
  const isOverFlow = fa?.value?.clientWidth + Math.abs(offserX.value) > son?.value?.clientWidth
  if (isOverFlow) return
  offserX.value = offserX.value + stepL.value
};
const activeNum = ref(0);
const handleHonor = (index) => {
  activeNum.value = index;
}
const honorPicArr = [
  {id: 1, text: '广州超算“天河之星”优秀应用奖', url: honor_2},
  {id: 2, text: '中国空气动力学会是国家一级学会，也是国内唯一一家空气动力学专业的社会团体。学会于1980年由中国科协批准成立，并报原国防科工委批准备案，于1991年7月在民政部登记注册。1997年根据中办、国务院有关文件要求，明确学会挂靠单位是中国空气动力研究与发展中心，业务主管单位是中国科协，登记管理单位是民政部。', url: honor_1},
  {id: 3, text: '地质体连续-非连续数值分析方法CDEM', url: honor_3},
  {id: 4, text: '天津超算“天河应用创新优秀奖”', url: honor_4},
  {id: 5, text: '中国科学院超级计算“最佳应用奖”', url: honor_5},
];
const honorPicUrl = computed(() => honorPicArr[activeNum.value].url);
const honorPicText = computed(() => honorPicArr[activeNum.value].text);
const handleMore = (idx) => {
  switch (idx) {
    case 0: router.push(`/opencfd?idx=${idx}`)
      break;
    case 1: router.push(`/cdem?idx=${idx}`)
      break;
    case 2: router.push(`/cado?idx=${idx}`)
      break;
    case 3: router.push(`/simech?idx=${idx}`)
      break;
    default: router.push('/');
  }
  // router.push(`/opencfd?idx=0`)
};
onMounted(() => {
  document.querySelector('html').scrollTop = 0;
  isShowArrow.value = computed(() => fa.value.clientWidth <= contentContainer.value.clientWidth);
});
</script>

<template>
  <div ref="container" class="pc_container hidden md:block">
    <Header />
    <div class="banner-wrapper pt-[80px]">
      <div class="banner">
        <img src="../assets/img/banner_1.png" alt="">
      </div>
<!--      <div class="banner_text">-->
<!--        <img src="../assets/img/banner_1_text.png" alt="">-->
<!--      </div>-->
<!--      <div class="learn_more" @click="handleMore">-->
<!--        <div class="jump_wrapper">-->
<!--          <div>力源 久宇</div>-->
<!--          <div class="more_arrow">-->
<!--            <img src="../assets/img/jiantou.svg" alt="">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="choose_us">
      <div class="us_l">
        <div>WHY CHOOSE US</div>
        <div>选择我们的理由</div>
      </div>
      <div class="us_r">
        <div class="tip">
          <div>
            <img src="../assets/img/tip_1.svg" alt="">
          </div>
          <div class="tip_text">先进内核</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_2.svg" alt="">
          </div>
          <div class="tip_text">海量算力</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_3.svg" alt="">
          </div>
          <div class="tip_text">高效并行</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_4.svg" alt="">
          </div>
          <div class="tip_text">多场耦合</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_5.svg" alt="">
          </div>
          <div class="tip_text">即开即用</div>
        </div>
      </div>
    </div>
    <div class="product-container">
      <div class="pro_one">
        <div class="pro_text_l">
          <div class="text_1">SOFTWARE CENTER</div>
          <div class="text_2">软件中心</div>
        </div>
      </div>
      <div class="pro_software flex justify-around mt-[100px]">
        <div class="soft_l flex flex-col justify-center">
          <div class="soft_item w-[280px] h-[80px] flex justify-between items-center" v-for="item in softwareArr" :key="item.id">
            <div class="pl-[20px] h-[43px] flex items-center">
              <img class="w-full" :src="item.img" alt="">
            </div>
            <div class="flex-1 pl-5 text-[14px] text-white font-medium">{{ item.text }}</div>
          </div>
        </div>
        <div class="soft_r w-[676px] h-[563px]">
          <img class="w-full" src="../assets/img/soft_r.png" alt="">
        </div>
      </div>
      <div class="pro_two" :class="{'flex': !isShowArrow.value, 'justify-center': !isShowArrow.value}">
        <div v-if="isShowArrow.value" @click="handleLeft" class="arrow_l">
          <div style="width: 48px; height: 48px;" class="arrow_icon_l">
          </div>
        </div>
        <div ref="fa" class="center" :class="{'flex': !isShowArrow.value, 'justify-center': !isShowArrow.value}">
          <div ref="son" class="over_container" :style="{ transform: transformStyle }">
            <div ref="contentContainer" style="display: flex;">
              <div class="content" v-for="(item, index) in proArr" :key="item.id">
                <div class="con_1">{{ item.text_1 }}</div>
                <div class="con_2">{{ item.text_2 }}</div>
                <div class="con_3" @click="handleMore(index)">
                  {{ item.text_3 }}
                  <img src="../assets/img/sj.svg" alt="">
                </div>
                <div class="con_4">{{ item.text_4 }}</div>
                <div class="con_5">
                  <img style="" :src="item.img" alt="">
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
    </div>
    <div class="pro_three">
      <div class="pro_text_l">
        <div class="text_1">HONOR&AWARDS</div>
        <div class="text_2">奖励荣誉</div>
      </div>
    </div>
    <div class="pro_four">
      <div class="honor_wrapper">
        <div class="honor_text" @click="handleHonor(index)" :class="{active: activeNum === index}" v-for="(item, index) in honorArr" :key="item.id">{{ item.text }}</div>
      </div>
      <div class="honor_pic">
        <div class="pic_l">
          <img class="w-full h-full" :src="honorPicUrl" alt="">
        </div>
        <div class="pic_r">
          <div class="pic_r_1"></div>
          <div class="pic_r_2">
            <div class="text-[14px] text-white">{{ honorPicText }}</div>
          </div>
        </div>
      </div>
    </div>

<!--    <div class="pro_five">
      <div class="pro_text_l">
        <div class="text_1">HISTORY</div>
        <div class="text_2">科研进展</div>
      </div>
      <div class="pro_text_r">
        <div class="text_x">XXXXXXXXXXXXXXXXXXXXXXX</div>
        <div class="text_x">XXXXXXXXXXXXXXXXXX</div>
        <div class="text_cn">独立自主  全过程分析  多场耦合  快速高效协同  应用场景广泛</div>
      </div>
    </div>
    <div class="pro_six">
      <div class="six_content">
        <div class="six_l">
          <timeline></timeline>
        </div>
        <div class="six_r">
          <swiper></swiper>
        </div>
      </div>
    </div>-->
  </div>
  <div class="block md:hidden">
    <home-phone></home-phone>
  </div>
</template>

<style scoped lang="scss">
.soft_item {
  background: linear-gradient(90deg, #3545BD 0%, #528EE8 100%);
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
}
:deep(.el-timeline) {
  height: 100%;
  padding-left: 0;
}
:deep(.el-timeline-item__content) {
  color: #999;
}
.product-container {
  width: 100%;
  //height: 1000px;
  background: url('../assets/img/product_center_bg.png') no-repeat;
  //background-size: 100% 100%;
  background-size: cover;
  padding-top: 140px;
  //padding-bottom: 180px;
}
.pro_software {
  padding: 0 10%;
}
.pro_one {
  padding: 0 20%;
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
      z-index: -2;
      top: 0;
      font-size: 30px;
      color: #E0E0E0;
    }
    .text_2 {
      font-size: 36px;
      color: #333333;
      width: 144px;
      height: 74px;
      line-height: 74px;
      border-bottom: 4px solid #0055D5;
      text-align: center;
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
.pro_two {
  width: 100%;
  padding: 160px 45px 160px 45px;
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
      width: 380px;
      text-align: center;
      height: 550px;
      padding: 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      z-index: 2;
      box-shadow: 0 0 6px 0 rgba(35,35,35,0.06);
      margin-top: 10px;
      &:not(:last-child) {
        margin-right: 20px;
      }
      .con_1 {
        font-size: 14px;
        color: #999999;
      }
      .con_2 {
        font-size: 22px;
        color: #232323;
        margin-top: 15px;
        margin-bottom: 35px;
      }
      .con_3 {
        cursor: pointer;
        color: #0055D5;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        img {
          margin-left: 10px;
        }
      }
      .con_4 {
        font-size: 14px;
        color: #232323;
        margin-bottom: 25px;
        text-align: left;
        line-height: 28px;
      }
      .con_5 {

      }
    }
  }
  .arrow_l, .arrow_r {
    cursor: pointer;
    width: 48px;
    height: 550px;
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
.pro_three, .pro_five {
  padding: 0 15%;
  box-sizing: border-box;
  height: 90px;
  margin: 20px auto 0;
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
      position: absolute;
      z-index: 2;
      color: #333333;
      width: 144px;
      height: 74px;
      line-height: 74px;
      border-bottom: 4px solid #0055D5;
      text-align: center;
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
.pro_four {
  margin-top: 20px;
  padding: 150px 9%;
  height: 700px;
  box-sizing: border-box;
  background: url('../assets/img/develop_bg.png') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  .honor_wrapper {
    display: flex;
    flex-direction: column;
    //margin-top: 50px;
    .honor_text {
      cursor: pointer;
      margin-bottom: 50px;
      color: #1A2B50;
      font-size: 20px;
      &.active {
        color: #2E5CEE;
      }
    }
  }
  .honor_pic {
    width: 800px;
    margin-left: 90px;
    height: 400px;
    position: relative;
    border-radius: 6px;
  }
  .pic_l {
    width: 500px;
    height: 350px;
    z-index: 3;
    font-size: 0;
    /*background: url("../assets/img/honor_1.png") no-repeat;
    background-size: cover;*/
    position: absolute;
    top: 0;
    left: 0;
  }
  .pic_r {
    z-index: 2;
    width: 600px;
    height: 360px;
    background: linear-gradient(207deg, #627DD3 0%, #0A2349 100%);
    border-radius: 6px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    text-overflow: ellipsis;
    //white-space: nowrap;
    .pic_r_1 {
      width: 40%;
    }
    .pic_r_2 {
      width: 60%;
      padding: 30px 15px 30px 82px;
      box-sizing: border-box;
      //white-space: nowrap;
      div {
        margin-bottom: 15px;
        color: #fff;
      }
    }
    .pic_r_1, .pic_r_2 {

    }
  }
}
.pro_six {
  background: #F7F7F8;
  padding: 150px 15%;
  .six_l {
    height: 100%;
  }
  .six_r {
    flex: 1;
    //padding-left: 400px;
    padding-left: 25%;
    box-sizing: border-box;
    height: 100%;
  }
  .six_content {
    height: 420px;
    //background: red;
    display: flex;
    //padding: 0 30px;
    box-sizing: border-box;
  }

}
.pro_five {
  padding-top: 100px;
  background: #F7F7F8;
  box-sizing: unset;
}
.choose_us {
  width: 100%;
  display: flex;
  height: 200px;
  .us_l {
    flex: 1;
    font-size: 26px;
    color: #fff;
    padding-right: 150px;
    box-sizing: border-box;
    background: #2B2C2E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-weight: 400;
  }
  .us_r {
    flex: 2;
    display: flex;
    padding-right: 140px;
    padding-left: 20px;
    background: #0055D5;
    .tip {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items:center;
      flex-direction: column;
    }
    .tip_text {
      font-size: 20px;
      color: #fff;
    }
  }
}
.learn_more {
  position: absolute;
  bottom: 110px;
  left: 50%;
  cursor: pointer;
  transform: translateX(-50%);
  width: 200px;
  height: 60px;
  font-size: 28px;
  background: #F51D00;
  border-radius: 37px;
  color: #fff;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  .more_arrow {
    margin-left: 10px;
  }
  @keyframes jumping {
    0% { transform: translateX(0); }
    50% { transform: translateX(5px); }
    100% { transform: translateY(0); }
  }
  .jump_wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    //animation: jumping 0.8s infinite;
  }
}
.pc_container {
  width: 100%;
  .banner-wrapper {
    position: relative;
  }
  .banner_text {
    position: absolute;
    width: 761px;
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
