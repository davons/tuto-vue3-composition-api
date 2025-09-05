import { computed, ref } from 'vue'

export const useCycleList = (list: any[]) => {
  const activeIndex = ref(0)
  const state = computed(() => list[activeIndex.value])

  const next = () => {
    if (activeIndex.value === list.length - 1) {
      activeIndex.value = 0
    } else {
      activeIndex.value++
    }
  }

  const prev = () => {
    if (activeIndex.value === 0) {
      activeIndex.value = list.length - 1
    } else {
      activeIndex.value--
    }
  }

  const go = (index: number) => {
    if (index >= list.length) {
      throw new Error(`${index} not found`)
    } else {
      activeIndex.value = index
    }
  }

  return {
    state,
    prev,
    next,
    go,
  }
}
