<template>
  <div align="center" class="attribute">
    <code @click="copyToClipboard(name)">{{ name }}</code> <code @click="error()" class="dynamic-value">{{ value }}</code>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'DynamicAttribute',
  props: {
    name: String,
    value: String
  },
  methods: {
    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      Vue.successNotification(`Copied "${str}" to clipboard`);
    },
    error() {
      Vue.errorNotification('Dynamic attributes cannot be copied')
    }
  }
};
</script>
<style>
.attribute code {
    cursor: pointer;
}
.attribute code.dynamic-value {
  cursor: not-allowed;
}
</style>