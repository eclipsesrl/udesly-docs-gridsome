---
sidebar: "shopify"
next: "/shopify/shop/collections-list/"
---

# Pages

Creating a Shop in Shopify is really simple, below you will find the list of all the pages you have to create and their purpose:

### Collections List Page

This is the page where all collections of your shop are listed.
This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="list-collections" />

### Collection Page

This is the page where all products of a Collection will be shown.
This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="collection" />

### Product Page

This is the page where a single product is shown:

This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="product" />

### Cart Page

This is the page where all items in the cart are shown:

This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="cart" />

### Gift Card Page

This is the page where a single gift card is shown, This page is not linkable, and can be accessed only through email.

This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="gift-card" />

### Alternative Templates

You can create alternative templates both for Collections and Products, using respectively these attributes on Body:


<Attribute name="page" value="collection-template" />

and 

<Attribute name="page" value="product-template" />


The name of the template will be the name of the page you created in Webflow, and you will be able to select the template from each collection/product

<div align="center">
  <g-image src="~/assets/images/shopify-template-picker.jpg" />
</div>