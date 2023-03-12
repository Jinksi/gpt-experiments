# Managing Money with WooCommerce Payments

Although WooCommerce Payments makes charging your customers as easy as possible, it’s still helpful to be familiar with the various ways in which money can move through your site and your account. This document explains how WooCommerce Payments presents information to you about where your money came from and where it’s going.

## [Deposits](#deposits)

Deposits are when some or all of your account balance is sent to your bank account or debit card. (These [may also be called](https://woocommerce.com/document/woocommerce-payments/deposits/deposits-and-payouts/) “payouts.”) Deposits almost always [occur automatically](https://woocommerce.com/document/woocommerce-payments/deposits/deposit-schedule/). Eligible merchants can also request [instant deposits](https://woocommerce.com/document/payments/instant-deposits/).

WooCommerce Payments provides all the relevant information about your deposits under the **Payments > Deposits** menu. On that page, you can do the following:

*   View a list containing all past and future (“estimated”) deposits.
*   See each deposit date, amount, and the account to which it was sent.
*   View which transactions are associated with each given deposit.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-19.11.46-UTC@2x.png)

An example of the Payments > Deposits page showing a list of deposits.

Each deposit has a status associated with it. Here are the common ones and what they mean:

*   **Paid:** The deposit was successfully sent to your bank.
*   **In Transit:** The deposit is on the way to your bank account, but not there yet.
*   **Pending:** The deposit has not occurred yet, and future transactions can still be added to it.
*   **Estimated:** The deposit has not occurred yet, but future transactions _cannot_ be added to it.
*   **Failed:** There was a problem with the deposit. It will be retried in 24 hours.

If your account balance ever [becomes negative](https://woocommerce.com/document/payments/faq/why-is-my-account-showing-a-negative-balance/), you may also see a **Withdrawal** transaction type in the **Payments > Deposits** list. Withdrawals represent a [debit from your bank account](https://woocommerce.com/document/payments/faq/withdrawals/) to cover the negative account balance.

By clicking on any deposit, you can open the deposit details page, where more information about that particular deposit is shown. Most importantly, the separate transactions that all went into the deposit are listed.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-19.23.26-UTC@2x.png)

Viewing the deposit details page for one particular deposit.

### [Filtering deposits](#filtering-deposits)

If you wish, you can filter the list of deposits so that it contains only the ones you’re interested in viewing. To do that, follow these steps:

1.  Click the **Show** dropdown menu at the top of the list.
2.  Click **Advanced filters**.
3.  Click **Add a filter**.
4.  Filter the list by Date, Status, or both.
5.  When you’ve added the filters you want, click the **Filter** button.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-19.10.21-UTC@2x.png)

Filtering the deposits list to show paid deposits from September 2022.

### [Downloading deposits](#downloading-deposits)

You can also download deposits in the form of a CSV file for later use in Microsoft Excel, Google Sheets, Apple’s Numbers, or other spreadsheet editing applications.

To download all your deposits, simply go to **Payments > Deposits** and click the **Download** button at the top of the list.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-19.19.35-UTC@2x.png)

If you have less than about 25 deposits in the list when you click the **Download** button, the CSV will download immediately. If you have more than that, WooCommerce Payments will compile the CSV in the background and email you when it’s done. The email will contain a link where you can download the complete CSV.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-19.20.43-UTC@2x.png)

An example CSV containing deposit information.

## [Transactions](#transactions)

WooCommerce Payments provides all the relevant information about your transactions under the **Payments > Transactions** menu. This page includes information such as the date and time of a transaction, the amount, the fees, the order number, and so on.

**NOTE:** The _Transactions_ page only shows transactions and order that were paid for with WooCommerce Payments. It does not show information on orders that were paid for using other gateways you might have installed.

To access the transactions list view, go to **Payments > Transactions**.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-20.04.50-UTC@2x.png)

Viewing the list of transactions under Payments > Transactions.

If the payment was authorized but not captured, those will appear under the _Uncaptured_ tab at the top. For further details on that workflow, see our [authorize and capture guide](https://woocommerce.com/document/woocommerce-payments/settings-guide/authorize-and-capture/).

![](https://woocommerce.com/wp-content/uploads/2023/01/image-1.png)

Viewing a list of uncaptured transactions under Payments > Transactions > Uncaptured.

Each transaction has a type associated with it. Here are the common ones and what they mean:

*   **Charge:** Customer paid for their order using their credit or debit card.
*   **Payment:** Customer paid using [a non-card method](https://woocommerce.com/document/woocommerce-payments/payment-methods/additional-payment-methods/), e.g. Sofort or SEPA.
*   **Refund:** Customer’s money was sent back to their credit or debit card.
*   **Payment Refund:** Customer’s money was sent back to their non-card method.
*   **Dispute:** Customer [disputed the charge](https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/), deducting the money from your account.
*   **Dispute reversal:** You won the dispute, returning the money to your account.

### [Searching transactions](#searching-transactions)

If you need to quickly find a specific transaction or set of transactions, you can use the search bar at the top of the list. You can search by order number, customer name, or billing email.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-20.20.03-UTC@2x.png)

Searching transactions for those from a specific customer name.

### [Filtering transactions](#filtering-transactions)

If you wish, you can filter the list of transactions so that it contains only the ones you’re interested in viewing. To do so:

1.  Click the **Show** dropdown menu at the top of the list.
2.  Click **Advanced filters**.
3.  Click **Add a filter**.
4.  Filter the list by Date, Customer Currency, Type, Loan, or a combination of those.
5.  When you’ve added the filters you want, click the **Filter** button.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-20.16.49-UTC.png)

Filtering the transactions list to show only EUR transactions from Dec 2022.

### [Downloading transactions](#downloading-transactions)

You can also download transactions in the form of a CSV file for later use in Microsoft Excel, Google Sheets, Apple’s Numbers, or other spreadsheet editing applications.

To download all your transactions, simply go to **Payments > Transactions** and click the **Download** button at the top of the list.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-20.32.05-UTC@2x.png)

