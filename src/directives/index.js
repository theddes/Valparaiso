import Vue from 'vue'

Vue.directive('attributes', {
    bind: (el, attributes) => {
        attributes.value && Object.keys(attributes.value).map(attr => {
            if (attr === 'class') {
                let c = el.getAttribute(attr)
                c = (c === null) ? '' : c + ' '
                el.setAttribute(attr, `${c}${attributes.value[attr]}`)
            } else {
                el.setAttribute(attr, attributes.value[attr])
            }
        })
    }
})

Vue.directive('link', {
    bind: function (el, binding, vnode) {
        el.addEventListener('click', event => {
            event.stopImmediatePropagation()
            const {url, target} = binding.value
            if (url.length && target.length) {
                const open = window.open(url, target)
                open.focus()
            } else if (url.length) {
                // use vue router  
                window.location = url
            }
        })
    }
})
