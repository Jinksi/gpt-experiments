# Authorize and capture

Our suggestion is that you **leave the authorize and capture later setting disabled** unless you have a very specific and well-justified use case in mind. If you do need or want to enable it, please read the entirety of this document!

Card transactions occur very quickly, which is what makes them convenient. In fact, they happen so fast that many people don’t realize that there are actually _two_ events taking place: an authorization and a capture.

By default, WooCommerce Payments will perform the authorization and capture at the same time. However, by enabling the **Issue an authorization on checkout, and capture later** setting, you can prevent WooCommerce Payments from automatically capturing charges. This allows you to manually capture the charge at a later time.

Although most merchants won’t need to use this feature, it may be helpful in certain scenarios. This document explains a bit more about how authorizations and captures work, and provides some example uses cases for which enabling the option might be a good idea.

## [What is an authorization vs. a capture?](#authorize-vs-capture)

An **authorization** is the first part of the charge process, in which the payment processor connects to the bank that issued the customer’s card and determines if the customer has enough money to cover the transaction cost. During this step, the funds are “held” or reserved for payment, but not actually sent to the merchant yet.

A **capture** (also known as “settlement”) occurs when the merchant instructs the payment processor to transfer some or all of the held funds from the customer’s account to their own. The customer’s bank then sends the requested amount of money. The merchant also has the option of cancelling the authorization.

Notably, authorizations are temporary in nature. They must be captured within seven days or the authorization will automatically expire. If that happens, the reserved funds are freed back up in the customer’s account.

## [When is manual capture helpful?](#when-is-manual-capture-helpful)

Manually capturing authorizations is usually used in scenarios where some payment is needed up-front, but the exact final amount is not known initially.

Here’s a list of some common examples where this workflow is used:

*   Gas/petrol stations where you “pay at the pump” issue an authorization before you beginning filling up your vehicle. When you’re done, and the exact amount of the charge is known to their system, they will capture that amount.
*   Hotels have an even longer time between when the charge is authorized (usually at check-in) and when the charge is captured (usually at check-out).
*   Equipment rental businesses may request a card so that they can issue an authorization prior to allowing their customers to take the equipment home.
*   Craftsmen who take custom orders (for a piece of furniture, say) might decide to authorize a customer’s card ahead of time and capture a different amount later on, depending on the exact work involved in the customer’s request.

## [Manual capture disadvantages](#manual-capture-disadvantages)

As you can see above, there are a few limited situations where authorizing first and capturing later are needed. However, for the vast majority of merchants using WooCommerce Payments, authorizing and capturing separately has several disadvantages:

*   Authorizations are temporary: they expire after seven days. If you don’t capture them in time, the customer will need to start the purchase process all over again. You might not even notice that you did not capture the charge until after you have shipped the customer their goods!
*   You cannot capture more than the amount originally authorized. If you initially authorize too little, you will need to cancel that authorization and have the customer repurchase.
*   The authorize and capture workflow only supports cards. It does not support any [local payment methods](https://woocommerce.com/document/payments/additional-payment-methods/), which can cause inconvenience for your customers.

## [Enabling authorize and capture later](#enabling-auth-and-capture)

If, after considering the above, you wish to enable authorize first and capture later, you can do that like so:

1.  Go to **Payments > Settings** in your site’s dashboard.
2.  In the _Transactions_ section, check the box next to “Issue an authorization on checkout, and capture later.”
3.  A popup will appear to ask if you are sure. Click **Enable**.
4.  Scroll to the bottom and click **Save Changes**.

If you’re using our [new checkout experience](https://woocommerce.com/document/payments/additional-payment-methods/) and have any local payment methods enabled, a warning will be shown stating that they cannot be used while authorize and capture is enabled.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.06.56-UTC@2x.png)

## [Viewing authorized orders](#viewing-authorized-orders)

If an order is placed while capture later is enabled, it will be assigned the On Hold status, which you can see under **WooCommerce > Orders**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.19.56-UTC@2x.png)

If you open the order itself, you’ll see a note indicating that it was authorized:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.21.58-UTC@2x.png)

Authorized orders will also appear under **Payments > Transactions**. Because these orders are not yet completed, and no funds have changed hands, they are listed under a separate _Uncaptured_ tab.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-29-at-18.33.50-UTC@2x.png)

## [Capturing authorized orders](#capturing-authorized-orders)

**NOTE:** You have seven days after the order was placed to capture the charge. After that time, the authorization will automatically expire and you will be unable to capture.

When your site has uncaptured orders, WooCommerce Payments will notify you of that by adding a badge to the **Payments > Transactions** menu item. This badge shows the number of uncaptured transactions.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-29-at-18.52.43-UTC@2x.png)

There are two ways to capture an authorized order, from the **WooCommerce > Orders** page or via **Payments > Transactions**. They both do the same thing, but the latter method is faster if you have multiple orders that need to be captured.

The video below gives a brief overview of how to capture a payment, and we also have more detailed instructions below.

### [Using WooCommerce > Orders](#capture-using-woocommerce-orders)

To capture a charge for an authorized order under **WooCommerce > Orders**:

1.  Find the order you wish to capture and click to open it.
2.  In the _Order Actions_ box, use the dropdown to select **Capture charge**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.32.45-UTC@2x.png)

3.  Click the **Update** button.

Assuming the capture is successful, the charge will be captured, an order note will be added, and the order status will be set to Completed.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.34.53-UTC@2x.png)

### [Using Payments > Transactions](#capture-using-payments-transactions)

To capture a charge for an authorized order under **Payments > Transactions**:

1.  Click the **Uncaptured** tab to show the list of uncaptured transactions.
2.  Click the Capture button for the order you wish to capture payment for.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-29-at-18.42.02-UTC@2x.png)

3.  The payment will be captured, and a notice will appear at the bottom.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-29-at-18.42.56-UTC@2x.png)

You can optionally also click the order in the list to open the transaction details page, and then capture from there.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-29-at-18.46.34-UTC@2x.png)

## [Partial captures](#partial-captures)

You may, if you wish, capture _less_ than the amount you originally authorized on the customer’s card. To do this:

1.  Find the order under **WooCommerce > Orders** and click to open it.
2.  Hover your cursor over a line item from the order and click the pencil icon that appears.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.39.54-UTC@2x.png)

3.  In the _Total_ box, enter the amount you wish to capture, then click **Save**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.41.44-UTC@2x.png)

4.  The cost of the item will updated as if a coupon were applied.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.43.41-UTC@2x.png)

5.  In the _Order Actions_ box, use the dropdown to select **Capture charge**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.32.45-UTC@2x.png)

6.  Click the **Update** button.

Assuming the capture is successful, the lesser amount will be captured, an order note will be added, and the order status will be set to Completed.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.49.51-UTC@2x.png)

**NOTE:** Attempting to capture more than the authorized amount will fail with an error. The order can still be captured once it’s been edited to have a total less than or equal to the original authorized amount.

## [Cancelling authorizations](#cancelling-authorizations)

If a customer wishes to cancel their order after it’s been authorized but before it’s been captured, you can do so using steps below.

Although authorizations expire automatically after seven days, it’s best to cancel them if you’ve confirmed that you won’t need to charge the customer. Doing so releases the hold their bank placed on their funds.

To cancel an authorization:

1.  Go to **WooCommerce > Orders** in your site’s dashboard.
2.  Find the order you wish to cancel and click to open it.
3.  In the _Order Actions_ box, use the dropdown to select **Cancel authorization**.
4.  Click the **Update** button.

The order status will be set to Cancelled and a note will be added:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-19.02.19-UTC@2x.png)