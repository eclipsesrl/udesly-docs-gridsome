---
description: ''
sidebar: 'shopify'
prev: '/shopify/general/forms/'
next: '/shopify/general/socials/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Menu

If you want to manage some links by Shopify you can create Dynamic Menus by adding simply the attribute:

<DynamicAttribute name="menu" value="menu handle" />

on any Link. This link where you added the attribute will be repeated once for any link you added inside the Menu created in Shopify (Only first level of nesting). So if you want to make dynamic the links inside a dropdown, you have to add the attribute on the first *Dropdown Link* and remove all the others.

Menus in Shopify can be created by following the path Online Store > Navigation. Don't forget to create the menu in Shopify and take note of the handle of the menu, otherwise your menu will not work at all.

<div align="center">
  <g-image src="~/assets/images/shopify-menu-handle.png" />
</div>

In the image you can see clearly that the test menu created has as handle the value "first-menu" so the attribute would be:

<Attribute name="menu" value="first-menu" />

# Mega Menu

If you want to manage a menu created with at most 1 level of nested menus, you can add on a div the attribute:

<DynamicAttribute name="mega-menu" value="menu handle" />

Inside this div, you have to add 1 link and 1 dropdown. These elements will be combined based on your menu structure, but note that only 1 level of nesting is supported!
Menus in Shopify can be created by following the path Online Store > Navigation. Don't forget to create the menu in Shopify and take note of the handle of the menu, otherwise your menu will not work at all.

<div align="center">
  <g-image src="~/assets/images/shopify-menu-handle.png" />
</div>

In the image you can see clearly that the test menu created has as handle the value "first-menu" so the attribute would be:

<Attribute name="mega-menu" value="first-menu" />


<CopyElement name="Mega Menu">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8bdc9590-22a2-e972-4daa-ca5062e7620a","tag":"nav","classes":["3b38b43a-7398-71b0-299a-0660795747b5"],"children":["8bdc9590-22a2-e972-4daa-ca5062e7620b","c9dd4860-918b-8aa8-9b6a-4b3d0f9d634d"],"type":"NavbarMenu","data":{"tag":"nav","navbar":{"type":"menu"},"attr":{"role":"navigation"},"xattr":[{"name":"mega-menu","value":"megamenu"}]}},{"_id":"8bdc9590-22a2-e972-4daa-ca5062e7620b","tag":"a","classes":["92a83fbc-806e-364d-47ef-a0f8a68b8933"],"children":["8bdc9590-22a2-e972-4daa-ca5062e7620c"],"type":"NavbarLink","data":{"navbar":{"type":"link"},"attr":{"href":"#"},"link":{"mode":"external"}}},{"_id":"8bdc9590-22a2-e972-4daa-ca5062e7620c","text":true,"v":"Home"},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d634d","tag":"div","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d634e","c9dd4860-918b-8aa8-9b6a-4b3d0f9d6352"],"type":"DropdownWrapper","data":{"tag":"div","dropdown":{"hover":false,"delay":0,"type":"wrapper"},"attr":{"data-hover":"","data-delay":"0"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d634e","tag":"div","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d634f","c9dd4860-918b-8aa8-9b6a-4b3d0f9d6350"],"type":"DropdownToggle","data":{"tag":"div","dropdown":{"type":"toggle"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d634f","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"dropdown-toggle"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6350","tag":"div","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d6351"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6351","text":true,"v":"Dropdown"},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6352","tag":"nav","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d6353","c9dd4860-918b-8aa8-9b6a-4b3d0f9d6355","c9dd4860-918b-8aa8-9b6a-4b3d0f9d6357"],"type":"DropdownList","data":{"tag":"nav","dropdown":{"type":"list"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6353","tag":"a","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d6354"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6354","text":true,"v":"Link 1"},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6355","tag":"a","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d6356"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6356","text":true,"v":"Link 2"},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6357","tag":"a","classes":[],"children":["c9dd4860-918b-8aa8-9b6a-4b3d0f9d6358"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"c9dd4860-918b-8aa8-9b6a-4b3d0f9d6358","text":true,"v":"Link 3"}],"styles":[{"_id":"3b38b43a-7398-71b0-299a-0660795747b5","fake":false,"type":"class","name":"MegaMenu","namespace":"","comb":"","styleLess":"display: flex; justify-content: center; align-items: center; align-self: auto; order: 0; flex-grow: 0; flex-shrink: 1; flex-basis: auto;","variants":{"medium":{"styleLess":"z-index: 15; padding-top: 5px; padding-bottom: 5px; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: hsla(199.9999999999998, 8.11%, 92.75%, 1.00); background-color: hsla(0, 0.00%, 100.00%, 1.00);"}},"children":[],"selector":null},{"_id":"92a83fbc-806e-364d-47ef-a0f8a68b8933","fake":false,"type":"class","name":"Nav Link","namespace":"","comb":"","styleLess":"margin-right: 10px; margin-left: 10px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"},"medium":{"styleLess":"margin-right: 0px; margin-left: 0px; padding-top: 14px; padding-right: 24px; padding-bottom: 14px; padding-left: 24px;"},"small":{"styleLess":"padding-right: 20px; padding-left: 20px;"},"tiny":{"styleLess":"padding-right: 16px; padding-left: 16px;"},"main_current":{"styleLess":"display: block; opacity: 0.7; color: hsla(240, 9.43%, 10.39%, 1.00);"}},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":1,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>