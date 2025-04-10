<script lang="ts" setup>
import robotImage from "../assets/robot.png";
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const userStore = useUserStore()
const router = useRouter()

const userName = userStore.name

function handleClick() {
  userStore.logout()
  router.push('/')
}
</script>

<template>
  <div class="py-4 px-6 bg-gray-800 shadow-md flex justify-between items-center">
    <img :src="robotImage" alt="Robot Image" class="w-8 h-8">
    <h1 class="text-lg font-semibold">{{ userName }} @ Chat AI</h1>
    <button class="text-gray-400 hover:text-white hover:cursor-pointer" @click="handleClick()">Logout</button>
  </div>
</template>