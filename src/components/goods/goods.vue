<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item" :class="{'current':currentIndex===index}"
            @click="selectMenu(index,$event)" ref="menuList">
          <span class="text">
        {{item.name}}
        </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook" ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food,index) in item.foods" :key="index" class="food-item border-1px">
              <div class="icon">
                <img width="57px" height="57px" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span><span class="old"
                                                                v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import shopcart from 'components/shopcart/shopcart'

  export default {
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            this._followScroll(i)
            return i
          }
        }
        return 0
      }
    },
    created() {
      this.getIndexData()
    },
    methods: {
      getIndexData() {
        var that = this
        axios.get('/api/goods').then(function (response) {
          that.goods = response.data.data
          that.$nextTick(() => {
            that._initScroll()
            that._calculateHeight()
          })
        })
      },
      selectMenu(index, event) {
        // 拒绝点击两次
        if (!event._constructed) {
          return
        }
        let foodList = this.$refs.foodList
        let el = foodList[index]
        this.foodsScroll.scrollToElement(el, 300)
      },
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })

        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        })

        this.foodsScroll.on('scroll', (pos) => {
          // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
          if (pos.y <= 0) {
            this.scrollY = Math.abs(Math.round(pos.y))
          }
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodList
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      _followScroll(index) {
        let menuList = this.$refs.menuList
        let el = menuList[index]
        this.meunScroll.scrollToElement(el, 300, 0, -100)
      }
    },
    components: {
      shopcart
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display flex
    position absolute
    width 100%
    top 174px
    bottom 46px
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        &.current
          position relative
          margin-top -1px
          z-index 10
          background #fff
          font-weight 700
          .text
            border-none()
        .text
          font-size 12px
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7, 17, 27, 0.1))
    .foods-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left: 2px solid #d9dde1
        font-size 12px
        color rgb(147, 153, 159)
        background #f3f5f7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          boder-none()
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          font-size 14px
          line-height 14px
          height 14px
          color rgb(7, 17, 27)
        .desc
          margin 0px 0px 8px 0
          font-size 10px
          line-height 12px
          color rgb(147, 153, 159)
        .extra
          font-size 10px
          line-height 10px
          color rgb(147, 153, 159)
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size 10px
            color rgb(147, 153, 159)
</style>
