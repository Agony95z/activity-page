<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import Timeline from '@/components/timeline.vue'
import Swiper from '@/components/swiper.vue'
import con_1 from '@/assets/img/con_1.png';
import con_2 from '@/assets/img/con_2.png';
import con_3 from '@/assets/img/con_3.png';
import con_4 from '@/assets/img/con_4.png';

const router = useRouter();
const logoBtnArr = [
  {id: 1, text: 'OpenCFD'},
  {id: 2, text: 'CDEM'},
  {id: 3, text: 'CADO'},
  {id: 4, text: 'xScale'},
];
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
    text_1: '数值分析系统',
    text_2: 'CDEM数值分析系统',
    text_3: '了解更多',
    text_4: '中国科学院力学研究所历时25年自主研发，基于广义拉格朗日方程理论框架，将连续介质数值方法与非连续介质数值方法进行深度融合，在能量层面实现了有限元、离散元及无网格算法的统一，可实现静动载荷下地质体及人工材料渐进破坏过程的模拟。',
    img: con_2
  },
  {
    id: 1,
    text_1: 'XXXXXXXXXX分析系统',
    text_2: 'CADO',
    text_3: '了解更多',
    text_4: 'CADOXXXXXX系统一般分为二维和三维系统。系统内表达的任何设计都变成了几何图形，所依赖的数学模型是几何模型，系统记录了这些图素的几何特征。二维CAD系统一般由图形的输入与编辑、硬件接口、数据接口和二次开发工具等几部分组成。',
    img: con_3
  },
  {
    id: 1,
    text_1: '非线性力学国家重点实验室',
    text_2: 'xScale跨尺度力学计算软件',
    text_3: '了解更多',
    text_4: 'xScale构建了自主的前端界面+后端计算基础框架，前端界面包括前处理、计算调用、后处理、可视化功能；后端计算包括多个不同尺度的计算力学模块，针对高铁、海洋、航空、盾构等工程结构开展了广泛应用，面向具体需求，可实现高度定制化的应用开发。',
    img: con_4
  },
];
const honorArr = [
  {id: 1, text: '中国空气动力学会科学技术一等奖'},
  {id: 2, text: '中国空气动力学会科学技术一等奖'},
  {id: 3, text: '央企先进集体'},
  {id: 4, text: '国家高新技术企业'},
  {id: 5, text: 'XXXXXXXX'},
];
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
const container = ref(null);
const handleLeft = () => {
  if (offserX.value === 0) return
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
const handleBannerBtn = (idx) => {
  router.push(`/page2?idx=${idx}`)
};
const handleMore = () => {
  router.push(`/page2?idx=1`)
};
onMounted(() => {
  container.value.scrollTop = 0;
});
</script>

<template>
  <div ref="container" class="container">
    <div class="banner-wrapper">
      <div class="banner">
        <img src="../assets/img/banner_1.png" alt="">
      </div>
      <div class="banner_text">
        <img src="../assets/img/banner_1_text.png" alt="">
      </div>
      <div class="logo_btn">
        <div class="logo_btn1">
          <img style="width: 100%;" src="../assets/img/logo.png" alt="">
        </div>
        <div class="btn" @click="handleBannerBtn(index)" v-for="(item, index) in logoBtnArr" :key="item.id">
          <div>{{ item.text }}</div>
          <div>+</div>
        </div>
      </div>
      <div class="learn_more" @click="handleMore">
        <div class="jump_wrapper">
          <div>了解更多</div>
          <div class="more_arrow">
            <img src="../assets/img/jiantou.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="choose_us">
      <div class="us_l">
        <div>WHY CHOOSE US</div>
        <div>选择我们的四大理由</div>
      </div>
      <div class="us_r">
        <div class="tip">
          <div>
            <img src="../assets/img/tip_1.svg" alt="">
          </div>
          <div class="tip_text">提升质量</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_2.svg" alt="">
          </div>
          <div class="tip_text">降低成本</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_3.svg" alt="">
          </div>
          <div class="tip_text">缩短周期</div>
        </div>
        <div class="tip">
          <div>
            <img src="../assets/img/tip_4.svg" alt="">
          </div>
          <div class="tip_text">创新技术</div>
        </div>
      </div>
    </div>
    <div class="product-container">
      <div class="pro_one">
        <div class="pro_text_l">
          <div class="text_1">PRODUCTS</div>
          <div class="text_2">产品中心</div>
        </div>
        <div class="pro_text_r">
          <div class="text_x">XXXXXXXXXXXXXXXXXXXXXXX</div>
          <div class="text_x">XXXXXXXXXXXXXXXXXX</div>
          <div class="text_cn">独立自主  全过程分析  多场耦合  快速高效协同  应用场景广泛</div>
        </div>
      </div>
      <div class="pro_two">
        <div @click="handleLeft" class="arrow_l">
          <div style="width: 48px; height: 48px;" class="arrow_icon_l">
          </div>
        </div>
        <div ref="fa" class="center">
          <div ref="son" class="over_container" :style="{ transform: transformStyle }">
            <div style="display: flex;">
              <div class="content" v-for="item in proArr" :key="item.id">
                <div class="con_1">{{ item.text_1 }}</div>
                <div class="con_2">{{ item.text_2 }}</div>
                <div class="con_3" @click="handleMore">
                  {{ item.text_3 }}
                  <img src="../assets/img/sj.svg" alt="">
                </div>
                <div class="con_4">{{ item.text_4 }}</div>
                <div class="con_5">
                  <img style="width:300px;" :src="item.img" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div @click="handleRight" class="arrow_r">
          <div style="width: 48px; height: 48px;" class="arrow_icon">
          </div>
        </div>
      </div>
    </div>
    <div class="pro_three">
      <div class="pro_text_l">
        <div class="text_1">HONOR&AWARDS</div>
        <div class="text_2">荣誉资质</div>
      </div>
      <div class="pro_text_r">
        <div class="text_x">XXXXXXXXXXXXXXXXXXXXXXX</div>
        <div class="text_x">XXXXXXXXXXXXXXXXXX</div>
        <div class="text_cn">独立自主  全过程分析  多场耦合  快速高效协同  应用场景广泛</div>
      </div>
    </div>
    <div class="pro_four">
      <div class="honor_wrapper">
        <div class="honor_text" @click="handleHonor(index)" :class="{active: activeNum === index}" v-for="(item, index) in honorArr" :key="item.id">{{ item.text }}</div>
      </div>
      <div class="honor_pic">
        <div class="pic_l"></div>
        <div class="pic_r">
          <div class="pic_r_1"></div>
          <div class="pic_r_2">
            <div>XXXXXXXXXXXXXXXXXXXXXX</div>
            <div>XXXXXXXXXXXXXXXXXXXXXX</div>
            <div>XXXXXXXXXXXXXXXXXXXXXX</div>
            <div>XXXXXXXXXXXXXXXXXXXXXX</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pro_five">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-timeline) {
  height: 100%;
  padding-left: 0;
}
:deep(.el-timeline-item__content) {
  color: #999;
}
.product-container {
  width: 100%;
  height: 1000px;
  background: url('../assets/img/product_center_bg.svg') no-repeat;
  //background-size: 100% 100%;
  background-size: cover;
  padding-top: 140px;
  //padding-bottom: 180px;
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
    border-right: 1px solid #D8D8D8;
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
  padding: 195px 45px 0;
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
      flex: 1;
      //width: 380px;
      flex-shrink: 0;
      text-align: center;
      height: 550px;
      padding: 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
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
      }
      .con_4 {
        font-size: 14px;
        color: #232323;
        margin-bottom: 35px;
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
  padding: 0 20%;
  box-sizing: border-box;
  height: 90px;
  margin: 150px auto 0;
  display: flex;
  .pro_text_l {
    flex: 1;
    position: relative;
    border-right: 1px solid #D8D8D8;
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
  margin-top: 50px;
  padding: 150px 10%;
  height: 700px;
  box-sizing: border-box;
  background: url('../assets/img/develop_bg.png') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  .honor_wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
    background: url("../assets/img/honor_1.png") no-repeat;
    background-size: cover;
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
    white-space: nowrap;
    .pic_r_1 {
      width: 40%;
    }
    .pic_r_2 {
      width: 60%;
      padding: 90px 15px 90px 82px;
      box-sizing: border-box;
      white-space: nowrap;
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
  padding: 150px 20%;
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
    flex: 1.5;
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
    animation: jumping 0.8s infinite;
  }
}
.container {
  width: 100%;
  .banner-wrapper {
    position: relative;
  }
  .logo_btn {
    display: flex;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);
    .logo_btn1 {
      //width: 312px;
      flex: 1.5;
      min-width: 220px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      font-size: 45px;
      font-family: yixinchongfenghao, sans-serif;
      color: #7E7E7E;
    }
    .btn {
      flex: 1;
      min-width: 180px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(255,255,255,0.6);
      position: relative;
      cursor: pointer;
      &:hover {
        background: #5B95F8;
        color: #fff;
      }
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 150px;
        background: transparent;
        top: 0;
        right: 0;
      }
      //border-right: 1px solid #FFFFFF;
    }
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
