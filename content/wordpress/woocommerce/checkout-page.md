---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/woocommerce/my-account-page/'
next: '/wordpress/woocommerce/order-confirmation-page/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Checkout Page

Checkout page is already created by Webflow when you add the Ecommerce, you don't need any attribute on body, the only thing that makes this page different from a normal page is that you have to declare the page you are using as checkout in WooCommerce settings, following the path: WooCommerce > Settings > Advanced > Checkout Page.

<div align="center">
  <g-image src="~/assets/images/wc-pages.png" />
</div>

You should already found a Checkout element preadded by Webflow in this page, just add the attribute:

<Attribute name="wc" value="checkout" />

On the **Container** that you find inside the *Checkout Form*.

<div align="center">
  <g-image src="~/assets/images/checkout-container.png" />
</div>

Probably you are asking why on the container and not on the checkout form that is clearer? 🙀

Well, it's a bug 🐛 (or maybe a feature!), but when we found it there were are already too many WooCommerce themes created with the Adapter, so it will be like this for retrocompatibility! 

Also, keep in mind that WooCommerce checkout structure is basically totally different from the one you can find in Webflow, the Adapter copies the classes you add to some of the blocks and applies them to the WooCommerce checkout, so probably you might need some custom css to finely adjust it!

For example for shipping methods you can use the following CSS snippet (that you can add in Webflow in the before </head> section):

```css
<style>
ul#shipping_method li {
  display: flex;
  align-items: center;
  margin: 4px 0;
}

ul#shipping_method li label {
  margin-bottom: 0;
}
</style>
```