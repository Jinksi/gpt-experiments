# Testing WooCommerce Payments

This document provides instructions for testing payments, refunds, disputes, and the other functions of WooCommerce Payments. To learn more about WooCommerce Payments, including how to set it up on your store, see our [main documentation page](https://woocommerce.com/document/woocommerce-payments/).

## [Enabling test mode](#enabling-test-mode)

By default, WooCommerce Payments will accept real payment methods, such as cards, and actually charge your customers. To test payments, refunds, disputes, and other such processes, you need to switch WooCommerce Payments into test mode.

**NOTE #1:** If you are working on a staging or development site, such as one installed on a separate domain from the real site, you may wish to use [dev mode](https://woocommerce.com/document/payments/testing/dev-mode/) instead.

**NOTE #2**: If you are testing while third party integrations are active, please note that depending on the integrations you are using, some will still accept the order as a live one. We suggest discussing with the third party integration before you start testing for accurate guidance or disable the third party integrations to avoid any issues.  
The WooCommerce [support policy](https://woocommerce.com/support-policy/#what-our-support-service-does-not-cover) does not cover issues in relation to third party software.

To enable test mode:

1.  Go to **Payments > Settings** in your site’s dashboard.
2.  Check the **Enable test mode** box.
3.  Click **Save changes** at the bottom of the page.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-15-at-15.56.30-UTC@2x.png)

Test mode enabled in the WooCommerce Payments settings.

## [Test mode data](#test-mode-data)

While test mode is enabled, the pages under the **Payments** menu item will only show test mode data. This includes data shown under **Deposits**, **Transactions**, and **Disputes**.

To remind store owners that test mode is currently enabled, a notice is also displayed at the top of any page under the **Payments** menu item.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-15-at-16.01.18-UTC@2x.png)

An alert showing that test mode is enabled.

## [Testing card payments](#testing-card-payments)

To place a test order in test mode:

1.  Enable test mode as shown above.
2.  Go to your site’s shop and add a product to your cart.
3.  Proceed to the checkout page and fill out the form.
4.  Enter a [test card number](#test-cards), expiry date, and CVC code.
    *   Real card details will not work in test mode.
5.  Place your order.

The order will be processed just as if you had used a real card.

After you are redirected to the _Order received_ page, you can go back into the admin dashboard of your site and find the test transaction in all the usual places, including under **WooCommerce > Orders** and **Payments > Transactions**.

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-16-at-18.50.09-UTC@2x.png)

The payment form in test mode.

### [Test cards](#test-cards)

To test payments, the following test card numbers should be used:

Number

Brand

Exp. Date

CVC Code

4242 4242 4242 4242

Visa

Any future date

Any three digits

4000 0566 5566 5556

Visa (debit)

Any future date

Any three digits

5555 5555 5555 4444

Mastercard

Any future date

Any three digits

5105 1051 0510 5100

Mastercard (prepaid)

Any future date

Any three digits

3782 8224 6310 005

American Express

Any future date

Any three digits

6011 1111 1111 1117

Discover

Any future date

Any three digits

### [Country-specific test cards](#country-test-cards)

Cards issued outside the country or region of your WooCommerce Payments account can incur [additional fees](https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/) in live mode. To test an international payment, use the following info.

Number

Country

Exp. Date

CVC Code

4000 0003 6000 0006

Australia (AU)

Any future date

Any three digits

4000 0004 0000 0008

Austria (AT)

Any future date

Any three digits

4000 0005 6000 0004

Belgium (BE)

Any future date

Any three digits

4000 0007 6000 0002

Brazil (BR)

Any future date

Any three digits

4000 0012 4000 0000

Canada (CA)

Any future date

Any three digits

4000 0025 0000 0003

France (FR)

Any future date

Any three digits

4000 0027 6000 0016

Germany (DE)

Any future date

Any three digits

4000 0037 2000 0005

Ireland (IE)

Any future date

Any three digits

4000 0038 0000 0008

Italy (IT)

Any future date

Any three digits

4000 0048 4000 8001

Mexico (MX)

Any future date

Any three digits

4000 0052 8000 0002

Netherlands (NL)

Any future date

Any three digits

4000 0055 4000 0008

New Zealand (NZ)

Any future date

Any three digits

4000 0061 6000 0005

Poland (PL)

Any future date

Any three digits

4000 0062 0000 0007

Portugal (PT)

Any future date

Any three digits

4000 0072 4000 0007

Spain (ES)

Any future date

Any three digits

4000 0075 6000 0009

Switzerland (CH)

Any future date

Any three digits

4000 0082 6000 0000

United Kingdom (UK)

Any future date

Any three digits

4242 4242 4242 4242

United States (US)

Any future date

Any three digits

### [3D Secure test cards](#3ds-test-cards)

The following card numbers can be used to test payments requiring 3D Secure Authentication.

/\* Style the table below so that the card numbers don't wrap \*/ #page > div.content.wccom-docs-content > div.primary > article > div.entry > figure.custom-column-adjustment-3ds > table > tbody > tr > td:nth-child(3) { width: 40%; }

Description

Number

Details

Authenticate unless set up

4000 0025 0000 3155

