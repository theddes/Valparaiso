<template>
    <ul class="valpo-list">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'List'
    }
</script>

<style lang="scss">
    .valpo-list {
        &:hover li:not(:hover) {
            opacity: 0.8;
            filter: grayscale(80%);
        }
    }
</style>
