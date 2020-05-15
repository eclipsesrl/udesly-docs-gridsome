---
description: ""
sidebar: "ghost"
next: "/ghost/general/static-pages/"
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# @Site

Anywhere on your site you can add the following elements, they are controlled by Ghost site settings.


## Url

This is the url of your site, can be added on links using the attribute:

<Attribute name="site" value="url" />

<CopyElement title="Site URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"site","value":"url"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Title 

This is the title of your site, can be added on any text using the attribute:

<Attribute name="site" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d26","tag":"h3","classes":["73541726-af92-77b8-c48e-ff52d4b69d3d"],"children":["416478a9-2aed-7bc6-f0b6-1b4e859b7d27"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"site","value":"title"}]}},{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d27","text":true,"v":"Site Title"}],"styles":[{"_id":"73541726-af92-77b8-c48e-ff52d4b69d3d","fake":false,"type":"class","name":"Site Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Logo

This is the logo of your site, can be used on images or divs using the attribute:

<Attribute name="site" value="logo" />

<CopyElement title="Logo">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"site","value":"logo"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Cover Image

This is the cover image of your site can be used on images or divs using the attribute:

<Attribute name="site" value="cover-image" />

<CopyElement title="Cover Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"site","value":"cover-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Twitter Link

This is the twitter url associated with the site, insert a link and add the attribute:

<Attribute name="site" value="twitter" />

<CopyElement title="Twitter URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"site","value":"twitter"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Facebook Link

This is the facebook url associated with the site, insert a link and add the attribute:

<Attribute name="site" value="facebook" />

<CopyElement title="Facebook URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"site","value":"facebook"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Navigation

On Ghost you can create a general menu for the whole site, insert a Link with the attribute:

<Attribute name="site" value="navigation" />

This link will be duplicated once per link set inside the navigation.

<CopyElement title="Navigation">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"22e36fa0-bf34-cffc-a973-534c2c768c20","tag":"a","classes":[],"children":["22e36fa0-bf34-cffc-a973-534c2c768c21"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"site","value":"navigation"}]}},{"_id":"22e36fa0-bf34-cffc-a973-534c2c768c21","text":true,"v":"Button Text"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>