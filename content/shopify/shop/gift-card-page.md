---
sidebar: 'shopify'
prev: '/shopify/shop/cart-page/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Gift Card Page

This is the page where a single gift card is showed:

This page can be defined using the following attribute on the Body element of your page:

<Attribute name="page" value="gift-card" />


Inside this page you can add the following elements:

#### Expiration Date

To add an indicator about the date of expiration of the Gift Card, you can add respectively the following attributes:

<Attribute name="gift-card" value="expiration-date" />

<CopyElement title="Expiration Date">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653c","tag":"div","classes":["d2698781-6fbe-1a1f-c561-4501b8ec90fa"],"children":["05ae6817-12f5-5cbd-27a5-757285f4653d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"gift-card","value":"expiration-date"}]}},{"_id":"05ae6817-12f5-5cbd-27a5-757285f4653d","text":true,"v":"24 05 2020"}],"styles":[{"_id":"d2698781-6fbe-1a1f-c561-4501b8ec90fa","fake":false,"type":"class","name":"Expiration Date","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


The date format can be changed using the attribute:

<DynamicAttribute name="format" value="date format" />

Date accepts the same parameters as Ruby's strftime method. You can find a [list of the shorthand formats in Ruby's documentation](http://www.ruby-doc.org/core/Time.html#method-i-strftime) or use a site like [strfti.me](http://www.strfti.me/).

As Example if you set the attribute:

<Attribute name="format" value="%a, %b %d, %y" />

The date will be in the format: *Tue, Apr 22, 14*


## Initial Balance

This is the initial balance of the card. Insert a Text item and add the attribute:

<Attribute name="gift-card" value="initial-balance" />

<CopyElement title="Initial Balance">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a005de81-d74f-9648-15ab-8243e0bacb34","tag":"div","classes":[],"children":["59b03e7a-248c-174a-5ad8-cdfee6ed5568"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"gift-card","value":"initial-balance"}]}},{"_id":"59b03e7a-248c-174a-5ad8-cdfee6ed5568","text":true,"v":"$300"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Balance

This is the available balance of the card. Insert a Text item and add the attribute:

<Attribute name="gift-card" value="balance" />

<CopyElement title="Balance">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a005de81-d74f-9648-15ab-8243e0bacb34","tag":"div","classes":[],"children":["59b03e7a-248c-174a-5ad8-cdfee6ed5568"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"gift-card","value":"balance"}]}},{"_id":"59b03e7a-248c-174a-5ad8-cdfee6ed5568","text":true,"v":"$300"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

#### Image

You can add it on links or images using the attribute:

<Attribute name="gift-card" value="image" />

<CopyElement title="Gift Card Image">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"6f449204-dcbd-b81e-8fb0-aa9834bb271d","tag":"img","classes":[],"children":[],"type":"Image","data":{"attr":{"src":"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"},"img":{"id":"plugins/Basic/assets/placeholder.svg"},"xattr":[{"name":"gift-card","value":"image"}]}}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## QR Code

This is the qrcode of the card. Insert a Text item and add the attribute:

<Attribute name="gift-card" value="qr-code" />

<CopyElement title="QR Code">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a005de81-d74f-9648-15ab-8243e0bacb34","tag":"div","classes":[],"children":["59b03e7a-248c-174a-5ad8-cdfee6ed5568"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"gift-card","value":"qr-code"}]}},{"_id":"59b03e7a-248c-174a-5ad8-cdfee6ed5568","text":true,"v":"QR code"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

If you use this element also add the following script in the before ```</body>``` section of this page:

```
​<script>
​ var codeEl = document.getElementById('qr-code');
  new QRCode(codeEl, {
    text: codeEl.getAttribute('data-identifier'),
    width: 120,
    height: 120
  });
</script>
```

## Code

This is the code of the card. Insert a Text item and add the attribute:

<Attribute name="gift-card" value="code" />

<CopyElement title="Code">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"a005de81-d74f-9648-15ab-8243e0bacb34","tag":"div","classes":[],"children":["59b03e7a-248c-174a-5ad8-cdfee6ed5568"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"gift-card","value":"code"}]}},{"_id":"59b03e7a-248c-174a-5ad8-cdfee6ed5568","text":true,"v":"QR code"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>