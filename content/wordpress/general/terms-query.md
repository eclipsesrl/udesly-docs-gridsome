---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/forms/'
next: '/wordpress/general/conditionals/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Terms Queries / Lists

For historical reasons *Terms Queries* are also known as *Lists* (First version of the adapter used this name).

This is a list of terms, (for example a list of categories, or tags), insert a Collection List Wrapper with the attribute:

<DynamicAttribute name="lists" value="slug of the list" />

Terms queries are created in WordPress following the path: Udesly > Terms queries, each query you create will have a name that you decide, that name (not the name actually, but the slug) will be used in Webflow to associate the correct terms. It's just a matter of matching actually, you have to tell the adapter, in this collection list I want to show terms that are selected using the query that is named "bla-bla".

So for example if you created in WordPress a Term query called *All Tags* you have to add the attribute:

<Attribute name="lists" value="all-tags" />

<CopyElement title="Terms List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8faf05e4-0bab-6ee4-f90f-91d7c0ed6836","tag":"div","classes":[],"children":["8faf05e4-0bab-6ee4-f90f-91d7c0ed6837","8faf05e4-0bab-6ee4-f90f-91d7c0ed6839"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"lists","value":"all-tags"}]}},{"_id":"8faf05e4-0bab-6ee4-f90f-91d7c0ed6837","tag":"div","classes":[],"children":["8faf05e4-0bab-6ee4-f90f-91d7c0ed6838"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"8faf05e4-0bab-6ee4-f90f-91d7c0ed6838","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"8faf05e4-0bab-6ee4-f90f-91d7c0ed6839","tag":"div","classes":[],"children":["8faf05e4-0bab-6ee4-f90f-91d7c0ed683a"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"8faf05e4-0bab-6ee4-f90f-91d7c0ed683a","tag":"div","classes":[],"children":["8faf05e4-0bab-6ee4-f90f-91d7c0ed683b"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"8faf05e4-0bab-6ee4-f90f-91d7c0ed683b","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List Item, you can add the following elements:

#### Title

The Title of the post can be added either to text elements or to link elements, if you use the latter it will also automatically link to the post page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d26","tag":"h3","classes":["73541726-af92-77b8-c48e-ff52d4b69d3d"],"children":["416478a9-2aed-7bc6-f0b6-1b4e859b7d27"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d27","text":true,"v":"Post Title"}],"styles":[{"_id":"73541726-af92-77b8-c48e-ff52d4b69d3d","fake":false,"type":"class","name":"Post Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to a term, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the post page.

To create a futured image just use the attribute

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

to change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use:
<code class="value">full</code>, <code class="value">medium</code>, <code class="value">thumbnail</code>, <code class="value">larger</code> or <code class="dynamic-value">width, height</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300, 500" />

Please, mind the space between width and height.


#### Permalink

The permalink is simply the url to the current term. Just add the attribute on a link element of any type:

<Attribute name="item" value="permalink" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Description

The description of the term, can be added on any text element just adding the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"description"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Count

This is the count of posts associated to this specific term, you can add it to texts using the attribute:

<Attribute name="item" value="count" />

<CopyElement title="Count">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"count"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"(3)"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>