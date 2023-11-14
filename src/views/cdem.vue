<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Header from '@/components/Header.vue';
import TitleWrapper from "@/components/TitleWrapper.vue";
import TransWrapper from "@/components/TransWrapper.vue";
import SwiperAwards from "@/components/SwiperAwards.vue";
import soft_1 from '@/assets/img/cdem_soft_1.png';
import soft_2 from '@/assets/img/cdem_soft_2.png';
import soft_3 from '@/assets/img/cdem_soft_3.png';
import soft_4 from '@/assets/img/cdem_soft_4.png';
import cdem_feature_1 from '@/assets/img/cdem_feature_1.svg';
import cdem_feature_2 from '@/assets/img/cdem_feature_2.svg';
import cdem_feature_3 from '@/assets/img/cdem_feature_3.svg';
import cdem_feature_4 from '@/assets/img/cdem_feature_4.svg';
import cdem_feature_5 from '@/assets/img/cdem_feature_4.svg';
import cdem_honor_1 from '@/assets/img/cdem_honor_1.png';
import cdem_honor_2 from '@/assets/img/cdem_honor_2.png';
import cdem_honor_3 from '@/assets/img/cdem_honor_3.png';
import cdem_honor_4 from '@/assets/img/cdem_honor_4.png';
import cdem_honor_5 from '@/assets/img/cdem_honor_5.png';
import cdem_honor_6 from '@/assets/img/cdem_honor_6.png';
import cdem_honor_7 from '@/assets/img/cdem_honor_7.png';
import cdem_honor_8 from '@/assets/img/cdem_honor_8.png';
import cdem_honor_9 from '@/assets/img/cdem_honor_9.png';
import cdem_honor_10 from '@/assets/img/cdem_honor_10.png';


const cfdArr = [
  {id: 1, text1: '块体模块', text2: '有限元与块体离散元的深度融合，能模拟静、动载荷下地质体及人工材料弹性、塑性、损伤、断裂、破碎、运动、堆积的全过程模拟；通过块体边界及块体内部的断裂实现固体材料渐进破坏过程的模拟，支持渗流（裂隙/孔隙）、温度、应力、破裂等的交互耦合；内置锚杆、锚索、桩、连接杆、耦合面等多种结构单元；内置21种单元本构，12种接触本构。采用脚本语言进行求解控制，内置接口函数500余条，可对计算过程进行精确控制。'},
  {id: 2, text1: '粒子模块', text2: '以颗粒离散元算法为主，包含PCMM、MPM、PFLY等众多广义粒子算法。借助颗粒离散元算法可分析地质体的损伤破裂过程及松散介质的运动堆积过程，借助无网格算法可准确模拟连续介质的大变形过程，借助PFLY算法可分析破片群的高速飞散及对目标的打击过程。该模块采用脚本语言进行求解控制，支持与块体模块的无缝对接，实现块体与颗粒的耦合计算，同时支持块体向颗粒的转化。'},
];
const softArr = [
  {id:1, text: '边坡失稳破坏过程模拟', img: soft_1},
  {id:2, text: '地质灾害对人居环境影响过程模拟', img: soft_2},
  {id:3, text: '露天矿三维台阶爆破过程模拟', img: soft_3},
  {id:4, text: '圆柱体爆破漏斗模拟', img: soft_4},
];

