---
description: ''
sidebar: 'shopify'
prev: '/shopify/shop/collection/'
next: '/shopify/shop/product-page-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Collection Item Elements

These are all the elements that you can add inside the collection item of a Shop Collection List Wrapper.

#### Title

The Title of the product can be added either to text elements or to link elements, if you use the latter it will also automatically link to the product page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c6b4f067-3af4-1330-4c25-9bce97ffa6d2","tag":"h3","classes":["59d95faf-ed7c-aa9e-a200-fc9ed1c49f21"],"children":["1b709ebe-fcec-5b0d-b42a-65daac3fc479"],"type":"Heading","data":{"tag":"h3"}},{"_id":"1b709ebe-fcec-5b0d-b42a-65daac3fc479","text":true,"v":"Product Title"}],"styles":[{"_id":"59d95faf-ed7c-aa9e-a200-fc9ed1c49f21","fake":false,"type":"class","name":"Product Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to a product, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the product page.

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


#### Link

The link is simply the url to the current product page. Just add the attribute on a link element of any type:

<Attribute name="item" value="link" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"link"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Description

The description of the product, can be added on any text element just adding the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"description"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Tags

This is the list of tags of the product add it on a link/text element, this element will be repeated once for every category that is attached to the product. To use it use the attribute:

<Attribute name="item" value="tags" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of tags" />

For example to show only first 3 tags add:

<Attribute name="limit" value="3" />

