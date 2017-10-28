<template>
    <section class="content flex-container">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'Content'
    }
</script>

<style lang="scss" scoped>
    .content {
        margin: 0 auto;
        max-width: var(--wrapper-width);
        padding: 2em;
        padding-top: calc(var(--tracking-large) * 5);
        position: relative;
        width: 100%;
        @media (max-width: 800px) {
            padding-top: calc(var(--tracking-large) * 3);
        }
    }
</style>
