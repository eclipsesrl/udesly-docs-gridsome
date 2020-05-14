---
sidebar: "shopify"
prev: "/shopify/shop/collections-list/"
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Collection Page

This is the page where all products of a collection of your shop are listed.
This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="collection" />

or creating an alternative template using:

<Attribute name="page" value="collection-template" />

Inside this page you can add all of the following elements:

## Collection Title

This is the name of the current collection, it can be used on any text using the attribute:

<Attribute name="shop" value="collection-title" />

<CopyElement title="Collection Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"16e01368-7266-7c92-3fc4-eabe1b1a93ec","tag":"h3","classes":[],"children":["16e01368-7266-7c92-3fc4-eabe1b1a93ed"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"shop","value":"collection-title"}]}},{"_id":"16e01368-7266-7c92-3fc4-eabe1b1a93ed","text":true,"v":"Collection Title"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Collection Description

This is the description of the current collection, it can be used on any text using the attribute:

<Attribute name="shop" value="collection-description" />

<CopyElement title="Collection Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa3","tag":"p","classes":[],"children":["4d57004c-a508-404b-7ef6-f3ff8a8fefa4"],"type":"Paragraph","data":{"xattr":[{"name":"shop","value":"collection-description"}]}},{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa4","text":true,"v":"Collection Description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Collection Image

The featured Image is the main image attached to the collection, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the article page.

To create a futured image just use the attribute

<Attribute name="shop" value="collection-image" />

<CopyElement title="Collection Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"shop","value":"collection-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

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

## Collection Type

This is the type of the current collection, it can be used on any text using the attribute:

<Attribute name="shop" value="collection-type" />

<CopyElement title="Collection Type">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa3","tag":"p","classes":[],"children":["4d57004c-a508-404b-7ef6-f3ff8a8fefa4"],"type":"Paragraph","data":{"xattr":[{"name":"shop","value":"collection-type"}]}},{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa4","text":true,"v":"Collection Type"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Collection Vendor

This is the vendor of the current collection, it can be used on any text using the attribute:

<Attribute name="shop" value="collection-vendor" />

<CopyElement title="Collection Vendor">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa3","tag":"p","classes":[],"children":["4d57004c-a508-404b-7ef6-f3ff8a8fefa4"],"type":"Paragraph","data":{"xattr":[{"name":"shop","value":"collection-vendor"}]}},{"_id":"4d57004c-a508-404b-7ef6-f3ff8a8fefa4","text":true,"v":"Collection Vendor"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Shop All Tags

This is the list of all tags of your Shop, you can add the following attribute on a Link:

<Attribute name="shop" value="all-tags" />

This link will be repeated and populated according to the tags you have created in your blog. This includes tags of articles that are not in the current pagination view.

<CopyElement title="Shop All Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339907","tag":"a","classes":["7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61"],"children":["d2c9ab6d-c6c5-355a-a94e-a91fae339908"],"type":"Link","data":{"link":{"url":"#","mode":"external"},"attr":{"href":"#"},"xattr":[{"name":"shop","value":"all-tags"}]}},{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339908","text":true,"v":"Tag"}],"styles":[{"_id":"7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61","fake":false,"type":"class","name":"Tag Link","namespace":"","comb":"","styleLess":"display: block; margin-bottom: 10px; color: hsla(240, 9.43%, 10.39%, 1.00); font-size: 14px; line-height: 24px; text-decoration: none;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"}},"children":["c33620b0-a143-521a-5b9c-18bf513cf001"],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Shop Tags

Returns all tags in a Shop. Similar to Shop All Tags, but only returns tags of products that are in the filtered view.

You can add the following attribute on a Link:

<Attribute name="shop" value="tags" />

This link will be repeated and populated according to the tags present in the current filter view.

<CopyElement title="Shop Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339907","tag":"a","classes":["7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61"],"children":["d2c9ab6d-c6c5-355a-a94e-a91fae339908"],"type":"Link","data":{"link":{"url":"#","mode":"external"},"attr":{"href":"#"},"xattr":[{"name":"shop","value":"tags"}]}},{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339908","text":true,"v":"Tag"}],"styles":[{"_id":"7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61","fake":false,"type":"class","name":"Tag Link","namespace":"","comb":"","styleLess":"display: block; margin-bottom: 10px; color: hsla(240, 9.43%, 10.39%, 1.00); font-size: 14px; line-height: 24px; text-decoration: none;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"}},"children":["c33620b0-a143-521a-5b9c-18bf513cf001"],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Shop Types

Returns all types in a Shop.

You can add the following attribute on a Link:

<Attribute name="shop" value="types" />

This link will be repeated and populated according to the types of the shop.

<CopyElement title="Shop Types">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339907","tag":"a","classes":["7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61"],"children":["d2c9ab6d-c6c5-355a-a94e-a91fae339908"],"type":"Link","data":{"link":{"url":"#","mode":"external"},"attr":{"href":"#"},"xattr":[{"name":"shop","value":"types"}]}},{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339908","text":true,"v":"Type"}],"styles":[{"_id":"7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61","fake":false,"type":"class","name":"Type Link","namespace":"","comb":"","styleLess":"display: block; margin-bottom: 10px; color: hsla(240, 9.43%, 10.39%, 1.00); font-size: 14px; line-height: 24px; text-decoration: none;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"}},"children":["c33620b0-a143-521a-5b9c-18bf513cf001"],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Shop Vendors

Returns all vendors in a Shop.

You can add the following attribute on a Link:

<Attribute name="shop" value="vendors" />

This link will be repeated and populated according to the types of the shop.

<CopyElement title="Shop Vendors">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339907","tag":"a","classes":["7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61"],"children":["d2c9ab6d-c6c5-355a-a94e-a91fae339908"],"type":"Link","data":{"link":{"url":"#","mode":"external"},"attr":{"href":"#"},"xattr":[{"name":"shop","value":"vendors"}]}},{"_id":"d2c9ab6d-c6c5-355a-a94e-a91fae339908","text":true,"v":"Vendor"}],"styles":[{"_id":"7e7a1e4f-8437-1dfc-0d84-2e8050f0ac61","fake":false,"type":"class","name":"Vendor Link","namespace":"","comb":"","styleLess":"display: block; margin-bottom: 10px; color: hsla(240, 9.43%, 10.39%, 1.00); font-size: 14px; line-height: 24px; text-decoration: none;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"}},"children":["c33620b0-a143-521a-5b9c-18bf513cf001"],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Archive Products

This is the list of all the products of the current collection. 
On a Collection List Wrapper just add the attribute:

<Attribute name="shop" value="archive-products" />

To enable pagination, just press on *paginate items* inside Webflow, but remember that limit will be set on Shopify by following the path *Online Store > Themes > Customize*

<CopyElement title="Archive Products">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c31769","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176a","4f9c8f79-c04f-e1b9-daf6-ed0967c3176c"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"shop","value":"archive-products"}]}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176a","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176b"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176b","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176c","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176d"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176d","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176e"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176e","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/shopify/shop/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Product Card" from="simple-post-card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"52ddc0c9-644a-8d1b-8be2-e0b60ea004eb","tag":"div","classes":[],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a274","aa28b032-2c39-a4bf-6f2c-ffbebce3a27e"],"type":"Block","data":{"tag":"div"}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a274","tag":"div","classes":["47e7d71b-3369-a228-b2fc-1325ffedee05"],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a275","aa28b032-2c39-a4bf-6f2c-ffbebce3a279"],"type":"Block","data":{"tag":"div"}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a275","tag":"a","classes":["22f55542-f4ea-8013-24a0-3003b473dc40"],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a276"],"type":"Link","data":{"block":"inline","link":{"mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"link"}]}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a276","tag":"div","classes":["2271e43e-2932-1952-1223-38b4a15b3ebb","b527f699-ed29-af9f-daf0-5f893c9be01c"],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a277"],"type":"Block","data":{"tag":"div"}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a277","tag":"div","classes":[],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a278"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a278","text":true,"v":"View Product"},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a279","tag":"div","classes":["b94de3f4-7d23-bc31-0820-2c31769b114c","f825528c-e60f-393f-7d78-ac805fbdf518"],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a27c"],"type":"Block","data":{"tag":"div","dyn":{"bind":{}},"xattr":[{"name":"item","value":"featured-image"},{"name":"dimension","value":"large"}]}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a27c","tag":"div","classes":["f54e6d75-c518-3c99-9811-3381194925df","62d11bf4-7c2c-d68e-b360-72eaef6f05d5","44467278-c1bd-c37b-1e5c-6e9bd934a0f9"],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a27d"],"type":"Block","data":{"tag":"div","text":true,"dyn":{"condition":{"class":{"false":{"w-condition-invisible":{"fields":{"on-sale":{"eq":"true"}}}}}}},"xattr":[{"name":"item","value":"on-sale"}]}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a27d","text":true,"v":"On Sale"},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a27e","tag":"div","classes":["0922581b-f798-e8ec-de90-d9405711ded7"],"children":["aa28b032-2c39-a4bf-6f2c-ffbebce3a27f","aa28b032-2c39-a4bf-6f2c-ffbebce3a280"],"type":"Block","data":{"tag":"div"}},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a27f","tag":"a","classes":["1a2b70a3-6a98-615e-9f7e-469f5ff0a352"],"children":["75da549d-8cc9-b2f9-4f16-28e137f822e8"],"type":"Link","data":{"link":{"url":"#","mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"title"}],"attr":{"href":"#"}}},{"_id":"75da549d-8cc9-b2f9-4f16-28e137f822e8","text":true,"v":"Product Title"},{"_id":"aa28b032-2c39-a4bf-6f2c-ffbebce3a280","tag":"div","classes":["46fb8c13-a1aa-cd97-1fb5-7a78b660ce18"],"children":["2aea255e-1b7c-ff9b-a3e4-dbd2ec75471c"],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{}},"xattr":[{"name":"item","value":"price"}]}},{"_id":"2aea255e-1b7c-ff9b-a3e4-dbd2ec75471c","text":true,"v":"$45"}],"styles":[{"_id":"1a2b70a3-6a98-615e-9f7e-469f5ff0a352","fake":false,"type":"class","name":"Size6 Link","namespace":"","comb":"","styleLess":"display: block; margin-top: 10px; margin-bottom: 10px; color: hsla(240, 9.43%, 10.39%, 1.00); line-height: 26px; text-decoration: none;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"}},"children":["05df51b5-dfd4-78c7-7e35-352ebe34aa89","1bf307d3-05d0-2cc2-8ca9-cf44ac6d425b","04b0029d-f18a-e699-9563-4b70e6cedb11"],"selector":null},{"_id":"47e7d71b-3369-a228-b2fc-1325ffedee05","fake":false,"type":"class","name":"Image Wrap","namespace":"","comb":"","styleLess":"position: relative; display: flex; flex-direction: column; align-items: stretch;","variants":{},"children":[],"selector":null},{"_id":"62d11bf4-7c2c-d68e-b360-72eaef6f05d5","fake":false,"type":"class","name":"Black Label","namespace":"","comb":"&","styleLess":"z-index: 40; border-top-style: none; border-top-width: 0px; border-right-style: none; border-right-width: 0px; border-bottom-style: none; border-bottom-width: 0px; border-left-style: none; border-left-width: 0px; background-color: hsla(240, 9.43%, 10.39%, 1.00); color: white;","variants":{},"children":["8fd1e478-3477-48d4-9313-7cdcdc1b246b","44467278-c1bd-c37b-1e5c-6e9bd934a0f9"],"selector":null},{"_id":"44467278-c1bd-c37b-1e5c-6e9bd934a0f9","fake":false,"type":"class","name":"Sale Label","namespace":"","comb":"&","styleLess":"position: absolute; left: auto; top: 0%; right: 0%; bottom: auto;","variants":{},"children":[],"selector":null},{"_id":"22f55542-f4ea-8013-24a0-3003b473dc40","fake":false,"type":"class","name":"Item Overlay","namespace":"","comb":"","styleLess":"position: absolute; z-index: 30; display: flex; width: 100%; height: 100%; padding-right: 15px; padding-bottom: 15px; padding-left: 15px; flex-direction: column; justify-content: flex-end; align-items: stretch; background-image: linear-gradient(to bottom, hsla(240, 9.43%, 10.39%, 0.10),hsla(240, 9.43%, 10.39%, 0.10)); opacity: 0; text-decoration: none; cursor: pointer;","variants":{},"children":[],"selector":null},{"_id":"f825528c-e60f-393f-7d78-ac805fbdf518","fake":false,"type":"class","name":"Product Image Size L","namespace":"","comb":"&","styleLess":"height: 480px;","variants":{},"children":[],"selector":null},{"_id":"b527f699-ed29-af9f-daf0-5f893c9be01c","fake":false,"type":"class","name":"White Small","namespace":"","comb":"&","styleLess":"justify-content: center; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; background-color: hsla(240, 0.00%, 100.00%, 1.00); color: black; text-align: center;","variants":{"tiny":{"styleLess":"flex-grow: 0; flex-shrink: 0; flex-basis: auto;"}},"children":[],"selector":null},{"_id":"b94de3f4-7d23-bc31-0820-2c31769b114c","fake":false,"type":"class","name":"Product Image","namespace":"","comb":"","styleLess":"display: flex; height: 480px; justify-content: space-between; align-items: flex-start; background-image: @img_5eaa90803b601602d8913640; background-position: 50% 50%; background-size: cover;","variants":{"medium":{"styleLess":"background-position: 50% 50%;"}},"children":["75ee9b2e-b19c-d787-d3b8-6286c5523ffe","9cd661de-c947-a0e2-713d-5b364385a9a6","f825528c-e60f-393f-7d78-ac805fbdf518","63063758-cb66-c1d5-593e-7898b56e77e5"],"selector":null},{"_id":"2271e43e-2932-1952-1223-38b4a15b3ebb","fake":false,"type":"class","name":"Button Small","namespace":"","comb":"","styleLess":"display: flex; padding-top: 18px; padding-right: 30px; padding-bottom: 18px; padding-left: 30px; justify-content: center; align-items: center; flex-grow: 0; flex-shrink: 0; flex-basis: auto; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; background-color: hsla(240, 9.43%, 10.39%, 1.00); color: hsla(240, 0.00%, 100.00%, 1.00); font-size: 14px; line-height: 24px; font-weight: 500; text-align: center; text-decoration: none; text-transform: uppercase;","variants":{"tiny":{"styleLess":"align-self: stretch; flex-grow: 1; flex-shrink: 1; flex-basis: 0%;"},"main_hover":{"styleLess":"background-color: #272731;"}},"children":["b527f699-ed29-af9f-daf0-5f893c9be01c","fc332383-cdb6-47c2-88b1-aec6035c3790"],"selector":null},{"_id":"0922581b-f798-e8ec-de90-d9405711ded7","fake":false,"type":"class","name":"Product4 Content Wrap","namespace":"","comb":"","styleLess":"margin-top: 26px;","variants":{},"children":[],"selector":null},{"_id":"46fb8c13-a1aa-cd97-1fb5-7a78b660ce18","fake":false,"type":"class","name":"Size4 Text","namespace":"","comb":"","styleLess":"margin-top: 10px; margin-bottom: 15px; font-size: 24px; line-height: 32px; font-weight: 300;","variants":{},"children":["57cb3d9a-df62-bb71-a003-65671ddb0314","2760e7c5-1d72-4001-a34e-6e876fac5242","b4dd702a-e379-fcdc-800e-bfa2e6b09d43"],"selector":null},{"_id":"f54e6d75-c518-3c99-9811-3381194925df","fake":false,"type":"class","name":"Label","namespace":"","comb":"","styleLess":"display: inline-block; margin-bottom: 10px; padding-top: 10px; padding-right: 22px; padding-bottom: 10px; padding-left: 22px; border-top-style: solid; border-top-width: 1px; border-top-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); border-right-style: solid; border-right-width: 1px; border-right-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); border-left-style: solid; border-left-width: 1px; border-left-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); background-color: hsla(0, 0.00%, 100.00%, 1.00); font-size: 12px; line-height: 20px; font-weight: 500; text-transform: uppercase;","variants":{},"children":["5316adf0-5e33-978d-9502-9d6b3c016c0b","3e48f0e4-f1cc-6873-942a-571d8ec908a4","e610739e-395d-57bf-4c13-200c2f89a89c","62d11bf4-7c2c-d68e-b360-72eaef6f05d5"],"selector":null}],"assets":[{"cdnUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download.jpg","siteId":"5eaa908028b2be05d37db93d","width":1481,"isHD":false,"height":2000,"fileName":"5eaa90803b601602d8913640_circa-chandelier_hires_download.jpg","createdOn":"2019-07-26T14:48:56.800Z","origFileName":"circa-chandelier_hires_download.jpg","fileHash":"fd4d203cbfba235159a0d605bf940ab5","variants":[{"_id":"5d3b12e16e3cf0fd420e1ca3","origFileName":"circa-chandelier_hires_download-p-500.jpeg","fileName":"5d3b12d89c3afaece583e701_circa-chandelier_hires_download-p-500.jpeg","format":"jpeg","size":44194,"width":500,"quality":100,"error":"FILESIZE_EXCEEDS_CAP"},{"_id":"5d3b12e16e3cf014d70e1ca4","origFileName":"circa-chandelier_hires_download-p-800.jpeg","fileName":"5eaa90803b601602d8913640_circa-chandelier_hires_download-p-800.jpeg","format":"jpeg","size":40322,"width":800,"quality":100,"s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-800.jpeg","cdnUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-800.jpeg"},{"_id":"5d3b12e16e3cf07c010e1ca5","origFileName":"circa-chandelier_hires_download-p-1080.jpeg","fileName":"5eaa90803b601602d8913640_circa-chandelier_hires_download-p-1080.jpeg","format":"jpeg","size":49046,"width":1080,"quality":100,"s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-1080.jpeg","cdnUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-1080.jpeg"},{"_id":"5d4c5c628620ae74d33617ee","s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-130x130q80.jpeg","fileName":"5eaa90803b601602d8913640_circa-chandelier_hires_download-p-130x130q80.jpeg","origFileName":"circa-chandelier_hires_download-p-130x130q80.jpeg","format":"jpeg","cdnUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-130x130q80.jpeg"}],"mimeType":"image/jpeg","s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download.jpg","thumbUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b601602d8913640_circa-chandelier_hires_download-p-130x130q80.jpeg","_id":"5eaa90803b601602d8913640","updatedOn":"2020-04-30T08:47:01.910Z","fileSize":184749}],"ix1":[],"ix2":{"interactions":[{"id":"i-171","interactionTypeId":"MOUSE_HOVER_INTERACTION","eventIds":["e-341","e-342"],"target":"5eaa90803b601684eb913510|aa28b032-2c39-a4bf-6f2c-ffbebce3a275","createdOn":1567590765257}],"events":[{"id":"e-341","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-342"},"instant":true},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5eaa90803b601684eb913510|aa28b032-2c39-a4bf-6f2c-ffbebce3a275"},"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1567590765257},{"id":"e-342","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-341"},"instant":true},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5eaa90803b601684eb913510|aa28b032-2c39-a4bf-6f2c-ffbebce3a275"},"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1567590765257}],"actionLists":[{"id":"a-5","title":"hover-product","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"nodeId":"5be96251aaba7a635cecdf68|79877e64-041a-c822-4aac-45fed11feb85","appliesTo":"ELEMENT_CLASS","styleBlockIds":["22f55542-f4ea-8013-24a0-3003b473dc40"],"useEventTarget":"CHILDREN","boundaryMode":true},"value":0,"unit":"%"},"instant":false},{"id":"a-5-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"nodeId":"5eaa90803b6016eae8913522|bd2c760f-2d93-a5ad-d080-96e4e5aa1f2e","appliesTo":"ELEMENT_CLASS","styleBlockIds":["2271e43e-2932-1952-1223-38b4a15b3ebb"],"useEventTarget":"CHILDREN","boundaryMode":false},"yValue":8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]},{"actionItems":[{"id":"a-5-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"nodeId":"5be96251aaba7a635cecdf68|79877e64-041a-c822-4aac-45fed11feb85","appliesTo":"ELEMENT_CLASS","styleBlockIds":["22f55542-f4ea-8013-24a0-3003b473dc40"],"useEventTarget":"CHILDREN","boundaryMode":true},"value":100,"unit":"%"},"instant":false},{"id":"a-5-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5eaa90803b6016eae8913522|bd2c760f-2d93-a5ad-d080-96e4e5aa1f2e","appliesTo":"ELEMENT_CLASS","styleBlockIds":["2271e43e-2932-1952-1223-38b4a15b3ebb"],"useEventTarget":"CHILDREN","boundaryMode":false},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]}],"createdOn":1539290816398,"useFirstGroupAsInitialState":true},{"id":"a-6","title":"hover-product-off","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5be96251aaba7a635cecdf68|79877e64-041a-c822-4aac-45fed11feb85","appliesTo":"ELEMENT_CLASS","styleBlockIds":["22f55542-f4ea-8013-24a0-3003b473dc40"],"useEventTarget":"CHILDREN","boundaryMode":true},"value":0,"unit":"%"},"instant":false},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5eaa90803b6016eae8913522|bd2c760f-2d93-a5ad-d080-96e4e5aa1f2e","appliesTo":"ELEMENT_CLASS","styleBlockIds":["2271e43e-2932-1952-1223-38b4a15b3ebb"],"useEventTarget":"CHILDREN","boundaryMode":false},"yValue":8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]}],"createdOn":1539290897105,"useFirstGroupAsInitialState":false}]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>