<template>
  <div class="user">
      <div class="header">
          <div class="avater">
              <img :src="base + user.head_img" alt="">
          </div>
          <div class="info">
              <div class="name">
                  <!-- 第一种写法 -->
                  <!-- <span v-if="user.gender === 1" class="iconfont iconxingbienan"></span>
                  <span v-else class="iconfont iconxingbienv"></span> -->
                  <!-- 第二种写法 -->
                  <span class="iconfont" :class="user.gender === 1 ? 'iconxingbienan' : 'iconxingbienv'"></span>
                  <span>{{user.nickname}}</span>
              </div>
              <div class="time">{{user.create_date | time}}</div>
          </div>
          <div class="arrow">
              <span class="iconfont iconjiantou1"></span>
          </div>
      </div>
      <hm-navitem to="/follow">
          <template>我的关注</template>
          <template #content>关注的用户</template>
      </hm-navitem>
      <hm-navitem>
          <template>我的跟帖</template>
          <template #content>跟帖/回复</template>
      </hm-navitem>
      <hm-navitem>
          <template>我的收藏</template>
          <template #content>文章/视频</template>
      </hm-navitem>
      <hm-navitem to="/edit">设置</hm-navitem>
  </div>
</template>

<script>
export default {
  computed: {
    base () {
      return this.$axios.defaults.baseURL
    }
  },
  data () {
    return {
      user: ''
    }
  },
  async created () {
    // token 必须放在请求头里 请求头Authorization
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const res = await this.$axios.get(`/user/${userId}`, {
      headers: {
        Authorization: token
      }
    })
    // console.log(res)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.user = data
    }
  }
}
</script>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 3px solid #ccc;
    .avater {
        width: 70px;
        height: 70px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .info {
        flex: 1;
        padding-left: 10px;
        font-size: 14px;
        .iconxingbienan {
            color: skyblue;
            padding-right: 3px;
        }
        .iconxingbienv {
            color: pink;
            padding-right: 3px;
        }
        .time {
            margin-top: 10px;
            color: #666;
        }
    }
}
</style>
