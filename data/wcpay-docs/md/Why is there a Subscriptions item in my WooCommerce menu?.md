# Why is there a Subscriptions item in my WooCommerce menu?

Starting with WooCommerce 6.6, a _Subscriptions_ item in the menu offers eligible merchants a chance to use the [built-in subscriptions functionality](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/) of WooCommerce Payments.

![](https://woocommerce.com/wp-content/uploads/2022/06/Markup-2022-05-30-at-18.10.30.png)

## [Eligibility criteria](#eligibility-criteria)

In order to see the _Subscriptions_ menu item suggestion, the site must:

*   Allow tracking under **WooCommerce > Settings > Advanced > WooCommerce.com**.
*   Be based in the U.S.
*   Be at least 6 months old.
*   Have at least 1 order in the last 30 days.
*   Not have any of the following plugins installed:
    *   WooCommerce Subscriptions
    *   WooCommerce Payments
    *   Sumo Subscriptions
    *   YITH Subscriptions
    *   Subscripto
    *   Subscriptions For WooCommerce

## [Remove the Subscriptions menu item](#remove-menu-item)

To remove the _Subscriptions_ item from the WooCommerce menu, click the **No Thanks** button and the _Subscriptions_ item will disappear.

To programmatically remove the item (if, for example, you are a hosting provider or developer), create an option named `woocommerce-wcpay-subscriptions_dismissed` and set it to `yes`. This will prevent the _Subscriptions_ item from displaying even for qualifying merchants.

## [Returning the Subscriptions menu item](#return-menu-item)

There is no real reason to bring the _Subscriptions_ menu item back after dismissing it, since you can still get started at any time by simply [installing WooCommerce Payments](https://woocommerce.com/document/payments/) and using [the built-in subscriptions features](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/).

However, if you need to bring the _Subscriptions_ menu item back after dismissing it, you can delete the `woocommerce-wcpay-subscriptions_dismissed` option in your database. This will restore the menu item provided you meet the criteria above.