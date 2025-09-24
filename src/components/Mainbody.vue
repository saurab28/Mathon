<script setup lang="ts">
import {ref,computed} from 'vue'
import Airthematic from "../assets/Airthmatic.png"
import BMI from "../assets/BMI.png"
import Loanimg from "../assets/Loanimg.png"
import Airthmaticcal from '../components/Arithmaticcal.vue';
import Bmi from './Bmi.vue';
import Loan from '../components/Loan.vue'

const comNameStr = ref<string>("Airthmatic")

const changeCom = (id:string) => {
    if (id==='A'){
        comNameStr.value = "Airthmatic"
    }
    else if(id==="B"){
        comNameStr.value = "Bmi"
    }
    else{
        comNameStr.value = "Loan"
    }

}

const compName = computed(()=>{
    if (comNameStr.value === "Airthmatic"){
        return Airthmaticcal
    }
    else if(comNameStr.value === "Bmi"){
        return Bmi
    }else{
        return Loan
    }
})

</script>

<template>
    <div class="flex flex-col items-center">
        <p class="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold font-libertinus text-center px-4">Mathon...</p>
        <div class="mt-5">
          <div class="h-12 sm:h-16 md:h-[70px] bg-amber-400 w-auto  sm:mt-[10px] mx-4">
            <div class="bg-white h-12 sm:h-16 md:h-[70px] flex items-center relative bottom-2 right-4 sm:bottom-[6px] sm:right-[12px] md:bottom-[10px] md:right-[20px] px-2 sm:px-4">
                <p class="text-sm sm:text-lg md:text-xl lg:text-[30px] font-roboto text-center w-full">"Smart Calculators for Everyday Life"</p>
            </div>
          </div>
        </div>
        <p class="text-base sm:text-lg md:text-[20px] mt-12 sm:mt-16 md:mt-[100px] font-playfair backdrop-blur-3xl opacity-1.3 text-center px-4 max-w-4xl">From solving math problems to managing finances and tracking health, MathOn gives you fast, accurate, and easy-to-use calculators in one place</p>
        <p class="text-xl sm:text-2xl md:text-[26px] font-cormorant font-semibold backdrop-blur-3xl opacity-1.3 mt-8 sm:mt-12 md:mt-[60px] text-center px-4">Explore all our math tools ...</p>
        <div class="flex flex-col sm:flex-row w-full px-4 sm:px-8 md:px-16   justify-center sm:justify-evenly mt-8 sm:mt-12 md:mt-[60px] items-center gap-8 sm:gap-4">
            <div class="text-center text-base sm:text-lg md:text-[18px] font-playfair space-y-4 hover:font-medium cursor-pointer" @click="changeCom('A')">
                <img :src="Airthematic" class="h-48 w-44 sm:h-56 sm:w-48 md:h-[250px] md:w-[220px]  bg-cover rounded-[12px] hover:scale-105 transform transition duration-300 ease-in-out mx-auto"/>
                <p>Arithmetic</p>
            </div>
            <div class="text-center text-base sm:text-lg md:text-[18px] font-playfair hover:font-medium space-y-4 cursor-pointer" @click="changeCom('B')">
                <img :src="BMI" class="h-48 w-44 sm:h-56 sm:w-48 md:h-[250px] md:w-[220px] bg-cover bg-center rounded-[12px] hover:scale-105 transform transition duration-300 ease-in-out mx-auto"/>
                <p>BMI calculator</p>
            </div>
            <div class="text-center text-base sm:text-lg md:text-[18px] font-playfair space-y-4 hover:font-medium cursor-pointer" @click="changeCom('L')">
                <img :src="Loanimg" class="h-48 w-44 sm:h-56 sm:w-48 md:h-[250px] md:w-[220px] rounded-[12px] hover:scale-105 transform transition duration-300 ease-in-out mx-auto"/>
                <p>Loan EMI calculator</p>
            </div>
        </div>
        <div class="mt-8 sm:mt-12 md:mt-[60px] px-4 w-full flex justify-center">
            <component :is="compName"/>
        </div>
    </div>


</template>

<style scoped>
.my-class {
  font-family: "Londrina Shadow", sans-serif;
  color: black;
}
</style>
