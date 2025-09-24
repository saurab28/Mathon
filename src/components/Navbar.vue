<script setup lang="ts">
import {ref} from "vue"
import Mathonlogo from "../assets/Mathonlogo.png"
import { useRouter } from "vue-router"
import { useAuth } from '@/stores/auth'
import { storeToRefs } from "pinia"
const authStore = useAuth()
const {isAuth} = storeToRefs(authStore)
const router = useRouter()
const source = ref<string[]>(["M","a","t","h","o","n"])
const userAuthSta = ref<string>("Logout")

const handleAuth = () => {
  router.push('/')
  authStore.handleLogout()
}

</script>

<template>
    <nav class="flex items-center backdrop-blur-3xl opacity-1.3 pt-4 pb-4 md:pt-[20px] md:pb-[20px] justify-between w-full px-4 sm:px-8 md:px-[30px] lg:px-[50px]">
        <div class="flex items-center ">
            <img :src="Mathonlogo" class="h-16 w-12 sm:h-20 sm:w-16 md:h-[100px] md:w-[80px]"/>
            <div class="ml-2 sm:ml-3 md:ml-[14px] flex items-center">
                <div class="mr-[8px]" v-for="value in source">
                    <div class="size-4 sm:size-8 md:size-[40px] p-1 md:p-[4px] bg-amber-400 mr-1 sm:mr-2 md:mr-[8px] ">
                        <div class="size-4 sm:size-8 md:size-[40px]  md:p-[4px] bottom-2 right-3 sm:bottom-[10px] relative sm:right-[16px] md:bottom-[10px] md:right-[20px] bg-white ml-1 sm:ml-1.5 md:ml-2">
                            <span class="text-[10px] sm:text-lg md:text-[20px] font-mono font-bold absolute top-1 left-1">{{ value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-6 sm:h-10 md:h-[40px] bg-amber-400">
            <div class="h-6 sm:h-10 md:h-[40px] px-3 py-1 sm:px-4 sm:py-2 md:p-[14px] relative bottom-2 right-2 sm:bottom-[10px] sm:right-[10px] md:bottom-[10px] md:right-[10px] text-center bg-white flex items-center text-sm sm:text-base md:text-[20px] font-medium" @click="handleAuth">
                {{ userAuthSta }}
            </div>
        </div>
    </nav>



</template>

<style>

</style>
