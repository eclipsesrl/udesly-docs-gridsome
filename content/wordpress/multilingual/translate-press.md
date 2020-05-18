---
sidebar: 'wordpress'
next: '/wordpress/multilingual/weglot/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Translate Press

Translate Press is a WordPress plugin that allows to translate all your website content directly from the front-end, in a friendly user interface (the translation is displayed in real-time). To use it you need to download [Translate Press plugin](https://wordpress.org/plugins/translatepress-multilingual/) from the WordPress repository. In your project you can easily create a language switch link that allows users to switch between the different languages of your website.

To create a language switch link just add the following attribute:

<DynamicAttribute name="translate-press" value="language-code" />

For example:

<Attribute name="translate-press" value="en_GB" />

The **Active** state and the combo class "current" will be applied on the link if it's the current language.
