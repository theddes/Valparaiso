// todo: add youtube support
<template>
    <section class="splash fixed-pseudo flex-container flex-center" v-lazy:background-image="image">
        <div class="splash-slot">
            <slot></slot>
        </div>
        <video autoplay :loop="video.loop" v-if="video">
            <source :src="video.src" :type="`video/${video.src.split('.').pop()}`">
        </video>
    </section>
</template>

<script>
    export default {
        name: 'Splash',
        props: {
            video: {
                type: Object,
                required: false
            },
            image: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .splash {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        flex-direction: column;
        height: 100vh;
        margin: 0 auto;
        max-width: var(--wrapper-width);
        overflow: hidden;
        position: relative;
        text-align: center;
        width: 100vw;
        &:after {
            background: rgba(1, 85, 107, 0.2);
        }
        video {
            left: 0;
            position: absolute;
            top: 0;
            z-index: 10;
        }
        .splash-slot {
            position: relative;
            width: 100%;
            z-index: 15;
        }
    }
</style>

