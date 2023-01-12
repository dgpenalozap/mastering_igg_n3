import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/takeshi/mastering-nuxt-3/mastering_igg_n3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}