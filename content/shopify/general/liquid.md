---
description: ''
sidebar: 'shopify'
prev: '/shopify/general/conditionals/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Liquid

> ⚠️ ADVANCED USERS ONLY ⚠️

Liquid elements are advanced elements that can help you to achieve custom functionalities without modifying directly the exported theme. They can be used in all the theme and are meant for advanced users who knows how liquid templating works. To inject liquid code you have 2 ways:


## Embeds

Inside embed elements you can add directly liquid code using the special tag provided by the Adapter ```<udesly-liquid>```

as a *pretty useless* example, you can add inside an embed this code:


```html
<udesly-liquid>{{product.sku}}</udesly-liquid>
```

and it will be converted in liquid as:

```liquid
{{product.sku}}
```
If you are asking yourself why you should use the ```<udesly-liquid>``` tag to wrap the code, the answer is really simple, to be sure that the encoding is maintained correctly, some times Webflow loves to encode the characters inside embeds, and this special tag ensure the correct encoding for liquid!


## If

The following attribute:

<DynamicAttribute name="liquid:if" value="condition" />

can be added to any element. That element will be wrapped into an if condition tag, in this way you can hide elements based on difficult or arbitrary conditions that are not covered by the conditional elements. 

For example, if you add a paragraph with the attribute 

<Attribute name="liquid:if" value="current_page == 1" />

the code will be converted as: 
```liquid
{% if current_page == 1 %}
    <p>My paragraph</p>
{% endif %}
```

## Unless

The following attribute:

<DynamicAttribute name="liquid:unless" value="condition" />

can be added to any element. That element will be wrapped into an unless condition tag (unless is the opposite of the if), in this way you can hide elements based on difficult or arbitrary conditions that are not covered by the conditional elements. 

For example, if you add a paragraph with the attribute 

<Attribute name="liquid:unless" value="current_page == 1" />

the code will be converted as: 
```liquid
{% unless current_page == 1 %}
    <p>My paragraph</p>
{% endunless %}
```

## For

The following attribute:

<DynamicAttribute name="liquid:for" value="cycle condition" />

can be added to any element. That element will be wrapped into a for tag, in this way you can repeat elements based on your code. 

For example, if you add a paragraph with the attribute 

<Attribute name="liquid:for" value="image in product.images" />

the code will be converted as: 
```liquid
{% for image in product.images %}
    <p>My paragraph</p>
{% endfor %}
```

## Object

The following attribute:

<DynamicAttribute name="liquid:object" value="object" />

can be added to any element. The element text will get the code used inside the value. For example:

For example, if you add a paragraph with the attribute 

<Attribute name="liquid:object" value="product.description" />

the code will be converted as: 
```liquid
<p>{{product.description}}</p>
```

Naturally, this is not so usefull if you would have been able to set code only as text, so you can add the optional attribute:

<DynamicAttribute name="where" value="html attribute" />

where you specificy the html attribute where you want your code to be injected.

As an example, if you want to add the id of the product as id of the html element, you can use:

<Attribute name="liquid:object" value="product.id" />

<Attribute name="where" value="id" />

You can use also Shopify filters or any other arbitrary code inside values for example:

<Attribute name="liquid:object" value="'product-' | append: product.id" />

<Attribute name="where" value="id" />

is totally valid! 

## Tag

The following attribute:

<DynamicAttribute name="liquid:tag" value="code" />

can be added to any element. The element text will get the code used inside the value, wrapped inside tag and not object, for example, if you add on a div:

<Attribute name="liquid:tag" value="include 'my-beautiful-snippet'" />

the code will be converted as: 
```liquid
<div>{% include 'my-beautiful-snippet' %}</div>
```


## Use Cases

This elements are really really helpfull in many ways: not all conditions are covered by the Adapter for the example, because they are pretty much infinite!
Third party apps, also, will often asks you to include code snippets to work, or other kind of code, and all this code can be injected using the techniques enlisted before! So you don't have to modify manually the converted theme!