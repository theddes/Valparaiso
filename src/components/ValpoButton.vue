<template>
    <button @click="handleClick">
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
        },
        methods: {
            handleClick () {
                const {url, target} = this
                if (url.length && target.length) {
                    const open = window.open(url, target)
                    open.focus()
                } else if (url.length) {
                    window.location = url
                }
            }
        }
    }
</script>
