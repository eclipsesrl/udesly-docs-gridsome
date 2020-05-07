---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/account-page/'
next: '/shopify/account/activate-account-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Login Page

To declare a Login Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="login" />

Inside this page you can add all of the following elements:


## Login Form

This is the form used to login, you need to add the following attribute on a Form Block element:

<Attribute name="account" value="login" />

The form must have the following input fields:

| Name | Type |
|--|--|
| password | password |
| email | email |
| | submit |

Please mind that all names must be in lowercase

<CopyElement title="Login form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a893","tag":"div","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a894","5ef79df6-3bf3-d030-29d5-5b37cfe0a89c","5ef79df6-3bf3-d030-29d5-5b37cfe0a89f"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"account","value":"login"}]}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a894","tag":"form","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a895","5ef79df6-3bf3-d030-29d5-5b37cfe0a897","5ef79df6-3bf3-d030-29d5-5b37cfe0a898","5ef79df6-3bf3-d030-29d5-5b37cfe0a89a","5ef79df6-3bf3-d030-29d5-5b37cfe0a89b"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a895","tag":"label","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a896"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"email-2"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a896","text":true,"v":"Email"},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a897","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"email","data-name":"email","placeholder":"Email","type":"email","id":"email","disabled":false,"required":true},"form":{"type":"input","name":"email"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a898","tag":"label","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a899"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a899","text":true,"v":"Password"},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a89a","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":true},"form":{"type":"input","name":"password"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a89b","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a89c","tag":"div","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a89d"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a89d","tag":"div","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a89e"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a89e","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a89f","tag":"div","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a8a0"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a8a0","tag":"div","classes":[],"children":["5ef79df6-3bf3-d030-29d5-5b37cfe0a8a1"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"5ef79df6-3bf3-d030-29d5-5b37cfe0a8a1","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>

## Recover Password Form

Usually Recover Password Form is located in the login page, on a Form Block add the attribute:

<Attribute name="account" value="recover" />

The form must have the following input fields:

| Name | Type |
|--|--|
| email | email |
| | submit |

<CopyElement title="Recover Password Form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff6fa","tag":"div","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff6fb","c204e3f8-7d40-afdd-2730-af026b5ff703","c204e3f8-7d40-afdd-2730-af026b5ff706"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"account","value":"recover"}]}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff6fb","tag":"form","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff6ff","c204e3f8-7d40-afdd-2730-af026b5ff701","c204e3f8-7d40-afdd-2730-af026b5ff702"],"type":"FormForm","data":{"attr":{"id":"email-form-2","name":"email-form-2","data-name":"Email Form 2"},"form":{"type":"form","name":"Email Form 2"}}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff6ff","tag":"label","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff700"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"email-2"}}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff700","text":true,"v":"Email Address"},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff701","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"email","data-name":"email","placeholder":"Email","type":"email","id":"email","disabled":false,"required":true},"form":{"type":"input","name":"email"}}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff702","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff703","tag":"div","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff704"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff704","tag":"div","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff705"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff705","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff706","tag":"div","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff707"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff707","tag":"div","classes":[],"children":["c204e3f8-7d40-afdd-2730-af026b5ff708"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"c204e3f8-7d40-afdd-2730-af026b5ff708","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>