<script setup lang="ts">
import showApp from '@/views/home/showApp/index.vue'
import { reactive, ref } from 'vue'
import { reqChat } from '@/api/chat'
import useChatStore from '@/stores/modules/chat'
import useUserStore from '@/stores/modules/user'

let userStore = useUserStore()
let chatStore = useChatStore()
let question = ref('')
let questionList: string[] = reactive([])

const submitChat = async () => {
  questionList.push(question.value)
  await reqChat(question.value)
  chatStore.chatList.push(chatStore.chat)
  question.value = ''
  chatStore.chat = ''
}
</script>

<template>
  <el-container style="height: 100%">
    <el-main style="height: 100%">
      <el-scrollbar>
        <el-card style="margin: 0.5vh 2vh" shadow="hover">
          <!--          没有内容时展示这个-->
          <div v-if="true">
            <show-app />
          </div>
          <div v-if="false" style="white-space: pre-line">
            <div v-for="(que, index) in questionList" :key="index">
              <el-avatar size="small" class="avatar">
                {{ userStore.userName.slice(0, 1) }}
              </el-avatar>
              <span>:{{ que }}</span>
              <div>
                {{ chatStore.chatList[index] }}
                <hr v-if="chatStore.chatList[index]" />
              </div>
            </div>
            {{ chatStore.chat }}
          </div>
        </el-card>
      </el-scrollbar>
    </el-main>
    <el-footer height="12vh">
      <div class="demo-border"></div>
      <div style="text-align: center">
        <el-input
          placeholder="Please input"
          class="gpt_input"
          v-model="question"
          @keyup.enter="submitChat"
        />
        <el-button @click="submitChat" class="gpt_button">提交</el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.demo-border {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}

.gpt_input {
  margin-top: 2vh;
  width: 88%;
  height: 7vh;
}

.gpt_button {
  margin-top: 2vh;
  margin-left: 2%;
  width: 7%;
  height: 7vh;
}

.avatar {
  background-color: $base-color;
  font-size: 10px;
}
</style>
