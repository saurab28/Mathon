import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const historyobject = ref(JSON.parse(localStorage.getItem('History') || '{}'))
  function pushHistory(obj) {
    const date = new Date()
    const stdate = date.toDateString()
    // console.log(stdate)
    if (stdate in historyobject.value) {
      historyobject.value[stdate] = [...(historyobject.value[stdate]), obj]
    } else {
      historyobject.value[stdate] = [obj]
    }

    localStorage.setItem('History', JSON.stringify(historyobject.value))
    // localStorage.setItem('Name',"saurab")
  }

  return { pushHistory, historyobject }
})
