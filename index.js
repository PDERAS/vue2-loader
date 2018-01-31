import Loader from './components/Loader.vue'
import options from './options';

export default {
    install (Vue, globalOptions) {
        if (globalOptions) {
            Object.keys(globalOptions).map(function(key) {
                options[key] = globalOptions[key];
            });
        }
        Vue.component('loader', Loader);
    }
}
