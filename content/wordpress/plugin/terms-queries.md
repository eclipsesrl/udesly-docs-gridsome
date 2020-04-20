---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/plugin/posts-queries/'
---

# Terms Queries

According to the same reasoning underlying the posts queries, the terms queries allow to retrieve terms from the database, using different parameters, so that they can be displayed on the frontend, if you are using [**lists**](/wordpress/general/lists/).

---------

> **In WordPress, a term is a classification, group or subset of a Taxonomy, where the latter can be a Category, Tag or Custom Taxonomy. By default, terms have a title, a slug and a description.** 


Click on **Add new terms query** button, you'll find several fields helping you to define the term you want to display.

**N.B.** Remember to assign the same name as the one you have assigned in Webflow! 

<div align="center">
  <g-image src="~/assets/images/termsquery1.png" />
</div>


## Terms Type
Here you can select the terms type you want to display (categories, tags etc.) 

<div align="center">
  <g-image src="~/assets/images/termsquery2.png" />
</div>

## Filters
Based on the term type you selected in the previous section, here you can filter it based on the term name.

<div align="center">
  <g-image src="~/assets/images/termsquery3.png" />
</div>

## Sort
This section allows to order terms types based on different criteria: date, title, slug, ID and choose to show them in a descending or ascending order.

<div align="center">
  <g-image src="~/assets/images/termsquery4.png" />
</div>

## Count
Here you can define the number of taxonomies to display. By default it is set on 3. 

Furthermore, the **Offset** option allows to skip a given number of terms types, if you need.

<div align="center">
  <g-image src="~/assets/images/termsquery5.png" />
</div>
