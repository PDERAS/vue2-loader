<template>
    <component :is="getComponent()" :color="color" />
</template>

<script>
    import BarLoader from './styles/Bar'
    import SpinningDotLoader from './styles/SpinningDot'

    import defaults from '../options';

    export default {
        name: 'loader',

        components: {
            BarLoader,
            SpinningDotLoader
        },

        props: {
            color: {
                type: String,
                default: () => defaults.color
            },

            type: {
                type: String,
                default: () => defaults.type
            }
        },

        methods: {
            getComponent() {
                switch (this.type.toLowerCase()) {
                    case 'bar':
                        return 'bar-loader';
                    case 'spinning-dot':
                        return 'spinning-dot-loader';
                    default:
                        return 'bar-loader';
                }
            }
        }
    }
</script>
