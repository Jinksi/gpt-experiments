# How do I respond to card testing attacks?

**Under attack?** See [this section](https://woocommerce.com/document/payments/faq/card-testing/#respond-to-an-attack) for how to respond to card testing.

Card testing is a type of fraud where the perpetrator first obtains a large amount of stolen credit card information, and then attempts to determine which of those cards are valid. They do this by making many individual purchases, each with a different card. Other terms for this activity include “carding” or “card checking.”

Though they are usually rare, the potential for a card testing attack is an unavoidable part of running an online business. WooCommerce Payments does have [some built-in measures](https://woocommerce.com/document/payments/faq/fraud-prevention/) to prevent or limit the impact of such attacks, but ultimately merchants are responsible for their own fraud prevention.

Fortunately, there are many ways you can prevent card testing from harming your site. We’ve explained a few of these methods below, as well as provided [a quick response checklist](https://woocommerce.com/document/payments/faq/card-testing/#respond-to-an-attack) you can use if your site is attacked in this way.

![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-31-at-09.44.45-UTC@2x.png)

Transactions table showing a charge with Elevated risk

## [Monitor transactions](#monitor-transactions)

We recommend reviewing your incoming orders regularly and refunding ones that look risky.

To help detect potentially fraudulent charges, WooCommerce Payments provides a _Risk Level_ column on the **Payments > Transactions** page. This column will display _Elevated_ on transactions that are not considered risky enough to block automatically, but do have some suspicious signals. For _Elevated_ transactions, you should try to contact the customer before fulfilling the order. If you do not receive a response, consider refunding the order.

Another common sign of card testing is a large increase in the number of orders being assigned the _Failed_ status. These orders may contain multiple notes about cards being declined. This is because it’s common for card testers to attack a site with hundreds (or even thousands!) of stolen card numbers in a short period of time.

![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-31-at-09.41.17-UTC@2x.png)

Order notes potentially resulting from card testing

It’s important to note that these orders do not represent missed sales, nor are they caused by issues with your checkout that could prevent legitimate buyers from completing payments. However, card testing can cause other issues for your business, such as an increase in [disputes](https://woocommerce.com/document/payments/disputes/) and card decline rates, negatively impacting the reputation of your business.

## [Prevent card testing](#prevent-card-testing)

As noted above, WooCommerce Payments has [built-in measures to prevent fraud](https://woocommerce.com/document/payments/faq/fraud-prevention/). We also work closely with our payments partner to develop new strategies to prevent card testing attacks.

However, _no fraud prevention system is perfect!_ Because of this, there are some additional measures you can take to protect your store.

*   Install a CAPTCHA plugin, such as [reCaptcha for WooCommerce](https://woocommerce.com/products/recaptcha-for-woocommerce/) or [Google reCaptcha for WooCommerce](https://woocommerce.com/products/google-recaptcha-for-woocommerce/). Either of these plugins will insert a mandatory bot detection mechanism into your checkout process, which can help prevent automated fraud.
*   [WooCommerce Anti-Fraud](https://woocommerce.com/products/woocommerce-anti-fraud/) is a powerful and flexible extension that allows you to configure various rules that, when triggered, will block the offending transactions.
*   Avoid pay-what-you-want or donation products with no minimum. Fraudsters often use these to make very small transactions that may not be noticed by the cardholder.

If you choose to install one or more of the above plugins, be sure to read the documentation for them thoroughly. If the plugins are not configured correctly, they will offer little or no protection!

## [Respond to an attack](#respond-to-an-attack)

If your site is experiencing a card testing attack, follow the steps below.

Keep in mind that the most important step is to **refund any orders you suspect to be fraud!** Doing so avoids the possibility of the true cardholder [disputing the purchase](https://woocommerce.com/document/payments/disputes/) in the future, which could cost your business money in dispute fees.

1.  In your site’s dashboard, go to **Payments > Settings**.
2.  Uncheck the “Enable WooCommerce Payments” box.

![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-26-at-19.16.00-UTC@2x.png)

Disabling the WooCommerce Payments gateway to stop incoming payments

3.  Scroll to the bottom of the page and click **Save Changes**.
    *   This will prevent further orders from coming in via WooCommerce Payments, while leaving the plugin itself active so that you can complete the next steps.
4.  Consider installing some plugins that can help prevent card testing. These are listed in the [Prevent Card Testing section](https://woocommerce.com/document/payments/faq/card-testing/#prevent-card-testing) above.
5.  [Contact our support staff](https://woocommerce.com/my-account/create-a-ticket/?select=5278104). They are trained to assist with card testing incidents, and can provide specialized help.
6.  **[Refund](https://woocommerce.com/document/woocommerce-refunds/#automatic-refunds) any successful orders you suspect to be fraudulent!**
    *   If more than 20 or so fraudulent orders were successful, let our support staff know. We can help refund those transactions in bulk.
    *   Similarly, if the transactions are not linked to WooCommerce orders (making it impossible to refund them), inform us of that in your email as well.
7.  Once the successful transactions have been refunded and the card testing attack has ended, you can re-enable WooCommerce Payments under **Payments > Settings**.