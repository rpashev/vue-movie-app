<template>
  <the-header />
  <main>
    <router-view></router-view>
  </main>
  <the-footer />
</template>


<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

</script>
<style lang="scss">
@import "./utils/colors";
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-sarif;
  background: radial-gradient(circle,
      rgba(22, 66, 17, 1) 13%,
      rgba(0, 0, 0, 0.8802871490393032) 100%);
  line-height: 1.4;
  color: $gray-darker;

  #app {
    position: relative;
    min-height: 100vh;

    main {
      padding: 6rem 0 8rem 0;
      min-width: 320px;
      max-width: 2000px;
      margin: 0 auto;
    }
  }
}

h2 {
  opacity: 0.8;
  font-size: 1.8rem;
  text-align: center;
  color: $gray-light;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: $gray-light;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
