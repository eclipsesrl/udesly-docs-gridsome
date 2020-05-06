<template>
  <ChangeLogLayout :disable="true">
    <div class="flex flex-wrap items-start justify-start">
       <div
        class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
        style="top: 4rem"
      >
      <ClientOnly>
    <div v-if="headings.length" class="mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 sm:border-l border-ui-border md:mt-0">
    <h3 class="pt-0 mt-0 text-sm tracking-wide uppercase border-none" >On this page</h3>
    <div>
      <ul>
        <li
          v-for="(heading, index) in headings"
          :key="`${changelogPage.path}${heading.anchor}`"
          :class="{
            'border-t border-dashed border-ui-border pt-2 mt-2': index > 0 && heading.depth === 2,
            'font-semibold': heading.depth === 2,
            [`depth-${heading.depth}`]: true,
          }"
        >
          <g-link
            :to="`${changelogPage.path}${heading.anchor}`"
            class="relative flex items-center py-1 text-sm transition transform hover:translate-x-1"
            :class="{
              'pl-2': heading.depth === 3,
              'pl-3': heading.depth === 4,
              'pl-4': heading.depth === 5,
              'pl-5': heading.depth === 6,
              
            }"
          >
            <span
              class="absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"
             
            ></span>
            {{ heading.value }}
          </g-link>
        </li>
      </ul>
    </div>
  </div>
      </ClientOnly>
       </div>
      <div class="order-1 w-full md:w-2/3">
        <div class="content" v-html="content">
        </div>
      </div>
    </div>

  </ChangeLogLayout>
</template>

<page-query>
query {
  changelogPage(path: "/") {
    id
    content
    path
    headings {
      depth
      value
      anchor
    }
  }  
}
</page-query>

<script>
import Showdown from 'showdown';
const converter = new Showdown.Converter({ghCompatibleHeaderId: true});

export default {
  metaInfo: {
    title: 'Changelog'
  },
  computed: {
    content() {
      return converter.makeHtml(this.$page.changelogPage.content);
    },
    headings() {
      return this.$page.changelogPage.headings;
    },
    changelogPage() {
      return {path: "/changelog"}
    }
  }
}
</script>

<style>
@import 'prism-themes/themes/prism-material-dark.css';
</style>