<CopyElement title="Product Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047a","tag":"a","classes":[],"children":["0520c69d-33a7-eb90-7817-ab11b0df047b"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"tags"}]}},{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047b","text":true,"v":"Tag Link"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Collections

This is the list of collections of the product add it on a link/text element, this element will be repeated once for every category that is attached to the product. To use it use the attribute:

<Attribute name="item" value="collections" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of collections" />

For example to show only first 3 tags add:

<Attribute name="limit" value="3" />

<CopyElement title="Product Collections">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047a","tag":"a","classes":[],"children":["0520c69d-33a7-eb90-7817-ab11b0df047b"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"collections"}]}},{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047b","text":true,"v":"Collection Link"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Price

This is the product price, can be inserted on any text element using the attribute:

<Attribute name="item" value="price" />

<CopyElement title="Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"6c7b8309-c246-fa03-52e4-120f34865d42","tag":"div","classes":[],"children":["6c7b8309-c246-fa03-52e4-120f34865d43"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"price"}]}},{"_id":"6c7b8309-c246-fa03-52e4-120f34865d43","text":true,"v":"$30"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Compare Price

It shows up only if the product is on sale, and is the original price, usually should have a line-through. You can add it on any text using the attribute:

<Attribute name="item" value="compare-price" />

<CopyElement title="Compare Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"6c7b8309-c246-fa03-52e4-120f34865d42","tag":"div","classes":["f828dc7f-5375-d5c6-b72d-3d6b7624aa43"],"children":["6c7b8309-c246-fa03-52e4-120f34865d43"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"compare-price"}]}},{"_id":"6c7b8309-c246-fa03-52e4-120f34865d43","text":true,"v":"$30"}],"styles":[{"_id":"f828dc7f-5375-d5c6-b72d-3d6b7624aa43","fake":false,"type":"class","name":"Text Block 2","namespace":"","comb":"","styleLess":"text-decoration: line-through;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Variable Price

This element will show only if the product has a variable price and will show a text like: "$50 - $150", you can use it on texts using the attribute:

<Attribute name="item" value="variable-price" />

<CopyElement title="Variable Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"variable-price"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"$50 - $150"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Vendor

This is the vendor name and can be added on any text element using the attribute:

<Attribute name="item" value="vendor" />

<CopyElement title="Vendor">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"vendor"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Vendor"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Type

This is the type of the product and can be added on any text element using the attribute:

<Attribute name="item" value="type" />

<CopyElement title="Type">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"type"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Type"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### On Sale

Any element with the attribute:

<Attribute name="item" value="on-sale" />

Will be showed only if the current product is on sale. So it's usefull to show on sale badges.

#### Sold Out

Any element with the attribute:

<Attribute name="item" value="sold-out" />

Will be showed only if the current product is sold out. So it's usefull to show sold out badges.

#### Product Image

On shopify you can add multiple product images, if you want to select another specific image add this attribute on a div or an img element:

<Attribute name="item" value="product-image" />

<DynamicAttribute name="index" value="index of the image" />

> *N.B:* indexing of the arrays **always** starts at 0.

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


## Add to Cart

You can use the default add to cart of webflow without adding any attribute

<CopyElement title="Simple Add to Cart">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a4e","tag":"div","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a4f","7dd5a411-115b-3677-8825-cf960f7f1a58","7dd5a411-115b-3677-8825-cf960f7f1a5b"],"type":"CommerceAddToCartWrapper","data":{"tag":"div","commerce":{"type":"add-to-cart-wrapper","quantityEnabled":true}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a4f","tag":"form","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a50","7dd5a411-115b-3677-8825-cf960f7f1a54","7dd5a411-115b-3677-8825-cf960f7f1a56","7dd5a411-115b-3677-8825-cf960f7f1a57"],"type":"CommerceAddToCartForm","data":{"attr":{"data-node-type":"commerce-add-to-cart-form"},"commerce":{"type":"add-to-cart-form"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a50","tag":"fieldset","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a51"],"type":"CommerceAddToCartOptionList","data":{"commerce":{"type":"add-to-cart-option-list"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a51","tag":"fieldset","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a52","7dd5a411-115b-3677-8825-cf960f7f1a53"],"type":"CommerceAddToCartOption","data":{"commerce":{"type":"add-to-cart-option"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a52","tag":"label","classes":[],"children":[],"type":"CommerceAddToCartOptionLabel","data":{"tag":"label"}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a53","tag":"select","classes":[],"children":[],"type":"CommerceAddToCartOptionSelect","data":{"editable":true,"tag":"select","defaultText":"Select"}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a54","tag":"label","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a55"],"type":"FormBlockLabel","data":{"attr":{"for":"quantity-4b15c280ea11e6a3b92d522c3eec69df"},"form":{"type":"label"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a55","text":true,"v":"Quantity"},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a56","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartQuantityInput","data":{"attr":{"id":"quantity-4b15c280ea11e6a3b92d522c3eec69df","name":"commerce-add-to-cart-quantity-input","type":"number","min":"1","value":"1"},"commerce":{"type":"add-to-cart-quantity-input"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a57","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartButton","data":{"attr":{"type":"submit"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a58","tag":"div","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a59"],"type":"CommerceAddToCartOutOfStock","data":{"tag":"div","commerce":{"type":"add-to-cart-out-of-stock"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a59","tag":"div","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a5a"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a5a","text":true,"v":"This product is out of stock."},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a5b","tag":"div","classes":[],"children":["7dd5a411-115b-3677-8825-cf960f7f1a5c"],"type":"CommerceAddToCartError","data":{"tag":"div","commerce":{"type":"add-to-cart-error"}}},{"_id":"7dd5a411-115b-3677-8825-cf960f7f1a5c","tag":"div","classes":[],"children":[],"type":"CommerceAddToCartErrorMsg","data":{"tag":"label","text":true,"commerce":{"ADD_TO_CART_QUANTITY_ERROR":"Product is not available in this quantity.","ADD_TO_CART_GENERAL_ERROR":"Something went wrong when adding this item to the cart.","type":"add-to-cart-error-msg"}}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":2,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

This add to cart will work with all products and if the product is variable it will add the first available variation to the cart.


## Add to Cart with Dropdowns

The Option List that you see in Webflow add to cart is not exported in html so basically you can't use it. Inside the add to cart unfortunately you can't even add another select to recreate the missing html pieces. So the work around is to use "dropdowns" as fake selects. To make this work, add inside the *Default State* of the add to cart a div with the attribute:

<Attribute name="item" value="option-select" />

Inside this div add a *Label* and a *Dropdown*.

<CopyElement title="Add to Cart with Dropdowns">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff10","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff11","207ea814-2c7e-67b5-93f2-5ce343a0ff1a","207ea814-2c7e-67b5-93f2-5ce343a0ff1d"],"type":"CommerceAddToCartWrapper","data":{"tag":"div","commerce":{"type":"add-to-cart-wrapper","quantityEnabled":true}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff11","tag":"form","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff12","e81d2d67-2748-f06f-ed82-01b871f7e364","207ea814-2c7e-67b5-93f2-5ce343a0ff16","207ea814-2c7e-67b5-93f2-5ce343a0ff18","207ea814-2c7e-67b5-93f2-5ce343a0ff19"],"type":"CommerceAddToCartForm","data":{"attr":{"data-node-type":"commerce-add-to-cart-form"},"commerce":{"type":"add-to-cart-form"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff12","tag":"fieldset","classes":["0615e4be-cf72-2e3c-1622-bb2bb9e311cb"],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff13"],"type":"CommerceAddToCartOptionList","data":{"commerce":{"type":"add-to-cart-option-list"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff13","tag":"fieldset","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff14","207ea814-2c7e-67b5-93f2-5ce343a0ff15"],"type":"CommerceAddToCartOption","data":{"commerce":{"type":"add-to-cart-option"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff14","tag":"label","classes":[],"children":[],"type":"CommerceAddToCartOptionLabel"},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff15","tag":"select","classes":[],"children":[],"type":"CommerceAddToCartOptionSelect","data":{"editable":true,"defaultText":"Select"}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e364","tag":"div","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e365","e81d2d67-2748-f06f-ed82-01b871f7e367"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"option-select"}]}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e365","tag":"label","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e366"],"type":"FormBlockLabel","data":{"form":{"type":"label"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e366","text":true,"v":"Variation"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e367","tag":"div","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e368","e81d2d67-2748-f06f-ed82-01b871f7e36c"],"type":"DropdownWrapper","data":{"tag":"div","dropdown":{"hover":false,"delay":0,"type":"wrapper"},"attr":{"data-hover":"","data-delay":"0"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e368","tag":"div","classes":["6d153e70-835a-5e2a-82ee-69123fe5d3eb"],"children":["e81d2d67-2748-f06f-ed82-01b871f7e369","e81d2d67-2748-f06f-ed82-01b871f7e36a"],"type":"DropdownToggle","data":{"tag":"div","dropdown":{"type":"toggle"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e369","tag":"div","classes":["d0cac2c5-86b7-af72-6d9c-9dba33471d23"],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"dropdown-toggle"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36a","tag":"div","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e36b"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36b","text":true,"v":"Dropdown"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36c","tag":"nav","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e36d","e81d2d67-2748-f06f-ed82-01b871f7e36f","e81d2d67-2748-f06f-ed82-01b871f7e371"],"type":"DropdownList","data":{"tag":"nav","dropdown":{"type":"list"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36d","tag":"a","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e36e"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36e","text":true,"v":"Link 1"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36f","tag":"a","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e370"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e370","text":true,"v":"Link 2"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e371","tag":"a","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e372"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e372","text":true,"v":"Link 3"},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff16","tag":"label","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff17"],"type":"FormBlockLabel","data":{"attr":{"for":"quantity-4b15c280ea11e6a3b92d522c3eec69df"},"form":{"type":"label"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff17","text":true,"v":"Quantity"},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff18","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartQuantityInput","data":{"attr":{"id":"quantity-4b15c280ea11e6a3b92d522c3eec69df","name":"commerce-add-to-cart-quantity-input","type":"number","min":"1","value":"1"},"commerce":{"type":"add-to-cart-quantity-input"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff19","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartButton","data":{"attr":{"type":"submit"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1a","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff1b"],"type":"CommerceAddToCartOutOfStock","data":{"tag":"div","commerce":{"type":"add-to-cart-out-of-stock"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1b","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff1c"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1c","text":true,"v":"This product is out of stock."},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1d","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff1e"],"type":"CommerceAddToCartError","data":{"tag":"div","commerce":{"type":"add-to-cart-error"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1e","tag":"div","classes":[],"children":[],"type":"CommerceAddToCartErrorMsg","data":{"tag":"label","text":true,"commerce":{"ADD_TO_CART_QUANTITY_ERROR":"Product is not available in this quantity.","ADD_TO_CART_GENERAL_ERROR":"Something went wrong when adding this item to the cart.","type":"add-to-cart-error-msg"}}}],"styles":[{"_id":"0615e4be-cf72-2e3c-1622-bb2bb9e311cb","fake":false,"type":"class","name":"Option List 3","namespace":"","comb":"","styleLess":"display: none;","variants":{},"children":[],"selector":null},{"_id":"6d153e70-835a-5e2a-82ee-69123fe5d3eb","fake":false,"type":"class","name":"Dropdown Toggle","namespace":"","comb":"","styleLess":"padding-top: 10px; padding-right: 40px; padding-bottom: 10px; padding-left: 10px; border-top-style: solid; border-top-width: 1px; border-top-color: black; border-right-style: solid; border-right-width: 1px; border-right-color: black; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: black; border-left-style: solid; border-left-width: 1px; border-left-color: black;","variants":{},"children":[],"selector":null},{"_id":"d0cac2c5-86b7-af72-6d9c-9dba33471d23","fake":false,"type":"class","name":"Icon 8","namespace":"","comb":"","styleLess":"margin-right: 10px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":2,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>