<template>
  <section class="content-block">
    <h1 class="content-block__title">{{mainTitlePart}}
      <span class="content-block__title-highlight">
      {{lastWordInTitle}}
      </span>
    </h1>
    <div class="content-block__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'contentBlock',
    props: {
      title: { type: String, required: true }
    },
    computed: {
      lastWordInTitle () {
        return this.title.split(' ').pop();
      },

      mainTitlePart () {
        return _.dropRight(this.title.split(' ')).join();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.content-block {
  margin: 8rem;

  &__title {
    font-family: 'Lato';
    font-weight: 300;
    font-size: 3rem;
    line-height: 3rem;
    color: #4b4e53;
    text-align: center;
  }

  &__title-highlight {
      font-weight: 700;
  }

  &__content {
    font-family: 'Lato';
    color:#333;
  }
}
</style>
