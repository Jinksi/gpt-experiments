# Accepting Apple Pay with WooCommerce Payments

WooCommerce Payments provides your store with [Apple Pay](https://www.apple.com/apple-pay/), which makes it easier for customers to checkout using Touch ID or Face ID on Apple devices. This document describes how to set up, test, and troubleshoot the Apple Pay feature in WooCommerce Payments.

Apple Pay is only available for [eligible devices](https://support.apple.com/en-us/HT208531) with an active Apple Wallet.

## [Setup](#setup)

To enable Apple Pay:

1.  Go to ****Payments** > **Settings****.
2.  In the Express Checkouts section, check the box for **Apple Pay / Google Pay**.
3.  At the bottom of the page, click **Save Changes**.

**NOTE:** There is no way to enable only Apple Pay without [Google Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/google-pay/). The two must be enabled together.

## [Customizing](#customizing)

When Apple Pay is enabled, the Apple Pay button can appear in three places:

*   On the Checkout page
*   On the Cart page
*   On individual product pages

You can customize which of these locations show the Apple Pay button by going to **Payments > Settings** and then clicking the **Customize** link for Apple Pay / Google Pay in the Express Checkouts section.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-11-at-14.13.22-UTC@2x.png)

Once there, you can change where the Apple Pay button shows up, the text of the Apple Pay button itself, as well as the size and color scheme of the button.

## [Purchasing](#purchasing)

By checking out with Apple Pay, customers don’t need to go through the regular checkout process and spend time filling in all of their information. Everything is handled using the Apple Pay interface, where customers can select their billing and shipping details, as well as which Apple Wallet card to use.

Once the transaction is authorized via Touch ID or Face ID, WooCommerce Payments then processes the transaction and redirects the customer to the “Order Received” / “Thank you” page.

## [Product compatibility](#product-compatibility)

The express checkouts integration in WooCommerce Payments is compatible with all of these product types:

*   Simple products
*   Variable products
*   Subscription products
*   Variable subscriptions
*   Bookable products1
*   Pre-order products

1 For bookable products, the Apple Pay button cannot be shown on the product page itself.

## [Testing Apple Pay](#testing-apple-pay)

You can Apple Pay by making purchases in [test mode](https://docs.woocommerce.com/document/payments/testing/) using a real Apple ID with a real Apple Wallet card.

First, enable Test Mode by following the guide linked above. As long as you have Test Mode enabled under **Payments > Settings**, you can complete test transactions with a real card in your Apple Pay wallet without incurring any actual charges.

To set up Apple Pay on your device, you will need a supported card from a participating card issuer. See the full [list of requirements](https://support.apple.com/en-us/HT204506) for Apple Pay users for more information.

## [FAQ](#faq)

### [Can I authorize charges with Apple Pay and capture them later?](#faq-authorize-charges)

Yes. If you have checked the “Issue an authorization on checkout, and capture later” option in **Payments > Settings**, you can [manually capture authorized charges](https://woocommerce.com/document/payments/#section-10) done with Apple Pay, just like other credit card transactions.

### [Can I issue refunds with Apple Pay?](#faq-refunds)

Yes. WooCommerce Payments allows you to issue refunds for Apple Pay transactions just like normal transactions. [This section](https://woocommerce.com/document/payments/#section-8) of our Startup Guide shows how to refund a payment.

### [Can I use Apple Pay for subscription products and Pre-Orders?](#faq-subscriptions-and-preorders)

Yes. As long as you allow customers to create an account at checkout, and enable automatic generation of a username and password under **WooCommerce > Settings > Accounts & Privacy**, the Apple Pay button will be visible on the product page for subscription and pre-order products.

### [Is Apple Pay available in my country?](#faq-countries)

Apple Pay is available for all [countries supported by WooCommerce Payments](https://woocommerce.com/document/payments/countries/#section-1).

## [Troubleshooting](#troubleshooting)

Before troubleshooting Apple Pay, ensure you have **Log Error Messages** enabled under **Payments > Settings > Advanced settings**. This lets you see any error messages from WooCommerce Payments under **WooCommerce > Status > Logs**, which could potentially be useful if you need to contact our support staff.

### [Apple Pay button does not appear](#button-does-not-appear)

To ensure there isn’t a problem with your browser and device combination, try using the Apple Pay button on another website. You can try [this demo](https://stripe-payments-demo.appspot.com/), for example.

If Apple Pay does not appear there either, there is likely not an issue with WooCommerce Payments itself, bur rather something about your device or browser is not configured correctly.

If Apple Pay does appear on that demo, but not on your WooCommerce Payments store, this can happen for several reasons. To try to remedy the issue, please make sure:

*   The **Apple Pay / Google Pay** setting is enabled under **Payments > Settings**.
*   Your site is not in [Dev Mode](https://docs.woocommerce.com/document/payments/testing/dev-mode/).
*   Your site is served over HTTPS.
*   You’re testing with an [eligible device](https://support.apple.com/kb/KM207105) and that [Apple Pay is enabled](https://support.apple.com/en-us/HT204506).
*   “Allow customers to place orders without an account” is enabled under **WooCommerce > Settings > Accounts & Privacy**, OR “Allow customers to create an account during checkout” and “When creating an account, send the new user a link to set their password” are enabled.

![](https://woocommerce.com/wp-content/uploads/2022/10/Screenshot-taken-on-2022-10-11-at-14.56.44-UTC@2x.png)

If you’ve ruled out all of those potential issues, that may mean that WooCommerce Payments was unable to verify your domain with Apple. See the section below for some background and potential fixes.

### [Domain registration](#domain-registration)

In order for your store to accept Apple Pay transactions, WooCommerce Payments automatically registers your domain as a verified Apple Pay merchant. Our plugin hosts the `apple-developer-merchantid-domain-association` file under your domain root, for example:

`https://www.example.com/.well-known/apple-developer-merchantid-domain-association`

Please check if this file is available from your own domain. If it’s not available, make sure you have your [permalinks](https://wordpress.org/support/article/using-permalinks/) (under **Settings > Permalinks**) set to anything other than **Plain**. After you do that, trigger domain registration again per the steps below and test if the button appears afterward.

**To trigger domain registration manually:**

1.  Go to **Payments > Settings**.
2.  Uncheck the **Apple Pay / Google Pay** box in the Express Checkouts section.
3.  Scroll to the bottom and click **Save Changes**.
4.  Check the **Apple Pay / Google Pay** box in the Express Checkouts section.
5.  Scroll to the bottom and click **Save Changes** again.

If the button still does not show up, check the error logs under **WooCommerce > Status > Logs** and see if there are domain registration related errors. If you see an error, it may be that the `apple-developer-merchantid-domain-association` file is not publicly available from your domain root.

If WooCommerce Payments cannot automatically write the file to your server, you can add it manually. First, [download the here](https://stripe.com/files/apple-pay/apple-developer-merchantid-domain-association), then use FTP or SSH to upload it to the `.well-known` directory on your server. The final location should be:

`https://www.example.com/.well-known/apple-developer-merchantid-domain-association`

(You may need to create a `.well-known` directory in the root directory of your site if none exists.)

Once uploaded, follow the above steps to trigger domain registration again and see if the button appears afterward.

If you don’t see any errors in the logs, but are still unable to see the Apple Pay button, try temporarily switching your theme to [our free Storefront theme](https://wordpress.org/themes/storefront/), and then opening a simple product page.

[Contact support](https://woocommerce.com/my-account/create-a-ticket/) if you are stuck and cannot get Apple Pay to show with the above steps.

### [Apple Pay button does not appear at a specific location](#button-missing-some-locations)

If the Apple Pay button is missing from only some locations, but not others (say, it appears on the Checkout page but not on the product page), this can happen for a number of different reasons:

*   The product [may not be compatible](#product-compatibility) with express checkouts.
*   Your theme may not support the necessary WooCommerce hooks, which are needed for Apple Pay to show up.

### [Other issues](#other-issues)

If you experience any other issues with Apple Pay, please take the following steps:

*   Please enable logging under ****Payments** > **Settings** > **Advanced settings****.
*   Attempt an Apple Pay transaction and review the logs under **WooCommerce > Status > Logs**.
*   If you see any errors, please [get in touch with support](https://woocommerce.com/my-account/create-a-ticket/) and provide the logs for review.