# What happens to my subscriptions if I deactivate the WooCommerce Payments plugin?

With WooCommerce Payments, you have two options to sell subscription products:

*   The [built-in subscriptions functionality](https://woocommerce.com/document/payments/subscriptions/).
*   The [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension.

See [this document](https://woocommerce.com/document/payments/subscriptions/comparison/) for a comparison between the two.

This document explains what happens to subscriptions if you deactivate the WooCommerce Payments plugin under **Plugins > Installed Plugins**. Because you could potentially be using WooCommerce Payments by itself or in combination with the Subscriptions extension, this document covers both scenarios.

This document does not cover what happens if you simply [disable WooCommerce Payments as an active gateway](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/disable-gateway/).

## [Existing subscriptions](#existing-subscriptions)

### [Using WooCommerce Payments](#existing-subscriptions-using-woocommerce-payments)

If you attempt to deactivate the WooCommerce Payments plugin while your site has active subscriptions, a popup warning will be shown asking for confirmation:

![](https://woocommerce.com/wp-content/uploads/2022/12/image-65.png)

If you deactivate, any subscriptions purchased with WooCommerce Payments that were not cancelled prior to the plugin being deactivated _will continue to collect payments from customers_. This is due to the the [off-site billing engine](https://woocommerce.com/document/payments/subscriptions/comparison/#billing-engine) that WooCommerce Payments uses.

Furthermore, because WooCommerce Payments is disabled, your site will no longer generate the corresponding WooCommerce orders or send the associated emails to customers. As you can imagine, **this situation is almost never advisable.**

**If you do not want renewal payments to continue to be processed, you should cancel all subscriptions before deactivating WooCommerce Payments.**

If you’ve taken your site down or otherwise cannot simply reactivate WooCommerce Payments and cancel existing subscriptions, please [contact our support staff](https://woocommerce.com/my-account/create-a-ticket/).

### [Using Subscriptions extension](#existing-subscriptions-using-subscriptions-extension)

If you deactivate the WooCommerce Payments plugin while using the Subscriptions extension, subscriptions that used WooCommerce Payments as their payment method will transition to using [manual renewals](https://woocommerce.com/document/subscriptions/renewal-process/#section-2) instead.

Renewal orders will be created once payment is due. Those orders will require [subscribers to login and pay for renewal](https://woocommerce.com/document/subscriptions/renewal-process/#section-4) to resume the subscription, even if the subscription had automatic renewal payments prior to deactivating WooCommerce Payments.

## [New subscriptions](#new-subscriptions)

### [Using WooCommerce Payments](#new-subscriptions-using-woocommerce-payments)

When using the subscriptions functionality built-in to WooCommerce Payments, subscription purchases can only be processed via WooCommerce Payments. Other payment gateways will not be available during checkout when a subscription product is in the cart.

For this reason, if WooCommerce Payments is installed and active, but disabled as a gateway, customers with subscription products in their cart will see a notice saying that there are no available payment methods which support subscriptions.

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-02-at-16.15.36-UTC@2x.png)

### [Using the Subscriptions extension](#new-subscriptions-using-the-subscriptions-extension)

If you use the Subscriptions extension, purchases of subscription products will work as normal, so long as you have at least one other [gateway that supports Subscriptions](https://woocommerce.com/document/subscriptions/payment-gateways/).