<template>
  <div class="s-input-wrapper">
    <input
      class="s-input"
      :value="value"
      :disabled="disabled"
      type="text"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    name: 'SInput.vue',
    props: {
      value: {
        type: [String, Number, Date]
      },
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style scoped lang="scss">
  .s-input {
    border-radius: $--border-radius;
    display: inline-block;
    height: $--input-height;
    line-height: $--input-height;
    padding: $--input-padding;
    outline: none;
    border: 1px solid $--input-border-color;
    background: $--color-white;
    transition: background-color .3s;
    &:hover {
      border-color: $--input-border-color-hover;
    }
    &:focus {
      border-color: $--input-border-color-focus;
    }
  }
  .s-input[disabled] {
    color: $--input-color-disabled;
    background: $--input-color-fill-disabled;
  }
</style>
