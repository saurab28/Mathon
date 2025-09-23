<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// import router from '@/router';

const auth = useAuth()
const name = ref<string>('')
const password = ref<string>('')
const { handleLogin } = auth

const userLogin = (): void => {
  console.log('hello')
  const success = handleLogin(name.value, password.value)
  if (success) {
    router.push('/calculate')
  }
}
</script>

<template>
  <div class="img relative flex justify-center items-center">
    <div class="bg-stone-50 w-full max-w-[400px] mx-4 flex items-center flex-col p-4 sm:p-6 md:p-[20px] rounded-[16px]">
      <h2 class="text-lg sm:text-xl md:text-[20px] font-roboto mb-4">Login</h2>
      <form class="flex flex-col" @submit.prevent="userLogin">
        <label class="text-base sm:text-lg md:text-[20px] mb-3 sm:mb-4 md:mb-[16px] font-roboto" for="Name">Username</label>
        <input
          id="Name"
          class="h-10 sm:h-12 md:h-[40px] rounded-[10px] border-[1px] w-full max-w-[300px] mb-3 sm:mb-4 md:mb-[18px] text-sm sm:text-base md:text-[16px] bg-purple-100 font-roboto px-3"
          v-model="name"
        />
        <label class="text-base sm:text-lg md:text-[20px] mb-3 sm:mb-4 md:mb-[16px] font-roboto" for="Password">Password</label>
        <input
          id="Password"
          class="h-10 sm:h-12 md:h-[40px] rounded-[10px] border-[1px] w-full max-w-[300px] bg-purple-100 font-roboto px-3 text-sm sm:text-base md:text-[16px]"
          v-model="password"
          type="password"
        />
        <div class="mt-6 sm:mt-8 md:mt-[40px] mb-4 sm:mb-6 md:mb-[30px] text-center">
          <button
            type="submit"
            class="h-10 sm:h-12 md:h-[40px] w-28 sm:w-32 md:w-[140px] bg-green-300 text-center rounded-[6px] border-[0px] text-base sm:text-lg md:text-[20px] font-roboto cursor-pointer hover:bg-green-400 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.img {
  height: 100vh;
  width: 100%;
  background-image: url('/image.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: auto;
  background-color: #fff;
  margin: 0;
}
</style>
