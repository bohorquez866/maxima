import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutAbout: () => import('../..\\components\\AboutAbout.vue' /* webpackChunkName: "components/about-about" */).then(c => wrapFunctional(c.default || c)),
  AboutBanner: () => import('../..\\components\\AboutBanner.vue' /* webpackChunkName: "components/about-banner" */).then(c => wrapFunctional(c.default || c)),
  Comments: () => import('../..\\components\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c)),
  ContactComponent: () => import('../..\\components\\ContactComponent.vue' /* webpackChunkName: "components/contact-component" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  HomeAbout: () => import('../..\\components\\HomeAbout.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c)),
  HomeBanner: () => import('../..\\components\\homeBanner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c)),
  HomeService: () => import('../..\\components\\homeService.vue' /* webpackChunkName: "components/home-service" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Perks: () => import('../..\\components\\Perks.vue' /* webpackChunkName: "components/perks" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
