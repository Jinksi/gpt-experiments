# WooCommerce Payments: Reserves

Because WooCommerce Payments is [built in partnership with Stripe](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/), they make the final determination whether or not to temporarily withhold some or all of your deposits based on perceived risk factors. This is called a “reserve.”

Reserves are meant to protect the payments processor (Stripe, in this case) against losses arising from future refunds and disputes. Funds that are withheld as part of a reserve will, in time, be deposited into your bank account as normal once the reserve has ended, minus any refunds or disputes of course.

**NOTE:** Because Stripe, not WooCommerce, implements and manages these account reserves, they will be the ones to email you about it. We (meaning WooCommerce) have little to no insight about the details of your reserve or the specifics of why it was applied to your account.

## [Why is there a reserve on my account?](#why-a-reserve-on-my-account)

A reserve may be implemented if Stripe thinks that your business represents a higher than acceptable level of risk. This can be due to a number of reasons, such as:

*   Your industry’s delivery window is longer than average
*   Your business has an increased risk of non-fulfillment
*   Your account’s dispute activity is higher than normal
*   There’s unexplainable sharp increase in order volume

## [Will I lose money? Is this a fine?](#lose-money-fine)

No. A reserve is not a fine, and no money is deducted from your account balance. A reserve only means that Stripe is temporarily withholding a portion of the money from being deposited.

In almost all cases, the entire amount being held in reserve will eventually be deposited into your bank account. See the _[When will the reserve end?](#when-will-reserve-end)_ section for more details.

## [How will I be notified of a reserve?](#how-will-i-be-notified)

Stripe will email the account address directly. That email will include the following information:

*   What portion of your funds are subject to the reserve
*   The reason(s) why Stripe implemented the reserve
*   The amount of time the reserve will last
*   A link where you can go to appeal the reserve

## [Can I still take payments?](#can-i-take-payments)

Yes. Reserves do not prevent you from charging customers, so your ability to continue taking new orders will not be affected.

## [Can I appeal a reserve with Stripe?](#can-i-appeal)

Yes. The email you receive about the reserve will include a link to appeal.

If you do decide to appeal, it’s best to provide as much detail as possible when responding to Stripe’s questions. Include any relevant documentation you have. The more information Stripe has about your business, the faster the appeal process will go.

## [When will the reserve end?](#when-will-reserve-end)

Stripe’s initial email to you will contain the length of the reserve. However, that is not a guarantee that the reserve will end at that time.

Before the reserve is set to end, Stripe will re-review your account and determine whether to remove the reserve or extend it. This decision depends on the overall financial health of your business, the number of refunds and disputes on your account, and other factors.

Although rare, there are some cases in which a reserve may be extended indefinitely.

## [How can I avoid a reserve?](#how-to-avoid-reserves)

There are a number of common-sense methods you can use to avoid being subject to a reserve:

*   [Keep customer disputes to a minimum](https://woocommerce.com/document/payments/preventing-disputes-with-woocommerce-payments/) if possible
*   [Respond to any disputes](https://woocommerce.com/document/payments/managing-disputes-with-woocommerce-payments/) quickly after they are filed
*   [Protect your business against fraudulent purchases](https://woocommerce.com/document/payments/faq/card-testing/)
*   Make [your store policies](https://woocommerce.com/posts/faq-page-design/) easy for customers to find
*   Keep detailed [business and shipping records](https://woocommerce.com/posts/shipping-methods-fulfillment-options/)
*   Provide an easy way for customers to [contact you](https://woocommerce.com/posts/covid-19-customer-communication/)
*   Communicate any fulfillment delays to customers