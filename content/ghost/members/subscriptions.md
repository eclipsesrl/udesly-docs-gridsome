---
description: ""
sidebar: "ghost"
prev: "/ghost/members/"
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Subscriptions
You can turn your members into paying subscribers with straightforward subscriptions and start generating predictable revenue. Once you have a way for members to sign in to your site, you can then ask them to support your work with recurring subscriptions.

Subscriptions can be purchased in two different ways:

## Buy Monthly

Insert a link element and use the attribute:

<Attribute name="members" value="buy-monthly" />

<CopyElement title="Buy Monthly">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"ae1647b9-848a-39c3-60cd-9feee0aacbeb","tag":"a","classes":[],"children":["ae1647b9-848a-39c3-60cd-9feee0aacbec"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"members","value":"buy-monthly"}]}},{"_id":"ae1647b9-848a-39c3-60cd-9feee0aacbec","text":true,"v":"Buy Monthly"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Monthly Price

Insert a text element with the attribute:

<Attribute name="members" value="price-monthly" />


<CopyElement title="Monthly Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"members","value":"price-monthly"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"$15"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Buy Yearly

Insert a link element and use the attribute:

<Attribute name="members" value="buy-yearly" />

<CopyElement title="Buy Yearly">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"ae1647b9-848a-39c3-60cd-9feee0aacbeb","tag":"a","classes":[],"children":["ae1647b9-848a-39c3-60cd-9feee0aacbec"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"members","value":"buy-yearly"}]}},{"_id":"ae1647b9-848a-39c3-60cd-9feee0aacbec","text":true,"v":"Buy Yearly"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Yearly Price

Insert a text element with the attribute:

<Attribute name="members" value="price-yearly" />


<CopyElement title="Yearly Price">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"members","value":"price-yearly"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"$15"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Subscriptions List

This is the list of all the subscriptions that your customer bought! Insert a Collection List Wrapper and add the attribute:


<Attribute name="members" value="subscriptions" />

<CopyElement title="Subscriptions List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"d813cecf-2d94-a26e-a441-caee3d101d03","tag":"div","classes":[],"children":["d813cecf-2d94-a26e-a441-caee3d101d04","d813cecf-2d94-a26e-a441-caee3d101d06"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"members","value":"subscriptions"}]}},{"_id":"d813cecf-2d94-a26e-a441-caee3d101d04","tag":"div","classes":[],"children":["d813cecf-2d94-a26e-a441-caee3d101d05"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"d813cecf-2d94-a26e-a441-caee3d101d05","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"d813cecf-2d94-a26e-a441-caee3d101d06","tag":"div","classes":[],"children":["d813cecf-2d94-a26e-a441-caee3d101d07"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"d813cecf-2d94-a26e-a441-caee3d101d07","tag":"div","classes":[],"children":["d813cecf-2d94-a26e-a441-caee3d101d08"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"d813cecf-2d94-a26e-a441-caee3d101d08","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List item you can insert the following elements:

#### Subscription Id

You can add this attribute wherever you want and it will change the id of the element to the subscription id:

<Attribute name="item" value="id" />

#### Member Id

You can add this attribute wherever you want and it will change the id of the element to the member id:

<Attribute name="item" value="member-id" />

#### Plan Id

You can add this attribute wherever you want and it will change the id of the element to the plan id:

<Attribute name="item" value="plan-id" />

#### Member Name

This is the member name and can be added on any text using the attribute:

<Attribute name="item" value="member-name" />

<CopyElement title="Member Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"member-name"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"Member name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Member Email

This is the member email and can be added on any text using the attribute:

<Attribute name="item" value="member-email" />

<CopyElement title="Member Email">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"member-email"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"john.doe@email.com"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Plan Name

This is the plan name and can be added on any text using the attribute:

<Attribute name="item" value="plan-name" />

<CopyElement title="Plan Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"plan-name"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"Monthly"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Plan Interval

This is the plan interval and can be added on any text using the attribute:

<Attribute name="item" value="plan-interval" />

<CopyElement title="Plan Interval">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"plan-interval"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"Plan Interval"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Plan Currency

This is the plan currency and can be added on any text using the attribute:

<Attribute name="item" value="plan-currency" />

<CopyElement title="Plan currency">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"plan-currency"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"Plan currency"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Plan Amount

This is the plan amount and can be added on any text using the attribute:

<Attribute name="item" value="plan-amount" />

<CopyElement title="Plan amount">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"plan-amount"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"Plan amount"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Plan Status

This is the plan status and can be added on any text using the attribute:

<Attribute name="item" value="plan-status" />

<CopyElement title="Plan status">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"plan-status"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"Plan status"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Card Digits

This are the last 4 card digits used and can be added on any text using the attribute:

<Attribute name="item" value="card-digits" />

<CopyElement title="Card Digits">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"card-digits"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"**** 4444"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Start Date

To add an indicator about the start date of the plan, you can add respectively the following attributes:

<Attribute name="item" value="start-date" />

<CopyElement title="Start Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"start-date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can change the format by using the attribute:

<DynamicAttribute name="format" value="date format" />

Ghost uses [MomentJS library](https://momentjs.com/docs/#/displaying/format/) to handle dates, so you have to use MomentJS doc for date formatting.

#### Current Period End

To add an indicator about the current period end date of the plan, you can add respectively the following attributes:

<Attribute name="item" value="current-period-end" />

<CopyElement title="Current Period End">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"current-period-end"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can change the format by using the attribute:

<DynamicAttribute name="format" value="date format" />

Ghost uses [MomentJS library](https://momentjs.com/docs/#/displaying/format/) to handle dates, so you have to use MomentJS doc for date formatting.