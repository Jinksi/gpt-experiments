# Requirements and recommendations for bank statement descriptor

Statement descriptors are the small bits of text (usually the merchant name) shown next to charges on your customers’ bank statements. Using clear and accurate statement descriptors can help reduce refunds and [disputes](https://woocommerce.com/document/payments/preventing-disputes-with-woocommerce-payments/).

When you set up WooCommerce Payments, your statement descriptor will default to your site’s URL, but you can [change this under **Payments > Settings**](https://woocommerce.com/document/woocommerce-payments/settings-guide/#section-10).

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-20-at-19.15.14-UTC@2x.png)

An example of how statement descriptors may appear in a bank’s online interface

## [Requirements](#requirements)

To be considered complete, a statement descriptor must:

*   Contain only [Latin characters](https://en.wikipedia.org/wiki/Latin_alphabet).
*   Contain between 5 and 22 characters, inclusive.
*   Contain at least one letter.
*   Not contain any of these: `< > \ ' " *`
*   Reflect your business name clearly.

## [Good examples](#good-examples)

If you sell pet toys in U.S. at `www.pet-toys.com`, some good examples might be:

*   `PET-TOYS.COM`
*   `PET TOYS Co`
*   `PET TOYS U.S.`

## [Bad examples](#bad-examples)

Here are some invalid statement descriptors, using the `www.pet-toys.com` example:

*   `INSTAGRAM.COM/PETTOYSDOTCOM` — This is not where the transaction takes place.
*   `PTTY` — Too short. Use longer alternatives to help identify the charge.
*   `<< PET TOYS CO. >>` — Contains forbidden characters.
*   `+1 (555) 555-1234` — Should contain at least one letter.