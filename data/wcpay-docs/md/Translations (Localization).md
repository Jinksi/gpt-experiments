# Translations (Localization)

When you install or update WooCommerce Payments, WordPress will automatically look for a translation file in your language and download it. Having said that, we have not yet translated WooCommerce Payments into every language. Here are the languages we support:

*   Chinese (Cantonese)
*   Chinese (Mandarin)
*   Dutch (Belgium)
*   Dutch (Netherlands)
*   English (Australia)
*   English (Great Britain)
*   English (United States)
*   French
*   French (Belgium)
*   French (Canada)
*   French (Switzerland)
*   German
*   German (Austrian)
*   German (Switzerland)
*   Italian
*   Italian (Switzerland)
*   Polish
*   Portuguese (Portugal)
*   Spanish

The sections below explain how to translate WooCommerce Payments strings into your own language if that does not occur automatically.

## [Why some strings are not being translated?](#some-strings-not-translated)

You may see that some strings are not translated. Up-to-date translations are automatically downloaded for supported languages, but you can manually trigger an update by going to **Dashboard > Updates** and clicking on the button to update translations.

If the problem persists, you can try manually removing the current plugin translation files and reinstalling them like so:

1.  Use an [FTP client](https://wordpress.org/support/article/ftp-clients/) to connect to your site.
2.  Browse to this directory: `wp-content/plugins/woocommerce-payments/languages/`.
3.  Delete all files that have names starting with `woocommerce-payments_*`.
4.  Back in your site’s dashboard, go to **Dashboard > Updates**.
5.  Click on the button to update translations.

## [Can I translate WooCommerce Payments into my language?](#can-i-translate)

The language files for WooCommerce Payments can be found within this directory:

`wp-content/plugins/woocommerce-payments/languages/`

The default English language file is named `woocommerce-payments.pot`.

With a plugin like [Loco Translate](https://wordpress.org/plugins/loco-translate/) or an app like [PoEdit](https://poedit.net/), you can use the `.pot` file to create your own language translation files. For example, if you want a translation of the WooCommerce Payments extension in Dutch from the Netherlands, you would translate the strings and create the following translation files:

*   `woocommerce-payments-nl_NL.mo`
*   `woocommerce-payments-nl_NL.po`

Those two language files would then need to be moved into this directory:

`wp-content/languages/plugins/`