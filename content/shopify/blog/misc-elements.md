---
description: ''
sidebar: 'shopify'
prev: '/shopify/blog/article-page-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Misc Elements

These elements below can be used in all the pages you create.

## Blog Link

Blog Link is the link to one Blog of your Shopify setup. Don't forget that in Shopify you can have multiple blogs

To create it add the following attribute on a link element:

<DynamicAttribute name="blog-link" value="blog handle" />

<CopyElement title="Blog Link to 'News'">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"02828a95-5586-7c1d-3334-1b71da4a70d3","tag":"a","classes":[],"children":["02828a95-5586-7c1d-3334-1b71da4a70d4"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"blog-link","value":"news"}]}},{"_id":"02828a95-5586-7c1d-3334-1b71da4a70d4","text":true,"v":"Archive blog"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Blog Articles

Blog Articles is a list of articles of your Shopify Setup. This element will create a Blog picker setting where your customer will be able to choose a blog, how many posts to show, and several different settings.

<div align="center">
  <g-image src="~/assets/images/article-settings.png" />
</div>

Just as a reminder all settings can be found in Shopify -> Online Store > Themes > Customize. **Pagination cannot be added.** to this element

To create a Blog Articles list add the following attribute on a *Collection List Wrapper*:

<DynamicAttribute name="blog:articles" value="name of the setting" />

For example if you want to create a Blog section of setting called recent articles in Shopify, you have to add the attribute:

<Attribute name="blog:articles" value="recent-articles" />

<CopyElement title="Blog Articles">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbb9","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbba","5427d75b-39e1-bdf8-8664-730b5506cbbc"],"type":"DynamoWrapper","data":{"tag":"div","dyn":{"type":"wrapper"},"xattr":[{"name":"blog:articles","value":"recent-articles"}]}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbba","tag":"div","classes":["14d49487-0ce8-a2d8-964c-c771d9d7ee41"],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbb"],"type":"DynamoList","data":{"tag":"div","dyn":{"type":"list"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbb","tag":"div","classes":[],"children":[],"type":"DynamoItem","data":{"dyn":{"type":"item","grid":12}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbc","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbd"],"type":"DynamoEmpty","data":{"tag":"div","dyn":{"type":"empty"}}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbd","tag":"div","classes":[],"children":["5427d75b-39e1-bdf8-8664-730b5506cbbe"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5427d75b-39e1-bdf8-8664-730b5506cbbe","text":true,"v":"No items found."}],"styles":[{"_id":"14d49487-0ce8-a2d8-964c-c771d9d7ee41","fake":false,"type":"class","name":"Collection List","namespace":"","comb":"","styleLess":"display: grid; grid-auto-columns: 1fr; grid-column-gap: 16px; grid-row-gap: 16px; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto;","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":1}}</CopyElement>


Inside Collection List Item you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/shopify/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card" id="simple-post-card">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c684f8e5-ea4d-024d-71ef-6305971105a6","tag":"div","classes":[],"children":["c684f8e5-ea4d-024d-71ef-6305971105a7","c684f8e5-ea4d-024d-71ef-6305971105aa","c684f8e5-ea4d-024d-71ef-6305971105ab"],"type":"Block","data":{"tag":"div"}},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105a7","tag":"div","classes":["bfae0c62-5652-623b-6892-091c2d456292"],"children":["c684f8e5-ea4d-024d-71ef-6305971105a8","c684f8e5-ea4d-024d-71ef-6305971105a9"],"type":"Block","data":{"tag":"div"}},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105a8","tag":"div","classes":["f54e6d75-c518-3c99-9811-3381194925df","e610739e-395d-57bf-4c13-200c2f89a89c"],"children":["cbb1d09e-bb96-81ba-bce4-91b52e98f655"],"type":"Block","data":{"tag":"div","text":true,"dyn":{"bind":{}},"xattr":[{"name":"item","value":"tags"},{"name":"limit","value":"1"}]}},{"_id":"cbb1d09e-bb96-81ba-bce4-91b52e98f655","text":true,"v":"Category"},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105a9","tag":"a","classes":["8bc38435-e010-b5fe-c1c5-4b139acbe40d"],"children":[],"type":"Link","data":{"block":"inline","link":{"mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"featured-image"}]}},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105aa","tag":"a","classes":["0098c715-ec43-4454-ea5c-e6d38440a22d"],"children":["1f38375b-1c62-4d6b-ee25-8614f382ffcc"],"type":"Link","data":{"link":{"mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"title"}]}},{"_id":"1f38375b-1c62-4d6b-ee25-8614f382ffcc","text":true,"v":"Text Link"},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105ab","tag":"div","classes":["d5dd1d5a-494a-6286-e78c-d40a84806165"],"children":["c684f8e5-ea4d-024d-71ef-6305971105ac"],"type":"Block","data":{"tag":"div"}},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105ac","tag":"a","classes":["b2bba02c-3864-b89b-c81e-0403671f9860"],"children":["c684f8e5-ea4d-024d-71ef-6305971105ad","c684f8e5-ea4d-024d-71ef-6305971105af"],"type":"Link","data":{"block":"inline","link":{"mode":"external"},"dyn":{"bind":{}},"xattr":[{"name":"item","value":"link"}]}},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105ad","tag":"div","classes":["28a10165-eb1b-bd68-9d90-5f81da943ac6"],"children":["c684f8e5-ea4d-024d-71ef-6305971105ae"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105ae","text":true,"v":"Explore Article"},{"_id":"c684f8e5-ea4d-024d-71ef-6305971105af","tag":"img","classes":["743b0855-3e68-cb3c-5ea1-8a5e57e76900"],"children":[],"type":"Image","data":{"attr":{"src":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b60167198913532_arrow-dark%402x.svg"}}}],"styles":[{"_id":"28a10165-eb1b-bd68-9d90-5f81da943ac6","fake":false,"type":"class","name":"Button Label","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null},{"_id":"bfae0c62-5652-623b-6892-091c2d456292","fake":false,"type":"class","name":"Blog2 Image Wrap","namespace":"","comb":"","styleLess":"position: relative; margin-bottom: 30px;","variants":{},"children":[],"selector":null},{"_id":"743b0855-3e68-cb3c-5ea1-8a5e57e76900","fake":false,"type":"class","name":"Button Arrow","namespace":"","comb":"","styleLess":"display: inline-block; margin-left: 20px; flex-grow: 0; flex-shrink: 0; flex-basis: auto;","variants":{},"children":[],"selector":null},{"_id":"b2bba02c-3864-b89b-c81e-0403671f9860","fake":false,"type":"class","name":"Button Text","namespace":"","comb":"","styleLess":"display: flex; justify-content: flex-start; align-items: center; color: hsla(240, 9.43%, 10.39%, 1.00); font-size: 14px; line-height: 24px; font-weight: 500; text-decoration: none; text-transform: uppercase;","variants":{},"children":[],"selector":null},{"_id":"0098c715-ec43-4454-ea5c-e6d38440a22d","fake":false,"type":"class","name":"Size4 Link","namespace":"","comb":"","styleLess":"display: block; margin-top: 10px; margin-bottom: 15px; font-size: 24px; line-height: 32px; font-weight: 300;","variants":{"main_hover":{"styleLess":"opacity: 0.7;"}},"children":["1a096b17-35e0-379a-4948-9b0500123a5c","5bb9fa19-c697-6784-aaf5-e8d1655b276d","e4dd09c5-20b6-45ac-109a-4e33ca9ca392"],"selector":null},{"_id":"e610739e-395d-57bf-4c13-200c2f89a89c","fake":false,"type":"class","name":"Inside Label","namespace":"","comb":"&","styleLess":"position: absolute; left: 0%; top: 0%; right: auto; bottom: auto; z-index: 40; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; background-color: white; color: hsla(240, 9.43%, 10.39%, 1.00);","variants":{"tiny":{"styleLess":"text-align: center;"}},"children":[],"selector":null},{"_id":"d5dd1d5a-494a-6286-e78c-d40a84806165","fake":false,"type":"class","name":"Blog2 Button Wrap","namespace":"","comb":"","styleLess":"display: flex; flex-direction: column; align-items: flex-start;","variants":{"medium":{"styleLess":"margin-bottom: 30px;"}},"children":[],"selector":null},{"_id":"f54e6d75-c518-3c99-9811-3381194925df","fake":false,"type":"class","name":"Label","namespace":"","comb":"","styleLess":"display: inline-block; margin-bottom: 10px; padding-top: 10px; padding-right: 22px; padding-bottom: 10px; padding-left: 22px; border-top-style: solid; border-top-width: 1px; border-top-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); border-right-style: solid; border-right-width: 1px; border-right-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); border-left-style: solid; border-left-width: 1px; border-left-color: hsla(205.71428571428575, 0.00%, 66.67%, 0.20); background-color: hsla(0, 0.00%, 100.00%, 1.00); font-size: 12px; line-height: 20px; font-weight: 500; text-transform: uppercase;","variants":{},"children":["5316adf0-5e33-978d-9502-9d6b3c016c0b","3e48f0e4-f1cc-6873-942a-571d8ec908a4","e610739e-395d-57bf-4c13-200c2f89a89c","62d11bf4-7c2c-d68e-b360-72eaef6f05d5"],"selector":null},{"_id":"8bc38435-e010-b5fe-c1c5-4b139acbe40d","fake":false,"type":"class","name":"Blog2 Image","namespace":"","comb":"","styleLess":"display: block; width: 100%; height: 260px; background-image: @img_example_bg; background-position: 50% 50%; background-size: cover; transition-property: opacity; transition-duration: 200ms; transition-timing-function: ease;","variants":{"main_hover":{"styleLess":"opacity: 0.8;"}},"children":[],"selector":null}],"assets":[{"cdnUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b60167198913532_arrow-dark%402x.svg","siteId":"5eaa908028b2be05d37db93d","width":20,"isHD":false,"height":9,"fileName":"5eaa90803b60167198913532_arrow-dark@2x.svg","createdOn":"2019-06-12T14:41:13.801Z","origFileName":"arrow-dark@2x.svg","fileHash":"955c21ac93e48bd9e9bdb59b5610ba02","variants":[],"mimeType":"image/svg+xml","s3Url":"https://s3.amazonaws.com/webflow-prod-assets/5eaa908028b2be05d37db93d/5eaa90803b60167198913532_arrow-dark%402x.svg","thumbUrl":"https://uploads-ssl.webflow.com/5eaa908028b2be05d37db93d/5eaa90803b60167198913532_arrow-dark%402x.svg","_id":"5eaa90803b60167198913532","updatedOn":"2020-04-30T08:46:57.442Z","fileSize":733}],"ix1":[],"ix2":{"interactions":[{"id":"i-423","interactionTypeId":"MOUSE_HOVER_INTERACTION","eventIds":["e-845","e-846"],"target":"5eaa90803b60162aec913503|c684f8e5-ea4d-024d-71ef-6305971105ac","createdOn":1588765892440}],"events":[{"id":"e-845","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-846"},"instant":true},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5eaa90803b60162aec913503|c684f8e5-ea4d-024d-71ef-6305971105ac"},"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1588765892440},{"id":"e-846","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-845"},"instant":true},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"5eaa90803b60162aec913503|c684f8e5-ea4d-024d-71ef-6305971105ac"},"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1588765892440}],"actionLists":[{"id":"a","title":"button-hover-on","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"nodeId":"5eaa90803b6016eae8913522|7866e445-b451-689c-fc69-c8d97672bfe9","appliesTo":"ELEMENT_CLASS","styleBlockIds":["743b0855-3e68-cb3c-5ea1-8a5e57e76900"],"useEventTarget":"CHILDREN","boundaryMode":false},"xValue":8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]}],"createdOn":1560243334337,"useFirstGroupAsInitialState":false},{"id":"a-2","title":"button-hover-off","actionItemGroups":[{"actionItems":[{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"nodeId":"5eaa90803b6016eae8913522|7866e445-b451-689c-fc69-c8d97672bfe9","appliesTo":"ELEMENT_CLASS","styleBlockIds":["743b0855-3e68-cb3c-5ea1-8a5e57e76900"],"useEventTarget":"CHILDREN","boundaryMode":false},"xValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"},"instant":false}]}],"createdOn":1560243376157,"useFirstGroupAsInitialState":false}]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## All Blogs List

