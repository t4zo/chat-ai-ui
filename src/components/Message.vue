<script lang="ts" setup>
const { isUserMessage, content } = defineProps<{ isUserMessage: boolean, content: string }>()

function formatMessage(text: string) {
  if(!text) return ''

  return text
    .replace(/\n/g, '<br>') // Preserve line breaks
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold text
    .replace(/\*(.*?)\*/g, '<i>$1</i>') // Italic text
    .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
    .replace(/(?:^|\n)- (.*?)(?:\n|$)/g, '<li>$1</li>') // Bullet points
    .replace(/(?:^|\n)(\d+)\. (.*?)(?:\n|$)/g, '<li>$1. $2</li>') // Numbered lists
    .replace(/<\/li>\n<li>/g, '</li><li>') // Ensure list continuity
    .replace(/<li>/, '<ul><li>') // Wrap in `<ul>`
    .replace(/<\/li>$/, '</li></ul>'); // Close the `<ul>`
}
</script>

<template>
  <p :class="`${isUserMessage ? 'bg-blue-600' : 'bg-gray-700'} max-w-xs md:max-w-4xl px-4 py-4 rounded-lg text-white`" v-html="formatMessage(content)" />
</template>