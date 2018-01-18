import Loader from './components/loader.vue'

export default {
    install (Vue, options) {
        Vue.component('vue-loader', Loader);
    }
}
