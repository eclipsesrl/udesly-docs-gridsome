---
description: ''
sidebar: 'ghost'
prev: '/ghost/general/static-pages/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Conditionals

The following attributes can be used on every element to show or hide it, based on specific conditions.

## Show If

By using the attribute:

<DynamicAttribute name="show-if" value="condition" />

The element will be rendered only if the *condition* is met.

## Hide if

By using the attribute:

<DynamicAttribute name="hide-if" value="condition" />

The element will not be rendered only if the *condition* is met.


## Conditions

Below you will find all valid conditions, for brevity you will find all the attributes only with show-if, but you can change it with hide-if without any issue:

#### Member

Show/Hide element if the user is currently logged in:

<Attribute name="show-if" value="member" />

#### Paid Member

Show/Hide element if the user currently logged in is a paid member:

<Attribute name="show-if" value="paid-member" />

#### Has Access

Show/Hide element if the user currently logged in has access to the current resource:

<Attribute name="show-if" value="has-access" />

## Notes

The elements you hide/show with conditionals will not be sent at all from the Server to the Browser, so they will not be "hidden" by css or js, they will not be present at all inside the DOM!