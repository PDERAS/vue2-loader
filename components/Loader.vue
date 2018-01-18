<template>
    <component :is="getComponent" :color="color" />
</template>

<script>
    import BarLoader from 'styles/Bars'
    import SpinnerLoader from 'styles/Spinner'

    export default {
        name: 'loader',

        components: {
            BarLoader,
            SpinnerLoader
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
                    case 'spinner':
                        return 'spinner-loader';
                    default:
                        return 'bar-loader';
                }
            }
        }
</script>
