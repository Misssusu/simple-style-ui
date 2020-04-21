<template>
  <div class="button">
    <s-button type="default">Default</s-button>
    <s-button type="primary">primary</s-button>
    <s-button type="warning">Warning</s-button>
    <s-button type="danger">Danger</s-button>
    <s-button type="info">Info</s-button>
    <s-button type="success">Success</s-button>
  </div>
</template>

<script>
  import SButton from './components/Button/SButton.vue'

  export default {
    name: 'Past.vue',
    components: {
      's-button': SButton
    }
  };
</script>

<style scoped>

</style>
