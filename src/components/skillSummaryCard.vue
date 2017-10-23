<template>
  <v-card class="skill-summary-card" v-bind:class="'skill-summary-card--' + skill.category">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{skill.name}}</div>
            <div>{{skill.description}}</div>

            <v-chip :color="getSkillColor()" text-color="white">{{skill.category}}</v-chip>
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
          <v-progress-linear v-model="skill.rating" :color="getSkillColor()" background-opacity="0.3"></v-progress-linear>
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
    },
    methods: {
      getSkillColor: function () {
        let color;

        if (this.skill.category === 'Methodology') {
          color = 'green darken-2';
        }

        if (this.skill.category === 'Other') {
          color = 'red darken-2';
        }

        if (this.skill.category === 'Design') {
          color = 'yellow darken-2';
        }

        if (this.skill.category === 'Technical') {
          color = 'blue darken-2';
        }

        return color;
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
