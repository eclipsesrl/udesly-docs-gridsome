---
sidebar: 'wordpress'
prev: '/wordpress/general/boxes/'
---
import Attribute from '@/components/Attribute.vue';
import DynamicAttribute from '@/components/DynamicAttribute.vue';
import CopyElement from '@/components/CopyElement.vue';


# PHP Elements

> ⚠️ ADVANCED USERS ONLY ⚠️

PHP elements are advanced elements that can help you to achieve custom functionalities without modifying directly the exported theme. They can be used in all the theme and are meant for advanced users who knows how PHP works. To inject PHP code you have 2 ways:


## Embeds

Inside embed elements you can add directly liquid code using the special tag provided by the Adapter ```<udesly-php>```

as a *pretty useless* example, you can add inside an embed this code:


```html
<udesly-php>echo date('Y-m-d H:i:s');</udesly-php>
```

and it will be converted in PHP as:

```php
<?php echo date('Y-m-d H:i:s'); ?>
```
If you are asking yourself why you should use the ```<udesly-php>``` tag to wrap the code, the answer is really simple, to be sure that the encoding is maintained correctly, some times Webflow loves to encode the characters inside embeds, and this special tag ensure the correct encoding for PHP!



## If

The following attribute:

<DynamicAttribute name="php:if" value="condition" />

can be added to any element. That element will be wrapped into an if condition tag, in this way you can hide elements based on difficult or arbitrary conditions that are not covered by the conditional elements. 

For example, if you add a paragraph with the attribute 

<Attribute name="php:if" value="current_user_can('administrator')" />

the code will be converted as: 
```php
<?php if (current_user_can('administrator')) : ?>
    <p>My paragraph</p>
<?php endif ?>
```

## For

The following attribute:

<DynamicAttribute name="php:for" value="condition" />

can be added to any element. That element will be wrapped into a for loop.

For example, if you add a paragraph with the attribute 

<Attribute name="php:for" value="$i = 1; $i <= 10; $i++" />

the code will be converted as: 
```php
<?php for ($i = 1; $i <= 10; $i++) : ?>
    <p>My paragraph</p>
<?php endfor ?>
```

This code is pretty useless, and will basically print My paragraph multiple times 😬

## Foreach

The following attribute:

<DynamicAttribute name="php:foreach" value="condition" />

can be added to any element. That element will be wrapped into a foreach loop.

For example, if you add a paragraph with the attribute 

<Attribute name="php:foreach" value="$arr as $key => $value" />

the code will be converted as: 
```php
<?php foreach ($arr as $key => $value) : ?>
    <p>My paragraph</p>
<?php endforeach ?>
```

This code is pretty useless, and will basically print My paragraph multiple times 😬

## While

The following attribute:

<DynamicAttribute name="php:while" value="condition" />

can be added to any element. That element will be wrapped into a while loop.

For example, if you add a paragraph with the attribute 

<Attribute name="php:while" value="$i <= 10" />

the code will be converted as: 
```php
<?php while ($i <= 10) : ?>
    <p>My paragraph</p>
<?php endwhile ?>
```

This code example is not only pretty useless, it will also deplete all your server resources, since the loop will never end! So **DON'T USE IT** 😂. Unless you want to saturate your RAM on purpose 💣💣💣

## Echo

The following attribute:

<DynamicAttribute name="php:echo" value="expression" />

can be added to any element. The text content of the element will echo the expression.

For example, if you add a paragraph with the attribute 

<Attribute name="php:echo" value="date('Y-m-d H:i:s');" />

the code will be converted as: 
```php
<p><?php echo date('Y-m-d H:i:s'); ?></p>
```

## PHP

This is the most generic tag you can use, the following attribute:

<DynamicAttribute name="php" value="expression" />

can be added to any element and by default will output the expression as the text content of your element.

For example, if you add a paragraph with the attribute 

<Attribute name="php" value="echo date('Y-m-d H:i:s');" />

the code will be converted as: 
```php
<p><?php echo date('Y-m-d H:i:s'); ?></p>
```

Yes, is the exact thing as before.

But this tag as support for a modifier:

<DynamicAttribute name="where" value="html attribute" />

That means that you can decide the html point where you can output your code. For example if you add on a paragraph the attributes:

<Attribute name="php" value="global $post; echo $post->id;" />

<Attribute name="where" value="id" />

```php
<p id="<?php global $post; echo $post->id; ?>">My paragraph</p>
```