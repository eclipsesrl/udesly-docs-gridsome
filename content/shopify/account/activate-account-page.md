---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/login-page/'
next: '/shopify/account/register-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Activate Account Page

To declare an Activate Account Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="activate" />

Inside this page you can add all of the following elements:


## Activate Form

This is the form used to activate an account generated manually inside Shopify Customers section, you need to add the following attribute on a Form Block element:

<Attribute name="account" value="activate" />

The form must have the following input fields:

| Name | Type |
|--|--|
| password | password |
| password_confirmation | password |
| | submit |
| | submit |

One of the 2 submits must have the attribute:

<Attribute name="item" value="decline" />

Please mind that all names must be in lowercase

<CopyElement title="Activate Account form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"2e7ad355-c016-f70b-3320-fd2768052b14","tag":"div","classes":[],"children":["2e7ad355-c016-f70b-3320-fd2768052b15","2e7ad355-c016-f70b-3320-fd2768052b1d","2e7ad355-c016-f70b-3320-fd2768052b20"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"account","value":"activate"}]}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b15","tag":"form","classes":[],"children":["2e7ad355-c016-f70b-3320-fd2768052b1b","abc703aa-dedb-10fe-136c-cfb376cbb2dd","2e7ad355-c016-f70b-3320-fd2768052b1c","48d5b45b-6463-a4b5-112f-b1f187900875"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b1b","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":true},"form":{"type":"input","name":"password"}}},{"_id":"abc703aa-dedb-10fe-136c-cfb376cbb2dd","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password_confirmation","data-name":"password_confirmation","placeholder":"Password Confirmation","type":"password","id":"password_confirmation","disabled":false,"required":true},"form":{"type":"input","name":"password_confirmation"}}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b1c","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"48d5b45b-6463-a4b5-112f-b1f187900875","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Decline","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."},"xattr":[{"name":"item","value":"decline"}]}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b1d","tag":"div","classes":[],"children":["2e7ad355-c016-f70b-3320-fd2768052b1e"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b1e","tag":"div","classes":[],"children":["2e7ad355-c016-f70b-3320-fd2768052b1f"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b1f","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b20","tag":"div","classes":[],"children":["2e7ad355-c016-f70b-3320-fd2768052b21"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b21","tag":"div","classes":[],"children":["2e7ad355-c016-f70b-3320-fd2768052b22"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"2e7ad355-c016-f70b-3320-fd2768052b22","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>