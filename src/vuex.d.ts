import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"
// 引入state中的数据
import { State } from "./store/index"

declare module "@vue/runtime-core" {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
