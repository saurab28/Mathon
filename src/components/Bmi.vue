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
  <div class="bg-slate-400 p-[26px] rounded-lg w-[400px]">
    <form @submit.prevent="calculateBMI" class="flex flex-col gap-[10px]">
      <label class="font-semibold">Body Weight ( in kg )</label>
      <input
        class="bg-white border-0 h-[40px] rounded-md text-[25px] focus:outline-none"
        v-model.number="weight"
      />
      <label class="font-semibold">Height ( in cm )</label>
      <input
        class="bg-white border-0 h-[40px] rounded-md text-[25px] focus:outline-none"
        v-model.number="height"
      />
      <div class="text-center">
        <button class="mt-[10px] w-[150px] h-[40px] bg-amber-50 rounded-lg text-[18px]">
          Calculate
        </button>
      </div>
    </form>
    <div class="mt-[28px]">
      <p class="font-semibold w-[50%] text-right">
        Body Mass Index(BMI) : <span v-if="bmi">{{ bmi.toFixed(2) }}</span>
      </p>
      <p class="font-semibold w-[50%] text-right">BMI Category : {{ category }}</p>
    </div>
  </div>
</template>

<style scoped></style>
