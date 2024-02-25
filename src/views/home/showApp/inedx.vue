<script setup lang="ts"></script>

<template>
  <div style="text-align: center; margin-top: 10vh">
    <span style="color: #13ce66; font-size: 100px">Vue</span>
    <span style="font-size: 100px">Chat</span>
    <span style="font-size: 20px">beta</span>
    <el-row :gutter="12" style="height: 100%; width: 100%">
      <el-col :span="8">
        <div class="main_message_icon">
          <Cpu />
        </div>
        <div class="main_message_card">特点</div>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"一个简洁的网站，帮助您快速找到所需信息或解决问题"</div>
        </el-card>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"操作逻辑清晰"</div>
        </el-card>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"基于chatGPT3.5"</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <div class="main_message_icon">
          <Message />
        </div>
        <div class="main_message_card">使用示例</div>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"用Python写一个贪吃蛇小游戏"</div>
        </el-card>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>
            "如何有效利用AI帮助自己有效的学习？以此为主题写一篇论文，要列出标题、摘要、关键词、目录以及论文第一章内容"
          </div>
        </el-card>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"写一个温馨的小故事"</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <div class="main_message_icon">
          <WarningFilled />
        </div>
        <div class="main_message_card">局限性</div>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"缺乏情感理解"</div>
        </el-card>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"缺乏创造性和直觉"</div>
        </el-card>
        <el-card
          shadow="hover"
          style="
            width: 70%;
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <div>"缺乏真实性和人性化"</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.main_message_card {
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
}

.main_message_icon {
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  margin-top: 15px;
}
</style>
