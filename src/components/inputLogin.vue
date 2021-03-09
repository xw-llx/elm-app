<template>
  <div class="aa">
    <!-- 组件结构 -->

    <!-- 组件容器 -->
    <div class="bb" :class="{ ER: error }">
      <!-- 输入框 -->
      <input
        class="bbInput"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <!-- 输入框后面的验证码 -->
      <button
        v-if="btnTitle"
        @click="$emit('btnClick')"
        :disabled="disabled"
        class="btn"
      >
        {{ btnTitle }}
      </button>
    </div>
    <!-- 验证码错误提醒 -->
    <div v-if="error" class="er">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "inputLogin",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: String,
    placeholder: String,
    name: String,
    btnTitle: String,
    disabled: Boolean,
    error: String,
  },
};
</script>

<style scoped>
.bb {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}
.bbInput {
  height: 100%;
  width: 65%;
  outline: none;
  background-color: transparent;
  border: 0;
}
.btn {
  border: none;
  outline: none;
  background: #fff;
  width: 30%;
  height: 100%;
}
.bb button[disabled] {
  color: #aaa;
}
.ER {
  border: 1px solid red;
}
.er {
  color: red;
  padding-top: 5px;
}
/* .bb {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bbInput {
  height: 100%;
  width: 60%;
  outline: none;
}
.bb button {
  border: none;
  outline: none;
  background: #fff;
}
.bb button[disabled] {
  color: #aaa;
}
.ER {
  border: 1px solid red;
}
.er {
  color: red;
  padding-top: 5px;
} */
</style>