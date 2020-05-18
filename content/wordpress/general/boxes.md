---
sidebar: 'wordpress'
prev: '/wordpress/general/social-links/'
next: '/wordpress/general/php-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Boxes

Boxes is a custom post type built in inside the Udesly WP Plugin. This custom post type is pretty flexible and is mainly created to be used as a secondary Content for your posts (Dynamic Box) or simply a place where you can embed your dynamic content and use it in multiple places. For example, with Boxes you can create dynamic sliders or galleries, or use any Guthenberg Block!

Boxes releases 2 different shortcodes:

```php
[udesly_dynamic_box]
```

This shortcode is used to show the content of the dynamic box that you can find in every post/page.

<div align="center">
  <g-image src="~/assets/images/dynamic-box.png" />
</div>


The second one is 

```php
[udesly-boxes slug="box-slug"]
```

that shows the content of a specific box.

You will find all the shortcodes directly in *Udesly > Boxes*

<div align="center">
  <g-image src="~/assets/images/udesly-box.png" />
</div>

Don't forget that to use shortcodes you have to follow this [guide](/wordpress/general/shortcodes/).

There are also some features that can be built using boxes:

### Dynamic Slider

You can use Boxes to create a dynamic slider you can basically change the images from WordPress, you just need to add the attribute on a Slider:

<DynamicAttribute name="boxes:slider" value="slug of the box" />

If you want to use the Dynamic Slider with the dynamic box you can use the attribute:

<Attribute name="boxes:slider" value="dynamic-box" />

Inside the box either the dynamic or static one you just need to add a Gallery Block.

<div align="center">
  <g-image src="~/assets/images/udesly-box-dynamic-galler.png" />
</div>


<CopyElement title="Dynamic Slider">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"daa1c965-502f-a510-0a0f-921b3f496134","tag":"div","classes":[],"children":["daa1c965-502f-a510-0a0f-921b3f496135","daa1c965-502f-a510-0a0f-921b3f496138","daa1c965-502f-a510-0a0f-921b3f49613a","daa1c965-502f-a510-0a0f-921b3f49613c"],"type":"SliderWrapper","data":{"slider":{"navSpacing":3,"autoplay":false,"delay":4000,"iconArrows":true,"animation":"slide","easing":"ease","navRound":true,"disableSwipe":false,"duration":500,"infinite":true,"autoMax":0,"type":"wrapper"},"attr":{"data-animation":"slide","data-duration":"500","data-infinite":"1"},"xattr":[{"name":"boxes:slider","value":"dynamic-box"}]}},{"_id":"daa1c965-502f-a510-0a0f-921b3f496135","tag":"div","classes":[],"children":["daa1c965-502f-a510-0a0f-921b3f496136"],"type":"SliderMask","data":{"slider":{"type":"slides"}}},{"_id":"daa1c965-502f-a510-0a0f-921b3f496136","tag":"div","classes":[],"children":[],"type":"SliderSlide","data":{"tag":"div","slider":{"type":"slide"}}},{"_id":"daa1c965-502f-a510-0a0f-921b3f496138","tag":"div","classes":[],"children":["daa1c965-502f-a510-0a0f-921b3f496139"],"type":"SliderArrow","data":{"slider":{"type":"arrow","dir":"left"}}},{"_id":"daa1c965-502f-a510-0a0f-921b3f496139","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"slider-left"}}},{"_id":"daa1c965-502f-a510-0a0f-921b3f49613a","tag":"div","classes":[],"children":["daa1c965-502f-a510-0a0f-921b3f49613b"],"type":"SliderArrow","data":{"slider":{"type":"arrow","dir":"right"}}},{"_id":"daa1c965-502f-a510-0a0f-921b3f49613b","tag":"div","classes":[],"children":[],"type":"Icon","data":{"widget":{"type":"icon","icon":"slider-right"}}},{"_id":"daa1c965-502f-a510-0a0f-921b3f49613c","tag":"div","classes":[],"children":[],"type":"SliderNav","data":{"slider":{"type":"nav"}}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

### Dynamic Lightbox

To build a Dynamic Lightbox, you can use a Lightbox link or a Lightbox link contained in a Collection List item.

In the first case the Thumbnail (that's the one you create in Webflow) will be clickable and, by clicking on it, the entire gallery will be navigable.

In the second case (a Lightbox link contained in a Collection List item), all the images of the gallery will be automatically displayed and, by clicking on them, a lightbox will open with all images connected with each other.

In any case, the attribute to insert on the Lightbox link element is:

<DynamicAttribute name="boxes:lightbox" value="slug of the box" />

If you want to use the Dynamic Lightbox with the dynamic box you can use the attribute:

<Attribute name="boxes:lightbox" value="dynamic-box" />

Inside the box either the dynamic or static one you just need to add a Gallery Block.

<div align="center">
  <g-image src="~/assets/images/udesly-box-dynamic-galler.png" />
</div>

<CopyElement title="Dynamic Lightbox">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"360bc8c6-55fd-8e24-7c75-4dcc6b3d9c60","tag":"a","classes":[],"children":["360bc8c6-55fd-8e24-7c75-4dcc6b3d9c61"],"type":"LightboxWrapper","data":{"lightbox":{"type":"wrapper"},"block":"inline","attr":{"href":"#"},"xattr":[{"name":"boxes:lightbox","value":"dynamic-box"}]}},{"_id":"360bc8c6-55fd-8e24-7c75-4dcc6b3d9c61","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/img/placeholder-thumb.svg"},"img":{}}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>