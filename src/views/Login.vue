<template>
  <div>
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="账号"
        placeholder="请输入账号"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
          登录
        </van-button>
      </div>
      <p class="tips">没有账号？去<router-link to="/register">注册</router-link></p>
  </van-form>
  </div>
</template>

<script>
export default {
  // 在页面一条转进来就把数据显示到页面上
  created () {
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async onSubmit () {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      console.log(res.data)
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        // 在组件中必须通过this.$toast
        this.$toast.success(message)
        // 保存token
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user.id)
        // 跳转到个人中心
        this.$router.push('/user')
      } else {
        this.$toast.fail(message)
      }
    }
  },
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '用户名长度是5-11位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码长度是3-9位数字', trigger: 'onChange' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
// 想要当前组件的的样式就在当前组件生效，需要给style添加scoped属性
// scoped：作用域  当前组件的样式带了scoped, 这个样式只会在当前组件生效
// scoped的原理：1.给当前组件的模板中所有的元素都添加一个特殊的属性  data-v-xxx
//              2.给当前组件的样式中所有的选择器增加一个属性选择器 div[data-v-xxx] .tips[dtat-v-xxx]
.tips {
  padding: 15px;
  font-size: 16px;
  text-align: right;
  a {
    color: red;
  }
}
</style>
