<script setup lang="ts">
import { onMounted, nextTick
  // , useTemplateRef
   } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.ts";
import { useChatStore } from "../stores/chat.ts";

import Header from "../components/Header.vue";
import Messages from "../components/Messages.vue";
import Input from "../components/Input.vue";
import Feedback from "../components/Feedback.vue";

const userStore = useUserStore()
const chatStore = useChatStore()

const router = useRouter()

// const chatTemplateRef = useTemplateRef('chat')

onMounted(async () => {
  await chatStore.loadChatHistory()

  scrollToBotton()
})

if (!userStore.isAuthenticated()) {
  router.push('/')
}

function scrollToBotton() {
  nextTick(() => {
    // console.log(chatTemplateRef)
    // chatTemplateRef.scrollTop = chatTemplateRef.scrollHeight

    const chatContainer = document.querySelector('#chatContainer')
    console.log(chatContainer)
    console.log(chatContainer?.scrollTop)
    console.log(chatContainer?.scrollHeight)
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  })
}
</script>

<template>
  <main class="min-h-dvh flex flex-col bg-gray-900 text-white">
      <Header />
      <Messages />
      <Feedback />
      <Input @send="chatStore.sendMessage" />
  </main>
</template>