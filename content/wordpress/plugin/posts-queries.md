---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/plugin/data/'
next: '/wordpress/plugin/terms-queries/'
---

# Posts Queries

Post queries retrieve posts from the database, using different parameters, so that they can be displayed on the frontend.

With the Udesly plugin you can create posts queries easily and this section of the documentation will show how to create posts queries, that can be used to show posts inside a lot of elements like: 

* [Queried Posts](/wordpress/blog/misc-elements/#queried-posts)

* [Queried Products](/wordpress/woocommerce/misc-elements/#queried-products)

Basically almost all the times in an attribute you find as value "slug of the query", this is the Query you are searching for!


Click on **Add new post query** button, you'll find several fields helping you to define the post you want to display.

**N.B.** Remember to assign the same name as the one you have assigned in Webflow! 

<div align="center">
  <g-image src="~/assets/images/postsquery1.png" />
</div>

## Post Type
Here you can select the post type you want to display (posts, products, pages, etc.) 

<div align="center">
  <g-image src="~/assets/images/postsquery2.png" />
</div>

## Filters
Based on the post type you selected in the previous section, here you can filter it based on a taxonomy, a term, the author or the meta key and mata value, if present.

<div align="center">
  <g-image src="~/assets/images/postsquery3.png" />
</div>
 - Taxonomy: it allows to filter the selected post type based on a specific taxonomy such as categories or tags, (Select Current Category, Current Tag to select related posts);
 - Terms: it allows to filter the selected post type based on a specific term contained it the taxonomy you have chosen;
 - Authors: here you can view all the post types belonging to a specific author;
 - Meta Key: it is the name of a custom field of the post you're searching; 
 - Meta Value: it is the value corresponded to the key you have choosen above.

## Sort
This section allows to order posts based on different criteria: date, title, slug, ID and choose to show them in a descending or ascending order.

<div align="center">
  <g-image src="~/assets/images/postsquery4.png" />
</div>

## Count
Here you can define the number of posts to display. By default it is set on 3. 

Furthermore, the **Offset** option allows to skip a given number of posts, if you need.

<div align="center">
  <g-image src="~/assets/images/postsquery5.png" />
</div>
