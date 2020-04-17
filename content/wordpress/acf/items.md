---
description: ''
sidebar: 'wordpress'
prev: '/wordpress/acf/overview/'
next: '/wordpress/acf/tips/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';
​
# ACF Items
It's time now to know how each single ACF can be introduced in our Webflow to WordPress workflow, take a sit. 👨‍🏫
​
First, we need to see the general rule of the custom attribute we have to insert in Webflow and that is:
​
<DynamicAttribute name="acf:field-type" value="field-slug" />
​
With this general rule in mind, we can now analyze the individual ACF.
​
## Text
To insert an ACF Text field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="acf:text" value="field-slug" />
​
## Text Area
To insert an ACF Text Area field, you have to use a **Text Block** and insert the following attributes:
​
<DynamicAttribute name="acf:textarea" value="field-slug" />
​
## Number
To insert an ACF Number field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="acf:number" value="field-slug" />
​
## Url
To insert an ACF Url field, you have to use a **Text Link** or **Link Block** or **Button** and insert the following attributes:
​
<DynamicAttribute name="acf:url" value="field-slug" />
​
## Image
To insert an ACF Image field, you have to use a **Div Block** or **Image** and insert the following attributes:
​
<DynamicAttribute name="acf:image" value="field-slug" />
​
## Date
To insert an ACF Date field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="acf:date" value="field-slug" />
​
## Time
To insert an ACF Time field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="acf:time" value="field-slug" />
​
## Datetime
To insert an ACF Datetime field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="acf:datetime" value="field-slug" />
​
## Color
To insert an ACF Color field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="acf:color" value="field-slug" />
​
## Background Color
To insert an ACF Background Color field, you have to use a **Div Block** and insert the following attributes:
​
<DynamicAttribute name="acf:bgcolor" value="field-slug" />
​
## Link
To insert an ACF Link field, you have to use a **Link** element and insert the following attributes:
​
<DynamicAttribute name="acf:link" value="field-slug" />
​
## Switch
This is an on/off button and to insert an ACF Switch field, you can use **any element** and add the following attributes:
​
<DynamicAttribute name="acf:switch" value="field-slug" />
​
## File
It allows to upload a file and to insert an ACF File field, you have to use a **Button** or **Link** element and add the following attributes:
​
<DynamicAttribute name="acf:file" value="field-slug" />
​
## oEmbed
The oEmbed field provides an interactive component for embedding videos, images, tweets, audio, and other content.
To insert an ACF oEmbed field, you have to use a **Div Block** and insert the following attributes:
​
<DynamicAttribute name="acf:oembed" value="field-slug" />
​
[Here](https://wordpress.org/support/article/embeds/#okay-so-what-sites-can-i-embed-from) you can find the full list of all the elements you can embed from.
​
## Repeater
**This is only for ACF PRO users** and it allows to repeat a field. You can use **any element** that will be repeated and add the following attribute:
​
<DynamicAttribute name="acf:repeater" value="field-slug" />
​
Of course, you can repeat each other field handled by ACF, so inside the element in which you have entered the repeater attribute, you can insert the following subfields:
​
- Text
- Text Area
- Rich Text
- Url
- Image
- Date
- Time
- Datetime
- Color
- Background Color
- Link
- Switch
- File
- oEmbed
​

These subfields must have an attribute whose general pattern is:
​
<DynamicAttribute name="subfield:field-type" value="field-slug" />
​
Now, the Adapter already creates the custom fields for ACF, except those of the repeater that YOU must create. In the next document you will see how to do that. 🤙
Collapse



