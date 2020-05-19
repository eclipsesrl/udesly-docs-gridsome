<template>
  <Layout>
      <section class="pt-16 flex flex-col items-center main-index">
      
        <div class="max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 converters">
          <g-link
            to="/shopify/"
            class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-12 text-center home-card"
          >
            <img src="/assets/images/webflow-to-shopify.svg" alt="webflow to shopify" class="hide-on-dark"/>
            <img src="/assets/images/webflow-to-shopify-white.svg" alt="webflow to shopify" class="hide-on-light"/>
            <h5>Webflow to Shopify</h5>  
          </g-link>
          <g-link
            to="/wordpress/"
            class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-12 text-center home-card"
          >
            <img src="/assets/images/webflow-to-wordpress.svg" class="hide-on-dark" alt="webflow to wordpress"/>
            <img src="/assets/images/webflow-to-wordpress-white.svg" class="hide-on-light" alt="webflow to wordpress"/>
           <h5>Webflow to WordPress</h5>
          </g-link>
           <g-link
            to="/ghost/"
            class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-12 text-center home-card"
          >
            <img src="/assets/images/webflow-to-ghost.svg" class="hide-on-dark" alt="webflow to ghost"/>
            <img src="/assets/images/webflow-to-ghost-white.svg" class="hide-on-light" alt="webflow to ghost"/>
            <h5>Webflow to Ghost</h5>
          </g-link>
          <g-link
            to="/netlify/"
            class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-12 text-center home-card"
          >
            <img src="/assets/images/webflow-to-netlify.svg" class="hide-on-dark" alt="webflow to netlify"/>
            <img src="/assets/images/webflow-to-netlify-white.svg" class="hide-on-light" alt="webflow to netlify"/>
            <h5>Webflow to Netlify</h5>
          </g-link>
        </div>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 features">
            <a href="https://www.udesly.com/help-center" target="_blank" rel="noopener noreferrer" class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-8 text-center home-card home-card--align-left">
              <h5>Help Center</h5>
              <p>Contact us to get technical support or just submit bug reports or feature requests.</p>
            </a>
             <a href="https://www.udesly.com/custom-services/" target="_blank" rel="noopener noreferrer" class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-8 text-center home-card home-card--align-left">
              <h5>Custom Services</h5>
              <p>Hire our experts for assistance with the Udesly Adapter conversion process.</p>
            </a>
             <a href="https://cheatsheets.udesly.com/" target="_blank" rel="noopener noreferrer" class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-8 text-center home-card home-card--align-left">
              <h5>Cheat Sheets</h5>
              <p>The easiest way to add all the necessary custom attributes to your Webflow projects.</p>
            </a>
             <a href="https://www.udesly.com/adapter-templates/" target="_blank" rel="noopener noreferrer" class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-8 text-center home-card home-card--align-left">
              <h5>Templates</h5>
              <p>Explore our templates to save time and customize everything easily.</p>
            </a>
            <a href="https://www.facebook.com/groups/373995326416699/?ref=bookmarks" target="_blank" rel="noopener noreferrer" class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-8 text-center home-card home-card--align-left">
              <h5>Facebook Community</h5>
              <p>A place to discuss products and issues, share tips&tricks and experiences.</p>
            </a>
            <a href="https://www.youtube.com/c/Udesly" target="_blank" rel="noopener noreferrer" class="max-w-sm border-solid border rounded overflow-hidden transition-all hover:shadow-lg p-8 text-center home-card home-card--align-left">
              <h5>Tutorials</h5>
              <p>Subscribe to our YouTube channel to keep in touch with all news about Udesly</p>
            </a>
        </div>

        <footer>
          © 2020 <a href="https://www.udesly.com" target="_blank" rel="noopener noreferrer">Udesly.com</a> | <g-link to="/changelog/">Changelog</g-link> | <a href="https://www.udesly.com" target="_blank" rel="noopener noreferrer">Udesly</a> is by <a href="https://www.eclipse.srl/" target="_blank" rel="noopener noreferrer">Eclipse SRL</a> 
        </footer>
      </section>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';


export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
   
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

html[lights-out] .hide-on-dark {
  display: none;
}

html[lights-out] .hide-on-light {
  display: block;
}

html .hide-on-light {
  display: none;
}

.home-links a {
  margin-right: 1rem;
}

.home-card h5{
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}

.home-card img {
  width: 96px;
  height: auto;
  margin: auto;
}

.home-card p {
  font-size: 16px;
 line-height: 19px;
 opacity: 0.7;
 margin-bottom: 0;
}

.home-card--align-left, .home-card--align-left h5 {
  text-align: left;
}
.main-index > div {
  max-width: 1050px;
}
.main-index a {
  background-color: var(--color-ui-background);
}
.features a {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-index {
  height: 100%;
  justify-content: center;
}
footer {
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  opacity: 0.7;
  position: absolute;
  bottom: 12px;
}

@media screen and (max-width: 768px) {
  .main-index a {
    max-width: 250px;
  }
}
div.converters {
  width: 100%;
}
div.converters h5 {
  font-size: 13px;
}
</style>
