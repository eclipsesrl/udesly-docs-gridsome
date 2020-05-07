---
description: ''
sidebar: 'shopify'
prev: ''
next: '/shopify/account/account-page/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Misc Elements

The following elements can be added in all the pages of your webflow project

#### Logout Link

This is a link to logout from the account, just add the following attribute on a link:

<Attribute name="account" value="logout-link" />

<CopyElement title="Logout Link">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"f808a4e2-7202-3ef7-c6ed-51cd378d4aec","tag":"a","classes":[],"children":["f808a4e2-7202-3ef7-c6ed-51cd378d4aed"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"show-if","value":"customer"},{"name":"account","value":"logout-link"}]}},{"_id":"f808a4e2-7202-3ef7-c6ed-51cd378d4aed","text":true,"v":"Logout"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>