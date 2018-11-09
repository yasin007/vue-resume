<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods" tag="a">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" tag="a">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" tag="a">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.getIndexData()
    },
    methods: {
      getIndexData() {
        var that = this
        axios.get('/api/seller').then(function (response) {
          that.seller = response.data.data
        })
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
