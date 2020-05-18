---
sidebar: 'netlify'
prev: '/netlify/'
next: '/netlify/deploy/'
---

# Requirements

There are a few requirements for the CMS to be converted correctly

1) It is advisable that all reference and multireference fields have the same name as the Collection they are referring to, for example if you have a collection Post and a collection called category, the reference field from post to category must be called category;

2) Collection names must consist of one word;

3) Do not use *tags* as collection name! They are already used by 11ty. Give another name to them!

4) Every element connected to the CMS needs an attribute.

5) The main Rich Text of your Collection must be named **Content.**

6) Double check your collection names, the attribute you must use is the same of your CMS template pages. If you are unsure about the names, just export the zip file and watch out for all html pages which name starts with detail_, the word after detail_ is the real name of your collection!