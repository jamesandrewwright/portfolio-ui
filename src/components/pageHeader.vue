<template>
  <div class="page-header grey darken-4">
    <div>
        <h1 class="page-header__title">{{title}}</h1>
        <h2 v-if="subtitle" class="page-header__subtitle">{{subtitle}}</h2>
      </div>
  </div>
</template>

<script>
export default {
  name: 'pageHeader',
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: false }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .page-header {
    text-align:center;
    background: #303236;
    color: white;
    padding: 4rem;
    font-family: 'Lato', sans-serif;
    margin: -1.6rem;

    &__title {
      text-transform: uppercase;
      font-size: 2.6rem;
      line-height: 2.5rem;
      letter-spacing: 0.3rem;
      font-weight:700;
    }

    &__subtitle {
      text-transform: uppercase;
      font-size: 2rem;
      line-height: 2.5rem;
      letter-spacing: 0.3rem;
      font-weight:400;
    }
  }

  @media only screen and (max-width: 767px) {
    .page-header {
      height: 350px;
    }
  }
</style>
