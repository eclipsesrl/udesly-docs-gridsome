---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/blog/pages/'
next: '/wordpress/blog/collection-item-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Archive Page Elements

These elements below can be used in all Archive pages regarding blog, so also in *Category, Specific Category, Tag, Specific Tag, Author Page, Specific Author*. [How to set pages here](/wordpress/blog/pages/).


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


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card" id="simple-post-card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Masonry Posts

Masonry posts is a way to connect several collection lists to a single query, in this case we can connect more than 1 collection list to the main query, that is the Archive query. Using several collection lists, allows you to style different posts of the same query with a different layout.

Create a div and add the attribute:

<Attribute name="blog" value="masonry-posts" />

Inside this div add any collection list wrapper you want (minimum 2), and on every collection list wrapper add the attribute:

<DynamicAttribute name="limit" value="number of posts in the collection" />

<CopyElement title="Masonry Posts">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f8d5deaf-4d4e-85a3-d309-7476141c4b0b","tag":"div","classes":["5278e8c0-a2ae-2f1c-e122-8edb0c382ff3"],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4824","e321d0d8-c70e-66b7-a2bf-1b99eee2cf82"],"type":"Block","data":{"tag":"div","xattr":[{"name":"blog","value":"masonry-posts"}]}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4824","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4825","0eac665f-ccde-2e4b-9fbc-b8ebfdab4827"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper","collection":null},"xattr":[{"name":"limit","value":"1"}]}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4825","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4826"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4826","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4827","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4828"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4828","tag":"div","classes":[],"children":["0eac665f-ccde-2e4b-9fbc-b8ebfdab4829"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"0eac665f-ccde-2e4b-9fbc-b8ebfdab4829","text":true,"v":"No items found."},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf82","tag":"div","classes":[],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf83","e321d0d8-c70e-66b7-a2bf-1b99eee2cf85"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper","collection":null},"xattr":[{"name":"limit","value":"4"}]}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf83","tag":"div","classes":["ef909f73-8187-9e95-40ee-aef868cfe3f2"],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf84"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf84","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf85","tag":"div","classes":[],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf86"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf86","tag":"div","classes":[],"children":["e321d0d8-c70e-66b7-a2bf-1b99eee2cf87"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e321d0d8-c70e-66b7-a2bf-1b99eee2cf87","text":true,"v":"No items found."}],"styles":[{"_id":"5278e8c0-a2ae-2f1c-e122-8edb0c382ff3","fake":false,"type":"class","name":"masonry posts","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"ef909f73-8187-9e95-40ee-aef868cfe3f2","fake":false,"type":"class","name":"Collection List 2","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":2,"paginationRemovedCount":2}}</CopyElement>

Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card" from="simple-post-card"></CopyElement>


## Breadcrumbs

Breadcrumbs is a navigational aid that allows visitors to understand their current location in the context of your archive page. To create them, you have to use a list with the attribute:

<Attribute name="blog" value="breadcrumbs" />

This list must have 3 item list inside that will have the following behaviour:

1. It must be a link and is the link to the parent category / tag;

2. Can be anything you want and it will be used as a separator;

3. It must be a text and it is the name of current category / tag;

<CopyElement title="Breadcrumbs">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"fce70f01-4f60-387f-ae55-6f47c9643b94","tag":"ul","classes":["16ff3455-fcbd-878e-41db-40e67e430caf"],"children":["fce70f01-4f60-387f-ae55-6f47c9643b95","fce70f01-4f60-387f-ae55-6f47c9643b96","fce70f01-4f60-387f-ae55-6f47c9643b97"],"type":"List","data":{"tag":"ul","list":{"type":"list","unstyled":true},"xattr":[{"name":"blog","value":"breadcrumbs"}]}},{"_id":"fce70f01-4f60-387f-ae55-6f47c9643b95","tag":"li","classes":[],"children":["f83f4aeb-876c-7a3e-7279-26103c4e4dee"],"type":"ListItem"},{"_id":"f83f4aeb-876c-7a3e-7279-26103c4e4dee","tag":"a","classes":[],"children":["f83f4aeb-876c-7a3e-7279-26103c4e4def"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"}}},{"_id":"f83f4aeb-876c-7a3e-7279-26103c4e4def","text":true,"v":"Parent category"},{"_id":"fce70f01-4f60-387f-ae55-6f47c9643b96","tag":"li","classes":[],"children":["bbaa937d-dcea-1a93-c30a-7116582415e1"],"type":"ListItem"},{"_id":"bbaa937d-dcea-1a93-c30a-7116582415e1","tag":"div","classes":[],"children":["bbaa937d-dcea-1a93-c30a-7116582415e2"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"bbaa937d-dcea-1a93-c30a-7116582415e2","text":true,"v":"/"},{"_id":"fce70f01-4f60-387f-ae55-6f47c9643b97","tag":"li","classes":[],"children":["64867c4e-fc73-bb18-5073-dd30fc9ac427"],"type":"ListItem"},{"_id":"64867c4e-fc73-bb18-5073-dd30fc9ac427","tag":"div","classes":[],"children":["7e7f2801-829c-0878-2d24-2f37c9f1fa34"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"7e7f2801-829c-0878-2d24-2f37c9f1fa34","text":true,"v":" Current category"}],"styles":[{"_id":"16ff3455-fcbd-878e-41db-40e67e430caf","fake":false,"type":"class","name":"Breadcrumbs","namespace":"","comb":"","styleLess":"display: flex;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Archive Categories and Tags

Archive Categories and Tags is a list of the categories and tags of the current archive. You can decide from Udesly > Settings > Blog > Categories, you have the option to decide what you want to show as categories:

1. All Categories, this means all the categories of the blog;
2. Only Childrens, this means all the sub categories of the current category. (In the main archive it will show all the categories);
3. Only Direct Childrens, this means all the direct sub categories of the current category. (In the main archive it will show all the first level categories).


To create Categories List add a Collection List Wrapper with the attribute:

<Attribute name="blog" value="categories" />

<CopyElement title="Blog Categories">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354b","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b3911354c","9b22c53c-80dd-57ad-365e-7e5b3911354e"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"categories"}]}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354c","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b3911354d"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354d","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354e","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b3911354f"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354f","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b39113550"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b39113550","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

To create instead a Tags List add a Collection List Wrapper with the attribute:

<Attribute name="blog" value="tags" />

<CopyElement title="Blog Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354b","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b3911354c","9b22c53c-80dd-57ad-365e-7e5b3911354e"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"tags"}]}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354c","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b3911354d"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354d","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354e","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b3911354f"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b3911354f","tag":"div","classes":[],"children":["9b22c53c-80dd-57ad-365e-7e5b39113550"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"9b22c53c-80dd-57ad-365e-7e5b39113550","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List Item you can add the following elements:

