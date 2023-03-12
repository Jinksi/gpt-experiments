# Deactivating WooCommerce Subscriptions with WooCommerce Payments active

If you’re using [WooCommerce Payments](https://woocommerce.com/document/payments/), you have two options to sell subscription products:

*   The subscriptions functionality built into WooCommerce Payments, or…
*   The separate [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension.

This document reviews what happens if you are using WooCommerce Payments in addition to the Subscriptions extension, and then you deactivate the Subscriptions extension under **Plugins > Installed Plugins** in your WordPress dashboard.

**NOTE:** WooCommerce Subscriptions and the WooCommerce Payments subscriptions functionality have some [differences in features](https://woocommerce.com/document/payments/subscriptions-basics/comparison/). Please be sure that you are not using any of the features exclusive to the Subscriptions extension before deactivating it.

## [Warning when deactivating Subscriptions](#warning)

If you go to **Plugins > Installed Plugins** and click the **Deactivate** link for the Subscriptions extension, a popup will warn you of the consequences of doing so:

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-09-at-19.37.40-UTC@2x.png)

To deactivate Subscriptions, click **Yes, deactivate WooCommerce Subscriptions**. Otherwise, click **Cancel** to keep WooCommerce Subscriptions activated.

## [Effects on existing subscriptions](#existing-subscriptions)

Existing subscriptions will be set to [manual renewal](https://woocommerce.com/document/subscriptions/renewal-process/#section-4) as soon as the Subscriptions extension is deactivated. This means that, on their next renewal date, your subscribers will get an email with a link to log into your site and pay for their renewal by hand.

After the customer has manually renewed one time, WooCommerce Payments will “take over” the subscription and automatic payments will resume.

## [Effects on new subscriptions](#new-subscriptions)

New subscriptions will start with WooCommerce Payments from the first transaction, and as such will not need to renewal manually.