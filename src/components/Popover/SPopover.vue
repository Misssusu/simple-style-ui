<template>
  <div class="s-popover" ref="popover">
    <!--Content-->
    <span ref="contentWrapper" class="s-popover-content-wrapper" :class="contentClasses" v-if="visible">
      <slot name="content"></slot>
    </span>
    <!--Trigger-->
    <span class="s-popover-trigger-wrapper" ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'SPopover.vue',
    mounted(){
      this.bindTrigger();
    },
    beforeDestroy() {
      this.close();
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onPopoverClick)
      }
      else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(trigger) {
          return ['click', 'hover'].indexOf(trigger) > -1
        }
      }
    },
    computed: {
      contentClasses() {
        return [ `s-popover-content-wrapper-${this.position}` ]
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      bindTrigger(){
        if (this.trigger === 'click') {
          this.$refs.popover.addEventListener('click', this.onPopoverClick)
        }
        else {
          this.$refs.popover.addEventListener('mouseenter', this.open);
          this.$refs.popover.addEventListener('mouseleave', this.close);
        }
      },
      onPopoverClick(){
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible) {
            this.close()
          }
          else {
            this.open()
          }
        }
      },
      setContentPosition() {
        // Append content to document.body
        document.body.appendChild(this.$refs.contentWrapper);

        // Get button wrapper styles
        const { contentWrapper, triggerWrapper } = this.$refs;
        const {top, left, height, width} = triggerWrapper.getBoundingClientRect();
        const {height: contentHeight} = contentWrapper.getBoundingClientRect();
        const positions = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + window.scrollY + (height - contentHeight)/2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - contentHeight)/2,
            left: left + window.scrollX + width
          }
        };
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onDocClick(event) {
        // Click outside of OwPopover, then close it
        if (this.$refs.popover &&
          (this.$refs.popover === event.target ||
            this.$refs.popover.contains(event.target))) {
          return;
        }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === event.target ||
            this.$refs.contentWrapper.contains(event.target))) {
          return;
        }
        this.close();
      },
      close(){
        this.visible = false;
        document.removeEventListener('click', this.onDocClick)
      },
      open(){
        this.visible = true;
        this.$nextTick(()=>{
          this.setContentPosition();
          document.addEventListener('click', this.onDocClick)
        })
      }
    }
  };
</script>

<style scoped lang="scss">
  .s-popover {
    display: inline-block;
    position: relative;
    & + & {
      margin-left: 4px;
    }
  }
  .s-popover-trigger-wrapper {
    display: inline-block;
  }
  .s-popover-content-wrapper {
    position: absolute;
    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    border: 1px solid $--popover-border-color;
    border-radius: $--button-radius;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      position: absolute;
      border: 10px solid transparent;
    }

    &-top {
      transform: translateY(-100%);
      margin-top: -13px;

      &::before, &::after {
        left: 10px;
        border-bottom: none;
      }

      &::before {
        border-top-color: $--popover-border-color;
        top: calc(100%);
      }

      &::after {
        top: calc(100% - 1px);
        border-top-color: white;
      }
    }

    &-bottom {
      margin-top: 13px;

      &::before, &::after {
        left: 10px;
        border-top: none;
      }

      &::before {
        border-bottom-color: $--popover-border-color;
        bottom: 100%;
      }

      &::after {
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }

    &-left {
      margin-left: -13px;
      transform: translateX(-100%);

      &::before, &::after {
        top: 50%;
        border-right: none;
        transform: translateY(-50%);
      }

      &::before {
        border-left-color: $--popover-border-color;
        left: 100%;
      }

      &::after {
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }

    &-right {
      margin-left: 13px;

      &::before, &::after {
        top: 50%;
        border-left: none;
        transform: translateY(-50%);
      }

      &::before {
        border-right-color: $--popover-border-color;
        right: 100%;
      }

      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>
