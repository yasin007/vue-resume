<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index">
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      }
    },
    mounted() {
      this.getIndexData()
    },
    methods: {
      getIndexData() {
        axios.get('/api/goods').then(function (response) {
          console.log(response)
          this.goods = response.data.data
          console.log(this.goods)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .goods
    display flex
    position absolute
    width 100%
    top 174px
    bottom 46px
    background-color red
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
    .foods-wrapper
      flex 1
      background white
</style>
