---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/reset-password-page/'
next: '/shopify/account/order-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Addresses Page

To declare an Addresses Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="addresses" />

Inside this page you can add all of the following elements:

## Addresses List

This is the list of all the addresses inserted by your user.

On a Collection List Wrapper add the attribute:

<Attribute name="item" value="addresses" />

This collection list can be paginated and you can change the number of addresses per page following the path: Online Stores > Themes > Customize. 

Inside the Collection Item you have to add a form block, with inside the following inputs:

* A Label
* An input Type Text
* A Select
* A submit button

This form will have all fields populated and modified by Shopify

Optionally you can add the following elements:

* A text with attribute (to show the address as text):

<Attribute name="item" value="address" />

* A Link/Button with attribute:

<Attribute name="item" value="remove-address" />



## New Address Form

This form is used to create a new Address. Insert a Form block with attribute:

<Attribute name="item" value="new-address" />

The form must have the following inputs inside:

* A Label
* An input Type Text
* A Select
* A submit button