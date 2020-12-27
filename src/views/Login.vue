<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/logo2.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <form class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" autocomplete="off" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="$router.push('/register')">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </form>
      </div>
    </div>
      <second-footer></second-footer>
  </div>
</template>
<script>
export default {
  name: 'login',
  components: {
    SecondFooter: () => import('@/components/SecondFooter')
  },
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      const { username, password } = this
      this.$http.post('/user/login', {
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId', res.id, { expires: '1M' })
        this.$store.dispatch('saveUserName', res.username)
        this.$router.push('/index')
      })
    }
  }
}
</script>
<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      position: relative;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom: 29px;
        right: 0px;
        h3{
          line-height:23px;
          font-size:24px;
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
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
}
</style>
