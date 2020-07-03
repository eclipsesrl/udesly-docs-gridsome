---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/woocommerce/checkout-page/'
next: '/wordpress/woocommerce/order-confirmation-page/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Order Confirmation Page

Order Confirmation Page is already created by Webflow when you add the Ecommerce, you don't need any attribute on body, and will automatically be used as Thank You Page by WooCommerce

The order confirmation page is already preconfigured by Webflow, you have only to add some attributes and delete elements that you don't need or are not exported.

<CopyElement title="Order Confirmation">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5e971e400919cd25f13ccca6aN","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000000b"],"type":"CommerceOrderConfirmationContainer","data":{"commerce":{"type":"order-confirmation-container"}}},{"_id":"5e971e400919cd25f13ccca600000000000b","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000000c","5e971e400919cd25f13ccca6000000000061"],"type":"CommerceLayoutContainer","data":{"tag":"div"}},{"_id":"5e971e400919cd25f13ccca600000000000c","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000000d","5e971e400919cd25f13ccca6000000000024","5e971e400919cd25f13ccca600000000002e","5e971e400919cd25f13ccca600000000004c"],"type":"CommerceLayoutMain"},{"_id":"5e971e400919cd25f13ccca600000000000d","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000000e","5e971e400919cd25f13ccca6000000000011"],"type":"CommerceCheckoutCustomerInfoSummaryWrapper"},{"_id":"5e971e400919cd25f13ccca600000000000e","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000000f"],"type":"CommerceCheckoutSummaryBlockHeader"},{"_id":"5e971e400919cd25f13ccca600000000000f","tag":"h4","classes":[],"children":["5e971e400919cd25f13ccca6000000000010"],"type":"Heading","data":{"tag":"h4"}},{"_id":"5e971e400919cd25f13ccca6000000000010","text":true,"v":"Customer Information"},{"_id":"5e971e400919cd25f13ccca6000000000011","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000012"],"type":"CommerceCheckoutBlockContent"},{"_id":"5e971e400919cd25f13ccca6000000000012","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000013","5e971e400919cd25f13ccca6000000000018"],"type":"CommerceCheckoutRow"},{"_id":"5e971e400919cd25f13ccca6000000000013","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000014"],"type":"CommerceCheckoutColumn"},{"_id":"5e971e400919cd25f13ccca6000000000014","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000015","5e971e400919cd25f13ccca6000000000017"],"type":"CommerceCheckoutSummaryItem"},{"_id":"5e971e400919cd25f13ccca6000000000015","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000016"],"type":"CommerceCheckoutSummaryLabel"},{"_id":"5e971e400919cd25f13ccca6000000000016","text":true,"v":"Email"},{"_id":"5e971e400919cd25f13ccca6000000000017","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"customerEmail","type":"PlainText"}]}},"xattr":[{"name":"order","value":"email"}]}},{"_id":"5e971e400919cd25f13ccca6000000000018","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000019"],"type":"CommerceCheckoutColumn","data":{"dyn":{"condition":{"class":{"false":{"w-condition-invisible":{"fields":{"requiresShipping":{"eq":"true"}}}}}}}}},{"_id":"5e971e400919cd25f13ccca6000000000019","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000001a","5e971e400919cd25f13ccca600000000001c"],"type":"CommerceCheckoutSummaryItem"},{"_id":"5e971e400919cd25f13ccca600000000001a","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000001b"],"type":"CommerceCheckoutSummaryLabel"},{"_id":"5e971e400919cd25f13ccca600000000001b","text":true,"v":"Shipping Address"},{"_id":"5e971e400919cd25f13ccca600000000001c","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"shippingAddressAddressee","type":"PlainText"}]}},"xattr":[{"name":"order","value":"shipping-address"}]}},{"_id":"5e971e400919cd25f13ccca6000000000024","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000025","5e971e400919cd25f13ccca6000000000028"],"type":"CommerceCheckoutShippingSummaryWrapper","data":{"dyn":{"condition":{"class":{"false":{"w-condition-invisible":{"fields":{"requiresShipping":{"eq":"true"}}}}}}}}},{"_id":"5e971e400919cd25f13ccca6000000000025","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000026"],"type":"CommerceCheckoutSummaryBlockHeader"},{"_id":"5e971e400919cd25f13ccca6000000000026","tag":"h4","classes":[],"children":["5e971e400919cd25f13ccca6000000000027"],"type":"Heading","data":{"tag":"h4"}},{"_id":"5e971e400919cd25f13ccca6000000000027","text":true,"v":"Shipping Method"},{"_id":"5e971e400919cd25f13ccca6000000000028","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000029"],"type":"CommerceCheckoutBlockContent"},{"_id":"5e971e400919cd25f13ccca6000000000029","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000002a"],"type":"CommerceCheckoutRow"},{"_id":"5e971e400919cd25f13ccca600000000002a","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000002b"],"type":"CommerceCheckoutColumn"},{"_id":"5e971e400919cd25f13ccca600000000002b","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000002c"],"type":"CommerceCheckoutSummaryItem"},{"_id":"5e971e400919cd25f13ccca600000000002c","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"shippingMethodName","type":"PlainText"}]}},"xattr":[{"name":"order","value":"shipping-method"}]}},{"_id":"5e971e400919cd25f13ccca600000000002e","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000002f","5e971e400919cd25f13ccca6000000000032"],"type":"CommerceCheckoutPaymentSummaryWrapper"},{"_id":"5e971e400919cd25f13ccca600000000002f","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000030"],"type":"CommerceCheckoutSummaryBlockHeader"},{"_id":"5e971e400919cd25f13ccca6000000000030","tag":"h4","classes":[],"children":["5e971e400919cd25f13ccca6000000000031"],"type":"Heading","data":{"tag":"h4"}},{"_id":"5e971e400919cd25f13ccca6000000000031","text":true,"v":"Payment Info"},{"_id":"5e971e400919cd25f13ccca6000000000032","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000033"],"type":"CommerceCheckoutBlockContent"},{"_id":"5e971e400919cd25f13ccca6000000000033","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000034","5e971e400919cd25f13ccca6000000000040"],"type":"CommerceCheckoutRow"},{"_id":"5e971e400919cd25f13ccca6000000000034","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000035"],"type":"CommerceCheckoutColumn"},{"_id":"5e971e400919cd25f13ccca6000000000035","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000036","5e971e400919cd25f13ccca6000000000038"],"type":"CommerceCheckoutSummaryItem"},{"_id":"5e971e400919cd25f13ccca6000000000036","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000037"],"type":"CommerceCheckoutSummaryLabel"},{"_id":"5e971e400919cd25f13ccca6000000000037","text":true,"v":"Payment Info"},{"_id":"5e971e400919cd25f13ccca6000000000038","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000039","5e971e400919cd25f13ccca600000000003a"],"type":"CommerceCheckoutSummaryFlexBoxDiv","data":{"tag":"div","xattr":[{"name":"order","value":"payment-method"}]}},{"_id":"5e971e400919cd25f13ccca6000000000039","tag":"div","classes":[],"children":[],"type":"CommerceCheckoutSummaryTextSpacingOnDiv","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"cardProvider","type":"PlainText"}]}}}},{"_id":"5e971e400919cd25f13ccca600000000003a","tag":"div","classes":[],"children":[],"type":"CommerceCheckoutSummaryTextSpacingOnDiv","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"cardLastFour","type":"PlainText"}]}}}},{"_id":"5e971e400919cd25f13ccca6000000000040","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000041"],"type":"CommerceCheckoutColumn"},{"_id":"5e971e400919cd25f13ccca6000000000041","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000042","5e971e400919cd25f13ccca6000000000044"],"type":"CommerceCheckoutSummaryItem"},{"_id":"5e971e400919cd25f13ccca6000000000042","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000043"],"type":"CommerceCheckoutSummaryLabel"},{"_id":"5e971e400919cd25f13ccca6000000000043","text":true,"v":"Billing Address"},{"_id":"5e971e400919cd25f13ccca6000000000044","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"billingAddressAddressee","type":"PlainText"}]}},"xattr":[{"name":"order","value":"billing-address"}]}},{"_id":"5e971e400919cd25f13ccca600000000004c","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000004d","5e971e400919cd25f13ccca6000000000050"],"type":"CommerceCheckoutOrderItemsWrapper"},{"_id":"5e971e400919cd25f13ccca600000000004d","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000004e"],"type":"CommerceCheckoutSummaryBlockHeader"},{"_id":"5e971e400919cd25f13ccca600000000004e","tag":"h4","classes":[],"children":["5e971e400919cd25f13ccca600000000004f"],"type":"Heading","data":{"tag":"h4"}},{"_id":"5e971e400919cd25f13ccca600000000004f","text":true,"v":"Items in Order"},{"_id":"5e971e400919cd25f13ccca6000000000050","tag":"div","classes":[],"children":["8c5eb8bd-4b19-dc3d-fd1b-f1e0bf250b6a","5e971e400919cd25f13ccca6000000000051"],"type":"CommerceCheckoutBlockContent"},{"_id":"8c5eb8bd-4b19-dc3d-fd1b-f1e0bf250b6a","tag":"ul","classes":[],"children":["8c5eb8bd-4b19-dc3d-fd1b-f1e0bf250b6b"],"type":"List","data":{"tag":"ul","list":{"type":"list","unstyled":true},"xattr":[{"name":"order","value":"products"}]}},{"_id":"8c5eb8bd-4b19-dc3d-fd1b-f1e0bf250b6b","tag":"li","classes":[],"children":["5c61efd8-e9e9-c03c-8df7-e09623bc1c2e","1c49f961-c7ae-3192-f5f4-c65da2cec734"],"type":"ListItem"},{"_id":"5c61efd8-e9e9-c03c-8df7-e09623bc1c2e","tag":"h3","classes":[],"children":["5c61efd8-e9e9-c03c-8df7-e09623bc1c2f"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"5c61efd8-e9e9-c03c-8df7-e09623bc1c2f","text":true,"v":"Heading"},{"_id":"1c49f961-c7ae-3192-f5f4-c65da2cec734","tag":"p","classes":[],"children":["1c49f961-c7ae-3192-f5f4-c65da2cec735"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"total"}]}},{"_id":"1c49f961-c7ae-3192-f5f4-c65da2cec735","text":true,"v":"23$"},{"_id":"5e971e400919cd25f13ccca6000000000051","tag":"div","classes":["70c23dc1-4306-429a-b870-69db3969ef0a"],"children":["5e971e400919cd25f13ccca6000000000052"],"type":"CommerceCheckoutOrderItemsList"},{"_id":"5e971e400919cd25f13ccca6000000000052","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000053","5e971e400919cd25f13ccca6000000000054","5e971e400919cd25f13ccca6000000000060"],"type":"CommerceCheckoutOrderItem"},{"_id":"5e971e400919cd25f13ccca6000000000053","tag":"img","classes":[],"children":[],"type":"CommerceCartItemImage","data":{"dyn":{"bind":{"src":[{"id":"","slug":"sku","type":"ItemRef"},{"id":"af01849a7cf2c4683e2be8d9220935d7","slug":"main-image","type":"ImageRef"},{"id":"url","slug":"url","type":"ImageRef"}]}}}},{"_id":"5e971e400919cd25f13ccca6000000000054","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000055","5e971e400919cd25f13ccca6000000000056","5e971e400919cd25f13ccca600000000005a"],"type":"CommerceCheckoutOrderItemDescriptionWrapper"},{"_id":"5e971e400919cd25f13ccca6000000000055","tag":"div","classes":[],"children":[],"type":"CommerceBoldTextBlock","data":{"text":true,"tag":"div","commerce":{"type":"cart-product-name"},"dyn":{"bind":{"innerHTML":[{"id":"","slug":"product","type":"ItemRef"},{"id":"61331ec17a4c340d19503092ff30796c","slug":"name","type":"PlainText"}]}}}},{"_id":"5e971e400919cd25f13ccca6000000000056","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000057","5e971e400919cd25f13ccca6000000000059"],"type":"CommerceCheckoutOrderItemQuantityWrapper","data":{"tag":"div"}},{"_id":"5e971e400919cd25f13ccca6000000000057","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000058"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5e971e400919cd25f13ccca6000000000058","text":true,"v":"Quantity:  "},{"_id":"5e971e400919cd25f13ccca6000000000059","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"count","type":"Number","filter":"numberPrecision|0|numberPrecision"}]}}}},{"_id":"5e971e400919cd25f13ccca600000000005a","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000005b"],"type":"CommerceCheckoutOrderItemOptionList","data":{"tag":"ul"}},{"_id":"5e971e400919cd25f13ccca600000000005b","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000005c","5e971e400919cd25f13ccca600000000005d","5e971e400919cd25f13ccca600000000005f"],"type":"CommerceCheckoutOrderItemOptionListItem","data":{"tag":"li"}},{"_id":"5e971e400919cd25f13ccca600000000005c","tag":"div","classes":[],"children":[],"type":"CommerceCheckoutOrderItemOptionListItemLabel","data":{"tag":"span","text":true}},{"_id":"5e971e400919cd25f13ccca600000000005d","tag":"span","classes":[],"children":["5e971e400919cd25f13ccca600000000005e"],"type":"Block","data":{"tag":"span","text":true}},{"_id":"5e971e400919cd25f13ccca600000000005e","text":true,"v":": "},{"_id":"5e971e400919cd25f13ccca600000000005f","tag":"div","classes":[],"children":[],"type":"CommerceCheckoutOrderItemOptionListItemValue","data":{"tag":"span","text":true}},{"_id":"5e971e400919cd25f13ccca6000000000060","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"rowTotal","type":"CommercePrice"}]}}}},{"_id":"5e971e400919cd25f13ccca6000000000061","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000062"],"type":"CommerceLayoutSidebar"},{"_id":"5e971e400919cd25f13ccca6000000000062","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000063","5e971e400919cd25f13ccca6000000000066"],"type":"CommerceCheckoutOrderSummaryWrapper"},{"_id":"5e971e400919cd25f13ccca6000000000063","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000064","a715460c-6b2d-2aab-f968-2ecc236885e2"],"type":"CommerceCheckoutSummaryBlockHeader"},{"_id":"5e971e400919cd25f13ccca6000000000064","tag":"h4","classes":[],"children":["5e971e400919cd25f13ccca6000000000065"],"type":"Heading","data":{"tag":"h4"}},{"_id":"5e971e400919cd25f13ccca6000000000065","text":true,"v":"Order Summary"},{"_id":"a715460c-6b2d-2aab-f968-2ecc236885e2","tag":"div","classes":[],"children":["a715460c-6b2d-2aab-f968-2ecc236885e3"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"order","value":"number"}]}},{"_id":"a715460c-6b2d-2aab-f968-2ecc236885e3","text":true,"v":"#1"},{"_id":"5e971e400919cd25f13ccca6000000000066","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000067","5e971e400919cd25f13ccca600000000006b","5e971e400919cd25f13ccca600000000006f"],"type":"CommerceCheckoutBlockContent"},{"_id":"5e971e400919cd25f13ccca6000000000067","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000068","5e971e400919cd25f13ccca600000000006a"],"type":"CommerceCheckoutSummaryLineItem"},{"_id":"5e971e400919cd25f13ccca6000000000068","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000069"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5e971e400919cd25f13ccca6000000000069","text":true,"v":"Subtotal"},{"_id":"5e971e400919cd25f13ccca600000000006a","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"subtotal","type":"CommercePrice"}]}},"xattr":[{"name":"order","value":"subtotal"}]}},{"_id":"5e971e400919cd25f13ccca600000000006b","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000006c"],"type":"CommerceCheckoutOrderSummaryExtraItemsList"},{"_id":"5e971e400919cd25f13ccca600000000006c","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca600000000006d","5e971e400919cd25f13ccca600000000006e"],"type":"CommerceCheckoutOrderSummaryExtraItemsListItem"},{"_id":"5e971e400919cd25f13ccca600000000006d","tag":"div","classes":[],"children":["f973de4f-2f11-c536-6bc5-5d76f3722acd"],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{}}}},{"_id":"f973de4f-2f11-c536-6bc5-5d76f3722acd","text":true,"v":"Taxes"},{"_id":"5e971e400919cd25f13ccca600000000006e","tag":"div","classes":[],"children":[],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"price","type":"CommercePrice"}]}},"xattr":[{"name":"order","value":"taxes"}]}},{"_id":"5e971e400919cd25f13ccca600000000006f","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000070","5e971e400919cd25f13ccca6000000000072"],"type":"CommerceCheckoutSummaryLineItem"},{"_id":"5e971e400919cd25f13ccca6000000000070","tag":"div","classes":[],"children":["5e971e400919cd25f13ccca6000000000071"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5e971e400919cd25f13ccca6000000000071","text":true,"v":"Total"},{"_id":"5e971e400919cd25f13ccca6000000000072","tag":"div","classes":[],"children":[],"type":"CommerceCheckoutSummaryTotal","data":{"tag":"div","text":true,"dyn":{"bind":{"innerHTML":[{"id":"","slug":"total","type":"CommercePrice"}]}},"xattr":[{"name":"order","value":"total"}]}}],"styles":[{"_id":"70c23dc1-4306-429a-b870-69db3969ef0a","fake":false,"type":"class","name":"Order Item List","namespace":"","comb":"","styleLess":"display: none;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Email

Is the email of the account that made the order, can be added on texts using the attribute:

<Attribute name="order" value="email" />

## Status

Is the status of the order: (completed, failed, etc) can be added on texts using the attribute:

<Attribute name="order" value="status" />

## Thank you Actions

This is a div where the thank you actions of woocommerce will be injected, (these actions are usefull if you are having issues with cart not being emptied after checkout),
add a div with attribute

<Attribute name="order" value="thank-you-actions" />

## Number

Is the order number, can be added on texts using the attribute:

<Attribute name="order" value="number" />

## Shipping Address

Is the shipping address of the customer can be added on texts using the attribute:

<Attribute name="order" value="shipping-address" />

## Billing Address

Is the billing address of the customer can be added on texts using the attribute:

<Attribute name="order" value="billing-address" />

## Payment Method

Is the payment method title used by the customer can be added on texts using the attribute:

<Attribute name="order" value="payment-method" />


## Shipping Method

Is the shipping method title chosen by the customer can be added on texts using the attribute:

<Attribute name="order" value="shipping-method" />


## Total

Is the total payed by the customer can be added on texts using the attribute:

<Attribute name="order" value="total" />

## Subtotal

Is the subtotal of the order and can be added on texts using the attribute:

<Attribute name="order" value="subtotal" />

## Taxes

Is the amount of taxes that have been collected for the order can be added on texts using the attribute:

<Attribute name="order" value="taxes" />


## Products

Is the list of the products purchased, note that the Product list added by Webflow is not exported in HTML, so you have to remove it and add a normal list instead with attribute:

<Attribute name="order" value="products" />

Inside the list item you can add the following elements:

#### Title

Is the title of the product and can be added on texts using the attribute:

<Attribute name="item" value="title" />

#### Price

Is the price of the product and can be added on texts using the attribute:

<Attribute name="item" value="price" />

#### Quantity

Is the quantity purchased of the product and can be added on texts using the attribute:

<Attribute name="item" value="quantity" />

#### Total

Is the total price of the product (price times quantity) and can be added on texts using the attribute:

<Attribute name="item" value="total" />

#### Featured Image

Is the featured image of the product and can be added on divs as background image or on img using the attribute:

<Attribute name="item" value="featured-image" />


