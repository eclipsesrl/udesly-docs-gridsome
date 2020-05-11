---
description: ''
sidebar: 'shopify'
next: '/shopify/search/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Search Page

The Search page is automatically created by Webflow and automatically converted. Inside Search page you can add all of the following elements:

## Results Count

This is the number of the results found for the search.

<Attribute name="search" value="results-count" />

<CopyElement title="Search Results Count">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f478e145-fa4f-7c0d-598a-283fe8704fba","tag":"div","classes":[],"children":["f478e145-fa4f-7c0d-598a-283fe8704fbb"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"search","value":"results-count"}]}},{"_id":"f478e145-fa4f-7c0d-598a-283fe8704fbb","text":true,"v":"4"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Terms

This element is simply the value searched by your customer, usually is used in phrases like: "You searched for, {terms}".
You can use it on text elements using attribute:

<Attribute name="search" value="terms" />

<CopyElement title="Search Terms">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f478e145-fa4f-7c0d-598a-283fe8704fba","tag":"div","classes":[],"children":["f478e145-fa4f-7c0d-598a-283fe8704fbb"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"search","value":"terms"}]}},{"_id":"f478e145-fa4f-7c0d-598a-283fe8704fbb","text":true,"v":"terms"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Results 

This is the list of results found.

> ⚠️⚠️⚠️: You can't use the search results already inserted in the page by Webflow, 
> because they are not exported inside HTML! You have to hide them and use a normal Collection List 
> Wrapper


So, insert a Collection List Wrapper with attribute:

<Attribute name="search" value="results" />

<CopyElement title="Search Results List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"2c33f953-fb35-2a16-e6fb-569ba548af98","tag":"div","classes":[],"children":["2c33f953-fb35-2a16-e6fb-569ba548af99","2c33f953-fb35-2a16-e6fb-569ba548af9b"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"search","value":"results"}]}},{"_id":"2c33f953-fb35-2a16-e6fb-569ba548af99","tag":"div","classes":[],"children":["2c33f953-fb35-2a16-e6fb-569ba548af9a"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"2c33f953-fb35-2a16-e6fb-569ba548af9a","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"2c33f953-fb35-2a16-e6fb-569ba548af9b","tag":"div","classes":[],"children":["2c33f953-fb35-2a16-e6fb-569ba548af9c"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"2c33f953-fb35-2a16-e6fb-569ba548af9c","tag":"div","classes":[],"children":["2c33f953-fb35-2a16-e6fb-569ba548af9d"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"2c33f953-fb35-2a16-e6fb-569ba548af9d","text":true,"v":"No items found."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>

Inside the Collection List Item, you can add **only** the following elements, because the search results are global, Shopify will search in pages, articles and products all together, so you can use only elements that are in common and you can find below!

#### Date

To add an indicator about the date of pubblication of the search result, you can add respectively the following attributes:

<Attribute name="item" value="date" />

<CopyElement title="Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


The date format can be changed using the attribute:

<DynamicAttribute name="format" value="date format" />

Date accepts the same parameters as Ruby's strftime method. You can find a [list of the shorthand formats in Ruby's documentation](http://www.ruby-doc.org/core/Time.html#method-i-strftime) or use a site like [strfti.me](http://www.strfti.me/).

As Example if you set the attribute:

<Attribute name="format" value="%a, %b %d, %y" />

The date will be in the format: *Tue, Apr 22, 14*

#### Title

The Title of the article can be added either to text elements or to link elements, if you use the latter it will also automatically link to the article page.

Add the attribute:

<Attribute name="item" value="title" />

<CopyElement title="Title">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c6b4f067-3af4-1330-4c25-9bce97ffa6d2","tag":"h3","classes":["59d95faf-ed7c-aa9e-a200-fc9ed1c49f21"],"children":["1b709ebe-fcec-5b0d-b42a-65daac3fc479"],"type":"Heading","data":{"tag":"h3"}},{"_id":"1b709ebe-fcec-5b0d-b42a-65daac3fc479","text":true,"v":"Article Title"}],"styles":[{"_id":"59d95faf-ed7c-aa9e-a200-fc9ed1c49f21","fake":false,"type":"class","name":"Article Title","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Featured Image

The featured Image is the main image attached to the item searched, you can use the featured image on Images or any element as Background Image (don't forget to add a placeholder image and stylize it, the archive image will follow that image style). If you add the attribute to a link, it will also directly link to the article page.

To create a futured image just use the attribute

<Attribute name="item" value="featured-image" />

<CopyElement title="Featured Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c5189161-bbea-6043-8252-2345d0b3022f","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}}],"styles":[{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

Shopify automatically compress the photo, and optimizes the photo, you can add the following optional attributes to change shopify parameters 

##### Dimension 
you can change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use these prefixed values below, ordered by largest to smallest: 

<code class="value">master</code>,<code class="value">grande</code>, <code class="value">large</code>, <code class="value">medium</code>, <code class="value">compact</code>, <code class="value">small</code>, <code class="value">thumb</code>, <code class="value">icon</code>, <code class="value">pico</code> 

or you can set a fixed width x height (or just one of the parameters):

<code class="dynamic-value">{width}x{height}</code>, <code class="dynamic-value">{width}x</code>, <code class="dynamic-value">x{height}</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300x500" />

##### Crop

You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the crop parameter specifies what part of the image to show.

You can specify crop using the attribute:

<DynamicAttribute name="crop" value="crop position" />

Valid options are:

<code class="value">top</code>, <code class="value">center</code>, <code class="value">bottom</code>, <code class="value">left</code> and <code class="value">right</code>

##### Scale

The scale parameter lets you specify the pixel density of the image. You can add it using the attribute:

<DynamicAttribute name="scale" value="scale factor" />

Valid options are: 

<code class="value">2</code> and <code class="value">3</code>


##### Format

The format parameter lets you specify what file format to use for the displayed image.

You can specify it adding the attribute:

<DynamicAttribute name="format" value="format type" />

Valid options are: 

<code class="value">jpg</code> and <code class="value">pjpg</code>

**pjpg** is progressive JPEG. A browser loads a full-sized progressive JPEG with gradually increasing quality, instead of loading the full-quality image from top to bottom like a traditional JPEG.

> Note that Shopify can do the only the following format conversions for you:
> * PNG to JPG
> * PNG to PJPG
> * JPG to PJPG


#### Link

The link is simply the url to the current searched item. Just add the attribute on a link element of any type:

<Attribute name="item" value="link" />

<CopyElement title="Read More Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271dec","tag":"a","classes":[],"children":["3a362a89-7ae7-7629-1797-e2d0c9271ded"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"link"}]}},{"_id":"3a362a89-7ae7-7629-1797-e2d0c9271ded","text":true,"v":"Read More"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Excerpt

The excerpt of the item searched (just as a reminder, the excerpt is a short summary of an item), can be added on any text element just adding the attribute:

<Attribute name="item" value="excerpt" />

<CopyElement title="Excerpt">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>