#### Title

Is the title of the category or tag, you can add it to texts or links, using the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0943b96-87ba-1539-1bce-1939d0846f2f","tag":"h3","classes":[],"children":["e0943b96-87ba-1539-1bce-1939d0846f30"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"e0943b96-87ba-1539-1bce-1939d0846f30","text":true,"v":"Title"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Permalink

This is the link to the category or tag, you can add it to links, using the attribute:

<Attribute name="item" value="permalink" />

<CopyElement title="Permalink">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"cb6fd907-bf87-44c1-705d-6fc567d8f3d1","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


#### Description

Is the description of the category/tag and can be added in WordPress following the path: Posts > Categories or Posts > Tags. You can add it to texts, using the attribute:

<Attribute name="item" value="description" />

<CopyElement title="Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8c729172-9ca1-21bb-ff6a-1c8216c08fbe","tag":"p","classes":[],"children":["8c729172-9ca1-21bb-ff6a-1c8216c08fbf"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"description"}]}},{"_id":"8c729172-9ca1-21bb-ff6a-1c8216c08fbf","text":true,"v":"description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured image can be added to images or divs as background and can be added in WordPress following the path: Posts > Categories or Posts > Tags. You have just to use the attribute:

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"cc263732-21cc-c8c4-07e1-e8c1b0b4e95d","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>