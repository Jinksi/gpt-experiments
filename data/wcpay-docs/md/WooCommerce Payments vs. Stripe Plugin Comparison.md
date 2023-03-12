# WooCommerce Payments vs. Stripe Plugin Comparison

Because WooCommerce Payments is built [in partnership with Stripe](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/), it can sometimes be difficult to determine whether to use WooCommerce Payments or [the Stripe plugin itself](https://woocommerce.com/products/stripe/). In order to help you choose between the two, we’ve highlighted some important differences here.

It’s also possible to use both gateways at the same time, although this does [cause a few issues](https://woocommerce.com/document/can-i-use-woocommerce-payments-and-the-stripe-plugin-at-the-same-time/) to be aware of.

### [WordPress dashboard integration](#dashboard-integration)

WooCommerce Payments is designed to integrate closely with your WordPress website. It does this by displaying all your transaction data, deposit records, [Capital loan](https://woocommerce.com/document/woocommerce-payments-stripe-capital/) details, and other information right within your site’s dashboard. This means you don’t need to leave your site’s admin interface to perform common business tasks.

![](https://woocommerce.com/wp-content/uploads/2022/08/image-10.png)

Bank account deposits inside the WordPress dashboard

The regular Stripe plugin is not so closely integrated with the WordPress dashboard. As a result, some tasks will require you to log into Stripe’s dashboard to complete them. (For example, reconciling your payments or challenging disputes.)

### [Built-in subscriptions features](#subscriptions)

With WooCommerce Payments, eligible merchants can charge for [subscription products](https://woocommerce.com/document/payments/subscriptions/) with no additional plugins. This lets you sell products that take regularly recurring payments from your customers, such a monthly magazine or a quarterly subscription box.

![](https://woocommerce.com/wp-content/uploads/2022/08/image-11.png)

An example subscription product made with WooCommerce Payments

The regular Stripe plugin does not have this feature built-in. To be able to sell subscription products with the Stripe plugin, you would need [our premium Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/).

### [Accepting multiple currencies](#multiple-currencies)

If you sell your products to customers in multiple countries, you can use the [multi-currency features](https://woocommerce.com/document/payments/currencies/multi-currency-setup/) in WooCommerce Payments to receive payments in various currencies. It can also give your customers a choice of currencies to pay in.

![](https://woocommerce.com/wp-content/uploads/2022/08/image-12.png)

Configuring which currencies to sell your products in

The regular Stripe plugin does not have this built-in. Instead, you would need to [install a second plugin](https://woocommerce.com/search/?q=currency&collections=product) to enable multi-currency support.

### [In-person payments for Canada](#in-person-payments)

WooCommerce Payments offers merchants in the U.S. and Canada the option to [accept in-person payments](https://woocommerce.com/document/payments/getting-started-with-in-person-payments-with-woocommerce-payments/) using a card reader device.

![](https://woocommerce.com/wp-content/uploads/2022/08/IMG_1A19F4CFC591-1.jpeg)

Taking payment for an in-person order

The Stripe plugin only offers [in-person payments](https://woocommerce.com/document/stripe/accept-in-person-payments-with-stripe/) for U.S. merchants.

### [Initial setup and API keys](#setup-and-api-keys)

WooCommerce Payments creates a special kind of Stripe account for you during the signup process, called a Stripe Express account. This account is linked directly to your site, without you having to copy and paste any API keys. This makes the initial setup process less complex as compared to the Stripe plugin.

However, because WooCommerce Payments does not make the Stripe API keys available (even after setup is complete), it may not be suitable for certain merchants. For example, if you need to integrate with a third-party accounting service which requests the Stripe API keys, the Stripe plugin would be a better fit. This is because it connects to regular Stripe accounts, which do make their API keys available to you.

### [Country availability](#country-availability)

The regular Stripe plugin supports businesses based in more countries than WooCommerce Payments at this time. You can tell us where you’d like to see WooCommerce Payments next by filling out [this form](https://woocommerce.com/payments/#request-invite).

Both plugins support the following:

*   Australia
*   Austria
*   Belgium
*   Canada
*   France
*   Germany
*   Hong Kong
*   Ireland
*   Italy
*   Netherlands
*   New Zealand
*   Poland
*   Portugal
*   Singapore
*   Spain
*   Switzerland
*   United Kingdom
*   United States

The Stripe plugin also supports these:

*   Brazil
*   Bulgaria
*   Croatia
*   Cyprus
*   Czech Republic
*   Denmark
*   Estonia
*   Finland
*   Gibraltar
*   Greece
*   Hungary
*   India (Preview)
*   Japan
*   Latvia
*   Liechtenstein
*   Lithuania
*   Luxembourg
*   Malaysia
*   Malta
*   Mexico
*   Norway
*   Romania
*   Slovakia
*   Slovenia
*   Sweden
*   United Arab Emirates

### [Instant deposit requirements](#instant-deposit-requirements)

Instant deposits give eligible merchant a way to request an instant deposit of some or all of their account balance. To help prevent abuse of this feature, both WooCommerce Payments and Stripe themselves have requirements that must be met before merchants can enable instant deposits.

WooCommerce Payments has slightly [different requirements](https://woocommerce.com/document/payments/instant-deposits/#section-1) before merchants can enable Instant Deposits. Stripe’s [Instant Payouts requirements](https://support.stripe.com/questions/instant-payouts-eligibility) are the relevant ones if you use the Stripe plugin. Here’s a comparison chart:

WooCommerce Payments

Stripe

Country Availability

U.S.

Canada, Singapore, UK, U.S.

Minimum Account Age

90 days

60 days

Minimum Volume

$1000 in last 90 days

$5000 total

### [Advanced Stripe features](#advanced-stripe-features)

Though WooCommerce Payments does take advantage of some of Stripe’s features, such as [Radar](https://woocommerce.com/document/payments/faq/does-woocommerce-payments-use-stripe-radar/) for fraud protection or [Billing](https://stripe.com/billing) for recurring subscriptions, the overall goal is to simplify the process of taking payments for your business.

If your business requires some of the more advanced features Stripe offers, you may wish to use the Stripe plugin in combination with a regular Stripe account.

### [Multiple businesses or websites](#multiple-businesses-or-sites)

WooCommerce Payments works by connecting to a single [Stripe Express account](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/) and pulling all your transaction data and deposit information in the WordPress dashboard. This is very convenient and perfectly functional for most merchants.

However, if you need to take payments from multiple WooCommerce websites, but view reporting for those sites all in a single place, using the standalone Stripe plugin may be better.