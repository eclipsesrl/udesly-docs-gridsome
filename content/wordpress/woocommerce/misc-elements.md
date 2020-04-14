---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/blog/author-posts-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Misc Elements

These elements below can be used in all the pages you create.

## Archive Link

Archive Link is the link to the blog page.

To create it add the following attribute on a link element:

<Attribute name="blog" value="archive-link" />

<CopyElement title="Archive Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"02828a95-5586-7c1d-3334-1b71da4a70d3","tag":"a","classes":[],"children":["02828a95-5586-7c1d-3334-1b71da4a70d4"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"blog","value":"archive-link"}]}},{"_id":"02828a95-5586-7c1d-3334-1b71da4a70d4","text":true,"v":"Archive blog"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Category Link

This is the link to a specific category page, add the attribute on a link element:

<DynamicAttribute name="category-link" value="slug of the category" />

For example if your category is named *UX Events*

The attribute would be 

<Attribute name="category-link" value="ux-events" />

## Tag Link

This is the link to a specific tag page, add the attribute on a link element:

<DynamicAttribute name="tag-link" value="slug of the tag" />

For example if your tag is named *Android*

The attribute would be 

<Attribute name="tag-link" value="android" />

## Queried Posts

Queried posts is a list of posts that can be queried from your WordPress database. 
How this works? Well you have to create a *Post Query* to select your posts with several settings, for example: you can decide to show 4 posts of only 1 category, or you can filter them by Author and sort them in Alphabetical order. Post queries are created in WordPress following the path: Udesly > Post queries, each query you create will have a name that you decide, that name (not the name actually, but the slug) will be used in Webflow to associate the correct posts. It's just a matter of matching actually, you have to tell the adapter, in this collection list I want to show posts that are selected using the query that is named "bla-bla"

You can also enable pagination from the Webflow ⚙️ menu, pressing on *paginate elements*. However keep in mind that the number of posts per page is not defined in Webflow but in WordPress, in the Post Query configuration there is a tab called "count" where you can set the *posts per page*.

To create a Queried posts list add the following attribute on a *Collection List Wrapper*:

<DynamicAttribute name="blog:posts" value="slug of the query" />

For example if you created in WordPress a Post query called *Recents* you have to add the attribute:

<Attribute name="blog:posts" value="recents" />

Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

<CopyElement title="Queried Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog:posts","value":"recents"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

 
> ⚠️⚠️⚠️ 

> *Note that the list you copied is linked to a Post Query called "recents" that you have to create in WordPress, in order to make it work! Change the attribute value if you want to use a different Post Query.*

## Masonry Queried Posts

