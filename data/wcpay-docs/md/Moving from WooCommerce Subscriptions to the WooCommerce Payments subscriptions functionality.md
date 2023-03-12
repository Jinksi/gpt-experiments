# Moving from WooCommerce Subscriptions to the WooCommerce Payments subscriptions functionality

When using WooCommerce Payments, you have two options to sell subscription products:

*   The subscriptions functionality built into WooCommerce Payments
*   The [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension

## [Reasons to migrate](#reasons-to-migrate)

It may make sense to migrate your subscriptions from the Subscriptions extension to WooCommerce Payments subscriptions functionality in some cases. Those apply if:

*   You have few existing or active subscriptions, e.g. less than 20.
*   You don’t make enough money to justify the annual cost of Subscriptions.
*   You do not need [the advanced features](https://woocommerce.com/document/payments/subscriptions/comparison/#feature-matrix) of the Subscriptions extension.

## [How to migrate](#how-to-migrate)

To migrate from the Subscriptions extension to using the WooCommerce Payments built-in functionality, follow these steps:

1.  Install and activate WooCommerce Payments.
2.  [Complete the onboarding](https://woocommerce.com/document/payments/#section-3) for WooCommerce Payments.
3.  [Deactivate the Subscriptions extension](https://woocommerce.com/document/subscriptions/deactivation/).

After deactivating the WooCommerce Subscriptions extension, your store’s existing subscriptions will transition to using [manual renewals](https://woocommerce.com/document/subscriptions/renewal-process/#section-4). When the next renewal payment for an existing subscription comes due, an invoice will be emailed to the customer prompting them to log in and complete payment. After the customer pays for the renewal, the subscription will resume automatic payments using the payment method the customer provided.

You can manage existing subscriptions under the **WooCommerce > Subscriptions** page in the dashboard, just as you did with the Subscriptions extension.