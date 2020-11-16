---
---

# Changelog

## 2.5.2 - Nov, 16 - 2020
#### WordPress
* Added tweak for wc:specific-product

## 2.5.1 - Nov, 16 - 2020
#### Shopify
* Added few attributes for mini cart

## 2.5.0 - Nov, 13 - 2020
#### Jamstack
* Added automatic Snipcart conversion

## 2.4.5 - Nov, 9 - 2020
#### Jamstack
* Tweaked conversion to escape data inside html attributes correctly

## 2.4.4 - Nov, 9 - 2020
#### Jamstack
* Fixed config.yaml to use correctly reference fields

## 2.4.3 - Nov, 6 - 2020
#### Jamstack
* Tweaked Netlify CMS config.yml SEO is now collapsed by default

## 2.4.2 - Nov, 5 - 2020
#### Jamstack
* Tweaked filter function

#### WordPress
* Fixed Conditional ACF for taxonomy pages

## 2.4.1 - Nov, 5 - 2020
#### Jamstack
* Bugfixed filter for Exists condition

## 2.4.0 - Nov, 4 - 2020

#### Shopify
* Added metafields attributes

#### Jamstack
* Added Chrome Extension to automatically convert Jamstack powered Websites

## 2.3.18 - Aug, 31 - 2020

#### Shopify
* Added attribute item=add-to-cart that can be used inside shop:product div

#### Netlify
* Added automatic sitemap conversion

#### WordPress
* ACF used on taxonomy page will now use correct code to fetch data from taxonomy for certain types of ACF fields.
* Added support for ACF Object.


## 2.3.17 - Aug, 11 - 2020

#### WordPress
* Fixed adjacent posts links to show correct permalink

## 2.3.16 - Jul, 31 - 2020

#### Shopify
* Fixed wrong custom error notification code

## 2.3.15 - Jul, 31 - 2020

#### WordPress
* Fixed woocommerce notices templates
* Added checkbox to do not export ACF files
* Fixed link to files

## 2.3.14 - Jul, 16 - 2020

#### Shopify
* Fixed form success status

## 2.3.13 - Jul, 06 - 2020

#### Shopify
* Added additional files uploader

## 2.3.12 - Jul, 03 - 2020

#### WooCommerce
* Added thank you actions for order confirmation page

## 2.3.11 - Jun, 23 - 2020

* Minor bug fix

## 2.3.10 - June, 17 - 2020



#### Shopify
* Fixed wrong empty collection list conversion 


## 2.3.9 - June, 15 - 2020

#### WordPress
* Added Prev/Next Post conversion

## 2.3.8 - June, 11 - 2020

#### All CMSs
* Added automatic conversion for data-src attribute

#### WordPress Doc
* Added missing element documentation richtext for ACF
* Added missing documentation for [global options](/wordpress/general/global-options/)

## 2.3.7 - June, 01 - 2020

#### Shopify
* Fixed mini cart image, now showing selected variation

## 2.3.6 - May, 27 - 2020

#### Shopify
* Fixed mini cart product featured image 

#### Netlify 
* Added Experimental multi image field
* Fixed multiple csv fields causing broken installations

## 2.3.5 - May, 22 - 2020

#### Shopify
* Fixed bug with blocks label
* Fixed bug for add to carts in single product page

## 2.3.4 - May, 21 - 2020 

