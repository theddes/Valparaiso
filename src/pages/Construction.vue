<template>
    <main role="main" id="uc">
        <section class="float-center">
            <valpo-logo class="logo" />
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
        &:before, &:after {
            content: '';
            height: 100%;
            left: 0;
            position: fixed;
            top: 0;
            width: 100%;
        }
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

