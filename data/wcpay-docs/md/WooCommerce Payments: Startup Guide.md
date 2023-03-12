# WooCommerce Payments: Startup Guide

Thanks for choosing WooCommerce Payments! 

We provide an integrated payments solution to get you up and running quickly, without setup costs or monthly fees. You get:

*   Credit and debit card acceptance.
*   Local payment methods.
*   Automated deposits to your bank account.
*   Built-in multi-currency support.
*   Easy integration of popular digital wallets.

Managing payments – including refunds, disputes, and deposits – all happens from your dashboard, integrated into your site’s WordPress admin screen.

## [Requirements](#requirements)

First, let’s make sure you have what’s required to ensure a smooth installation:

*   Business based in a [supported country](https://woocommerce.com/document/payments/countries/).
*   Selling in a [supported currency](https://woocommerce.com/document/payments/faq/available-currencies/).
*   The latest version of PHP.
*   The latest version of WordPress.
*   The latest version of WooCommerce.
*   [An SSL certificate](https://woocommerce.com/document/ssl-and-https/).

You can check your PHP version in WordPress, under **Tools > Site Health > Info > Server**.

Your WordPress version is on the **Dashboard > Updates** page.

Lastly, your WooCommerce version can be found under **Plugins > Installed Plugins**.

### **Check if WooCommerce Payments is installed** 

Go to **Plugins > Installed Plugins** to see if WooCommerce Payments is listed there. If it is listed, great! Scroll down to the [Signing Up](#signing-up) section. If it’s not listed, please follow the instructions in the section below.

## [Installation](#installation)

To install WooCommerce Payments:

1.  Go to **Plugins > Add New** on your WordPress site.
2.  In the search box, type “WooCommerce Payments” and hit Enter on your keyboard.
3.  One of the first results will be WooCommerce Payments by Automattic.

![](https://woocommerce.com/wp-content/uploads/2022/10/image.jpeg)

4.  Click the **Install Now** button to begin installation on your site. Once installation is complete, the **Install Now** button will change to **Activate**.

*   ![](https://woocommerce.com/wp-content/uploads/2022/10/image-1.jpeg)
    
    Installing WooCommerce Payments
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/10/image-2.jpeg)
    
    Activating WooCommerce Payments
    

5.  Click the **Activate** button.

After clicking the **Activate** button, you will be taken to the setup page to **Finish Setup**. This is where the WooCommerce Payments sign up process begins.

![](https://woocommerce.com/wp-content/uploads/2022/10/image-9.png)

## [Signing up](#signing-up)

After you’ve installed and activated WooCommerce Payments, click the **Finish Setup** button to start the sign-up process.

We’ll ask you to [connect to your WordPress.com account](https://woocommerce.com/document/payments/connection/) and enter some information about you and your business. Lastly, you’ll add a bank account (or, optionally, if you’re located in the United States, a debit card) in order to receive deposits.

**NOTE:** You will have to provide business details such as a Social Security number or tax ID, date of birth, and bank account info during this process, so please have this information ready. It is not always possible to change account information once you’ve saved it, especially if transactions have already occurred.

Before you start signing up, keep the following in mind:

*   Since WooCommerce Payments is [built in partnership with Stripe](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/), our payments processor, you will be taken to their site to complete the sign-up process.
*   If you’re setting up the website or WooCommerce Payments for someone else, it’s best that they complete the account creation process. This is because it’s not always possible to change the account information once it’s been saved.
*   Please see our documentation on [testing WooCommerce Payments](https://woocommerce.com/document/payments/testing/) or [using Dev Mode](https://woocommerce.com/document/payments/testing/dev-mode/) if you want to try it out first, including on a local site.
*   If you are in the United States, you will have the option to add a debit card instead of bank account. Adding a bank account is preferred for two reasons:
    *   Debit cards have a maximum amount of money ($10,000 USD) that can be deposited in a single transaction. Bank accounts do not have any such limit.
    *   Debit cards cannot be debited if your [account balance goes negative](https://woocommerce.com/document/payments/faq/why-is-my-account-showing-a-negative-balance/), which could prevent you from issuing timely refunds to customers.

To sign up for WooCommerce Payments: 

1.  Go to **Payments** and click **Finish Setup**.

![](https://woocommerce.com/wp-content/uploads/2022/10/image-10.png)

2.  Enter your email address to connect to that WordPress.com account.

![](https://woocommerce.com/wp-content/uploads/2022/10/image-3.jpeg)

3.  Verify your business details with our payments partner, Stripe.

![](https://woocommerce.com/wp-content/uploads/2022/10/image-11.png)

Once you’ve finished verifying your business details with Stripe, you can accept credit and debit card payments and receive deposits into the account you provided.

Here’s a short video showing how you can use WooCommerce Payments after you’re done signing up.

## [Staying updated](#staying-updated)

Running the latest versions of both WooCommerce and WooCommerce Payments is a crucial part of keeping your site secure. We suggest enabling automatic updates for both plugins on the **Plugins > Installed Plugins** page.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-10-at-20.45.25-UTC@2x.png)

You can learn more about auto-updating plugins on [this WordPress.org page](https://wordpress.org/documentation/article/plugins-themes-auto-updates/).

## [Configuring](#configuring)

Once you’ve finished the signup process, go to the **Payments** > **Settings** section of your WordPress dashboard. This is where you can configure WooCommerce Payments. 

First, make sure WooCommerce Payments is enabled by checking the **Enable WooCommerce Payments** box. If you want to test WooCommerce Payments before taking any real payments, you can do that by also checking the **Enable test mode** box.

![](https://woocommerce.com/wp-content/uploads/2022/10/image-4.jpeg)

### [Test mode](#test-mode)

Test mode lets you simulate transactions using test card numbers so that you can ensure your checkout process is working as expected. Simply put any product in the cart and go through the checkout process and the order confirmation page to see exactly what customers would see during an actual purchase.

**NOTE:** In order to run a test transaction, you must have already created at least one product in your store. Also, test mode only works with [**test credit card numbers**](https://woocommerce.com/document/payments/testing/). Entering real credit card information in test mode will cause the order to fail.

When you’re ready to go live, remember to disable test mode to begin accepting live payments. 

Please see our [documentation](https://woocommerce.com/document/payments/testing/) for additional instructions on how to test WooCommerce Payments correctly.

### [Payments accepted on checkout](#payment-methods)

In the _Payments Accepted on Checkout_ section, you’ll see that by default you are already able to take card payments:

![](https://woocommerce.com/wp-content/uploads/2022/10/image-14.png)

### [Express checkouts](#express-checkouts)

The _Express Checkouts_ section of the settings page shows some features you can enable so that customers can purchase even faster. Enabling these features can help boost your sales and reduce abandoned carts, as they make it easier for customers to buy from your site. WooCommerce Payments currently supports [Apple Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/apple-pay/), [Google Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/google-pay/), and [Link by Stripe](https://woocommerce.com/document/woocommerce-payments/payment-methods/link-by-stripe/).

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-09-at-13.06.09-UTC@2x.png)

### [Transactions and Deposits](#transactions-and-deposits)

The _Transactions_ section controls how your checkout works. Here you can configure whether to allow customers to save their card information on your site and how a charge from your site will appear on customer bank statements. You can also add some contact information, which will appear on receipts and emails from your site.

![](https://woocommerce.com/wp-content/uploads/2023/02/Screenshot-taken-on-2023-02-23-at-13.30.48-UTC@2x.png)

The _Deposits_ section allows you to configure how often WooCommerce Payments deposits your earnings into your bank account.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-20-at-17.55.31-UTC@2x.png)

## [Going further](#going-further)

Now that you’re up and running with WooCommerce Payments, you can learn more about [managing your money](https://woocommerce.com/document/payments/managing-money/) and [the various settings](https://woocommerce.com/document/payments/settings-guide/) available to you. After that, feel free to explore some of the more advanced functionality our plugin has to offer!

*   [Use local payment methods](https://href.li/?https://woocommerce.com/document/payments/additional-payment-methods/)
*   [Create subscription products](https://href.li/?https://woocommerce.com/document/payments/subscriptions/)
*   [Sell in multiple currencies](https://href.li/?https://woocommerce.com/document/payments/currencies/multi-currency-setup/)

*   [Take payments in-person](https://href.li/?https://woocommerce.com/document/payments/getting-started-with-in-person-payments-with-woocommerce-payments/)
*   [Request instant deposits](https://href.li/?https://woocommerce.com/document/payments/instant-deposits/)
*   [Receive a business loan](https://href.li/?https://woocommerce.com/document/woocommerce-payments-stripe-capital/)

## [Getting help](#getting-help)

Here are a few simple things you can do to ensure you have the best experience with WooCommerce Payments:

*   Try to [stay on the latest version](https://href.li/?https://woocommerce.com/document/how-to-update-woocommerce/) of WooCommerce and WooCommerce Payments. This helps you avoid bugs and security issues that could disrupt your store!
*   Consult [our troubleshooting documentation](https://woocommerce.com/document/payments/troubleshooting/) and the WooCommerce [self-service guide](https://href.li/?https://woocommerce.com/document/woocommerce-self-service-guide/) for help solving the most common issues. 

If you need help, don’t worry! WooCommerce Payments is supported by our worldwide team of Happiness Engineers. Please contact us via [the Support tab](https://href.li/?https://woocommerce.com/my-account/create-a-ticket/) in your account dashboard, where we can assist over live chat (when available) or email.