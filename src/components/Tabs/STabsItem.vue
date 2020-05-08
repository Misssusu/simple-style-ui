<template>
    <div class="s-tabs-item" :class="classes" @click="onClickItem">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'STabsItem',
    data(){
      return {
          active: false
      }
    },
    inject: ['eventBus'],
    created(){
        if(this.eventBus) {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            });
        }
    },
    props: {
      name: {
          type: String | Number,
          required: true
      }
    },
    computed: {
        classes() {
            return {
                active: this.active,
                disabled: this.disabled
            }
        }
    },
    methods: {
        onClickItem(){
            if(this.disabled){ return }
            this.eventBus.$emit('update:selected',this.name,this)
        }
    }
}
</script>
<style lang="scss" scoped>
    .s-tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        font-weight: bold;
        &.active {
            color: #409eff;
        }
        &.disabled {
            color: $--tabs-disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>
