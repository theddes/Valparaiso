<template>
  <div>
    <!-- <transition name="transition-loading" mode="out-in">
      <valpo-loading v-if="!cached || showLoader"></valpo-loading>
    </transition> -->
    <router-view></router-view>
    <valpo-footer v-if="$_config.site.mode === 1"></valpo-footer>
  </div>
</template>

<script>
import ValpoFooter from "@/components/ValpoFooter";

export default {
  name: "Site",
  components: { ValpoFooter }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
