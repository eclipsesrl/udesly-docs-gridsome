---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/activate-account-page/'
next: '/shopify/account/register-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Reset Password Page

To declare a Reset Password Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="reset-password" />

Inside this page you can add all of the following elements:


## Reset Password Form

This is the form used to reset a password, you need to add the following attribute on a Form Block element:

<Attribute name="account" value="reset" />

The form must have the following input fields:

| Name | Type |
|--|--|
| password | password |
| password_confirmation | password |
| | submit |

Please mind that all names must be in lowercase

<CopyElement title="Reset Password form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838145","tag":"div","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe838146","e4cce68e-7d09-8941-1dd5-553bfe83814e","e4cce68e-7d09-8941-1dd5-553bfe838151"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"account","value":"reset"}]}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838146","tag":"form","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe838147","e4cce68e-7d09-8941-1dd5-553bfe838149","e4cce68e-7d09-8941-1dd5-553bfe83814a","e4cce68e-7d09-8941-1dd5-553bfe83814c","e4cce68e-7d09-8941-1dd5-553bfe83814d"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838147","tag":"label","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe838148"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838148","text":true,"v":"Password"},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838149","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":false},"form":{"type":"input","name":"password"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe83814a","tag":"label","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe83814b"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password_confirmation"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe83814b","text":true,"v":"Password Confirmation"},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe83814c","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password_confirmation","data-name":"password_confirmation","placeholder":"Password Confirmation","type":"email","id":"password_confirmation","disabled":false,"required":true},"form":{"type":"input","name":"password_confirmation"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe83814d","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe83814e","tag":"div","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe83814f"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe83814f","tag":"div","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe838150"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838150","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838151","tag":"div","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe838152"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838152","tag":"div","classes":[],"children":["e4cce68e-7d09-8941-1dd5-553bfe838153"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e4cce68e-7d09-8941-1dd5-553bfe838153","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>