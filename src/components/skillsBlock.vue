
<template>
  <div>

    <v-layout row wrap>
      <v-flex xs12>
        <section-header title="Core skills"></section-header>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-space-around class="mb-4">
      <v-flex xs6 sm2 v-for="cat in uniqueCategories">
        <div style="text-align: center">
          <v-checkbox :label="cat" :key="cat"
                      v-model="visibleCategories"
                      :color="getSkillColor(cat)"
                      :value="cat"
                      hide-details>
          </v-checkbox>
        </div>

      </v-flex>

    </v-layout>

    <v-layout col wrap justify-center>
      <v-flex xs12 sm6 md4 v-for="skill in filteredSkills" :key="skill._id">
        <skill-summary-card :skill="skill" class="ma-2"></skill-summary-card>
      </v-flex>

    </v-layout>

  </div>

</template>

<script>

import PortfolioService from '../services/api/portfolio.service';
import { SKILL_COLOR_MAP } from '../services/skills/skillColorMapper.service';
import skillSummaryCard from './skillSummaryCard.vue';
import _ from 'lodash';

let portfolioService = new PortfolioService();

export default {
  components: { skillSummaryCard },
  name: 'skillsBlock',
  created: function () {
    portfolioService.getSkills().then((skills) => {
      this.skills = _.map(skills, (skill) => {
        skill.color = this.getSkillColor(skill.category);
        return skill;
      });

      this.uniqueCategories = _.uniqBy(_.map(this.skills, 'category'));
      this.visibleCategories = this.uniqueCategories;
    });
  },
  data: function () {
    return {
      skills: [],
      uniqueCategories: [],
      visibleCategories: []
    };
  },
  computed: {
    filteredSkills: function () {
      return this.skills.filter(j => this.visibleCategories.includes(j.category));
    }
  },
  methods: {
    getSkillColor: function (skillCat) {
      return SKILL_COLOR_MAP.get(skillCat);
    }
  }
};
</script>
