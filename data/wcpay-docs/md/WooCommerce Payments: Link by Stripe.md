# WooCommerce Payments: Link by Stripe

[Link by Stripe](https://support.link.co/topics/about-link) is a simple and secure way to pay across any site that uses it, not just WooCommerce Payments sites!

**NOTE:** Link by Stripe is available to US merchants only.

## [Enabling](#enabling)

To enable Link by Stripe, follow these steps:

1.  In your WordPress dashboard, go to **Payments > Settings**.
2.  Enable the new checkout experience, if it’s not already enabled.

![](https://woocommerce.com/wp-content/uploads/2022/09/Screenshot-taken-on-2022-09-30-at-09.48.29-UTC@2x.png)

3.  Make sure that “Credit card / debit card” payments are enabled in the “Payments accepted on checkout” section.
4.  In the “Express Checkouts” section below, check the box for **Link by Stripe**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-12.59.39-UTC@2x.png)

5.  You’re done! Link by Stripe should start working automatically.

**NOTE:** Link by Stripe and [WooPay](https://woocommerce.com/document/woopay-merchant-documentation/) are currently incompatible. You cannot have both enabled at the same time. Our developers are working to address this issue.

## [New user experience](#new-user-experience)

When a customer goes through the checkout on your site for the first time after you enable Link by Stripe, they will see the following field asking for their phone number:

![](https://woocommerce.com/wp-content/uploads/2022/05/Screenshot-taken-on-2022-05-06-at-19.10.22-UTC@2x.png)

Whether or not they choose to enter their phone number and save their information into Link by Stripe, the rest of the checkout process will work as normal.

If they do enter their phone and elect to save their information, Stripe will create a Link account for them using the email address they entered in the checkout form. These accounts can be managed via [the Link by Stripe website](https://link.co/).

## [Enrolled user experience](#enrolled-user-experience)

If a customer already has a Link by Stripe account, whether it was created on your site or any other site that uses Link by Stripe, the checkout process will become much faster.

As soon as they enter their email address on your checkout page, they will see this prompt, asking them to verify their phone number:

![](https://woocommerce.com/wp-content/uploads/2022/05/Screenshot-taken-on-2022-05-06-at-19.16.22-UTC@2x.png)

Link by Stripe will automatically send a message to their phone number, and when the customer enters that into the Link by Stripe popup, they will be asked to double-check their payment method and shipping address like so:

![](https://woocommerce.com/wp-content/uploads/2022/05/Screenshot-taken-on-2022-05-06-at-19.17.41-UTC@2x.png)

After the customer has selected their payment method and address, and then clicked **Autofill Checkout**, their information will be automatically put into the appropriate checkout fields. From there, the checkout process continues as normal.

## [Logged in user experience](#logged-in-user-experience)

If a customer has an account on your site and also has an existing Link by Stripe account, they will see this Link logo in the email field of your checkout page:

![](https://woocommerce.com/wp-content/uploads/2022/05/Screenshot-taken-on-2022-05-06-at-19.26.52-UTC@2x.png)

By clicking that logo, the Link by Stripe phone verification popup will trigger, just like in the _Enrolled Link by Stripe User Experience_ section above. From there, the checkout process works exactly the same as described in that section.

## [Testing](#testing)

You can test Link by Stripe just like other payment methods to see how it functions without actually performing a real transaction. To do so, you must first have WooCommerce Payments in [test mode](https://woocommerce.com/document/woocommerce-payments/testing-and-troubleshooting/testing/), enable the [new checkout experience](https://woocommerce.com/document/payments/additional-payment-methods/), and [enable Link by Stripe](#enabling-link-by-stripe) itself.

Once those requirements are in place, you can test Link by Stripe like so:

1.  Log out of your site and any Link by Stripe accounts.
2.  Open your site, add a product to the cart, and go to checkout.
3.  For the email address, enter one you have not used on the site before.
4.  Fill out the rest of the checkout form with fake data.
    *   Do not use real personal information in test mode!
5.  Enter the test card info in the payment form.
6.  Check the “Save your info for secure 1-click checkout with Link” box.
7.  Enter `201-555-0123` as the phone number.
8.  Place the order.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-21.17.04-UTC@2x.png)

The payment form during Link by Stripe testing

If you log back into the site as an administrator, you should now be able to see the order under **WooCommerce > Orders** just like normal.

To test how an _existing_ Link by Stripe user makes a purchase:

1.  Log back out of your site.
2.  Open your shop, add a product to the cart, and go to checkout.
3.  For the email address, enter the same one you used above
4.  The popup will appear to ask for a six digit code. Enter `000 000`.
5.  When the popup shows the fake information you entered before, click **Autofill checkout**.
6.  Your information will be filled, and you can place the order.

## [Managing accounts](#managing-accounts)

Customers with a Link by Stripe account can manage their account via [the Link by Stripe website](https://link.co/), where they can add and remove payments methods and addresses, learn more about the security of Link by Stripe, and delete their Link by Stripe account if they wish. The [Link by Stripe documentation](https://support.link.co/) has guidance on how to perform these tasks.

## [Caveats](#caveats)

While Link by Stripe may seem similar to Apple Pay or Google Pay, the way it works is slightly different, so there are a few things to note.

*   Link by Stripe does not support checkout pages built with WooCommerce Blocks yet.
*   The settings that are available for Apple Pay and Google Pay do not apply to Link by Stripe.
*   Link by Stripe will always show on the checkout page only, not the product or cart pages.
*   If the new checkout experience is disabled, Link by Stripe will also be disabled automatically.