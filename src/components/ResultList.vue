<template>
  <!--v-for="msg in messages-->
  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">{{title}}</h1>

    </md-toolbar>

    <md-table md-sort="homeTeam" md-sort-type="desc" @sort="onSort">
      <md-table-header>
        <md-table-row>
          <md-table-head md-sort-by="homeTeam">Home team</md-table-head>
          <md-table-head md-sort-by="homeGoals">Home goals</md-table-head>
          <md-table-head md-sort-by="awayGoals">Away goals</md-table-head>
          <md-table-head md-sort-by="awayTeam">Away team</md-table-head>
          <md-table-head>Sky match Id
          </md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in localMessages" :key="rowIndex" :md-item="row" md-auto-select md-selection>
          <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'homeTeam' && columnIndex !== 'awayTeam'" v-if="columnIndex !== 'type'">
            {{ column }}
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

  </md-table-card>

</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'resultList',
    props: [
      'messages',
      'title'
    ],
    data: function () {
      return {
        localMessages: []
      };
    },
    computed: {
    },
    watch: {
      messages: function (newVal) {
        this.localMessages = newVal;
      }
    },
    methods: {
      onSort (sort) {
        this.localMessages = _.orderBy(this.localMessages, [item => item[sort.name]], sort.type);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
