<template>
    <main role="main" id="uc" class="fixed-pseudo fullwidth">
        <section class="float-center">
            <img v-lazy="require('../assets/images/logo-valparaiso.svg')" class="logo" />
            <p>
                We're currently under construction.
            </p>
        </section>
    </main>
</template>

<script>
    import ValpoLogo from '@/components/ValpoLogo'

    export default {
        name: 'Construction',
        components: { ValpoLogo }
    }
</script>

<style lang="scss" scoped>
    #uc {
        position: relative;
        &:before {
            background: url('../assets/images/image-boat.jpg') no-repeat center;
            background-size: cover;
            filter: blur(5px);
        }
        &:after {
            background: rgba(1, 85, 107, 0.5);
        }
        .float-center {
            flex-direction: column;
            text-align: center;
            .logo {
                margin-bottom: 2em;
                max-width: 400px;
                width: 90%;
            }
        }
    }
</style>

