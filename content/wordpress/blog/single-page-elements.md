---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/blog/collection-item-elements/'
next: '/wordpress/blog/author-posts-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Single Post Page Elements

These are all the elements that you can add inside a *Single Post Page*, a *Template for a Single Post Page* or a *Specific Post Page*. [How to set pages here](/wordpress/blog/pages/#single-post-page).

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

#### Main Category

Thanks to the Udesly plugin, you can select a Main Category attached to each post, you can create with these feature a simple *tag* button that links to the main category of the post, just add on a link the following attribute:

<Attribute name="item" value="main-category" />

Don't forget to set up the main category in each post, it's not automatic.

<CopyElement title="Main Category">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"2f499506-050a-ec28-85aa-c217ab8dae01","tag":"a","classes":[],"children":["2f499506-050a-ec28-85aa-c217ab8dae02"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"main-category"}]}},{"_id":"2f499506-050a-ec28-85aa-c217ab8dae02","text":true,"v":"Main Category"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Categories

This is the list of categories of the post add it on a link element, this element will be repeated once for every category that is attached to the post. To use it use the attribute:

<Attribute name="item" value="categories" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of categories" />

For example to show only first 3 categories add:

<Attribute name="limit" value="3" />

<CopyElement title="Post Categories">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047a","tag":"a","classes":[],"children":["0520c69d-33a7-eb90-7817-ab11b0df047b"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"categories"}]}},{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047b","text":true,"v":"Category Link"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Tags

This is the list of tags of the post add it on a link element, this element will be repeated once for every category that is attached to the post. To use it use the attribute:

<Attribute name="item" value="tags" />

Optionally you can also add the following attribute to limit the number of categories to show:

<DynamicAttribute name="limit" value="number of tags" />

For example to show only first 3 tags add:

<Attribute name="limit" value="3" />

<CopyElement title="Post Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047a","tag":"a","classes":[],"children":["0520c69d-33a7-eb90-7817-ab11b0df047b"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"tags"}]}},{"_id":"0520c69d-33a7-eb90-7817-ab11b0df047b","text":true,"v":"Tag Link"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

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

#### Previous and Next Posts

Sometimes it can be usefull to enhance your users engagement to add datas for next and previous posts.

To create them, just add a div with respectively:

<Attribute name="item" value="next-post" />

to create a space for the next post and 

<Attribute name="item" value="prev-post" />

to create a space for the previous post.

Inside this divs you can add the following elements:

##### Title

On texts you can add the attribute:

<Attribute name="item" value="title" />

##### Featured Image

On images or divs you can add instead the attribute:

<Attribute name="item" value="featured-image" />

##### Excerpt

If you want on texts you can add the attribute:

<Attribute name="item" value="excerpt" />

##### Permalink

On Links instead you can add the attribute:

<Attribute name="item" value="permalink" />

<CopyElement title="Next and Prev Posts">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0db83c0f-1ae6-af6f-440e-0f82a713ae73","tag":"div","classes":["38e4f140-3c95-341b-d5ae-00dca98023d5"],"children":["3a2931c7-c251-c694-0f0c-17790ea17398","04d63fce-c3cd-932d-83cb-df5bbc39b273"],"type":"Block","data":{"tag":"div"}},{"_id":"3a2931c7-c251-c694-0f0c-17790ea17398","tag":"div","classes":["a1ab489c-b6f1-b2bc-89f2-60a7e4a2b6e3"],"children":["cdcf4d49-0f83-72fa-0951-c4cd174a766d"],"type":"Block","data":{"tag":"div","style":{"base":{"main":{"noPseudo":{"gridColumnEnd":2,"gridColumnStart":1,"gridRowEnd":2,"gridRowStart":1,"alignSelf":"center","justifySelf":"center"}}}},"xattr":[{"name":"item","value":"prev-post"}]}},{"_id":"cdcf4d49-0f83-72fa-0951-c4cd174a766d","tag":"a","classes":[],"children":["3985bdd9-e1ce-9baa-025e-3708f5c98320"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"3985bdd9-e1ce-9baa-025e-3708f5c98320","tag":"h4","classes":[],"children":["3985bdd9-e1ce-9baa-025e-3708f5c98321"],"type":"Heading","data":{"tag":"h4","xattr":[{"name":"item","value":"title"}]}},{"_id":"3985bdd9-e1ce-9baa-025e-3708f5c98321","text":true,"v":"Prev Post Title"},{"_id":"04d63fce-c3cd-932d-83cb-df5bbc39b273","tag":"div","classes":["6a48bba1-deb5-5baa-926d-edf2052aaef9"],"children":["f4abb3fd-461a-c2a4-1c13-0cf79266b1b9"],"type":"Block","data":{"tag":"div","style":{"base":{"main":{"noPseudo":{"gridColumnEnd":3,"gridColumnStart":2,"gridRowEnd":2,"gridRowStart":1,"alignSelf":"center","justifySelf":"center"}}}},"xattr":[{"name":"item","value":"next-post"}]}},{"_id":"f4abb3fd-461a-c2a4-1c13-0cf79266b1b9","tag":"a","classes":[],"children":["f4abb3fd-461a-c2a4-1c13-0cf79266b1ba"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"f4abb3fd-461a-c2a4-1c13-0cf79266b1ba","tag":"h4","classes":[],"children":["f4abb3fd-461a-c2a4-1c13-0cf79266b1bb"],"type":"Heading","data":{"tag":"h4","xattr":[{"name":"item","value":"title"}]}},{"_id":"f4abb3fd-461a-c2a4-1c13-0cf79266b1bb","text":true,"v":"Next Post Title"}],"styles":[{"_id":"38e4f140-3c95-341b-d5ae-00dca98023d5","fake":false,"type":"class","name":"Adjacent Posts","namespace":"","comb":"","styleLess":"display: grid; justify-content: center; align-content: center; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null},{"_id":"a1ab489c-b6f1-b2bc-89f2-60a7e4a2b6e3","fake":false,"type":"class","name":"Previous Post","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"6a48bba1-deb5-5baa-926d-edf2052aaef9","fake":false,"type":"class","name":"Next Post","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Comments

The comments structure is pretty complex so read carefully all the steps:

1. Create a div and add the attribute:

<Attribute name="blog" value="comments" />

2. Add a Form with at least 1 input type text, 1 textarea, a label and a submit button, this will be the form used to to create a new comment.

3. Add an Unordered List, this list will be nested automatically so be sure to add a little padding on the left to allow a better cascading.

4. Inside the first list item you can add the following elements to customize your comment:

* Author

This is the name of the author of the comment and can be added on texts using the attribute:

<Attribute name="item" value="author" />

* Author Email

This is the email of the author of the comment can be added on texts or links using the attribute:

<Attribute name="item" value="author-email" />

* Text

This is the value of the comment can be added on texts using the attribute:

<Attribute name="item" value="text" />

* Reply Link

It's the link that will allow you to reply to a comment, add on a link the attribute:

<Attribute name="item" value="reply-link" />

* Date

This is the date of the comment can be added on texts using the attribute:

<Attribute name="item" value="date" />

* Avatar

It's the avatar of the author of the comment, can be added on a div or an image using the attribute: 

<Attribute name="item" value="avatar" />

Note that the avatar can be set only using Gravatar


5. Add pagination links using respectively:

<Attribute name="item" value="previous-comments" />

and

<Attribute name="item" value="next-comments" />

<CopyElement title="Blog Comments">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0e34e0fd-6c09-49f6-d716-9e6af78553eb","tag":"div","classes":["4eaff450-2e43-327c-c58f-f1621912249e"],"children":["1c49e767-7864-933a-4ad4-70660f3f3061","7cc4f369-65a9-f5f2-30d8-766634f6a250"],"type":"Block","data":{"tag":"div","xattr":[{"name":"blog","value":"comments"}]}},{"_id":"1c49e767-7864-933a-4ad4-70660f3f3061","tag":"ul","classes":["2bddff17-8d49-0c5a-04f9-4770d4c48d4e"],"children":["1c49e767-7864-933a-4ad4-70660f3f3062"],"type":"List","data":{"tag":"ul","list":{"type":"list","unstyled":true}}},{"_id":"1c49e767-7864-933a-4ad4-70660f3f3062","tag":"li","classes":["650f10e0-4217-03ad-3d5d-7e5d9728e745"],"children":["0ef0d32e-ad25-f90e-6506-661a072667da","4fb4d076-6b03-4e98-ac9c-46f89a6a484d"],"type":"ListItem"},{"_id":"0ef0d32e-ad25-f90e-6506-661a072667da","tag":"div","classes":["d9d9a6a6-efe5-973a-9920-d17d47e9f962"],"children":[],"type":"Block","data":{"tag":"div","xattr":[{"name":"item","value":"avatar"}]}},{"_id":"4fb4d076-6b03-4e98-ac9c-46f89a6a484d","tag":"div","classes":["20794392-2ab1-33cf-9a29-a30d4d400eea"],"children":["c526e879-09ac-408f-5f7f-a98a25c69e1f","65847810-21ad-99d6-66bc-909f3e676089","c503e58a-b23a-b4d7-b7c5-f7180d0b5e51"],"type":"Block","data":{"tag":"div"}},{"_id":"c526e879-09ac-408f-5f7f-a98a25c69e1f","tag":"h5","classes":[],"children":["c526e879-09ac-408f-5f7f-a98a25c69e20"],"type":"Heading","data":{"tag":"h5","xattr":[{"name":"item","value":"author"}]}},{"_id":"c526e879-09ac-408f-5f7f-a98a25c69e20","text":true,"v":"Heading"},{"_id":"65847810-21ad-99d6-66bc-909f3e676089","tag":"p","classes":[],"children":["65847810-21ad-99d6-66bc-909f3e67608a"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"text"}]}},{"_id":"65847810-21ad-99d6-66bc-909f3e67608a","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."},{"_id":"c503e58a-b23a-b4d7-b7c5-f7180d0b5e51","tag":"a","classes":[],"children":["c503e58a-b23a-b4d7-b7c5-f7180d0b5e52"],"type":"Link","data":{"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"reply-link"}]}},{"_id":"c503e58a-b23a-b4d7-b7c5-f7180d0b5e52","text":true,"v":"Reply"},{"_id":"7cc4f369-65a9-f5f2-30d8-766634f6a250","tag":"div","classes":["07aeae4e-5f30-3953-386c-9533532ad18e"],"children":["7e49d5f6-15dc-45c9-9ff0-8b483f806ebe","d0abfb1e-b11d-d509-74d0-1144c10a4069","d01689eb-6319-006b-bfb8-1e1d35968a53"],"type":"Block","data":{"tag":"div"}},{"_id":"7e49d5f6-15dc-45c9-9ff0-8b483f806ebe","tag":"a","classes":[],"children":["7e49d5f6-15dc-45c9-9ff0-8b483f806ebf"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"previous-comments"}]}},{"_id":"7e49d5f6-15dc-45c9-9ff0-8b483f806ebf","text":true,"v":"Previous Page"},{"_id":"d0abfb1e-b11d-d509-74d0-1144c10a4069","tag":"a","classes":[],"children":["d0abfb1e-b11d-d509-74d0-1144c10a406a"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"next-comments"}]}},{"_id":"d0abfb1e-b11d-d509-74d0-1144c10a406a","text":true,"v":"Next Page"},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a53","tag":"div","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a54","d01689eb-6319-006b-bfb8-1e1d35968a5c","d01689eb-6319-006b-bfb8-1e1d35968a5f"],"type":"FormWrapper","data":{"form":{"type":"wrapper"}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a54","tag":"form","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a55","d01689eb-6319-006b-bfb8-1e1d35968a57","0bb55b88-beca-7dd1-86db-644a42fb857f","d01689eb-6319-006b-bfb8-1e1d35968a5b"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a55","tag":"label","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a56"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"name"}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a56","text":true,"v":"Name"},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a57","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"name","data-name":"Name","placeholder":"","type":"text","id":"name","disabled":false,"required":false},"form":{"type":"input","name":"Name"}}},{"_id":"0bb55b88-beca-7dd1-86db-644a42fb857f","tag":"textarea","classes":[],"children":[],"type":"FormTextarea","data":{"attr":{"placeholder":"Example Text","maxlength":5000,"id":"field","name":"field"},"form":{"type":"textarea","name":"Field"}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a5b","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a5c","tag":"div","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a5d"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a5d","tag":"div","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a5e"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a5e","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a5f","tag":"div","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a60"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a60","tag":"div","classes":[],"children":["d01689eb-6319-006b-bfb8-1e1d35968a61"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"d01689eb-6319-006b-bfb8-1e1d35968a61","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[{"_id":"4eaff450-2e43-327c-c58f-f1621912249e","fake":false,"type":"class","name":"Comments","namespace":"","comb":"","styleLess":"padding-right: 60px; padding-left: 20px;","variants":{},"children":[],"selector":null},{"_id":"2bddff17-8d49-0c5a-04f9-4770d4c48d4e","fake":false,"type":"class","name":"List","namespace":"","comb":"","styleLess":"margin-left: 0px; padding-left: 40px;","variants":{},"children":[],"selector":null},{"_id":"650f10e0-4217-03ad-3d5d-7e5d9728e745","fake":false,"type":"class","name":"Comment","namespace":"","comb":"","styleLess":"display: flex;","variants":{},"children":[],"selector":null},{"_id":"d9d9a6a6-efe5-973a-9920-d17d47e9f962","fake":false,"type":"class","name":"avatar","namespace":"","comb":"","styleLess":"width: 50px; height: 50px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; background-image: @img_example_bg; background-position: 50% 50%; background-size: cover; background-repeat: no-repeat;","variants":{},"children":[],"selector":null},{"_id":"20794392-2ab1-33cf-9a29-a30d4d400eea","fake":false,"type":"class","name":"Div Block 2","namespace":"","comb":"","styleLess":"padding-top: 8px; padding-right: 8px; padding-bottom: 8px; padding-left: 8px; flex-grow: 1; flex-shrink: 1; flex-basis: 0%;","variants":{},"children":[],"selector":null},{"_id":"07aeae4e-5f30-3953-386c-9533532ad18e","fake":false,"type":"class","name":"Div Block 3","namespace":"","comb":"","styleLess":"padding-left: 40px;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>