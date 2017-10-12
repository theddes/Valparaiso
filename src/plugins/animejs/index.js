import Vue from 'vue'
import anime from 'animejs'

Vue.mixin({
    created: function () {
        this.$_anime = anime
    }
})
