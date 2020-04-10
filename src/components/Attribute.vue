<template>
  <div align="center" class="attribute">
    <code @click="copyToClipboard(name)">{{ name }}</code> <code @click="copyToClipboard(value)" class="value">{{ value }}</code>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'Attribute',
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
    }
  }
};
</script>
<style>
.attribute code {
    cursor: pointer;
}
</style>