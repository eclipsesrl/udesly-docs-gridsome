---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/general/forms/'
next: '/wordpress/general/terms-query/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Shortcodes

A shortcode is a WordPress-specific code that lets you do nifty things with very little effort. Shortcodes can embed files or create objects that would normally require lots of complicated, ugly code in just one line. It make you able to use the most of WordPress plugins.

Insert a Text Block and enter this attribute:

<Attribute name="shortcode" value="true" />

As text content you have to write the shortcode value

<CopyElement title="Shortcode">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"027014dc-6074-287a-a139-8f58654d99cd","tag":"div","classes":[],"children":["027014dc-6074-287a-a139-8f58654d99ce"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"shortcode","value":"true"}]}},{"_id":"027014dc-6074-287a-a139-8f58654d99ce","text":true,"v":"[gallery id=\"123\" size=\"medium\"]"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>