import AOS                         from 'aos'
import Swiper, {Pagination}        from 'swiper'
import controlsSupportInsideSwiper from './helpers/controls-support-inside-swiper.js'
import NavigationModule            from './modules/NavigationModule.js'
import HeaderModule                from './modules/HeaderModule.js'

AOS.init({
    duration: 750,
    easing: 'ease-out',
    offset: 0,
})

Swiper.use([Pagination])

Swiper.defaults.slidesPerGroup = 1
Swiper.defaults.grabCursor     = true
Swiper.defaults.speed          = 500

const swipers = [

    new Swiper('.some-nft-slider', {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
            el: '.some-nft-slider-pagination',
            clickable: true,
            bulletElement: 'button'
        },
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1
            },
            601: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            1025: {
                spaceBetween: 20,
                slidesPerView: 3
            },
            1701: {
                spaceBetween: 50,
                slidesPerView: 3
            }
        }
    })

]

controlsSupportInsideSwiper(swipers, ['a', 'button'])

const navigationModule = new NavigationModule({
    navigationElement: {
        sourceClassName: 'navigation',
        activeClassName: 'navigation--active',
    },
    burgerElement: {
        sourceClassName: 'burger-button',
        activeClassName: 'burger-button--active',
    },
    linkElement: {
        sourceClassName: 'navigation-link',
        activeClassName: 'navigation-link--active',
    },
    topIndentElementOnScroll: {
        sourceClassName: 'header-section'
    },
    immediatelyInitializeModule: true,
})

const headerModule = new HeaderModule({
    headerElement: {
        sourceClassName: 'header-section',
        activeClassName: 'header-section--active',
    },
    triggerPoint: 0,
    immediatelyInitializeModule: true,
})