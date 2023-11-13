<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Header from '@/components/Header.vue';
import TitleWrapper from "@/components/TitleWrapper.vue";
import TransWrapper from "@/components/TransWrapper.vue";
import soft_1 from '@/assets/img/soft_1.png';
import soft_2 from '@/assets/img/soft_2.png';
import soft_3 from '@/assets/img/soft_3.png';
import soft_4 from '@/assets/img/soft_4.png';
import cfd_feature_1 from '@/assets/img/cfd_feature_1.svg';
import cfd_feature_2 from '@/assets/img/cfd_feature_2.svg';
import honor_1 from '@/assets/img/honor_1.png';
import honor_2 from '@/assets/img/honor_2.png';
import honor_3 from '@/assets/img/honor_3.png';
import honor_4 from '@/assets/img/honor_4.png';
import honor_5 from '@/assets/img/honor_5.png';


const cfdArr = [
  {id: 1, text1: 'OpenCFD-SC', text2: '高精度有限差分求解器，主要用于湍流等复杂流动的直接数值模拟(DNS)、大涡模拟(LES)等高分辨率计算'},
  {id: 2, text1: 'OpenCFD-EC', text2: '多块结构网格有限体积求解器，主要用于工程复杂流场计算'},
  {id: 3, text1: 'OpenCFD-Comb', text2: '化学反应流动高精度差分求解器，主要用于化学反应流场的高分辨率计算'},
  {id: 4, text1: 'OpenCFD-SCU', text2: 'OpenCFD-SC的GPU版。 支持上万块GPU卡的大规模并行'},
];
const softArr = [
  {id:1, text: 'Mach 2.9, 24° Compression Corner', img: soft_1},
  {id:2, text: 'DNS of turbulent/ transition flow over ONEAR-M6 wing', img: soft_2},
  {id:3, text: 'DNS of RM instability', img: soft_3},
  {id:4, text: 'DNS of shock-wave turbulent layer interaction', img: soft_4},
];

