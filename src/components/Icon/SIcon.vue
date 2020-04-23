<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  import '../../assets/icons/index'
  export default {
    name: 'SIcon.vue',
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style scoped lang="scss">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 18px;
    color: #606266;
    @include flexCenterMx(inline-flex);
  }
</style>
