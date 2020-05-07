---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/'
next: '/shopify/account/login-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Account Page

To declare an Account Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="account" />

Inside this page you can add all of the following elements:

## User Name

This is the user name of the currently logged in customer, can be used on any text using the attribute:

<Attribute name="account" value="user-name" />

<CopyElement title="User Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-name"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"user name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## First Name

This is the first name of the currently logged in customer, can be used on any text using the attribute:

<Attribute name="account" value="user-first-name" />

<CopyElement title="First Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-first-name"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"first name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Last Name

This is the first name of the currently logged in customer, can be used on any text using the attribute:

<Attribute name="account" value="user-last-name" />

<CopyElement title="Last Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-last-name"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"last name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Email

This is the email of the currently logged in customer, can be used on any text using the attribute:

<Attribute name="account" value="user-email" />

<CopyElement title="Email">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-email"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"email"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Orders Count

This is the number of orders made by your user, can be used on any text using the attribute:

<Attribute name="account" value="user-orders-count" />

<CopyElement title="Orders Count">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-orders-count"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"3"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Default Address

Shopify gives you the opportunity to add several shipping addresses and set one of them as main address: this is the **default address**, you can use it on any text element using the attribute:

<Attribute name="account" value="user-default-address" />

<CopyElement title="Default Address">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-default-address"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"default address"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Total Spent

This is the total spent by the customer on the shop, you can use it on any text element using the attribute:

<Attribute name="account" value="user-total-spent" />

<CopyElement title="Total Spent">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e94c7179-b446-9c0f-c1b4-a38900661404","tag":"div","classes":[],"children":["e94c7179-b446-9c0f-c1b4-a38900661405"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"account","value":"user-total-spent"}]}},{"_id":"e94c7179-b446-9c0f-c1b4-a38900661405","text":true,"v":"85$"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Orders

This is the list of orders made up by your customer, insert a *Collection List Wrapper* and add the attribute:

<Attribute name="account" value="orders" />

The list can be paginated enabling pagination in Webflow, and the number of orders per page can be modified from Shopify following the path Shopify > Online Store > Themes > Customize.

<CopyElement title="Orders List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d9d6b552-17e5-ad05-71b0-90814051239c","tag":"div","classes":[],"children":["d9d6b552-17e5-ad05-71b0-90814051239d","d9d6b552-17e5-ad05-71b0-90814051239f"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"account","value":"orders"}]}},{"_id":"d9d6b552-17e5-ad05-71b0-90814051239d","tag":"div","classes":[],"children":["d9d6b552-17e5-ad05-71b0-90814051239e"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"d9d6b552-17e5-ad05-71b0-90814051239e","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"d9d6b552-17e5-ad05-71b0-90814051239f","tag":"div","classes":[],"children":["d9d6b552-17e5-ad05-71b0-9081405123a0"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"d9d6b552-17e5-ad05-71b0-9081405123a0","tag":"div","classes":[],"children":["d9d6b552-17e5-ad05-71b0-9081405123a1"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"d9d6b552-17e5-ad05-71b0-9081405123a1","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the collection list item you can add the following items, that are divided by type

#### Texts

The following elements can all be added on text elements

* **Name**

Name of the order:

<Attribute name="item" value="name" />

<CopyElement title="Order Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"67503ecd-4315-cf47-1613-b911843385e9","tag":"div","classes":[],"children":["67503ecd-4315-cf47-1613-b911843385ea"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"name"}]}},{"_id":"67503ecd-4315-cf47-1613-b911843385ea","text":true,"v":"#43"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* **Date**

Date of the order:

<Attribute name="item" value="date" />

<CopyElement title="Order Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eabf","tag":"div","classes":[],"children":["eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0","text":true,"v":"25/01/2020"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* **Payment Status**

Status of the payment:

<Attribute name="item" value="payment-status" />

<CopyElement title="Order Payment Status">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eabf","tag":"div","classes":[],"children":["eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"payment-status"}]}},{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0","text":true,"v":"Paid"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* **Fulfillment Status**

Status of the order (Shipped/In preparation, etc..):

<Attribute name="item" value="fulfillment-status" />

<CopyElement title="Order Fulfillment Status">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eabf","tag":"div","classes":[],"children":["eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"fulfillment-status"}]}},{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0","text":true,"v":"Shipped"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


* **Total**

Is the total spent for the order

<Attribute name="item" value="total" />

<CopyElement title="Order Total">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eabf","tag":"div","classes":[],"children":["eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"total"}]}},{"_id":"eefe8fd7-cc53-4a3a-8ccb-d6be5973eac0","text":true,"v":"65$"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Links

The elements below can be added on link elements

* **Link**

Link to the order page

<Attribute name="item" value="link" />

<CopyElement title="Order Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"effda7a1-10d8-57f4-8f19-80fe6aed407a","tag":"a","classes":[],"children":["67503ecd-4315-cf47-1613-b911843385e9"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"link"}]}},{"_id":"67503ecd-4315-cf47-1613-b911843385e9","tag":"div","classes":[],"children":["67503ecd-4315-cf47-1613-b911843385ea"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"name"}]}},{"_id":"67503ecd-4315-cf47-1613-b911843385ea","text":true,"v":"#43"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>
