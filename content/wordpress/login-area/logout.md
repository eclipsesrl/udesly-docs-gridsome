---
sidebar: 'wordpress'
prev: '/wordpress/login-area/register-form/'
next: '/wordpress/login-area/reset-flow/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Logout

Logging out ensures that user access and user credentials are removed from the session.

Insert a link and add the attribute:

<Attribute name="login-area" value="logout" />


With this configuration, the logout will redirect to the Home page. If you need to redirect to another given page, you have to use the attribute redirect and set the slug of that page as value.

<DynamicAttribute name="redirect" value="slug of the page" />

 E.g. if you want to redirect to the Contact Us page, you have to insert the attribute:

<Attribute name="redirect" value="contact-us" />


N.B: As best practice you should show this button only if the user is logged in with conditional elements!


<CopyElement title="Logout Button">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"0c9d6e1e-6c65-9abc-8170-02b6db2b64e0","tag":"div","classes":[],"children":["efdc88f2-dc07-c5f2-0123-71246899628f"],"type":"Block","data":{"tag":"div","xattr":[{"name":"show-if","value":"logged-in"}]}},{"_id":"efdc88f2-dc07-c5f2-0123-71246899628f","tag":"a","classes":[],"children":["efdc88f2-dc07-c5f2-0123-712468996290"],"type":"Link","data":{"button":true,"link":{"mode":"external","url":"#"},"xattr":[{"name":"login-area","value":"logout"}]}},{"_id":"efdc88f2-dc07-c5f2-0123-712468996290","text":true,"v":"Logout"}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


