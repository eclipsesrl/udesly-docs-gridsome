---
sidebar: 'wordpress'
prev: '/wordpress/login-area/login-form/'
next: '/wordpress/login-area/logout/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Reset Authentication Flow

Reset authentication flow is made up of 2 different forms that *MUST* be in the same page.

## Lost Password

This form is required to request a reset password link.

On a Form block add the attribute:

<Attribute name="login-area" value="lost-password" />

| Name | Type |
|--|--|
| | text/plain |
| | submit |

If you want also to use an error message managed by WordPress, select the error message text block and insert the attribute:

<Attribute name="item" value="error-message" />

<CopyElement title="Lost Password">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b2f","tag":"div","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b30","44a90916-a14f-815a-a92d-30c94e2c3b38","44a90916-a14f-815a-a92d-30c94e2c3b3b"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"login-area","value":"lost-password"}]}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b30","tag":"form","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b31","44a90916-a14f-815a-a92d-30c94e2c3b33","44a90916-a14f-815a-a92d-30c94e2c3b37"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b31","tag":"label","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b32"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"name"}}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b32","text":true,"v":"Name"},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b33","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"name","data-name":"Name","placeholder":"Email or Username","type":"text","id":"name","disabled":false,"required":true},"form":{"type":"input","name":"Name"}}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b37","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b38","tag":"div","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b39"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b39","tag":"div","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b3a"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b3a","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b3b","tag":"div","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b3c"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b3c","tag":"div","classes":[],"children":["44a90916-a14f-815a-a92d-30c94e2c3b3d"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"error-message"}]}},{"_id":"44a90916-a14f-815a-a92d-30c94e2c3b3d","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


## Reset Password

Insert a form block and add the attribute:

<Attribute name="login-area" value="reset-password" />

The form must have the following input fields:

| Name | Type |
|--|--|
| password | password |
| password_repeat | password |
| | submit |

Please mind that all names must be in lowercase.

If you want also to use an error message managed by WordPress, select the error message text block and insert the attribute:

<Attribute name="item" value="error-message" />

<CopyElement title="Reset Password Form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdbc","tag":"div","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdbd","23fe460b-9dc7-4f83-93ad-869c1fd4bdc5","23fe460b-9dc7-4f83-93ad-869c1fd4bdc8"],"type":"FormWrapper","data":{"form":{"type":"wrapper"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdbd","tag":"form","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdbe","23fe460b-9dc7-4f83-93ad-869c1fd4bdc0","23fe460b-9dc7-4f83-93ad-869c1fd4bdc1","23fe460b-9dc7-4f83-93ad-869c1fd4bdc3","23fe460b-9dc7-4f83-93ad-869c1fd4bdc4"],"type":"FormForm","data":{"attr":{"id":"email-form-2","name":"email-form-2","data-name":"Email Form 2"},"form":{"type":"form","name":"Email Form 2"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdbe","tag":"label","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdbf"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdbf","text":true,"v":"Password"},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc0","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":false},"form":{"type":"input","name":"password"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc1","tag":"label","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdc2"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password_repeat"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc2","text":true,"v":"Password Repeat"},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc3","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password_repeat","data-name":"password_repeat","placeholder":"Password Confirmation","type":"password","id":"password_repeat","disabled":false,"required":true},"form":{"type":"input","name":"password_repeat"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc4","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc5","tag":"div","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdc6"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc6","tag":"div","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdc7"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc7","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc8","tag":"div","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdc9"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdc9","tag":"div","classes":[],"children":["23fe460b-9dc7-4f83-93ad-869c1fd4bdca"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"error-message"}]}},{"_id":"23fe460b-9dc7-4f83-93ad-869c1fd4bdca","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


> Please double check the names even after copying the element, since Webflow sometimes loves to change them 😥😥😥