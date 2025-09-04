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
}

</script>

<template>
    <nav class="flex items-center backdrop-blur-3xl opacity-1.3 pt-[20px] pb-[20px] justify-between w-full px-[104px]">
        <div class="flex items-center">
            <img :src="Mathonlogo" class="h-[100px] w-[80px] "/>
            <div class="ml-[14px] flex items-center">
                <div class="mr-[8px]" v-for="value in source">
                    <div class="size-[40px] p-[4px] bg-amber-400  mr-[8px] " >
                        <div class=" size-[40px] p-[4px] relative bottom-[10px] right-[20px] bg-white ml-2">
                            <span class="text-[20px] font-mono font-bold " >{{ value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" h-[40px]  bg-amber-400   ">
            <div class="h-[40px]  p-[14px] relative bottom-[10px] right-[10px] text-center bg-white flex items-center text-[20px] font-medium" @click="handleAuth">
                {{ userAuthSta }}
            </div>
        </div>
    </nav>
    


</template>

<style>

</style>