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
