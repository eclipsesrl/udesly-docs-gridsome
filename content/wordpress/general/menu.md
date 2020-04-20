---
description: ''
sidebar: 'wordpress'
next: '/wordpress/general/sidebar/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Menu

You can design a dynamic menu in Webflow and manage its content from WordPress admin panel. So, once you have uploaded the converted template to WordPress, you have to create the menu from the corresponding control panel.

<div align="center">
  <g-image src="~/assets/images/wordpress-menu1.jpg" />
</div>

Please never forget that the name of the menu you insert here must match with the one you have entered in Webflow before.🙏🏻
Speaking of which, this is how you have to configure this feature on Webflow side: insert a **Link** element. This one will be repeated and if the link is inside a List Item, the whole List Item will be repeated.

Add the following attribute to the Link element:

<DynamicAttribute name="menu" value="your-menu-name" />

Let's make an example. We get this navbar menu we want to make dynamic. We insert a link element and give it an attribute containing the menu name (whatever you want), let's say *navigation-menu*.

<div align="center">
  <g-image src="~/assets/images/navmenu.png" />
</div>

Now, once we are confident we get the most beautiful template in the universe, we can go ahead with the conversion and move on WordPress side. Here, we have to create the menu named *navigation-menu* and add all the pages we want to appear in our menu. In this example, we add *About* and *Contact* pages.

<div align="center">
  <g-image src="~/assets/images/menuexample.png" />
</div>

*Et voilà!* We have now our menu in WordPress exactly how it was supposed to be when we was thinking about that in Webflow.

<div align="center">
  <g-image src="~/assets/images/menufinal.png" />
</div>

## Dropdown Menu
If you want to create a dropdown menu, you just have to add the attribute above on a link contained in the dropdown and create the menu with the same name in Wordpress, it will get all links in the first level.

<div align="center">
  <g-image src="~/assets/images/dropdown.jpg" />
</div>

<div align="center">
  <g-image src="~/assets/images/dropdown2.png" />
</div>

<div align="center">
  <g-image src="~/assets/images/dropdown3.jpg" />
</div>