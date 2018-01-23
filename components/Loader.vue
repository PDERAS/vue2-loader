<template>
    <component :is="getComponent" :color="color" />
</template>

<script>
    import BarLoader from './styles/Bar'
    import SpinningDotLoader from './styles/SpinningDot'

    export default {
        name: 'loader',

        components: {
            BarLoader,
            SpinningDotLoader
        },

        props: {
            color: {
                type: String,
                default: 'black'
            },

            type: {
                type: String,
                default: 'bar'
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
