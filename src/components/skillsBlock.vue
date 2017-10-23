
<template>
  <div>

    <v-layout row wrap>
      <v-flex xs12>
        <section-header title="Core skills"></section-header>
      </v-flex>
    </v-layout>

    <v-layout row wrap align-center justify-center>

      <v-flex xs3 v-for="cat in skillCategories">
            <v-switch
              v-bind:label="cat"
              v-model="checkedSkills"
              v-bind:value="cat">
            </v-switch>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md4 v-for="skill in filteredSkills" :key="skill._id">
        <skill-summary-card v-bind:skill="skill"></skill-summary-card>
      </v-flex>

    </v-layout>

  </div>

</template>

<script>

import PortfolioService from '../services/api/portfolio.service';
import skillSummaryCard from './skillSummaryCard.vue';
import _ from 'lodash';

let portfolioService = new PortfolioService();

export default {
  components: { skillSummaryCard },
  name: 'skillsBlock',
  created: function () {
    portfolioService.getSkills().then((skills) => {
      this.skills = skills;
      this.skillCategories = _.uniqBy(_.map(this.skills, 'category'));
      this.checkedSkills = this.skillCategories;
    });
  },
  data: function () {
    return {
      skills: [],
      skillCategories: [],
      checkedSkills: []
    };
  },
  computed: {
    filteredSkills: function () {
      if (!this.checkedSkills.length) {
        return this.skills;
      }

      return this.skills.filter(j => this.checkedSkills.includes(j.category));
    }
  }
};
</script>
