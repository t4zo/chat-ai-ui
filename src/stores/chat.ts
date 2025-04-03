import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "./user";
import { AI, USER } from "../constants";

type MessageRole = typeof USER | typeof AI

export type ChatMessage = {
  message: string,
  reply: string
}

export type GetChatMessages = {
  messages: ChatMessage[]
}

// export type ChatMessage = {
//   id: string,
//   userId: string,
//   message: string,
//   reply: string
//   createdAt: string
// }

export type FormattedMessage = {
  role: MessageRole
  content: string
}

export const useChatStore = defineStore('chat', () => {
  // const messages = ref<ChatMessage[]>([])
  const messages = ref<FormattedMessage[]>([])
  const isLoading = ref(false)

  const userStore = useUserStore()

  function isUserMessage(message: FormattedMessage) {
    return message.role === USER
  }

  // Load previous chat messages
  async function loadChatHistory() {
    if (!userStore.isAuthenticated()) return

    try {
      const { data } = await axios.post<GetChatMessages>(`${import.meta.env.VITE_API_URL}/get-messages`, {
        userId: userStore.userId
      })

      // messages.value = data.messages
      messages.value = data.messages
        .flatMap((message: ChatMessage): FormattedMessage[] => [
          { role: USER, content: message.message },
          { role: AI, content: message.reply },
        ])
        .filter((message: FormattedMessage) => message.content)
    } catch (err) {
      console.error('Error fetching chat history', err)
    }
  }

  async function sendMessage(message: string) {
    if (!message.trim() || !userStore.isAuthenticated()) return

    messages.value.push({ role: USER, content: message })

    isLoading.value = true

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/chat`, {
        userId: userStore.userId,
        message
      })

      messages.value.push({ role: AI, content: data.reply })
    } catch (err) {
      console.error('Error sending message', err)
    } finally {
      isLoading.value = false
    }
  }

  return { messages, isLoading, loadChatHistory, isUserMessage, sendMessage }
})