---
description: ''
sidebar: 'shopify'
next: '/shopify/general/menu/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Forms

There are 2 type of forms that you can use in all your pages:

## Contact Forms

On any page of your Website you can add forms that will be sent to your admin email!

> ⚠️⚠️⚠️: All the forms must include at least a field type email with name "email", and all the names of the fields must be **ALL LOWERCASE**


To any Form block add the attribute:

<Attribute name="shopify" value="form" />


## Newsletter Forms

This special form requires a field type email with name "email" and will add that email as customer of your shop, in this way you will be able to target those emails for marketing purposes. Just add the following attribute on a Form Block:


<Attribute name="shopify" value="newsletter-form" />