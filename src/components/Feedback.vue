<script lang="ts" setup>
import { useChatStore } from '../stores/chat';

const chatStore = useChatStore()
</script>

<template>
  <div v-if="chatStore.isLoading" class="flex justify-start">
    <div class="bg-gray-700 text-white px-4 py-2 rounded-lg">
      <span class="animate-pulse">One second, thinking...</span>
    </div>
  </div>
</template>