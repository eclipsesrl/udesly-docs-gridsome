---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/sidebar/'
next: '/wordpress/general/widget/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Frontend Editor
The Frontend Editor allows to edit some content in your WordPress site visually, without need to access your Webflow theme again. It is accessible by enabling the Udesly WP plugin.

You can disable the frontend editor from the Udesly Adapter.
It automatically takes: images, texts, links, iframes and videos.


<div align="center">
  <g-image src="~/assets/images/frontend-editor.png" />
</div>

Each content is referred through the hashing of the content itself.

What you edit via Frontend Editor is deleted once there's no more reference about that specific content on Webflow. Contents are referenced through an hashing of the content itself.

**E.G.** an H1 with content "my title" gets hashed to a code like text_12123123, so when the client edits this, it changes the value that referres to that specific code. Every conversion releases always the same hash for the same content, so you lose your client's edits only if you change the H1 with text "my title" with another content.

Because the hashing is always the same, if you have two duplicates elements in the same page (2 lorem ipsum, for example), these elements cannot be edited separately. To overcome this problem you can use the following attribute:

<DynamicAttribute name="duplicate" value="your unique code" />

This code is totally randomic, just be sure that this is unique per page.

### Background Images

Background Images are not automatically editable from frontend editor. You have to add the following attribute:

<DynamicAttribute name="backgrdoun-image" value="your unique code" />

This code is totally randomic, just be sure that this is unique per page.