This card requires authentication for off-session payments unless you set it up for future payments. After you set it up, off-session payments no longer require authentication.

Always authenticate

4000 0027 6000 3184

This card requires authentication on all transactions, regardless of how the card is set up.

Already set up

4000 0038 0000 0446

This card is already set up for off-session use. It requires authentication for one-time and other on-session payments. However, all off-session payments succeed as if the card has been previously set up.

Insufficient funds

4000 0082 6000 3178

This card requires authentication for one-time payments. All payments are declined for insufficient funds even after being successfully authenticated or previously set up.

### [Declined cards](#declined-test-cards)

The following card numbers can be used to test what happens when the payment is declined by the customer’s bank for various reasons.

Description

Number

Generic decline

4000 0000 0000 0002

Insufficient funds

4000 0000 0000 9995

Lost card

4000 0000 0000 9987

Stolen card

4000 0000 0000 9979

Expired card

4000 0000 0000 0069

Incorrect CVC

4000 0000 0000 0127

Processing error

4000 0000 0000 0119

Incorrect number

4242 4242 4242 4241

### [Manual capture](#manual-capture)

To test a card payment authorization with manual capture:

1.  Go to **Payments > Settings** in your site’s dashboard.
2.  Enable test mode and the separate [auth and capture setting](https://woocommerce.com/document/woocommerce-payments/settings-guide/authorize-and-capture/#enabling-auth-and-capture).
3.  Place a test order [as explained above](#testing-card-payments).
4.  Go to **WooCommerce > Orders** and open the order you just placed.
5.  Confirm the order has a note in the sidebar stating: “A payment of $XX.XX was authorized using WooCommerce Payments.”
6.  [Capture the charge](https://woocommerce.com/document/woocommerce-payments/settings-guide/authorize-and-capture/#capture-using-woocommerce-orders).
7.  Confirm the order now has a note in the sidebar like so: “A payment of $XX.XX was successfully captured using WooCommerce Payments.”
8.  Go to **Payments > Transactions.**
9.  Confirm that a corresponding transaction with the type _Charge_ is listed.

## [Testing express checkouts](#express-checkouts)

How to test each specific express checkout method varies depending on which one you’d like to test. Please see the links below, which go to the dedicated documents for those payment methods, for instructions on how to test them.

*   [Apple Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/apple-pay/#testing-apple-pay)
*   [Google Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/google-pay/#testing)
*   [Link by Stripe](https://woocommerce.com/document/woocommerce-payments/payment-methods/link-by-stripe/#testing)

## [Testing non-card payments](#section-10)

Test most non-card payment methods (e.g. Sofort, iDeal, and so on) is as simple as placing a test order while that payment method is selected. You will be taken to a page hosted by Stripe where you can choose whether to authorize or fail the test payment.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-26-at-16.38.03-UTC@2x.png)

An example of the Sofort text payment page hosted by Stripe

After you choose whether to authorize the test payment or fail it, you will automatically be redirected back to your site, and the relevant result shown.

### [SEPA](#section-11)

In order to test a SEPA transaction, you will need to use one of the following IBANs. These use Austria as the country, since the country does not matter much for testing purposes.

Test IBAN

Result

AT611904300234573201

Payment succeeds.

AT861904300235473202

Payment fails.

AT591904300235473203

Payment succeeds, but is [disputed](https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/managing-disputes-with-woocommerce-payments/#section-29).

## [Testing refunds](#refunds)

To test refunding an order:

1.  Place a test order as shown above.
2.  Go to **WooCommerce > Orders**.
3.  Click the order ID of the test order.
4.  Follow [the refund process](https://woocommerce.com/document/woocommerce-payments/managing-money/#section-5) as usual.

The order status should change to Refunded, and your test balance will be reduced.

## [Testing disputes](#disputes)

To simulate a dispute with WooCommerce Payments, place a test order as shown above using one of the cards from this table:

/\* Style the table below so that the card numbers don't wrap \*/ #page > div.content.wccom-docs-content > div.primary > article > div.entry > figure.custom-column-adjustment-disputes > table > tbody > tr > td:nth-child(3) { width: 40%; }

Description

Number

Details

Fraudulent

4000 0000 0000 0259

The charge will be disputed as fraudulent. This type of dispute is protected after 3D Secure authentication.

Product not received

4000 0000 0000 2685

With default account settings, charge succeeds, only to be disputed as product not received. This type of dispute isn’t protected after 3D Secure authentication.

The order will be processed, but the payment will be disputed immediately. You can then view and respond to the dispute by going to **Payments > Disputes** in your site’s dashboard.

### [Dispute responses](#dispute-responses)

After creating a dispute with a dispute test card above, you can also test the dispute response process.

1.  Go to **Payments > Disputes** in your site’s dashboard.
2.  Click the dispute in the list to open it up.
3.  Click **Challenge Dispute**.
4.  In the _Additional Details_ field, do one of the following:
    *   Enter `winning_evidence` to win the dispute.
    *   Enter `losing_evidence` to lose the dispute.
5.  At the bottom, click **Submit Evidence**.

You can also accept the dispute in Step 3 instead of challenging it to test that scenario.

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-16-at-18.56.02-UTC@2x.png)

Testing a winning dispute response.