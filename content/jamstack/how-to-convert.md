---
sidebar: 'jamstack'
prev: '/jamstack/requirements/'
---

# How to Convert

Once everything is ready on Webflow side, press on the Udesly extension icon and wait for it to process! If you still didn't installed it download it from [here](https://chrome.google.com/webstore/detail/udesly-template-configura/khhgdnefpkphamogndglabaalbpfidbf?hl=en&authuser=0)! Works on Chrome and any Chromium based browser!

<video autoplay="" muted="" playsinline="true" loop="">
 <source src="/assets/video/add-attributes.mp4">
</video>


After that export the theme:

<div align="center">
  <g-image src="~/assets/images/netlify-export.png" />
</div>

take the template through the Udesly Adapter and start the conversion, including the exported Config as well.

<video autoplay="" muted="" playsinline="true" loop="">
 <source src="/assets/video/upload-to-the-adapter.mp4">
</video>
​
Also, you find **Additional Files** field in which the Adapter will put together the 11ty exported .zip file with some external files (.zip format) you want to add in it. For example a Markdown file of some of your posts or Netlify lambda functions directly.
​
Once converted, you have 2 different options available:
​
<div align="center">
  <g-image src="~/assets/images/upload-github.png" />
</div>

### Upload to Github
​
You can upload it to Github. Click to **Upload to Github** button. If you don't have a Github account already, please check this [guide](https://help.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account) to address this problem. 
​
The Adapter is going to upload the repository on Github automatically.
​​
### Download Zip
​
If you want to host your site on your preferred provider, click on **Download Zip** button after the conversion and the Adapter will issue a .zip file that is an [11ty](https://www.11ty.dev/) project. You have to build it in order to upload it to your hosting provider, such as Amazon S3, Firebase, Netlify or Vercel.  Please check this [guide](https://www.11ty.dev/docs/tutorials/) to see how to use 11ty.

## After Conversion

After conversion you have many ways to manage and host your site! Just to mention a few:

* [**Local Development**](/jamstack/local-development/)
* [**Netlify**](/jamstack/netlify/)