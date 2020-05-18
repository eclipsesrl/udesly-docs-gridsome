---
sidebar: 'wordpress'
prev: '/wordpress/login-area/'
next: '/wordpress/login-area/register-form/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';

# Login Form

A Login form is used to enter authentication credentials to access a restricted page.

Insert a form block and add the attribute:

<Attribute name="login-area" value="login" />

The form must have the following input fields:

| Name | Type |
|--|--|
| username | text/plain |
| password | password |
| remember_me| checkbox |
| | submit |

Please mind that all names must be in lowercase.

If you want also to use an error message managed by WordPress, select the error message text block and insert the attribute:

<Attribute name="item" value="error-message" />

<CopyElement title="Login Form">{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ce5","tag":"div","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822ce6","e432f1f5-508b-0cc1-4eac-671e71822cf2","e432f1f5-508b-0cc1-4eac-671e71822cf5"],"type":"FormWrapper","data":{"form":{"type":"wrapper"},"xattr":[{"name":"login-area","value":"login"}]}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ce6","tag":"form","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822ce7","e432f1f5-508b-0cc1-4eac-671e71822ce9","e432f1f5-508b-0cc1-4eac-671e71822cea","e432f1f5-508b-0cc1-4eac-671e71822cec","e432f1f5-508b-0cc1-4eac-671e71822ced","e432f1f5-508b-0cc1-4eac-671e71822cf1"],"type":"FormForm","data":{"attr":{"id":"email-form","name":"email-form","data-name":"Email Form"},"form":{"type":"form","name":"Email Form"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ce7","tag":"label","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822ce8"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"username-2"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ce8","text":true,"v":"Username"},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ce9","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"username","data-name":"username","placeholder":"Email or Username","type":"text","id":"username","disabled":false,"required":true},"form":{"type":"input","name":"username"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cea","tag":"label","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822ceb"],"type":"FormBlockLabel","data":{"form":{"type":"label"},"attr":{"for":"password-2"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ceb","text":true,"v":"Password"},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cec","tag":"input","classes":[],"children":[],"type":"FormTextInput","data":{"attr":{"autofocus":false,"maxlength":256,"name":"password","data-name":"password","placeholder":"Password","type":"password","id":"password","disabled":false,"required":true},"form":{"type":"input","name":"password"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822ced","tag":"div","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822cee","e432f1f5-508b-0cc1-4eac-671e71822cef"],"type":"FormCheckboxWrapper","data":{"form":{"type":"checkbox"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cee","tag":"input","classes":[],"children":[],"type":"FormCheckboxInput","data":{"attr":{"type":"checkbox","id":"remember_me","name":"remember_me","data-name":"remember_me"},"form":{"type":"checkbox-input","name":"remember_me"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cef","tag":"label","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822cf0"],"type":"FormInlineLabel","data":{"form":{"type":"checkbox-label"},"attr":{"for":"remember_me"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf0","text":true,"v":"Remember me"},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf1","tag":"input","classes":[],"children":[],"type":"FormButton","data":{"attr":{"type":"submit","value":"Submit","data-wait":"Please wait..."},"form":{"type":"button","wait":"Please wait..."}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf2","tag":"div","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822cf3"],"type":"FormSuccessMessage","data":{"form":{"type":"msg-done"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf3","tag":"div","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822cf4"],"type":"Block","data":{"tag":"div","text":true}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf4","text":true,"v":"Thank you! Your submission has been received!"},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf5","tag":"div","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822cf6"],"type":"FormErrorMessage","data":{"form":{"type":"msg-fail"}}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf6","tag":"div","classes":[],"children":["e432f1f5-508b-0cc1-4eac-671e71822cf7"],"type":"Block","data":{"tag":"div","text":true,"xattr":[{"name":"item","value":"error-message"}]}},{"_id":"e432f1f5-508b-0cc1-4eac-671e71822cf7","text":true,"v":"Oops! Something went wrong while submitting the form."}],"styles":[],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0}}</CopyElement>


> Please double check the names even after copying the element, since Webflow sometimes loves to change them 😥😥😥