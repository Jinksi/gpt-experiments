# What currency is used to determine fees in a transaction with WooCommerce Payments?

With WooCommerce Payments, [the transaction fees](https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/) for most countries include both a fixed and variable component. For example, U.S. merchants are charged 2.9% + $0.30 USD for domestic card transactions. In this case, 2.9% is the variable component and $0.30 is the fixed component.

The fixed amount of a transaction fee is determined using the currency of the account’s country. For example, for accounts registered in Great Britain (GB), the fixed amount is levied in Pounds sterling, regardless of customer or deposit currency used in the transaction.

### [What is the currency of a dispute fee?](#section-1)

Like the fixed amount of transaction fees, dispute fees are charged in the customer currency if a matching deposit currency is available, and if not, the default deposit currency. For example, for accounts registered in Great Britain (GB), the dispute fee will always be 15 GBP, regardless of the [customer or deposit currency](https://woocommerce.com/document/payments/currencies/) used in the transaction.