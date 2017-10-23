
<template>
  <div>

    <v-layout row wrap>
      <v-flex xs12>
        <page-header title="James Wright" subtitle="User interface specialist / Front end developer"></page-header>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs10 offset-xs1 md6 offset-md3>

        <content-block title="James Wright">
          <p>An experienced web development specialist with experience across the whole project lifecycle</p>
          <p>Currently working for Capita Employee Benefits on the Orbit benefits SaaS platform, I am a user interface expert with a keen eye for detail regardless of the size of project or budget that I am working on.</p>
        </content-block>

      </v-flex>

    </v-layout>

    <skills-block></skills-block>

  </div>

</template>

<script>

import ContentBlock from './contentBlock.vue';
import SectionHeader from './sectionHeader.vue';
import SkillsBlock from './skillsBlock.vue';

export default {
  components: {
    SkillsBlock,
    SectionHeader,
    ContentBlock},
  name: 'home',
  data: function () {
    return {};
  }
};
</script>
