# How do I transfer a site that uses WooCommerce Payments to a new owner?

This document explains how to transfer ownership of a website using WooCommerce Payments from one person to another. Doing so may be called for if, for example, you’ve sold the business to someone else and you need to transfer the website to be under their control.

**NOTE:** Please read this guide carefully, as the potential for error is high! It also may be best to have both the old owner and new owner complete these steps while in the same room, or on a conference call. This is because WooCommerce Payments will be unable to accept payments during one step of this process. (There will be another warning like this one before this happens.) As such, completing this guide quickly is important, especially if you don’t have alternative payment methods.

## [WordPress.com account for new owner](#wpcom-account-for-new-owner)

The first step is to have the new owner [create a WordPress.com account](https://wordpress.com/start/user) for themselves, being sure to note their username and password. This is necessary because all websites that use WooCommerce Payments are [required to be connected](https://woocommerce.com/document/woocommerce-payments/our-policies/#wpcom-account) to WordPress.com.

To be clear, the new owner does not need to create a new WordPress.com _site_. They only need to create an _account_, which they can do by using the link above.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-19-at-19.08.43-UTC@2x.png)

Creating a user account on WordPress.com

## [Site admin account for new owner](#site-admin-account-for-new-owner)

Next, the existing owner can give the new owner administrator access to the site itself by making an account for them in the WordPress dashboard, under **Users > Add New**. The WordPress.org documentation has [instructions on how to use that page](https://wordpress.org/support/article/users-add-new-screen/).

Ensure that the **Role** field is set to “Administrator” in order to give the new owner full access!

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-19-at-19.13.41-UTC@2x.png)

Granting administrator access to a new user account

## [Stripe Express account for new owner](#stripe-express-account-for-new-owner)

The last account that the new owner will need to create is a [Stripe Express account](https://woocommerce.com/document/woocommerce-payments/account-management/partnership-with-stripe/), which is what WooCommerce Payments uses to process payments. The old owner will need to invite the new owner to create an account like so:

1.  The old owner should log into their Stripe Express account as detailed [here](https://woocommerce.com/document/woocommerce-payments/account-management/access-stripe-account/).
2.  Scroll down, and under _Platform Settings_, click your site name.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-19-at-20.18.28-UTC@2x.png)

3.  In the _Team Members_ section, click the **Invite and remove** box.
4.  Click the **Add team member** button.
5.  Enter the email address of the new owner.
    *   Preferably this is the same email they used for their WordPress.com account and their admin account on the actual website.
6.  Click the **Invite** button.
7.  The new owner will receive an invite link from Stripe in their email.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-19-at-20.27.42-UTC@2x.png)

8.  On their device, have the new owner click the **Accept invite** button.
    *   They will be taken to a Stripe Express account signup page on Stripe’s website.
9.  The new owner should enter their phone number and click **Next**.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-19-at-20.52.42-UTC@2x.png)

10.  After validating their phone number by entering a short verification code, the new owner will be able to log into the Stripe Express dashboard and manage the Stripe Express account in the same way that the original owner can.

## [Change business information in Stripe](#change-business-info-in-stripe)

Now that the new owner has access to the site’s Stripe Express dashboard, they should change all the relevant information to reflect the new ownership. For example, the new owner will want to [update the contact details](https://woocommerce.com/document/woocommerce-payments/account-management/update-my-contact-details/) on file as well as [change the connected bank account(s)](https://woocommerce.com/document/woocommerce-payments/deposits/change-deposit-account-info/).

Essentially, have the new owner click into each section of the Stripe Express dashboard:

*   Payout Details
*   Linked External Accounts
*   Platform Settings

… and update any outdated information that they find.

## [Have Stripe change the owner](#change-stripe-account-ownership)

Next comes the only part of the process that requires a third party: transferring ownership of the Stripe Express account. (The previous sections only resulted in the new owner co-managing the account.) Transferring ownership can only be done by Stripe support.

To actually transfer ownership of the account, you will need to contact Stripe support by logging in the Express dashboard and clicking the question mark / help icon at the top.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-20-at-14.49.05-UTC@2x.png)

You’ll land on Stripe’s Help & Support page, and you can contact them by clicking the **Contact Stripe Express support** link.

Stripe has advised us that you will need the following information in order to transfer ownership of an Express account:

*   The phone number of the new owner of Express account.
*   The email address of the new owner of Express account.
*   A form of verification:
    *   If a company representative is available, they will set up a call to confirm.
    *   If a company representative is not available, they will need a verification letter.
    *   If both the company representative and the old owner/administrator have left the company, they will need a verification letter from a company signatory which confirms and details the change of company representative and the transfer of ownership of the Stripe Express account. A company signatory is someone entitled to sign or execute business contracts on behalf of the organization, such as department directors, VPs, CTO, CFO, CEO, or board members.

Once Stripe has assisted you in changing the owner of the Stripe Express account, proceed to the next section.

## [WordPress.com connection transfer](#wpcom-connection-transfer)

Now that the new owner has all of the required accounts and information in place, it’s time to transfer ownership of [the WordPress.com connection](https://woocommerce.com/document/woocommerce-payments/our-policies/#wpcom-account) to them.

**NOTE:** It is during this next part of the process that WooCommerce Payments will be unable to take payments. We suggest that you transfer the WordPress.com connection to the new owner as quickly as possible. If you are at all unsure of how to proceed, please [contact our support](https://woocommerce.com/my-account/create-a-ticket/) for guidance.

To transfer the connection, follow [this process](https://woocommerce.com/document/woocommerce-payments/our-policies/connection/#changing-the-account-you're-connected-to). It can differ based on whether you’re using our [Jetpack plugin](https://jetpack.com/) or not, but the result is the same: the new owner’s WordPress.com account should end up being the one to which the site is connected in our systems.

![](https://woocommerce.com/wp-content/uploads/2023/01/image-4.png)

Disconnecting Jetpack in order to reset the WordPress.com account connection

Once the new owner has connected the site to WordPress.com using their account, WooCommerce Payments will be able to take payments again!

## [Remove old owner access](#remove-old-owner-access)

The last step of the process is to remove the old owner’s various accounts.

The new owner can delete the old owner’s administrator account on the site, under **Users > All Users**. [WordPress.org has documentation](https://wordpress.org/documentation/article/users-screen/#delete-users) on how this is done.

The new owner should also remove the old owner from Stripe Express. To do so:

1.  Log into your Stripe Express account as detailed [on this page](https://woocommerce.com/document/woocommerce-payments/account-management/access-stripe-account/).
2.  Scroll down to look under _Platform Settings_ and click your site name.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-19-at-20.18.28-UTC@2x.png)

3.  In the _Team Members_ section, click the **Invite and remove** box.
4.  Enter the verification code sent to your phone number.
5.  On the next page, click the **X** icon by the old owner’s account to remove it.

![](https://woocommerce.com/wp-content/uploads/2023/01/Screenshot-taken-on-2023-01-20-at-15.35.50-UTC@2x.png)

6.  Click **Remove** in the confirmation modal that appears.
7.  Click the **Done** button.

## [Finishing up](#finishing-up)

After this is all done, the new owner should now control all the relevant accounts:

*   The WordPress.com connection
*   The site itself, via their admin account
*   The Stripe Express account

Note that it may still be necessary to transfer ownership of some other accounts, e.g. the web hosting account, but those are out of the scope of this guide.