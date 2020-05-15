---
description: ''
sidebar: 'ghost'
prev: '/ghost/blog/collection-item-elements/'
next: '/ghost/blog/misc-elements/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Post Page Elements

These are all the elements that you can add inside a Post Page [How to set pages here](/ghost/blog/pages/#post-page).


These are all the elements that you can add inside the collection item of a Blog Collection List Wrapper.

#### Title

The Title of the post can be added either to text elements or to link elements, if you use the latter it will also automatically link to the post page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d26","tag":"h3","classes":["73541726-af92-77b8-c48e-ff52d4b69d3d"],"children":["416478a9-2aed-7bc6-f0b6-1b4e859b7d27"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"416478a9-2aed-7bc6-f0b6-1b4e859b7d27","text":true,"v":"Post Title"}],"styles":[{"_id":"73541726-af92-77b8-c48e-ff52d4b69d3d","fake":false,"type":"class","name":"Post Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to a post, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the post page.

To create a futured image just use the attribute

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Url

The Url is simply the url to the current post page. Just add the attribute on a link element of any type:

<Attribute name="item" value="url" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"url"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Excerpt

The excerpt of the post (just as a reminder, the excerpt is a short summary of a post), can be added on any text element just adding the attribute:

<Attribute name="item" value="excerpt" />

<CopyElement title="Excerpt">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can add one of the following attributes:

<DynamicAttribute name="words" value="number of words" />

to limit the numbers of word, or:

<DynamicAttribute name="characters" value="number of characters" />

to limit the numbers of characters. Naturally you can't add both attributes.

#### Date

To add an indicator about the date of pubblication of the post, you can add respectively the following attributes:

<Attribute name="item" value="date" />

<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can change the format by using the attribute:

<DynamicAttribute name="format" value="date format" />

Ghost uses [MomentJS library](https://momentjs.com/docs/#/displaying/format/) to handle dates, so you have to use MomentJS doc for date formatting.

Or if you want to show the date with a time ago format, you just have to add:

<Attribute name="timeago" value="true" />


#### Published At

To add an indicator about the date of pubblication of the post, you can add respectively the following attributes:

<Attribute name="item" value="published-at" />

<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"published-at"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can change the format by using the attribute:

<DynamicAttribute name="format" value="date format" />

Ghost uses [MomentJS library](https://momentjs.com/docs/#/displaying/format/) to handle dates, so you have to use MomentJS doc for date formatting.

Or if you want to show the date with a time ago format, you just have to add:

<Attribute name="timeago" value="true" />

#### Updated At

To add an indicator about the date of last udpate of the post, you can add respectively the following attributes:

<Attribute name="item" value="updated-at" />

<CopyElement title="Update Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"updated-at"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can change the format by using the attribute:

<DynamicAttribute name="format" value="date format" />

Ghost uses [MomentJS library](https://momentjs.com/docs/#/displaying/format/) to handle dates, so you have to use MomentJS doc for date formatting.

Or if you want to show the date with a time ago format, you just have to add:

<Attribute name="timeago" value="true" />


#### Created At

To add an indicator about the date of pubblication of the post, you can add respectively the following attributes:

<Attribute name="item" value="created-at" />

<CopyElement title="Creation Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"created-at"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Optionally you can change the format by using the attribute:

<DynamicAttribute name="format" value="date format" />

Ghost uses [MomentJS library](https://momentjs.com/docs/#/displaying/format/) to handle dates, so you have to use MomentJS doc for date formatting.

Or if you want to show the date with a time ago format, you just have to add:

<Attribute name="timeago" value="true" />


#### Tags

This is the list of tags of the post add it on a text element, this element will get several links inside for each tag that is attached to the post. So be sure to stylize the default A in Webflow.
To use it use the attribute:

<Attribute name="item" value="tags" />

Optionally you can also add the following attribute to limit the number of tags to show:

<DynamicAttribute name="limit" value="number of tags" />

For example to show only first 3 tags add:

<Attribute name="limit" value="3" />

If you want to change the separator used you can add the attribute:

<DynamicAttribute name="separator" value="separator you want to use" />

For example:

<Attribute name="separator" value=", " />

<CopyElement title="Post Tags">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"tags"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"tag1, tag2"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Authors

This is the list of authors of the post add it on a text element, this element will get several links inside for each author that is attached to the post. So be sure to stylize the default A in Webflow.
To use it use the attribute:

<Attribute name="item" value="authors" />

Optionally you can also add the following attribute to limit the number of authors to show:

<DynamicAttribute name="limit" value="number of authors" />

For example to show only first 3 tags add:

<Attribute name="limit" value="3" />

If you want to change the separator used you can add the attribute:

<DynamicAttribute name="separator" value="separator you want to use" />

For example:

<Attribute name="separator" value=", " />

<CopyElement title="Post Authors">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"authors"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author1, author2"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Primary Tag

This is the main tag associated with a post.

#### Name

This is the name of the primary tag, you can add it on any text using the attribute:

<Attribute name="primary-tag" value="name" />

<CopyElement title="Primary Tag / Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"primary-tag","value":"name"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"tag name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Description

This is the description of the primary tag, you can add it on any text using the attribute:

<Attribute name="primary-tag" value="description" />

<CopyElement title="Primary Tag / Description">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"primary-tag","value":"description"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"tag description"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

This is the featured image of the primary tag, on images or divs you can use the attribute:

<Attribute name="primary-tag" value="featured-image" />

<CopyElement title="Primary Tag / Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"primary-tag","value":"featured-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Url

This is the url of the primary tag, you can add it on links using the attribute:

<Attribute name="primary-tag" value="url" />

<CopyElement title="Primary Tag / URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"primary-tag","value":"url"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Primary Author

This is the main author associated with a post.

#### Name

This is the name of the primary author, you can add it on any text using the attribute:

<Attribute name="primary-author" value="name" />

<CopyElement title="Primary Author / Name">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"primary-author","value":"name"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author name"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Bio

This is the bio of the primary author, you can add it on any text using the attribute:

<Attribute name="primary-author" value="bio" />

<CopyElement title="Primary Author / Bio">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"primary-author","value":"bio"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author bio"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Location

This is the location of the primary author, you can add it on any text using the attribute:

<Attribute name="primary-author" value="location" />

<CopyElement title="Primary Author / Location">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4721","tag":"div","classes":[],"children":["e0546a13-23b3-6ebf-a5d3-0fcebf3e4722"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"primary-author","value":"location"}]}},{"_id":"e0546a13-23b3-6ebf-a5d3-0fcebf3e4722","text":true,"v":"author location"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Url

This is the url of the primary author, you can add it on links using the attribute:

<Attribute name="primary-author" value="url" />

<CopyElement title="Primary Author / URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"primary-author","value":"url"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Profile Image

This is the profile image of the primary author, on images or divs you can use the attribute:

<Attribute name="primary-author" value="profile-image" />

<CopyElement title="Primary Author / Profile Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"primary-author","value":"profile-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Cover Image

This is the cover image of the primary author, on images or divs you can use the attribute:

<Attribute name="primary-author" value="cover-image" />

<CopyElement title="Primary Author / Cover Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"8732c7e2-568b-8fcd-d8fd-85773f80f628","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"primary-author","value":"cover-image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Twitter Url

This is the twitter url of the primary author, you can add it on links using the attribute:

<Attribute name="primary-author" value="twitter" />

<CopyElement title="Primary Author / Twitter URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"primary-author","value":"twitter"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Facebook Url

This is the facebook url of the primary author, you can add it on links using the attribute:

<Attribute name="primary-author" value="facebook" />

<CopyElement title="Primary Author / Facebook URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"primary-author","value":"facebook"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Website Url

This is the website url of the primary author, you can add it on links using the attribute:

<Attribute name="primary-author" value="website" />

<CopyElement title="Primary Author / Website URL">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"bbf21001-491c-cff7-2014-40eca4d1557c","tag":"a","classes":[],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"primary-author","value":"website"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Reading Time

This is an estimated reading time of the post of your blog, insert a text element with the attribute:

<Attribute name="item" value="reading-time" />


<CopyElement title="Reading Time">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"reading-time"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"13 min"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Prev Post Link

This is the link to the previous post, insert a link with the attribute:

<CopyElement title="Prev Post link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b2","tag":"a","classes":[],"children":["43a6e022-b8c1-6abd-a000-41d26c5f35b3"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"prev-post"}]}},{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b3","text":true,"v":"Prev Post"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Prev Post in Tag Link

This is the link to the previous post that has same tag then the current one, insert a link with the attribute:

<CopyElement title="Prev Post In Tag link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b2","tag":"a","classes":[],"children":["43a6e022-b8c1-6abd-a000-41d26c5f35b3"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"prev-post-in-tag"}]}},{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b3","text":true,"v":"Prev Post"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Next Post Link

This is the link to the next post, insert a link with the attribute:

<CopyElement title="Next Post link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b2","tag":"a","classes":[],"children":["43a6e022-b8c1-6abd-a000-41d26c5f35b3"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"next-post"}]}},{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b3","text":true,"v":"Next Post"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Next Post in Tag Link

This is the link to the next post that has same tag then the current one, insert a link with the attribute:

<CopyElement title="Next Post In Tag link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b2","tag":"a","classes":[],"children":["43a6e022-b8c1-6abd-a000-41d26c5f35b3"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"next-post-in-tag"}]}},{"_id":"43a6e022-b8c1-6abd-a000-41d26c5f35b3","text":true,"v":"Next Post"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Same Tag Posts

This is the list of posts that have the same tag. Insert a Collection List Wrapper and add the attribute:

<Attribute name="blog" value="same-tag" />

<CopyElement title="Same Tag Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"same-tag"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


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


## Same Author Posts

This is the list of posts that have the same author. Insert a Collection List Wrapper and add the attribute:

<Attribute name="blog" value="same-author" />

<CopyElement title="Same Author Posts List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog","value":"same-author"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


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
