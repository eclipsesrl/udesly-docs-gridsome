---
sidebar: 'jamstack'
prev: '/jamstack/how-to-convert/'
---

import Attribute from '@/components/Attribute.vue';

# Snipcart

## What is Snipcart?

"Snipcart is a powerful, developer-first HTML/JavaScript shopping cart platform. You can use it to add custom e-commerce to any sites or web applications in minutes."
But with the Udesly Adapter, these minutes are actually seconds! 
You can now create your ecommerce site with Webflow and automatically use Snipcart to manage the ECommerce side of your Jamstack project!


## How to use it?

Really, simple! If you are not registered yet on Snipcart, do it from [here](https://app.snipcart.com/register)!
Once you are logged in into your dashboard, you have just to do 3 simple steps!

1. Press on **Domains & Urls** and add your domains!
<div align="center">
  <g-image src="~/assets/images/snipcart-domain.png" />
</div>


2. Press on **Api Keys** and copy your **Public API key**

<div align="center">
  <g-image src="~/assets/images/snipcart-api-key.png" />
</div>


3. When you upload the theme inside the Udesly Adapter, paste the API Key inside the field **SNIPCART API KEY**

<div align="center">
  <g-image src="~/assets/images/snipcart-adapter.png" />
</div>

## Style and Webflow

To use Snipcart you have just to create your ecommerce normally in Webflow without any change, you can use also selects and the new variation buttons as well!

The only thing that will not be stylable is the checkout! Instead of using the Webflow Checkout, you will use Snipcart checkout and if you want user area. However the adapter doesn't inject the default css of Snipcart but a slighty modified version where certain parts are replaced with CSS Variables! So you can at least change in an easy way colors and fonts of it! 

On Webflow follow the path: Project settings > Custom code, enter the following code in the Head code section

```html
<style>
:root {
  --snipcart-primary-color: #52BCF8;
  --snipcart-secondary-color: #5082E4;
  --snipcart-tertiary-color: #F0F5F6;
  --snipcart-autofill-color: #E8F0FE;
  --snipcart-main-font: Open Sans,sans-serif;
  --snipcart-text-color: #313332;
  --snipcart-red-color: #D93120;
  --snipcart-heading-font: Montserrat,sans-serif;
  --snipcart-green-color: #6AE35C;
  --snipcart-white-color: #fff;
  --snipcart-input-bgcolor: #FDFEFE;
  --snipcart-box-bgcolor: #F7FAFA;
}
</style>
```

Naturally these are the default values that Snipcart css uses, but you can modify them to apply your own colors!


## How to manage your products with Netlify CMS

Products are actually managed in 2 different collections: **Products** and **SKUs**. 

We really suggest to create your initial products all in Webflow, (you can add a minimuum of products already without any hosting plan) so they will be automatically inserted in the correct way inside Netlify CMS.

Any Product is associated with different SKUs (Any variation will be a different SKU) and will have a default sku.

Inside SKUs you will set all the product effective properties like price on sale price, width, height and so on.
For each SKU you have to associate the original product as well.

### Create a Simple Product
To create a simple product, leave the option **SKU Properties** empty

<div align="center">
  <g-image src="~/assets/images/snipcart-empty-variation-properties.png" />
</div>

set all the other properties like name, and descriptions and press on publish.
Than create an SKU with the same name of the product, select as product field the same product you created before and set all the properties like price, main image and more images if you want, press on publish.
Go Back to the previously created product and set as **default sku** the sku that you just created.

### Create a Variable Product
Let's create a product with 4 variations for example, setup 2 sku properties "Color and Size" with 2 values respectively "M and L" and "Red and Blue".

<div align="center">
  <g-image src="~/assets/images/snipcart-variation-properties.png" />
</div>

set all the other properties like name, and descriptions and press on publish.

For this configuration you need to create 4 different SKUs, one for each combination. 
Let's see for example one of it, you have to set up for each SKU now a different combination of the SKU Values, for example: Size L and Color Red

<div align="center">
  <g-image src="~/assets/images/snipcart-sku-values.png" />
</div>

**Note: ** that the sku values must match exactly the name you have set inside the SKU properties before. 

Select as product the product you created before and set all the properties like price, main image and publish.

Repeat this SKU step for each missing combination.

After you have created all the SKUs, go on the original product and select as **default sku** the SKU with the variation you want to be selected as first.


