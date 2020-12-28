<template>
  <div class="register">
    <div class="container">
      <div class="register-box">
        <a href="javascript:;"><img src="/imgs/logo2.png" alt="" /></a>
        <div class="login-form">
          <h3>
            <span class="checked">注册账号</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入用户名" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请再次输入密码"
              v-model="password2"
            />
          </div>
          <div class="input">
            <input
              type="email"
              placeholder="请输入邮箱"
              v-model="email"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="register">立即注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <second-footer></second-footer>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SecondFooter: () => import('@/components/SecondFooter')
  },
  data () {
    return {
      username: '',
      password: '',
      password2: '',
      email: ''
    }
  },
  methods: {
    register () {
      const { username, password, email } = this
      this.$http.post('/user/register', {
        username,
        password,
        email
      }).then((res) => {
        alert('注册成功,即将跳转到登录页面')
        setTimeout(() => {
          this.$router.push('/login')
        }, 1500)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.register {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  .footer {
    margin-top: 40px;
  }
  .register-box {
    position: relative;
    top: 50px;
    left: 50%;
    width: 854px;
    height: 664px;
    transform: translate(-50%, 0%);
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        top: 120px;
        left: 25%;
        h3{
          line-height:23px;
          font-size:40px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
            box-sizing: border-box;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
          text-align: center;
        }
      }
    a {
      display: inline-block;
      margin: 0 auto;
      img {
        width: 256px;
        height: 113px;
      }
    }
  }
}
</style>
