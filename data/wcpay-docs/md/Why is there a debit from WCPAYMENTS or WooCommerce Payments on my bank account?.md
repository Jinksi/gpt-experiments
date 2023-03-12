# Why is there a debit from WCPAYMENTS or WooCommerce Payments on my bank account?

Your WooCommerce Payments account balance may sometimes [become negative](https://woocommerce.com/document/payments/faq/why-is-my-account-showing-a-negative-balance/). When this happens, WooCommerce Payments may debit your connected bank account to recover from the negative balance. This will only occur if **all** of the following apply:

*   Your account has a negative balance.
*   You’ve added a bank account to receive deposits.
*   Your account is based in one of these countries:
    *   Australia
    *   Canada
    *   New Zealand
    *   United Kingdom
    *   United States
    *   Any [SEPA country](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area#Coverage)

This transaction will be visible in your WordPress dashboard under **Payments > Deposits** as a withdrawal with a negative amount. It will be displayed on your bank statement as a debit from “WCPAYMENTS” or “WooCommerce Payments”. 

![](https://woocommerce.com/wp-content/uploads/2020/04/WooCommerce-Payments-Deposits-with-Widthdrawals.png?w=950)

Example of **Payments > Deposits** screen showing a withdrawal for a negative balance

## [Country-specific notes](#country-specific-notes)

The delay before these debits occur can vary depending on the country of your bank account. After your balance goes negative, the usual delays before debits are:

*   Australia: Same business day.
*   Canada, New Zealand, and the U.S.: Next business day.

If your bank account is in the U.S., you may need to authorize our payments partner to debit your bank account. To do this, you will need to contact your bank directly and provide them the following ACH IDs to allow:

*   `1800948598` — Stripe Payments Company
*   `4270465600` — Stripe Payments Company