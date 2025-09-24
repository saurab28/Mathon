// import { ref } from 'vue'
// import { defineStore } from 'pinia'

type HistoryEntry = [(string | number)[], number]
type HistoryStore = Record<string, HistoryEntry[]>

// export const useCounterStore = defineStore('counter', () => {
//   const stored = JSON.parse(localStorage.getItem('history') || '{}') as HistoryStore
//   const historyobject = ref<HistoryStore>(stored)

//   function pushHistory(obj: HistoryEntry) {
//   const date = new Date().toDateString()
//   if (historyobject.value[date]) {
//     historyobject.value[date] = [...historyobject.value[date], obj]
//   } else {
//     historyobject.value[date] = [obj]
//   }

//   try {
//     const serialized = JSON.stringify(historyobject.value)
//     localStorage.setItem('history', serialized)
//     // localStorage.removeItem("history")
//     // console.log('Saved history:', serialized)
//   } catch (err) {
//     console.error('Failed to save history:', err)
//   }}

//   return { pushHistory, historyobject }
// })

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const historyobject = ref<HistoryStore>(JSON.parse(localStorage.getItem('History') || '{}'))
  function pushHistory(obj: HistoryEntry) {
    const date = new Date()
    const stdate = date.toDateString()
    // console.log(stdate)
    if (stdate in historyobject.value) {
      historyobject.value[stdate] = [...(historyobject.value[stdate]||[]), obj]
    } else {
      historyobject.value[stdate] = [obj]
    }

    localStorage.setItem('History', JSON.stringify(historyobject.value))
    
  }

  return { pushHistory, historyobject }
})
