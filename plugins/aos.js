import AOS from 'aos'
export default ({ app }, inject) => {
    app.AOS = new AOS.init({ once: true, offset: -620 })
}