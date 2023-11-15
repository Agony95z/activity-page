<template>
  <el-drawer v-model="isShow" size="50%" :with-header="false" @close="handleClose">
    <div class="mt-5"></div>
    <div class="text-center font-semibold text-[#232323] h-[50px] flex justify-center items-center menu_title px-5 relative" v-for="(item, index) in logoBtnArr" :key="item.id" @click="handleMenu(index)">{{ item.text }}</div>
  </el-drawer>
</template>

<script lang="ts" setup>
import {computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits();
const isShow = computed({
  get() {
    return props.visible;
  },
  set(newVal) {
    return emit("update:visible", newVal);
  }
});
const router = useRouter();
const logoBtnArr = [
  {id: 1, text: 'OpenCFD'},
  {id: 2, text: 'CDEM'},
  {id: 3, text: 'CADO'},
  {id: 4, text: 'SiMech'},
];
const handleClose = () => {
  emit('close', false);
};
const handleMenu = (idx) => {
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
};
</script>


<style scoped lang="scss">
.menu_title {
  &:after {
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    background: #e7e7e8;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
