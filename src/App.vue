<template>
  <div id="app">
    <v-header>我是header</v-header>
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
          console.log(response)
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
  @import "/common/stylus/mixin.styl"
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      background: white
      border-1px: (rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          color: rgb(77, 85, 93)
          font-size: 14px
          &.active
            color: rgb(240, 20, 20)
</style>
