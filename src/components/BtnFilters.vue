<template>
  <div id="filters">
    <div class="filter">
      <button v-for="(filter,i) in filters"
              :key="i" :value="filter"
              :filter="filter"
              :class="['btnFilter', { selected: choiceBtn === filter }]"
              @click=" clickFilterButton(filter)">{{filter}}
      </button>
    </div>
  </div>

</template>

<script>
  export default {
    name: "BtnFilters",
    data() {
      return {
        choiceBtn: this.$store.state.choiceBtn,
        filters: ['All', 'Active', 'Complete']
      }
    },
    methods: {
      clickFilterButton(filter) {
        this.$store.commit('updateChoiceBtn', filter);
      },
    },


  }
</script>

<style scoped>

</style>
