<template>
  <div class="py-2">
    <div class="container">

      <div class="flex items-center justify-between -mx-2 sm:-mx-4">
        <div class="flex flex-col items-center px-2 mr-auto sm:px-4 sm:flex-row">
          <g-link
            to="/"
            class="flex items-center text-ui-primary"
            title="Home"
          >
            <Logo :width="80" :heigth="60" class="text-ui-primary" />
            
          </g-link>

          <div v-if="settings.nav.links.length > 0" class="hidden ml-2 mr-5 sm:flex sm:ml-5">
            <g-link
              v-for="link in settings.nav.links"
              :key="link.path"
              :to="link.path"
              class="block p-1 font-medium nav-link text-ui-typo hover:text-ui-primary logo-wrapper"
              :title="link.title"
             
            >
              <component :is="link.logo" :width="23" :height="25"/>
            </g-link>
          </div>
        </div>

        <div class="w-full px-2 sm:px-4 max-w-screen-xs">
          <ClientOnly>
            <Search />
          </ClientOnly>
        </div>

        <div class="flex items-center justify-end px-2 sm:px-4">
          <ToggleDarkMode class="ml-2 sm:ml-8">
            <template slot="default" slot-scope="{ dark }">
              <MoonIcon v-if="dark" size="1.5x" />
              <SunIcon v-else size="1.5x" />
            </template>
          </ToggleDarkMode>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      nav {
        links {
          path
          title
          logo
        }
      }
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from '@/components/Logo';
import { SunIcon, MoonIcon, HomeIcon, GithubIcon, TwitterIcon } from "vue-feather-icons";
import WordPressLogo from '@/components/WordPressLogo';
import ShopifyLogo from '@/components/ShopifyLogo';
import GhostLogo from '@/components/GhostLogo';
import NetlifyLogo from '@/components/NetlifyLogo';
import JamstackLogo from '@/components/JamstackLogo';

const Search = () => import(/* webpackChunkName: "search" */ "@/components/Search").catch(error => console.warn(error));

export default {
  components: {
    Logo,
    Search,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    HomeIcon,
    GithubIcon,
    TwitterIcon,
    WordPressLogo,
    NetlifyLogo,
    JamstackLogo,
    GhostLogo,
    ShopifyLogo
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    }
  }
};
</script>

<style lang="scss">
header {
  svg:not(.feather-search){
    &:hover {
      @apply text-ui-primary;
      path,g {
          fill: var(--color-ui-primary)!important;
      }
    }
  }
  
 svg.feather-globe:hover{
    path {
      fill: unset!important;
    }
  }
}

.nav-link.active {
  path,g {
          fill: var(--color-ui-primary)!important;
      }
}

.logo-wrapper {
  padding: 2px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-wrapper.active {
  background-color: var(--color-ui-nav-link-active);
}
</style>
