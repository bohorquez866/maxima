import Vue from 'vue'
console.log(1)
Vue.directive('lazy', {
    inserted: (el) => {
        function loadImage() {
            const imageElement = Array.from(el.children).find(
                (el) => el.nodeName === 'IMG'
            )

            if (imageElement) {
                imageElement.addEventListener('load', () => {
                    console.log(22)

                    setTimeout(() => el.classList.add('loaded'), 100)
                })
                imageElement.addEventListener('error', () => console.log('error'))
                imageElement.src = imageElement.dataset.url
            }
        }

        function handleIntersect(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImage()
                    observer.unobserve(el)
                    console.log(3)
                }
            })
        }

        function createObserver() {
            const options = {
                root: null,
                threshold: '0',
            }
            const observer = new IntersectionObserver(handleIntersect, options)
            observer.observe(el)
            console.log(2)
        }

        if (window['IntersectionObserver']) {
            createObserver()
        } else {
            loadImage()
        }
    },
})