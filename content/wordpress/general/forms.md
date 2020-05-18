---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/frontend-editor/'
next: '/wordpress/general/shortcodes/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Forms
If you want to manage your forms through WordPress and make WordPress sent it, you just need to add the attribute:


<Attribute name="wordpress" value="form" /> 

on a Form Block.

You can find different settings for forms following the path *Udesly > Settings > Email*

> ⚠️⚠️⚠️: Before screaming in pain if your forms do not work, do 2 steps:

> 1. Check if you added the Attribute;

> 2. Check if your server **smtp** configuration is correct. Pretty adviced to use this plugin to check if your server is fine! [Download](https://wordpress.org/plugins/wp-mail-smtp/)