Downloading a list of transactions.

If you have less than about 25 transactions in the list when you click the **Download** button, the CSV will download immediately. If you have more than that, WooCommerce Payments will compile the CSV in the background and email you when it’s done. The email will contain a link where you can download the complete CSV.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-12-at-20.34.02-UTC@2x.png)

An example CSV containing transaction information.

## [Refunds](#refunds)

If a customer contacts you to request a refund, and your refund policy permits it, you can refund their payment from within the usual WooCommerce dashboard. To do so:

1.  Go to **WooCommerce > Orders**.
2.  Search for the order using the customer name, email, or order number.
3.  Click the order to open it.
4.  Scroll down a bit below the items list and click the Refund button.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-18.28.31-UTC@2x.png)

5.  In the _Qty_ column, adjust the quantity of each item to be refunded.
    *   If you want to provide a full refund, ensure that the quantity to be refunded is equal to the quantity that the customer originally purchased, and that any shipping charges are also being refunded (if your policies permit that).

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-18.32.41-UTC@2x.png)

6.  Optionally enter something in the _Reason for refund_ box.
7.  Click the **Refund via WooCommerce Payments** button.

The charge amount [plus transaction fees](https://woocommerce.com/document/payments/faq/fees-refund/) will be deducted from your account balance and returned to the customer’s original payment method.

### [Refund durations](#refund-durations)

Refunds are processed immediately. However, depending on the customer’s bank, it can take anywhere from 5 to 10 business days before they get their money back in their account.

If your customer doesn’t see the refund after 10 business days and the original charge is still visible on their bank statement, they should contact their bank for more information.

### [Reversals](#reversals)

If a refund is sent within a few hours of the original purchase, the refund might be processed as a “reversal.” What this means is that the original charge will drop off the customer’s bank statement, and a separate credit is not issued.

Thus, if you refund a customer soon after they ordered, but they never seen the amount added back to their statement, you can simply ask them to review their statement _for the original charge_. It should be gone, as if they never transacted with you at all.

## [Disputes](#disputes)

A dispute (also called a “chargeback”) occurs when a card owner questions a payment with their bank. You can learn more about [preventing disputes](https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/preventing-disputes-with-woocommerce-payments/) and [responding to them](https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/managing-disputes-with-woocommerce-payments/) at those links. This section is simply an overview of how disputes are shown in WooCommerce Payments.

WooCommerce Payments provides all the relevant information about your disputes under the **Payments > Disputes** menu. This page includes information such as when the charge was disputed, the amount, the status, and deadline for responding.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-15.43.52-UTC@2x.png)

Viewing the list of disputes under Payments > Disputes.

Each dispute has a status associated with it. Here are the common ones and what they mean:

*   **Won:** You won this dispute and recovered the money from the charge.
*   **Lost:** You lost this dispute, the money from the charge, and a dispute fee.
*   **Needs Response:** You have yet to respond or accept the dispute.
*   **Under Review:** The dispute is being decided by the customer’s bank.

By clicking on any given dispute, you can open the dispute details page, where more information about that particular dispute is shown,

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-15.54.22-UTC@2x.png)

From here you can challenge the dispute or accept the dispute. Again, please see the guides linked above for a much more thorough review of this process.

### [Filtering disputes](#filtering-disputes)

By default, the disputes list shows only those disputes that require a response. However, you can change this by using the filters at the top.

First, you can use the _Dispute Currency_ filter to show only disputes in the currency of your choosing. Second, you can use the _Show_ filter to see only disputes needing a response, all dispute, or more advanced filters.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-16.07.58-UTC@2x.png)

Filtering the disputes list to show only Under Review disputes in AUD

### [Downloading disputes](#downloading-disputes)

Similar to deposits and transactions above, you can also download your dispute data in the form of a CSV file for later use in Microsoft Excel, Google Sheets, Apple’s Numbers, or some other spreadsheet editing applications.

To download all your transactions, simply go to **Payments > Disputes** and click the **Download** button at the top of the list.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-20.18.21-UTC.png)

Downloading the list of currently displayed disputes.

If you have less than about 25 disputes in the list when you click the **Download** button, the CSV will download immediately. If you have more than that, WooCommerce Payments will compile the CSV in the background and email you when it’s done. The email will contain a link where you can download the complete CSV.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-13-at-16.11.57-UTC@2x.png)

An example CSV containing dispute information.