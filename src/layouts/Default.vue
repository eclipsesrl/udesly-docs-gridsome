<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen" style="background-color: var(--color-ui-body-background)">
      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
      <div class="py-2" style="background-color: var(--color-ui-primary);">
            <div class="container">
                <p style="text-align: center; margin-bottom: 0;">⚠️ These docs are only for the Adapter Legacy. If you are using the new App, you must refer to the <a style="text-decoration: underline;" target="_blank" href="https://university.udesly.com">University!</a> ⚠️</p>
            </div>
          </div>
        <LayoutHeader />
      </header>

      <main
        class="container relative flex flex-wrap justify-start flex-1 w-full"
      >
        <aside
          v-if="hasSidebar"
          class="sidebar"
          :class="{ open: sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-16 ">
            <Sidebar @navigate="sidebarOpen = false" />
          </div>
        </aside>

        <div
          class="w-full pb-24"
          :class="{ 'pl-0 lg:pl-12 lg:w-3/4': hasSidebar }"
        >
          <slot />
        </div>
      </main>
    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button
        class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
        @click="sidebarOpen = !sidebarOpen"
      >
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      version
    }
  }
}
</static-query>

<script>
import Vue from 'vue';
import Sidebar from '@/components/Sidebar';
import LayoutHeader from '@/components/LayoutHeader';
import { MenuIcon, XIcon } from 'vue-feather-icons';

export default {
  components: {
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
    };
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    },
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    },
  },
  computed: {
    sidebarStyle() {
      return {
        top: this.headerHeight + 'px',
        height: `calc(100vh - ${this.headerHeight}px)`,
      };
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    },
  },
  mounted() {
    this.setHeaderHeight();
    const version = this.$static.metadata.settings.version;

    if (localStorage) {
      const lastVersion = localStorage.getItem('last_version_dismissed');
      if (( !lastVersion || version != lastVersion ) && window && window.location.pathname != "/changelog") {
          Vue.infoNotification(`The Adapter has been updated! Check the <a href="/changelog" style="color: white; text-decoration: underline">Changelog</a>`);
          setTimeout(() => {
            localStorage.setItem('last_version_dismissed', version)
          }, 150)
      }
      if (window && window.location.pathname == "/changelog") {
        setTimeout(() => {
            localStorage.setItem('last_version_dismissed', version)
          }, 150)
      }
    }
  },
  metaInfo() {
    return {
      titleTemplate: '%s | Udesly Docs',
      meta: [
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://docs.udesly.com/assets/images/udesly.jpg',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://docs.udesly.com/assets/images/udesly.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
:root {
  --color-ui-background: theme('colors.white');
  --color-ui-body-background: #fafafa;
  --color-ui-nav-link-active: #EFEFEF;
  --color-ui-typo: #3c3c3b;
  --color-ui-sidebar: theme('colors.gray.200');
  --color-ui-border: theme('colors.gray.300');
  --color-ui-primary: #8351ff;
}

html[lights-out] {
  --color-ui-background: theme('colors.gray.900');
  --color-ui-body-background: theme('colors.gray.900');
  --color-ui-nav-link-active: #283144;
  --color-ui-typo: theme('colors.gray.100');
  --color-ui-sidebar: theme('colors.gray.800');
  --color-ui-border: theme('colors.gray.800');
  --color-ui-primary: #8351ff;

  pre[class*='language-'],
  code[class*='language-'] {
    @apply bg-ui-border;  
  }
}

code[class*='language-'] {
    background-color: transparent;
  }

#nprogress .bar {
  background: #8351ff !important;
}

* {
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

h1,
h2,
h3,
h4 {
  @apply leading-snug font-black mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: '#';
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

a:not(.active):not(.text-ui-primary):not(.text-white) {
  @apply text-ui-typo;
}

p,
ol,
ul,
pre,
strong,
blockquote {
  @apply mb-4 text-base text-ui-typo;
}

.content {
  a {
    @apply text-ui-primary underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply -mt-12 pt-20;
  }

  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }

  h2,
  h3 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-2;

      p {
        @apply mb-0;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }
}

blockquote {
  @apply border-l-4 border-ui-border py-2 pl-4;

  p:last-child {
    @apply mb-0;
  }
}

code {
  @apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
}

pre[class*='language-'] {
  @apply max-w-full overflow-x-auto rounded;

  & + p {
    @apply mt-4;
  }

  & > code[class*='language-'] {
    @apply border-none leading-relaxed;
  }
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

table {
  @apply text-left mb-6;

  td,
  th {
    @apply py-3 px-4;
    &:first-child {
      @apply pl-0;
    }
    &:last-child {
      @apply pr-0;
    }
  }

  tr {
    @apply border-b border-ui-border;
    &:last-child {
      @apply border-b-0;
    }
  }
}

.sidebar {
  @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @screen lg {
    @apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
    transform: translateX(0);
  }
}

div[align='center'] {
  padding-bottom: 15px;
  code {
    margin: auto 3px;
  }
}

.content {
  hr {
    margin: 4px auto;
  }
}

code.value {
  background-color: rgba(0, 221, 151, 0.23);
}

code.dynamic-value {
  background-color: rgba(248, 162, 57, 0.15);
}

html[lights-out] {
  code.value {
    background-color: rgba(0, 221, 151, 0.75);
  }
  code.dynamic-value {
    background-color: rgba(248, 162, 57, 0.75);
  }
}

code:empty {
  padding: 0.25rem 0.8rem;
  margin: auto 4px;
}
li.depth-5 {
    padding-left: 5px;
}
h5 {
  font-weight: bold;
}

.content a.no-underline {
  text-decoration: none;
}


</style>
