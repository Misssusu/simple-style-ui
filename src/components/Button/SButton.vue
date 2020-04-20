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
        default: 'primary',
        validator: function(value){
          return ['primary','warning','danger','info','success'].indexOf(value) > -1

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
    background: $--button-bg;
    padding: .25em 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
      border-color: $--border-color-hover;
    }

    &:active {
      background: $--button-active-bg;
    }

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
    &-primary {}
  }
</style>
