<template>
  <div class="section-header ml-2">
  <h3 class="section-header__title">{{mainTitlePart}}
    <span class="section-header__title-highlight">{{lastWordInTitle}}</span>
  </h3>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'sectionHeader',
    props: {
      title: { type: String, required: true }
    },
    computed: {
      // todo: extract these as duplicate with contentBlock
      lastWordInTitle () {
        return this.title.split(' ').pop();
      },

      mainTitlePart () {
        return _.dropRight(this.title.split(' ')).join(' ');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.section-header {
  margin: 30px 0 40px;
  text-transform: uppercase;

  &__title {
    font-family: 'Lato';
    font-weight: 300;
    font-size: 3rem;
    line-height: 3rem;
    color: #4b4e53;
    padding: 22px 25px 24px;

    border-left: #4b4e53 2px solid;
  }

  &__title-highlight {
      font-weight: 700;
  }
}
</style>
