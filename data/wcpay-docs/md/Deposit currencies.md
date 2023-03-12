# Deposit currencies

WooCommerce Payments can accept payments in [over 100 different currencies](https://woocommerce.com/document/payments/faq/available-currencies/). However, when the [customer currency](https://woocommerce.com/document/woocommerce-payments/currencies/currencies-overview/#customer-currency) is different from your account’s [deposit currency](https://woocommerce.com/document/woocommerce-payments/currencies/currencies-overview/#deposit-currency), you will be charged a [currency conversion fee](https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/). To avoid these fees, you may be able to have funds in different currencies deposited into separate bank accounts.

When using multiple bank accounts, one must be selected as the default. If you receive a payment in a currency that does not match the currency of one of your bank accounts, it will be converted into your default deposit currency and deposit into that default account.

**EXAMPLE:** A store in Germany sells their goods throughout Europe, and has a default bank account in Euro. After adding a second bank account denominated in Swiss francs, payments that use that currency will be deposited into their alternative CHF bank account, while all other payments will be converted to EUR and deposited into the default account.

WooCommerce Payments supports the following countries and deposit currencies. Note that only one bank account can be added per currency.

Country

Currency

Can be deposited to banks in…

**Australia**

AUD

Australia

**Austria, Belgium, France, Germany, Ireland, Italy, Netherlands, Poland, Portugal, Spain, Switzerland, United Kingdom**

EUR

Austria, Belgium, Bulgaria, Switzerland, Cyprus, Czech Republic, Germany, Denmark, Estonia, Spain, Finland, France, United Kingdom, Gibraltar, Greece, Croatia, Hungary, Ireland, Italy, Liechtenstein, Lithuania, Luxembourg, Latvia, Malta, Netherlands, Norway, Poland, Portugal, Romania, Sweden, Slovenia, Slovakia

USD

United States

SEK

Sweden

NOK

Norway

DKK

Denmark

CHF

Switzerland, Liechtenstein

GBP

United Kingdom, Gibraltar

**Canada**

CAD

Canada  

USD

United States, Canada

**Hong Kong**

HKD

Hong Kong

**New Zealand**

NZD

New Zealand

**Singapore**

SGD

Singapore

**United States**

USD

United States

## [Adding multiple bank accounts](#adding-multiple-bank-accounts)

Assuming the chart above shows that your WooCommerce Payments account can deposit into bank accounts in multiple currencies, you can do so by following these steps:

1.  Go to **Payments > Overview** in your WordPress dashboard.
2.  Click **Account Details** box, click the “Edit details” link.
3.  You will be taken to `connect.stripe.com` to log in.
4.  Enter the 6-digit code sent to your phone number.
5.  In the Stripe Express dashboard, click the person icon in the upper-right.
6.  In the **Payout Details** section, click the name of your store.
    *   You may see multiple stores listed here if you have more than one site using WooCommerce Payments.
7.  The bank account you added during the signup process will be shown.
8.  Click the **Add an account button** to add another bank account for a different currency.
9.  Fill out the bank account information and click the **Save** button at the bottom.
10.  Both bank accounts will be shown, along with the currency each one accepts.
11.  Click **Done**.
    *   You should see a “Payout details updated” alert box.
12.  Click the **Sign Out** button to sign out of the Stripe Express dashboard.

*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-26-at-09.22.13-UTC@2x.png)
    
    Under Payments > Overview, click the Edit Details link
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-26-at-09.23.27-UTC@2x.png)
    
    Enter the 6-digit verification code sent to your phone
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-26-at-09.24.19-UTC@2x.png)
    
    Click the person icon in the upper-right
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-26-at-09.41.32-UTC@2x.png)
    
    Click your site name in the Payout Details section
    
*   ![](https://woocommerce.com/wp-content/uploads/2021/06/Screenshot-taken-on-2022-08-30-at-19.13.17-UTC@2x.png)
    
*   ![](https://woocommerce.com/wp-content/uploads/2021/06/Screenshot-taken-on-2022-08-30-at-19.08.03-UTC@2x.png)
    
*   ![](https://woocommerce.com/wp-content/uploads/2021/06/Screenshot-taken-on-2022-08-30-at-19.08.55-UTC@2x.png)
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-26-at-09.29.26-UTC@2x.png)
    
    Verify the account was updated and sign out
    

## [Default bank account](#default-bank-account)

As noted above, all payments made in a currency without a corresponding bank account will be converted to the currency of your default bank account and deposited there.

To set your default bank account, begin by following the same instructions as above to add at least one additional bank account. After you’ve added multiple accounts, you can change the default by clicking the **Change Default Currency button** and picking which currency you would like to use as the default.

*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-30-at-19.18.54-UTC@2x.png?w=650)
    
    Click the Change Default Currency button
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-30-at-19.19.25-UTC@2x.png?w=650)
    
    Choose your default currency, click Submit
    
*   ![](https://woocommerce.com/wp-content/uploads/2022/08/Screenshot-taken-on-2022-08-30-at-19.19.40-UTC@2x.png?w=650)
    
    The default currency and bank account will change
    

## [Viewing deposits with multiple currencies](#viewing-deposits)

If you’ve added multiple bank accounts, WooCommerce Payments will create separate deposit balances for each currency, shown on the **Payments > Overview** page.

![](https://woocommerce.com/wp-content/uploads/2023/02/Screenshot-taken-on-2023-02-01-at-21.27.44-UTC@2x.png)

The Payments > Overview page showing balances in multiple currencies

Additionally, the **Payments > Deposits** page and the **Payments > Transactions** page will show a filter allowing you to see deposits or transactions for a single currency, or everything together.

![](https://woocommerce.com/wp-content/uploads/2023/02/Screenshot-taken-on-2023-02-01-at-21.30.08-UTC@2x.png)