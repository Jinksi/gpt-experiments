# Which add-ons are compatible with subscriptions built-in to WooCommerce Payments?

If you’re using [WooCommerce Payments](https://woocommerce.com/document/payments/), you have two options to sell subscription products:

*   The subscriptions functionality built into WooCommerce Payments, or…
*   The separate [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) extension.

These two offerings are both powered by [much of the same code](https://github.com/Automattic/woocommerce-subscriptions-core/). This makes it possible for most [extensions that add features to WooCommerce Subscriptions](https://woocommerce.com/product-category/woocommerce-extensions/merchandising/subscriptions-merchandising/) to also add those same features to WooCommerce Payments’ built-in subscriptions.

The following extensions are confirmed to be compatible with WooCommerce Payments:

*   [All Products for WooCommerce Subscriptions](https://woocommerce.com/products/all-products-for-woocommerce-subscriptions/)
*   [AutomateWoo](https://woocommerce.com/products/automatewoo/)
*   [AutomateWoo – Refer A Friend add-on](https://woocommerce.com/products/automatewoo-refer-a-friend/)
*   [WooCommerce Subscriptions Downloads](https://woocommerce.com/products/woocommerce-subscription-downloads/)
*   [Gifting for WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions-gifting/)
*   [Product Bundles](https://woocommerce.com/products/product-bundles/)
*   [Composite Products](https://woocommerce.com/products/composite-products/)
*   [Conditional Shipping and Payments](https://woocommerce.com/products/conditional-shipping-and-payments/)
*   [Follow-Ups](https://woocommerce.com/products/follow-up-emails/)
*   [EU VAT Number](https://woocommerce.com/products/eu-vat-number/)
*   [Stripe](https://woocommerce.com/products/stripe/)
*   [PayPal Payments](https://woocommerce.com/products/woocommerce-paypal-payments/)
*   [Braintree for WooCommerce](https://woocommerce.com/products/woocommerce-gateway-paypal-powered-by-braintree/)
*   [Sensei products](https://senseilms.com/)
*   [Shipment Tracking](https://woocommerce.com/products/shipment-tracking/)
*   [Gift Cards](https://woocommerce.com/products/gift-cards/)
*   [WooCommerce Points and Rewards](https://woocommerce.com/products/woocommerce-points-and-rewards/)
*   [Back In Stock Notifications](https://woocommerce.com/products/back-in-stock-notifications/)

That said, some other extensions perform a check to see if the WooCommerce Subscriptions plugin is active. Of course, if you’re using the subscriptions functionality built into WooCommerce Payments, the WooCommerce Subscriptions plugin will not be active, and this check will fail. In these cases, the extension may need to be updated to support WooCommerce Payments.

## [Developer updates](#section-1)

**NOTE:** This section provides example code intended for use by developers.

If you’ve tested your extension with both WooCommerce Subscriptions and the WooCommerce Payments subscriptions functionality, it can be updated to load when either one is available.

The recommended approach is shown here:

if ( class\_exists( 'WC\_Subscriptions' ) || class\_exists( 'WC\_Subscriptions\_Core\_Plugin' ) ) {
   // Load any subscriptions functionality
}

If you need to check for a specific version of the subscriptions code:

if ( class\_exists( 'WC\_Subscriptions\_Core\_Plugin' ) && version\_compare( WC\_subscriptions\_Core\_Plugin::instance()->get\_plugin\_version(), '3.1.0', '>=' ) ) {
   // Load any subscriptions functionality for version 3.1.0 or later
}