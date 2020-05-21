---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/woocommerce/collection-item-elements/'
next: '/wordpress/woocommerce/cart-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Single Product Page Elements

These are all the elements that you can add inside a *Single Product Page*, a *Template for a Single Product Page* or a *Specific Product Page*. [How to set pages here](/wordpress/woocommerce/pages/#single-product-page).

#### Title

The Title of the product can be added either to text elements or to link elements, if you use the latter it will also automatically link to the product page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d26","tag":"h3","classes":["73541726-af92-77b8-c48e-ff52d4b69d3d"],"children":["416478a9-2aed-7bc6-f0b6-1b4e859b7d27"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d27","text":true,"v":"Post Title"}],"styles":[{"_id":"73541726-af92-77b8-c48e-ff52d4b69d3d","fake":false,"type":"class","name":"Post Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

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

#### Content

The content of your product can be set in WordPress backend. It can be added to any item, but for better styling is way better to add the following attribute on a RichText block:

<Attribute name="item" value="content" />

<CopyElement title="Product Content">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a6","tag":"div","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a7","3dbb0b79-5468-542b-7f6d-adaa1e3977a9","3dbb0b79-5468-542b-7f6d-adaa1e3977ab","3dbb0b79-5468-542b-7f6d-adaa1e3977ad","3dbb0b79-5468-542b-7f6d-adaa1e3977af","3dbb0b79-5468-542b-7f6d-adaa1e3977b1"],"type":"RichText","data":{"rich":true,"tag":"div","xattr":[{"name":"item","value":"content"}]}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a7","tag":"h2","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a8"],"type":"Heading","data":{"tag":"h2"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a8","text":true,"v":"What’s a Rich Text element?"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a9","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977aa"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977aa","text":true,"v":"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ab","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ac"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ac","text":true,"v":"Static and dynamic content editing"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ad","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ae"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ae","text":true,"v":"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977af","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b0"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b0","text":true,"v":"How to customize formatting for each rich text"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b1","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b2"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b2","text":true,"v":"Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Description

The description of the product can be added on RichText elements just adding the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a6","tag":"div","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a7","3dbb0b79-5468-542b-7f6d-adaa1e3977a9","3dbb0b79-5468-542b-7f6d-adaa1e3977ab","3dbb0b79-5468-542b-7f6d-adaa1e3977ad","3dbb0b79-5468-542b-7f6d-adaa1e3977af","3dbb0b79-5468-542b-7f6d-adaa1e3977b1"],"type":"RichText","data":{"rich":true,"tag":"div","xattr":[{"name":"item","value":"description"}]}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a7","tag":"h2","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a8"],"type":"Heading","data":{"tag":"h2"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a8","text":true,"v":"What’s a Rich Text element?"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a9","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977aa"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977aa","text":true,"v":"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ab","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ac"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ac","text":true,"v":"Static and dynamic content editing"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ad","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ae"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ae","text":true,"v":"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977af","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b0"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b0","text":true,"v":"How to customize formatting for each rich text"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b1","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b2"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b2","text":true,"v":"Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Keep in mind that if you use the Product Tabs, the product description will be automatically added in the first tab

#### Short Description

The short description of the product (just as a reminder, the short description is a short summary of a product, can be added on any text element just adding the attribute:

<Attribute name="item" value="short-description" />

<CopyElement title="Short Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"short-description"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Attributes

For each Product you can assign various attributes, like color, size, etc..

This element can be added on any text using the attribute:

<Attribute name="item" value="attributes" />

<CopyElement title="Product Attributes">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f55e2ef2-58e2-eaf5-6646-0176e81eff7d","tag":"div","classes":[],"children":["f55e2ef2-58e2-eaf5-6646-0176e81eff7e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"attributes"}]}},{"_id":"f55e2ef2-58e2-eaf5-6646-0176e81eff7e","text":true,"v":"Color: Red, Blue"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

This text will be duplicated for each attribute you have set and will show in each of them a text in the format **Attribute name: values** as an example: **Color: Red, Blue**

So as example if in your product you have set the attributes: Color, Size, Material, you will get 3 texts like:

**Color: red blue**

**Size: M, L**

**Material: Glass**

#### Attribute

For each Product you can assign various attributes, like color, size, etc..

This element can be added on any text using the attribute:

<Attribute name="item" value="attribute" />

<DynamicAttribute name="attribute" value="slug of the attribute" />

This text will be duplicated for each value of the attribute you have chosen, so for example if you set:

<Attribute name="item" value="attribute" />

<Attribute name="attribute" value="color" />

And in your product you have 3 values like Red, Blue, White you will get 3 texts.

On each text also the adapter adds an html attribute called data-attribute-slug with the slug of the value, so you can further customize it with custom css.

<CopyElement title="Product Attribute">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"ac8b34c0-03ea-1f3c-f30c-aae8f5dca6d2","tag":"div","classes":["4b6def9f-6611-9f23-1ba1-280e7dbae134"],"children":["bd61254a-bfb5-9f02-2854-419ce325e9fb"],"type":"Block","data":{"tag":"div"}},{"_id":"bd61254a-bfb5-9f02-2854-419ce325e9fb","tag":"div","classes":["9afcd333-8da3-1d6d-372a-d9f52b58b14e"],"children":["bd61254a-bfb5-9f02-2854-419ce325e9fc"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"attribute"},{"name":"attribute","value":"color"}]}},{"_id":"bd61254a-bfb5-9f02-2854-419ce325e9fc","text":true,"v":"Blue"}],"styles":[{"_id":"4b6def9f-6611-9f23-1ba1-280e7dbae134","fake":false,"type":"class","name":"Attribute Values","namespace":"","comb":"","styleLess":"display: flex;","variants":{},"children":[],"selector":null},{"_id":"9afcd333-8da3-1d6d-372a-d9f52b58b14e","fake":false,"type":"class","name":"Attribute Value","namespace":"","comb":"","styleLess":"padding-top: 8px; padding-right: 10px; padding-bottom: 8px; padding-left: 10px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

> Note that the attribute is inserted in the element with class Attribute Value, is wrapped inside a flex just for style! Don't forget to change the value color to your actual needs

#### Add To Cart

By default in WooCommerce there are 4 different types of products: "Simple", "Variable", "External" and "Grouped"
If you are pretty sure that your store will have only simple or external products, and for all other types of product you want to use the default add to cart of WooCommerce, you can just add the add to cart of webflow without any attribute (just enable quantity in the settings tab ⚙️ if is disabled).

If instead you don't want to use those ugly and old selects and want to use variation swatches you can follow this steps:

1. Add an Add to Cart Element;
2. Enable quantity if not enabled;
3. Set the option list to display none (it doesn't get exported by Webflow, so just hide it)
4. Add a div with the attribute:

<Attribute name="item" value="variations" />

5. Inside this div add a text with attribute:

<Attribute name="item" value="variation-title" />

6. In the same div add a label without attribute, this label will get either the background image if set in WordPress or the name of the variation

This structure is pretty dynamic, as an example if you have a product with 2 variation properties like: Color and Size, with respective values of (Red, Blue) and (M, L, XL)

the Div where you have the attribute will get duplicated 2 times once for Color and once for Size, while the div inside the one with the attribute will get duplicated 2 times for Color and 3 times for Size, creating a structure that should be like:

<div align="center">
    <g-image src="~/assets/images/single-variations.png"/>
</div>

so keep it in mind when you create the design, use flex or grid thinking about this structure.

Also the label can have 3 states that are controlled by combo classes. So you can further customize it,
by default the label will have no combo class, when the label gets clicked it will get the combo class "selected", while if the variation can not be bought it will have the combo class "disabled"

> ⚠️⚠️⚠️

> To get background images you have to create attributes for variation in Products > Attributes menu


<CopyElement title="Add To Cart">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518004","tag":"div","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518005","efb03a5e-6072-cf17-e5c6-79b3c2518014","efb03a5e-6072-cf17-e5c6-79b3c2518017"],"type":"CommerceAddToCartWrapper","data":{"tag":"div","commerce":{"type":"add-to-cart-wrapper","quantityEnabled":true}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518005","tag":"form","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518006","efb03a5e-6072-cf17-e5c6-79b3c251800c","efb03a5e-6072-cf17-e5c6-79b3c2518010","efb03a5e-6072-cf17-e5c6-79b3c2518012","efb03a5e-6072-cf17-e5c6-79b3c2518013"],"type":"CommerceAddToCartForm","data":{"attr":{"data-node-type":"commerce-add-to-cart-form"},"commerce":{"type":"add-to-cart-form"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518006","tag":"div","classes":["f86be37e-479a-2c06-be0f-13c4eae8fcd1"],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518007","efb03a5e-6072-cf17-e5c6-79b3c2518009"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"variations"}]}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518007","tag":"div","classes":["d277c223-a0f5-12ff-085c-d6ac4be45a44"],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518008"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"variation-title"}]}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518008","text":true,"v":"Color"},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518009","tag":"div","classes":["d360d82a-f3d4-e208-a6ed-7098d83846e5"],"children":["efb03a5e-6072-cf17-e5c6-79b3c251800a"],"type":"Block","data":{"tag":"div"}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c251800a","tag":"label","classes":["381cfd6c-589e-d35e-c8da-10c597352adc"],"children":["efb03a5e-6072-cf17-e5c6-79b3c251800b"],"type":"FormBlockLabel","data":{"form":{"type":"label"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c251800b","text":true,"v":"Red"},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c251800c","tag":"fieldset","classes":["ff9b668d-375f-4a3f-b656-6ff590eb5a5d"],"children":["efb03a5e-6072-cf17-e5c6-79b3c251800d"],"type":"CommerceAddToCartOptionList","data":{"commerce":{"type":"add-to-cart-option-list"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c251800d","tag":"fieldset","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c251800e","efb03a5e-6072-cf17-e5c6-79b3c251800f"],"type":"CommerceAddToCartOption","data":{"commerce":{"type":"add-to-cart-option"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c251800e","tag":"label","classes":[],"children":[],"type":"CommerceAddToCartOptionLabel"},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c251800f","tag":"select","classes":[],"children":[],"type":"CommerceAddToCartOptionSelect","data":{"editable":true,"defaultText":"Select"}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518010","tag":"label","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518011"],"type":"FormBlockLabel","data":{"attr":{"for":"quantity-a0d3a8ee457c52b8acd979399f36fe"},"form":{"type":"label"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518011","text":true,"v":"Quantity"},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518012","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartQuantityInput","data":{"attr":{"id":"quantity-a0d3a8ee457c52b8acd979399f36fe13","name":"commerce-add-to-cart-quantity-input","type":"number","min":"1","value":"1"},"commerce":{"type":"add-to-cart-quantity-input"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518013","tag":"input","classes":[],"children":[],"type":"CommerceAddToCartButton","data":{"attr":{"type":"submit","value":"Add To Cart"},"commerce":{"type":"add-to-cart-button"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518014","tag":"div","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518015"],"type":"CommerceAddToCartOutOfStock","data":{"tag":"div","commerce":{"type":"add-to-cart-out-of-stock"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518015","tag":"div","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518016"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518016","text":true,"v":"This product is out of stock."},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518017","tag":"div","classes":[],"children":["efb03a5e-6072-cf17-e5c6-79b3c2518018"],"type":"CommerceAddToCartError","data":{"tag":"div","commerce":{"type":"add-to-cart-error"}}},{"_id":"efb03a5e-6072-cf17-e5c6-79b3c2518018","tag":"div","classes":[],"children":[],"type":"CommerceAddToCartErrorMsg","data":{"tag":"label","text":true,"commerce":{"ADD_TO_CART_QUANTITY_ERROR":"Product is not available in this quantity.","ADD_TO_CART_GENERAL_ERROR":"Something went wrong when adding this item to the cart.","type":"add-to-cart-error-msg"}}}],"styles":[{"_id":"f86be37e-479a-2c06-be0f-13c4eae8fcd1","fake":false,"type":"class","name":"variations","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"d277c223-a0f5-12ff-085c-d6ac4be45a44","fake":false,"type":"class","name":"variation title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"d360d82a-f3d4-e208-a6ed-7098d83846e5","fake":false,"type":"class","name":"values","namespace":"","comb":"","styleLess":"display: flex; flex-wrap: wrap;","variants":{},"children":[],"selector":null},{"_id":"381cfd6c-589e-d35e-c8da-10c597352adc","fake":false,"type":"class","name":"variation","namespace":"","comb":"","styleLess":"display: flex; width: 60px; height: 50px; margin-top: 0px; margin-right: 5px; margin-bottom: 0px; margin-left: 0px; padding-top: 8px; padding-right: 8px; padding-bottom: 8px; padding-left: 8px; justify-content: center; align-items: center; background-image: @img_5e972ca368217f5030f46c03; background-size: cover; background-repeat: no-repeat; text-align: center;","variants":{},"children":["8332495c-25c8-7925-2c5e-5357f2b3b611"],"selector":null},{"_id":"ff9b668d-375f-4a3f-b656-6ff590eb5a5d","fake":false,"type":"class","name":"Option List","namespace":"","comb":"","styleLess":"display: none;","variants":{},"children":[],"selector":null}],"assets":[{"cdnUrl":"https://uploads-ssl.webflow.com/5e9095858cdf0977d95c4eab/5e972ca368217f5030f46c03_DAwB5.png","siteId":"5e9095858cdf0977d95c4eab","width":300,"height":300,"fileName":"DAwB5.png","createdOn":"2020-04-15T15:47:47.237Z","origFileName":"DAwB5.png","fileHash":"46d310fa27a54d012985a72c4413d5ee","mimeType":"image/png","s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5e9095858cdf0977d95c4eab/5e972ca368217f5030f46c03_DAwB5.png","thumbUrl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAHcUlEQVR4Xu2dyatdRRDGv88hJs7zPOAUcUBxiCIOiCgGVBD/AV259E9x4869Ci5EEDQxCkriImBMjNGgmTWJETUOMWo05pOSFmLy3rtnrFvn3DrweIvb3VX91e+e26e7ug+R12gVkLQIwFMAVpD8Za6OcrS9n/GOleA/AGAbyZ3zyZEAjBQUSVcDuBzAOpK/JQAjDfRc3ZJ0FoC7AGwi+e1CXc87wMjAkGQxXQbgL5LrJ3UvAZik0MA+l3Q/gN8BrCd5ZJL7CcAkhQb0uaQzADxL8sWqbicAVZUKXk7SJQDuJfl6HVcTgDpqBS0r6UoA1wJYu9CIP+cBggawjVvltn8ngK0kd9dtK+8AdRULVF7SYgC3AdgPYAfJw3XdSwDqKhaovKQHAXwPYDNJNXEtAWiiWoA6ks4D8BjJV9q4kwC0UW9Kdcs07zKSr7V1IQFoq6BzfUk3ArgIwAdNb/tHu5wAOAewjTlJ5wO4ozzu/dymrf/qJgBdqOjQhqSzAdwE4GsAe6pM81ZxKwGootKUy5THvXsAfEVyR5fuJABdqtlTW5KuAbCU5IquTSQAXSvacXuSbrbEDpIrO2763+YSgD5U7ahNSZbUsYTk6o6aPK6ZBKAvZVu2K+luS+oA8ElXA765XEoAWgaq6+olneshAHtLUkft+f06PiUAddTquaykJSWdazfJ7T2byzGAh8BVbUg6vUzy7CW5tWq9tuXyDtBWwQ7qSzq3TPJ8Q3JbB01WbiIBqCxVPwXL9O51ACz4u/qxMn+rCYC34kfZk7QUwPU20i/Tu43W9Nt0IQFoo16LupJs184ttqoH4FCfj3oLuZkAtAhik6qSTgJg6dvLSb7apI0u6yQAXaq5QFtlQceyeGzP3hURgm/uJgAOAJSBnv3e2zffVvQ2O5itZCIBqCRTs0KSTrS8PQB/ALCU7V0kDzVrrZ9aCUA/uqKkbtkmTRvk/Uryh55MtWo2AWgl3/GVJV0F4FG71QNYTdI2aoa9EoCOQlN26Nj2LJvUeY/kjx013WszCUBLeSWdCeAC25gJYCfJNS2bdK2eADSUuwTeHunsNI7FJN9p2NRUqyUANeUvhy/dCsCe6W1Pns3h196UWdNsb8UTgBrSSrodgAV/kz3SAfipyYbMGiZ7L5oAVJC4LNosB7ARwIcA/p7W3H0Fd2sVSQDmkatk59jgzvLx7Zi190kerKXuAAonAMcEqZy2YalZl1lGbjlnb98AYtnIxQSgyCbp0nLMiq3WmS5bSNo2rFFfMw+ApFMAPG4DOgDflaNV5z1Zc2w0zDQAkp4BcAKAt+x3nuSBsQV4Un9mEgBJNqK3jRcvADjYxT77SUJH/XwmACgjepuytb31Nnu3hqQ90s38NWoAJJ0GwA5QtD97pPt4oaPTZ5GGUQJQpmstA8dO1LBMW9tp45pvPxSYRgeAJMu0teDvsXl6APtI/jmUgHj7ORoAJNk6vG2q/BLAp2Vwl4GfQNSgASg5d3Zqlr0X53MAb0fPwPH+hk+yN0gASpbtyQCeBLCd5LuTOpqfz63AoACQdGEZ0ds8/SKSb2Rg2ykwCADKc/x9AOywBDs1Y8MYV+bahbJZ7dAASLKcesu8sVx6m7jZHzW9upn8068VDoByRMrDACy9+s1yGvaRWZyn98BjqgCUN1zZ8qstyNiJWPaiQ1uVW9n1gYgeYg7RxlQAkGQBt4Gczc/bY5z930jyoyGKOGSfXQGQZIchWLDN7sXl224vN7RvfV5TUKB3AMpvum2asMvW220kf5jkuin0N00eo0BvAEh6GoCdfGVB31Ds2rx86L1ys0ZIZwBIOhXAI2UhxnR8GYC9stxG8Bn0oGQ1AqAM4uzd9Lb/3Q4ztpcXWR7dKpJbgvY13ZpDgVoAlJcWnFPSpW31zV5i8AXJtanuMBWYCEB5Jam9mdIue0+d5crbBonPSNreuLwGrMC8AEh6ovTLgm2/5XbZRkg7xDivkSjwPwAk2YLLDaVvq8r/A/mcPpJozzUGKKP358tntq5u2TSIdpjReEMw3Z5R0nMkX5quG2l9WgpMHAROy7G066NAAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+NYAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+NYAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+NYAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+NYAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+NYAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+NYAuCjc1grCUDY0Pg4lgD46BzWSgIQNjQ+jiUAPjqHtZIAhA2Nj2MJgI/OYa0kAGFD4+PYPz1mh5ComFuyAAAAAElFTkSuQmCC","_id":"5e972ca368217f5030f46c03","markedAsDeleted":false,"fileSize":1048}],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":1,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}
</CopyElement>

#### Grouped Add to Cart

A Grouped product has a totally different add to cart button, create it only if you are thinking of using this kind of products in WooCommerce, otherwise, skip it!

If you need it, follow these steps:

1. Add a Form and on the Form Block add the attribute:

<Attribute name="item" value="grouped" />

2. Inside the Form add a div with attribute:

<Attribute name="item" value="wrapper" />

3. Inside the div add the following elements:

    * A label (will be the product name)
    * An Input type number (will be the quantity)
    * A checkbox (will be showed only if the product can be sold separately)

4. Optionally inside the same div you can add:

    * The product price on a text with attribute:
    <Attribute name="item" value="price" />

    * The product original price on a text with attribute:
    <Attribute name="item" value="regular-price" />

    * The link to the product with attribute:
    <Attribute name="item" value="link" />


The result in WooCommerce should be something like this

<div align="center">
    <g-image src="~/assets/images/grouped.png"/>
</div>

<CopyElement title="Grouped Add to Cart">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e677e1ad-3743-4852-688d-b84078f891bb","tag":"div","classes":[],"children":["e677e1ad-3743-4852-688d-b84078f891bc","e677e1ad-3743-4852-688d-b84078f891c4","e677e1ad-3743-4852-688d-b84078f891c7"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"item","value":"grouped"}]}},{"_id":"e677e1ad-3743-4852-688d-b84078f891bc","tag":"form","classes":[],"children":["73cfeb44-9422-989d-ed48-8d1ae42ac673","e677e1ad-3743-4852-688d-b84078f891c3"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"73cfeb44-9422-989d-ed48-8d1ae42ac673","tag":"div","classes":[],"children":["9dd2649e-d59c-09f4-06e7-dc7dce256a61","7588f996-bccd-328e-5e82-530ef02d6d54","2aa98735-5831-4eff-797b-8f80aad8938a","8f22a17c-2ffb-6cdc-c489-e1ff20866af3"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"wrapper"}]}},{"_id":"9dd2649e-d59c-09f4-06e7-dc7dce256a61","tag":"label","classes":[],"children":["9dd2649e-d59c-09f4-06e7-dc7dce256a62"],"type":"FormBlockLabel","data":{"form":{"type":"label"}}},{"_id":"9dd2649e-d59c-09f4-06e7-dc7dce256a62","text":true,"v":"Product Name"},{"_id":"7588f996-bccd-328e-5e82-530ef02d6d54","tag":"input","classes":["ea6e7f23-5777-4e0d-ea3d-d1f893fb7d26"],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"field","data-name":"Field","placeholder":"1","type":"number","id":"field","disabled":false,"required":true},"form":{"type":"input","name":"Field"}}},{"_id":"2aa98735-5831-4eff-797b-8f80aad8938a","tag":"div","classes":[],"children":["2aa98735-5831-4eff-797b-8f80aad8938b"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"price"}]}},{"_id":"2aa98735-5831-4eff-797b-8f80aad8938b","text":true,"v":"99$"},{"_id":"8f22a17c-2ffb-6cdc-c489-e1ff20866af3","tag":"div","classes":[],"children":["8f22a17c-2ffb-6cdc-c489-e1ff20866af4","8f22a17c-2ffb-6cdc-c489-e1ff20866af5"],"type":"FormCheckboxWrapper","data":{"form":{"type":"checkbox"}}},{"_id":"8f22a17c-2ffb-6cdc-c489-e1ff20866af4","tag":"input","classes":[],"children":[],"type":"FormCheckboxInput","data":{"attr":{"type":"checkbox","id":"checkbox","name":"checkbox","data-name":"Checkbox"},"form":{"type":"checkbox-input","name":"Checkbox"}}},{"_id":"8f22a17c-2ffb-6cdc-c489-e1ff20866af5","tag":"label","classes":[],"children":["8f22a17c-2ffb-6cdc-c489-e1ff20866af6"],"type":"FormInlineLabel","data":{"form":{"type":"checkbox-label"}}},{"_id":"8f22a17c-2ffb-6cdc-c489-e1ff20866af6","text":true,"v":"Buy Singularly?"},{"_id":"e677e1ad-3743-4852-688d-b84078f891c3","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"e677e1ad-3743-4852-688d-b84078f891c4","tag":"div","classes":[],"children":["e677e1ad-3743-4852-688d-b84078f891c5"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"e677e1ad-3743-4852-688d-b84078f891c5","tag":"div","classes":[],"children":["e677e1ad-3743-4852-688d-b84078f891c6"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e677e1ad-3743-4852-688d-b84078f891c6","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"e677e1ad-3743-4852-688d-b84078f891c7","tag":"div","classes":[],"children":["e677e1ad-3743-4852-688d-b84078f891c8"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"e677e1ad-3743-4852-688d-b84078f891c8","tag":"div","classes":[],"children":["e677e1ad-3743-4852-688d-b84078f891c9"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e677e1ad-3743-4852-688d-b84078f891c9","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[{"_id":"ea6e7f23-5777-4e0d-ea3d-d1f893fb7d26","fake":false,"type":"class","name":"Text Field","namespace":"","comb":"","styleLess":"width: 50px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Product Images

In WooCommerce you can associate multiple images to your product and you can show them on your theme just using the attribute:

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

#### Product Tabs

To create Product Tabs use the Tabs element and add the attribute: 

<Attribute name="item" value="tabs" />

Only the first tab will be considered, so you can delete all the others, inside the first tab content add a RichText element. The tabs will be created by WooCommerce and filled with different content.

<CopyElement title="Product Tabs">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"b8da347a-9870-9c1f-57e5-afb227178435","tag":"div","classes":[],"children":["b8da347a-9870-9c1f-57e5-afb227178436","b8da347a-9870-9c1f-57e5-afb227178440"],"type":"TabsWrapper","data":{"tabs":{"current":"Tab 1","easing":"ease","fadeIn":300,"fadeOut":100,"type":"wrapper"},"attr":{"data-duration-in":"300","data-duration-out":"100"},"xattr":[{"name":"item","value":"tabs"}]}},{"_id":"b8da347a-9870-9c1f-57e5-afb227178436","tag":"div","classes":[],"children":["b8da347a-9870-9c1f-57e5-afb227178437"],"type":"TabsMenu","data":{"tag":"div","tabs":{"type":"menu"}}},{"_id":"b8da347a-9870-9c1f-57e5-afb227178437","tag":"a","classes":[],"children":["b8da347a-9870-9c1f-57e5-afb227178438"],"type":"TabsLink","data":{"block":"inline","tabs":{"type":"link"},"attr":{"data-w-tab":"Tab 1"}}},{"_id":"b8da347a-9870-9c1f-57e5-afb227178438","tag":"div","classes":[],"children":["b8da347a-9870-9c1f-57e5-afb227178439"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"b8da347a-9870-9c1f-57e5-afb227178439","text":true,"v":"Tab 1"},{"_id":"b8da347a-9870-9c1f-57e5-afb227178440","tag":"div","classes":[],"children":["b8da347a-9870-9c1f-57e5-afb227178441"],"type":"TabsContent","data":{"tag":"div","tabs":{"type":"content"}}},{"_id":"b8da347a-9870-9c1f-57e5-afb227178441","tag":"div","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab898"],"type":"TabsPane","data":{"tag":"div","tabs":{"type":"pane"},"attr":{"data-w-tab":"Tab 1"}}},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab898","tag":"div","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab899","337b19f8-1356-d16b-08ee-f6a3143ab89b","337b19f8-1356-d16b-08ee-f6a3143ab89d","337b19f8-1356-d16b-08ee-f6a3143ab89f","337b19f8-1356-d16b-08ee-f6a3143ab8a1","337b19f8-1356-d16b-08ee-f6a3143ab8a3"],"type":"RichText","data":{"rich":true,"tag":"div"}},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab899","tag":"h2","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab89a"],"type":"Heading","data":{"tag":"h2"}},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab89a","text":true,"v":"What’s a Rich Text element?"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab89b","tag":"p","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab89c"],"type":"Paragraph"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab89c","text":true,"v":"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab89d","tag":"h4","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab89e"],"type":"Heading","data":{"tag":"h4"}},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab89e","text":true,"v":"Static and dynamic content editing"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab89f","tag":"p","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab8a0"],"type":"Paragraph"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab8a0","text":true,"v":"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab8a1","tag":"h4","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab8a2"],"type":"Heading","data":{"tag":"h4"}},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab8a2","text":true,"v":"How to customize formatting for each rich text"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab8a3","tag":"p","classes":[],"children":["337b19f8-1356-d16b-08ee-f6a3143ab8a4"],"type":"Paragraph"},{"_id":"337b19f8-1356-d16b-08ee-f6a3143ab8a4","text":true,"v":"Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Price

Is the price of the product, you can add it to text elements using the attribute:

<Attribute name="item" value="price" />

<CopyElement title="Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"price"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"99$"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Price","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Regular Price

If the product is on sale, the regular price is the full price, you can add it to text elements using the attribute:

<Attribute name="item" value="regular-price" />

<CopyElement title="Regular Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a7dbac84-ed3b-8825-9264-3a82d2dd4c80","tag":"div","classes":["ce0b86fb-860b-9515-9b4c-f0318a2f57a4"],"children":["a7dbac84-ed3b-8825-9264-3a82d2dd4c81"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"regular price"}]}},{"_id":"a7dbac84-ed3b-8825-9264-3a82d2dd4c81","text":true,"v":"99$"}],"styles":[{"_id":"ce0b86fb-860b-9515-9b4c-f0318a2f57a4","fake":false,"type":"class","name":"Regular Price","namespace":"","comb":"","styleLess":"text-decoration: line-through;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

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


#### Previous and Next Product

Sometimes it can be usefull to enhance your users engagement to add datas for next and previous products.

To create them, just add a div with respectively:

<Attribute name="item" value="next-product" />

to create a space for the next post and 

<Attribute name="item" value="prev-product" />

to create a space for the previous post.

Inside this divs you can add the following elements:

##### Title

On texts you can add the attribute:

<Attribute name="item" value="title" />

##### Featured Image

On images or divs you can add instead the attribute:

<Attribute name="item" value="featured-image" />

##### Excerpt

If you want on texts you can add the attribute:

<Attribute name="item" value="excerpt" />

##### Permalink

On Links instead you can add the attribute:

<Attribute name="item" value="permalink" />

<CopyElement title="Next and Prev Products">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0db83c0f-1ae6-af6f-440e-0f82a713ae73","tag":"div","classes":["38e4f140-3c95-341b-d5ae-00dca98023d5"],"children":["3a2931c7-c251-c694-0f0c-17790ea17398","04d63fce-c3cd-932d-83cb-df5bbc39b273"],"type":"Block","data":{"tag":"div"}},{"_id":"3a2931c7-c251-c694-0f0c-17790ea17398","tag":"div","classes":["a1ab489c-b6f1-b2bc-89f2-60a7e4a2b6e3"],"children":["cdcf4d49-0f83-72fa-0951-c4cd174a766d"],"type":"Block","data":{"tag":"div","style":{"base":{"main":{"noPseudo":{"gridColumnEnd":2,"gridColumnStart":1,"gridRowEnd":2,"gridRowStart":1,"alignSelf":"center","justifySelf":"center"}}}},"xattr":[{"name":"item","value":"prev-product"}]}},{"_id":"cdcf4d49-0f83-72fa-0951-c4cd174a766d","tag":"a","classes":[],"children":["3985bdd9-e1ce-9baa-025e-3708f5c98320"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"3985bdd9-e1ce-9baa-025e-3708f5c98320","tag":"h4","classes":[],"children":["3985bdd9-e1ce-9baa-025e-3708f5c98321"],"type":"Heading","data":{"tag":"h4","xattr":[{"name":"item","value":"title"}]}},{"_id":"3985bdd9-e1ce-9baa-025e-3708f5c98321","text":true,"v":"Prev Post Title"},{"_id":"04d63fce-c3cd-932d-83cb-df5bbc39b273","tag":"div","classes":["6a48bba1-deb5-5baa-926d-edf2052aaef9"],"children":["f4abb3fd-461a-c2a4-1c13-0cf79266b1b9"],"type":"Block","data":{"tag":"div","style":{"base":{"main":{"noPseudo":{"gridColumnEnd":3,"gridColumnStart":2,"gridRowEnd":2,"gridRowStart":1,"alignSelf":"center","justifySelf":"center"}}}},"xattr":[{"name":"item","value":"next-product"}]}},{"_id":"f4abb3fd-461a-c2a4-1c13-0cf79266b1b9","tag":"a","classes":[],"children":["f4abb3fd-461a-c2a4-1c13-0cf79266b1ba"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"f4abb3fd-461a-c2a4-1c13-0cf79266b1ba","tag":"h4","classes":[],"children":["f4abb3fd-461a-c2a4-1c13-0cf79266b1bb"],"type":"Heading","data":{"tag":"h4","xattr":[{"name":"item","value":"title"}]}},{"_id":"f4abb3fd-461a-c2a4-1c13-0cf79266b1bb","text":true,"v":"Next Post Title"}],"styles":[{"_id":"38e4f140-3c95-341b-d5ae-00dca98023d5","fake":false,"type":"class","name":"Adjacent Products","namespace":"","comb":"","styleLess":"display: grid; justify-content: center; align-content: center; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null},{"_id":"a1ab489c-b6f1-b2bc-89f2-60a7e4a2b6e3","fake":false,"type":"class","name":"Previous Post","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"6a48bba1-deb5-5baa-926d-edf2052aaef9","fake":false,"type":"class","name":"Next Post","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Upsells and Related

Upsells are products that are usually bought at the same time with the current product, WooCommerce doesn't have a smart recommendation system, instead you have basically to define the upsells products, for each product. (Yes, manually for each product 😯😯😯 [How?](https://docs.woocommerce.com/document/related-products-up-sells-and-cross-sells/)). While related products are automatic but not modifiable, so use them at your own risk ☠️

Upsells and Related cannot be paginated, but you can define the number of Products to show in WordPress following the path: Udesly > Settings > WooCommerce > Related and Upsells.

To create an Upsell list add the following attribute on a *Collection List Wrapper*:

<Attribute name="wc" value="upsells" />

<CopyElement title="Upsells List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"wc","value":"upsells"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

for related instead add the following attribute on a *Collection List Wrapper*:

<Attribute name="wc" value="related" />

<CopyElement title="Related List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"wc","value":"related"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/woocommerce/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Product Card" id="simple-product-card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c0","tag":"div","classes":["78b9d4f3-2e40-5ced-a0f1-d9081652100b"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3c1","3ad5439d-32c7-d060-b5ba-93983ab4b3ca","3ad5439d-32c7-d060-b5ba-93983ab4b3cc"],"type":"Block","data":{"tag":"div"}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c1","tag":"div","classes":["b3099cf3-4ee2-3b4c-6e4a-1b2cd73133b9"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3c2","3ad5439d-32c7-d060-b5ba-93983ab4b3c6","3ad5439d-32c7-d060-b5ba-93983ab4b3c9"],"type":"Block","data":{"tag":"div"}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c2","tag":"a","classes":["e429686f-888b-56be-400f-c9859a9489c5"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3c3"],"type":"Link","data":{"block":"inline","link":{"mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c3","tag":"div","classes":["79a7a714-b731-c62c-eadc-dc97d1cf6c13","7d6c45fb-cf22-3b75-4c8e-8ee9f5df3a32"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3c4"],"type":"Block","data":{"tag":"div"}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c4","tag":"div","classes":[],"children":["fa550e16-9a9b-474e-d322-190a14756fd2"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"fa550e16-9a9b-474e-d322-190a14756fd2","text":true,"v":"EXPLORE"},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c6","tag":"div","classes":["fedb56a3-71dc-b898-20eb-4fe9837ff4d4"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3c7"],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"on-sale"}]}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c7","tag":"div","classes":["69f99c1e-331b-932d-d907-4ee561dc9624","93fa605c-306f-b4bf-c95c-24a36b9f487d"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3c8"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c8","text":true,"v":"On Sale."},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3c9","tag":"div","classes":["942f9b66-e1fa-128a-1d02-285c92be03a6","3b690470-ee7a-855f-19dc-1aec405f9eda"],"children":[],"type":"Block","data":{"tag":"div","dyn":{"bind":{}},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3ca","tag":"a","classes":["9b4d5ea7-06c0-6dce-1e1a-f61eb7fae2a1","b588edef-5cc6-203e-3174-2fcb0c12ef9f"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3cb"],"type":"Link","data":{"link":{"mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"title"}]}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3cb","text":true,"v":"Text Link"},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3cc","tag":"div","classes":["f8a8a7cf-215a-5f03-5094-2f92594f54dc"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3cd","3ad5439d-32c7-d060-b5ba-93983ab4b3cf"],"type":"Block","data":{"tag":"div"}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3cd","tag":"p","classes":["aeb50ffb-453b-8df5-0844-df532dbbf478"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3ce"],"type":"Paragraph","data":{"dyn":{"bind":{}},"xattr":[{"name":"item","value":"price"}]}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3ce","text":true,"v":"55USD"},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3cf","tag":"p","classes":["2ce183ff-5496-3590-ccc5-91aa9fa3d592","2cab0bbd-59d6-1cc4-e5bd-e87c79500222"],"children":["3ad5439d-32c7-d060-b5ba-93983ab4b3d0"],"type":"Paragraph","data":{"dyn":{"bind":{}},"xattr":[{"name":"item","value":"regular-price"}]}},{"_id":"3ad5439d-32c7-d060-b5ba-93983ab4b3d0","text":true,"v":"99 USD"}],"styles":[{"_id":"942f9b66-e1fa-128a-1d02-285c92be03a6","fake":false,"type":"class","name":"Product Picture","namespace":"","comb":"","styleLess":"display: block; width: 300px; height: 380px; background-image: @img_example_bg; background-position: 50% 50%; background-size: cover;","variants":{"medium":{"styleLess":"width: auto;"}},"children":["3b690470-ee7a-855f-19dc-1aec405f9eda"],"selector":null},{"_id":"f8a8a7cf-215a-5f03-5094-2f92594f54dc","fake":false,"type":"class","name":"Category Price Wrap","namespace":"","comb":"","styleLess":"display: inline-block; min-height: 42px; justify-content: center; align-items: baseline;","variants":{},"children":[],"selector":null},{"_id":"b588edef-5cc6-203e-3174-2fcb0c12ef9f","fake":false,"type":"class","name":"CC Product Category","namespace":"","comb":"&","styleLess":"display: block; margin-bottom: 5px; color: #1d1f2e;","variants":{},"children":[],"selector":null},{"_id":"3b690470-ee7a-855f-19dc-1aec405f9eda","fake":false,"type":"class","name":"CC Featured Picture","namespace":"","comb":"&","styleLess":"width: 100%; height: 540px;","variants":{"medium":{"styleLess":"width: 100%;"},"small":{"styleLess":"height: 380px;"}},"children":[],"selector":null},{"_id":"2ce183ff-5496-3590-ccc5-91aa9fa3d592","fake":false,"type":"class","name":"Product Price Category","namespace":"","comb":"","styleLess":"display: inline-block; color: rgba(29, 31, 46, 0.7);","variants":{},"children":["2cab0bbd-59d6-1cc4-e5bd-e87c79500222"],"selector":null},{"_id":"fedb56a3-71dc-b898-20eb-4fe9837ff4d4","fake":false,"type":"class","name":"Category Tag","namespace":"","comb":"","styleLess":"position: absolute; top: 0px; right: 0px; z-index: 80; display: inline-block; margin-top: 10px; margin-right: 10px; padding-top: 6px; padding-right: 15px; padding-bottom: 6px; padding-left: 15px; background-color: white;","variants":{},"children":[],"selector":null},{"_id":"79a7a714-b731-c62c-eadc-dc97d1cf6c13","fake":false,"type":"class","name":"White Button","namespace":"","comb":"","styleLess":"position: relative; z-index: 50; display: inline-block; padding-top: 18px; padding-right: 24px; padding-bottom: 18px; padding-left: 24px; justify-content: center; border-bottom-style: none; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; background-color: white; box-shadow: 0 2px 6px 0 rgba(29, 31, 46, 0.1); transition-property: background-color, opacity, box-shadow; transition-duration: 400ms, 400ms, 400ms; transition-timing-function: ease, ease, ease; color: #1d1f2e; font-size: 12px; line-height: 18px; font-weight: 700; text-align: center; letter-spacing: 2px; text-decoration: none; text-transform: uppercase;","variants":{"main_hover":{"styleLess":"background-color: #fafafa; box-shadow: 0 3px 8px 0 rgba(29, 31, 46, 0.15); opacity: 0.96; color: #161724;"}},"children":["7d6c45fb-cf22-3b75-4c8e-8ee9f5df3a32"],"selector":null},{"_id":"93fa605c-306f-b4bf-c95c-24a36b9f487d","fake":false,"type":"class","name":"CC Sale","namespace":"","comb":"&","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"7d6c45fb-cf22-3b75-4c8e-8ee9f5df3a32","fake":false,"type":"class","name":"CC Product Button","namespace":"","comb":"&","styleLess":"width: 100%;","variants":{"main_hover":{"styleLess":"opacity: 0.96;"}},"children":[],"selector":null},{"_id":"2cab0bbd-59d6-1cc4-e5bd-e87c79500222","fake":false,"type":"class","name":"Older Price Category","namespace":"","comb":"&","styleLess":"color: rgba(29, 31, 46, 0.4); text-decoration: line-through;","variants":{},"children":[],"selector":null},{"_id":"e429686f-888b-56be-400f-c9859a9489c5","fake":false,"type":"class","name":"Item Overlay","namespace":"","comb":"","styleLess":"position: absolute; z-index: 30; display: flex; width: 100%; height: 100%; padding-right: 15px; padding-bottom: 15px; padding-left: 15px; flex-direction: column; justify-content: flex-end; align-items: center; opacity: 0; cursor: pointer;","variants":{},"children":[],"selector":null},{"_id":"9b4d5ea7-06c0-6dce-1e1a-f61eb7fae2a1","fake":false,"type":"class","name":"Pic Description","namespace":"","comb":"","styleLess":"margin-top: 10px; margin-bottom: 10px; font-size: 20px; line-height: 30px; font-weight: 400; text-align: center;","variants":{},"children":["b588edef-5cc6-203e-3174-2fcb0c12ef9f"],"selector":null},{"_id":"69f99c1e-331b-932d-d907-4ee561dc9624","fake":false,"type":"class","name":"Category Tag Text","namespace":"","comb":"","styleLess":"color: #a25f4b; font-weight: 700;","variants":{},"children":["93fa605c-306f-b4bf-c95c-24a36b9f487d","ffebb621-e18f-5853-104f-344b5eb68148"],"selector":null},{"_id":"78b9d4f3-2e40-5ced-a0f1-d9081652100b","fake":false,"type":"class","name":"Product Card","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"aeb50ffb-453b-8df5-0844-df532dbbf478","fake":false,"type":"class","name":"Discounted Price Category","namespace":"","comb":"","styleLess":"display: inline-block; margin-right: 10px; color: #a25f4b; font-size: 20px; line-height: 32px;","variants":{},"children":[],"selector":null},{"_id":"b3099cf3-4ee2-3b4c-6e4a-1b2cd73133b9","fake":false,"type":"class","name":"Link Wrap Category","namespace":"","comb":"","styleLess":"position: relative; margin-bottom: 25px;","variants":{"medium":{"styleLess":"width: 100%;"}},"children":["84ca5b35-10c5-46f6-0c90-8df1484324b3"],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[{"id":"i-80","interactionTypeId":"MOUSE_HOVER_INTERACTION","eventIds":["e-159","e-160"],"target":"5e95e04dd57c74efb16b69cc|3ad5439d-32c7-d060-b5ba-93983ab4b3c2","createdOn":1586880595399}],"events":[{"id":"e-159","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"},"instant":true},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5e95e04dd57c74efb16b69cc|3ad5439d-32c7-d060-b5ba-93983ab4b3c2"},"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1586880595399},{"id":"e-160","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"},"instant":true},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5e95e04dd57c74efb16b69cc|3ad5439d-32c7-d060-b5ba-93983ab4b3c2"},"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1586880595399}],"actionLists":[{"id":"a-4","title":"Hover Product","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"nodeId":"5e95df602bcd2e59b2bc7c47|79877e64-041a-c822-4aac-45fed11feb85","appliesTo":"ELEMENT_CLASS","styleBlockIds":["e429686f-888b-56be-400f-c9859a9489c5"],"useEventTarget":"CHILDREN","boundaryMode":true},"value":0,"unit":"%"},"instant":false},{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"nodeId":"5e95df602bcd2e59b2bc7c47|b94aa7f6-0ce7-12c8-b662-6ebd178091ea","appliesTo":"ELEMENT_CLASS","styleBlockIds":["79a7a714-b731-c62c-eadc-dc97d1cf6c13","7d6c45fb-cf22-3b75-4c8e-8ee9f5df3a32"],"useEventTarget":"CHILDREN","boundaryMode":true},"yValue":8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]},{"actionItems":[{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":200,"target":{"nodeId":"5e95df602bcd2e59b2bc7c47|79877e64-041a-c822-4aac-45fed11feb85","appliesTo":"ELEMENT_CLASS","styleBlockIds":["e429686f-888b-56be-400f-c9859a9489c5"],"useEventTarget":"CHILDREN","boundaryMode":true},"value":100,"unit":"%"},"instant":false},{"id":"a-4-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5e95df602bcd2e59b2bc7c47|b94aa7f6-0ce7-12c8-b662-6ebd178091ea","appliesTo":"ELEMENT_CLASS","styleBlockIds":["79a7a714-b731-c62c-eadc-dc97d1cf6c13","7d6c45fb-cf22-3b75-4c8e-8ee9f5df3a32"],"useEventTarget":"CHILDREN","boundaryMode":true},"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]}],"createdOn":1539290816398,"useFirstGroupAsInitialState":true},{"id":"a-5","title":"Hover Product Off","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5e95df602bcd2e59b2bc7c47|79877e64-041a-c822-4aac-45fed11feb85","appliesTo":"ELEMENT_CLASS","styleBlockIds":["e429686f-888b-56be-400f-c9859a9489c5"],"useEventTarget":"CHILDREN","boundaryMode":true},"value":0,"unit":"%"},"instant":false},{"id":"a-5-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5e95df602bcd2e59b2bc7c47|b94aa7f6-0ce7-12c8-b662-6ebd178091ea","appliesTo":"ELEMENT_CLASS","styleBlockIds":["79a7a714-b731-c62c-eadc-dc97d1cf6c13","7d6c45fb-cf22-3b75-4c8e-8ee9f5df3a32"],"useEventTarget":"CHILDREN","boundaryMode":true},"yValue":8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]}],"createdOn":1539290897105,"useFirstGroupAsInitialState":false}]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>