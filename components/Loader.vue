<template>
    <component :is="getComponent" :color="color" />
</template>

<script>
    import BarLoader from 'styles/Bars'

    export default {
        name: 'loader',

        components: {
            BarLoader,
        },

        props: {
            color: {
                type: String,
                default: 'black'
            },

            type: {
                type: String,
                default: 'bars'
            }
        },

        methods: {
            getComponent() {
                switch (this.type.toLowerCase()) {
                    case 'bars':
                        return 'bar-loader';
                    default:
                        return 'bar-loader';
                }
            }
        }
</script>
