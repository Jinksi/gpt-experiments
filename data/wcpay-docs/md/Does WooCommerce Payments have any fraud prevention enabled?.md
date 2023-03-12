# Does WooCommerce Payments have any fraud prevention enabled?

WooCommerce Payments is built [in partnership with Stripe](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/), and uses their fraud prevention tool, called [Radar](https://stripe.com/radar). Radar’s functionality provides real-time fraud detection on every payment coming through your site and will block payments if necessary, before charges are placed.

That said, no fraud prevention system is perfect. Although it is rare, sometimes merchants may be affected by card testing attacks. You can learn more about card testing, and how to respond to such attacks, in [this document](https://woocommerce.com/document/payments/faq/card-testing/).

As WooCommerce Payments continues to enhance its platform, we will be looking to add more fraud detection functionality for our merchants. Please feel free to submit feedback or other ideas on our [ideas board](https://woocommerce.com/feature-requests/woocommerce-payments/).

## [Address verification](#address-verification)

One of the checks that Radar performs by default (usually in the U.S, Canada, and the UK) is a simple address verification. Specifically, Radar will check whether the post/ZIP code given by your customer matches the post/ZIP code on file with the bank that issued the card.

If the codes match, the transaction is allowed. If they do not match, the transaction will fail. However, sometimes this check can result in a legitimate transaction failing, such as when a customer has moved but not informed their bank of their new address.

If you wish to disable post/ZIP checks for your site, you must meet these criteria:

*   Your WooCommerce Payments account must be at least 90 days old.
*   You must have processed over $10,000 USD, or the equivalent in your currency.
*   You must provide a reason why the post/ZIP code checks should be disabled.

If you meet these criteria, you can [write to our support](https://woocommerce.com/my-account/create-a-ticket/) and ask that the checks be disabled.