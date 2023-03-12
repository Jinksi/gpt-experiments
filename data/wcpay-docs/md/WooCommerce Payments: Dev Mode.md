# WooCommerce Payments: Dev Mode

If you want to test WooCommerce Payments on a site that will not need to process real payments, you can use Dev Mode.

With Dev Mode, it’s possible to create a test account that requires no personal information. This account can then be used to process test transactions. It will only operate in [Test Mode](https://woocommerce.com/document/payments/testing/) and cannot be used to process live transactions.

**NOTE:** WooCommerce Payments must be [connected to WordPress.com](https://woocommerce.com/document/payments/connection/), even in Dev Mode. This means it’s not possible to run WooCommerce Payments locally unless you expose your site to the Internet with [ngrok](https://ngrok.com/) or a similar tool.

## [Enable Dev Mode](#section-1)

To enable Dev Mode, you can either:

*   Ensure your [site’s environment type](https://developer.wordpress.org/apis/wp-config-php/#wp-environment-type) is set to either `development` or `staging`.
*   Add the following constant to your site’s `wp-config.php` file:

define( 'WCPAY\_DEV\_MODE', true );

Note that Dev Mode must be enabled before starting the signup process in order to properly create a test account!

## [Create a test account](#section-2)

Once you’ve enabled Dev Mode, complete the WooCommerce Payments test account creation process by following these steps:

1.  In your site’s dashboard, click the **Payments** menu item.
2.  Click the **Finish Setup** button.
3.  [Connect to your WordPress.com account](https://woocommerce.com/document/payments/connection/) by entering your credentials.
4.  After connect to WordPress.com, the setup process will continue on `connect.stripe.com`.
    *   You can verify that Dev Mode is enabled by looking for the “Test Mode” box.

![](https://woocommerce.com/wp-content/uploads/2022/09/Screenshot-taken-on-2022-09-14-at-18.00.22-UTC@2x.png)

Test Mode box, indicating that WooCommerce Payments is in Dev Mode.

5.  For the phone number, enter all zeros.
6.  Stripe will ask you to verify the phone number. Click the **Use Test Code** button.
7.  Enter anything for country and type of business.
8.  Enter any name and birthdate that’s in the past.
9.  Enter any valid email address.
10.  Enter any valid physical address.
11.  Enter all zeros for your tax ID, e.g. a Social Security Number.
12.  Enter any industry.
13.  For your bank details, click the **Use Test Account** button.
14.  At the end, click **Submit** to create the test account.
15.  Back on your site, you can verify that you’re in Dev Mode again under **Payments > Settings**.

![](https://woocommerce.com/wp-content/uploads/2022/09/Screenshot-taken-on-2022-09-14-at-18.09.03-UTC@2x.png)

Verifying that Dev Mode is enabled after setting up a test account.

## [Cloning from production to staging](#cloning-production-to-staging)

If you copy a production site to a staging or development environment, and the site has never been in Dev Mode before, you will need to complete the account set up process again using the test details shown above. This will create a new test account for use while in Dev Mode on that site.

Your transaction data from the production environment will not be available while in Dev Mode on the staging or development environments. It will remain available on the production environment of course.

## [Disabling Dev Mode](#disabling-dev-mode)

To disable Dev Mode, remove this line from your `wp-config.php` file:

define( 'WCPAY\_DEV\_MODE', true );

Keep in mind that, even after removing that line, Dev Mode will still be enabled if your [site’s environment type](https://developer.wordpress.org/apis/wp-config-php/#wp-environment-type) is set to either `development` or `staging`.

Once Dev Mode is disabled, you will need to go through the account setup again, this time using real information for the account. (If an account was connected before Dev Mode was enabled, the store will revert to that setup.)

**NOTE:** Using the same site for both testing in Dev Mode and live transactions later on could lead to confusion. This is because test transactions done in Dev Mode will still be visible under **WooCommerce > Orders**, but not under **Payments > Transactions**. Other such inconsistencies make this workflow inadvisable. It’s best to use dev mode on staging URLs only, which will never need to take real transactions.