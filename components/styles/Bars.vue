<template>
    <div class="bar-loader">
        <div class="rect1" :style="'background-color: ' + color" />
        <div class="rect2" :style="'background-color: ' + color" />
        <div class="rect3" :style="'background-color: ' + color" />
    </div>
</template>

<script>
    export default {
        name: 'bar-loader',
        props: {
            color: {
                type: String,
                default: '#fff'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bar-loader {
        margin: 6px auto;
        width: 100%;
        height: 22px;
        text-align: center;
        font-size: 10px;
    }

    .bar-loader > div {
        height: 100%;
        width: 4px;
        display: inline-block;

        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }

    .bar-loader .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }

    .bar-loader .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
        20% { -webkit-transform: scaleY(1.0) }
    }

    @keyframes sk-stretchdelay {
        0%, 40%, 100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
        }  20% {
            transform: scaleY(1.0);
            -webkit-transform: scaleY(1.0);
        }
    }
</style>
