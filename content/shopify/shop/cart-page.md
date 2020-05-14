---
sidebar: 'shopify'
prev: '/shopify/shop/product-page-elements/'
next: '/shopify/shop/gift-card-page/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Cart Page

This is the page where all items in the cart are shown:

This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="cart" />

Note that the mini cart can't be used as a cart page. And Shopify requires absolutely this page!

Inside this page you should add the Cart Element.

## Cart

Insert a Form Block with the attribute:

<Attribute name="shop" value="cart" />

Inside the Form block you have to add:

* 2 submits with respectively the attributes:

<Attribute name="item" value="checkout" />

and 

<Attribute name="item" value="update" />

* 2 Texts with respectively the attributes:

<Attribute name="item" value="cart-total" />

and

<Attribute name="item" value="cart-discounts" />

* A collection List wrapper without attributes;

<CopyElement title="Cart Structure">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"18f07aee-78fe-b43b-bf98-1513a2a1555d","tag":"div","classes":[],"children":["18f07aee-78fe-b43b-bf98-1513a2a1555e","18f07aee-78fe-b43b-bf98-1513a2a15566","18f07aee-78fe-b43b-bf98-1513a2a15569"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"shop","value":"cart"}]}},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a1555e","tag":"form","classes":[],"children":["c3ea8bba-a0f3-a055-dcf2-e4a5b996b956","cfc92850-d37b-af2f-b234-008b35032f75"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"c3ea8bba-a0f3-a055-dcf2-e4a5b996b956","tag":"div","classes":[],"children":["c3ea8bba-a0f3-a055-dcf2-e4a5b996b957","c3ea8bba-a0f3-a055-dcf2-e4a5b996b959"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"}}},{"_id":"c3ea8bba-a0f3-a055-dcf2-e4a5b996b957","tag":"div","classes":[],"children":["c3ea8bba-a0f3-a055-dcf2-e4a5b996b958"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"c3ea8bba-a0f3-a055-dcf2-e4a5b996b958","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"c3ea8bba-a0f3-a055-dcf2-e4a5b996b959","tag":"div","classes":[],"children":["c3ea8bba-a0f3-a055-dcf2-e4a5b996b95a"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"c3ea8bba-a0f3-a055-dcf2-e4a5b996b95a","tag":"div","classes":[],"children":["c3ea8bba-a0f3-a055-dcf2-e4a5b996b95b"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"c3ea8bba-a0f3-a055-dcf2-e4a5b996b95b","text":true,"v":"No items found."},{"_id":"cfc92850-d37b-af2f-b234-008b35032f75","tag":"div","classes":["db71b4ef-1d70-db1a-525b-18e7b68bcaaf"],"children":["94f0b2ce-82ac-25d3-0657-e5a7aa90d108"],"type":"Block","data":{"tag":"div"}},{"_id":"94f0b2ce-82ac-25d3-0657-e5a7aa90d108","tag":"div","classes":[],"children":["f1ab2b12-d105-e1f7-d7d3-bcb292b1dad1","e7de7d0c-ba83-fa7e-ebc1-b6fbd81b8b39","18f07aee-78fe-b43b-bf98-1513a2a15565","ba1b1ec2-253a-3321-9a4f-237f9176330d"],"type":"Block","data":{"tag":"div"}},{"_id":"f1ab2b12-d105-e1f7-d7d3-bcb292b1dad1","tag":"div","classes":["9b3c9df5-3dd0-3ed6-434f-0845fbbcdaf1"],"children":["16e1b853-16f0-6074-39d1-0ca6c32eaebf","a718a5e6-82e7-99d7-512b-492e2f46053f"],"type":"Block","data":{"tag":"div"}},{"_id":"16e1b853-16f0-6074-39d1-0ca6c32eaebf","tag":"div","classes":[],"children":["16e1b853-16f0-6074-39d1-0ca6c32eaec0"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"16e1b853-16f0-6074-39d1-0ca6c32eaec0","text":true,"v":"Discounts"},{"_id":"a718a5e6-82e7-99d7-512b-492e2f46053f","tag":"div","classes":[],"children":["a718a5e6-82e7-99d7-512b-492e2f460540"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"cart-discounts"}]}},{"_id":"a718a5e6-82e7-99d7-512b-492e2f460540","text":true,"v":"0$"},{"_id":"e7de7d0c-ba83-fa7e-ebc1-b6fbd81b8b39","tag":"div","classes":["9b3c9df5-3dd0-3ed6-434f-0845fbbcdaf1"],"children":["e7de7d0c-ba83-fa7e-ebc1-b6fbd81b8b3a","354c9610-a8a6-7ed1-dc4e-fd8f08ba497c"],"type":"Block","data":{"tag":"div"}},{"_id":"e7de7d0c-ba83-fa7e-ebc1-b6fbd81b8b3a","tag":"div","classes":[],"children":["e7de7d0c-ba83-fa7e-ebc1-b6fbd81b8b3b"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e7de7d0c-ba83-fa7e-ebc1-b6fbd81b8b3b","text":true,"v":"Total"},{"_id":"354c9610-a8a6-7ed1-dc4e-fd8f08ba497c","tag":"div","classes":[],"children":["354c9610-a8a6-7ed1-dc4e-fd8f08ba497d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"cart-total"}]}},{"_id":"354c9610-a8a6-7ed1-dc4e-fd8f08ba497d","text":true,"v":"120$"},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a15565","tag":"input","classes":["4f1af0be-6e51-f079-f9ef-aa2df00e2578"],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Update","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"ba1b1ec2-253a-3321-9a4f-237f9176330d","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Checkout","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a15566","tag":"div","classes":[],"children":["18f07aee-78fe-b43b-bf98-1513a2a15567"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a15567","tag":"div","classes":[],"children":["18f07aee-78fe-b43b-bf98-1513a2a15568"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a15568","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a15569","tag":"div","classes":[],"children":["18f07aee-78fe-b43b-bf98-1513a2a1556a"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a1556a","tag":"div","classes":[],"children":["18f07aee-78fe-b43b-bf98-1513a2a1556b"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"18f07aee-78fe-b43b-bf98-1513a2a1556b","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[{"_id":"db71b4ef-1d70-db1a-525b-18e7b68bcaaf","fake":false,"type":"class","name":"Div Block 5","namespace":"","comb":"","styleLess":"display: flex; margin-top: 10px; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; justify-content: flex-end;","variants":{},"children":[],"selector":null},{"_id":"9b3c9df5-3dd0-3ed6-434f-0845fbbcdaf1","fake":false,"type":"class","name":"Div Block 6","namespace":"","comb":"","styleLess":"display: flex; justify-content: space-between;","variants":{},"children":[],"selector":null},{"_id":"4f1af0be-6e51-f079-f9ef-aa2df00e2578","fake":false,"type":"class","name":"Submit Button","namespace":"","comb":"","styleLess":"margin-right: 10px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List Item, you can add the following elements:

#### Title

You can add it on text elements using the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"title"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Title"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Vendor

You can add it on text elements using the attribute:

<Attribute name="item" value="vendor" />

<CopyElement title="Vendor">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"vendor"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Vendor"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Price

You can add it on text elements using the attribute:

<Attribute name="item" value="price" />

<CopyElement title="Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"price"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"$56"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Original Price

You can add it on text elements using the attribute:

<Attribute name="item" value="original-price" />

<CopyElement title="Original Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"original-price"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"$56"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Total

You can add it on text elements using the attribute:

<Attribute name="item" value="total" />

<CopyElement title="Total">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"total"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"$56"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Properties

You can add it on text elements using the attribute:

<Attribute name="item" value="properties" />

<CopyElement title="Properties">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"properties"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Properties"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Variant

You can add it on text elements using the attribute:

<Attribute name="item" value="variant" />

<CopyElement title="Variant">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cc034cd-e16f-e95c-ea8a-8ecb98d14ae4","tag":"div","classes":[],"children":["aebc1bfc-c834-de34-f4ad-18504937227e"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"variant"}]}},{"_id":"aebc1bfc-c834-de34-f4ad-18504937227e","text":true,"v":"Variant Name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Quantity

Quantity can be used on texts or numeric inputs using the attribute:

<Attribute name="item" value="quantity" />

<CopyElement title="Quantity">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"da8521e2-22a6-ca99-593d-347a8de00a48","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"field","data-name":"Field","placeholder":"Quantity","type":"number","id":"field","disabled":false,"required":true},"form":{"type":"input","name":"Field"},"xattr":[{"name":"item","value":"quantity"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Link

You can add it on links using the attribute:

<Attribute name="item" value="link" />


<CopyElement title="Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"043ce580-f301-0316-5bd7-bb7f16e70e12","tag":"a","classes":[],"children":["a005de81-d74f-9648-15ab-8243e0bacb34"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"link"}]}},{"_id":"a005de81-d74f-9648-15ab-8243e0bacb34","tag":"div","classes":[],"children":["a005de81-d74f-9648-15ab-8243e0bacb35","333eccbf-46bf-5bd8-90d2-26ce883483f1","59b03e7a-248c-174a-5ad8-cdfee6ed5568"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"title"}]}},{"_id":"a005de81-d74f-9648-15ab-8243e0bacb35","text":true,"v":"Product title"},{"_id":"333eccbf-46bf-5bd8-90d2-26ce883483f1","tag":"br","classes":[],"children":[],"type":"LineBreak"},{"_id":"59b03e7a-248c-174a-5ad8-cdfee6ed5568","text":true,"v":"‍"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Remove

You can add it on links using the attribute:

<Attribute name="item" value="remove" />

<CopyElement title="Remove">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a58c8ef4-3e76-22de-0301-01b3503dfe7e","tag":"a","classes":[],"children":["a58c8ef4-3e76-22de-0301-01b3503dfe7f"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"remove"}]}},{"_id":"a58c8ef4-3e76-22de-0301-01b3503dfe7f","text":true,"v":"remove"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Featured Image

You can add it on links or images using the attribute:

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"6f449204-dcbd-b81e-8fb0-aa9834bb271d","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>