---
description: ''
sidebar: 'shopify'
prev: '/shopify/shop/collection-item-elements/'
next: '/shopify/blog/product-page-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Product Page

This is the page where a product of your shop is listed.
This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="product" />

or creating an alternative template using:

<Attribute name="page" value="product-template" />

Inside this page you can add all of the following elements:

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

#### Product Images

In Shopify you can associate multiple images to your product and you can show them on your theme just using the attribute:

<Attribute name="item" value="product-images" />

This attribute is very very flexible and can be used in a lot of ways.

You can add it to:

* **A Slider**: in this case each image will create a new slide;

* **A Div**: in this case for each image of the product the div will be duplicated and will get as background image the respective image;

* **An Image**: in this case for each image of the product the image will be duplicated and will get as image the right image;

* **A Lightbox Link**: in this case the image in the lightbox link will not be modified, but the lightbox will be linked to all the product images;

* **A Lightbox Link that is placed inside a Collection List Wrapper**: in this case you will have multiple images with lightboxes that are linked together;


#### Product Gallery

Product gallery is simply an example combination of Product Images, as you have read before, Product Images attribute is pretty flexible and can be used on different type of elements with different behaviours. It is composed by a slider that has attribute:

<Attribute name="item" value="product-images" />

Inside the slide there is a lightbox link without attributes ("Remember to link the lightbox to a media to make it work). 
And below the slider there is an image with attribute:

<Attribute name="item" value="product-images" />

That will act as thumbnails to change the slide


<CopyElement title="Product Gallery">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f97aa843-b803-7904-43ab-22d52c6e5d73","tag":"div","classes":["ad017523-1680-dd21-8ea3-d5483bcf6b3b"],"children":["8327eb73-c4f2-ab64-e5d5-35a3495472ad","06fb7ee2-06a7-c2dd-7758-615e65b9a556"],"type":"Block","data":{"tag":"div"}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472ad","tag":"div","classes":[],"children":["8327eb73-c4f2-ab64-e5d5-35a3495472ae","8327eb73-c4f2-ab64-e5d5-35a3495472b1","8327eb73-c4f2-ab64-e5d5-35a3495472b3","8327eb73-c4f2-ab64-e5d5-35a3495472b5"],"type":"SliderWrapper","data":{"slider":{"navSpacing":3,"autoplay":false,"delay":4000,"iconArrows":true,"animation":"slide","easing":"ease","navRound":true,"disableSwipe":false,"duration":500,"infinite":true,"autoMax":0,"type":"wrapper"},"attr":{"data-animation":"slide","data-duration":"500","data-infinite":"1"},"xattr":[{"name":"item","value":"product-images"}]}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472ae","tag":"div","classes":[],"children":["8327eb73-c4f2-ab64-e5d5-35a3495472af"],"type":"SliderMask","data":{"slider":{"type":"slides"}}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472af","tag":"div","classes":[],"children":["bf2e33c3-dee6-99f5-42af-99a6b1dfcc47"],"type":"SliderSlide","data":{"tag":"div","slider":{"type":"slide"}}},{"_id":"bf2e33c3-dee6-99f5-42af-99a6b1dfcc47","tag":"a","classes":["8ea58619-87af-075c-db21-e01fa233cc66"],"children":["eee17404-39e3-1128-812f-417a782f2b11"],"type":"LightboxWrapper","data":{"lightbox":{"type":"wrapper"},"block":"inline","attr":{"href":"#"},"json":{"items":[{"cdnUrl":"https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg","width":150,"height":150,"fileName":"image-placeholder.svg","origFileName":"image-placeholder.svg","url":"https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg","_id":"example_img","type":"image","fileSize":2063}]}}},{"_id":"eee17404-39e3-1128-812f-417a782f2b11","tag":"img","classes":["6a5ce829-3eb9-d992-30b7-7f7e727d2673"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5e9095858cdf0977d95c4eab/5e97136b0676485376693765_zoom-in.svg"},"img":{"id":"5e97136b0676485376693765"}}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472b1","tag":"div","classes":[],"children":["8327eb73-c4f2-ab64-e5d5-35a3495472b2"],"type":"SliderArrow","data":{"slider":{"type":"arrow","dir":"left"}}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472b2","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"slider-left"}}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472b3","tag":"div","classes":["f639bdca-946e-8206-bbaa-e4d7e86124df"],"children":["8327eb73-c4f2-ab64-e5d5-35a3495472b4"],"type":"SliderArrow","data":{"slider":{"type":"arrow","dir":"right"}}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472b4","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"slider-right"}}},{"_id":"8327eb73-c4f2-ab64-e5d5-35a3495472b5","tag":"div","classes":[],"children":[],"type":"SliderNav","data":{"slider":{"type":"nav"}}},{"_id":"06fb7ee2-06a7-c2dd-7758-615e65b9a556","tag":"div","classes":["38ec5b99-748c-af03-bc57-57245327df4c"],"children":["4ca944ab-e509-2edf-5dce-f70bcb4a201c"],"type":"Block","data":{"tag":"div"}},{"_id":"4ca944ab-e509-2edf-5dce-f70bcb4a201c","tag":"img","classes":["439704be-fb4c-472b-c3d2-01a5147f6192","3976b2d2-0054-3a12-4fef-1391e1b45081"],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"product-images"}]}}],"styles":[{"_id":"ad017523-1680-dd21-8ea3-d5483bcf6b3b","fake":false,"type":"class","name":"Product Gallery","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"8ea58619-87af-075c-db21-e01fa233cc66","fake":false,"type":"class","name":"Lightbox Link","namespace":"","comb":"","styleLess":"position: absolute; left: 50%; top: 50%; right: auto; bottom: auto; z-index: 999; transform: translate(-50%, -50%);","variants":{},"children":[],"selector":null},{"_id":"6a5ce829-3eb9-d992-30b7-7f7e727d2673","fake":false,"type":"class","name":"trigger","namespace":"","comb":"","styleLess":"position: static; width: 40px; padding-top: 11px; padding-right: 8px; padding-bottom: 11px; padding-left: 8px; object-fit: cover;","variants":{},"children":[],"selector":null},{"_id":"f639bdca-946e-8206-bbaa-e4d7e86124df","fake":false,"type":"class","name":"Right Arrow","namespace":"","comb":"","styleLess":"position: absolute; z-index: 1;","variants":{},"children":[],"selector":null},{"_id":"38ec5b99-748c-af03-bc57-57245327df4c","fake":false,"type":"class","name":"Thumbnails","namespace":"","comb":"","styleLess":"display: flex; flex-wrap: wrap;","variants":{},"children":[],"selector":null},{"_id":"439704be-fb4c-472b-c3d2-01a5147f6192","fake":false,"type":"class","name":"Image","namespace":"","comb":"","styleLess":"width: 100px; height: 100px; opacity: 0.8; object-fit: cover;","variants":{},"children":["3976b2d2-0054-3a12-4fef-1391e1b45081"],"selector":null},{"_id":"3976b2d2-0054-3a12-4fef-1391e1b45081","fake":false,"type":"class","name":"active","namespace":"","comb":"&","styleLess":"opacity: 1;","variants":{},"children":[],"selector":null}],"assets":[{"cdnUrl":"https://uploads-ssl.webflow.com/5e9095858cdf0977d95c4eab/5e97136b0676485376693765_zoom-in.svg","siteId":"5e9095858cdf0977d95c4eab","width":150,"height":150,"fileName":"zoom-in.svg","createdOn":"2020-04-15T14:00:11.696Z","origFileName":"zoom-in.svg","fileHash":"021f90048f2e52dfdef165b165accb70","mimeType":"image/svg+xml","s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5e9095858cdf0977d95c4eab/5e97136b0676485376693765_zoom-in.svg","_id":"5e97136b0676485376693765","markedAsDeleted":false,"fileSize":1422}],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}
</CopyElement>

