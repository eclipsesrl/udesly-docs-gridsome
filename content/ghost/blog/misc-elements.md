---
description: ''
sidebar: 'ghost'
prev: '/ghost/blog/post-page-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Misc Elements

These elements below can be used in all the pages you create.

## Recent Posts

This is the list of latest posts. Insert a Collection List Wrapper and add the attribute:

<Attribute name="blog" value="recents" />

<CopyElement title="Recents Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"recents"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
    <g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/ghost/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

Optionally you can add the following attributes:

To choose the number of posts use:

<DynamicAttribute name="limit" value="number of posts" />

To change the order of posts use:

<DynamicAttribute name="order" value="order type" />

for example if you want to order by title use:

<DynamicAttribute name="order" value="title asc" />


## Featured Posts

This is the list of featured posts. Insert a Collection List Wrapper and add the attribute:

<Attribute name="blog" value="featured" />

<CopyElement title="Featured Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"featured"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
    <g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/ghost/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

Optionally you can add the following attributes:

To choose the number of posts use:

<DynamicAttribute name="limit" value="number of posts" />

To change the order of posts use:

<DynamicAttribute name="order" value="order type" />

for example if you want to order by title use:

<DynamicAttribute name="order" value="title asc" />


[Ghost Filters](https://ghost.org/docs/api/v3/handlebars-themes/helpers/get/#filter)

## Custom Filtered Posts

This is a list of custom filtered posts. Insert a Collection List Wrapper and add the attribute:

<DynamicAttribute name="blog" value="custom filter" />

Please read [Ghost Filters documentation](https://ghost.org/docs/api/v3/handlebars-themes/helpers/get/#filter) to understand how Ghost filters works!

<CopyElement title="Custom Filtered Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"primary_tag:blue"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

For example this List you cloned shows posts that have as primary tag a tag named "blue"


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
    <g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/ghost/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

Optionally you can add the following attributes:

To choose the number of posts use:

<DynamicAttribute name="limit" value="number of posts" />

To change the order of posts use:

<DynamicAttribute name="order" value="order type" />

for example if you want to order by title use:

<DynamicAttribute name="order" value="title asc" />


## All Tags / List of Tags

This is the list of all tags, on a Collection List Wrapper add the attribute:

<Attribute name="tags" value="all" />

or

<DynamicAttribute name="tags" value="number of tags" />

<CopyElement title="All Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"tags","value":"all"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List Item you can add the following elements:

#### Tag Name

This is the name of the current tag, use it on texts using the attribute:

<Attribute name="item" value="name" />

<CopyElement title="Tag Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"adf35800-e6be-2d9c-584f-d524e8a52613","tag":"h3","classes":["3eea56af-9773-d822-4851-d5b27ada6755"],"children":["adf35800-e6be-2d9c-584f-d524e8a52614"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"name"}]}},{"_id":"adf35800-e6be-2d9c-584f-d524e8a52614","text":true,"v":"Blog Title"}],"styles":[{"_id":"3eea56af-9773-d822-4851-d5b27ada6755","fake":false,"type":"class","name":"News","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Tag Description

This is the description of the current tag, use it on texts using the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Tag Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"description"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"tag description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Tag Featured Image

This is the featured image of the current tag, on images or divs you can use the attribute:

<Attribute name="item" value="featured-image" />

<CopyElement title="Tag Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Tag Url

This is the url to the tag page, you can add it on any link element using the attribute:

<Attribute name="item" value="url" />


## All Authors / List of Authors

This is the list of all tags, on a Collection List Wrapper add the attribute:

<Attribute name="authors" value="all" />

or

<DynamicAttribute name="authors" value="number of tags" />



<CopyElement title="All Authors">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"authors","value":"all"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List Item you can add the following elements:

#### Name

This is the name of the primary author, you can add it on any text using the attribute:

<Attribute name="item" value="name" />

<CopyElement title="Author Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"name"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Bio

This is the bio of the primary author, you can add it on any text using the attribute:

<Attribute name="item" value="bio" />

<CopyElement title="Author Bio">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"bio"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author bio"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Location

This is the location of the primary author, you can add it on any text using the attribute:

<Attribute name="item" value="location" />

<CopyElement title="Author Location">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"location"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author location"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Url

This is the url of the primary author, you can add it on links using the attribute:

<Attribute name="item" value="url" />

<CopyElement title="Author URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"url"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Profile Image

This is the profile image of the primary author, on images or divs you can use the attribute:

<Attribute name="item" value="profile-image" />

<CopyElement title="Author Profile Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"profile-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Cover Image

This is the cover image of the primary author, on images or divs you can use the attribute:

<Attribute name="item" value="cover-image" />

<CopyElement title="Author Cover Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"cover-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Twitter Url

This is the twitter url of the primary author, you can add it on links using the attribute:

<Attribute name="item" value="twitter" />

<CopyElement title="Author Twitter URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"twitter"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Facebook Url

This is the facebook url of the primary author, you can add it on links using the attribute:

<Attribute name="item" value="facebook" />

<CopyElement title="Author Facebook URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"facebook"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Website Url

This is the website url of the primary author, you can add it on links using the attribute:

<Attribute name="item" value="website" />

<CopyElement title="Author Website URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"website"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>