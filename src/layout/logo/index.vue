<script setup lang="ts"></script>

<template>
  <div class="layoutLogo">
    <div class="logoStyle">
      <span class="first big">Pure</span>
      <span class="big">Chat</span>
      <span class="last">beta</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layoutLogo {
  text-align: center;
  height: 15%;
  padding: 5px;

  .big {
    font-size: 40px;
  }
}

.first {
  color: $base-color;
}

.last {
  font-size: 15px;
}

.logoStyle {
  border-bottom: 1px solid var(--el-border-color);
}
</style>
