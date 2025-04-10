import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: null as String | null,
    name: null as String | null,
  }),
  actions: {
    setUser(data: { userId: string, name: string }) {
      this.userId = data.userId
      this.name = data.name
    },
    isAuthenticated() {
      return !!this.userId
    },
    logout() {
      this.userId = null
      this.name = null
    },
  },
  persist: true, // Keep user logged in across page reloads
})