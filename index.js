import Loader from './components/Loader.vue'

export default {
    install (Vue, options) {
        Vue.component('vue-loader', Loader);
    }
}
