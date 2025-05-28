=== Product Questions & Answers for WooCommerce ===
Plugin Name: Product Questions & Answers for WooCommerce
Contributors: expresstechsoftware, sunnysoni
Donate link: https://www.paypal.me/supportsunny
Author URI: https://www.expresstechsoftwares.com
Author: ExpressTech Software Solutions Pvt. Ltd.
Tags: questions, answers, discussions, woocommerce, forum, storefront, details,	e-commerce, expresstech
Requires PHP: 7.0
Requires at least: 5.6
Tested up to: 6.5
Stable tag: 1.2.9
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Allows the customers to ask questions about products and admin to answer/moderate them.

== Description ==

This plugin allows the customers to ask questions about each product in your store and admin to answer/update/delete them and add new questions from the backend product page.
You can also drag and drop questions to change their order of appearance.

**PLUGIN'S FEATURES:**
1. Avails logged-in customers to ask questions about each product.
2. Avails Administrator and Shop Manager to moderate questions and give answers.
3. Avails Administrator and Shop Manager to change the order of question-answer pair on front-end.
4. Infinite AJAX loading on frontend, so your customers can view all questions without reloading the page.
5. Enable/Disable paginations, change page size, update "Load More" button text and layout. 
6. Two question-answer layouts available for front-end: Normal and Accordion.
7. Shortcode [display_qa_list] to display the list of questions and answers anywhere. If not used on a product page, include the product_id parameter to specify the product.
8. Shortcode [qa_form] to display the question submission form for a product. If you are using it on a page other than the WooCommerce product page, include the product_id parameter to specify the ID of the product you want to associate the question with.


== Installation ==
1. Ensure you have the latest version of the plugin installed.
2. Unzip and upload the contents of the plugin to your /wp-content/plugins/ directory.
3. Activate the plugin through the 'Plugins' menu in WordPress.


== Frequently Asked Questions ==

Do you have questions or issues with Product Questions & Answers? mail me on business@expresstechsoftwares.com

= Where can customers ask their questions? =
On the single product page (detail page), this plugin will add a new tab 'Q & A' there, which will have a form to post the question.

= Where admin can answer the questions = 
On the backend product page, the plugin will add a new tab 'Q & A' which will allow the admin to answer/edit/delete/add questions.

= What if I am using a page builder like Elementor/Divi for my product page? =
The plugin provides a shortcode [display_qa_list], you can place it using the page builder.


== Screenshots ==
1. Single product page (front-end): question submission and listing.
2. Admin screen for questions.
3. Admin setting options, you can change the listing type, page size and enable/disable paginations here.


== Configuration ==

No configuration needed! just install and it will start working from there, you can change the settings at any time though.

== Changelog ==

= 1.0.1 =
- Added multi-language support.

= 1.1.1 =
- Fix: Fixed the email not being sent for questions and answers.
- Dev: Added the emails for changes in the answers by site admin.

= 1.2.0 =
- Dev: Added the ability to approve / unapprove questions and a global setting to record questions as approved or unapproved.
- Dev: Added some hooks to customize the plugin.

= 1.2.2 =
- Fix: Fixed a PHP warning on the admin screen.

= 1.2.3 =
- Compatibility Testing: Tested plugin compatibility with the latest WordPress and WooCommerce versions.

= 1.2.4 =
- New Compatibility: Added the compatibility for WooCommerce HPOS (High-Performance Order Storage).

= 1.2.5 =
- Update: Added support for WordPress 6.5 compatibility. Tested successfully.

= 1.2.6 =
- Dev: Added the shortcode [display_qa_list]

= 1.2.7 =
- Fixed the blockage in the AJAX requests.

= 1.2.8 =
- Dev: Replaced old text domain to some places

= 1.2.9 =
- Dev: Added new shortcode [qa_form] to display the form at any location.