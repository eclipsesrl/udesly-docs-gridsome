---
description: ''
sidebar: 'shopify'
prev: '/shopify/general/liquid/'
next: '/shopify/general/metafields/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# JavaScript Events

> ⚠️ ADVANCED USERS ONLY ⚠️

This doc is meant only for advanced users who knows how to code in JavaScript.

The Adapter inject a simple script that controls many events of Shopify lifecycle, sometimes this library *dispatches* events on the body element of the page, so you can add your own event listeners on body to react to these events.

You can also dispatch some of this events to make the adapter library compute something.


### Product Added to Cart

Anytime an user adds a Product to the cart, the adapter library dispatches a CustomEvent named 

```js
product-added-to-cart
```

For reference, this is the code the adapter library uses:

```js
document.body.dispatchEvent(new CustomEvent('product-added-to-cart'));
```

without additional details.

You can use this event for example to redirect to another page, or to track the action in combination with [Shopify Ajax API](https://shopify.dev/docs/themes/ajax-api/getting-started)

### Product Removed from Cart

Anytime an user removes a Product from the cart, the adapter library dispatches a CustomEvent named 

```js
product-removed-from-cart
```

For reference, this is the code the adapter library uses:

```js
document.body.dispatchEvent(new CustomEvent('product-removed-from-cart'));
```

without additional details.

You can use this event for example to redirect to another page, or to track the action in combination with [Shopify Ajax API](https://shopify.dev/docs/themes/ajax-api/getting-started)

### Cart should be updated

Anytime an user adds or remove a product from the cart, the adapter library dispatches a CustomEvent named


```js
cart-should-be-updated
```

For reference, this is the code the adapter library uses:

```js
document.body.dispatchEvent(new CustomEvent('cart-should-be-updated'));
```

On this event the adapter library fetches the items from the cart and updates the cart count and the product items list, so you can also dispatch manually this event to force a mini cart update

### Cart Error

Anytime there is an issue with the Add/Remove from cart operation the adapter library dispatches a CustomEvent named

```js
cart-error
```

```js
document.body.dispatchEvent(new CustomEvent('cart-error', {
        detail: error
}))
```

you can listen to it to have the full details of the error and track the event with your own APIs.