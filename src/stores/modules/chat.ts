import { defineStore } from 'pinia'

let useChatStore = defineStore('chat', {
  state: (): any => {
    return {
      chat: '',
      chatList: [],
    }
  },
  actions: {},
  getters: {},
})

export default useChatStore
