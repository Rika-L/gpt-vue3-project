//与gpt通信的接口封装
import useChatStore from '@/stores/modules/chat'

let chatStore = useChatStore()

//统一管理接口

enum API {
  CHAT_URL = 'https://api.chatanywhere.com.cn/v1/chat/completions',
}

//发送请求的方法
export const reqChat = async (question: String) => {
  try {
    const response: any = await fetch(API.CHAT_URL, {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer sk-QlQ3V8NXRyYziUXOL6CzTry5gpXV6e20AQZmLhROu1c78cye',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }],
        stream: true,
      }),
    })
    const reader = response.body.getReader()

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      // 使用 TextDecoder 将 Uint8Array 转换为文本
      const text = new TextDecoder().decode(value)
      console.log(text)

      // 中间变量移除done
      const variable = text.split('data: [DONE]')

      // 分割字符串
      const dataChunks = variable[0].split('data:')

      // 遍历每个子字符串
      dataChunks.forEach((chunk) => {
        // 跳过空字符串
        if (!chunk.trim()) {
          return
        }

        // 解析JSON
        const jsonData = JSON.parse(chunk)

        // 提取content值
        const contentValue = jsonData.choices[0].delta.content

        if (contentValue) {
          // 处理每个数据块，可以根据需求进行处理
          chatStore.chat += contentValue
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}
