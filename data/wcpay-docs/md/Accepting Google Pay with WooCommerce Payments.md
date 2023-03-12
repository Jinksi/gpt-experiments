# Accepting Google Pay with WooCommerce Payments

WooCommerce Payments allows you to enable Google Pay on your site, which makes it easier for customers to checkout quickly. This document describes how to set up, test, and troubleshoot the Google Pay feature.

![](https://woocommerce.com/wp-content/uploads/2022/12/dekstop.png)

Google Pay button in the WooCommerce cart

## [Enabling](#enabling)

To enable Google Pay:

1.  Go to **Payments > Settings** in your site’s dashboard.
2.  In the _Express Checkouts_ section, check the box for **Apple Pay / Google Pay**.
3.  At the bottom of the page, click **Save Changes**.

**NOTE:** There is no way to enable only Google Pay without also enabling Apple Pay. The two payment options must be enabled together.

## [Customizing](#customizing)

When Google Pay is enabled, the button can appear in three places:

*   The Checkout page
*   The Cart page
*   Individual product pages

You can customize which of these locations show the Google Pay button by going to **Payments > Settings** and then clicking the **Customize** link for Apple Pay / Google Pay in the _Express Checkouts_ section.

![](https://woocommerce.com/wp-content/uploads/2022/12/image-26.png)

Once there, you can change where the Google Pay button shows up, the text of the Google Pay button itself, as well as the size and color scheme of the button.

## [Purchasing](#purchasing)

By checking out with Google Pay, customers won’t need to go through the regular checkout process and spend time filling in all of their information. Everything is handled using the Google Pay interface, where customers can select their billing and shipping details, as well as which card they want to use.

Once the order is placed, WooCommerce Payments processes the transaction and redirects the customer to the “Order Received” / “Thank you” page just it would for any other transaction.

## [Product compatibility](#product-compatibility)

The express checkout methods in WooCommerce Payments, including Google Pay, are compatible with all of these product types:

*   Simple products
*   Variable products
*   Subscription products
*   Variable subscriptions
*   Bookable products1
*   Pre-order products

1 For bookable products, the Google Pay button cannot be shown on the product page itself.

## [Testing](#testing)

To place test orders using Google Pay:

1.  [Enable test mode](https://woocommerce.com/document/woocommerce-payments/testing-and-troubleshooting/testing/#enabling-test-mode), if it’s not already.
2.  Add a [test card](https://woocommerce.com/document/woocommerce-payments/testing-and-troubleshooting/testing/#test-cards) to your browser’s payment methods.
    *   In Chrome, this can be done at this URL: `chrome://settings/payments`
3.  Go to a product page, cart, or checkout and use the Google Pay button.
4.  Select the test card in the payment popup.
5.  Click **Pay**.

Your test order will be visible in the dashboard after it completes.

## [FAQ](#faq)

### [Can I authorize charges with Google Pay and capture later?](#auth-capture)

Yes. If you have checked the “Issue an authorization on checkout, and capture later” option in **Payments > Settings**, you can [manually capture authorized charges](https://woocommerce.com/document/woocommerce-payments/settings-guide/authorize-and-capture/) done with Google Pay, just like other credit card transactions.

### [Can I issue refunds for Google Pay orders?](#refunding)

Yes, you can [issue refunds](https://woocommerce.com/document/woocommerce-payments/managing-money/#section-5) for Google Pay transactions just like normal transactions.

### [Why do I see a purple “Pay now” button?](#section-9)

There are two styles of buttons you might see depending on if you A) allow third-party cookies for the site you’re visiting, and B) have the “Share that you have Google Pay with companies outside Google” setting enabled [in Google Pay itself](https://pay.google.com/gp/w/home/settings).

If you have both enabled, the button is styled like this:

![When 3rd-party cookies are allowed on the site and your Google Pay is set to share that you have Google Pay beyond Google, the button is Google-branded. ](https://woocommerce.com/wp-content/uploads/2022/03/google-pay-button-a-b.png?w=650)

Otherwise, the button may be styled like this:

![If 3rd-party cookies are not allowed on the site, or your Google Pay is set to not share that you have Google Pay beyond Google, then then the button appears without branding. ](https://woocommerce.com/wp-content/uploads/2022/03/google-pay-button-no-a-b.png?w=620)

### [Is Google Pay available in my country?](#available-in-my-country)

Google Pay is available for all [countries supported by WooCommerce Payments](https://woocommerce.com/document/payments/countries/#section-1).

## [Troubleshooting](#troubleshooting)

Before troubleshooting Google Pay, firsy ensure that you have **Log Error Messages** enabled under **Payments > Settings > Advanced settings**. This lets you see any error messages from WooCommerce Payments under **WooCommerce > Status > Logs**, which could potentially be useful if you need to contact our support staff.

### [Button doesn’t appear at all](#button-doesnt-appear-at-all)

To ensure there isn’t a problem with your browser and device combination, try using the Google Pay button on another website. You can try [Google’s demo page](https://developers.google.com/pay/api/web/guides/resources/demos), for example.

If Google Pay does not appear there either, there likely isn’t an issue with WooCommerce Payments itself, bur rather something about your device or browser is not configured correctly.

If Google Pay does appear on that demo, but not on your WooCommerce Payments store, this can happen for several reasons. To try to remedy the issue, please make sure:

*   The **Apple Pay / Google Pay** setting is enabled under **Payments > Settings**.
*   Your site is not in [Dev Mode](https://docs.woocommerce.com/document/payments/testing/dev-mode/).
*   Your site is served over HTTPS.
*   Your browser [contains a payment method](https://support.google.com/chrome/answer/142893?visit_id=636857416902558798-696405304).
*   You have the “Share that you have Google Pay with companies outside Google” setting enabled in the [Google Pay settings](https://pay.google.com/gp/w/u/0/home/settings).
*   “Allow customers to place orders without an account” is enabled under **WooCommerce > Settings > Accounts & Privacy**, OR “Allow customers to create an account during checkout” and “When creating an account, send the new user a link to set their password” are enabled.

### [Button doesn’t appear in a specific location](#button-missing-from-specific-location)

If the Google Pay button is missing from only some locations, but not others (e.g. it appears on the checkout page but not on the product page), this can happen for a few reasons:

*   The product [may not be compatible](#product-compatibility) with express checkouts.
*   Your theme may not support the necessary WooCommerce hooks, which are needed for Google Pay to show up.

### [Apple Pay appears instead](#apple-pay-appears-instead)

If you were expecting Google Pay to appear on your mobile device, but see an Apple Pay button instead, this may be due to [a recent change on Apple’s part](https://www.theverge.com/2022/7/30/23284992/apple-pay-compatible-edge-chrome-firefox-ios-16-beta-browsers-safari).

In short, if you are running iOS 16 or later, Apple Pay can now be used in browsers other than Safari. As such, you might see Apple Pay appear in some places where Google Pay would’ve previously be shown. (For example, in the Chrome browser app on iOS.)

Unfortunately, there’s no way to revert to the old behavior.

### [Other issues](#other-issues)

If you experience any other issues with Google Pay, please take the following steps:

1.  Enable test mode and logging under **Payments > Settings > Advanced settings**.
2.  Place a test Google Pay transaction.
3.  Under **WooCommerce > Status > Logs**, review the WooCommerce Payments logs.
4.  If you see any errors, please [get in touch with support](https://woocommerce.com/my-account/create-a-ticket/) and provide the logs for review.