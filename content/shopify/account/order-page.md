---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/reset-password-page/'
next: '/shopify/account/misc/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Order Page

To declare an Order Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="order" />

N.B: Since version 2.3.0 of the Adapter the *Order Confirmation Page* is automatically converted as Order Page, if you don't want to use that page add the attribute:

<Attribute name="page" value="remove" />

on the body element.

Inside this page you can add all of the following elements:

### Name

This is the name of the order, you can add it to any text element using the attribute:

<Attribute name="item" value="name" />

<CopyElement title="Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"name"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"#43"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Date

To add an indicator about the date of the order, you can add the following attribute:

<Attribute name="item" value="date" />

<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


The date format can be changed using the attribute:

<DynamicAttribute name="format" value="date format" />

Date accepts the same parameters as Ruby's strftime method. You can find a [list of the shorthand formats in Ruby's documentation](http://www.ruby-doc.org/core/Time.html#method-i-strftime) or use a site like [strfti.me](http://www.strfti.me/).

As Example if you set the attribute:

<Attribute name="format" value="%a, %b %d, %y" />

The date will be in the format: *Tue, Apr 22, 14*

### Cancelled Date

To add an indicator about the date of cancellation of the order, you can add the following attribute:

<Attribute name="item" value="cancelled-date" />

<CopyElement title="Cancelled Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"cancelled-date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

The date format can be changed using the attribute:

<DynamicAttribute name="format" value="date format" />

Date accepts the same parameters as Ruby's strftime method. You can find a [list of the shorthand formats in Ruby's documentation](http://www.ruby-doc.org/core/Time.html#method-i-strftime) or use a site like [strfti.me](http://www.strfti.me/).

As Example if you set the attribute:

<Attribute name="format" value="%a, %b %d, %y" />

The date will be in the format: *Tue, Apr 22, 14*


### Cancel Reason

The reason of cancellation if the order has been cancelled, you can add it to any text element using the attribute:

<Attribute name="item" value="cancel-reason" />

<CopyElement title="Cancel Reason">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"cancel-reason"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"Payment Declined"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Billing Address

The billing address of the customer, you can add it to any text element using the attribute:

<Attribute name="item" value="billing-address" />

<CopyElement title="Billing Address">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"billing-address"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"New York, 01200"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


### Shipping Address

The shipping address of the customer, you can add it to any text element using the attribute:

<Attribute name="item" value="shipping-address" />

<CopyElement title="Shipping Address">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"shipping-address"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"New York, 01200"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>



### Subtotal

This is the subtotal of the order, you can add it to any text element using the attribute:

<Attribute name="item" value="subtotal" />

<CopyElement title="Subtotal">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"subtotal"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"600$"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Total

This is the total of the order, you can add it to any text element using the attribute:

<Attribute name="item" value="total" />

<CopyElement title="Total">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"total"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"600$"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Financial Status

This is the financial status of the order (Paid, Unpaid), you can add it to any text element using the attribute:

<Attribute name="item" value="financial-status" />

<CopyElement title="Financial Status">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"financial-status"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"Paid"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Fulfillment Status

This is the fulfillment status of the order (Confirmed, Not Confirmed), you can add it to any text element using the attribute:

<Attribute name="item" value="fulfillment-status" />

<CopyElement title="Fulfillment Status">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"fulfillment-status"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"Confirmed"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Note

This returns the note associated with a customer order, you can add it to any text element using the attribute:

<Attribute name="item" value="note" />

<CopyElement title="Note">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"note"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"Order Notes"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Transactions

An order can have multiple transactions associated so add a div that will be repeated once for each transaction, on the div add the attribute:

<Attribute name="item" value="transactions" />

Inside this div you can add any of the following element, all on texts:

* **Gateway**:

<Attribute name="item" value="transaction-gateway" />

* **Card Company**:

<Attribute name="item" value="transaction-card-company" />

* **Card Number**:

<Attribute name="item" value="transaction-card-number" />

* **Status**

<Attribute name="item" value="transaction-status" />

* **Amount**

<Attribute name="item" value="transaction-amount" />

* **Date**

<Attribute name="item" value="transaction-date" />

The date format can be changed using the attribute:

<DynamicAttribute name="format" value="date format" />

Date accepts the same parameters as Ruby's strftime method. You can find a [list of the shorthand formats in Ruby's documentation](http://www.ruby-doc.org/core/Time.html#method-i-strftime) or use a site like [strfti.me](http://www.strfti.me/).

As Example if you set the attribute:

<Attribute name="format" value="%a, %b %d, %y" />

The date will be in the format: *Tue, Apr 22, 14*


### Taxes 

This is the taxes line wrapper, since you can have multiple tax lines inside Shopify, this element will be repeated once for tax line, add the following attribute on a div:

<Attribute name="item" value="taxes" />

Inside the div add 2 texts with respectively the attributes:

<Attribute name="item" value="tax-title" />

and 

<Attribute name="item" value="tax-price" />

<CopyElement title="Taxes Line">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d99b8263-ab8b-d6e5-c545-5559ddc820fb","tag":"div","classes":["cef96532-c129-eea1-d85d-ee9f8ae4ec24"],"children":["d99b8263-ab8b-d6e5-c545-5559ddc820fc","67e2910f-cc99-42f5-299c-d089461856d0"],"type":"CommerceCheckoutSummaryLineItem","data":{"xattr":[{"name":"item","value":"taxes"}]}},{"_id":"d99b8263-ab8b-d6e5-c545-5559ddc820fc","tag":"div","classes":[],"children":["813eab50-5822-fee8-a2bb-c05d6b3c8b8a"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"tax-title"}]}},{"_id":"813eab50-5822-fee8-a2bb-c05d6b3c8b8a","text":true,"v":"Tax Title"},{"_id":"67e2910f-cc99-42f5-299c-d089461856d0","tag":"div","classes":[],"children":["67e2910f-cc99-42f5-299c-d089461856d1"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"tax-price"}]}},{"_id":"67e2910f-cc99-42f5-299c-d089461856d1","text":true,"v":"Tax Value"}],"styles":[{"_id":"cef96532-c129-eea1-d85d-ee9f8ae4ec24","fake":false,"type":"class","name":"Total Line Item","namespace":"","comb":"","styleLess":"margin-bottom: 0px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Discounts 

This is the discounts line wrapper, since you can have multiple discount lines inside Shopify, this element will be repeated once for discount line, add the following attribute on a div:

<Attribute name="item" value="discounts" />

Inside the div add 2 texts with respectively the attributes:

<Attribute name="item" value="discount-code" />

and 

<Attribute name="item" value="discount-savings" />

<CopyElement title="Discounts Line">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d99b8263-ab8b-d6e5-c545-5559ddc820fb","tag":"div","classes":["cef96532-c129-eea1-d85d-ee9f8ae4ec24"],"children":["d99b8263-ab8b-d6e5-c545-5559ddc820fc","67e2910f-cc99-42f5-299c-d089461856d0"],"type":"CommerceCheckoutSummaryLineItem","data":{"xattr":[{"name":"item","value":"discounts"}]}},{"_id":"d99b8263-ab8b-d6e5-c545-5559ddc820fc","tag":"div","classes":[],"children":["813eab50-5822-fee8-a2bb-c05d6b3c8b8a"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"discount-code"}]}},{"_id":"813eab50-5822-fee8-a2bb-c05d6b3c8b8a","text":true,"v":"Discount Code"},{"_id":"67e2910f-cc99-42f5-299c-d089461856d0","tag":"div","classes":[],"children":["67e2910f-cc99-42f5-299c-d089461856d1"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"discount-savings"}]}},{"_id":"67e2910f-cc99-42f5-299c-d089461856d1","text":true,"v":"50%"}],"styles":[{"_id":"cef96532-c129-eea1-d85d-ee9f8ae4ec24","fake":false,"type":"class","name":"Total Line Item","namespace":"","comb":"","styleLess":"margin-bottom: 0px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Shippings 

This is the shipping line wrapper, since you can have multiple shipping lines inside Shopify, this element will be repeated once for shipping line, add the following attribute on a div:

<Attribute name="item" value="shippings" />

Inside the div add 2 texts with respectively the attributes:

<Attribute name="item" value="shipping-title" />

and 

<Attribute name="item" value="shipping-price" />

<CopyElement title="Shippings Line">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d99b8263-ab8b-d6e5-c545-5559ddc820fb","tag":"div","classes":["cef96532-c129-eea1-d85d-ee9f8ae4ec24"],"children":["d99b8263-ab8b-d6e5-c545-5559ddc820fc","67e2910f-cc99-42f5-299c-d089461856d0"],"type":"CommerceCheckoutSummaryLineItem","data":{"xattr":[{"name":"item","value":"shippings"}]}},{"_id":"d99b8263-ab8b-d6e5-c545-5559ddc820fc","tag":"div","classes":[],"children":["813eab50-5822-fee8-a2bb-c05d6b3c8b8a"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"shipping-title"}]}},{"_id":"813eab50-5822-fee8-a2bb-c05d6b3c8b8a","text":true,"v":"Shipping Title"},{"_id":"67e2910f-cc99-42f5-299c-d089461856d0","tag":"div","classes":[],"children":["67e2910f-cc99-42f5-299c-d089461856d1"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"shipping-price"}]}},{"_id":"67e2910f-cc99-42f5-299c-d089461856d1","text":true,"v":"50$"}],"styles":[{"_id":"cef96532-c129-eea1-d85d-ee9f8ae4ec24","fake":false,"type":"class","name":"Total Line Item","namespace":"","comb":"","styleLess":"margin-bottom: 0px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Items

This is the list of order items, you can use it on a Collection List Wrapper using the attribute:

<Attribute name="item" value="items" />

> ⚠️⚠️⚠️: Do not use the collection list that Webflow already adds on the Order Confirmation Page! That collection list is not exported in HTML!

<CopyElement title="Order Items List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"ea2a6d04-47ca-c1f3-1999-cb52d1a9ade8","tag":"div","classes":[],"children":["ea2a6d04-47ca-c1f3-1999-cb52d1a9ade9","ea2a6d04-47ca-c1f3-1999-cb52d1a9adeb"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"item","value":"items"}]}},{"_id":"ea2a6d04-47ca-c1f3-1999-cb52d1a9ade9","tag":"div","classes":[],"children":["ea2a6d04-47ca-c1f3-1999-cb52d1a9adea"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"ea2a6d04-47ca-c1f3-1999-cb52d1a9adea","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"ea2a6d04-47ca-c1f3-1999-cb52d1a9adeb","tag":"div","classes":[],"children":["ea2a6d04-47ca-c1f3-1999-cb52d1a9adec"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"ea2a6d04-47ca-c1f3-1999-cb52d1a9adec","tag":"div","classes":[],"children":["ea2a6d04-47ca-c1f3-1999-cb52d1a9aded"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"ea2a6d04-47ca-c1f3-1999-cb52d1a9aded","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the collection list item you can add the following elements:

#### Title

This is the item title and can be added on texts or links using the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cfac1ea-e68d-5b11-7018-c994f5b1e772","tag":"div","classes":[],"children":["3e921bcb-a051-17e0-666e-49810cd22d13"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"title"}]}},{"_id":"3e921bcb-a051-17e0-666e-49810cd22d13","text":true,"v":"Title"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Price

This is the single price of the item, can be added on texts using the attribute:

<Attribute name="item" value="item-price" />

<CopyElement title="Item Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cfac1ea-e68d-5b11-7018-c994f5b1e772","tag":"div","classes":[],"children":["3e921bcb-a051-17e0-666e-49810cd22d13"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"item-price"}]}},{"_id":"3e921bcb-a051-17e0-666e-49810cd22d13","text":true,"v":"$60"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Total

This is the total price paid for the item, can be added on texts using the attribute:

<Attribute name="item" value="total" />

<CopyElement title="Total Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cfac1ea-e68d-5b11-7018-c994f5b1e772","tag":"div","classes":[],"children":["3e921bcb-a051-17e0-666e-49810cd22d13"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"total"}]}},{"_id":"3e921bcb-a051-17e0-666e-49810cd22d13","text":true,"v":"$60"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Quantity

This is quantity bought for the product, can be added on texts using the attribute:

<Attribute name="item" value="quantity" />

<CopyElement title="Quantity">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cfac1ea-e68d-5b11-7018-c994f5b1e772","tag":"div","classes":[],"children":["3e921bcb-a051-17e0-666e-49810cd22d13"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"quantity"}]}},{"_id":"3e921bcb-a051-17e0-666e-49810cd22d13","text":true,"v":"3"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Sku

This is the sku of the product, can be added on texts using the attribute:

<Attribute name="item" value="sku" />

<CopyElement title="SKU">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3cfac1ea-e68d-5b11-7018-c994f5b1e772","tag":"div","classes":[],"children":["3e921bcb-a051-17e0-666e-49810cd22d13"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"sku"}]}},{"_id":"3e921bcb-a051-17e0-666e-49810cd22d13","text":true,"v":"sku"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

