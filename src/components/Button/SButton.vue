<template>
  <button
    :class="classes"
    @click="$emit('click', $event)">
<!--    <s-icon v-if="icon && !loading" :name="icon"></s-icon>-->
<!--    <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>-->
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    name: 'SButton',
    props: {
      type: {
        type: String,
        default: 'default',
        validator: function(value){
          return ['default','primary','warning','danger','info','success'].indexOf(value) > -1
        }
      }
    },
    computed: {
      classes(){
        return ['s-button',`s-button-${this.type}`]
      }
    }
  };
</script>
<style lang="scss" scoped>
  .s-button {
    height: $--button-height;
    font-size: $--font-size;
    border-radius: $--button-radius;
    border: 1px solid $--border-color;
    background: $--color-default-fill;
    padding: $--button-padding;
    @include flexCenterMx(inline-flex);
    vertical-align: middle;
    cursor: pointer;
    color: $--color;

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
      margin-left: 0;
    }

    > .content {
      order: 2
    }

    &.icon-right {
      > .content {
        order: 1
      }

      > .icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
    }
    &-default:hover {
      color: $--color-default-hover;
      border-color: $--border-color-hover;
      background: $--color-default-hover-fill;
      &:active {
        color: $--button-default-active;
        border-color: $--button-default-active;
      }
    }
    &-primary {
      background: $--color-primary-fill;
      border-color: $--color-primary-fill;
      color: $--color-white;
      &:hover {
        background: $--color-primary-hover;
      }
      &:active {
        background: $--color-primary-active;
      }
    }
    &-warning {
      background: $--color-warning-fill;
      border-color: $--color-warning-fill;
      color: $--color-white;
      &:hover {
        background: $--color-warning-hover;
      }
      &:active {
        background: $--color-warning-active;
      }
    }
    &-danger {
      background: $--color-danger-fill;
      border-color: $--color-danger-fill;
      color: $--color-white;
      &:hover {
        background: $--color-danger-hover;
      }
      &:active {
        background: $--color-danger-active;
      }
    }
    &-info {
      background: $--color-info-fill;
      border-color: $--color-info-fill;
      color: $--color-white;
      &:hover {
        background: $--color-info-hover;
      }
      &:active {
        background: $--color-info-active;
      }
    }
    &-success {
      background: $--color-success-fill;
      border-color: $--color-success-fill;
      color: $--color-white;
      &:hover {
        background: $--color-success-hover;
      }
      &:active {
        background: $--color-success-active;
      }
    }
    & + & {
      margin-left: 4px;
    }
  }
</style>
