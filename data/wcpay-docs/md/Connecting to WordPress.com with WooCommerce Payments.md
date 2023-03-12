# Connecting to WordPress.com with WooCommerce Payments

WooCommerce Payments requires a connection to a WordPress.com account to accept payments from buyers and to show sellers details about transactions, deposits, and disputes.

## [Setting up the connection](#setting-up-the-connection)

After activating WooCommerce Payments for the first time, you’ll be prompted to connected to WordPress.com. If you don’t have a WordPress.com account, you’ll be prompted to create one as a part of this process.

If you have the Jetpack plugin activated and connected to a WordPress.com account, your Jetpack plugin connection will be used instead of having to connected WooCommerce Payments separately.

## [Resetting the connection](#resetting-the-connection)

On occasion, such as after restoring your site from a backup, WooCommerce Payments might become disconnected from WordPress.com. To fix this problem, you can use [Jetpack](https://wordpress.org/plugins/jetpack/) to reset the connection so that it works again.

To reset the connection, follow the _[Changing the account you’re connected to](#changing-the-account-you're-connected-to)_ section shown below. However, instead of reconnecting your site to a different WordPress.com account, simply reconnect to your original one to restore the connection.

## [Changing the account you’re connected to](#changing-the-account-you're-connected-to)

If you want to change the WordPress.com account that your WooCommerce Payments store is connected to, you can do so. There are two ways to do this, depending on whether you have (or want to have) Jetpack installed on your site.

*   [If you do NOT have or want Jetpack](#if-you-do-not-have-or-want-jetpack)
*   [If you DO have or want Jetpack](#if-you-do-have-or-want-jetpack)

### [If you do NOT have or want Jetpack](#if-you-do-not-have-or-want-jetpack)

**NOTE:** After you click the red **Disconnect** button in the steps below, WooCommerce Payments will be unable to take payments until reconnected to WordPress.com. Thus, we suggest that you reconnect to the new account as quickly as possible. If you are at all unsure of how to proceed, please [contact our support](https://woocommerce.com/my-account/create-a-ticket/) for guidance.

To change which WordPress.com account your site is connected to, but without keeping Jetpack installed on your site permanently, follow the steps below:

1.  Install and activate Jetpack on your site [per this document](https://jetpack.com/support/install-jetpack-and-connect-your-new-plan/#installing-jetpack).
    *   Jetpack should automatically connect to whichever WordPress.com account you used during the WooCommerce Payments signup process.
2.  Disconnect Jetpack following [these instructions](https://jetpack.com/support/disconnect-jetpack-sites/#disconnect-a-jetpack-site-using-wp-admin).
    *   You will see a popup indicating that this will break WooCommerce Payments.

![](https://woocommerce.com/wp-content/uploads/2022/09/Screenshot-taken-on-2022-09-15-at-19.34.52-UTC@2x.png)

3.  Click the **Disconnect** button.
4.  Click the **No thank you** link.
    *   Jetpack and WooCommerce Payments are now disconnected from WordPress.com.
5.  Under **Plugins > Installed Plugins**, deactivate Jetpack and delete it.
6.  Go to the [WordPress.com profile page](https://wordpress.com/me) and click the **Log Out** button.
    *   This will log you out of WordPress.com so that, when you reconnect WooCommerce Payments, you can connect to any WordPress.com account you choose.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-25-at-20.04.52-UTC@2x.png)

Logging out of WordPress.com

7.  Go back to the admin dashboard of your site using WooCommerce Payments.
8.  Click the **Payments** menu.
9.  Click **Finish Setup**.
10.  Connect to a WordPress.com account of your choosing.
    *   Once you are connected to any WordPress.com account, WooCommerce Payments will automatically be connected to the same [Stripe Express account](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/) as before.

After the site is reconnected to WordPress.com, WooCommerce Payments will resume taking payments. This will happen automatically, without any other steps needed.

### [If you DO have or want Jetpack](#if-you-do-have-or-want-jetpack)

**NOTE:** After you click the red **Disconnect** button in the steps below, WooCommerce Payments will be unable to take payments until reconnected to WordPress.com. Thus, we suggest that you reconnect to the new account as quickly as possible. If you are at all unsure of how to proceed, please [contact our support](https://woocommerce.com/my-account/create-a-ticket/) for guidance.

To change which WordPress.com account your site is connected to, while keeping Jetpack installed on your site, follow the steps below:

1.  Temporarily disconnect Jetpack following [these instructions](https://jetpack.com/support/disconnect-jetpack-sites/#disconnect-a-jetpack-site-using-wp-admin).
    *   You will see a popup indicating that this will break WooCommerce Payments.

![](https://woocommerce.com/wp-content/uploads/2022/09/Screenshot-taken-on-2022-09-15-at-19.34.52-UTC@2x.png)

3.  Click the **Disconnect** button.
4.  Click the **No thank you** link.
    *   Jetpack and WooCommerce Payments are now disconnected from WordPress.com.
5.  Go to the [WordPress.com profile page](https://wordpress.com/me) and click the **Log Out** button.
    *   This will log you out of WordPress.com so that, when you reconnect WooCommerce Payments, you can connect to any WordPress.com account you choose.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-25-at-20.04.52-UTC@2x.png)

Logging out of WordPress.com

6.  Go back to the admin dashboard of your site using WooCommerce Payments.
7.  Click the **Payments** menu.
8.  Click **Finish Setup**.
9.  Connect to a WordPress.com account of your choosing.
    *   Jetpack will automatically be connected to that same WordPress.com account.

After the site is reconnected to WordPress.com, WooCommerce Payments will resume taking payments. This will happen automatically, without any other steps needed.

## [Troubleshooting](#troubleshooting)

If you’re having trouble connecting WooCommerce Payments, please [contact our support team](https://woocommerce.com/my-account/create-a-ticket/?select=5278104). If you’re having trouble creating a WordPress.com account or accessing that account, please [contact our WordPress.com support team](https://wordpress.com/support/contact/).