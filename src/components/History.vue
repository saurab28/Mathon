<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/History'
const store = useCounterStore()
const {historyobject} = storeToRefs(store)

</script>
<template>
  <div class="bg-cyan-50 rounded-[20px] p-3 h-48 w-48 sm:h-64 sm:w-64 md:h-[300px] md:w-[300px] overflow-y-scroll">
    <div>
      <!-- <div>{{ historyobject }}</div> -->
      <div v-for="eachkey in Object.keys(historyobject)">
        <div class="text-xs sm:text-sm md:text-base font-semibold">{{ eachkey }}</div>
        <div v-for="eachItem in historyobject[eachkey]">
           <div>
            <span v-for="eachChar in eachItem[0]" class="text-sm sm:text-base md:text-[20px] break-words">{{ eachChar }}</span>
          </div>
          <div class="text-[15px]">= {{ eachItem[1] }}</div>
        </div>
        <div class="w-[100%] bg-black h-[2px] mt-[6px] mb-[6px]"></div>
      </div>

    </div>
  </div>
</template>
<style scoped>
 ::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}


</style>
