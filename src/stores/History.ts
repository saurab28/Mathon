import { ref } from 'vue'
import { defineStore } from 'pinia'

type HistoryEntry = [(string | number)[], number]
type HistoryStore = Record<string, HistoryEntry[]>

export const useCounterStore = defineStore('counter', () => {
  const stored = JSON.parse(localStorage.getItem('history') || '{}') as HistoryStore
  const historyobject = ref<HistoryStore>(stored)

  function pushHistory(obj: HistoryEntry) {
    const date = new Date()
    const stdate = date.toDateString()
    if (stdate in historyobject.value) {
      historyobject.value[stdate] = [...historyobject.value[stdate], obj]
    } else {
      historyobject.value[stdate] = [obj]
    }
    localStorage.setItem('history', JSON.stringify(historyobject.value))
  }

  return { pushHistory, historyobject }
})
