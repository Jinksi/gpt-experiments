# What currencies can I accept with WooCommerce Payments?

WooCommerce Payments supports selling in [multiple currencies](https://woocommerce.com/document/payments/currencies/).

The currencies available for a customer depend on the payment methods available to them. For example, VISA and Mastercard payments can be processed in over 100 different currencies, but Diners Club, Discover, JCB, and UnionPay cards can only be charged in U.S. dollars (USD).

The full list of available currencies is shown below. Currencies marked with an asterisk (`*`) are not supported by American Express.

*   AED
*   AFN\*
*   ALL
*   AMD
*   ANG
*   AOA\*
*   ARS\*
*   AUD
*   AWG
*   AZN
*   BAM
*   BBD
*   BDT
*   BGN
*   BIF
*   BMD
*   BND
*   BOB\*
*   BRL\*
*   BSD
*   BWP
*   BYN
*   BZD
*   CAD
*   CDF
*   CHF
*   CLP\*
*   CNY
*   COP\*
*   CRC\*
*   CVE\*
*   CZK
*   DJF\*
*   DKK
*   DOP
*   DZD
*   EGP
*   ETB
*   EUR
*   FJD
*   FKP\*
*   GBP
*   GEL
*   GIP
*   GMD
*   GNF\*

*   GTQ\*
*   GYD
*   HKD
*   HNL\*
*   HTG
*   HUF
*   IDR
*   ILS
*   INR
*   ISK
*   JMD
*   JPY
*   KES
*   KGS
*   KHR
*   KMF
*   KRW
*   KYD
*   KZT
*   LAK\*
*   LBP
*   LKR
*   LRD
*   LSL
*   MAD
*   MDL
*   MGA
*   MKD
*   MMK
*   MNT
*   MOP
*   MUR\*
*   MVR
*   MWK
*   MXN
*   MYR
*   MZN
*   NAD
*   NGN
*   NIO\*
*   NOK
*   NPR
*   NZD
*   PAB\*

*   PEN\*
*   PGK
*   PHP
*   PKR
*   PLN
*   PYG\*
*   QAR
*   RON
*   RSD
*   RUB
*   RWF
*   SAR
*   SBD
*   SCR
*   SEK
*   SGD
*   SHP\*
*   SLE
*   SLL
*   SOS
*   SRD\*
*   STD\*
*   SZL
*   THB
*   TJS
*   TOP
*   TRY
*   TTD
*   TWD
*   TZS
*   UAH
*   UGX
*   USD
*   UYU\*
*   UZS
*   VND
*   VUV
*   WST
*   XAF
*   XCD
*   XOF\*
*   XPF\*
*   YER
*   ZAR
*   ZMW

## [Minimum charge amounts](#minimum-charge-amounts)

We enforce a minimum amount when creating a charge to ensure that you don’t lose money due to [our fees](https://woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/). The minimum amount you can charge depends on the [deposit currency](https://woocommerce.com/document/payments/currencies/multiple-deposit-currencies/) that the payment would be paid out to.

Currency

Minimum Charge

AUD

$0.50

CAD

$0.50

CHF

0.50 Fr

DKK

2.50-kr.

EUR

€0.50

GBP

£0.30

HKD

$4.00

NOK

3.00-kr.

NZD

$0.50

SEK

3.00-kr.

SGD

$0.50

USD

$0.50

If you have a product that costs less than these amounts, and a customer attempts to purchase it with WooCommerce Payments, they will see an error message.

![](https://woocommerce.com/wp-content/uploads/2022/12/Screenshot-taken-on-2022-12-15-at-15.57.50-UTC@2x.png)

## [Maximum charge amounts](#maximum-charge-amounts)

The maximum amount you can charge in a single transaction is `999999.99` in any currency besides IDR. So for example, the USD maximum is `$999,999.99`, the EUR maximum is `€999,999.99`, and so on for _almost_ every supported currency.

The one exception to this rule is the Indonesian rupiah (IDR). In that case, the maximum charge amount is `Rp9,999,999,999.99`.