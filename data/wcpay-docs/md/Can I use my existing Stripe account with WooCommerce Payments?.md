# Can I use my existing Stripe account with WooCommerce Payments?

It is not possible to use an existing Stripe account with WooCommerce Payments.

Although WooCommerce Payments is [built in partnership with Stripe](https://woocommerce.com/document/payments/powered-by-stripe/), our plugin uses a special kind of Stripe account (called a Stripe Express account). The Express account is created when you sign up for WooCommerce Payments.

If you are logged into Stripe.com with an existing Stripe account when you start the WooCommerce Payments signup process, your new Express account can be _linked_ with an existing Stripe account. However, they will still be two separate accounts that do not share or sync data in any way.

It is not possible to link the WooCommerce Payments Express account with a regular Stripe account after onboarding.

If you must use an existing Stripe account on your WooCommerce store, please use the free [Stripe extension](https://woocommerce.com/woocommerce-and-stripe/). If you are unsure whether to use WooCommerce Payments or the Stripe extension, consult our [comparison page](https://woocommerce.com/document/woocommerce-payments-vs-stripe-plugin-comparison/).