---
sidebar: 'wordpress'
prev: '/wordpress/general/php-elements/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Global Options

You can add several dynamic elements that can be customized by the WordPress Customizer, that can be found by following the path *WordPress > Appearance > Customize*. If you add the same slug, they will be created only once, so they can be used to create Global Elements that can be found in multiple pages with the same content.

Note that for every

## Text
To insert a global Text field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="option:text" value="option-slug" />
​

## Text Area
To insert a global Text Area field, you have to use a **Text Block** and insert the following attributes:
​
<DynamicAttribute name="option:textarea" value="option-slug" />

## Number
To insert a global Number field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="option:number" value="option-slug" />
​
## Url
To insert a global Url field, you have to use a **Text Link** or **Link Block** or **Button** and insert the following attributes:
​
<DynamicAttribute name="option:url" value="option-slug" />
​
## Image
To insert a global Image field, you have to use a **Div Block** or **Image** and insert the following attributes:
​
<DynamicAttribute name="option:image" value="option-slug" />

## Color
To insert an global Color field, you have to use a **Text Block** or **Paragraph** or **Heading** and insert the following attributes:
​
<DynamicAttribute name="option:color" value="option-slug" />
​
## Background Color
To insert an global Background Color field, you have to use a **Div Block** and insert the following attributes:
​
<DynamicAttribute name="option:bgcolor" value="option-slug" />