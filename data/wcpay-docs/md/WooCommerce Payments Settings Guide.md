# WooCommerce Payments: Settings Guide

WooCommerce Payments is designed to be fairly simple and intuitive to use. However, there are still some settings that each merchant will want to configure to their liking. This page is intended to explain in detail what each option does and how it might be used.

The WooCommerce Payments settings can be found under **Payments > Settings**.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-14.49.52-UTC@2x.png)

The full **Payments > Settings** page.

**NOTE:** After adjusting any WooCommerce Payments settings, you will need to scroll to the bottom of the page and click the **Save Changes** button. Any changes to the settings will not take effect until they are saved!

## [General](#general)

This section contains some basic options that likely won’t need to be changed very often.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-14.51.40-UTC@2x.png)

### [Enable WooCommerce Payments](#enable-woocommerce-payments)

Unchecking this option will make it so that WooCommerce Payments is no longer offered as a payment method during checkout. This means that, if the box is unchecked, customers will not be able to pay via WooCommerce Payments.

What this setting does **not** do is disable the WooCommerce Payments plugin entirely. In other words, even with this box unchecked, you will still be able to access the **Deposits**, **Transactions** and **Disputes** pages, as well as issue refunds and perform other such actions.

If you want to completely disable the WooCommerce Payments plugin, please see [this page](https://woocommerce.com/document/woocommerce-payments/account-management/delete-my-woocommerce-payments-account/).

### [Test mode](#test-mode)

Check this box to enable test mode. Test mode lets you try out payments, refunds, disputes and other such processes as you’re working on your store. Unchecking this box disables test mode and switches your site into live mode, meaning that it will accept real payment methods and actually charge your customers.

Please see our [Testing WooCommerce Payments](https://woocommerce.com/document/woocommerce-payments/testing-and-troubleshooting/testing/) page for details on how to use test mode.

## [Payments accepted on checkout](#payments-methods)

This section allows you to add and edit the payment methods that customers can use to complete purchases on your site.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-15.19.09-UTC@2x.png)

By default, WooCommerce Payments only accepts credit and debit cards. However, by enabling the new checkout experience, you can also offer local payment methods to certain customers if you wish. Offering these local payment methods can increase the chance that visitors to your site will purchase from your store.

For example, if most of your customers are in Germany, you can offer Sofort and giropay as payment options. For customers outside Germany, those methods will not be shown.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-08-at-18.39.20-UTC@2x.png)

Sofort and giropay being offered on the checkout page.

