---
description: ''
sidebar: 'wordpress'
next: '/wordpress/blog/archive-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Archive Page Elements

These elements below can be used in all Archive pages regarding blog, so also in Category, Specific Category, Tag, Specific Tag, Author Page, Specific Author


## Archive Title

Archive Title is a dynamic text that you can use to inform users of the current page functionality, for example by default Archive Title on a category page will show 

 > Category: my category

To create it add the following attribute on a text element:

<Attribute name="blog" value="archive-title" />

You can further customize this text in WordPress, following the path Udesly > Settings > Blog

<CopyElement title="Archive Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"adf35800-e6be-2d9c-584f-d524e8a52613","tag":"h3","classes":["3eea56af-9773-d822-4851-d5b27ada6755"],"children":["adf35800-e6be-2d9c-584f-d524e8a52614"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"blog","value":"archive-title"}]}},{"_id":"adf35800-e6be-2d9c-584f-d524e8a52614","text":true,"v":"Archive Title"}],"styles":[{"_id":"3eea56af-9773-d822-4851-d5b27ada6755","fake":false,"type":"class","name":"Archive Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Archive Description

Archive description is a dynamic text that you can use to give a description of the current page.

To create it add the following attribute on a text element:

<Attribute name="blog" value="archive-description" />

You can further customize this text in WordPress, following the path Udesly > Settings > Blog for the main Archive, while for Categories and Tags you have to add description respectively Posts > Categories and Posts > Tags.

<CopyElement title="Archive Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"27e9f461-ca03-78ed-c9cc-b92df94b88c7","tag":"p","classes":["afc66b31-3334-19f5-5489-c88746486225"],"children":["27e9f461-ca03-78ed-c9cc-b92df94b88c8"],"type":"Paragraph","data":{"xattr":[{"name":"blog","value":"archive-description"}]}},{"_id":"27e9f461-ca03-78ed-c9cc-b92df94b88c8","text":true,"v":"Archive description"}],"styles":[{"_id":"afc66b31-3334-19f5-5489-c88746486225","fake":false,"type":"class","name":"Archive Description","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Archive Image

Archive Image is a dynamic image that will change based on the current archive, you can add featured image either to Archive page (from Pages section in WordPress) and Categories and Tags respectively from (Posts > Categories and Posts > Tags).

To create it add the following attribute on a Image element, or if you want to use it as background image to any other element (don't forget to add a placeholder image and stylize it, the archive image will follow that image style) :

<Attribute name="blog" value="archive-image" />

<CopyElement title="Archive Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"947be955-a271-b57f-386b-061db8b4c911","tag":"img","classes":["e308ef51-d7d6-b0e7-3ade-80e63170f1a8"],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"blog","value":"archive-image"}]}}],"styles":[{"_id":"e308ef51-d7d6-b0e7-3ade-80e63170f1a8","fake":false,"type":"class","name":"Archive Image","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Archive Posts

Archive Posts is the list of the posts of the current archive, you can enable pagination from the Webflow ⚙️ menu, pressing on *paginate elements*. However keep in mind that the number of posts per page is not defined in Webflow but in WordPress, following the path: Settings > Reading > Posts per Page.

To create an Archive posts list add the following attribute on a *Collection List Wrapper*:

<Attribute name="blog" value="archive-posts" />

<CopyElement title="Archive Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"archive-posts"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside Collection List item you can add all of the following elements to stylize your post, if you want, you can just copy a sample card and paste it inside a Collection List Item

<CopyElement title="Simple Post Card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to a post, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style).

To create a futured image just use the attribute

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>