# Can I use WooCommerce Payments and the Stripe plugin at the same time?

You can use our Stripe extension and WooCommerce Payments at the same time. However, because these two payment gateways are similar, using both is almost never necessary. We highly suggest that you read [our comparison of the two](https://woocommerce.com/document/woocommerce-payments-vs-stripe-plugin-comparison/) in addition to this document.

If you do decide to use both, there are a few issues to be aware of, explained below.

## [Multiple Apple or Google Pay buttons](#multiple-apple-or-google-pay-buttons)

Using WooCommerce Payments and Stripe together may mean that both plugins will load their own Apple Pay and Google Pay buttons, which looks odd and can cause confusion.

![](https://woocommerce.com/wp-content/uploads/2022/08/image-14.png)

Two Apple Pay buttons on a product page, from WooCommerce Payments and Stripe

To avoid this, you can disable Apple Pay and Google Pay in either the [Stripe](https://woocommerce.com/document/stripe/#express-checkouts) or [WooCommerce Payments](https://woocommerce.com/document/payments/#section-13) settings. (Or both, if you don’t want to use them at all.)

## [Similar payment names in checkout](#similar-payment-names-in-checkout)

If you’re using both plugins to accept payments, the names they’re given in the checkout form may be confusingly similar, especially if you enable the [new checkout experience](https://woocommerce.com/document/woocommerce-payments/payment-methods/additional-payment-methods/#enabling) in both.

![](https://woocommerce.com/wp-content/uploads/2022/08/image-15.png)

Stripe and WooCommerce Payments on the checkout page

To get around this, you can change the name of the Stripe plugin by going to **WooCommerce > Settings > Payments > All payment methods > Stripe > Settings** and editing the name:

![](https://woocommerce.com/wp-content/uploads/2022/08/image-16.png)

Changing the name of the Stripe payment method shown on the checkout page

The WooCommerce Payments name [can also be changed](https://woocommerce.com/document/woocommerce-payments/customization-and-translation/change-title-in-checkout/) if need be.

## [Stripe hidden for subscription orders](#stripe-hidden-for-subscription-orders)

WooCommerce Payments allows you to [sell subscription products](https://woocommerce.com/document/payments/subscriptions/) without installing any other extensions. However, these products cannot be paid for using other gateways. Thus, the Stripe payment method will be hidden during checkout if the customer has a WooCommerce Payments subscription product in your cart.

The screenshot below is an example of how the checkout form will look with a WooCommerce Payments subscription product in the cart. The Stripe plugin is active, but hidden.

![](https://woocommerce.com/wp-content/uploads/2022/08/image-18.png)

The checkout page with the Stripe payment method hidden