const timeArr = ref([
  {id: 1, text1: '2013', text2: '陕西省科技三等奖', text3: '中国科学院超级计算“最佳应用奖”', active: false},
  {id: 2, text1: '2018', text2: '陕西省科学技术二等奖', text3: '天津超算“天河应用创新优秀奖”', active: false},
  {id: 3, text1: '2019', text2: '“中国科学院信息化优秀案例”奖', active: false},
  {id: 4, text1: '2020', text2: '广州超算“天河之星” 优秀应用奖', active: false},
  {id: 5, text1: '2022', text2: '中国空气动力学会科学技术一等奖(自然科学类)', active: true},
]);
const awardIndex = ref(5);
const timeAwardsArr = ref({
  1: [
    {
      id: 1, text1: '2013年', text2: '陕西省科技二等奖', text3: '科学技术奖一等奖', text4: '中国科学院超级计算“佳应用奖”', url: honor_5,
    }
  ],
  2: [
    {
      id: 1, text1: '2018年', text2: '陕西省科技二等奖', text3: '天津超算“天河应用创新优秀奖”', url: honor_4,
    }
  ],
  3: [
    {
      id: 1, text1: '2019年', text2: '“中国科学院信息化优秀案例”奖', url: honor_3,
    }
  ],
  4: [
    {
      id: 1, text1: '2020年', text2: '广州超算“天河之星”优秀应用奖', url: honor_2,
    }
  ],
  5: [
    {
      id: 1, text1: '2022年', text2: '中国空气动力学会科学技术一等奖(自然科学类)', text3: '中国空气动力学会是国家一级学会，也是国内唯一一家空气动力学专业的社会团体。学会于1980年由中国科协批准成立，并报原国防科工委批准备案，于1991年7月在民政部登记注册。1997年根据中办、国务院有关文件要求，明确学会挂靠单位是中国空气动力研究与发展中心，业务主管单位是中国科协，登记管理单位是民政部。', url: honor_1,
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
  {id:1, text: '精度高、计算分辨率高', content: '最高计算精度达8阶', content2: '获得高时空分辨率流场', content3: '用于流动机理深入研究等', img: cfd_feature_1},
  {id:2, text: '并行扩展性强', content: '天河2上实现24万CPU核心并行计算', content2: '神威•太湖之光上实现300余万核心异构并行计算', content3: '中科先导1号上实现2万余块DCU卡大规模异构计算', img: cfd_feature_2},
/*  {id:3, text: '工程应用和基础研究结合', content: '既可应用于工程材料和结构的力学性能分析，也可用于基础力学机理和算法研究', img: ''},
  {id:4, text: '灵活的可扩展性', content: '可针对具体行业需求进行定制化开发，也可通过面向对象开发进行功能扩展', img: ''},*/
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
  if (offserX.value >= 0) return
  offserX.value = offserX.value + stepR.value
};
const handleRight = () => {
  const isOverFlow = fa?.value?.clientWidth + Math.abs(offserX.value) > son?.value?.clientWidth
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
    <div class="banner-wrapper">
      <div class="banner">
        <img src="../assets/img/banner_2.png" alt="">
      </div>
      <div class="banner_text">
        <img src="../assets/img/banner_2_text.svg" alt="">
      </div>
      <div class="banner_text_2">
        <img src="../assets/img/faceid.svg" alt="">
      </div>
    </div>
    <div class="introduce">
      <div style="position: relative; height: 370px;">
        <div class="introduce_center">
          <div class="top_text">
            <div class="text_1">About OpenCFD</div>
            <div class="text_2">OpenCFD简介</div>
          </div>
          <div class="content">
            <div class="con_l">
              OpenCFD软件是中国科学院力学研究所李新亮研究员课题组开发的一套高精度计算流体力学软件。该软件集成了课题组自行开发的系列高精度差分格式及当前流行的多种高精度差分格式，其最高计算精度最高可达7阶，主要用于湍流及燃烧直接数值模拟、大涡模拟等高分辨率模拟。此外，该软件具有非常强的并行性能，可支持上百亿网格，数十万CPU核心以及数万块GPU卡超大规模异构并行。   OpenCFD软件是当前应用最为广泛的可压缩湍流高分辨率数值模拟软件之一，目前已得到国内外200余家用户使用。获2022年度中国空气动力学会科学技术一等奖（自然科学类），获得陕西省科学技术奖二等奖（2018）三等奖（2013）等奖项。
            </div>
            <div class="con_r">
              <img src="../assets/img/introduce_1.png" alt="">
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
              <p class="text-[#666] pr-[80px] border-box text-[14px] mt-2.5">{{ item.content2 }}</p>
              <p class="text-[#666] pr-[80px] border-box text-[14px] mt-2.5">{{ item.content3 }}</p>
              <div class="absolute bottom-[28px] right-[30px] item_img w-[36px] h-[36px]">
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
          <div style="display: flex;">
            <div class="time_text" v-for="(item, index) in timeArr" :key="item.id" @click="handleYear(index)">
              <div class="time_year">
                <div style="padding: 0 10px;" :class="{'active': item?.active}">{{item.text1}}</div>
              </div>
              <div class="line">
                <div class="dot" :class="{'active': item?.active}"></div>
              </div>
              <div class="time_detail">
                <div style="padding: 0 10px;" :class="{'active': item?.active}">{{item.text2}}</div>
                <div v-if="item.text3" style="padding: 0 10px;" :class="{'active': item?.active}">{{item.text3}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow_r">
        <div @click="handleRight" class="arrow_dot arrow_dot_r"></div>
      </div>
    </div>

    <div class="honor_details" v-for="(item, index) in timeAwardsArr[awardIndex]" :key="index">
      <div class="honor_pic">
        <img v-if="awardIndex < 3" class="w-[600px] h-[300px]" :src="item.url" alt="">
        <img v-else class="w-[420px] h-[300px]" :src="item.url" alt="">
      </div>
      <div class="honor_content">
        <div class="honor_year">{{ item.text1 }}</div>
        <div class="honor_award">{{ item.text2 }}</div>
        <div v-if="item.text3" class="honor_text">{{ item.text3 }}</div>
      </div>
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
     /* &:after {
        content: '';
        position: absolute;
        width: 80%;
        height: 1px;
        left: 50%;
        bottom: 0;
        background: #e7e7e7;
        transform: translateX(-50%);
      }*/
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
  height: 340px;
  padding: 20px;
  box-shadow: 0 0 20px 0 rgba(35,35,35,0.06);
  box-sizing: border-box;
  .honor_pic {
    //width: 268px;
    //height: 178px;
    border: 1px dashed #ccc;
    font-size: 0;
    img {
      //width: 100%;
      //height: 100%;
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
      cursor: pointer;
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
      margin-top: 22px;
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
    width: 200px;
    height: 160px;
    display: flex;
    flex-direction: column;
    text-align: center;
    //background: yellow;
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
      //justify-content: center;
      //align-items: flex-start;
      height: 69px;
      padding-top: 10px;
      box-sizing: border-box;
      .active {
        color: #0055D5;
      }
    }
  }
}
/*.software_content {
  margin: 120px 0;
  padding: 0 10%;
  box-sizing: border-box;
  .soft_wrap {
    display: flex;
    justify-content: center;
    .soft_item {
      //flex: 1;
      width: 362px;
      &:not(:last-child) {
        margin-right: 120px;
      }
    }
    .img_wrap {
      font-size: 0;
      border: 1px dashed #ccc;
    }
    .year {
      font-size: 18px;
      color: #343434;
      margin: 24px 0;
    }
    .detail {
      font-size: 24px;
      color: #181818;
    }
  }
}*/
.cfd_introduce {
  margin: 120px 0 0 0;
  padding: 0 10% 180px 10%;
  .cfd_content {
    width: 320px;
    height: 242px;
    padding: 25px;
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
      text-align: center;
      color: #181818;
      font-size: 18px;
    }
    .content_r {
      margin-top: 40px;
      font-size: 18px;
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
    width: 80%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
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
