# Croatian Kuna (HRK) transition to Euro (EUR)

On January 1, 2023, Croatia will join [the Eurozone](https://en.wikipedia.org/wiki/Eurozone). This means that the Croatian Kuna (HRK) will be phased out in favor of the Euro (EUR). Depending on how you use WooCommerce Payments, you might need to make changes to your store. Please see the sections below to understand how this transition may affect you.

## [Store and customer currencies](#store-and-customer-currencies)

If you have HRK set as your store currency under **WooCommerce > Settings > General**, we strongly suggest that you change your store currency to EUR before January 1, 2023. If you don’t change it, customers could experience payment problems after the transition date.

If you have your store currency set to something else, but accept HRK using the WooCommerce Payments [multi-currency feature](https://woocommerce.com/document/woocommerce-payments/currencies/), we suggest removing it from the enabled currencies list before Jan 1. You can do this under **WooCommerce > Settings > Multi-currency**.

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-12-at-15.50.11-UTC@2x.png)

Removing HRK as an enabled currency

## [Refunds and disputes](#refunds-and-disputes)

WooCommerce Payments will attempt to refund a transaction using the same currency as the original transaction. Thus, if you refund an HRK transaction after Jan 1, 2023, that will fail. Please [contact support](https://woocommerce.com/my-account/create-a-ticket/) if this happens to you.

If you took payment for an order in HRK before Jan 1, but it’s disputed after Jan 1, the refund to the customer and the dispute fee will both be processed in EUR (assuming the dispute is lost).

## [Authorize and capture](#authorize-and-capture)

Payments authorized in HRK before Jan 1 may be captured until Feb 1, 2023. Funds from these captures will be settled in EUR.

Payments authorized in HRK cannot be _partially_ captured after Dec 27, 2022. If you need to partially capture a charge authorized in HRK after that deadline, you should either:

*   Capture the full amount of the authorization and then issue a partial refund in EUR.
*   Cancel the authorization and create a new one in EUR using the correct amount.

## [Subscriptions](#subscriptions)

### [New subscriptions](#new-subscriptions)

On or before Jan 1, 2023, you should switch your store currency to EUR as well as remove HRK from the list of accepted currencies (if you use the multi-currency feature). This will prevent new subscriptions from being paid for in HRK.

### [Existing subscriptions](#existing-subscriptions)

After Jan 1, 2023, subscription renewal payments in HRK will fail. The best solution for existing subscribers who pay in HRK is for you to cancel their subscriptions, let the remaining time run out, and then have the customer purchase a new subscription in EUR.

## [Account balances](#account-balances)

On Dec 27, 2022, your HRK balance (if you have one) will be converted to EUR using the official fixed rate of 7.53450 HRK to 1 EUR. Pending HRK payments will be converted to EUR as they become available for deposit. Foreign exchange fees will not be charged for this.

Your bank account number (IBAN) will remain the same. However, it will now be denominated in EUR. After the transition, we’ll continue using the bank account we previously used to send HRK payouts. If you currently have both EUR and HRK bank accounts, we’ll deactivate your HRK account and use your EUR account instead.