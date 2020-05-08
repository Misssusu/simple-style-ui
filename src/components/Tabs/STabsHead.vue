<template>
  <div class="s-tabs-nav" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'STabsHead',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm)=>{
        this.updateLinePosition(vm)
      })
    },
    methods: {
      updateLinePosition (selectedVm) {
        let {width, left} = selectedVm.$el.getBoundingClientRect();
        let {left: left2} = this.$refs.head.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.left = `${left - left2}px`
      }
    }
  };
</script>
<style lang="scss" scoped>
  .s-tabs-nav {
    height: $--tabs-height;
    display: flex;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $--tabs-border-color;

    > .line {
      border-bottom: 2px solid $--tabs-blue;
      border-radius: 4px;
      position: absolute;
      bottom: 0;
      transition: 350ms;
    }

    > .actions {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>
