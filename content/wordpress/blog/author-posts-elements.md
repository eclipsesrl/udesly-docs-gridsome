---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/blog/single-page-elements/'
next: '/wordpress/blog/misc-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Author Posts Elements

These elements below can be used in *Author Page and Specific Author Page*. [How to set pages here](/wordpress/blog/pages/#authors-page)

Even if this page is actually a simple Archive Page there are few items that can be added only here.

## Author Posts

Archive Posts is the list of the posts created by the current author, you can enable pagination from the Webflow ⚙️ menu, pressing on *paginate elements*. However keep in mind that the number of posts per page is not defined in Webflow but in WordPress, following the path: Settings > Reading > Posts per Page.

To create an Archive posts list add the following attribute on a *Collection List Wrapper*:

<Attribute name="blog" value="archive-posts" />

<CopyElement title="Archive Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"archive-posts"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Author Data

In the whole page you can also use any data that is related to the author, You will find the elements dived on the element they can be used on: *Images*, *Texts* and *Links*.

##### Author Images

Actually the only Author data that can be used on images is the author Avatar, WordPress uses a system called Gravatar for its avatars, your authors can change the profile image creating an account on Gravatar using the same email. To show it, use an image or a div for background image with the attribute:

* Avatar

<Attribute name="item" value="avatar" />

<CopyElement title="Avatar">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"68542af0-35a3-cc2d-538b-6d7efe7b1490","tag":"img","classes":["c89459eb-0ec0-7faa-2818-9558933ee0e9"],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"item","value":"avatar"}]}}],"styles":[{"_id":"c89459eb-0ec0-7faa-2818-9558933ee0e9","fake":false,"type":"class","name":"Avatar","namespace":"","comb":"","styleLess":"display: block; width: 50px; height: 50px; border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; object-fit: cover;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

##### Author Texts

There are a lot of datas that can be used on text elements, they are pretty autoexplicative, just add the attributes you want to use on text elements:

* Display Name 
<Attribute name="item" value="author-display-name" />
<CopyElement title="Display Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-display-name"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Author display name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Nickname 
<Attribute name="item" value="author-nickname" />
<CopyElement title="Nickame">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-nickname"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Author nickname"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* First Name 
<Attribute name="item" value="author-first-name" />
<CopyElement title="First Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-first-name"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"First Name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Last Name 
<Attribute name="item" value="author-last-name" />
<CopyElement title="Last Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-last-name"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Last Name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Description
<Attribute name="item" value="author-description" />
<CopyElement title="Author Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"664b771d-8aac-c12b-e1d8-af4c08809f77","tag":"div","classes":[],"children":["dcc7edaa-5e1c-1eee-611e-9424f223fdb4"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"author-description"}]}},{"_id":"dcc7edaa-5e1c-1eee-611e-9424f223fdb4","text":true,"v":"Author Description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

##### Author Links

With Links instead we can use the link to the author page (that is the archive page with all the posts written by the author) and his social links. You can add social links in WordPress under the Users panel

* Email
<Attribute name="item" value="author-email" />
<CopyElement title="Author Email Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-email"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Email"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Facebook
<Attribute name="item" value="author-facebook" />
<CopyElement title="Author Facebook Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-facebook"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Facebook"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Linkedin
<Attribute name="item" value="author-linkedin" />
<CopyElement title="Author Linkedin Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-linkedin"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Linkedin"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Youtube
<Attribute name="item" value="author-youtube" />
<CopyElement title="Author Facebook Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-youtube"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Youtube"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Twitter
<Attribute name="item" value="author-twitter" />
<CopyElement title="Author Twitter Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-twitter"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Twitter"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Dribble
<Attribute name="item" value="author-dribble" />
<CopyElement title="Author dribble Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-dribble"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Dribble"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Instagram
<Attribute name="item" value="author-instagram" />
<CopyElement title="Author instagram Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-instagram"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Instagram"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

* Phone Number
<Attribute name="item" value="author-phone" />
<CopyElement title="Author phone Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db2","tag":"a","classes":[],"children":["f83c17f1-8955-9d03-ea68-b99798e27db3"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"author-phone"}]}},{"_id":"f83c17f1-8955-9d03-ea68-b99798e27db3","text":true,"v":"Phone"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>