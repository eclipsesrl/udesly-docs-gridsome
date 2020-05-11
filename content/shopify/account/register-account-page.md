---
description: ''
sidebar: 'shopify'
prev: '/shopify/account/activate-account-page/'
next: '/shopify/account/reset-password-page/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Register Account Page

To declare a Register Account Page, you just have to add the following attribute on the Body element of your page:

<Attribute name="page" value="register" />

Inside this page you can add all of the following elements:


## Register Form

This is the form used to register an account, you need to add the following attribute on a Form Block element:

<Attribute name="account" value="register" />

The form must have the following input fields:

| Name | Type |
|--|--|
| password | password |
| email | email |
| first_name | text |
| last_name | text |
| | submit |

Please mind that all names must be in lowercase

<CopyElement title="Register Account form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"47ea1a13-19e8-db8e-a833-2b64bf03169c","tag":"div","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf03169d","47ea1a13-19e8-db8e-a833-2b64bf0316a5","47ea1a13-19e8-db8e-a833-2b64bf0316a8"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"account","value":"register"}]}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf03169d","tag":"form","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf03169e","47ea1a13-19e8-db8e-a833-2b64bf0316a0","f2922b2d-1c61-6dfe-5535-72b18b5d7adc","672d5102-3bb9-9221-e298-1d073490359e","47ea1a13-19e8-db8e-a833-2b64bf0316a1","47ea1a13-19e8-db8e-a833-2b64bf0316a3","63a48d57-9e6c-a7aa-ec5a-b79e9aae1188","4e3527e2-a676-6c7b-bff1-8983c462cd6d","47ea1a13-19e8-db8e-a833-2b64bf0316a4"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf03169e","tag":"label","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf03169f"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"first_name"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf03169f","text":true,"v":"First NAme"},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a0","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"first_name","data-name":"first_name","placeholder":"First Name","type":"text","id":"first_name","disabled":false,"required":false},"form":{"type":"input","name":"first_name"}}},{"_id":"f2922b2d-1c61-6dfe-5535-72b18b5d7adc","tag":"label","classes":[],"children":["f2922b2d-1c61-6dfe-5535-72b18b5d7add"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"last_name"}}},{"_id":"f2922b2d-1c61-6dfe-5535-72b18b5d7add","text":true,"v":"Last NAME"},{"_id":"672d5102-3bb9-9221-e298-1d073490359e","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"last_name","data-name":"last_name","placeholder":"Last Name","type":"text","id":"last_name","disabled":false,"required":false},"form":{"type":"input","name":"last_name"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a1","tag":"label","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf0316a2"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"email-2"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a2","text":true,"v":"Email Address"},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a3","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"email","data-name":"email","placeholder":"Email","type":"email","id":"email-2","disabled":false,"required":true},"form":{"type":"input","name":"email"}}},{"_id":"63a48d57-9e6c-a7aa-ec5a-b79e9aae1188","tag":"label","classes":[],"children":["63a48d57-9e6c-a7aa-ec5a-b79e9aae1189"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password"}}},{"_id":"63a48d57-9e6c-a7aa-ec5a-b79e9aae1189","text":true,"v":"Password"},{"_id":"4e3527e2-a676-6c7b-bff1-8983c462cd6d","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":true},"form":{"type":"input","name":"password"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a4","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a5","tag":"div","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf0316a6"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a6","tag":"div","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf0316a7"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a7","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a8","tag":"div","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf0316a9"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316a9","tag":"div","classes":[],"children":["47ea1a13-19e8-db8e-a833-2b64bf0316aa"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"47ea1a13-19e8-db8e-a833-2b64bf0316aa","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>