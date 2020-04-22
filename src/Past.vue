<template>
  <div class="button">
    <s-button type="default">Default</s-button>
    <s-button type="primary">primary</s-button>
    <s-button type="warning">Warning</s-button>
    <s-button type="danger">Danger</s-button>
    <s-button type="info">Info</s-button>
    <s-button type="success">Success</s-button>
    <s-input v-model="value" placeholder="Please enter content"></s-input>
    <h1>{{value}}</h1>
    <s-input :disabled="true" placeholder="Please enter content"></s-input>
  </div>
</template>

<script>

  export default {
    name: 'Past.vue',
    data(){
      return {
        value: ''
      }
    }
  };
</script>

<style scoped>

</style>
