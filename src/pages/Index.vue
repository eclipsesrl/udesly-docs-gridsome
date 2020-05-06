<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex items-center mb-2 text-ui-primary">
          <Logo :width="120" />
        </div>
        <p>All you need, to use Webflow, with your favourite CMS!</p>
      
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          <g-link
            to="/shopify/"
            class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-6 text-center"
          >
          <ShopifyLogo />
          </g-link>
          <g-link
            to="/wordpress/"
            class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-6 text-center"
          >
          <WordPressLogo />
          </g-link>
          
        </div>
      </div>

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';
import WordPressLogo from '@/components/WordPressLogo';
import ShopifyLogo from '@/components/ShopifyLogo'

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
    WordPressLogo,
    ShopifyLogo
  },

  metaInfo() {
    const title = 'How to convert Webflow to WordPress, Shopify, Ghost or Netlify CMS';
    const description = 'Udesly Adapter Documentation';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
