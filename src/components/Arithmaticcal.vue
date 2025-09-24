<script setup lang="ts">
import {
  ref,
  useTemplateRef,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUnmounted
} from 'vue'
import { storeToRefs } from 'pinia'
import Display from '../components/Display.vue'
import History from '../components/History.vue'
import { useCounterStore } from '@/stores/History'
import { useAuth } from '@/stores/auth'
const displayList = ref<(number | string)[]>([])
const showZero = ref<boolean>(false)
const counterstore = useCounterStore()
const authStore = useAuth()
const {isAuth} = storeToRefs(authStore)

const pushStyle = (eachDigit: number): void => {
  //   console.log(eachDigit)
  // displayList.value.push(eachDigit)
  displayList.value = [...displayList.value, eachDigit]
  showZero.value = false


}

const pushCross = (): void => {
  if (
    displayList.value.length > 0 &&
    typeof displayList.value[displayList.value.length - 1] == 'number'
  ) {
    // displayList.value.push('x')
    displayList.value = [...displayList.value, 'x']
  }
}

const pushAdd = (): void => {
  if (
    displayList.value.length > 0 &&
    typeof displayList.value[displayList.value.length - 1] == 'number'
  ) {
    // displayList.value.push('+')
    displayList.value = [...displayList.value, '+']
  }
}

const pushSub = (): void => {
  if (
    displayList.value.length > 0 &&
    typeof displayList.value[displayList.value.length - 1] == 'number'
  ) {
    // displayList.value.push('-')
    displayList.value = [...displayList.value, '-']
  }
}

const pushPoint = (): void => {
  let lastIndex: number = displayList.value.lastIndexOf('.')
  if (lastIndex === -1) {
    if (
      displayList.value.length == 0 ||
      typeof displayList.value[displayList.value.length - 1] === 'string'
    ) {
      // displayList.value.push(0)
      // displayList.value.push('.')
      displayList.value = [...displayList.value, 0, '.']
    } else {
      // displayList.value.push('.')
      displayList.value = [...displayList.value, '.']
    }
  } else {
    if (
      displayList.value.slice(lastIndex).includes('+') ||
      displayList.value.slice(lastIndex).includes('-') ||
      displayList.value.slice(lastIndex).includes('x')
    ) {
      if (typeof displayList.value[displayList.value.length - 1] === 'string') {
        // displayList.value.push(0)
        // displayList.value.push('.')
        displayList.value = [...displayList.value, 0, '.']
      } else {
        // displayList.value.push('.')
        displayList.value = [...displayList.value, '.']
      }
    }
  }
}

const deleteItems = (): void => {
  // displayList.value.pop()
  displayList.value = [...displayList.value.slice(0, -1)]
}

type DisplayExpose = {
  totalSum: number
  totalFinalsumList: (number | string)[]
  togglecont: boolean
}
onBeforeUpdate(() => {
  sessionStorage.setItem('displayList', JSON.stringify(displayList.value))
})

const Dref = useTemplateRef<DisplayExpose>('equalto')

const isequalto = (): void => {
  // displayList.value = [Dref.value.totalSum]
  if (!Dref.value){
    return
  }
  if (Dref.value.totalSum !== 0) {
  // displayZeroequal.value = true
  displayList.value = [Dref.value.totalSum]
  // showZero.value = false
  } else {
    displayList.value = []
    showZero.value = true
  }
  counterstore.pushHistory([Dref.value.totalFinalsumList, Dref.value.totalSum])
}

const allclear = (): void => {
  displayList.value = []
  showZero.value = false
}



onUnmounted(() => {
  window.removeEventListener("keydown",handleKeyboard)
})

onMounted(() => {
  window.addEventListener("keydown",handleKeyboard)
})


onBeforeMount(() => {
  displayList.value =
    JSON.parse(sessionStorage.getItem('displayList') || '[]')
})

const handleKeyboard = (e : KeyboardEvent) : void => {
  const key = e.key
  if (!isNaN(Number(key))){
    pushStyle(Number(key))
     handleKeyboardsty(key)
  }
  else if (key === '+'){
    pushAdd()
    handleKeyboardsty(key)
  }
  else if( key === '-'){
    pushSub()
    handleKeyboardsty(key)
  }
  else if( key === '*'){
    pushCross()
    handleKeyboardsty(key)
  }
  else if(key === '.'){
    pushPoint()
    handleKeyboardsty(key)
  }
  else if(key === "Enter"){
    isequalto()
    handleKeyboardsty(key)
  }
  else if(key === "Escape"){
    allclear()
    handleKeyboardsty(key)
  }
  else if(key === "Backspace"){
    deleteItems()
    handleKeyboardsty(key)
  }

}

function handleKeyboardsty(key : string){
   const cont = document.querySelector(`[data-key="${key}"]`) as HTMLBodyElement;
   cont.classList.add("bg-slate-300");
   setTimeout(() => cont.classList.remove("bg-slate-300"), 150);

}
</script>

<template>
  <div class="bg-slate-400 p-3 flex flex-col rounded-[20px] w-full max-w-[400px] mx-auto">
    <div>
      <!-- <KeepAlive>
        <Display :displayList="displayList" ref="equalto" />
      </KeepAlive> -->
      <Display :displayList="displayList" :showZero="showZero" ref="equalto" />
    </div>

    <div class="relative">
      <div >

        <div v-show="Dref?.togglecont" class="absolute top-[4px] left-[10px] z-10">
             <History/>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-2 mt-1">
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="allclear"
          data-key="Escape"
        >
          AC
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click=""
        >
          ( )
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click=""
        >
          %
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click=""
        >
          /
        </div>

        <div
          v-for="eachDigit in [7, 8, 9]"
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushStyle(eachDigit)"
          :data-key="eachDigit"
        >
          {{ eachDigit }}
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushCross"
          data-key="*"
        >
          X
        </div>

        <div
          v-for="eachDigit in [4, 5, 6]"
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushStyle(eachDigit)"
          :data-key="eachDigit"
        >
          {{ eachDigit }}
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushSub"
          data-key="-"
        >
          -
        </div>

        <div
          v-for="eachDigit in [1, 2, 3]"
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushStyle(eachDigit)"
          :data-key="eachDigit"
        >
          {{ eachDigit }}
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushAdd"
          data-key="+"
        >
          +
        </div>
        <div
          v-for="eachDigit in [0]"
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushStyle(eachDigit)"
          :data-key="eachDigit"
        >
          {{ eachDigit }}
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="pushPoint"
          data-key="."
        >
          .
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="deleteItems"
          data-key="Backspace"
        >
          <font-awesome-icon icon="fa-solid fa-delete-left" />
        </div>
        <div
          class="bg-white border-solid rounded-[10px] border-black text-2xl sm:text-3xl md:text-[40px] flex justify-center items-center active:bg-slate-300 h-12 sm:h-14 md:h-16 cursor-pointer"
          @click="isequalto"
          data-key="Enter"
        >
          =
        </div>
        </div>
    </div>
  </div>
</template>
<style>
div {
  user-select: none;
  outline: none;
}
</style>
