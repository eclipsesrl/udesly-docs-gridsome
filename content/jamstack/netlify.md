---
sidebar: 'jamstack'
prev: '/jamstack/how-to-convert/'
---

import Attribute from '@/components/Attribute.vue';

# Why Netlify CMS?

[Netlify](https://www.netlify.com/) is an All-in-one platform for automating modern web projects. With the Udesly Adapter you can deploy and manage your Webflow template, inclusive of its CMS, with Netlify.
​
<div align="center">
  <g-image src="/assets/images/jamstack-structure.png" />
</div>
​
Netlify platform has a very generous free tier that will cover almost all websites for free. Netlify CMS is open source, and with Netlify Identity you can create basically 5 admin accounts for free.

<video autoplay="" muted="" playsinline="true" loop="">
 <source src="/assets/video/deploy.mp4">
</video>
​
## Where to start?

Upload the theme to Github using directly the Adapter, or Github Desktop or the Github CLI!

Now, through Github, you are able to proceed on the latest step of the process, on Netlify side. 
**Only the first time**, you have to create a Netlify CMS account in order to have control over the Webflow CMS. Choose the repository and connect it to Github.
​
<div align="center">
  <g-image src="~/assets/images/netlify-github.png" />
</div>

Once Github and Netlify have been connected to each other, the latter will deploy your site, inclusive of CMS, automatically.
​
<div align="center">
  <g-image src="~/assets/images/netlify-deploy.png" />
</div>

It's done. In just a few steps you have created a full static site on Webflow!
​
In the meantime Netlify is building your site, keep in mind these recommendations:

## Invite users
​
Go to **Settings-->Identity** and click on **Enable Identity**.
​
<div align="center">
  <g-image src="~/assets/images/netlify-identity.png" />
</div>

​
Here, new tabs will open. Under **Registration preferences** choose **Invite only**.
​
<div align="center">
  <g-image src="~/assets/images/netlify-registration.png" />
</div>

Then, go to the bottom of the same page and click on **Enable Git Gateway** under **Services**.
​
<div align="center">
  <g-image src="~/assets/images/netlify-git-gateway.png" />
</div>

​
Finally go to **Identity** from the main menu and click on **Invite users** to make certain email addresses able to access the backend of the site. Netlify's free tier allows to add 5 email addresses at most.
​
<div align="center">
  <g-image src="~/assets/images/netlify-invite.png" />
</div>

## Add a custom domain

To add a custom domain to your site, check this [guide](https://docs.netlify.com/domains-https/custom-domains/#assign-a-domain-to-a-site).

## Setup Netlify Forms

Netlify comes with built-in form handling, which includes a spam filter and a page to view form submissions history and configure notifications.

All you need to do in Webflow is:

1. Add this attribute on the form element (select the child element of the Form Block):
<Attribute name="data-netlify" value="true" />

2. In the form **action** setting, define the path to a page to redirect the user after form submission

<div align="center">
  <g-image src="~/assets/images/netlify-forms-webflow.png" />
</div>

Check out the [Netlify documentation](https://docs.netlify.com/forms/setup/) for more information on how to set up Google ReCaptcha with a hidden div, and more.