# What foreign exchange fees are charged with WooCommerce Payments?

When the currency of a customer payment differs from the currency of your bank account on file, WooCommerce Payments charges a currency conversion fee as part of the transaction. An additional fee may also be charged if the card used to pay for the transaction was issued outside your country or region. Please see [our full list of fees](https://woocommerce.com/document/payments/faq/fees/) for a breakdown by country.

As an example, if a U.S. merchant with many customers in the UK also decides to also accept payments from customers in GBP, they may incur the following fees:

*   An additional 1.5% for accepting payment via a card issued outside the U.S.
*   An additional 1% for currency conversion from GBP to USD.

The screenshot below shows an example of what such a transaction would look like under the **Payments > Transactions** page. Both the international card fee and currency conversion fee are show in the detailed transaction view.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-02-at-08.57.33-UTC@2x.png)

An international transaction in a non-deposit currency showing fees.

## [Historical behavior](#section-1)

The fees charged for currency conversion have not changed since [multi-currency transactions](https://woocommerce.com/document/payments/faq/available-currencies/) were first made available. However, the way the fee is charged and presented has changed as WooCommerce Payments has evolved.

Prior to June 7th 2021, the currency conversion fee was built into the foreign exchange rate used for the transaction. Under this system, to determine the exchange rate for a transaction, WooCommerce Payments would use the mid-market foreign rate and add an additional 1-2% to that rate. It then applied that to the charge amount to determine the equivalent amount in the [deposit currency](https://woocommerce.com/document/payments/currencies/#deposit-currency).

Because the fee was built into the exchange rate, the timeline view on the transaction details screen did not include the currency conversion fee in the fees breakdown. Instead, it was factored into the exchange rate displayed on this screen. This same behavior exists for all transactions made prior to June 7th 2021.

From June 7th 2021 onward, the currency conversion fee was no longer charged as part of the foreign exchange rate. Instead, it was added as a separate fee line item to the transaction. This made it easier to present the full fee associated with the transaction in the fees on the timeline view on the transaction details screen.