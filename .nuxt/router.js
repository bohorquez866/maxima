import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d3e4faa = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2d343d06 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _66da4baf = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _104ca1d1 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _0b7676aa = () => interopDefault(import('../pages/services/_commercial.vue' /* webpackChunkName: "pages/services/_commercial" */))
const _5cf62a6f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3d3e4faa,
    name: "about"
  }, {
    path: "/contact",
    component: _2d343d06,
    name: "contact"
  }, {
    path: "/gallery",
    component: _66da4baf,
    name: "gallery"
  }, {
    path: "/services",
    component: _104ca1d1,
    name: "services",
    children: [{
      path: ":commercial?",
      component: _0b7676aa,
      name: "services-commercial"
    }]
  }, {
    path: "/",
    component: _5cf62a6f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
