import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutAbout: () => import('../..\\components\\AboutAbout.vue' /* webpackChunkName: "components/about-about" */).then(c => wrapFunctional(c.default || c)),
  AboutBanner: () => import('../..\\components\\AboutBanner.vue' /* webpackChunkName: "components/about-banner" */).then(c => wrapFunctional(c.default || c)),
  CategoryPosts: () => import('../..\\components\\CategoryPosts.vue' /* webpackChunkName: "components/category-posts" */).then(c => wrapFunctional(c.default || c)),
  Comments: () => import('../..\\components\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c)),
  ContactComponent: () => import('../..\\components\\ContactComponent.vue' /* webpackChunkName: "components/contact-component" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  FormContact: () => import('../..\\components\\FormContact.vue' /* webpackChunkName: "components/form-contact" */).then(c => wrapFunctional(c.default || c)),
  FormHome: () => import('../..\\components\\FormHome.vue' /* webpackChunkName: "components/form-home" */).then(c => wrapFunctional(c.default || c)),
  HomeAbout: () => import('../..\\components\\HomeAbout.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c)),
  HomeBanner: () => import('../..\\components\\homeBanner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c)),
  HomeService: () => import('../..\\components\\homeService.vue' /* webpackChunkName: "components/home-service" */).then(c => wrapFunctional(c.default || c)),
  LoadedImg: () => import('../..\\components\\LoadedImg.vue' /* webpackChunkName: "components/loaded-img" */).then(c => wrapFunctional(c.default || c)),
  Loader: () => import('../..\\components\\Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Perks: () => import('../..\\components\\Perks.vue' /* webpackChunkName: "components/perks" */).then(c => wrapFunctional(c.default || c)),
  ServiceBanner: () => import('../..\\components\\ServiceBanner.vue' /* webpackChunkName: "components/service-banner" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
