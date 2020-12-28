<template>
  <div>
    <el-form
      :inline="true"
      :model="data"
      class="demo-form-inline"
      :rules="rules"
      ref="form"
      :validate-on-rule-change="true"
    >
      <el-form-item label="审批人" prop="user">
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="data.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addRules">添加新的校验规则</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    const userValidator = (rule, value, callback) => {
      if (value.length > 6) {
        callback()
      } else {
        callback(new Error('长度为6-12位'))
      }
    }
    return {
      data: {
        user: '',
        region: ''
      },
      rules: {
        user: [{ required: true, message: '请你输入姓名', trigger: ['change', 'blur'] }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((isValidate, errors) => {
        console.log(errors)
        isValidate || this.$message(errors.user[0].message)
      })
      this.$refs.form.resetFields() // 对整个表单进行重置
    },
    addRules () {
      const userValidator = (rule, value, callback) => {
        if (value > 12) {
          callback()
        } else {
          callback(new Error('请输入正确信息'))
        }
      }
      const newRule = [
        ...this.rules.user,
        { validator: userValidator, trigger: 'change' }
      ]
      this.rules = Object.assign({}, this.rules, { user: newRule })
    }
  }
}
</script>
