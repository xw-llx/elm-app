<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/1.png" alt="" />
    </div>
    <!-- 手机号 -->
    <input-login
      class="AA"
      type="number"
      v-model="phone"
      placeholder="手机号"
      :disabled="disabled"
      :btnTitle="btnTitle"
      :error="errors.phone"
      @btnClick="btnYZM"
    >
    </input-login>
    <!-- 验证码 -->
    <input-login
      class="BB"
      type="number"
      v-model="yzm"
      placeholder="验证码"
      :error="errors.code"
    >
    </input-login>
    <!-- 用户协议 -->
    <div class="cc">
      <p>
        新用户登录即自动注册,表示已同意
        <span class="ccSpan">《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录 -->
    <div class="dd">
      <!-- disabled里面true是不能点击false是能点击 -->
      <button class="ee" :disabled="ddCom" @click="ddLogin">登录</button>
      <!-- <router-link to="/home">
      <button class="ee" :disabled="ddCom" @click="ddLogin">登录</button>
      </router-link> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import inputLogin from "../components/inputLogin";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      yzm: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false,
    };
  },
  components: {
    inputLogin,
  },
  computed: {
    ddCom() {
      if (!this.phone || !this.yzm) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    btnYZM() {
      if (this.hfPhone()) {
        this.djsPhone();
        // 发送网络请求
        this.$axios
          .post("/api/posts/sms_back", {
            tpl_id: "136729",
            key: "795be723dd9e88c3ea98e2b6713ab795",
            phone: this.phone,
          })
          .then((res) => {
            console.log(res);
          });
      }
    },
    // 获取验证码倒计时
    djsPhone() {
      let time = 45;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    hfPhone() {
      // 验证手机号
      if (!this.phone) {
        this.errors = {
          phone: "手机号不能为空",
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请输入正确的手机号",
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    ddLogin() {
      console.log('快开学了');
      this.$router.push({path:"/home"});

      // // 取消错误提醒
      // this.errors={}
      // // 发送请求
      // this.$axios.post("/api/posts/sms_back",{
      //   phone:this.phone,
      //   code:this.yzm
      // }).then(res=>{
      //   console.log(res);
      //   // 检验成功 设置登录状态且跳转到/
      //   localStorage.setItem("ele_login",true)
      //   this.$router.push('/')
      // }).catch(err=>{
      //   console.log(err);
      //   this.errors={
      //     code:err.response.data.msg
      //   }
      // })
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px /* 30px -> .4rem */;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
  padding: 30px;
}
img {
  width: 90px /* 160px -> 2.133333rem */;
}
.AA {
  padding: 20px 0 0 0;
}
.BB {
  padding: 20px 0 0 0;
}
.cc {
  font-size: 14px;
  padding: 16px 0 0 0;
  color: grey;
}
.ccSpan {
  color: blue;
}
.dd {
  width: 100%;
  height: 25%;
  padding: 20px 0 0 0;
}
.ee {
  width: 100%;
  height: 25%;
  background-color: green;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  outline: none;
}
.ee[disabled] {
  background-color: gray;
}
</style>
