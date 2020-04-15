---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/woocommerce/archive-elements/'
next: '/wordpress/woocommerce/collection-item-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Collection Item Elements

These are all the elements that you can add inside the collection item of a WooCommerce Collection List Wrapper.

#### Title

The Title of the product can be added either to text elements or to link elements, if you use the latter it will also automatically link to the product page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c6b4f067-3af4-1330-4c25-9bce97ffa6d2","tag":"h3","classes":["59d95faf-ed7c-aa9e-a200-fc9ed1c49f21"],"children":["1b709ebe-fcec-5b0d-b42a-65daac3fc479"],"type":"Heading","data":{"tag":"h3"}},{"_id":"1b709ebe-fcec-5b0d-b42a-65daac3fc479","text":true,"v":"Post Title"}],"styles":[{"_id":"59d95faf-ed7c-aa9e-a200-fc9ed1c49f21","fake":false,"type":"class","name":"Post Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to a product, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the product page.

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

The permalink is simply the url to the current product page. Just add the attribute on a link element of any type:

<Attribute name="item" value="permalink" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Short Description

The short description of the product (just as a reminder, the short description is a short summary of a product, can be added on any text element just adding the attribute:

<Attribute name="item" value="short-description" />

<CopyElement title="Short Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"short-description"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Add to Cart

For add to cart you don't have to add any attribute you can just use the Add to cart of Webflow. However keep in mind that you will not be able to select a variable product from a Collection Item, the variations can be added to cart only on the Single Product Page.

#### Price

Is the price of the product, you can add it to text elements using the attribute:

<Attribute name="item" value="price" />

<CopyElement title="Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"price"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"99$"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Price","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Regular Price

If the product is on sale, the regular price is the full price, you can add it to text elements using the attribute:

<Attribute name="item" value="regular-price" />

<CopyElement title="Regular Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a7dbac84-ed3b-8825-9264-3a82d2dd4c80","tag":"div","classes":["ce0b86fb-860b-9515-9b4c-f0318a2f57a4"],"children":["a7dbac84-ed3b-8825-9264-3a82d2dd4c81"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"regular price"}]}},{"_id":"a7dbac84-ed3b-8825-9264-3a82d2dd4c81","text":true,"v":"99$"}],"styles":[{"_id":"ce0b86fb-860b-9515-9b4c-f0318a2f57a4","fake":false,"type":"class","name":"Regular Price","namespace":"","comb":"","styleLess":"text-decoration: line-through;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Variations

This is just a visual helper to make your client understand that the product has variations that can be selected inside the single page. To create this add a div with attribute:

<Attribute name="item" value="variations" />

Inside this div add another div, this one will be the placeholder for the variation value, and will be populated with a background image (if you set images in WordPress following the path: Products > Attributes) or a text.

This structure is pretty dynamic, as an example if you have a product with 2 variation properties like: Color and Size, with respective values of (Red, Blue) and (M, L, XL)

the Div where you have the attribute will get duplicated 2 times once for Color and once for Size, while the div inside the one with the attribute will get duplicated 2 times for Color and 3 times for Size, creating a structure that should be like:

<div align="center">
    <g-image src="~/assets/images/variations.png"/>
</div>

so keep it in mind when you create the design, use flex or grid thinking about this structure.

<CopyElement title="Variations">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"b2b471be-f1ea-cfaa-c785-6b6478369e9a","tag":"div","classes":["076c26e8-502b-444a-7182-c2df76ff6bc8"],"children":["e88ff0a5-1e92-7be4-03f9-6cc06ff171a0"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"variations"}]}},{"_id":"e88ff0a5-1e92-7be4-03f9-6cc06ff171a0","tag":"div","classes":["5646cede-5c39-8aa3-51f4-c9379aca555c"],"children":["5ec761bb-fc71-789e-49a5-2a081bc28d87"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5ec761bb-fc71-789e-49a5-2a081bc28d87","text":true,"v":"Red"}],"styles":[{"_id":"076c26e8-502b-444a-7182-c2df76ff6bc8","fake":false,"type":"class","name":"Variations","namespace":"","comb":"","styleLess":"display: flex; margin-bottom: 10px; flex-wrap: wrap;","variants":{},"children":[],"selector":null},{"_id":"5646cede-5c39-8aa3-51f4-c9379aca555c","fake":false,"type":"class","name":"Variation Value","namespace":"","comb":"","styleLess":"margin-right: 5px; padding-top: 8px; padding-right: 8px; padding-bottom: 8px; padding-left: 8px; background-image: @img_example_bg; background-position: 0px 0px; background-size: cover;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Rating

Rating is an integer number that goes from 0 to 5. You can use the attribute: 

<Attribute name="item" value="rating" /> 

on any element you want, it will be repeated automatically based on the rating. (e.g if you put this attribute on a star image, and you have a rating of 4 for that product you will get 4 star images ⭐⭐⭐⭐)

<CopyElement name="Rating">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"9347fea9-8a6c-b60f-d145-436ebda13825","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5e8ef2fc1014dc82f241a968/5e8ef2fd9112fdaa5efd28d2_star.main.svg","width":50},"xattr":[{"name":"item","value":"rating"}],"img":{"id":"5e8ef2fd9112fdaa5efd28d2"}}}],"styles":[],"assets":[{"cdnUrl":"https://uploads-ssl.webflow.com/5e8ef2fc1014dc82f241a968/5e8ef2fd9112fdaa5efd28d2_star.main.svg","siteId":"5e8ef2fc1014dc82f241a968","width":150,"isHD":false,"height":150,"fileName":"5e8ef2fd9112fdaa5efd28d2_star.main.svg","createdOn":"2019-07-11T14:03:04.219Z","origFileName":"star.main.svg","fileHash":"a40a63128a6a88d0a270049c10384432","variants":[],"mimeType":"image/svg+xml","s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5e8ef2fc1014dc82f241a968/5e8ef2fd9112fdaa5efd28d2_star.main.svg","thumbUrl":"https://uploads-ssl.webflow.com/5e8ef2fc1014dc82f241a968/5e8ef2fd9112fdaa5efd28d2_star.main.svg","_id":"5e8ef2fd9112fdaa5efd28d2","updatedOn":"2020-04-09T10:03:44.270Z","fileSize":1034}],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Total Sales

