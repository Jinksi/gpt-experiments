# Subscriptions with WooCommerce Payments

When using [WooCommerce Payments](https://woocommerce.com/document/payments/), you have two options to sell subscription products:

*   The built-in subscriptions functionality
*   The [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension

This document provides information on using the subscriptions built into WooCommerce Payments. For help choosing the ideal solution for your business, refer to the [guide comparing subscription options](https://woocommerce.com/document/payments/subscriptions/comparison/).

If using the WooCommerce Subscriptions extension with WooCommerce Payments, everything will work as covered in the [WooCommerce Subscriptions store manager guide](https://woocommerce.com/document/subscriptions/store-manager-guide/). If you are already using WooCommerce Subscriptions and want to move to built-in subscriptions, refer to the [guide to moving](https://woocommerce.com/document/payments/subscriptions/moving-from-woocommerce-subscriptions/).

## [Eligibility requirements](#eligibility)

To be eligible to use subscriptions built-in to WooCommerce, you must:

*   Be based in the United States. Not yet available for territories of the US.
*   Have the [WooCommerce Payments plugin](https://woocommerce.com/products/woocommerce-payments/) active.
*   Have a WooCommerce Payments account that is enabled for payments.
*   Offer credit and debit cards via WooCommerce Payments as a payment method on checkout.

## [Set up subscriptions](#section-2)

After [setting up WooCommerce Payments](https://woocommerce.com/document/payments/#section-2) version **3.2.0** or newer, subscription functionality will be available and ready to use. There is no special configuration required.

To create a subscription product:

1.  Go to **WooCommerce > Products > Add new**
2.  Select **Simple Subscription** as the product type.
3.  Set the terms for the subscription, including **price**, **billing interval**, **billing period**, **length**, **sign-up fee** and **trial period** (length, sign-up fee and trial period are all optional).
4.  Add any other product details you require, as instructed by [Managing Products](https://woocommerce.com/document/managing-products/).
5.  Click **Publish**.

Your store now has a subscription product available that customers can subscribe to using WooCommerce Payments.

Once purchased, future recurring payments on the associated subscription will be processed automatically with [renewal orders](https://woocommerce.com/document/subscriptions/orders/) generated in your store for you to track and manage. You can also [manage the subscriptions via the **WooCommerce > Subscriptions** administration dashboard](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-13).

## [Subscription settings](#section-3)

When you enable Subscriptions with WooCommerce Payments, you can find the Subscriptions setting at **WP Admin > WooCommerce > Settings > Subscriptions**:

![](https://woocommerce.com/wp-content/uploads/2022/08/wcpay-subscription-setting.png)

## [Viewing transactions linked to a subscription](#section-4)

To view all transactions for a particular subscription

1.  Go to **WooCommerce > Subscriptions**.
2.  Click the subscription ID number for the particular subscription you’re interested in.
    *   This will open the _Edit Subscription_ page for that particular subscription.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-19-at-13.23.30-UTC@2x.png)

3.  At the bottom of the page, the _Related Orders_ section contains all orders associated with that subscription.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-19-at-13.26.19-UTC@2x.png)

## [Payment method changes](#section-5)

If needed, store owners can change the payment method used to pay for subscriptions order from the WooCommerce dashboard. To do so, follow these steps:

1.  Go to **WooCommerce > Subscriptions**.
2.  Click the subscription ID number for the particular subscription you’re interested in.
    *   This will open the _Edit Subscription_ page for that particular subscription.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-19-at-13.23.30-UTC@2x.png)

3.  Click the pencil icon in the _Billing_ section at the top.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-19-at-13.33.26-UTC@2x.png)

4.  Scroll down to the bottom of the billing info form, to the _Saved Payment Method_ dropdown.
5.  Click the dropdown menu and select a new payment method, if one is available.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-19-at-13.35.52-UTC@2x.png)

6.  Click the **Update** button to update the subscription to use the new payment method.

## [Disable built-in subscriptions](#section-6)

**NOTE:** When the Subscriptions extension is activated, the built-in WooCommerce Payments subscriptions functionality will remain in use for pre-existing subscriptions only. Any subscriptions created after the activation of the Subscriptions extension will use the [on-site billing engine](https://woocommerce.com/document/payments/subscriptions-basics/comparison/#billing-engines).

If you need to manually disable subscriptions functionality built-in to WooCommerce Payments:

1.  Go to **Payments > Settings**
2.  Select **Advanced settings** at the bottom of the screen
3.  Select **Enable Subscriptions with WooCommerce Payments** to uncheck the box

## [Tracking fees](#section-7)

On subscription-related transactions via the subscription functionality built-in to WooCommerce Payments, an [additional fee](https://woocommerce.com/document/payments/faq/fees/) is charged. This fee is included on transactions for the initial sale of a subscription product and the future recurring payments associated with the subscription.

On the timeline of subscription-related transactions, visible under **Payments > Transactions > Payment details** screen, this fee will be displayed as a separate line item on the charge:

![](https://woocommerce.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-05-at-11.21.45-am.png?w=650)

Example timeline of subscription-related payment

## [Extension compatibility](#section-8)

The WooCommerce.com marketplace offers many extensions for the [WooCommerce Subscriptions extension](https://woocommerce.com/product-category/woocommerce-extensions/merchandising/subscriptions-merchandising/) itself that expand its functionality. Because the WooCommerce Subscriptions code is used to power subscriptions with WooCommerce Payments, many of these extensions can work with both subscription options. However, the extension may require a small change to be compatible, as explained in the [Developer updates section of the add-on compatibility FAQ](https://woocommerce.com/document/payments/faq/subscriptions/compatibility/).

## [Preview availability](#section-9)

The subscription functionality built into WooCommerce Payments is currently available in preview release. During this time, **it is only available to US merchants for debit and credit card payments**. Merchants in the US can sell subscriptions to customers in other countries in [over 100 different currencies](https://woocommerce.com/document/payments/faq/available-currencies/).

This functionality will be made available to other [supported countries](https://woocommerce.com/document/payments/countries/) and for other [payment methods available in WooCommerce Payments](https://woocommerce.com/document/payments/additional-payment-methods/), like Sofort and iDeal, in the coming months.

If you want to see the built-in subscriptions functionality with WooCommerce Payments be made available in your country, or for WooCommerce Payments’ [additional payment methods](https://woocommerce.com/document/payments/additional-payment-methods/), please request or vote for that request on the [Feature Requests board](https://woocommerce.com/feature-requests/woocommerce-payments/).

Alternatively, you can use the [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension with WooCommerce Payments in [any supported country](https://woocommerce.com/document/payments/countries/).

## [Subscriptions with Indian cards](#subscriptions-with-indian-cards)

Due to [Reserve Bank of India regulations](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11668) around how payment processors can charge cards issued by banks in India, paying for subscriptions with an Indian card may present some issues for your customers. These are explained below.

### [Subscriptions created before version 5.2.0](#section-11)

Customers who initiate subscriptions while the merchant’s site is running WooCommerce Payments **5.1.2 or prior** will have all of their automatic renewals fail. Specifically, the initial purchase will work, but all renewals after that will fail with `transaction_not_allowed`.

At that point, the customer will get an email alerting them that their renewal has failed. They will need to log into the merchant website and pay for the order manually, at which point the subscription will resume (until the next renewal, when it will fail again).

### [Subscriptions created after version 5.2.0](#section-12)

Customers who initiate subscriptions while the merchant’s site is running WooCommerce Payments **5.2.0 or later** will have a much better experience. The initial purchase will be subject to [3DS](https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/3d-secure/), but after that, renewals happen automatically and without customer interaction.

There is one exception: renewals that exceed 15,000 Indian rupees (INR) will require an additional manual verification process via the customer’s bank.

Also, please note that [payment method updates](https://woocommerce.com/document/subscriptions/customers-view/#section-11) on these subscriptions will not work yet, although a fix for that is in development by our engineering team.

### [Updating existing subscriptions](#section-13)

If you have subscriptions on your site created with a WooCommerce Payments version prior to 5.2.0, and wish to allow your customers to get the newer, more convenient automatic renewals, the best method for doing that is to simply [cancel their existing subscriptions](https://woocommerce.com/document/subscriptions/store-manager-guide/#cancel-or-suspend-subscription) when their existing term is over, and then advise the customers to start a fresh subscription.

It’s likely best to communicate this plan to your customers ahead of time though, as cancelling their subscriptions will send them an automated email, which could cause confusion if they see it with no advance warning.

## [Migrating](#section-14)

If you’re using [WooCommerce Payments](https://woocommerce.com/document/payments/), you have two options to sell subscription products:

*   The subscriptions functionality built into WooCommerce Payments, or…
*   The [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension mentioned above.

If you are already using one subscription offering and want to migrate to the other option, please refer to our guides here:

*   [Moving from Subscriptions to WooCommerce Payments](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/moving-from-subscriptions-plugin/)
*   [Moving from WooCommerce Payments to Subscriptions](https://woocommerce.com/document/payments/subscriptions/upgrade-to-extension/)