<template>
  <div class="user-login">
    <h2>用户登录:</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as API from '@/api/video'

export default {
  name: "Login",
  data() {
    return {
      form: {
        user_name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      API.Login(this.form).then((resp) => {
        if (resp.status > 0) {
          this.$notify.error({
            title: '登陆失败',
            message: resp.msg,
          });
        } else {
          this.$notify({
            title: '登录成功',
            message: `您登陆的ID为${resp.data.id}`,
            type: 'success',
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
  },
}
</script>