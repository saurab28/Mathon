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
    <div class="bg-stone-50 w-[400px] flex items-center flex-col p-[20px] rounded-[16px]">
      <h2 class="text-[20px] font-roboto">Login</h2>
      <form class="flex flex-col" @submit.prevent="userLogin">
        <label class="text-[20px] mb-[16px] font-roboto" for="Name">Username</label>
        <input
          id="Name"
          class="h-[40px] rounded-[10px] border-[1px] w-[300px] mb-[18px] text-[16px] bg-purple-100 font-roboto"
          v-model="name"
        />
        <label class="text-[20px] mb-[16px] font-roboto" for="Password">Password</label>
        <input
          id="Password"
          class="h-[40px] rounded-[10px] border-[1px] w-[300px] bg-purple-100 font-roboto"
          v-model="password"
          type="password"
        />
        <div class="mt-[40px] mb-[30px] text-center">
          <button
            type="submit"
            class="h-[40px] w-[140px] bg-green-300 text-center rounded-[6px] border-[0px] text-[20px] font-roboto"
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
  width: 100vw;
  background-image: url('../src/assets/image.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: auto;
  background-color: #fff;
  margin: 0;
}
</style>
