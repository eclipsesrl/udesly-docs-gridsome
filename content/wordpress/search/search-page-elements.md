---
description: ''
sidebar: 'wordpress'
next: '/wordpress/search/search-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Search Page Elements

The elements below can be used in all Search pages. [How to set pages here](/wordpress/search/pages/).

## Search Results Count

This is the number of results found for a search query, can be added on texts with the attribute:

<Attribute name="search" value="results-count" />

<CopyElement title="Results Count">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"search","value":"results-count"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"3"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Search Query

This is the query used by your user, can be added on texts with the attribute:

<Attribute name="search" value="query" />

<CopyElement title="Query">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"search","value":"query"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"cats"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

This is usually seen in phrases like: *You searched for: Query*

## Search Current Page

This is the index of the current page, can be added on texts with the attribute:

<Attribute name="search" value="current-page" />

<CopyElement title="Current Page Index">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"search","value":"current-page"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"1"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Search Max Pages

This is the number of pages found for the query, can be added on texts with the attribute:

<Attribute name="search" value="max-pages" />

<CopyElement title="Max Pages Number">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c86","tag":"p","classes":[],"children":["de50c074-b6db-509a-b710-17e5dd3f7c87"],"type":"Paragraph","data":{"xattr":[{"name":"search","value":"max-pages"}]}},{"_id":"de50c074-b6db-509a-b710-17e5dd3f7c87","text":true,"v":"5"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

You can combine this element with the previous one to create texts like: *Showing page 2 of 15*

## Search Results

Search results is the list of results found for the query. You can add the following attribute on a Collection List Wrapper:

<Attribute name="search" value="results" />

<CopyElement title="Search List">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"search","value":"results"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


If you want to create a page for WooCommerce results, instead of using this element please take a look at this [doc](/wordpress/woocommerce/search-results/).

Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/wordpress/pages/page-item-elements/">Page Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card" id="simple-post-card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d26","tag":"div","classes":[],"children":["db124cae-60e5-6798-df76-59fa61ba6448","872187da-1fef-82a1-d8aa-5d3fd3bb5d29","872187da-1fef-82a1-d8aa-5d3fd3bb5d2b"],"type":"Block","data":{"tag":"div","style":{"base":{"tiny":{"noPseudo":{"gridColumnStart":"span 1","gridColumnEnd":"span 1"}}}}}},{"_id":"db124cae-60e5-6798-df76-59fa61ba6448","tag":"a","classes":["16529dba-daa7-b209-4b49-d50818f6a394"],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d28"],"type":"Link","data":{"block":"inline","link":{"mode":"external","url":"#"},"xattr":[{"name":"item","value":"permalink"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d28","tag":"img","classes":["db912598-80db-237e-1156-3d29aaf71b2e"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg"},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d29","tag":"h3","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2a"],"type":"Heading","data":{"tag":"h3","xattr":[{"name":"item","value":"title"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2a","text":true,"v":"Card one"},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2b","tag":"p","classes":[],"children":["872187da-1fef-82a1-d8aa-5d3fd3bb5d2c"],"type":"Paragraph","data":{"xattr":[{"name":"item","value":"excerpt"}]}},{"_id":"872187da-1fef-82a1-d8aa-5d3fd3bb5d2c","text":true,"v":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "}],"styles":[{"_id":"16529dba-daa7-b209-4b49-d50818f6a394","fake":false,"type":"class","name":"Link Block","namespace":"","comb":"","styleLess":"display: block;","variants":{},"children":[],"selector":null},{"_id":"db912598-80db-237e-1156-3d29aaf71b2e","fake":false,"type":"class","name":"Cards Image","namespace":"","comb":"","styleLess":"position: static; left: 0%; top: 0%; right: 0%; bottom: 0%; display: block; width: 100%; height: 300px; max-width: none; object-fit: cover; object-position: 50% 50%;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

> ⚠️⚠️⚠️

> Do not add this attribute on the Search Results List created by Webflow! That list is not exported in HTML! You have to hide that list and add a normal Collection List Wrapper!