Is the number of sales made for that product, you can use it on text elements using the attribute:

<Attribute name="item" value="total-sales" />

<CopyElement title="Reviews Count">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"21c5102a-564a-556f-3cb2-326545649d4f","tag":"div","classes":[],"children":["21c5102a-564a-556f-3cb2-326545649d50"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"total-sales"}]}},{"_id":"21c5102a-564a-556f-3cb2-326545649d50","text":true,"v":"2154"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Reviews Count

Is the number of reviews made for that product, you can use it on text elements using the attribute: 

<Attribute name="item" value="review-count" />

<CopyElement title="Reviews Count">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"21c5102a-564a-556f-3cb2-326545649d4f","tag":"div","classes":[],"children":["21c5102a-564a-556f-3cb2-326545649d50"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"review-count"}]}},{"_id":"21c5102a-564a-556f-3cb2-326545649d50","text":true,"v":"2154"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured

You can add the following attribute on every element you want, and it will be showed only the product is set as featured

<Attribute name="item" value="featured" />

#### On Sale

You can add the following attribute on every element you want, and it will be showed only the product is on Sale

<Attribute name="item" value="on-sale" />


#### SKU

The sku is an identification of certain product you can add it to texts, using the attribute:

<Attribute name="item" value="sku" />

<CopyElement title="SKU">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"sku"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"sku"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"SKU","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>



#### Date & Time

To add an indicator about the date or the time of pubblication of the product, you can add respectively the following attributes:

<Attribute name="item" value="date" />

<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

---

<Attribute name="item" value="time" />

<CopyElement title="Time">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"1afa500a-3a40-a6c2-4c44-9bdac57329ea","tag":"div","classes":["521f6863-124c-770a-28d3-fdd1c58bf1de"],"children":["1afa500a-3a40-a6c2-4c44-9bdac57329eb"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"time"}]}},{"_id":"1afa500a-3a40-a6c2-4c44-9bdac57329eb","text":true,"v":"12:05"}],"styles":[{"_id":"521f6863-124c-770a-28d3-fdd1c58bf1de","fake":false,"type":"class","name":"Time","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

The date and time format can be changed globally from WordPress Settings > General, respectively in sections named *Date format* and *Time Format*. However if you need to change the format locally for your current design needs you can add the optional attribute:

<DynamicAttribute name="format" value="date/time format" />

For the date/time format, WordPress uses the native PHP function, this the [complete format table](https://www.php.net/manual/en/function.date.php).

As Example if you set the attribute:

<Attribute name="format" value="F j, Y, g:i a" />

The date will be in the format: *March 10, 2020, 5:16 pm*

#### To/From Sale Date

If you have scheduled a sale in the feature you can add some visual indicators for the starting and ending date of the sale using respectively:

<Attribute name="item" value="from-sale-date" />

and

<Attribute name="item" value="to-sale-date" />

The date and time format can be changed globally from WordPress Settings > General, respectively in sections named *Date format* and *Time Format*. However if you need to change the format locally for your current design needs you can add the optional attribute:

<DynamicAttribute name="format" value="date/time format" />

For the date/time format, WordPress uses the native PHP function, this the [complete format table](https://www.php.net/manual/en/function.date.php).

As Example if you set the attribute:

<Attribute name="format" value="F j, Y, g:i a" />

The date will be in the format: *March 10, 2020, 5:16 pm*

#### Main Category

Thanks to the Udesly plugin, you can select a Main Category attached to each product, you can create with these feature a simple *tag* button that links to the main category of the product, just add on a link the following attribute:

<Attribute name="item" value="main-category" />

Don't forget to set up the main category in each product, it's not automatic.

<CopyElement title="Main Category">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"2f499506-050a-ec28-85aa-c217ab8dae01","tag":"a","classes":[],"children":["2f499506-050a-ec28-85aa-c217ab8dae02"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"main-category"}]}},{"_id":"2f499506-050a-ec28-85aa-c217ab8dae02","text":true,"v":"Main Category"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Product Dimensions

Product can have different dimensions associated to it, they can all be added on text elements, using respectively the attributes:

* Length

<Attribute name="item" value="length" />

* Width

<Attribute name="item" value="width" />

* Height

<Attribute name="item" value="height" />

* Weight

<Attribute name="item" value="weight" />

#### Categories

This is the list of categories of the product add it on a link element, this element will be repeated once for every category that is attached to the product. To use it use the attribute:

<Attribute name="item" value="categories" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of categories" />

For example to show only first 3 categories add:

<Attribute name="limit" value="3" />

<CopyElement title="Post Categories">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047a","tag":"a","classes":[],"children":["0520c69d-33a7-eb90-7817-ab11b0df047b"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"categories"}]}},{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047b","text":true,"v":"Category Link"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Tags

This is the list of tags of the product add it on a link element, this element will be repeated once for every category that is attached to the product. To use it use the attribute:

<Attribute name="item" value="tags" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of tags" />

For example to show only first 3 tags add:

<Attribute name="limit" value="3" />

<CopyElement title="Post Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047a","tag":"a","classes":[],"children":["0520c69d-33a7-eb90-7817-ab11b0df047b"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"tags"}]}},{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047b","text":true,"v":"Tag Link"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Author

Every product has one Author attached to it, an author has a lot of data that can be customized, let's see it in action! You will find the elements dived on the element they can be used on: *Images*, *Texts* and *Links*.

##### Author Images

Actually the only Author data that can be used on images is the author Avatar, WordPress uses a system called Gravatar for its avatars, your authors can change the profile image creating an account on Gravatar using the same email. To show it, use an image or a div for background image with the attribute:

* Avatar

<Attribute name="item" value="avatar" />

<CopyElement title="Avatar">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"68542af0-35a3-cc2d-538b-6d7efe7b1490","tag":"img","classes":["c89459eb-0ec0-7faa-2818-9558933ee0e9"],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"avatar"}]}}],"styles":[{"_id":"c89459eb-0ec0-7faa-2818-9558933ee0e9","fake":false,"type":"class","name":"Avatar","namespace":"","comb":"","styleLess":"display: block; width: 50px; height: 50px; border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; object-fit: cover;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

##### Author Texts

There are a lot of datas that can be used on text elements, they are pretty autoexplicative, just add the attributes you want to use on text elements:

* Display Name 
<Attribute name="item" value="author-display-name" />
<CopyElement title="Display Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-display-name"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Author display name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Nickname 
<Attribute name="item" value="author-nickname" />
<CopyElement title="Nickame">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-nickname"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Author nickname"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* First Name 
<Attribute name="item" value="author-first-name" />
<CopyElement title="First Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-first-name"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"First Name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Last Name 
<Attribute name="item" value="author-last-name" />
<CopyElement title="Last Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-last-name"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Last Name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Description
<Attribute name="item" value="author-description" />
<CopyElement title="Author Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-description"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Author Description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

##### Author Links

With Links instead we can use the link to the author page (that is the archive page with all the products written by the author) and his social links. You can add social links in WordPress under the Users panel

* Email
<Attribute name="item" value="author-email" />
<CopyElement title="Author Email Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-email"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Email"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Facebook
<Attribute name="item" value="author-facebook" />
<CopyElement title="Author Facebook Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-facebook"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Facebook"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Linkedin
<Attribute name="item" value="author-linkedin" />
<CopyElement title="Author Linkedin Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-linkedin"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Linkedin"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Youtube
<Attribute name="item" value="author-youtube" />
<CopyElement title="Author Facebook Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-youtube"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Youtube"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Twitter
<Attribute name="item" value="author-twitter" />
<CopyElement title="Author Twitter Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-twitter"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Twitter"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Dribble
<Attribute name="item" value="author-dribble" />
<CopyElement title="Author dribble Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-dribble"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Dribble"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Instagram
<Attribute name="item" value="author-instagram" />
<CopyElement title="Author instagram Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-instagram"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Instagram"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Phone Number
<Attribute name="item" value="author-phone" />
<CopyElement title="Author phone Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-phone"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Phone"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>