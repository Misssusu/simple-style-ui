<template>
    <div class="s-tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
export default {
    name: 'STabs',
    data(){
      return {
          eventBus: new Vue()
      }
    },
    props: {
        selected: {
          type: String | Number,
          required: true
        }
    },
    provide(){
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        if(this.$children.length===0){
            console && console.warn &&
            console.warn('s-tabs 的子组件应该是 s-tabs-nav 和 s-tabs-body，但你没有写子组件')
        }
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'STabsHead') {
                vm.$children.forEach((childVm)=>{
                    console.log(childVm);
                    if(childVm.$options.name === 'STabsItem' && childVm.name === this.selected) {
                        this.eventBus.$emit('update:selected', this.selected, childVm)
                    }
                })
            }
        });
    }
}
</script>
<style lang="sass" scoped>

</style>
