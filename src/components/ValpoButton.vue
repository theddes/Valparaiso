<template>
    <button>
        <span>{{ label }}</span>
    </button>  
</template>

<script>
    export default {
        name: 'Button',
        props: {
            label: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>

<<style lang="scss" scoped>

</style>
