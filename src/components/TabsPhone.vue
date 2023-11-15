<template>
  <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in tabsArr" :key="item.id" :label="item.label" :name="item.name">
      <div class="mb-5">
        <p>{{ item.text }}</p>
        <img class="my-2.5" :src="item.img" alt="">
        <div @click="handleMore(index)" class="flex justify-center text-[#0055D5]">
          了解更多
          <img class="ml-1.5" src="../assets/img/sj.svg" alt="">
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import type { TabsPaneContext } from 'element-plus';
import con_1 from '@/assets/img/con_1.png';
import con_2 from '@/assets/img/con_2.png';
import con_3 from '@/assets/img/con_3.png';
import con_4 from '@/assets/img/con_4.png';

const router = useRouter();
const tabsArr = [
  {id:1, label: 'OpenCFD', text: 'OpenCFD是中国科学院力学研究所李新亮研究员课题组开发的一套高精度计算流体力学软件。该软件集成了课题组自行开发的系列高精度差分格式及当前流行的多种高精度差分格式，高计算精度可达7阶，主要用于湍流及燃烧直接数值模拟、大涡模拟等高分辨率模拟。', img: con_1, name: 'first', more: '了解更多'},
  {id:2, label: 'CDEM', text: '中国科学院力学研究所历时25年自主研发，基于广义拉格朗日方程理论框架，将连续介质数值方法与非连续介质数值方法进行深度融合，在能量层面实现了有限元、离散元及无网格算法的统一，可实现静动载荷下地质体及人工材料渐进破坏过程的模拟。', img: con_2, name: 'second', more: '了解更多'},
  {id:3, label: 'CADO', text: 'CADO系统一般分为二维和三维系统。系统内表达的任何设计都变成了几何图形，所依赖的数学模型是几何模型，系统记录了这些图素的几何特征。二维CAD系统一般由图形的输入与编辑、硬件接口、数据接口和二次开发工具等几部分组成。', img: con_3, name: 'third', more: '了解更多'},
  {id:4, label: 'SiMech', text: 'SiMech构建了自主的前端界面+后端计算基础框架，前端界面包括前处理、计算调用、后处理、可视化功能；后端计算包括多个不同尺度的计算力学模块，针对高铁、海洋、航空、盾构等工程结构开展了广泛应用，面向具体需求，可实现高度定制化的应用开发。', img: con_4, name: 'fourth', more: '了解更多'},
];
const activeName = ref('first');
const handleMore = (idx) => {
  switch (idx) {
    case 0: router.push(`/opencfd?idx=${idx}`);
      break;
    case 1: router.push(`/cdem?idx=${idx}`);
      break;
    case 2: router.push(`/cado?idx=${idx}`);
      break;
    case 3: router.push(`/simech?idx=${idx}`);
      break;
    default: router.push('/');
  }
  // router.push(`/opencfd?idx=0`)
};

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss">
.tabs > .el-tabs {
  width: 100%;
  .el-tabs__header, .el-tabs__nav-wrap {
    width: 100%;
  }
  .el-tabs__nav {
    width: 100%;
    justify-content: space-between;
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs__item.is-active {
    color: #232323;
    font-weight: 600;
  }
  .el-tabs__active-bar {
    background-color: #0055D5;
  }
  .el-tabs__content {
    padding: 30px 0 0;
    font-size: 12px;
    color: #232323;
    font-weight: 400;
    line-height: 22px;

  }
}
.tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
