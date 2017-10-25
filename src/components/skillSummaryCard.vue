<template>
  <v-card class="skill-summary-card" v-bind:class="'skill-summary-card--' + skill.category" height="95%">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{skill.name}}</div>
            <div>{{skill.description}}</div>

            <v-chip :color="skill.color" text-color="white">{{skill.category}}</v-chip>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-card-media
            :src="'/static/' + skill.iconName"
            height="125px"
            contain
          ></v-card-media>
        </v-flex>
      </v-layout>
      <v-layout row justify-center align-center>
        <v-flex xs4>
          Expertise level:
        </v-flex>
        <v-flex xs8>
          <v-progress-linear v-model="skill.rating" :color="skill.color" background-opacity="0.3"></v-progress-linear>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'skillSummaryCard',
    props: {
      skill: { type: Object, required: true }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