Please see [this page](https://woocommerce.com/document/woocommerce-payments/payment-methods/additional-payment-methods/) for more details on all the local payment methods that WooCommerce Payments offers via the new checkout experience.

**NOTE:** While it’s possible to uncheck the **Credit card / debit card** option and save the settings, the card details form will still be shown due to [a bug](https://github.com/Automattic/woocommerce-payments/issues/3969). As a result, customers will still be able to purchase with cards, even if you have that option disabled.

## [Express checkouts](#express-checkouts)

This section controls which express checkout methods are used on your site and how they look.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-15.34.49-UTC@2x.png)

Express checkout methods are so named because they allow customers to check out faster than if the customer had not used one of these methods. WooCommerce Payments has the following express checkout methods built in:

*   [Apple Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/apple-pay/)
*   [Google Pay](https://woocommerce.com/document/woocommerce-payments/payment-methods/google-pay/)
*   [Link by Stripe](https://woocommerce.com/document/woocommerce-payments/payment-methods/link-by-stripe/)
*   [WooPay](https://woocommerce.com/document/woopay-merchant-documentation/) (in private beta)

Please see the links above for more info on the express checkout methods and their settings.

**NOTE:** WooPay and Link by Stripe are currently incompatible. You cannot have both express checkout methods enabled at the same time.

## [Transactions](#transactions)

This section contains a settings related to how transactions function on your site, and how they appear to customers in emails, receipts, and bank statements.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-16.06.03-UTC@2x.png)

### [Transaction preferences](#transaction-preferences)

**Enable payments via saved cards**, if checked, allows customers to save their card info to their account on your site, which allows them to check out much faster if they make more purchases from you in the future.

**NOTE:** As detailed in our [PCI compliance doc](https://woocommerce.com/document/woocommerce-payments/our-policies/pci-compliance/#what-about-saved-cards-and-subscriptions), the actual credit card number and other details are stored on our secure server. They are presented to customers on your site via a secure tokenization method.

The **Issue an authorization on checkout, and capture later** setting, if checked, prevents WooCommerce Payments from automatically capturing charges. This allows you to manually capture the charge at a later time, such as when you ship the item.

If you enable this, it’s important to know that **you will need to capture each order within 7 days of it being placed**. Otherwise, the authorization and the order itself will be cancelled.

**NOTE:** We have [a detailed guide to this workflow](https://woocommerce.com/document/woocommerce-payments/settings-guide/authorize-and-capture/) which you should review before enabling this setting. Our suggestion is that you **leave this option disabled** unless you have a very specific and well-justified use case in mind.

### [Customer support](#customer-support)

The **Customer bank statement** setting controls how charges from your store appear on bank statements or in online banking systems. By default, it will use the site URL.

You can change the statement descriptor if need be, but it must adhere to these rules:

*   Contain only [Latin characters](https://en.wikipedia.org/wiki/Latin_alphabet).
*   Contain between 5 and 22 characters, inclusive.
*   Contain at least one letter.
*   Not contain any of these characters: `< > \ ' " *`
*   Reflect your business name clearly.

Please see [this page](https://woocommerce.com/document/woocommerce-payments/customization-and-translation/bank-statement-descriptor/) for more details on recommended statement descriptors.

The **Support email** and **Support phone number** settings determine what contact information is shown on receipts, invoices, and automated emails from your store. We strongly suggest filling these out, since they can help prevent disputes from customers who might otherwise be unable or unaware of how to contact you for assistance with a purchase.

**NOTE:** The customer support email and phone number settings covered here are not the same as updating the email or phone number that you have on file in your Stripe Express account. To do that, please see [this page](https://woocommerce.com/document/woocommerce-payments/account-management/update-my-contact-details/).

## [Deposits](#deposits)

The _Deposits_ section controls how often WooCommerce Payments deposits money from incoming orders into your linked bank account or debit card.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-21.09.03-UTC@2x.png)

### [Deposit schedule](#deposit-schedule)

This setting allows you to specify a deposit schedule that works best for your business. You can find more information on the options in our dedicated [deposit schedule document](https://woocommerce.com/document/woocommerce-payments/deposits/change-deposit-schedule/).

If it’s been less than 7 days since your first transaction with WooCommerce Payments, you will not be able to change your deposit schedule until the initial 7 day waiting period has passed.

![](https://woocommerce.com/wp-content/uploads/2023/03/image-7.png)

### [Deposit bank account](#deposit-bank-account)

Your bank account or debit card details are securely stored and managed with our payments partner, Stripe. You can use the link in this section to [access the Stripe dashboard](https://woocommerce.com/document/woocommerce-payments/account-management/access-stripe-account/), through which you can view and update your bank account or debit card information, if need be.

## [Advanced settings](#advanced-settings)

The _Advanced settings_ section gives you further flexibility in managing your WooCommerce Payments configuration. While you may not interact with these settings regularly, you can find them behind the clickable dropdown at the bottom of the settings page.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-07-at-21.23.06-UTC@2x.png)

### [Enable multi-currency](#enable-multicurrency)

Enabling this lets you to accept payments from customers in currencies besides your [shop currency](https://woocommerce.com/document/shop-currency/). Please see our docs on [accepting multiple currencies](https://woocommerce.com/document/woocommerce-payments/currencies/#accepting-multiple-currencies) for more information.

### [Enable public key encryption](#public-key-encryption)

Enabling this option can help prevent [card testing attacks](https://woocommerce.com/document/woocommerce-payments/fraud-and-disputes/card-testing/) against your site. However, it’s not necessarily a good idea to have this enabled at all times. If you experience a card testing attack and contact us about it, our support will let you know if you should enable this.

### [Enable subscriptions](#enable-subscriptions)

This setting controls whether or not WooCommerce Payments’ [built-in subscriptions](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/) features are active. If you don’t plan on selling any subscriptions products, you can disable this setting to prevent those kinds of products from being created by mistake.

If you disable this setting after creating some subscription products, those will be converted to simple products at the pre-existing price.

**NOTE:** Disabling this option after customers have purchased subscriptions will NOT stop their recurring charges! If you want to [cancel all existing subscriptions](https://woocommerce.com/document/subscriptions/store-manager-guide/#cancel-or-suspend-subscription), you should do that first, prior to disabling this option.

This setting will not be displayed if your site has the full [Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/) installed or if you are not [eligible](https://woocommerce.com/document/woocommerce-payments/built-in-subscriptions/subscriptions-basics/#eligibility) to use WooCommerce Payments subscriptions.

### [Debug mode / Log error messages](#debug-mode)

With this option enabled, WooCommerce Payments will write debugging information to a log file. During normal operations, this is not necessary, but our support staff may direct you to enable debug mode if you contact us about an issue with WooCommerce Payments.

To view the log files and send them to us:

1.  Go to **WooCommerce > Status > Logs** in your site’s dashboard.
2.  Use the dropdown to find a log beginning with `woocommerce-payments-` and a date.
    *   For example, to find the log file created on March 8, 2023, use the dropdown to search for a log file named `woocommerce-payments-2023-03-08`.
3.  Once you’ve selected a log, click the **View** button to load it.
4.  Select the entire log contents and copy it to the clipboard.
5.  Open a new text file on your computer and paste the log contents in.
6.  Attach that file to your email response to our support staff.

After the relevant issue has been resolved, feel free to disable debug mode again.

## [Card Readers](#card-readers)

If you use WooCommerce Payments to accept [In-Person Payments](https://woocommerce.com/document/woocommerce-payments/in-person-payments/), a new menu item will appear under **Payments** in your dashboard: **Payments > Card Readers**. This page contains some settings related to any card readers you have purchased.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-08-at-16.01.33-UTC@2x.png)

### [Receipt details](#receipt-details)

After each successful transaction, your customer will automatically be emailed a receipt. You will also have the option to issue a printed receipt through the WooCommerce mobile app. Certain details of these receipts can be customized under the **Receipt details** tab.

You can also use the **Preview a printed receipt** link to see a preview of how the printed receipt will look. (There is currently no way to preview the email receipt, although you can modify the template under **WooCommerce > Settings > Emails > New receipt**.)

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-08-at-16.09.00-UTC@2x.png)

An example configuration of the **Receipt details** settings.