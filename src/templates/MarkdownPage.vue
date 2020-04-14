<template>
  <Layout>
    <div class="flex flex-wrap items-start justify-start">
      <div
        class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
        style="top: 4rem"
      >
        <OnThisPage />
      </div>

      <div class="order-1 w-full md:w-2/3">
        <div class="content">
          <VueRemarkContent />
        </div>

        <div class="mt-8 pt-8 lg:mt-4 lg:pt-4 border-t border-ui-border">
          <NextPrevLinks />
          <div class="flex justify-center mt-8 pt-8 lg:mt-4 ">
            <a
              :href="githubUrl"
              class="flex justify-center transition-all duration-200 ease-out transform hover:-translate-y-1 items-center"
              target="_blank noopener noreferrer"
              ><GithubIcon size="1x" class="mr-1" />Edit on Github</a
            >
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    fileInfo {
      path
      directory
    }
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  metadata {
    settings {
      githubRepoBase
    }
  }
  
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/OnThisPage.vue';
import NextPrevLinks from '@/components/NextPrevLinks.vue';
import { GithubIcon } from 'vue-feather-icons';
const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default {
  components: {
    OnThisPage,
    NextPrevLinks,
    GithubIcon,
  },
  computed: {
    githubUrl() {
      return (
        this.$page.metadata.settings.githubRepoBase +
        this.$page.markdownPage.fileInfo.path
      );
    }
  },

  metaInfo() {
    const [cms, path] = this.$page.markdownPage.fileInfo.directory.split('/');

    const cmsMeta = cms ? ` | ${capitalize(cms)}` : '';

    const pathMeta = path ? ` | ${capitalize(path)}` : '';

    const title = this.$page.markdownPage.title + cmsMeta + pathMeta;
    const description =
      this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

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
          content: title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    };
  }
};
</script>

<style>
@import 'prism-themes/themes/prism-material-oceanic.css';
</style>
