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
        <p class = "text-[80px] font-bold  font-libertinus ">Mathon...</p>
        <div  class=" h-[70px]  bg-amber-400 w-contain mt-[10px] ">
            <div  class=" bg-white h-[70px] flex items-center relative bottom-[10px] right-[20px]">
                <p class="text-[30px] font-roboto m-[10px]">"Smart Calculators for Everyday Life"</p>
            </div>
        </div>
        <p class="text-[20px] mt-[100px] font-playfair backdrop-blur-3xl opacity-1.3">From solving math problems to managing finances and tracking health, MathOn gives you fast, accurate, and easy-to-use calculators in one place</p>
        <p class="text-[26px] font-cormorant font-[600px] backdrop-blur-3xl opacity-1.3 mt-[60px] ">Explore all our math tools ...</p>
        <div class="flex w-full  px-[344px] justify-evenly mt-[60px] items-center ">
            <div class="text-center text-[18px] font-playfair space-y-4 hover:font-medium"   @click="changeCom('A')">
                <img :src="Airthematic" class="h-[250px] w-[220px] bg-cover rounded-[12px]  hover:scale-105 transform transition duration-300 ease-in-out"/>
                <p>Arithmetic</p>
            </div>
            <div class="text-center text-[18px] font-playfair hover:font-medium space-y-4 " @click="changeCom('B')">
                <img :src="BMI" class="h-[250px] w-[220px]  bg-cover bg-center rounded-[12px]   hover:scale-105 transform transition duration-300 ease-in-out"/>
                <p>BMI calculator</p>
            </div>
            <div class="text-center text-[18px] font-playfair space-y-4 hover:font-medium" @click="changeCom('L')">
                <img :src="Loanimg" class="h-[250px] w-[220px] rounded-[12px]   hover:scale-105 transform transition duration-300 ease-in-out"/>
                <p>Loan EMI calculator</p>
            </div>
        </div>
        <div class=" mt-[60px] ">
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