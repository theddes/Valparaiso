<template>
  <footer id="footer" class="footer content flex-around">
    <p>
      Stichting Adventures of the Valparaiso.<br>
      NL86TRIO2205 4507 27
      <br>&copy; 2017 All rights reserved.<br><br>
      Site by <router-link :to="{ name: 'history', params: { focus: 'crew' }}" title="Art &amp; Design">Alexis Camejo</router-link> &amp; <router-link :to="{ name: 'history', params: { focus: 'crew' }}" title="Development">Timo Heddes</router-link>
    </p>
    <p class="align-center">
      Join us on our journey!<br>
      <img v-lazy="images.logo" class="logo" alt="Adventures of the Valparaiso" />
    </p>
    <p class="align-center">
      Partners:
    </p>
  </footer>  
</template>

<script>
import logo from "../assets/images/logo-valparaiso.svg";

export default {
  name: "Footer",
  data: () => ({
    images: { logo }
  })
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-elephant);
  font-size: 0.9em;
  margin: 0 auto;
  max-width: var(--wrapper-width);
  min-height: 20vh;
  padding-top: calc(var(--tracking-large) * 5);
  padding: 2em;
  position: relative;
  width: 100%;
  @media (max-width: 680px) {
    flex-direction: column-reverse;
  }
  p {
    width: 33%;
    @media (max-width: 680px) {
      text-align: center;
      width: 100%;
    }
  }
  .logo {
    margin-top: calc(var(--tracking-large) * 1);
    max-width: 250px;
  }
}
</style>
