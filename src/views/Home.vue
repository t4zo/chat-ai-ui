<template>
    <main class="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div class="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
            <img :src="robotImage" alt="Robot Image" class="mx-auto w-24 h-24 mb-4">
            <h1 class="text-2xl font-semibold mb-4 text-center">
                Welcome to Chat AI
            </h1>

            <input type="text" class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                placeholder="Name" v-model="name" />
            <input type="email" class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
                placeholder="Email" v-model="email">

            <button :disabled="loading" class="w-full p-2 bg-blue-500 rounded-lg" @click="handleClick()">{{ loading ? 'Logging in...' : 'Start Chat' }}</button>

            <p v-if="error" class="text-red-400 text-center mt-2">{{ error }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
import robotImage from '../assets/robot.png'
import { ref } from 'vue'

const name = ref<string>()
const email = ref<string>()
const loading = ref(false)
const error = ref<string>( )

async function handleClick() {
    if(!name.value || !email.value) {
        error.value = 'Name and Email are required'
        return
    }
}
</script>