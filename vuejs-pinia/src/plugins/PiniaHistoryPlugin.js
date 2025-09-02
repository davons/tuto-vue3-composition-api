import { reactive, ref } from "vue"

export function PiniaHistoryPlugin({pinia, app, store, options}) {

  const history = reactive([])
  const future = reactive([])
  const doingHistory = ref(false)
  const maxHistory = 50 // limite mémoire



  // Sauvegarder l’état initial
  history.push(JSON.stringify(store.$state))

  store.$subscribe((mutation, state) => {
    if (doingHistory.value) return

    history.push(JSON.stringify(state))
    if (history.length > maxHistory) {
      history.shift()
    }
    future.splice(0, future.length) // reset du futur
  })

  const undo = () => {
    if (history.length <= 1) return
    doingHistory.value = true
    future.push(history.pop())
    store.$state = JSON.parse(history.at(-1))
    doingHistory.value = false
  }

  const redo = () => {
    const lastState = future.pop()
    if (!lastState) return
    doingHistory.value = true
    history.push(lastState)
    store.$state = JSON.parse(lastState)
    doingHistory.value = false
  }

  return { undo, redo }
}