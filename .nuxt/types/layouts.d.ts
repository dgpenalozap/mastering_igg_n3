import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/takeshi/mastering-nuxt-3/mastering_igg_n3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}