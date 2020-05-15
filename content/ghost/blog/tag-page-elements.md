---
description: ''
sidebar: 'ghost'
prev: '/ghost/blog/misc-elements/'
next: '/ghost/blog/author-page-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Tag Page Elements

These elements below can be used in Tag Page. [How to set pages here](/ghost/blog/pages/#tag-page).


## Tag Name

This is the name of the current tag, use it on texts using the attribute:

<Attribute name="item" value="name" />

<CopyElement title="Tag Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"adf35800-e6be-2d9c-584f-d524e8a52613","tag":"h3","classes":["3eea56af-9773-d822-4851-d5b27ada6755"],"children":["adf35800-e6be-2d9c-584f-d524e8a52614"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"name"}]}},{"_id":"adf35800-e6be-2d9c-584f-d524e8a52614","text":true,"v":"Blog Title"}],"styles":[{"_id":"3eea56af-9773-d822-4851-d5b27ada6755","fake":false,"type":"class","name":"News","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Tag Description

This is the description of the current tag, use it on texts using the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Tag Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"description"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"tag description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Tag Featured Image

This is the featured image of the current tag, on images or divs you can use the attribute:

<Attribute name="item" value="featured-image" />

<CopyElement title="Tag Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Blog Articles

Blog Articles is the list of the posts of the current page, you can enable pagination from the Webflow ⚙️ menu, pressing on *paginate elements*. However keep in mind that the number of posts per page is not defined in Webflow but in Ghost Settings.

To create an Archive posts list add the following attribute on a *Collection List Wrapper*:

<Attribute name="blog" value="posts" />

<CopyElement title="Blog Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"archive-posts"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
    <g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/ghost/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