Since you can have multiple blogs in Shopify you can create a simple menu that shows up all blogs of your setup. Just add the following attribute on a link:

<Attribute name="blog" value="all-blogs" />

<CopyElement title="All Blogs">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"02828a95-5586-7c1d-3334-1b71da4a70d3","tag":"a","classes":[],"children":["02828a95-5586-7c1d-3334-1b71da4a70d4"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"blog","value":"all-blogs"}]}},{"_id":"02828a95-5586-7c1d-3334-1b71da4a70d4","text":true,"v":"News"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

This link will be repeated and populated once for each blog you have created in Shopify


## Specific Article

If you want to show up a specific article of one of your blog you just need to add the following attribute on a Div Element:

<DynamicAttribute name="blog:article" value="setting name" />

This element will create an Article picker in the backed of your Shopify. Just as a reminder all settings can be found in Shopify -> Online Store > Themes > Customize.

<div align="center">
  <g-image src="~/assets/images/specific article.png" />
</div>


Inside the *Div* you can add all of the elements that you find in the page:
<div align="center">
<g-link class="ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors active--exact active no-underline" to="/shopify/blog/collection-item-elements/">Collection Item Elements</g-link>
</div>

if you want, you can just copy a sample card and paste it inside the Collection List Item

<CopyElement title="Simple Post Card" from="simple-post-card"></CopyElement>