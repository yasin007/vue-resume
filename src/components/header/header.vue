<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avrtar">
        <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">nihao</span>
        </div>
        <div class="description">
          你好/3分钟分钟送达
        </div>
        <div class="support">
          <span class="icon"></span>
          <span class="text">在线支付满减48减5</span>
        </div>
      </div>
      <div class="support-count" @click="showDetail">
        <span class="count">5个</span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <div class="bulletin-title"></div>
      <div class="bulletin-text">fhdsfhdskhfkdjshfjkdhsfjkhdsjkfhdsjvxjijdklasdakjflkdslkfjldskjaflfafdsafafdsfdsfsfsd
      </div>
    </div>
    <div v-show="detialShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main"></div>
      </div>
      <div class="detail-close"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detialShow: false
      }
    },
    methods: {
      showDetail() {
        this.detialShow = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    color white
    background gray
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avrtar
        display inline-block
        vertical-align top
        & > img
          border-radius 2px
      .content
        display inline-block
        font-size 13px
        margin-left 16px
        .title
          margin-top 2px
          margin-bottom 8px
          .brand
            vertical-align top
            display inline-block
            width 36px
            height 18px
            bg-image('brand')
            background-size 30px, 18px
            background-repeat no-repeat
          .name
            vertical-align top
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-bottom 12px
          font-size 12px
          line-height 12px
        .support
          .icon
            vertical-align top
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            background-size 12px, 12px
            background-repeat no-repeat
            bg-image('decrease_1')
          .text
            font-size 12px
            line-height 12px
      .support-count
        position absolute
        right 12px
        bottom 18px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        .count
          font-size 10px
    .bulletin-wrapper
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      font-size 0px
      .bulletin-title
        display inline-block
        vertical-align top
        margin-top 7px
        width 22px
        height 12px
        bg-image('bulletin')
        background-size 22px, 12px
        background-repeat no-repeat
      .bulletin-text
        display inline-block
        vertical-align top
        font-size 10px
        margin-left 4px
        margin-right 4px
    .detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      background rgba(7, 17, 27, 0.8)
</style>