const timeArr = ref([
  {id: 1, text1: '2016', text2: '科学技术奖一等奖',active: false},
  {id: 2, text1: '2017', text2: '科技进步奖三等奖', text3: '科技进步奖一等奖',  active: false},
  {id: 3, text1: '2018', text2: '科技进步奖二等奖', text3: '冶金科学技术奖二等奖', text4: '科技进步奖一等奖', active: false},
  {id: 4, text1: '2022', text2: '科技进步奖二等奖', text3: '自然科学奖二等奖', text4: '科学技术奖一等奖', active: false},
  {id: 5, text1: '2023', text2: '地质工程技术创新成果', active: true},
]);
const awardIndex = ref(5);
const timeAwardsArr = ref({
  1: [
    {
      id: 1, text1: '2016年', text2: '深长隧道重大突涌水灾害预测预警与风险控制关键技术', text3: '科学技术奖一等奖', text4: '山东省科技厅', url: cdem_honor_10,
    }
  ],
  2: [
    {
      id: 1, text1: '2017年', text2: '爆破诱发周边岩体损伤破裂及边坡失稳的机理与评价方法研究', text3: '科技进步奖三等奖', text4: '中国冶金矿山企业协会', url: cdem_honor_9,
    },
    {
      id: 2, text1: '2017年', text2: '矿山边坡滑坡风险评估与合成孔径雷达监测预警技术研究', text3: '科技进步奖一等奖', text4: '中国职业安全健康协会', url: cdem_honor_8,
    }
  ],
  3: [
    {
      id: 1, text1: '2018年', text2: '基于物联网技术的工程、地质自动化安全监测产业链及工程应用', text3: '科技进步奖二等奖', text4: '河北省科技厅', url: cdem_honor_7,
    },
    {
      id: 2, text1: '2018年', text2: '基于采选系统能耗优化的爆破关键技术研究与实践', text3: '冶金科学技术奖二等奖', text4: '中国钢铁工业协会、中国金属学会',
      url: cdem_honor_6,
    },
    {
      id: 3, text1: '2018年', text2: '露天铁矿矿石破磨成本优化与工程示范', text3: '科技进步奖一等奖', text4: '中国冶金矿山企业协会', url: cdem_honor_5,
    }
  ],
  4: [
    {
      id: 1, text1: '2022年', text2: '山地红层区域工程灾变防控关键技术研发与应用', text3: '科技进步奖二等奖', text4: '中国产学研合作促进会', url: cdem_honor_4,
    },
    {
      id: 2, text1: '2022年', text2: '连续介质力学框架的岩体非连续计算理论', text3: '自然科学奖二等奖', text4: '中国岩石力学与工程学会', url: cdem_honor_3,
    },
    {
      id: 3, text1: '2022年', text2: '高陡边坡地震稳定性分析与支挡工程抗震设计关键技术', text3: '科学技术奖一等奖', text4: '中国铁路工程集团有限公司', url: cdem_honor_2,
    }
  ],
  5: [
    {
      id: 1, text1: '2023年', text2: '地质体连续-非连续数值分析方法CDEM', text3: '地质工程技术创新成果', text4: '中国岩石力学与工程学会', url: cdem_honor_1,
    }
  ],
});
const handleYear = (idx) => {
  timeArr.value.forEach((item, index) => {
    item.active = index === idx;
  });
  awardIndex.value = idx + 1;
};
const featureArr = [
  {id:1, text: '独立自主', content: '从底层开发，完全独立自主知识产权', img: cdem_feature_1},
  {id:2, text: '全过程分析', content: '可模拟爆炸、动载、地震、开挖、静载等作用下固体材料的弹性、塑性、损伤、破裂，以及破碎后材料的碰撞、飞散、堆积全过程', img: cdem_feature_2},
  {id:3, text: '多场耦合', content: '支持应力、温度、渗流、破裂等多场的交互耦合', img: cdem_feature_3},
  {id:4, text: '快速高效协同', content: '采用CPU/GPU异构并行加速，计算效率是同类软件的20倍以上', img: cdem_feature_4},
  {id:5, text: '应用场景广泛', content: '岩土、爆炸冲击、采矿、隧道、油气、水利、地质、结构、机械等多个领域', img: cdem_feature_5},
  {id:6, text: '', content: '', img: ''},
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
const timeTextRef = ref(null);
const handleLeft = () => {
  if (offserX.value >= 0) return
  offserX.value = offserX.value + stepR.value
};
const handleRight = () => {
  console.log(fa?.value?.clientWidth, Math.abs(offserX.value), son?.value?.clientWidth)
  const isOverFlow = fa?.value?.clientWidth + Math.abs(offserX.value) > son?.value?.clientWidth + 20;
  if (isOverFlow) return
  offserX.value = offserX.value + stepL.value
};

onMounted(() => {
  container.value.scrollTop = 0;
  offserX.value = fa.value.clientWidth - son.value.clientWidth;
});
</script>

<template>
  <div ref="container" class="pc_container">
    <Header />
    <div class="banner-wrapper pt-[80px]">
      <div class="banner">
        <img src="../assets/img/banner_cdem.png" alt="">
      </div>
      <div class="banner_text">
        <img src="../assets/img/banner_cdem_text.svg" alt="">
      </div>
      <div class="banner_text_2">
        <img src="../assets/img/cdem.svg" alt="">
      </div>
    </div>
    <div class="introduce">
      <div style="position: relative; height: 370px;">
        <div class="introduce_center">
          <div class="top_text">
            <div class="text_1">About CDEM</div>
            <div class="text_2">CDEM简介</div>
          </div>
          <div class="content">
            <div class="con_l">
              该软件由中国科学院力学研究所历时25年自主研发，基于广义拉格朗日方程理论框架，将连续介质数值方法与非连续介质数值方法进行深度融合，在能量层面实现了有限元、离散元及无网格算法的统一，可实现静动载荷下地质体及人工材料渐进破坏过程的模拟。借助该软件，能模拟流-固-热多场耦合下固体材料的弹性、塑性、损伤、破裂、破碎、运动、碰撞、流动及堆积全过程。
            </div>
            <div class="con_r">
              <img src="../assets/img/cdem_introduce_1.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <title-wrapper :text1="'FEATURES'" :text2="'功能特色'"></title-wrapper>
      <div class="mt-[60px] mb-[100px] px-[10%] mx-auto feature_wrapper">
        <div class="feature_content">
          <div class="flex">
            <div class="flex-1 flex flex-col item relative pt-[40px] pl-[80px] pr-[15px] pb-[28px]" v-for="item in featureArr.slice(0, 3)" :key="item.id">
              <p class="text-[#333] border-box font-semibold text-[16px]">{{ item.text }}</p>
              <p class="text-[#666] pr-[30px] border-box text-[15px] mt-2.5">{{ item.content }}</p>
              <div class="absolute bottom-[15px] right-[50px] item_img w-[36px] h-[36px]">
                <img class="w-full h-full" :src="item.img" alt="">
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex-1 flex item item_2 flex-col relative pt-[40px] pl-[80px] pr-[15px] pb-[28px]" :class="{'empty': item.id === 6}" v-for="item in featureArr.slice(3, 6)" :key="item.id">
              <p class="text-[#333] border-box font-semibold text-[16px]">{{ item.text }}</p>
              <p class="text-[#666] pr-[30px] border-box text-[15px] mt-2.5">{{ item.content }}</p>
              <div v-if="item.id !== 6" class="z-[1] absolute bottom-[15px] right-[50px] item_img w-[36px] h-[36px]">
                <img :src="item.img" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cfd_wrapper">
      <div class="pro_text_l">
        <div class="text_1">FUNCTIONAL MODULE</div>
        <div class="text_2">功能模块</div>
      </div>
    </div>
    <div class="cfd_introduce">
      <div style="display: flex;justify-content: center;">
        <div class="cfd_content" v-for="item in cfdArr" :key="item.id">
          <div class="content_l">{{ item.text1 }}</div>
          <div class="content_r">{{ item.text2 }}</div>
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

    <div class="award_wrapper">
      <div class="pro_text_l">
        <div class="text_1">HONOR&AWARDS</div>
        <div class="text_2">获奖情况</div>
      </div>
    </div>

    <div class="time_wrapper">
      <div class="arrow_l">
        <div @click="handleLeft" class="arrow_dot arrow_dot_l"></div>
      </div>
      <div ref="fa" class="center">
        <div class="center_line"></div>
        <div ref="son" class="over_container" :style="{ transform: transformStyle }">
          <div class="flex">
            <div class="time_text" v-for="(item, index) in timeArr" :key="item.id" @click="handleYear(index)">
              <div class="time_year">
                <div class="text-[14px] px-2.5 text-[#999]" :class="{'active': item?.active}">{{item.text1}}</div>
              </div>
              <div class="line">
                <div class="dot" :class="{'active': item?.active}"></div>
              </div>
              <div class="time_detail">
                <div class="text-[14px] px-2.5 text-[#999]" :class="{'active': item?.active}">{{item.text2}}</div>
                <div v-if="item.text3" class="text-[14px] px-2.5 text-[#999]"  :class="{'active': item?.active}">{{item.text3}}</div>
                <div v-if="item.text4" class="text-[14px] px-2.5 text-[#999]" :class="{'active': item?.active}">{{item.text4}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow_r">
        <div @click="handleRight" class="arrow_dot arrow_dot_r"></div>
      </div>
    </div>
    <div v-if="timeAwardsArr[awardIndex].length === 1" class="honor_details" v-for="(item, index) in timeAwardsArr[awardIndex]" :key="index">
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
    <div v-else class="carousel">
      <swiper-awards :array="timeAwardsArr[awardIndex]"></swiper-awards>
    </div>
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
      &.empty:hover {
        background: none;
      }
    }
  }
}
.carousel {
  margin: 0 20% 120px 20%;
  height: 310px;
  box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
  box-sizing: border-box;
}
.honor_details {
  margin: 0 20% 120px 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 240px;
  padding: 20px;
  box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
  box-sizing: border-box;
  .honor_pic {
    width: 400px;
    height: 270px;
    font-size: 0;
    border: 1px dashed #ccc;
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
      color: #232323;
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
      color: #232323;
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
    display: flex;
    justify-content: center;
    align-items: center;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      border: 1px solid #ccc;
      &.active {
        border: 1px solid #0055D5;
      }
    }
  }
  .arrow_l, .arrow_r {
    width: 50px;
    height: 120px;
    .arrow_dot {
      cursor: pointer;
      margin-top: 36px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      line-height: 20px;
      text-align: center;
      font-weight: bold;
      color: #ccc;
      background: #fff;
      border: 1px solid #ccc;
      &.arrow_dot_l {
        background: url('../assets/img/arrow_dot_left.svg') no-repeat;
        background-size: cover;
      }
      &.arrow_dot_r {
        background: url('../assets/img/arrow_dot_right.svg') no-repeat;
        background-size: cover;
      }
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
    width: 190px;
    height: 130px;
    display: flex;
    flex-direction: column;
    text-align: center;
    .time_year {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 44px;
      padding-bottom: 10px;
      box-sizing: border-box;
      .active {
        color: #0055D5;
      }
    }
    .time_detail {
      //display: flex;
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
  padding: 0 15% 120px 15%;
  .cfd_content {
    flex: 1;
    padding: 30px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
    display: flex;
    flex-direction: column;
    &:hover {
      background: #0055D5;
    }
    &:hover .content_l {
      color: #fff;
    }
    &:hover .content_r {
      color: #fff;
    }
    &:not(:last-child) {
      margin-right: 40px;
    }
    .content_l {
      text-align: left;
      color: #181818;
      font-size: 16px;
      font-weight: 600;
    }
    .content_r {
      margin-top: 20px;
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
      //border: 1px dashed #ccc;
      margin-left: 70px;
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
    width: 580px;
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
