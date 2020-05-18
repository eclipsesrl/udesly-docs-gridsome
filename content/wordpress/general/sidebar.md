---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/menu/'
next: '/wordpress/general/frontend-editor/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Sidebar
WordPress Sidebar is a vertical column provided by a theme for displaying information other than the main content of the web page. 

<div align="center">
  <g-image src="~/assets/images/wordpress-sidebar.jpg" />
</div>

Actually, it is not always a vertical column on the side. It can be a horizontal rectangle below or above the content area, footer, header, or any where in the theme.

<div align="center">
  <g-image src="~/assets/images/sidebars-wordpress.png" />
</div>

You can drag and drop items into sidebars under *Appearance » Widgets* in WordPress admin panel.

Of course, you can design your own sidebar in Webflow and manage it from WordPress, thanks to the Adapter. So, design it Webflow and add the following attribute on a **Text Block** element:

<DynamicAttribute name="sidebar" value="your-sidebar-name" />

You can choose the name you prefer the most, the Adapter will register it automatically.