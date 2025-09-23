<script setup lang="ts">
import { ref } from 'vue'
const weight = ref<number | null>(null)
const height = ref<number | null>(null)
const bmi = ref<number | null>(null)
const category = ref<string>('')
const calculateBMI = () => {
  if (weight.value && height.value) {
    const heightInMeters = height.value / 100
    bmi.value = weight.value / (heightInMeters * heightInMeters)

    if (bmi.value < 18.5) {
      category.value = 'Underweight'
    } else if (bmi.value >= 18.5 && bmi.value < 24.9) {
      category.value = 'Normal weight'
    } else if (bmi.value >= 25 && bmi.value < 29.9) {
      category.value = 'Overweight'
    } else {
      category.value = 'Obese'
    }
  }
}
</script>

<template>
  <div class="bg-slate-400 p-4 sm:p-6 md:p-[26px] rounded-lg w-full max-w-[400px] mx-auto">
    <form @submit.prevent="calculateBMI" class="flex flex-col gap-2 sm:gap-3 md:gap-[10px]">
      <label class="font-semibold text-sm sm:text-base">Body Weight ( in kg )</label>
      <input
        class="bg-white border-0 h-10 sm:h-12 md:h-[40px] rounded-md text-lg sm:text-xl md:text-[25px] focus:outline-none px-2"
        v-model.number="weight"
      />
      <label class="font-semibold text-sm sm:text-base">Height ( in cm )</label>
      <input
        class="bg-white border-0 h-10 sm:h-12 md:h-[40px] rounded-md text-lg sm:text-xl md:text-[25px] focus:outline-none px-2"
        v-model.number="height"
      />
      <div class="text-center">
        <button class="mt-2 sm:mt-3 md:mt-[10px] w-32 sm:w-36 md:w-[150px] h-10 sm:h-12 md:h-[40px] bg-amber-50 rounded-lg text-sm sm:text-base md:text-[18px] cursor-pointer hover:bg-amber-100 transition-colors">
          Calculate
        </button>
      </div>
    </form>
    <div class="mt-4 sm:mt-6 md:mt-[28px] space-y-2">
      <p class="font-semibold text-right text-sm sm:text-base">
        Body Mass Index(BMI) : <span v-if="bmi">{{ bmi.toFixed(2) }}</span>
      </p>
      <p class="font-semibold text-right text-sm sm:text-base">BMI Category : {{ category }}</p>
    </div>
  </div>
</template>

<style scoped></style>
