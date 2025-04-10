<script setup lang="ts">
import { onMounted, nextTick } from "vue";
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

onMounted(async () => {
  await chatStore.loadChatHistory()

  await scrollToBotton()
})

if (!userStore.isAuthenticated()) {
  router.push('/')
}

async function scrollToBotton() {
  await nextTick()

  const chatContainer = document.querySelector('.input-ask-anything')
  if (!chatContainer) return
  chatContainer.scrollIntoView({
    behavior: 'smooth'
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