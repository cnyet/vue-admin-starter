<!--
 * @Descripttion: 登录页面
 * @Author: 天泽
 * @Date: 2020-05-29 16:21:30
 * @LastEditors: 天泽
 * @LastEditTime: 2020-12-29 11:04:50
-->
<template>
  <div class="login-container">
    <a-form class="form"
    :form="form"
    @submit="handleSubmit">
    <a-form-item>
      <h3 class="title">中后台系统登录</h3>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名' }] },
        ]"
        placeholder="用户名">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]"
        type="password"
        placeholder="密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" class="submit-btn login-form-button" html-type="submit" block>
        登录
      </a-button>
    </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { WrappedFormUtils } from 'ant-design-vue/types/form/form'
import { setCookie } from '@/utils/auth'

@Component({})
export default class Login extends Vue {
  form: WrappedFormUtils | undefined;
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  }
  handleSubmit (e: Event) {
    e.preventDefault()
    if (this.form) {
      this.form.validateFields((err, values) => {
        if (!err) {
          if (values.userName === 'admin' && values.password === '123') {
            setCookie('KbijSNc2afmE_CHQAAAB')
            this.$router.push('/')
          } else {
            this.$message.warn('账号或密码输入有误')
          }
        } else {
          this.$message.warn('账号或密码输入有误')
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container{
  height: 100%;
  display: flex;
  justify-content: center;
  .form{
    border-radius: 5px;
    background-clip: padding-box;
    width: 420px;
    height: 320px;
    margin-top: 180px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title{
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      color: #505458;
    }
    .submit-btn{
      margin-top: 20px;
    }
  }
}
</style>
