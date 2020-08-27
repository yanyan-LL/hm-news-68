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
  methods: {
    async onSubmit () {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      console.log(res.data)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        // 在组件中必须通过this.$toast
        this.$toast.success(message)
        // 保存token
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

<style lang="less">
.tips {
  padding: 15px;
  font-size: 16px;
  text-align: right;
  a {
    color: red;
  }
}
</style>
