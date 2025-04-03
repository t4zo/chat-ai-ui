<script lang="ts" setup>
import { useChatStore, type FormattedMessage } from "../stores/chat"
import Message from "./Message.vue"

const chatStore = useChatStore()

function isUserMessage(message: FormattedMessage) {
  return chatStore.isUserMessage(message)
}
</script>

<template>
  <div id="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-12">
    <div v-for="(message, index) in chatStore.messages" :class="`flex ${isUserMessage(message) ? 'justify-end' : 'justify-start'}`">
      <Message :key="index" :isUserMessage="isUserMessage(message)" :content="message.content" />
    </div>
  </div>
</template>