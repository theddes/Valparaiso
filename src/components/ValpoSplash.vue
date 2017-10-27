<template>
    <section class="splash fixed-pseudo flex-container flex-center" v-lazy:background-image="require('../assets/images/image-pig.jpg')">
        <valpo-logo class="logo" />
    </section>
</template>

<script>
    import ValpoLogo from '@/components/ValpoLogo'

    export default {
        name: 'Splash',
        components: { ValpoLogo }
    }
</script>

<style lang="scss" scoped>
    .splash {
        flex-direction: column;
        height: 100vh;
        margin: 0 auto;
        max-width: var(--wrapper-width);
        position: relative;
        text-align: center;
        width: 100vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        &:after {
            background: rgba(1, 85, 107, 0.2);
        }
        .logo {
            margin-bottom: 2em;
            max-width: 400px;
            width: 90%;
        }
    }
</style>

