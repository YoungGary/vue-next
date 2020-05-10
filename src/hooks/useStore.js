import { inject, provide } from "vue";
const store = Symbol()
export default function useStore(defaultStore = {}) {
    return inject(store,defaultStore)
}
export function provideStore(value){
    provide(store,value)
}