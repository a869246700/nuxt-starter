<template>
  <div>
    <h1>Hello dashboard</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // 验证是否登录
  validate: () => {
    const random = Math.ceil(Math.random() * 100);
    return random >= 50; // 如果返回false，则会显示404页面
  },
});
</script>

<style lang="scss" scoped></style>
