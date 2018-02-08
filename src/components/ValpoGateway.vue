<template>
  <section id="gateway" class="fixed-pseudo fullwidth">

  </section>
</template>

<script>
import ValpoLogo from "@/components/ValpoLogo";

export default {
  name: "Gateway",
  components: { ValpoLogo }
};
</script>

<style lang="scss" scoped>
#gateway {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  width: 100%;
  &:before {
    background: url("../assets/images/image-boat.jpg") no-repeat center;
    background-size: cover;
    filter: blur(5px);
  }
  &:after {
    background: rgba(1, 85, 107, 0.5);
  }
  .logo {
    margin-bottom: 2em;
    max-width: 400px;
    width: 90%;
  }
}
</style>
