<template>
  <div class="past">
    <div class="button item">
      <s-button type="default">Default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="warning">Warning</s-button>
      <s-button type="danger">Danger</s-button>
      <s-button type="info">Info</s-button>
      <s-button type="success">Success</s-button>
    </div>
    <div class="input item">
      <span>{{value}}</span>
      <s-input v-model="value" clearable placeholder="Please enter content"></s-input>
      <s-input v-model="disabledValue" :disabled="true" placeholder="Please enter content"></s-input>
      <s-input v-model="searchValue" search placeholder="Please enter content"></s-input>
      <s-input v-model="passwordValue" show-password placeholder="Please enter content"></s-input>
      <s-input v-model="calendarValue" calendar placeholder="Please select a date"></s-input>
    </div>
    <div class="popover item">
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
    <div class="tabs item">
      <s-tabs selected="Home">
        <s-tabs-head>
          <s-tabs-item name="Home">Home</s-tabs-item>
          <s-tabs-item name="About">About</s-tabs-item>
          <s-tabs-item name="Career">Career</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
          <s-tabs-pane name="Home">Home</s-tabs-pane>
          <s-tabs-pane name="About">About</s-tabs-pane>
          <s-tabs-pane name="Career">Career</s-tabs-pane>
        </s-tabs-body>
      </s-tabs>
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
  .item:not(:first-child){
    margin-top: 20px;
  }
</style>
