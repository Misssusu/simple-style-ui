<template>
  <div class="s-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'SCollapse',
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    props: {
      selected: {
        type: String | Number,
        required: true
      }
    },
    mounted() {
      this.eventBus.$emit('update:selected',this.selected)
    }
  };
</script>

<style scoped lang="scss">
  .s-collapse {
    border-top: 1px solid $--tabs-border-color;
  }
</style>
