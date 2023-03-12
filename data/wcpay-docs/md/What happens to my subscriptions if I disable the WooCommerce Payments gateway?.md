# What happens to my subscriptions if I disable the WooCommerce Payments gateway?

With WooCommerce Payments, you have two options to sell subscription products:

*   The [built-in subscriptions functionality](https://woocommerce.com/document/payments/subscriptions/).
*   The [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension.

See [this document](https://woocommerce.com/document/payments/subscriptions/comparison/) for a comparison between the two.

This document explains what happens to subscriptions when the WooCommerce Payments gateway [is disabled](https://woocommerce.com/document/woocommerce-payments/settings-guide/#section-2) in the settings. It does not cover what happens if you [deactivate the WooCommerce Payments plugin](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/deactivate/) itself.

## [Existing subscriptions](#existing-subscriptions)

Disabling the WooCommerce Payments gateway only affects the payment options displayed in the WooCommerce checkout form. Because existing subscriptions renew automatically _without_ going through the checkout form, they will not be affected. In other words, existing subscribers will continue to renew via WooCommerce Payments without issue.

This applies to all subscriptions that renew automatically, regardless of whether or not you use the Subscriptions extension in conjunction with WooCommerce Payments.

If you use the Subscriptions extension and have some subscribers that [renew manually](https://woocommerce.com/document/subscriptions/renewal-process/#section-4), they will still be able to renew using any payment gateways that remain enabled.

## [New subscriptions](#new-subscriptions)

When using the subscriptions functionality built-in to WooCommerce Payments, subscription purchases can only be processed via WooCommerce Payments. Other payment gateways will not be available during checkout when a subscription product is in the cart.

For this reason, if WooCommerce Payments is installed and active, but disabled as a gateway, customers with subscription products in their cart will see a notice saying that there are no available payment methods which support subscriptions.

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-02-at-16.15.36-UTC@2x.png)

To allow customers to buy subscriptions again, you will either need to:

*   Use the [Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/) and [a compatible gateway](https://woocommerce.com/document/subscriptions/payment-gateways/).
*   Enable WooCommerce Payments as a gateway again.