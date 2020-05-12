---
sidebar: "shopify"
prev: "/shopify/shop/pages/"
next: "/shopify/shop/collection/"
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Collections List Page

This is the page where all collections of your shop are listed.
This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="list-collections" />

Inside this page you should show a list of your collections


## Collections

This is the list of all the collections of your Shop. Note that this element can be added also inside other pages, but it can be *paginated only in the collections list page*.

To create a collections list, on a Collection List Wrapper just add the attribute:

<Attribute name="shop" value="collections" />

To enable pagination, just press on *paginate items* inside Webflow, but remember that limit will be set on Shopify by following the path *Online Store > Themes > Customize*

<CopyElement title="Collections List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c31769","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176a","4f9c8f79-c04f-e1b9-daf6-ed0967c3176c"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"shop","value":"collections"}]}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176a","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176b"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176b","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176c","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176d"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176d","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176e"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176e","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside the Collection Item you can add any of the following elements:

#### Title

This is the collection title, can be added on texts or links using the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Collection Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"16e01368-7266-7c92-3fc4-eabe1b1a93ec","tag":"h3","classes":[],"children":["16e01368-7266-7c92-3fc4-eabe1b1a93ed"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"16e01368-7266-7c92-3fc4-eabe1b1a93ed","text":true,"v":"Collection Title"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Description

This is the collection description, can be added on texts using the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Collection Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa3","tag":"p","classes":[],"children":["4d57004c-a508-404b-7ef6-f3ff8a8fefa4"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"description"}]}},{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa4","text":true,"v":"Collection Description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Products Count

This is the number of products presents inside the collection, can be added on texts using the attribute:

<Attribute name="item" value="products-count" />

<CopyElement title="Collection Products COunt">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa3","tag":"p","classes":[],"children":["4d57004c-a508-404b-7ef6-f3ff8a8fefa4"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"products-count"}]}},{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa4","text":true,"v":"3"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to the collection, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the article page.

To create a futured image just use the attribute

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Shopify automatically compress the photo, and optimizes the photo, you can add the following optional attributes to change shopify parameters 

##### Dimension 
you can change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use these prefixed values below, ordered by largest to smallest: 

<code class="value">master</code>,<code class="value">grande</code>, <code class="value">large</code>, <code class="value">medium</code>, <code class="value">compact</code>, <code class="value">small</code>, <code class="value">thumb</code>, <code class="value">icon</code>, <code class="value">pico</code> 

or you can set a fixed width x height (or just one of the parameters):

<code class="dynamic-value">{width}x{height}</code>, <code class="dynamic-value">{width}x</code>, <code class="dynamic-value">x{height}</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300x500" />

##### Crop

You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the crop parameter specifies what part of the image to show.

You can specify crop using the attribute:

<DynamicAttribute name="crop" value="crop position" />

Valid options are:

<code class="value">top</code>, <code class="value">center</code>, <code class="value">bottom</code>, <code class="value">left</code> and <code class="value">right</code>

##### Scale

The scale parameter lets you specify the pixel density of the image. You can add it using the attribute:

<DynamicAttribute name="scale" value="scale factor" />

Valid options are: 

<code class="value">2</code> and <code class="value">3</code>


##### Format

The format parameter lets you specify what file format to use for the displayed image.

You can specify it adding the attribute:

<DynamicAttribute name="format" value="format type" />

Valid options are: 

<code class="value">jpg</code> and <code class="value">pjpg</code>

**pjpg** is progressive JPEG. A browser loads a full-sized progressive JPEG with gradually increasing quality, instead of loading the full-quality image from top to bottom like a traditional JPEG.

> Note that Shopify can do the only the following format conversions for you:
> * PNG to JPG
> * PNG to PJPG
> * JPG to PJPG



## Tips

If you want to exclude a collection from the collection list, you can use the [liquid elements](/shopify/general/liquid/). For example if you want to exclude the collection named "frontpage", you can add this attribute on the Collection List Item element:

<Attribute name="liquid:unless" value="collection.handle == 'frontpage'" />