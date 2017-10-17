<template>
    <footer id="footer" class="footer content flex-around">
        <p>
            Stichting Adventures of the Valparaiso.<br>
            NL86TRIO2205 4507 27
            <br>&copy; 2017 All rights reserved.
        </p>
        <p class="align-center">
            Join us on our journey!<br>
            <valpo-logo class="logo"></valpo-logo>
        </p>
        <p class="align-center">
            Partners:
        </p>
    </footer>  
</template>

<script>
    import ValpoLogo from '@/components/ValpoLogo'

    export default {
        name: 'Footer',
        components: { ValpoLogo }
    }
</script>

<style lang="scss" scoped>
    .footer {
        background: var(--color-elephant);
        min-height: 30vh;
        p {
            width: 33%;
        }
        .logo {
            margin-top: calc(var(--tracking-large) * 1);
            max-width: 250px;
        }
    }
</style>