## Add To Cart

The Option List that you see in Webflow add to cart is not exported in html so basically you can't use it. You have to select one of the following mode to create your add to cart

#### Add to Cart with Variation Swatches

You don't need anymore to use apps to create variation swatches, just add the default Add to cart of Webflow and inside the *default state* add the following elements:

* A text element with attribute:

<Attribute name="item" value="option-title" />

* A Div element with attribute:

<Attribute name="item" value="option-wrapper" />

Inside this div add 2 label with respectively the attributes:

<Attribute name="item" value="color" />

and

<Attribute name="item" value="option" />

On both this label you can stylize using the combo classes **selected** and **soldout**, to create very modern looking selectors!

*Note that in order to make the color works, the name of the variation must be a valid css color name*

<CopyElement title="Add to Cart with Variation Swatches">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"20adbcb9-693f-ee90-1456-97d25e24c218","tag":"div","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c219","20adbcb9-693f-ee90-1456-97d25e24c222","20adbcb9-693f-ee90-1456-97d25e24c225"],"type":"CommerceAddToCartWrapper","data":{"tag":"div","commerce":{"type":"add-to-cart-wrapper","quantityEnabled":true}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c219","tag":"form","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c21a","d2db1b9b-844f-c33b-254e-a278d2a90772","664ecbe7-88b1-108f-86c3-9d1ef9e477c3","20adbcb9-693f-ee90-1456-97d25e24c21e","20adbcb9-693f-ee90-1456-97d25e24c220","20adbcb9-693f-ee90-1456-97d25e24c221"],"type":"CommerceAddToCartForm","data":{"attr":{"data-node-type":"commerce-add-to-cart-form"},"commerce":{"type":"add-to-cart-form"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c21a","tag":"fieldset","classes":["59739efc-e669-fbb0-a57e-e52692c6f16c"],"children":["20adbcb9-693f-ee90-1456-97d25e24c21b"],"type":"CommerceAddToCartOptionList","data":{"commerce":{"type":"add-to-cart-option-list"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c21b","tag":"fieldset","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c21c","20adbcb9-693f-ee90-1456-97d25e24c21d"],"type":"CommerceAddToCartOption","data":{"commerce":{"type":"add-to-cart-option"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c21c","tag":"label","classes":[],"children":[],"type":"CommerceAddToCartOptionLabel"},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c21d","tag":"select","classes":[],"children":[],"type":"CommerceAddToCartOptionSelect","data":{"editable":true,"defaultText":"Select"}},{"_id":"d2db1b9b-844f-c33b-254e-a278d2a90772","tag":"div","classes":[],"children":["d2db1b9b-844f-c33b-254e-a278d2a90773"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"option-title"}]}},{"_id":"d2db1b9b-844f-c33b-254e-a278d2a90773","text":true,"v":"Variant Title"},{"_id":"664ecbe7-88b1-108f-86c3-9d1ef9e477c3","tag":"div","classes":["05a3f434-8a26-924d-c36e-8dd169728544"],"children":["24215cd8-12ae-da03-5ff9-2952e95e48de","06e64a99-5a65-0008-e5dc-cbc18734153e"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"option-wrapper"}]}},{"_id":"24215cd8-12ae-da03-5ff9-2952e95e48de","tag":"label","classes":["a92a61d0-e352-e012-fc62-9fe60277fd2d"],"children":["24215cd8-12ae-da03-5ff9-2952e95e48df"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"xattr":[{"name":"item","value":"option"}]}},{"_id":"24215cd8-12ae-da03-5ff9-2952e95e48df","text":true,"v":"M"},{"_id":"06e64a99-5a65-0008-e5dc-cbc18734153e","tag":"label","classes":["7b82c77b-da11-96e4-2be2-b0eed52303d9"],"children":[],"type":"FormBlockLabel","data":{"form":{"type":"label"},"xattr":[{"name":"item","value":"color"}]}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c21e","tag":"label","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c21f"],"type":"FormBlockLabel","data":{"attr":{"for":"quantity-4b15c280ea11e6a3b92d522c3eec69df"},"form":{"type":"label"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c21f","text":true,"v":"Quantity"},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c220","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartQuantityInput","data":{"attr":{"id":"quantity-4b15c280ea11e6a3b92d522c3eec69df","name":"commerce-add-to-cart-quantity-input","type":"number","min":"1","value":"1"},"commerce":{"type":"add-to-cart-quantity-input"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c221","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartButton","data":{"attr":{"type":"submit"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c222","tag":"div","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c223"],"type":"CommerceAddToCartOutOfStock","data":{"tag":"div","commerce":{"type":"add-to-cart-out-of-stock"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c223","tag":"div","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c224"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c224","text":true,"v":"This product is out of stock."},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c225","tag":"div","classes":[],"children":["20adbcb9-693f-ee90-1456-97d25e24c226"],"type":"CommerceAddToCartError","data":{"tag":"div","commerce":{"type":"add-to-cart-error"}}},{"_id":"20adbcb9-693f-ee90-1456-97d25e24c226","tag":"div","classes":[],"children":[],"type":"CommerceAddToCartErrorMsg","data":{"tag":"label","text":true,"commerce":{"ADD_TO_CART_QUANTITY_ERROR":"Product is not available in this quantity.","ADD_TO_CART_GENERAL_ERROR":"Something went wrong when adding this item to the cart.","type":"add-to-cart-error-msg"}}}],"styles":[{"_id":"59739efc-e669-fbb0-a57e-e52692c6f16c","fake":false,"type":"class","name":"Option List 2","namespace":"","comb":"","styleLess":"display: none;","variants":{},"children":[],"selector":null},{"_id":"05a3f434-8a26-924d-c36e-8dd169728544","fake":false,"type":"class","name":"Div Block 4","namespace":"","comb":"","styleLess":"display: flex; flex-wrap: wrap; align-items: center;","variants":{},"children":[],"selector":null},{"_id":"a92a61d0-e352-e012-fc62-9fe60277fd2d","fake":false,"type":"class","name":"Field Label","namespace":"","comb":"","styleLess":"margin-right: 6px; padding-top: 14px; padding-right: 14px; padding-bottom: 14px; padding-left: 14px;","variants":{},"children":[],"selector":null},{"_id":"7b82c77b-da11-96e4-2be2-b0eed52303d9","fake":false,"type":"class","name":"Color Label","namespace":"","comb":"","styleLess":"width: 20px; height: 20px; background-color: hsla(239, 60.00%, 31.33%, 1.00);","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":2,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

This add to cart will work with all products and if the product is variable it will add the first available variation to the cart.


#### Add to Cart with Dropdowns

The Option List that you see in Webflow add to cart is not exported in html so basically you can't use it. Inside the add to cart unfortunately you can't even add another select to recreate the missing html pieces. So the work around is to use "dropdowns" as fake selects. To make this work, add inside the *Default State* of the add to cart a div with the attribute:

<Attribute name="item" value="option-select" />

Inside this div add a *Label* and a *Dropdown*.

<CopyElement title="Add to Cart with Dropdowns">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff10","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff11","207ea814-2c7e-67b5-93f2-5ce343a0ff1a","207ea814-2c7e-67b5-93f2-5ce343a0ff1d"],"type":"CommerceAddToCartWrapper","data":{"tag":"div","commerce":{"type":"add-to-cart-wrapper","quantityEnabled":true}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff11","tag":"form","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff12","e81d2d67-2748-f06f-ed82-01b871f7e364","207ea814-2c7e-67b5-93f2-5ce343a0ff16","207ea814-2c7e-67b5-93f2-5ce343a0ff18","207ea814-2c7e-67b5-93f2-5ce343a0ff19"],"type":"CommerceAddToCartForm","data":{"attr":{"data-node-type":"commerce-add-to-cart-form"},"commerce":{"type":"add-to-cart-form"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff12","tag":"fieldset","classes":["0615e4be-cf72-2e3c-1622-bb2bb9e311cb"],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff13"],"type":"CommerceAddToCartOptionList","data":{"commerce":{"type":"add-to-cart-option-list"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff13","tag":"fieldset","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff14","207ea814-2c7e-67b5-93f2-5ce343a0ff15"],"type":"CommerceAddToCartOption","data":{"commerce":{"type":"add-to-cart-option"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff14","tag":"label","classes":[],"children":[],"type":"CommerceAddToCartOptionLabel"},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff15","tag":"select","classes":[],"children":[],"type":"CommerceAddToCartOptionSelect","data":{"editable":true,"defaultText":"Select"}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e364","tag":"div","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e365","e81d2d67-2748-f06f-ed82-01b871f7e367"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"option-select"}]}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e365","tag":"label","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e366"],"type":"FormBlockLabel","data":{"form":{"type":"label"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e366","text":true,"v":"Variation"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e367","tag":"div","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e368","e81d2d67-2748-f06f-ed82-01b871f7e36c"],"type":"DropdownWrapper","data":{"tag":"div","dropdown":{"hover":false,"delay":0,"type":"wrapper"},"attr":{"data-hover":"","data-delay":"0"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e368","tag":"div","classes":["6d153e70-835a-5e2a-82ee-69123fe5d3eb"],"children":["e81d2d67-2748-f06f-ed82-01b871f7e369","e81d2d67-2748-f06f-ed82-01b871f7e36a"],"type":"DropdownToggle","data":{"tag":"div","dropdown":{"type":"toggle"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e369","tag":"div","classes":["d0cac2c5-86b7-af72-6d9c-9dba33471d23"],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"dropdown-toggle"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36a","tag":"div","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e36b"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36b","text":true,"v":"Dropdown"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36c","tag":"nav","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e36d","e81d2d67-2748-f06f-ed82-01b871f7e36f","e81d2d67-2748-f06f-ed82-01b871f7e371"],"type":"DropdownList","data":{"tag":"nav","dropdown":{"type":"list"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36d","tag":"a","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e36e"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36e","text":true,"v":"Link 1"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e36f","tag":"a","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e370"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e370","text":true,"v":"Link 2"},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e371","tag":"a","classes":[],"children":["e81d2d67-2748-f06f-ed82-01b871f7e372"],"type":"DropdownLink","data":{"dropdown":{"type":"link"},"attr":{"href":"#"}}},{"_id":"e81d2d67-2748-f06f-ed82-01b871f7e372","text":true,"v":"Link 3"},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff16","tag":"label","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff17"],"type":"FormBlockLabel","data":{"attr":{"for":"quantity-4b15c280ea11e6a3b92d522c3eec69df"},"form":{"type":"label"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff17","text":true,"v":"Quantity"},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff18","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartQuantityInput","data":{"attr":{"id":"quantity-4b15c280ea11e6a3b92d522c3eec69df","name":"commerce-add-to-cart-quantity-input","type":"number","min":"1","value":"1"},"commerce":{"type":"add-to-cart-quantity-input"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff19","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartButton","data":{"attr":{"type":"submit"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1a","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff1b"],"type":"CommerceAddToCartOutOfStock","data":{"tag":"div","commerce":{"type":"add-to-cart-out-of-stock"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1b","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff1c"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1c","text":true,"v":"This product is out of stock."},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1d","tag":"div","classes":[],"children":["207ea814-2c7e-67b5-93f2-5ce343a0ff1e"],"type":"CommerceAddToCartError","data":{"tag":"div","commerce":{"type":"add-to-cart-error"}}},{"_id":"207ea814-2c7e-67b5-93f2-5ce343a0ff1e","tag":"div","classes":[],"children":[],"type":"CommerceAddToCartErrorMsg","data":{"tag":"label","text":true,"commerce":{"ADD_TO_CART_QUANTITY_ERROR":"Product is not available in this quantity.","ADD_TO_CART_GENERAL_ERROR":"Something went wrong when adding this item to the cart.","type":"add-to-cart-error-msg"}}}],"styles":[{"_id":"0615e4be-cf72-2e3c-1622-bb2bb9e311cb","fake":false,"type":"class","name":"Option List 3","namespace":"","comb":"","styleLess":"display: none;","variants":{},"children":[],"selector":null},{"_id":"6d153e70-835a-5e2a-82ee-69123fe5d3eb","fake":false,"type":"class","name":"Dropdown Toggle","namespace":"","comb":"","styleLess":"padding-top: 10px; padding-right: 40px; padding-bottom: 10px; padding-left: 10px; border-top-style: solid; border-top-width: 1px; border-top-color: black; border-right-style: solid; border-right-width: 1px; border-right-color: black; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: black; border-left-style: solid; border-left-width: 1px; border-left-color: black;","variants":{},"children":[],"selector":null},{"_id":"d0cac2c5-86b7-af72-6d9c-9dba33471d23","fake":false,"type":"class","name":"Icon 8","namespace":"","comb":"","styleLess":"margin-right: 10px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":2,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Form Modifier 

For some third party plugins you have to modify the output of the Adapter code for the Add to Cart, you can add an optional attribute on the add to cart button:

<DynamicAttribute name="form-modifier" value="your code" />

The adapter usually just wraps the add to cart button inside the code:

```liquid
{% form 'product', product %}
```

if you add this attribute instead, "your code" will be outputted like this:

```liquid
{% form 'product', product, your code %}
```

So if you use an app like ReCharge, that needs to modify this form you can add the attribute:

<Attribute name="form-modifier" value="data-productid: product.id, class: productClasses" />

to obtain as code:
```liquid
{% form 'product', product, data-productid: product.id, class: productClasses %}
```


## Recommended

The product recommendations are based on products that are commonly purchased together or products in related collections. Product recommendations become more accurate over time as more order and product information becomes available.

The algorithm that identifies recommended products is based on data about products that were purchased together and products with similar descriptions. It uses this data to provide a mix of those related products as recommendations for a given product.

In cases where purchase or product description data aren't available for a given product, products from a related collection are shown. The algorithm uses the collection in the URL from which the request to the API endpoint originated, and pulls other products from that collection. If the product doesn't have a collection URL, then the recommendation algorithm finds collections that include the product and pulls other products from those instead (excluding collections with handles “all” and “frontpage”).

#### Requirements and limitations
The types of product recommendations that appear are determined by your online store and your Shopify plan:

* Purchase history and product descriptions: Plus plan and having <7000 products published in your Online Store, with an English storefront
* Purchase history only: Plus plan and having <7000 products published in your Online Store, with a non-English storefront
* Purchase history only: Non-Plus plan and having <7000 products published in your Online Store
* Collections: Any plan with >7000 products published in your Online Store
* You can't customize the recommendation algorithm to exclude specific products (but you can write custom JavaScript code where the recommendations are being displayed to exclude specific products).

* The recommendation algorithm doesn't use orders that have been imported from another store or ecommerce platform to generate product recommendations.

* Products that are out of stock, set to a price of 0, or gift cards aren't included in recommendations.


For these requirements data are loaded by Javascript and not served by shopify, so you can't use a lot of items inside them but only the ones listed below!

Insert a Collection List Wrapper and add the attribute:

<Attribute name="shop" value="recommended" />

Inside the collection list item you can add the following elements: 

<CopyElement title="Recommended">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c31769","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176a","4f9c8f79-c04f-e1b9-daf6-ed0967c3176c"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"shop","value":"recommended"}]}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176a","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176b"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176b","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176c","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176d"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176d","tag":"div","classes":[],"children":["4f9c8f79-c04f-e1b9-daf6-ed0967c3176e"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"4f9c8f79-c04f-e1b9-daf6-ed0967c3176e","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

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

#### Link

The link is simply the url to the current product page. Just add the attribute on a link element of any type:

<Attribute name="item" value="link" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"link"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Price

This is the product price, can be inserted on any text element using the attribute:

<Attribute name="item" value="price" />

<CopyElement title="Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"6c7b8309-c246-fa03-52e4-120f34865d42","tag":"div","classes":[],"children":["6c7b8309-c246-fa03-52e4-120f34865d43"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"price"}]}},{"_id":"6c7b8309-c246-fa03-52e4-120f34865d43","text":true,"v":"$30"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Vendor

This is the vendor name and can be added on any text element using the attribute:

<Attribute name="item" value="vendor" />

<CopyElement title="Vendor">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"vendor"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Vendor"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Type

This is the type of the product and can be added on any text element using the attribute:

<Attribute name="item" value="type" />

<CopyElement title="Type">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"type"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Type"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>
