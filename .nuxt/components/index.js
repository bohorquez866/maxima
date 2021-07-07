import { wrapFunctional } from './utils'

export { default as AboutAbout } from '../..\\components\\AboutAbout.vue'
export { default as AboutBanner } from '../..\\components\\AboutBanner.vue'
export { default as Comments } from '../..\\components\\Comments.vue'
export { default as ContactComponent } from '../..\\components\\ContactComponent.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HomeAbout } from '../..\\components\\HomeAbout.vue'
export { default as HomeBanner } from '../..\\components\\homeBanner.vue'
export { default as HomeService } from '../..\\components\\homeService.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Perks } from '../..\\components\\Perks.vue'

export const LazyAboutAbout = import('../..\\components\\AboutAbout.vue' /* webpackChunkName: "components/about-about" */).then(c => wrapFunctional(c.default || c))
export const LazyAboutBanner = import('../..\\components\\AboutBanner.vue' /* webpackChunkName: "components/about-banner" */).then(c => wrapFunctional(c.default || c))
export const LazyComments = import('../..\\components\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c))
export const LazyContactComponent = import('../..\\components\\ContactComponent.vue' /* webpackChunkName: "components/contact-component" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeAbout = import('../..\\components\\HomeAbout.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeBanner = import('../..\\components\\homeBanner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeService = import('../..\\components\\homeService.vue' /* webpackChunkName: "components/home-service" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyPerks = import('../..\\components\\Perks.vue' /* webpackChunkName: "components/perks" */).then(c => wrapFunctional(c.default || c))