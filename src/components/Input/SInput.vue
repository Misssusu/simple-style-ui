<template>
  <div class="s-input-wrapper">
    <input
      class="s-input"
      :value="value"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value)"
      @input="$emit('tabs.js', $event.target.value)"
    >
    <div class="s-input-icon" v-if="clearable && nonEmpty">
      <s-icon name="clear" @click="clickEvent"></s-icon>
    </div>
    <div class="s-input-icon" v-if="search">
      <s-icon name="search" @click="clickEvent"></s-icon>
    </div>
    <div class="s-input-icon" v-if="showPassword">
      <s-icon name="eye" @click="clickEvent" v-if="eye"></s-icon>
      <s-icon name="icon_eye-close" @click="clickEvent" v-if="!eye"></s-icon>
    </div>
    <div class="s-input-icon" v-if="calendar">
      <s-icon name="calendar" @click="clickEvent"></s-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SInput',
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
      },
      iconName: {
        type: String
      },
      clearable: {
        type: Boolean
      },
      search: {
        type: Boolean
      },
      showPassword: {
        type: Boolean
      },
      calendar: {
        type: Boolean
      }
    },
    computed: {
      nonEmpty(){
        return this.value;
      },
      type(){
        return this.eye? 'password': 'text';
      }
    },
    data(){
      return {
        eye: true
      }
    },
    methods: {
      clickEvent(){
        if(this.clearable) {
          this.$emit('tabs.js', '');
        }
        if(this.showPassword) {
          this.eye = !this.eye;
        }
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
    width: 100%;
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
  .s-input-wrapper {
    position: relative;
    display: inline-flex;
    width: 180px;
    align-items: center;
    .s-input-icon {
      position: absolute;
      right: 15px;
      cursor: pointer;
    }
    & + & {
      margin-left: 4px;
    }
  }
</style>
