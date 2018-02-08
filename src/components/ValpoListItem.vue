<template>
  <li class="valpo-list-item">
    <slot></slot>
  </li>  
</template>

<script>
export default {
  name: "ListItem"
};
</script>

<style lang="scss">
.valpo-list-item {
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: inline-block;
  list-style-type: none;
  margin: 2.5vw;
  max-width: 160px;
  position: relative;
  transition: all 0.3s ease-out;
  vertical-align: top;
  &:hover {
    transform: scale(1.08);
  }
  figure {
    height: auto;
    figcaption {
      margin-top: 0.5em;
      font-family: "BentonSans Cond";
      font-size: 1.1em;
      font-weight: 500;
      padding-top: 0.2em;
    }
  }
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: 800px) {
    margin-top: 0;
  }
  @media (max-width: 550px) {
    margin: 0;
    max-width: 100%;
    width: 100%;
    figure {
      margin: 1.5em auto;
      max-width: 160px;
    }
  }
}
</style>
