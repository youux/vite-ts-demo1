import { InjectionKey } from "vue"
import { createStore, Store, useStore as baseUseStore } from "vuex"

// 导出数据类型
export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol("store") //起名store

// 创建一个新的 store 实例
export const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
})

// 封装key
export function useStore() {
  return baseUseStore(key)
}
