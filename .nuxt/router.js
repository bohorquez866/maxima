import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7eec794 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _626189ee = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _a0a565ca = () => interopDefault(import('..\\pages\\Gallery.vue' /* webpackChunkName: "pages/Gallery" */))
const _4fe30c76 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _17be9518 = () => interopDefault(import('..\\pages\\services\\_commercial.vue' /* webpackChunkName: "pages/services/_commercial" */))
const _687f120a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a7eec794,
    name: "about"
  }, {
    path: "/contact",
    component: _626189ee,
    name: "contact"
  }, {
    path: "/Gallery",
    component: _a0a565ca,
    name: "Gallery"
  }, {
    path: "/services",
    component: _4fe30c76,
    name: "services",
    children: [{
      path: ":commercial?",
      component: _17be9518,
      name: "services-commercial"
    }]
  }, {
    path: "/",
    component: _687f120a,
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
