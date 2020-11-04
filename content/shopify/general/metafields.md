---
description: ''
sidebar: 'shopify'
prev: '/shopify/general/js-events/'
---

import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# Metafields

The metafields object is a powerful tool that allows users to expand the standard Shopify functionality, modify themes and integrate custom apps by adding additional data to the main resources such as products, collections and blogs. 
There are many apps in Shopify that allow you to edit metafields, there is one that is Free of charge and we usually use and is [Metafield Guru](https://apps.shopify.com/metafields-editor-2).

> **Note**: a metafield can be defined by two features: *Namespace* and *Key*.

> **Namespace** is used to group different metafields and by default is *global*.

> **Key** is used to reference a specific metafield and the value is up to you. Please remind that it can't contain spaces neither uppercase characters.

## Namespace

By default the adapter will use *global* as value for the namespace. On **ALL** the elements defined below you can add the optional attribute:

<DynamicAttribute name="namespace" value="your-namespace-name" />

to change the namespace to use.

## Article Metafields

Below you will find all the attributes that can be used to use Metafield for articles.

#### Text

On any text you can add the attribute

<DynamicAttribute name="article-metafield:text" value="metafield-key" />

To output the value of the metafield as text content of the element where the attribute is applied to.

For example: if you add 

<Attribute name="article-metafield:text" value="my_custom_subheading" />

on a heading element, you will get the following liquid output:

```liquid
<h2>{{article.metafields.global.my_custom_subheading}}</h2>
```

#### Image

You can add this attribute to any image or background image:

<DynamicAttribute name="article-metafield:image" value="metafield-key" />

Shopify automatically compress the photo, and optimizes the photo, you can add the following optional attributes to change shopify parameters 

##### Dimension 
you can change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use these prefixed values below, ordered by largest to smallest: 

<code class="value">master</code>,<code class="value">grande</code>, <code class="value">large</code>, <code class="value">medium</code>, <code class="value">compact</code>, <code class="value">small</code>, <code class="value">thumb</code>, <code class="value">icon</code>, <code class="value">pico</code> 

or you can set a fixed width x height (or just one of the parameters):

<code class="dynamic-value">{width}x{height}</code>, <code class="dynamic-value">{width}x</code>, <code class="dynamic-value">x{height}</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300x500" />

##### Crop

You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the crop parameter specifies what part of the image to show.

You can specify crop using the attribute:

<DynamicAttribute name="crop" value="crop position" />

Valid options are:

<code class="value">top</code>, <code class="value">center</code>, <code class="value">bottom</code>, <code class="value">left</code> and <code class="value">right</code>

##### Scale

The scale parameter lets you specify the pixel density of the image. You can add it using the attribute:

<DynamicAttribute name="scale" value="scale factor" />

Valid options are: 

<code class="value">2</code> and <code class="value">3</code>


##### Format

The format parameter lets you specify what file format to use for the displayed image.

You can specify it adding the attribute:

<DynamicAttribute name="format" value="format type" />

Valid options are: 

<code class="value">jpg</code> and <code class="value">pjpg</code>

**pjpg** is progressive JPEG. A browser loads a full-sized progressive JPEG with gradually increasing quality, instead of loading the full-quality image from top to bottom like a traditional JPEG.

> Note that Shopify can do the only the following format conversions for you:
> * PNG to JPG
> * PNG to PJPG
> * JPG to PJPG

#### Color

You can add this attribute to any text element to modify the color:

<DynamicAttribute name="article-metafield:color" value="metafield-key" />

#### Border Color

You can add this attribute to any element to modify the border color:

<DynamicAttribute name="article-metafield:brcolor" value="metafield-key" />

#### Background Color

You can add this attribute to any element to modify the background color:

<DynamicAttribute name="article-metafield:bgcolor" value="metafield-key" />

#### Link

You can add this attribute to any link element to modify the src attribute:

<DynamicAttribute name="article-metafield:link" value="metafield-key" />

## Product Metafields

Below you will find all the attributes that can be used to use Metafield for products.

#### Text

On any text you can add the attribute

<DynamicAttribute name="product-metafield:text" value="metafield-key" />

To output the value of the metafield as text content of the element where the attribute is applied to.

For example: if you add 

<Attribute name="product-metafield:text" value="my_custom_subheading" />

on a heading element, you will get the following liquid output:

```liquid
<h2>{{product.metafields.global.my_custom_subheading}}</h2>
```

#### Image

You can add this attribute to any image or background image:

<DynamicAttribute name="product-metafield:image" value="metafield-key" />

Shopify automatically compress the photo, and optimizes the photo, you can add the following optional attributes to change shopify parameters 

##### Dimension 
you can change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use these prefixed values below, ordered by largest to smallest: 

<code class="value">master</code>,<code class="value">grande</code>, <code class="value">large</code>, <code class="value">medium</code>, <code class="value">compact</code>, <code class="value">small</code>, <code class="value">thumb</code>, <code class="value">icon</code>, <code class="value">pico</code> 

or you can set a fixed width x height (or just one of the parameters):

<code class="dynamic-value">{width}x{height}</code>, <code class="dynamic-value">{width}x</code>, <code class="dynamic-value">x{height}</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300x500" />

##### Crop

You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the crop parameter specifies what part of the image to show.

You can specify crop using the attribute:

<DynamicAttribute name="crop" value="crop position" />

Valid options are:

<code class="value">top</code>, <code class="value">center</code>, <code class="value">bottom</code>, <code class="value">left</code> and <code class="value">right</code>

##### Scale

The scale parameter lets you specify the pixel density of the image. You can add it using the attribute:

<DynamicAttribute name="scale" value="scale factor" />

Valid options are: 

<code class="value">2</code> and <code class="value">3</code>


##### Format

The format parameter lets you specify what file format to use for the displayed image.

You can specify it adding the attribute:

<DynamicAttribute name="format" value="format type" />

Valid options are: 

<code class="value">jpg</code> and <code class="value">pjpg</code>

**pjpg** is progressive JPEG. A browser loads a full-sized progressive JPEG with gradually increasing quality, instead of loading the full-quality image from top to bottom like a traditional JPEG.

> Note that Shopify can do the only the following format conversions for you:
> * PNG to JPG
> * PNG to PJPG
> * JPG to PJPG

#### Color

You can add this attribute to any text element to modify the color:

<DynamicAttribute name="product-metafield:color" value="metafield-key" />

#### Border Color

You can add this attribute to any element to modify the border color:

<DynamicAttribute name="product-metafield:brcolor" value="metafield-key" />

#### Background Color

You can add this attribute to any element to modify the background color:

<DynamicAttribute name="product-metafield:bgcolor" value="metafield-key" />

#### Link

You can add this attribute to any link element to modify the src attribute:

<DynamicAttribute name="product-metafield:link" value="metafield-key" />


## Collection Metafields

Below you will find all the attributes that can be used to use Metafield for products.

#### Text

On any text you can add the attribute

<DynamicAttribute name="collection-metafield:text" value="metafield-key" />

To output the value of the metafield as text content of the element where the attribute is applied to.

For example: if you add 

<Attribute name="collection-metafield:text" value="my_custom_subheading" />

on a heading element, you will get the following liquid output:

```liquid
<h2>{{collection.metafields.global.my_custom_subheading}}</h2>
```

#### Image

You can add this attribute to any image or background image:

<DynamicAttribute name="collection-metafield:image" value="metafield-key" />

Shopify automatically compress the photo, and optimizes the photo, you can add the following optional attributes to change shopify parameters 

##### Dimension 
you can change the size of the featured image, you can add the following optional attribute:

<DynamicAttribute name="dimension" value="dimension of the image" />

As for valid dimension you can use these prefixed values below, ordered by largest to smallest: 

<code class="value">master</code>,<code class="value">grande</code>, <code class="value">large</code>, <code class="value">medium</code>, <code class="value">compact</code>, <code class="value">small</code>, <code class="value">thumb</code>, <code class="value">icon</code>, <code class="value">pico</code> 

or you can set a fixed width x height (or just one of the parameters):

<code class="dynamic-value">{width}x{height}</code>, <code class="dynamic-value">{width}x</code>, <code class="dynamic-value">x{height}</code>

For example to set a fixed size image of 300x500 add the attribute

<Attribute name="dimension" value="300x500" />

##### Crop

You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the crop parameter specifies what part of the image to show.

You can specify crop using the attribute:

<DynamicAttribute name="crop" value="crop position" />

Valid options are:

<code class="value">top</code>, <code class="value">center</code>, <code class="value">bottom</code>, <code class="value">left</code> and <code class="value">right</code>

##### Scale

The scale parameter lets you specify the pixel density of the image. You can add it using the attribute:

<DynamicAttribute name="scale" value="scale factor" />

Valid options are: 

<code class="value">2</code> and <code class="value">3</code>


##### Format

The format parameter lets you specify what file format to use for the displayed image.

You can specify it adding the attribute:

<DynamicAttribute name="format" value="format type" />

Valid options are: 

<code class="value">jpg</code> and <code class="value">pjpg</code>

**pjpg** is progressive JPEG. A browser loads a full-sized progressive JPEG with gradually increasing quality, instead of loading the full-quality image from top to bottom like a traditional JPEG.

> Note that Shopify can do the only the following format conversions for you:
> * PNG to JPG
> * PNG to PJPG
> * JPG to PJPG

#### Color

You can add this attribute to any text element to modify the color:

<DynamicAttribute name="collection-metafield:color" value="metafield-key" />

#### Border Color

You can add this attribute to any element to modify the border color:

<DynamicAttribute name="collection-metafield:brcolor" value="metafield-key" />

#### Background Color

You can add this attribute to any element to modify the background color:

<DynamicAttribute name="collection-metafield:bgcolor" value="metafield-key" />

#### Link

You can add this attribute to any link element to modify the src attribute:

<DynamicAttribute name="collection-metafield:link" value="metafield-key" />