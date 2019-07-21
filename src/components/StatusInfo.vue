<template>
  <div>
    <label><input type="checkbox" :checked="toDo.status" @change="checkChange($event.target.status)">
      <span :class="{ checked: toDo.status }"
            :contenteditable="changeInformation"
            @dblclick="setChangeInformation(true)"
            @keypress.enter="enterPress"
            ref="information">{{toDo.information}}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "ToDoInformation",
    data() {
      return {
        changeInformation: false
      }
    },
    props: {
      toDo: Object
    },
    methods: {
      checkChange (status) {
        this.pushChange(this.toDo.information, status)
      },
      setChangeInformation(change) {
        this.changeInformation = change;
      },
      enterPress() {
        this.setChangeInformation(false);
        this.pushChange(this.$refs.information.innerText, this.toDo.status)
      },
      pushChange(information, status) {
        this.$emit('change', {
          information: information,
          status: status
        })
      }

    }
  }
</script>

<style>
  label {
    margin-left: -210px;
    font-size: 24px;
  }
</style>