#### WooCommerce 
* Added 2 new elements relative to product attributes that can be used inside [Collection List Items](/wordpress/woocommerce/collection-item-elements/#attributes) and [Single Product](/wordpress/woocommerce/single-product-elements/#attributes) Page

## 2.3.3 - May, 19 - 2020

#### WooCommerce
* Fixed missing hook inside variable add to cart.

## 2.3.2 - May, 19 - 2020

#### Shopify
* Added optional parameter "form-modifier" for single product add to cart. [Read More](/shopify/shop/product-page-elements/#form-modifier)

## 2.3.1 - May, 18 - 2020

#### Netlify
* Added a new error when csv files are wrongly named and corresponding to non-created templates.

#### Ghost
* Fixed authors elements

## 2.3.0 - May, 15 - 2020

#### General
* Improved error message for unrecognized pages

#### Shopify
* Removed invalid characters from assets urls like spaces or @;
* Added author-first-name element;
* Added author-last-name element;
* Added Masonry Archive Articles;
* Added more options for article lists (now from the Shopify backend you can also set order, and a tag filter);
* Added specific article element;
* Added currency selector element;
* Fixed user total spent formatting;
* Order Confirmation page is now converted as Order Page;
* Changed Order Cancel Reason to use Cancel Reason Label instead of Raw value;
* Added Order Financial Status;
* Added Order Fulfillment Status;
* Added Order Note;
* Added Order Transactions with Transactions Data;
* Added optional elements (address and remove address) inside addresses list element;
* Fixed invalid translation key for alternative templates;
* Added mega-menu element to support 1 level of nested menus;
* Sections can now be added on Article, Aside, Div, Footer, Header or Section and not only Divs;
* Added support for blocks inside sections;
* Added option border color for sections;
* Added a different add to cart with dropdowns;
* Added optional limit for product tags and collections;
* Added product variable price;

#### WordPress
* Added alt tag for featured images;
* Added element formatted-price for WooCommerce

## 2.2.20 - April, 23 - 2020

#### Shopify
* Fixed urls for fonts inside css files

## 2.2.19 - April, 22 - 2020

#### Netlify CMS

* Added a polyfill to fix lazyloading of css on Firefox and Safari

## 2.2.18 - April, 22 - 2020

#### WordPress

* Fixed Lists term description that was adding the description as href and not text

## 2.2.17 - April, 22 - 2020

#### Shopify
Added Spanish translations

## 2.2.16 - April, 19 - 2020

#### WordPress
Modified css exported injected from the Adapter

## 2.2.15 - April, 16 - 2020

##### Shopify

Bug fixed lightbox links

## 2.2.14 - April, 15 - 2020

#### Shopify
Added default language option for Shopify conversion

## 2.2.13 - April, 14 - 2020

#### Shopify
Bug fixed wrongly converted page Addresses 

## 2.2.12 - April, 9 - 2020

#### Shopify
Bug fixed option type color for Shopify Sections

## 2.2.11 - April, 9 - 2020

#### Shopify
Bug fixed option type html for Shopify Sections

## 2.2.10 - March, 22 - 2020

Added Shopify Newsletter form

## 2.2.9 - March, 19 - 2020

#### WordPress

* You can now use a list of Taxonomies for custom post types

## 2.2.8 - March, 13 - 2020

Udesly Adapter Cheat Sheets
Added Cheat Sheets link to the app. The easiest way to add all the necessary custom attributes to convert your Webflow projects. [More details](https://cheatsheets.udesly.com/).

## 2.2.7 - February, 10 - 2020

#### Bugfix

Fixed wrong conversion on CSV import for Netlify CMS

## 2.2.6 - January, 31 - 2020

#### Bugfix

Fixed permalinks for pages nested inside folders on Netlify CMS

## 2.2.5 - January, 28 - 2020

#### Bugfix

Minor bugfix

## 2.2.4 - January, 23 - 2020

#### Shopify Pages

You can now create alternative templates for collection, product, article and blog pages.

## 2.2.3 - January, 22 - 2020

#### WooCommerce 3.9.0 compatibility
Changed the WooCommerce Notices Template to be up-to-date with WooCommerce 3.9.0 version.

## 2.2.2 - January, 19 - 2020

#### Shopify Improvements
Added Specific Image for Shopify Product

## 2.2.1 - January, 15 - 2020

#### Bugfix

Enhanced compatibility with the quantity input for WooCommerce


## 2.2.0 - January, 8 - 2020

#### Netlify CMS

With the Udesly Adapter APP you can create full-static websites visually, using Webflow. Once your design is complete, you don't need to jump back to Webflow to make changes. All the dynamic content is easily manageable from the Netlify CMS, and hosted starting for Free.

#### WordPress

* Masonry Layout (for WordPress Posts and WooCommerce Products), You can now design your Archive posts and products layout in a Masonry fashion.
* Order Confirmation Page for WooCommerce

## 2.1.2 - November, 6 - 2019

#### Error Messages
* Added a new Error Message to notify the users when the homepage is set incorrectly.

## 2.1.1 - November, 5 - 2019

#### Bug Fix
* Resolved CSS issue that made Webflow style rendering different when uploaded on WordPress, Shopify and Ghost.

## 2.1.0 - November, 4 - 2019

#### Added Ghost Support
The Udesly Adapter now support Ghost. You can design your Ghost Theme totally in Webflow without writing a single line of code.

## 2.0.0 - August, 26 - 2019

#### Web App
Re-designed from scratch
The Udesly Adapter is no longer available as desktop application, but it can be accessed directly from your browser. This allow us to push updates faster and more features in less time. Performances have been heavily improved, now the conversion is processed in few seconds.

#### Improved Custom Attributes System
The Webflow custom attributes needed for each elements dropped by 60%. They are easier to insert and understand and workflow is smoother.

#### WordPress Improvements
* Better support for Custom Post Types of third party;
* Pagination Support for Recent Posts;
* Mini Cart now supports Webflow easing and options;
* Added Product Variations element;
* Added support for My Account and Cart Page;
* Added support for CMS Lightbox;

#### Redesigned Udesly WordPress Plugin;
* Added support for password protected pages;

#### Shopify Improvements
* Number of Shopify mandatory pages decreased;
* Added support for Shopify sections;
* Mini Cart now supports Webflow easing and options;
* Added Product Variations element;

## 1.7.1 - March, 27 - 2019

#### Shopify Images
From now on you can add custom attribute to all the images elements to change the image dimension.

#### Frontend Editor Bugfix
Fixed issues on the udesly-duplicate attribute.

## 1.7.0 - March, 7 - 2019

#### Webflow e-commerce elements compatibility
From now on you can use some of the Webflow eCommerce elements to create your Shopify, WooCommerce and Easy Digital Downloads stores

#### Starter Templates
Introduced new Webflow Starter Templates for WordPress, Shopify, WooCommerce and Easy Digital Downloads. You can customize each aspect of the template, add content and pages without limits to your design.

#### Elements Packs
Introduced new Elements Pack for WordPress, WooCommerce and Easy Digital Downloads. At last you can find all the necessary elements in one single Webflow project.

## 1.6.0 - February, 13 - 2019

#### New Frontend Editor
* Introduced a new Frontend Editor that works only with newly converted websites (old ones will still use the old frontend editor until version 2.0.0);
* Added possibility to edit links and other types of text elements;
* Added possibility to disable frontend editor, all texts will be translatable through WordPress translate function (Beta);


#### Shopify
* Added possibility to translate texts for Shopify (Beta);
* Fixed product gallery thumbnail click (Shopify);

#### WordPress
* Fixed remove item from mini cart (Easy Digital Downloads);
* Fixed products slider (WooCommerce)


## 1.5.0 - October, 11 - 2018

First release of Shopify Integration. From now on you can create a real and complete Shopify Theme with Webflow.

## 1.4.0 - October, 1 - 2018

#### Easy Digital Downloads integration
A list of cloneable elements you can copy and paste into your Webflow project and get ready to use with Easy Digital Downloads.

#### Restrict Content Pro integration
Added Restrict Content Pro integration. To customize the RCP Shortcodes you need to use the Udesly Customizer plugin.

#### Udesly App
Added drop zone in the Udesly APP (Win/MacOS)
Added a drop zone to drag and drop the Webflow zip file to the Udesly App.

## 1.3.0 - September, 3 - 2018

#### Introducing the WooCommerce integration
* A list of cloneable elements you can copy and paste into your Webflow project and get ready to use with WooCommerce.
* WooCommerce native support: shop, products, mini cart, single product page.
* WordPress Sidebar support
* New Udesly Adapter APP "My Templates" page;

#### New Udesly Customizer Plugin
This free plugin allows users to customize the WooCommerce default pages (My Account, Checkout and Cart) directly through the frontend Wordpress Customizer.

#### Udesly Wordpress Plugin
Added Wocommerce settings and rules

## 1.2.0 - July, 26 - 2018

#### Introducing the Udesly Elements
A list of cloneable elements you can copy and paste into your Webflow project and get ready to use with WordPress (you don't need to learn/remember the Udesly custom attributes anymore).

#### Dynamic Menu
You can now use WordPress dynamic menus with your Webflow navbar or dropdown.

#### Custom Post Type
You can now use WordPress natively custom post types with the Udesly Adapter. Custom post types can be generated directly from the Udesly WordPress plugin, and are automatically generated when you press "import Webflow data" if you used them in Webflow.

#### Advanced Custom Field
Added the compatibility with ACF. You can use old ACF version, but it's recommended to use version 5 or higher due to a better data sync.

#### Disqus
Added the compatibility with Disqus.


## 1.1.0 - June, 27 - 2018

#### Blog

* Masonry Layout for Blog Posts and recent posts;
* Internal pagination for single post page;
* Date and Time with custom formats;

#### FTP System
* Added possibility to upload the WordPress converted theme directly from the Udesly Adapter App;

#### General
* Added possibility to use WordPress custom fields;
* Added redirect option for all forms (powered by WordPress);

#### Boxes
* Added dynamic box for all post types;
* Dynamic Slider (manage Webflow slider images directly from WordPress);

#### Udesly WordPress Plugin
* Added option to use parent category template for all sub-categories;
* Added possibility to customize the Welcome e-mail in WordPress;
* Added notification warnings for contents, rules and lists used in Webflow and not created in WordPress;
* Conditional
* Added conditional custom field and condition dynamic box checks;

#### Social
* Added fully customizable social share links;

## 1.0.3 - June, 19 - 2018

* Added Windows EV code signing certificate (avoid windows warning screen during setup);

## 1.0.2 - June, 4 - 2018

* Fixed Email validation for login to be W3C compliant;

* Added small footers info with version information and changelog link;

## 1.0.1 - June, 1 - 2018

* Fixed "Headers already sent" issue on older servers;
* Added Copy & Past for MacOs version;

## 1.0.0 - May, 30 - 2018


