<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
          <div class="modal-header">
              <span>{{title}}</span>
              <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
          </div>
          <div class="modal-body">
              <slot name="body"></slot>
          </div>
          <div class="modal-footer">
              <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
              <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">{{cancelText}}</a>
             <div class="btn-group" v-if="btnType==3">
              <a href="javascript:;" class="btn"  @click="$emit('submit')">{{sureText}}</a>
              <a href="javascript:;" class="btn cancel" @click="$emit('cancel')">{{cancelText}}</a>
             </div>
          </div>
      </div>
  </div>
  </transition>
</template>

<script>
export default {
  components: {},
  props: {
    // 弹框类型 小 中 大 表单
    modleType: {
      type: String,
      default: 'form'
    },
    // 模态框标题
    title: String,
    // 按钮类型 1确定 2取消 3确定 取消
    btnType: String,
    sureText: {
      type: String,
      btnText: '确定'
    },
    cancelText: {
      type: String,
      btnText: '取消'
    },
    showModal: Boolean
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/modal.scss';
</style>
