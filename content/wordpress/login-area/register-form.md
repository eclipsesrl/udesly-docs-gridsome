---
sidebar: 'wordpress'
prev: '/wordpress/login-area/login-form/'
next: '/wordpress/login-area/logout/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Register Form

A registration form is a list of fields that a user will input data into and submit to a company or individual. Registration forms allow to sign up customers for subscriptions, services, or other programs or plans.

Insert a form block and add the attribute:

<Attribute name="login-area" value="register" />

The form must have the following input fields:

| Name | Type |
|--|--|
| first_name | text/plain |
| last_name | text/plain |
| username | text/plain |
| email | email |
| password | password |
| password_repeat | password |
| | submit |

Please mind that all names must be in lowercase.

If you want also to use an error message managed by WordPress, select the error message text block and insert the attribute:

<Attribute name="item" value="error-message" />

<CopyElement title="Register Form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f2a","tag":"div","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f2b","b8fb6645-1635-5395-02a7-ed1cdac29f37","b8fb6645-1635-5395-02a7-ed1cdac29f3a"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"login-area","value":"register"}]}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f2b","tag":"form","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f2c","b8fb6645-1635-5395-02a7-ed1cdac29f31","c731f78b-8403-f822-b2f0-a6fbf533e83b","ee17013f-920d-1dd9-5197-f373db573aad","4702453b-5465-933d-b26c-db5a91ec8202","b8fb6645-1635-5395-02a7-ed1cdac29f2e","b8fb6645-1635-5395-02a7-ed1cdac29f2f","4837662d-9fdf-d991-cd9e-42e88e98a3f3","da668c13-530b-a5ef-54ba-7e95dd4f853d","0901adb7-babf-1c32-a035-d9d495156881","b8fb6645-1635-5395-02a7-ed1cdac29f36"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f2c","tag":"label","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f2d"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"first_name"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f2d","text":true,"v":"First Name"},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f31","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"first_name","data-name":"first_name","placeholder":"First name","type":"text","id":"first_name","disabled":false,"required":true},"form":{"type":"input","name":"first_name"}}},{"_id":"c731f78b-8403-f822-b2f0-a6fbf533e83b","tag":"label","classes":[],"children":["c731f78b-8403-f822-b2f0-a6fbf533e83c"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"username-3"}}},{"_id":"c731f78b-8403-f822-b2f0-a6fbf533e83c","text":true,"v":"Last Name"},{"_id":"ee17013f-920d-1dd9-5197-f373db573aad","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"last_name","data-name":"last_name","placeholder":"Last Name","type":"text","id":"last_name","disabled":false,"required":true},"form":{"type":"input","name":"last_name"}}},{"_id":"4702453b-5465-933d-b26c-db5a91ec8202","tag":"label","classes":[],"children":["4702453b-5465-933d-b26c-db5a91ec8203"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"username-3"}}},{"_id":"4702453b-5465-933d-b26c-db5a91ec8203","text":true,"v":"Username"},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f2e","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"username","data-name":"username","placeholder":"Username","type":"text","id":"username","disabled":false,"required":true},"form":{"type":"input","name":"username"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f2f","tag":"label","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f30"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f30","text":true,"v":"Password"},{"_id":"4837662d-9fdf-d991-cd9e-42e88e98a3f3","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":true},"form":{"type":"input","name":"password"}}},{"_id":"da668c13-530b-a5ef-54ba-7e95dd4f853d","tag":"label","classes":[],"children":["cbe5ca09-5634-0029-66eb-6696352f1439"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password_repeat"}}},{"_id":"cbe5ca09-5634-0029-66eb-6696352f1439","text":true,"v":"Confirm Password"},{"_id":"0901adb7-babf-1c32-a035-d9d495156881","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password_repeat","data-name":"password_repeat","placeholder":"Password Confirmation","type":"password","id":"password_repeat","disabled":false,"required":true},"form":{"type":"input","name":"password_repeat"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f36","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f37","tag":"div","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f38"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f38","tag":"div","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f39"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f39","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f3a","tag":"div","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f3b"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f3b","tag":"div","classes":[],"children":["b8fb6645-1635-5395-02a7-ed1cdac29f3c"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"error-message"}]}},{"_id":"b8fb6645-1635-5395-02a7-ed1cdac29f3c","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


> Please double check the names even after copying the element, since Webflow sometimes loves to change them 😥😥😥