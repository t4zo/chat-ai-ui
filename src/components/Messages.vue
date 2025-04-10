<script lang="ts" setup>
import { useChatStore } from "../stores/chat"
import Message from "./Message.vue"
import Feedback from "./Feedback.vue";

const chatStore = useChatStore()
</script>

<template>
  <div class="flex-1 overflow-y-auto p-4 space-y-12">
    <div v-for="(message, index) in chatStore.messages" :class="`flex ${chatStore.isUserMessage(message) ? 'justify-end' : 'justify-start'}`">
      <Message :key="index" :isUserMessage="chatStore.isUserMessage(message)" :content="message.content" />
    </div>

    <Feedback />
  </div>
</template>