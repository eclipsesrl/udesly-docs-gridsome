---
sidebar: 'netlify'
prev: '/netlify/requirements/'
next: '/netlify/collections/'
---

# Deploy


Once everything is ready on Webflow side, export the theme:

<div align="center">
  <g-image src="~/assets/images/netlify-export.png" />
</div>


take the template through the Udesly Adapter and start the conversion, including exported CSVs as well.
​
Also, you find **Additional Files** field in which the Adapter will put together the 11ty exported .zip file with some external files (.zip format) you want to add in it. For example a Markdown file of some of your posts or Netlify lambda functions directly.
​
<div align="center">
  <g-image src="~/assets/images/netlify-export-csv.png" />
</div>
​
Once converted, you have 2 different options available:
​
<div align="center">
  <g-image src="~/assets/images/upload-github.png" />
</div>

### Upload to Github
​
You can upload it to Github and then connect it to Netlify. Click to **Upload to Github** button. If you don't have a Github account already, please check this [guide](https://help.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account) to address this problem. 
​
The Adapter is going to upload the repository on Github automatically.
​
Now, through Github, you are able to proceed on the latest step of the process, on Netlify side. 
**Only the first time**, you have to create a Netlify CMS account in order to have control over the Webflow CMS. Choose the repository and connect it to Github.
​
<div align="center">
  <g-image src="~/assets/images/netlify-github.png" />
</div>
​
Once Github and Netlify have been connected to each other, the latter will deploy your site, inclusive of CMS, automatically.
​
<div align="center">
  <g-image src="~/assets/images/netlify-deploy.png" />
</div>

It's done. In just a few steps you have created a full static site on Webflow!
​
In the meantime Netlify is building your site, keep in mind these recommendations:
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

Last important thing to see is how to add a custom domain to your site. Check this [guide](https://docs.netlify.com/domains-https/custom-domains/#assign-a-domain-to-a-site).
​
### Download Zip
​
If you want to host your site on your preferred provider, click on **Download Zip** button after the conversion and the Adapter will issue a .zip file that is an [11ty](https://www.11ty.dev/) project. You have to build it in order to upload it to your hosting provider, such as Amazon S3, Firebase, Netlify or Zeit.  Please check this [guide](https://www.11ty.dev/docs/tutorials/) to see how to use 11ty.


### Local Development

Download the converted .zip file, extract it, open your terminal and move your *current working directory* to the extracted folder by using the command:

```bash
cd "Full Folder Path"
```

Install [NodeJS](https://nodejs.org/en/) if you don't have it installed.

Once in the folder run this command only the first time to download and install all the dependencies

```bash
npm i
```

The adapter creates already 2 scripts inside the **package.json** that are usefull to test your site locally: 

Launch the command:

```bash
npm run serve
```

to open a local web server that previews your website.

Launch the command:

```bash
npm run build:local
```

to build the site on your website. After the process is done, you can basically deploy on your hosting the **public** folder.

If you want to find all your converted html templates, they can be found at the path **"site/_views"**. While all your markdown files can be found in **"site"** folder under their own subfolders.