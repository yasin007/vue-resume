<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar">
        <img width="64px" height="64px" :src="seller.avatar">
      </div>
      <div class="info">
        <div class="title">
          <span class="brand-icon"></span>
          <span class="goods-title">{{seller.name}}</span>
        </div>
        <div class="time-delivery">{{seller.description}}/{{seller.deliveryTime}}分钟到达</div>
        <div class="preferential" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="announcement-warp">
      <div class="announcement">
        <span class="announcement-icon"></span>
        <span class="announcement-tip">{{seller.bulletin}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .header
    background: rgba(7, 17, 27, 0.5)
    color: white
    .content-wrap
      padding: 24px 12px 18px 24px
      display: flex
      blur: 10px
      .avatar
        .img
          border-radius: 4px
          overflow: hidden
      .info
        margin-left: 16px
        margin-top: 2px
        .title
          .goods-title
            font-size: 16px
            font-weight: bold
            height: 18px
            line-height: 18px
          .brand-icon
            display: inline-block
            width: 30px
            height: 18px
            bg-image("brand")
            background-repeat no-repeat
            background-size: 30px 18px
        .time-delivery
          margin-top: 8px
          font-size: 12px
          line-height: 12px
          font-weight: 200
        .preferential
          margin-top: 10px
          .text
            font-weight: 200
            font-size: 10px
            line-height: 12px
          .icon
            display inline-block
            width: 12px
            height: 12px
            bg-image("decrease_1")
            background-repeat no-repeat
            background-size: 12px 12px
    .announcement-warp
      .announcement
        padding-left: 12px
        padding-right: 12px
        height: 28px
        background rgba(7, 17, 27, 0.2)
      .announcement-tip
        font-size: 10px
        font-weight: 200
        line-height: 28px
      .announcement-icon
        display inline-block
        width: 22px
        height: 12px
        bg-image("bulletin")
        background-repeat no-repeat
        background-size: 22px 12px
</style>
