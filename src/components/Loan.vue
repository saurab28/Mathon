<script setup>
import { ref, computed } from 'vue'

const loanAmount = ref(10000)
const interestRate = ref(5)
const loanTenure = ref(20)
const tenureType = ref('Year')

const emi = computed(() => {  
  const p = parseFloat(loanAmount.value)
  const r = parseFloat(interestRate.value) / 100 / 12
  const n =
    tenureType.value === 'Year' ? parseFloat(loanTenure.value) * 12 : parseFloat(loanTenure.value)

  if (p <= 0 || r <= 0 || n <= 0 || isNaN(p) || isNaN(r) || isNaN(n)) {
    return 0
  }

  const emiCalculation = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  return emiCalculation
})

const totalRepayment = computed(() => {
  const totalMonths = tenureType.value === 'Year' ? loanTenure.value * 12 : loanTenure.value
  return emi.value * totalMonths
})

const totalInterestPayable = computed(() => {
  return totalRepayment.value - (loanAmount.value || 0)
})

const principalPercentage = computed(() => {
  return (loanAmount.value / totalRepayment.value) * 100 || 0
})

const interestPercentage = computed(() => {
  return (totalInterestPayable.value / totalRepayment.value) * 100 || 0
})
</script>

<template>
  
    <div
      class="bg-slate-400 rounded-lg shadow-lg p-8  max-w-3xl  "
    >
      <div>
        <div class="flex flex-col space-y-6">
          <div class="space-y-[20px]" >
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Loan Amount</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  v-model.number="loanAmount"
                  type=""
                  class="w-full pl-8 pr-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none"
                  placeholder="10000"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Interest Rate</label>
              <div class="relative">
                <input
                  v-model.number="interestRate"
                  type=""
                  class="w-full pl-8 pr-1 py-2 border bg-white border-gray-300 rounded-md focus:outline-none"
                  placeholder="5"
                />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
              </div>
            </div>

            <div>
              <label class="block text-gray-700 font-semibold mb-2">Loan Tenure</label>
              <div class="flex items-center space-x-4">
                <div class="relative">
                  <input
                    v-model.number="loanTenure"
                    type=""
                    class="w-full pl-8 py-2 border bg-white border-gray-300 rounded-md focus:outline-none"
                    placeholder="20"
                  />
                  <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <font-awesome-icon icon="fa-solid fa-clock" />

                  </span>
                </div>
                <div class="flex bg-gray-200 rounded-md overflow-hidden">
                  <button
                    @click="tenureType = 'Year'"
                    :class="{ 'bg-black text-white': tenureType === 'Year' }"
                    class="px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Year
                  </button>
                  <button
                    @click="tenureType = 'Month'"
                    :class="{ 'bg-black text-white': tenureType === 'Month' }"
                    class="px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Month
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-gray-200 text-gray-700 p-6 rounded-md text-center">
                <p class="text-sm">Loan EMI</p>
                <p class="text-3xl font-bold mt-2">₹ {{ Math.round(emi) || '0' }}</p>
              </div>
              <div class="bg-gray-200 text-gray-800 p-6 rounded-md text-center">
                <p class="text-sm">Total Interest Payable</p>
                <p class="text-xl font-bold mt-2">
                  ₹ {{ Math.round(totalInterestPayable) || '0' }}
                </p>
              </div>
            </div>
            <div class="bg-gray-200 text-gray-800 p-6 rounded-md text-center">
              <p class="text-sm">
                Total Repayment <span class="text-gray-500">(Principal + Interest)</span>
              </p>
              <p class="text-xl font-bold mt-2">₹ {{ Math.round(totalRepayment) || '0' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>

