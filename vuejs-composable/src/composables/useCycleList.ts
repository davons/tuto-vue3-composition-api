import { computed, ref, toRef, type Ref, type MaybeRefOrGetter } from 'vue'

export interface ICycleListConfig {
  fallbackIndex?: number
  fallbackValue?: any
}

export const configDefault: ICycleListConfig = {
  fallbackIndex: undefined,
  fallbackValue: undefined,
}

export const useCycleList = (list: MaybeRefOrGetter<any[]>, config?: ICycleListConfig) => {
  const _config = {
    ...configDefault,
    ...config,
  }

  console.log(_config)

  const activeIndex = ref(0)
  const _list = toRef(list)

  //const state = computed(() => _list.value[activeIndex.value])
  const state = computed({
    get() {
      return _list.value[activeIndex.value]
    },
    set(value) {
      const foundIndex = _list.value.indexOf(value)
      if (foundIndex != -1) {
        activeIndex.value = foundIndex
      } else {
        throw new Error(`Index ${foundIndex} not exist`)
      }
    },
  })

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