Masonry queried posts is a way to connect several collection lists to a single post query, the post query you want to use is defined by the slug that you insert in the attribute (Don't forget to create it in WordPress, following the path Udesly > Post Queries).
Using several collection lists, allows you to style different posts of the same query with a different layout.

Create a div and add the attribute:

<DynamicAttribute name="blog:masonry-posts" value="slug of the query" />

Inside this div add any collection list wrapper you want (minimum 2), and on every collection list wrapper add the attribute:

<DynamicAttribute name="limit" value="number of posts in the collection" />

<CopyElement title="Masonry Queried Posts">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f8d5deaf-4d4e-85a3-d309-7476141c4b0b","tag":"div","classes":["5278e8c0-a2ae-2f1c-e122-8edb0c382ff3"],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4824","e321d0d8-c70e-66b7-a2bf-1b99eee2cf82"],"type":"Block","data":{"tag":"div","xattr":[{"name":"blog:masonry-posts","value":"recents"}]}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4824","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4825","0eac665f-ccde-2e4b-9fbc-b8ebfdab4827"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper","collection":null},"xattr":[{"name":"limit","value":"1"}]}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4825","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4826"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4826","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4827","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4828"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4828","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4829"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4829","text":true,"v":"No items found."},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf82","tag":"div","classes":[],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf83","e321d0d8-c70e-66b7-a2bf-1b99eee2cf85"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper","collection":null},"xattr":[{"name":"limit","value":"4"}]}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf83","tag":"div","classes":["ef909f73-8187-9e95-40ee-aef868cfe3f2"],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf84"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf84","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf85","tag":"div","classes":[],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf86"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf86","tag":"div","classes":[],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf87"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf87","text":true,"v":"No items found."}],"styles":[{"_id":"5278e8c0-a2ae-2f1c-e122-8edb0c382ff3","fake":false,"type":"class","name":"masonry posts","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"ef909f73-8187-9e95-40ee-aef868cfe3f2","fake":false,"type":"class","name":"Collection List 2","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":2,"paginationRemovedCount":2}}</CopyElement>

> ⚠️⚠️⚠️ 

> *Note that the list you copied is linked to a Post Query called "recents" that you have to create in WordPress, in order to make it work! Change the attribute value if you want to use a different Post Query.*

Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Specific Post

Sometimes you need to feature up a specific post permanently in your site, to create a space for this post create a div and add the attribute:

<DynamicAttribute name="blog:specific-post" value="slug or id of the post" />

Inside the div you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Slider of Posts

If you want to show up your Queried Posts in a slider you have to add the following attribute on a slider:

<DynamicAttribute name="blog:slider" value="slug of the query" />

<CopyElement title="Slider of Posts">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a40c","tag":"div","classes":[],"children":["9b32e647-dadc-adf7-26ed-b9249ee8a40d","9b32e647-dadc-adf7-26ed-b9249ee8a410","9b32e647-dadc-adf7-26ed-b9249ee8a412","9b32e647-dadc-adf7-26ed-b9249ee8a414"],"type":"SliderWrapper","data":{"slider":{"navSpacing":3,"autoplay":false,"delay":4000,"iconArrows":true,"animation":"slide","easing":"ease","navRound":true,"disableSwipe":false,"duration":500,"infinite":true,"autoMax":0,"type":"wrapper"},"attr":{"data-animation":"slide","data-duration":"500","data-infinite":"1"},"xattr":[{"name":"blog:slider","value":"recents"}]}},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a40d","tag":"div","classes":[],"children":["9b32e647-dadc-adf7-26ed-b9249ee8a40e"],"type":"SliderMask","data":{"slider":{"type":"slides"}}},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a40e","tag":"div","classes":[],"children":["3cb833f6-6fcd-eea9-c7ca-096ebc340c25"],"type":"SliderSlide","data":{"tag":"div","slider":{"type":"slide"}}},{"_id":"3cb833f6-6fcd-eea9-c7ca-096ebc340c25","tag":"h1","classes":[],"children":["3cb833f6-6fcd-eea9-c7ca-096ebc340c26"],"type":"Heading","data":{"tag":"h1","xattr":[{"name":"item","value":"title"}]}},{"_id":"3cb833f6-6fcd-eea9-c7ca-096ebc340c26","text":true,"v":"Heading"},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a410","tag":"div","classes":[],"children":["9b32e647-dadc-adf7-26ed-b9249ee8a411"],"type":"SliderArrow","data":{"slider":{"type":"arrow","dir":"left"}}},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a411","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"slider-left"}}},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a412","tag":"div","classes":[],"children":["9b32e647-dadc-adf7-26ed-b9249ee8a413"],"type":"SliderArrow","data":{"slider":{"type":"arrow","dir":"right"}}},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a413","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"slider-right"}}},{"_id":"9b32e647-dadc-adf7-26ed-b9249ee8a414","tag":"div","classes":[],"children":[],"type":"SliderNav","data":{"slider":{"type":"nav"}}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

> ⚠️⚠️⚠️ 

> *Note that the slider you copied is linked to a Post Query called "recents" that you have to create in WordPress, in order to make it work! Change the attribute value if you want to use a different Post Query.*

Inside the Slider you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>