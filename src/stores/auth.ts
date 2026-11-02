import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref<any>(null)

  function login(email: string) {
    isAuthenticated.value = true
    user.value = {
      uid: 'user-1',
      email,
      displayName: email.split('@')[0],
      photoURL: null,
    }
  }

  function signup(email: string, displayName: string) {
    isAuthenticated.value = true
    user.value = {
      uid: 'user-1',
      email,
      displayName,
      photoURL: null,
    }
  }

  function logout() {
    isAuthenticated.value = false
    user.value = null
  }

  return { isAuthenticated, user, login, signup, logout }
})
