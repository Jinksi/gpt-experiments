# Currencies with WooCommerce Payments

With WooCommerce Payments, you can accept payments in [over 100 different currencies](https://woocommerce.com/document/payments/faq/available-currencies/). This document explains how multi-currency transactions work, the different types of currencies that might be involved in a transaction, and how to view which currency conversions were involved with a given transaction.

To learn how to display your products in your customer’s preferred currency, manage exchange rates, and other such configuration options, refer to our [multi-currency guide](https://woocommerce.com/document/payments/currencies/multi-currency-setup/).

## [Currencies in a transaction](#currencies-in-a-transaction)

A single transaction can potentially involve multiple currencies. Each one is explained below.

### [Customer currency](#customer-currency)

The customer currency is the currency displayed to a customer while they’re browsing your store. It’s also the currency the customer is charged in when they pay for their order. In the payments industry, this is often referred to as the “presentment currency.”

By default, the customer currency will be the same as your store’s currency, as defined under **WooCommerce > Settings > General**. The customer currency can also be set using a multi-currency plugin, or WooCommerce Payments’ built-in multi-currency functions.

As such, a single store may have more than one customer currency used in transactions.

### [Deposit currency](#deposit-currency)

The [deposit currency](https://woocommerce.com/document/payments/currencies/multiple-deposit-currencies/) is the currency used to deposit funds into your bank account, and is not necessarily the same as the customer currency. For example, a store based in the UK may receive deposits in pound sterling but offer the Euro as a customer currency for payments.

For some merchants, it’s possible to receive deposits in different currencies into [different bank accounts](https://woocommerce.com/document/payments/currencies/multiple-deposit-currencies/). For example, the UK store mentioned above could elect to receive GBP deposits into one bank account, and EUR deposits into another account.

### [Store currency](#store-currency)

The store currency is the base currency used by your site, chosen during the WooCommerce setup process. You can change it at any time under **WooCommerce > Settings > General**.

Without customization (via the use of a multi-currency plugin or other code), the customer currency will be the same as the store currency.

### [Account currency](#account-currency)

During the WooCommerce Payments signup process, you must select the country of your business entity. This country is used to determine [the fees](https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/) you pays for transactions. For example, accounts for U.S. businesses pay their fees in U.S. dollars, regardless of other currencies involved in the transaction.

## [Tracking currencies](#tracking-currencies)

The WooCommerce Payments dashboard can be used to track the currencies involved in different transactions, including deposits, payments, and disputes. This section highlights the elements of the dashboard that provide details on a transaction’s currency.

### [Transactions page](#transactions-page)

The **Payments > Transactions** page shows all WooCommerce Payments transactions, regardless of currency. The amounts, fees, and the net are all displayed in the deposit currency. Transactions with a customer currency different from the deposit currency have a tooltip to view the amount paid by the customer in the customer currency.

![WooCommerce Payments transactions screenshot with multiple customer currencies.](https://woocommerce.com/wp-content/uploads/2021/03/image-1.png?w=950 "WooCommerce Payments transactions screen with multiple currencies")

### [Transaction details page](#transaction-details-page)

The transaction details page displays the transaction in the customer’s currency at the top of the overview. Underneath that amount, the amount converted to the deposit currency is displayed, along with the fees and net amounts deposited for the charge.

The timeline view provides details on the exchange rate used when converting the customer currency to the deposit currency. The [fee for currency conversion](https://woocommerce.com/document/payments/faq/fees/) is included in the exchange rate as an additional amount on top of the mid-market rate, rather than becoming part of the separate transaction fees charged on the transaction. 

![WooCommerce Payments transaction details screenshot with customer currency that differs to deposit currency.](https://woocommerce.com/wp-content/uploads/2021/03/image-2.png?w=950 "WooCommerce Payments multi-currency transaction details screen")

### [Deposit details page](#deposit-details-page)

The deposit details page shows both the amount transferred to your bank account as well as all of the individual transactions associated with that particular deposit. The amounts displayed on this page are in your deposit currency.

For transactions with a customer currency different from the deposit currency, a tooltip is displayed to view the amount paid by the customer in the customer currency.

![WooCommerce Payments deposit details screenshot with customer currency that differs to deposit currency.](https://woocommerce.com/wp-content/uploads/2021/03/image-3.png?w=950 "WooCommerce Payments multi-currency deposit details screen")