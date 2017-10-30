<template>
    <button>
        <span>{{ label }}</span>
    </button>  
</template>

<script>
    export default {
        name: 'Button',
        props: {
            url: {
                type: String,
                required: false,
                default: ''
            },
            label: {
                type: String,
                required: false,
                default: ''
            },
            target: {
                type: String,
                required: false,
                default: ''
            } 
        }
    }
</script>
