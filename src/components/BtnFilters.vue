<template>
  <div id="filters">
    <div class="filter">
      <a-button v-for="(filter,i) in filters"
                :key="i" :value="filter"
                :filter="filter"
                @click=" clickFilterButton(filter)">{{filter}}
      </a-button>
    </div>
  </div>

</template>

<script>

  export default {
    name: "BtnFilters",
    data() {
      return {
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
