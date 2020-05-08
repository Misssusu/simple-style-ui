<template>
  <div class="s-collapse-item" @click="toggle">
    <div class="title" :class="classes">
      {{title}}
      <s-icon name="right" class="collapse-icon" :class="classes"></s-icon>
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SCollapseItem',
    inject: ['eventBus'],
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes(){
        return {
          active: this.isOpen
        }
      }
    },
    mounted(){
      if(this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.isOpen = name === this.name;
        });
      }
    },
    data(){
      return {
        isOpen: false
      }
    },
    methods: {
      toggle(){
        if(this.isOpen){
          this.eventBus.$emit('update:selected','close')
        }else{
          this.eventBus.$emit('update:selected',this.name)
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .s-collapse-item {
    cursor: pointer;
  }
  .title {
    height: 48px;
    line-height: 48px;
    text-align: left;
    border-bottom: 1px solid $--tabs-border-color;
    position: relative;
    display: flex;
    align-items: center;
  }
  .title.active {
    border-bottom-color: transparent;
  }
  .content {
    padding-bottom: 25px;
    text-align: left;
    border-bottom: 1px solid $--tabs-border-color;
  }
  .collapse-icon {
    font-size: 13px;
    position: absolute;
    right: 4px;
    transition: all .3s;
  }
  .collapse-icon.active {
    transform: rotate(90deg);
    transition: all .3s;
  }
</style>
