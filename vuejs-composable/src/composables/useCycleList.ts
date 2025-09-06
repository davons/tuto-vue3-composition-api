import { computed, ref, toRef, type Ref, type MaybeRefOrGetter } from 'vue'

export const useCycleList = (list: MaybeRefOrGetter<any[]>) => {
  const activeIndex = ref(0)
  const _list = toRef(list)
  const state = computed(() => _list.value[activeIndex.value])

  const next = () => {
    if (activeIndex.value === _list.value.length - 1) {
      activeIndex.value = 0
    } else {
      activeIndex.value++
    }
  }

  const prev = () => {
    if (activeIndex.value === 0) {
      activeIndex.value = _list.value.length - 1
    } else {
      activeIndex.value--
    }
  }

  const go = (index: number) => {
    if (index >= _list.value.length) {
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
