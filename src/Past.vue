<template>
  <div class="past">
    <div class="button">
      <s-button type="default">Default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="warning">Warning</s-button>
      <s-button type="danger">Danger</s-button>
      <s-button type="info">Info</s-button>
      <s-button type="success">Success</s-button>
    </div>
    <div class="input">
      <span>{{value}}</span>
      <s-input v-model="value" clearable placeholder="Please enter content"></s-input>
      <s-input v-model="disabledValue" :disabled="true" placeholder="Please enter content"></s-input>
      <s-input v-model="searchValue" search placeholder="Please enter content"></s-input>
      <s-input v-model="passwordValue" show-password placeholder="Please enter content"></s-input>
      <s-input v-model="calendarValue" calendar placeholder="Please select a date"></s-input>
    </div>
    <div class="popover">
      <s-popover position="top">
        <template slot="content">
          <div>Popover Content</div>
        </template>
        <s-button>Pop It!</s-button>
      </s-popover>
      <s-popover position="left">
        <template slot="content">
          <div>Popover Content</div>
        </template>
        <s-button>Pop It!</s-button>
      </s-popover>
      <s-popover position="right">
        <template slot="content">
          <div>Popover Content</div>
        </template>
        <s-button>Pop It!</s-button>
      </s-popover>
      <s-popover position="bottom">
        <template slot="content">
          <div>Popover Content</div>
        </template>
        <s-button>Pop It!</s-button>
      </s-popover>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Past.vue',
    data(){
      return {
        value: '',
        disabledValue: '',
        searchValue: '',
        passwordValue: '',
        calendarValue: ''
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
