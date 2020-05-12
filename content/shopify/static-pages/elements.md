---
sidebar: "shopify"
prev: "/shopify/static-pages/pages/"
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Dynamic Elements

Inside Template and Default Page you can add few dynamic elements that can be controlled inside the Shopify Dashboard.

## Title

This is the page title, can be added on any text by adding the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Page Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"37c99e13-8bca-3496-49d2-4f42b0f56e52","tag":"h1","classes":[],"children":["37c99e13-8bca-3496-49d2-4f42b0f56e53"],"type":"Heading","data":{"tag":"h1","xattr":[{"name":"item","value":"title"}]}},{"_id":"37c99e13-8bca-3496-49d2-4f42b0f56e53","text":true,"v":"Page Title"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Description

This is the page description, can be added on any text by adding the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Page Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"95587d4f-29e1-953a-91ad-04b1a9805927","tag":"p","classes":[],"children":["95587d4f-29e1-953a-91ad-04b1a9805928"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"description"}]}},{"_id":"95587d4f-29e1-953a-91ad-04b1a9805928","text":true,"v":"Page Description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Date

To add an indicator about the date of pubblication of the page, you can add respectively the following attributes:

<Attribute name="item" value="date" />

<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

The date format can be changed using the attribute:

<DynamicAttribute name="format" value="date format" />

Date accepts the same parameters as Ruby's strftime method. You can find a [list of the shorthand formats in Ruby's documentation](http://www.ruby-doc.org/core/Time.html#method-i-strftime) or use a site like [strfti.me](http://www.strfti.me/).

As Example if you set the attribute:

<Attribute name="format" value="%a, %b %d, %y" />

The date will be in the format: *Tue, Apr 22, 14*

#### Content

The content of your page can be added to any item, but for better styling is way better to add the following attribute on a RichText block:

<Attribute name="item" value="content" />

<CopyElement title="Page Content">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a6","tag":"div","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a7","3dbb0b79-5468-542b-7f6d-adaa1e3977a9","3dbb0b79-5468-542b-7f6d-adaa1e3977ab","3dbb0b79-5468-542b-7f6d-adaa1e3977ad","3dbb0b79-5468-542b-7f6d-adaa1e3977af","3dbb0b79-5468-542b-7f6d-adaa1e3977b1"],"type":"RichText","data":{"rich":true,"tag":"div","xattr":[{"name":"item","value":"content"}]}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a7","tag":"h2","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a8"],"type":"Heading","data":{"tag":"h2"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a8","text":true,"v":"What’s a Rich Text element?"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a9","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977aa"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977aa","text":true,"v":"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ab","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ac"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ac","text":true,"v":"Static and dynamic content editing"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ad","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ae"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ae","text":true,"v":"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977af","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b0"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b0","text":true,"v":"How to customize formatting for each rich text"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b1","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b2"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b2","text":true,"v":"Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>