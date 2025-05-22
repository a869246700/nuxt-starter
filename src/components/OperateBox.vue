<template>
  <div class="operate-box">
    <ElButton type="success" @click="handleClick('/dashboard')">
      dashboard
    </ElButton>
    <ElButton type="success" @click="handleClick('/demo1')">demo1</ElButton>
    <ElButton type="success" @click="handleClick('/demo2')">demo2</ElButton>

    <ElButton type="primary" @click="handleToggleLoginStatus()">
      {{ isLogin ? '退出' : '登录' }}
    </ElButton>

    <ElIcon><ArrowDownIcon /></ElIcon>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown as ArrowDownIcon } from '@element-plus/icons-vue';

const handleClick = (path: string) => {
  navigateTo(path);
};

const isLogin = useCookie('isLogin', {
  default: () => false,
});
const handleToggleLoginStatus = () => {
  isLogin.value = !isLogin.value;

  if (isLogin.value) {
    navigateTo('/dashboard');
  } else {
    navigateTo('/');
  }
};
</script>

<style lang="scss" scoped>
.operate-box {
  display: flex;
}
</style>
