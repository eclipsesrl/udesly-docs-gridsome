<template>
<div class="flex items-center">
  <p @click="triggerCopy" v-on:copy="handleCopy" class="copy-button flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active">
    <copy-icon size="1x" class="mr-1"></copy-icon>Copy {{title}}
  </p>
  </div>
</template>
<script>
import Vue from 'vue';
import { CopyIcon } from 'vue-feather-icons'
export default {
  name: 'CopyElement',
  components: {
      CopyIcon
  },
  props: {
      title: {
          type: String,
          default: 'Element'
      },
      success: String
  },
  methods: {
    triggerCopy() {
      document.execCommand('copy');
    },
    handleCopy(e) {
      const data = this.$slots.default[0].text.trim();
      console.log(data);
      try {
        e.clipboardData.setData('application/json', data);
        e.preventDefault();
        Vue.successNotification(this.success ? this.success : `${this.title} copied!`);
      } catch (e) {
        Vue.errorNotification('Failed to copy Element :(');
      }
    }
  }
};
</script>
<style scoped>
.copy-button {
    cursor: pointer;
    font-size: 13px;
}
</style>