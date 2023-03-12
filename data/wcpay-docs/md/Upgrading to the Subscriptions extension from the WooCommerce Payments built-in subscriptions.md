# Upgrading to the Subscriptions extension from the WooCommerce Payments built-in subscriptions

When using WooCommerce Payments, you have two options to sell subscription products:

*   The built-in subscriptions functionality
*   The [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension

If your store has been using the subscriptions functionality built-in to WooCommerce Payments, and you want to begin using the Subscriptions extension, this page is for you.

## [Using Subscriptions for new subscriptions only](#new-subscriptions)

To start using the WooCommerce Subscriptions extension for new subscriptions, simply purchase, install, and activate it on your site. From that point on, your store will automatically begin using Subscriptions to power newly created subscriptions.

Pre-existing subscriptions will continue to use the WooCommerce Payments [billing engine](https://woocommerce.com/document/payments/subscriptions/comparison/#billing-engine), and the [additional subscription fees](https://woocommerce.com/document/payments/faq/fees/) will continue to be charged on those.

## [Using Subscriptions for all subscriptions](#all-subscriptions)

If you would like to move your new _and_ pre-existing WooCommerce Payments subscriptions over to the Subscriptions extension, the “cleanest” way to do so would be to:

1.  Purchase, install, and activate the Subscriptions extension on the site, as described in the above section.
    *   This way, newly created subscriptions would use the Subscriptions billing engine, not the WooCommerce Payments engine.
2.  Identify all subscribers that use the WooCommerce Payments billing engine.
    *   You can do this by opening your subscriptions, under **WooCommerce > Subscriptions**, and looking for a “WooCommerce Payments Subscription ID” field.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-01-at-15.41.17-UTC@2x.png)

Identifying a WooCommerce Payments subscription

3.  Reach out to those customers via email and let them know that they should cancel their subscription, wait for it to expire at the end of their current subscription term, and then repurchase a new subscription.
    *   While this is admittedly inconvenient, you can explain it by mentioning that they will gain access to many more payment methods than were available beforehand, since WooCommerce Payments subscriptions can only be paid for with cards.
4.  Once those pre-existing subscribers all cancel and repurchase, they too will be using the Subscriptions extension billing engine, and all subscriptions will be successfully transitioned away from WooCommerce Payments.