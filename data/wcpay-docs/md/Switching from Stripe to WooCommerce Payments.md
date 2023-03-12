# Switching from Stripe to WooCommerce Payments

If you would like to stop using the Stripe extension and switch to WooCommerce Payments instead, this document describes how to do that with as little disruption as possible to your site and your customers.

Because the process is a little different depending on whether or not your store utilizes our [Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/), and whether or not you plan to keep using it after switching off of Stripe, we’ve split this guide into three sections:

*   [No subscription products in the store](#no-subscriptions-products)
*   [Continue using the Subscriptions extension](#continue-using-subscriptions-extension)
*   [Move to WooCommerce Payments subscriptions](#move-to-wcpay-subscriptions)

Please consult [our comparison of the two](https://woocommerce.com/document/payments/subscriptions/comparison/) subscriptions options if you’re unsure about which one is best for your store.

## [No subscriptions products](#no-subscriptions-products)

The following instructions are for stores that do not sell subscription products. Because such stores are less complex than those that do sell subscriptions, the switching process is simpler.

If you do sell subscription products, please see one of the other two sections of this document.

### [Install and sign up](#install-and-sign-up)

First, install and sign up for WooCommerce Payments as shown in [our Startup Guide](https://woocommerce.com/document/payments/#installation).

After you finish signing up, WooCommerce Payments will be active and able to take payments right alongside the Stripe extension. This may [cause some issues](https://woocommerce.com/document/can-i-use-woocommerce-payments-and-the-stripe-plugin-at-the-same-time/), so it’s best to move on to the next section of this document quickly.

### [Disable Stripe payments](#disable-stripe)

The next step is to disable Stripe as an active payment method. Do **NOT** simply disable the Stripe plugin itself! The plugin needs to be active, otherwise you will not be able to issue refunds and perform other actions on orders that were originally placed via Stripe.

To disable Stripe as an active payment method:

1.  Go to **WooCommerce > Settings > Payments** tab.
2.  Click the **All payment methods** section at the top, like so:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-20.44.35-UTC@2x.png)

Viewing the list of all payment methods.

4.  Find the Stripe gateway in the list.
5.  In the _Enabled_ column, toggle it off.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-20.46.47-UTC@2x.png)

Stripe payment method disabled.

Now that Stripe payments are disabled, all new orders will use WooCommerce Payments (or potentially any other payment gateways you still have enabled, such as PayPal).

### [Waiting period](#waiting-period)

Next, we advise leaving things as they are for at least a couple of months. This is because, as mentioned above, if you deactivated the Stripe plugin immediately, you would not be able to issue refunds and such for orders that were placed with Stripe.

Thus, it’s best to keep the Stripe plugin active for few months even after you’ve disabled it as a payment method, just to lower the chance that you will need to refund any customers who did pay with Stripe.

### [Deactivate Stripe](#deactivate-stripe)

After some time has passed, and refunds for orders that were originally placed via Stripe are unlikely, you can go ahead and deactivate it under **Plugins > Installed Plugins**.

## [Continue using Subscriptions extension](#continue-using-subscriptions-extension)

If you sell subscription products on your site using Stripe and the [Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/), and you want to switch to WooCommerce Payments and the Subscriptions extension, this section explains how to do that.

### [Install and sign up](#keep-subs-install-and-sign-up)

First, install and sign up for WooCommerce Payments as shown in [our Startup Guide](https://woocommerce.com/document/payments/#installation).

After you finish signing up, WooCommerce Payments will be active and able to take payments right alongside the Stripe extension. This may [cause some issues](https://woocommerce.com/document/can-i-use-woocommerce-payments-and-the-stripe-plugin-at-the-same-time/), so it’s best to move on to the next section of this document quickly.

### [Disable Stripe payments](#keep-subs-disable-stripe)

The next step is to disable Stripe as an active payment method. Do **NOT** simply disable the Stripe plugin itself! The plugin needs to be active so that you can, if needed, refund any orders that were placed via Stripe, and so that current subscribers who pay with Stripe don’t experience any unnecessary disruption.

To disable Stripe as an active payment method:

1.  Go to **WooCommerce > Settings > Payments** tab.
2.  Click the **All payment methods** section at the top, like so:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-20.44.35-UTC@2x.png)

Viewing the list of all payment methods.

4.  Find the Stripe gateway in the list.
5.  In the _Enabled_ column, toggle it off.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-20.46.47-UTC@2x.png)

Stripe payment method disabled.

Now that Stripe payments are disabled, all new orders will use WooCommerce Payments (or potentially any other payment gateways you still have enabled, such as PayPal).

### [Prepare email to subscription customers](#keep-subs-prep-email)

Moving subscribers from one payment gateway to another can’t be done without some action on their part. As such, it’s important to be proactive and communicate with your customers ahead of time. If you have a small number of subscribers, you may be able to email them by hand. If your subscriber base is large, we suggest using [AutomateWoo](https://woocommerce.com/products/automatewoo/) to email them all at once.

Essentially, you should warn them that their subscriptions will soon be set to [renew manually](https://woocommerce.com/document/subscriptions/renewal-process/#section-4) as a part of the switching process. To switch back to automatic renewals, your email should instruct customers to log into the site immediately after receiving the message and update their payment method. This will resume automatic payments going forward with minimal disruption.

For convenience, your email should include a link to the **My Account > Subscriptions** page, which is at this URL by default:

`https://www.example.com/my-account/subscriptions/`

This will help customers go directly to their dashboard and update the payment methods on their subscriptions. By clicking into each subscription, they can see which ones are on manual renewal, and thus which ones they need to add payments methods to.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-16-at-14.53.46-UTC@2x.png)

A subscription on manual renewal and in need of a payment method.

If you elect to use AutomateWoo to email your subscribers, the workflow would look very similar to the one for [onboarding subscribers without a payment method](https://automatewoo.com/docs/examples/subscription-workflows/onboard-woocommerce-subscriptions-to-automatic-renewals/). The only difference would be that your workflow should be run manually, immediately after the next section.

### [Set subscriptions to manual renewal](#keep-subs-set-manual-renewal)

Now that you have your email prepared and ready to send to subscribers, it’s time to set their subscriptions to manual renewal. To do this:

1.  Go to **WooCommerce > Subscriptions** in your dashboard.
2.  Find a subscription that uses the Stripe payment method, like so:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-11-at-20.26.39-UTC@2x.png)

A subscription that uses Stripe for renewal payments.

3.  Click the subscription ID number to edit the subscription.
4.  In the _Billing_ section, click the pencil icon.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-11-at-20.28.04-UTC@2x.png)

Editing the Billing section of a subscription.

5.  In the _Payment Method_ dropdown, select **Manual Renewal**.
6.  Click the **Update** button to save the subscription.
7.  Repeat those steps for every subscription that uses Stripe for renewals.

If you have a small number of subscribers using Stripe, this method might be feasible. If you have a large number of subscribers, however, we again suggest using [AutomateWoo](https://woocommerce.com/products/automatewoo/) to set them all to manual renewal at once. The workflow might look like the one below, although that is not guaranteed to work for every use case.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-11-at-20.47.14-UTC@2x.png)

AutomateWoo workflow to set all Stripe subscriptions to Manual Renewal.

If you need help creating an equivalent AutomateWoo workflow, please [contact support](https://woocommerce.com/my-account/create-a-ticket/).

### [Send email to subscription customers](#keep-subs-send-email)

Now that you’ve actually set all the Stripe subscriptions to renew manually, you can send the email (or run the AutomateWoo workflow) you prepared in [the previous section](#keep-subs-prep-email).

This will prompt all your subscribers to log in and quickly update their payment method in order to avoid the hassle of renewing manually in the future.

### [Waiting period](#keep-subs-wait-for-renewals)

Once the email is sent, you may get questions from some subscribers about the switch, how to renew, etc. It’s best to watch your email inbox carefully to avoid losing customers. It will take some time for all of them to add payment methods to WooCommerce Payments, but over time their subscriptions should be switched over.

We also advise keeping the Stripe plugin enabled for at least a couple of months, even though it’s currently disabled as a payment method. This is because, if you deactivated the Stripe plugin immediately, you would not be able to issue refunds for orders that were placed with Stripe.

As such, it’s best to keep the Stripe plugin active for few months before deactivating it.

### [Deactivate Stripe](#keep-subs-deactivate-stripe)

After some time has passed, and refunds for orders that were originally placed via Stripe are unlikely, you can go ahead and deactivate it under **Plugins > Installed Plugins**.

## [Move to WooCommerce Payments subscriptions](#move-to-wcpay-subscriptions)

If you sell subscription products on your site using Stripe and the [Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/), and you want to switch to WooCommerce Payments and its built-in subscriptions functionality, this section explains how to do that.

### [Install and sign up](#stop-subs-install-and-sign-up)

First, install and sign up for WooCommerce Payments as shown in [our Startup Guide](https://woocommerce.com/document/payments/#installation).

After you finish signing up, WooCommerce Payments will be active and able to take payments right alongside the Stripe extension. This may [cause some issues](https://woocommerce.com/document/can-i-use-woocommerce-payments-and-the-stripe-plugin-at-the-same-time/), so it’s best to move on to the next section of this document quickly.

### [Disable Stripe payments](#stop-subs-disable-stripe)

The next step is to disable Stripe as an active payment method. Do **NOT** simply disable the Stripe plugin itself! The plugin needs to be active so that you can, if needed, refund any orders that were placed via Stripe, and so that current subscribers who pay with Stripe don’t experience any disruption.

To disable Stripe as an active payment method:

1.  Go to **WooCommerce > Settings > Payments** tab.
2.  Click the **All payment methods** section at the top, like so:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-20.44.35-UTC@2x.png)

Viewing the list of all payment methods.

4.  Find the Stripe gateway in the list.
5.  In the _Enabled_ column, toggle it off.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-20.46.47-UTC@2x.png)

Stripe payment method disabled.

Now that Stripe payments are disabled, all new orders will use WooCommerce Payments (or potentially any other payment gateways you still have enabled, such as PayPal).

### [Email subscription customers](#stop-subs-email-customers)

Switching subscribers from one payment gateway to another can’t be done without customer involvement. Specifically, your current subscribers will need to log into the site at least once to add a payment method to WooCommerce Payments. This is what allows future renewals to take place automatically.

As such, it’s important to be proactive and communicate with your customers about this ahead of time. If you have a small number of subscribers, you may be able to email them by hand. If your subscriber base is large, we suggest using [AutomateWoo](https://woocommerce.com/products/automatewoo/) to email them all at once.

Essentially, you should warn them that their subscriptions will soon be set to renew manually. What will happen is that, on their next renewal date, WooCommerce will automatically email them an invoice. That invoice will contain a link they can click to pay for their renewal order.

By clicking the link and paying for their renewal via WooCommerce Payments, that payment method will be saved to their subscription and used in the future for automatic renewals. In other words, they will only need to manually renew one time.

### [Disable Subscriptions extension](#stop-subs-deactivate)

Now that you’ve warned your customers about what’s happening, it’s time to set their subscriptions to manual renewal. Since you plan on switching from the Subscription extension to the WooCommerce Payments built-in subscriptions functionality, you can do this by simply deactivating the Subscriptions extension under **Plugins > Installed Plugins**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-14-at-19.30.49-UTC@2x.png)

Deactivating the Subscriptions extension

You will see a modal warning you about deactivating Subscriptions, like so:

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-14-at-19.39.16-UTC@2x.png)

Modal warning seen when deactivating WooCommerce Subscriptions extension

Click **Yes, deactivate WooCommerce Subscriptions** to deactivate the plugin. This will set all of your Subscriptions (not just those paid with Stripe) to manual renewal.

### [Waiting period](#stop-subs-wait-for-renewals)

Now that all of your subscribers are set to renew manually, all you need to do is wait for their next renewal dates. At that point, they will each get an email with instructions on how to log into the site to pay for their subscription renewal.

Once they renew manually and pay via WooCommerce Payments, a subscription will be created for them using the built-in subscriptions functionality in WooCommerce Payments.

We also advise keeping the Stripe plugin enabled for at least a couple of months, even though it’s currently disabled as a payment method. This is because, if you deactivated the Stripe plugin immediately, you would not be able to issue refunds for orders that were placed with Stripe.

As such, it’s best to keep the Stripe plugin active for few months before deactivating it.

### [Deactivate Stripe](#stop-subs-deactivate-stripe)

After some time has passed, and refunds for orders that were originally placed via Stripe are unlikely, you can go ahead and deactivate it under **Plugins > Installed Plugins**.