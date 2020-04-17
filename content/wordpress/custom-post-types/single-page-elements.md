---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/custom-post-types/collection-item-elements/'
next: '/wordpress/custom-post-types/misc-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Single Post Page Elements

These are all the elements that you can add inside a *Single Post Page*, a *Template for a Single Post Page* or a *Specific Post Page*. [How to set pages here](/wordpress/custom-post-types/pages/#single-post-page).

#### Title

The Title of the post can be added either to text elements or to link elements, if you use the latter it will also automatically link to the post page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c6b4f067-3af4-1330-4c25-9bce97ffa6d2","tag":"h3","classes":["59d95faf-ed7c-aa9e-a200-fc9ed1c49f21"],"children":["1b709ebe-fcec-5b0d-b42a-65daac3fc479"],"type":"Heading","data":{"tag":"h3"}},{"_id":"1b709ebe-fcec-5b0d-b42a-65daac3fc479","text":true,"v":"Post Title"}],"styles":[{"_id":"59d95faf-ed7c-aa9e-a200-fc9ed1c49f21","fake":false,"type":"class","name":"Post Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to a post, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the post page.

To create a futured image just use the attribute

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

to change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use:
<code class="value">full</code>, <code class="value">medium</code>, <code class="value">thumbnail</code>, <code class="value">larger</code> or <code class="dynamic-value">width, height</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300, 500" />

Please, mind the space between width and height.

#### Content

The content of your post can be set in WordPress backend using either the classic editor or Guthenberg. It can be added to any item, but for better styling is way better to add the following attribute on a RichText block:

<Attribute name="item" value="content" />

<CopyElement title="Post Content">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a6","tag":"div","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a7","3dbb0b79-5468-542b-7f6d-adaa1e3977a9","3dbb0b79-5468-542b-7f6d-adaa1e3977ab","3dbb0b79-5468-542b-7f6d-adaa1e3977ad","3dbb0b79-5468-542b-7f6d-adaa1e3977af","3dbb0b79-5468-542b-7f6d-adaa1e3977b1"],"type":"RichText","data":{"rich":true,"tag":"div","xattr":[{"name":"item","value":"content"}]}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a7","tag":"h2","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977a8"],"type":"Heading","data":{"tag":"h2"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a8","text":true,"v":"What’s a Rich Text element?"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977a9","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977aa"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977aa","text":true,"v":"The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content."},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ab","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ac"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ac","text":true,"v":"Static and dynamic content editing"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ad","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977ae"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977ae","text":true,"v":"A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977af","tag":"h4","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b0"],"type":"Heading","data":{"tag":"h4"}},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b0","text":true,"v":"How to customize formatting for each rich text"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b1","tag":"p","classes":[],"children":["3dbb0b79-5468-542b-7f6d-adaa1e3977b2"],"type":"Paragraph"},{"_id":"3dbb0b79-5468-542b-7f6d-adaa1e3977b2","text":true,"v":"Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the \"When inside of\" nested selector system."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Permalink

The permalink is simply the url to the current post page. Just add the attribute on a link element of any type:

<Attribute name="item" value="permalink" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Excerpt

The excerpt of the post (just as a reminder, the excerpt is a short summary of a post), can be added on any text element just adding the attribute:

<Attribute name="item" value="excerpt" />

You can further customize the excerpts following the path: Udesly > Settings > Blog > Excerpt, where you can set the number of words and the last word. However, keep in mind that for every posts you can also set a manual excerpt. You can find an excerpt meta box for every post in WordPress, and if it's not visible just click on "Screen Options" on the top screen and check excerpt.


<CopyElement title="Excerpt">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Date & Time

To add an indicator about the date or the time of pubblication of the post, you can add respectively the following attributes:

<Attribute name="item" value="date" />


<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

---

<Attribute name="item" value="time" />

<CopyElement title="Time">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"1afa500a-3a40-a6c2-4c44-9bdac57329ea","tag":"div","classes":["521f6863-124c-770a-28d3-fdd1c58bf1de"],"children":["1afa500a-3a40-a6c2-4c44-9bdac57329eb"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"time"}]}},{"_id":"1afa500a-3a40-a6c2-4c44-9bdac57329eb","text":true,"v":"12:05"}],"styles":[{"_id":"521f6863-124c-770a-28d3-fdd1c58bf1de","fake":false,"type":"class","name":"Time","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

The date and time format can be changed globally from WordPress Settings > General, respectively in sections named *Date format* and *Time Format*. However if you need to change the format locally for your current design needs you can add the optional attribute:

<DynamicAttribute name="format" value="date/time format" />

For the date/time format, WordPress uses the native PHP function, this the [complete format table](https://www.php.net/manual/en/function.date.php).

As Example if you set the attribute:

<Attribute name="format" value="F j, Y, g:i a" />

The date will be in the format: *March 10, 2020, 5:16 pm*

#### Taxonomies

This is the list of taxonomies of the post add it on a link element, this element will be repeated once for every category that is attached to the post. To use it use the attribute:

<Attribute name="item" value="taxonomies" />

and define the taxonomy with the attribute:

<DynamicAttribute name="taxonomy" value="taxonomy-name" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of taxonomies" />

For example to show only first 3 taxonomies add:

<Attribute name="limit" value="3" />

#### Author

Every post has one Author attached to it, an author has a lot of data that can be customized, let's see it in action! You will find the elements dived on the element they can be used on: *Images*, *Texts* and *Links*.

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

#### Internal Navigation

Long posts can be internally paginated, every time you want to create a new page for a post you have to add ```<!--nextpage-->``` comment inside the Post Content in WordPress. You can then create Links in webflow to navigate between pages. On links so you can add respectively:

<Attribute name="item" value="next-page" />

to navigate to the next page and

<Attribute name="item" value="prev-page" />

to navigate to the previous page.

<CopyElement title="Internal Navigation">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a3aa3459-444f-18d1-69cf-c202bb4766e1","tag":"div","classes":["cbd81967-1db7-dcf0-23e3-86a578e6bd82"],"children":["d8b54579-ca31-3a9a-08ac-adb5665508af","13ae03be-da08-497b-dcd2-d6cbd6599952"],"type":"Block","data":{"tag":"div"}},{"_id":"d8b54579-ca31-3a9a-08ac-adb5665508af","tag":"a","classes":[],"children":["3053f012-2a77-dfbc-6f77-6a40d8341cf5"],"type":"Link","data":{"button":true,"link":{"url":"#","mode":"external"},"style":{"base":{"main":{"noPseudo":{"alignSelf":"center","justifySelf":"center","gridColumnEnd":2,"gridColumnStart":1,"gridRowEnd":2,"gridRowStart":1}}}},"xattr":[{"name":"item","value":"prev-page"}],"attr":{"href":"#"}}},{"_id":"3053f012-2a77-dfbc-6f77-6a40d8341cf5","text":true,"v":"Previous Page"},{"_id":"13ae03be-da08-497b-dcd2-d6cbd6599952","tag":"a","classes":[],"children":["13ae03be-da08-497b-dcd2-d6cbd6599953"],"type":"Link","data":{"button":true,"link":{"url":"#","mode":"external"},"style":{"base":{"main":{"noPseudo":{"alignSelf":"center","justifySelf":"center","gridColumnEnd":3,"gridColumnStart":2,"gridRowEnd":2,"gridRowStart":1}}}},"xattr":[{"name":"item","value":"next-page"}],"attr":{"href":"#"}}},{"_id":"13ae03be-da08-497b-dcd2-d6cbd6599953","text":true,"v":"Next Page"}],"styles":[{"_id":"cbd81967-1db7-dcf0-23e3-86a578e6bd82","fake":false,"type":"class","name":"Div Block","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>
