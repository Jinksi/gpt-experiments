# WooCommerce Payments Safe Mode

WooCommerce Payments Safe Mode helps prevent disruptions to your store in cases where two or more sites are connected to the same WooCommerce Payments account. You’ll know your site is in Safe Mode when you see the following warning:  

![](https://woocommerce.com/wp-content/uploads/2022/01/safe-mode-woocommerce-payments.png)

## [When does Safe Mode happen?](#when-does-safe-mode-happen)

Safe Mode is activated when your site’s address changes for one of the following reasons:

*   You bought a new domain name and updated your site to use that domain.
*   You cloned your site from production to staging, or from staging to production.
*   You’ve allowed two URLs to point to the same WordPress installation.
*   Your site was created with Bitnami, Amazon Lightsail, or similar services.
*   Your site as multiple web servers running behind a load balancer.
*   Any other scenario where the address of your site might change.

## [What potential issues could Safe Mode cause WooCommerce Payments?](#what-issues-could-safe-mode-cause)

While Safe Mode is active, payments will not be interrupted, so your customers can still finish checking out on your site with WooCommerce Payments. 

However, some features may not be available, or will at least be unreliable, until you solve the root issue. Some of those are:

*   Dispute and refund updates.
*   Payment confirmations for [alternative payment methods](https://woocommerce.com/document/payments/additional-payment-methods/#available-methods).

## [What does each button do?](#what-does-each-button-do)

The Safe Mode notice, pictured above, has the following buttons: **Transfer Your Connection** and **Create a New Connection**. Each is explained below.

### [Transfer your connection](#section-4)

Clicking this option moves all WooCommerce Payments data to the current site, including your account information, transaction history, deposits, payments, and so on.

The other site will be disconnected from the WooCommerce Payments account.

### [Create a new connection](#section-5)

Clicking this option means that, with respect to WooCommerce Payments, the current site will start over as a brand new site. You will have to go through the signup process again in order to get WooCommerce Payments working and accept payments. No transaction or other history will be moved to the current site.

The other site will continue using WooCommerce Payments without any changes.

## [Dynamic Site URLs](#dynamic-site-urls)

In some cases, WooCommerce Payments can be put into Safe Mode when the WordPress site URL is defined in a “dynamic” way. This most often happens when sites have been created by Bitnami, or are hosted on Amazon Lightsail, or are running on multiple web servers behind a load balancer.

To determine if this applies to you, check your `wp-config.php` file for the presence of code similar to this:

define( 'WP\_SITEURL', 'http://' . $\_SERVER\['HTTP\_HOST'\] . '/' );
define( 'WP\_HOME', 'http://' . $\_SERVER\['HTTP\_HOST'\] . '/' );

If that code is present, you’ll want to remove it and replace it with this code instead:

define( 'WP\_SITEURL', 'https://www.example.com' );
define( 'WP\_HOME', 'https://www.example.com' );

Be sure to swap out the example domain with your actual domain!

Making this change in your `wp-config.php` file should prevent the site from being placed into Safe Mode in the future.