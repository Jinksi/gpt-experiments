# WooCommerce Payments: Testing & Troubleshooting

WooCommerce Payments includes several tools to help you test things out in your store before taking actual payments. We also have a handy guide to common errors that, although rare, do occur from time to time.

## [Troubleshooting](#section-1)

Although WooCommerce Payments is designed to be dependable and broadly compatible with other plugins, problems can occur in any complex piece of software. Our [self-service guide](https://woocommerce.com/document/woocommerce-self-service-guide/) explains how to resolve many common issues.

If need be, you can [contact our support staff](https://woocommerce.com/my-account/create-a-ticket/) for assistance. Before doing so, however, it may help to [enable logging](https://woocommerce.com/document/woocommerce-payments/settings-guide/#debug-mode) first, since that is a common step required to diagnose many issues.

## [Test mode](#test-mode)

By default, WooCommerce Payments will place real charges on real payment methods, such as credit and debit cards.

WooCommerce Payments also provides an easy-to-enable test mode, which simulates the real payments process as closely as possible. This way, you can try out the various features of WooCommerce Payments on your site without charging a live payment method.

Please see [our guide to using test mode](https://woocommerce.com/document/payments/testing/) for instructions on how to enable and use test mode.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-28-at-14.59.15-UTC@2x.png)

The “Test mode active” warning shows when WooCommerce Payments is in test mode.

## [Dev mode](#dev-mode)

If you want to try out WooCommerce Payments on a site that does not need to process real payments, you can use [Dev Mode](https://woocommerce.com/document/payments/testing/dev-mode/). This can come in handy on staging sites and the like.

With Dev Mode, it’s possible to create a test account that requires no personal information. This account can then be used to process test transactions. It will only operate in Test Mode and cannot be used to process live transactions.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-28-at-15.11.39-UTC@2x.png)

The “Test mode” setting indicating that dev mode is active.

If you are a developer or agency setting up a site for a client, we have [a few guidelines](https://woocommerce.com/document/payments/faq/developer-or-agency-setup/) that will be helpful as you do that.

## [Safe mode](#safe-mode)

[Safe mode](https://woocommerce.com/document/payments/faq/safe-mode/) helps prevent issues in cases where duplicated sites are connected to the same WooCommerce Payments account, which may occur when you clone your site to or from a staging site to a live one. Please see guide linked above for tips on what can cause Safe Mode to be triggered, as well as how to address the issue.

Safe mode should almost never be triggered deliberately. Instead, we suggest using Dev Mode (explained above) on staging sites.

## [Clearing the account cache](#clearing-account-cache)

To improve performance, WooCommerce Payments caches some information in the WordPress database. On occasion, you may be asked by our support team to clear this cache. To do so:

1.  Go to **WooCommerce > Status > Tools** page.
2.  Scroll down to the **Clear WooCommerce Payments account cache** tool.
3.  Click **Clear**.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-04-at-12.33.47-UTC@2x.png)

Clearing the account cache under WooCommerce > Status > Tools

This tool will clear the cached account details so that they are immediately refreshed from the WooCommerce Payments server.