<template>
  <el-timeline>
    <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity?.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>

const activities = [
  {
    content: '2023',
    timestamp: '',
    type: '',
    hollow: true,
  },
  {
    content: '1月',
    timestamp: '',
    type: '',
    hollow: true,
  },
  {
    content: '2月',
    timestamp: '',
    type: '',
    hollow: true,
  },
  {
    content: '3月',
    timestamp: '',
    type: 'primary',
    hollow: true,
  },
  {
    content: '4月',
    timestamp: '',
    type: '',
    hollow: true,
  },
  {
    content: '5月',
    timestamp: '',
    type: '',
    hollow: true,
  },
  {
    content: '6月',
    timestamp: '',
    type: '',
    hollow: true,
  },
  {
    content: '7月',
    timestamp: '',
    type: '',
    hollow: true,
  },
]
</script>
