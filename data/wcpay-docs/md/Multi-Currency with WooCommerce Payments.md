# Multi-Currency with WooCommerce Payments

[**WooCommerce Payments**](https://woocommerce.com/payments/) allow merchants to set up their store to receive payments in one of many currencies, giving the shopper a list of currencies to choose from. The list of currency options can be tailored subject to the store’s registered business location. This document explains the setup, options, the various places where multiple currencies can be used, and frequently asked questions around the multi-currency feature.

## Supported Currencies 

The Multi-Currency feature supports all currencies in the [WooCommerce Payments accepted currencies list](https://woocommerce.com/document/payments/faq/available-currencies/).

## [Settings](#section-2)

The functionality is enabled as part of WooCommerce Payments. You should see the Multi-Currency tab after visiting **Payments > Setting**.

![](https://woocommerce.com/wp-content/uploads/2021/08/Screenshot-2021-07-24-at-12.08.30.png?w=950)

After clicking on the Multi-Currency tab you should see a screen showing only the store’s default currency, with a button to add more currencies.

![This image has an empty alt attribute; its file name is 2LcdccFCjadAjsFe-lWz2xlpLMoRdgPyzJxzHBqmZD7hImOmh0rq_QeyjgDcHpAeG5BrxlEDYDuHilni0v1zLuqUyoQBqa4R3W6BKDWttS468LEJBVWnVIQ_foeKl6pQ22TusPUF](https://lh6.googleusercontent.com/2LcdccFCjadAjsFe-lWz2xlpLMoRdgPyzJxzHBqmZD7hImOmh0rq_QeyjgDcHpAeG5BrxlEDYDuHilni0v1zLuqUyoQBqa4R3W6BKDWttS468LEJBVWnVIQ_foeKl6pQ22TusPUF)

From this screen, you can add all the currencies that you’d like to accept on your store. To add a currency, see the next section.

## [Adding Customer Currencies](#section-3)

After [navigating to the settings](#section-2) you will see a button for adding currencies. Clicking the “Add currencies” button will bring up a modal with a list of available currencies that are supported by WooCommerce Payments.

![](https://woocommerce.com/wp-content/uploads/2021/08/add_enabled.png?w=766)

From this list, you can enable currencies that you want to allow your users to view the store prices converted into and selecting the desired currencies before clicking the “Update selected” button.  After clicking this button, you will see a list of the currencies enabled on your store.

![](https://woocommerce.com/wp-content/uploads/2021/08/currency_list.png?w=950)

By default, the rates are retrieved automatically. Additional details are available in the [Rates section](#section-4). Each currency has its own management screen where you can configure exchange rates and more, for more information about this, please see the [manage a currency section](#section-5).

## [Exchange Rates](#section-4)

Rates are retrieved from the WooCommerce Payments server on a daily basis. You also have the option of setting a manual rate when [managing a currency](#section-5), which will override the automatic rate.

Disclaimer: Exchange rates are not accurate to the minute and may differ from what you’ll find when looking at historical exchange rates. The exchange rates will also vary slightly from the rate used at the time of transaction.

## [Managing a Customer Currency](#section-5)

Clicking on the manage link in a currency row takes you to a new settings screen for that specific customer currency.

![](https://woocommerce.com/wp-content/uploads/2021/08/Screenshot-2021-07-24-at-15.34.29.png?w=950)

![](https://woocommerce.com/wp-content/uploads/2021/08/pasted-image.png?w=950)

### [Exchange Rate](#section-6)

Use the exchange rate setting to choose between a manual and an automated rate. Automatic rate fetching is selected by default. 

Manual rate allows you to specify your own fixed rate of exchange, which will take priority over the automatic rate if it is set.

![](https://woocommerce.com/wp-content/uploads/2021/08/Screenshot-2021-07-24-at-15.38.10.png?w=950)

### [Formatting rules](#section-7)

Formatting rules create consistency in your converted product prices, without having to adjust prices individually on each product. 

#### **Price rounding**

Price rounding always rounds the converted price **up** to the nearest amount selected. For example, if a converted price product price is 5.32, and price rounding is set to 0.50, it will round the converted price up to 5.50. If price rounding is set to 1.00, it will round the converted price up to 6.00, and so on. For decimal currencies, price rounding is set to 1.00 by default. For non-decimal currencies, price rounding is set to 100 by default. 

![](https://woocommerce.com/wp-content/uploads/2021/08/rounding.png?w=950)

#### **Price charm**

‘Price charming’, also known as ‘psychological pricing’, reduces the converted price by a specific amount.  It is a pricing strategy that reduces the price by either 0.01 or 0.05 as prices slightly less than a whole round number (e.g. $1.99 instead of $2) are perceived as more attractive to a consumer. Price charm is set to None by default. 

![](https://woocommerce.com/wp-content/uploads/2021/08/price_chamrming_wcpay.png?w=950)

### [Previewing converted prices](#section-8)

Enter a hypothetical product price using your store’s default currency to view the amount converted to the customer currency using the selections from the formatting section above. 

![](https://woocommerce.com/wp-content/uploads/2021/08/preview_conversion.png?w=950)

## [Currency switching](#section-9)

If you would like your customers to be able to choose their currency from the front-end of your site, and you are not using a theme that supports this by default, you will need to make use of the currency switcher block or widget.

### [Block](#section-10)

To add the block, edit any post, page, or (more commonly) widget area. Insert the block wherever it works best for your theme. It’s likely that this will be in a widget area such as a sidebar, header, or footer.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-01-at-19.17.36-UTC@2x.png)

Inserting the Currency Switcher block

Once the block has been added, your customers can use it to [switch the currency on their account](https://woocommerce.com/document/woocommerce-payments/currencies/multi-currency-setup/#section-18) quickly and easily.

![](https://woocommerce.com/wp-content/uploads/2023/03/Screenshot-taken-on-2023-03-01-at-19.21.57-UTC.gif)

Using the Currency Switcher block on a test site

### [Widget](#section-11)

To add the widget, go to **Appearance > Widgets** and look for the “Currency Switcher” widget and add it to the best location in your theme.

![](https://woocommerce.com/wp-content/uploads/2021/08/widget_area_wcpay_mc.png)

In the widget setting, choose if you want the widget to display currency symbols and flags next to the currency name.

![](https://woocommerce.com/wp-content/uploads/2021/08/Screenshot-2021-07-24-at-16.17.06.png)

## [Geolocation](#section-12)

If you have enabled the “Automatically switch customers to their local currency if it has been enabled” setting, WooCommerce Payments will attempt to determine which country each customer is in, and then show them the appropriate currency. This geolocation happens regardless of any “Default customer location” setting you may have under **WooCommerce > Settings > General**.

Note, however, that this geolocation is not always 100% accurate, and can sometimes be incorrect due to customer use of VPNs and other such factors.

## [Storefront Support](#section-13)

If you’re using the Storefront theme or one of the many child themes based on it, the currency widget can be added to the breadcrumbs section.

![](https://woocommerce.com/wp-content/uploads/2021/08/Screenshot-2021-07-24-at-17.37.21.png?w=950)

To enable this, visit the Payments > Settings and then click on the “Multi-Currency” tab at the top. Next scroll down to “Store settings” and check the box next to the setting “Add a currency switcher to Storefront…”. 

![](https://woocommerce.com/wp-content/uploads/2021/08/Screenshot-2021-07-24-at-17.49.03.png?w=950)

## [Support for other themes](#section-14)

Note: This is a **Developer level** section. If you are unfamiliar with code/templates and resolving potential conflicts, select a [WooExpert or Developer](https://woocommerce.com/search/?collections=service) for assistance. We are unable to provide support for customizations under our [Support Policy](https://woocommerce.com/support-policy/).

If you are not using the Storefront theme, or one of the many child themes based on it, you can add the currency switcher into your theme using the next snippet:

```
<?php 
	if ( function_exists( 'wc_get_currency_switcher_markup' ) ) {
		$instance = [
			'symbol' => true,
			'flag'   => false,
		];
		$args = [];
		echo wc_get_currency_switcher_markup( $instance, $args );

	}
?>
```

Where `$instance` array allows you to enable/disable the symbol and flags in the switcher, and `$args` accepts the same arguments as [the\_widget](https://developer.wordpress.org/reference/functions/the_widget/) to configure the display of the widget.

## [Analytics](#section-15)

All data within analytics will be converted back to the store’s base currency. There should be no changes to the reports or any of the other analytics screens. This means you will not be able to see individual breakdowns of orders made in different currencies. A column has been added to the **Orders** analytics report to show which currency a customer used to complete the order.

![](https://woocommerce.com/wp-content/uploads/2021/08/analytics.png?w=950)

## [Merchant account currency and shopper payments currency](#section-16)

When a customer selects a different currency than the store’s default currency, the updated prices shown will be based on the exchange rate set in the [multi-currency settings](#section-2). At checkout, a payment will be created with the customer-selected currency and the resulting converted price shown to the customer. Once the order has been paid, that payment will be converted into your store’s default currency (unless you have [added a second bank account or card](https://woocommerce.com/document/payments/currencies/multiple-deposit-currencies/) for deposits in the currency the customer paid with).

## [Customer Preferred Currency](#section-17)

Your customers can choose their preferred currency for shopping and payments from their “[My Account](https://woocommerce.com/document/the-my-account-page/)” page by going to **My Account > Account details**

![Set the preferred currency in the My Account page](https://woocommerce.com/wp-content/uploads/2021/12/default-currency.png)

Setting the preferred currency on the My Account page