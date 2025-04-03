<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['send'])

const message = ref('')

function sendMessage() {
  if (!message.value.trim()) {
    return
  }

  emit('send', message.value)
  message.value = ''
}
</script>

<template>
  <!-- <textarea v-model="message" required class="px-4 py-6 rounded-3xl text-black w-full resize-none border-0 bg-gray-300" /> -->
  <div class="p-4 bg-gray-800 flex w-full">
    <input type="text" v-model="message" @keyup.enter="sendMessage" placeholder="Ask anything"
      class="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none">
    <button @click.prevent="sendMessage" class="ml-2 px-4 py-2 bg-blue-500 rounded-lg">Send</button>
  </div>
</template>