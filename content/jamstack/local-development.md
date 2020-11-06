---
sidebar: 'jamstack'
prev: '/jamstack/how-to-convert/'
---

## Local Development

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
npm run build
```

to build the site on your website. After the process is done, you can basically deploy on your hosting the **public** folder.

If you want to find all your converted html templates, they can be found at the path **"site/_views"**. 

### Content

All your markdown files can be found in **"site"** folder under their own subfolders. So you can just modify your cms content creating and modifying your markdown files!

We greatly suggest using a code editor like [Visual Studio Code](https://code.visualstudio.com/), to manage your files.

### Local Netlify CMS

There is a beta feature of Netlify CMS that allows to work with Netlify CMS on local repo, follow their [Official Documentation](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository)