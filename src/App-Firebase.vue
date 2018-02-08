<template>
  <div id="app">
    <transition name="transition-loading" mode="out-in">
      <valpo-loading v-if="!cached || showLoader"></valpo-loading>
    </transition>
    <router-view v-if="cached && !showLoader"></router-view>
      <valpo-footer v-if="cached && !showLoader && $_config.site.mode === 1"></valpo-footer>
  </div>
</template>

<script>
import ValpoLoading from "@/components/ValpoLoading";
import ValpoFooter from "@/components/ValpoFooter";

export default {
  name: "App",
  data: () => ({
    cached: false,
    showLoader: true
  }),
  components: { ValpoLoading, ValpoFooter },
  mounted() {
    const today = new Date().getTime();
    const diff = Math.abs(today - localStorage.getItem("last_updated"));
    const days = Math.ceil(diff / (1000 * 3600 * 24));

    this.cached =
      localStorage.getItem("valparaiso") !== null &&
      localStorage.getItem("last_updated") !== null &&
      days < this.$_config.data.preserve;
    !this.cached && this.updateData();

    setTimeout(() => {
      this.showLoader = false;
    }, this.$_config.data.loadtime);
  },
  methods: {
    updateData() {
      this.$_firebase
        .database()
        .ref("site")
        .once("value")
        .then(snapshot => {
          snapshot.forEach(entry => {
            const value = entry.val();

            localStorage.setItem("valparaiso", JSON.stringify(value));
            localStorage.setItem("last_updated", new Date().getTime());
            this.cached = true;
          });
        });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
