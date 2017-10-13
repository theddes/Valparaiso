<template>
    <section id="loading" class="loading fixed-pseudo fullwidth">
        <valpo-logo class="logo"></valpo-logo>
    </section>
</template>

<script>
    import ValpoLogo from '@/components/ValpoLogo'

    export default {
        name: 'Loading',
        components: { ValpoLogo }
        // data: () => ({
        //     online: navigator.onLine,
        //     events: {
        //         online: null,
        //         offline: null
        //     }
        // }),
        // mounted () {
        //     this.events.online = window.addEventListener('online', event => {
        //         this.online = true
        //     })
        //     this.events.offline = window.addEventListener('offline', event => {
        //         this.online = false
        //     })
        // },
        // beforeDestroy () {
        //     window.removeEventListener('online', this.events.online)
        //     window.removeEventListener('offline', this.events.offline)
        // }
    }
</script>

<style lang="scss" scoped>
    #loading {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        justify-content: center;
        left: 0;
        position: fixed;
        text-align: center;
        top: 0;
        width: 100%;
        &:before {
            background: url('../assets/images/image-boat.jpg') no-repeat center;
            background-size: cover;
            filter: blur(5px);
        }
        &:after {
            background: rgba(1, 85, 107, 0.5);
        }
        .logo {
            margin-bottom: 2em;
            max-width: 400px;
            width: 90%;
        }
    }
</style>
