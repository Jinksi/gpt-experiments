# Troubleshooting

## [General](#section-1)

### [Where can I report a bug or suggest improvements?](#section-2)

Log into your WooCommerce.com account and place your ticket there.

Additionally please copy and paste the debug information from the support page of the plugin into your support ticket.

![](https://woocommerce.com/wp-content/uploads/2022/03/copy-debug-info-6943a66184bf3e0c0b0201bffade9fdf.png?w=650)

### [The most common issues in case the pixels don’t work](#section-3)

*   Caching: If you run some caching layer, the server might still serve cached versions of the pages. You will need to delete the cache.
*   Minification, combination and concatenation: Some minification and combination plugins mangle up the injected JavaScript code to an extend, that the tracking pixels stop working. You will need to turn minification, combination and concatenation off and try again.

### [Is wpm\_get\_cart\_items slowing down my website?](#section-4)

Short answer: **No**

Long answer:

First some information on what `wpm_get_cart_items` is doing.

> While a visitor is browsing a shop he might add some products to the cart. Each time he uses the minicart to modify his selection, by adding or removing products, we need to make sure to have all product information handy in order to send pixel events with all relevant data to Google, Meta (Facebook), etc. Unfortunately it is not possible to include this information on page load within the HTML code, because caching mechanisms could serve outdated data to the browser. That’s why we need a mechanism like `wpm_get_cart_items` that will fetch all the current product data for the minicart from the server.

And now to the question _if_ `wpm_get_cart_items` is slowing down the website.

Some users have noticed in the network tab of their browsers that the `wpm_get_cart_items` call adds one more request, which on slow servers can take even more than a second to fullfil. It is using the standard WordPress Ajax function to fetch the product data.

But is this **not** slowing down the website?

The `wpm_get_cart_items` call happens **after** the browser has signalled the `load` event, _which happens after all content has already been successfully loaded_.

**INFO**

The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

Reference: [Mozilla MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

**INFO**

PageSpeed measures the loading time of your page starting from the initial request to when the last embedded resource (JS, CSS, images, etc.) has finished loading. So that’s essentially when $(window).load() is triggered.

Reference: [Lèse Majesté’s answer on Stackoverflow](https://webmasters.stackexchange.com/a/39512/51846)

So the `wpm_get_cart_items` doesn’t slow down the download or rendering of a WooCommerce shop in any way.

### [My theme shows a script code on the front-end that shouldn’t be there​](#my-theme-shows-a-script-code-on-the-front-end-that-shouldnt-be-there)

The plugin uses a script output to track products in a way that works with every caching system.

It outputs that code wrapped in a `<script></script>` tag that is fully compliant HTML code.

Because the code is wrapped in `<script></script>` tags the theme should ignore the code and not output it visibly to the front-end.

There is nothing we can do from our side. You have to ask the theme developer to update the theme to ignore all code that’s wrapped in `<script></script>` tags.

### [Elementor Related Products and Upsell Products Widgets​](#elementor-related-products-and-upsell-products-widgets)

In its current version, the Elementor Related Product and Upsell Product Widgets don’t properly process the `<script>` output created by the WooCommerce Pixel Manager. It should be hidden and not visible. This is an issue that only can be fixed by the creators of the Elementor Related Products and Upsell Product Widgets as described in the following troubleshooting [article](https://sweetcode.com/docs/wpm/troubleshooting#my-theme-shows-a-script-code-on-the-front-end-that-shouldnt-be-there).

Luckily, there is a workaround for users of the Elementor Related Products Widget. Instead of using the built-in Elementor Related Products Widget, you can use the following shortcode,

```
[related_products limit="X"]
```

Similarly, for replacing the Elementor Upsell Products Widget, you can use this code published by bekarice: [https://gist.github.com/bekarice/a3305c18d32b4de9d8b7](https://gist.github.com/bekarice/a3305c18d32b4de9d8b7)

We already have placed a bug report on Elementor’s GitHub issue tracker: [https://github.com/elementor/elementor/issues/16934](https://github.com/elementor/elementor/issues/16934)

The bug report shows another way for the users to fix the problem, enabling them to keep using the Elementor widgets. But it can’t persist over Elemetor updates, so you need to keep updating this with every Elementor update. Use it at your own risk.

We’d recommend that you give the issue a thumbs up or add your own comment so that the Elementor developers see how frequently that problem happens and increase the priority of that issue.

We’re in direct contact with Elementor, but at the moment we can’t say for sure if and when they are going to fix this on their end.

### [The Purchase Confirmation Page Doesn’t Load and Shows a Blank Page​](#the-purchase-confirmation-page-doesnt-load-and-shows-a-blank-page)

If a blank page shows up when trying to load the purchase confirmation page the reason is typically too low allocated memory. The Pixel Manager runs a few queries on the purchase confirmation page which use more memory than on other pages. If in the shop configuration the memory limit is too low, this problem can occur. The solution is simple. Increase the memory limit in your configuration.

Make sure that the memory limit is well above your maximum memory allocation.

Add one of the following lines to the configuration file `wp-config.php`

/wp-config.php

```
define('WP_MEMORY_LIMIT', '256M');
```

/wp-config.php

```
define('WP_MEMORY_LIMIT', '512M');
```

/wp-config.php

```
define('WP_MEMORY_LIMIT', '1024M');
```

Here’s a [support article on WooCommerce](https://woocommerce.com/document/increasing-the-wordpress-memory-limit/) that also shows other ways how to increase the memory limit.

### [The purchase confirmation page loads very slowly when the Pixel Manager is enabled​](#the-purchase-confirmation-page-loads-very-slowly-when-the-pixel-manager-is-enabled)

The Pixel Manager runs a few queries on the purchase confirmation page to evaluate if the customer is a new customer or an existing customer. It also determines different types of customer lifetime values for that customer. Those queries, on some shops, can take a long time to execute.

The simplest way to fix this is to add high-performance indexes to the tables. One of our tests improved the query speed by a factor of 133!

Use the [Index WP MySQL For Speed](https://wordpress.org/plugins/index-wp-mysql-for-speed/) plugin to add those high-performance indexes to your shop too. It will not just help on the purchase confirmation page but on every page of your shop.

Read more about this optimization in our [blog article about adding high-performance indexes](https://sweetcode.com/blog/improving-database-performance-made-easy).

### [Why I can’t verify my site on HotJar?](#section-9)

The plugin configuration for HotJar is really simple. You just have to paste the Site ID from HotJar’s tracking code to Pixel Manager and you’re good to go.  
  
However, sometimes, there will be instances where your site can’t be verified. Usually, it’s because of these things:

1.  **Cookie Banner** – make sure that you have disabled the cookie banner when verifying your site on HotJar. This sometimes blocks the cookies coming from HotJar as well causing it not to verify successfully
2.  **Explicit Consent Mode** – having this option enabled in the plugin will also not allow cookie tracking on your site. Just like the Cookie Banner, this will also cause your site’s verification to be unsuccessful
3.  **You’re logged in while verifying** – You also have to do the verification while you’re logged out on your WordPress Dashboard so your site will be tracked.
4.  **Server-side caching** – Make sure to clear all server-side caches after each configuration so the HotJar verifier will not load a cached version.

### [Duplicate jQuery library causes random issues​](#duplicate-jquery-library-causes-random-issues)

**Problem**

The theme, a plugin, or a custom code that loads an additional jQuery library overwrites the events the Pixel Manager hooks into.

WordPress for a long time was shipped with an old version of jQuery. Therefore, some theme developers or shop managers loaded an additional, newer jQuery library in the HTML source. But, if done incorrectly, this would overwrite all events a plugin like the Pixel Manager has hooked into, rendering all event listeners useless.

Luckily WordPress, since version 5.5, is shipped with the most modern jQuery library. This means the additional jQuery library can be safely removed.

**Verification**

1.  Open the development console
2.  Search the entire source code using OPT+CMD+F (on a Mac) for the following string: “jQuery requires a window with a document”
3.  If you get two results then the jQuery library is duplicated and is causing issues.

**Solution**

Remove the additional jQuery library. Keep the jQuery library that WordPress is injecting.

### [Render issues that show Pixel Manager JavaScript code on the frond-end​](#render-issues-that-show-pixel-manager-javascript-code-on-the-frond-end)

In rare cases you might run into rendering issues on the front end which visibly show JavaScript code that is injected by the Pixel Manager into the page source.

This typically starts with the following line:

`window.wpmDataLayer.products = window.wpmDataLayer.products || {};`

There are two known cases where this problem appears.

1.  Users of the Elementor Pro widget for related and upsell products. For them, we have an own support article with a workaround: [Elementor Render Issue](https://sweetcode.com/docs/wpm/troubleshooting#elementor-related-products-and-upsell-products-widgets)
2.  The theme is using a front end JavaScript library which makes a mistake when rendering the code that the Pixel Manager injects into the product templates. The Pixel Manager injects the following three HTML elements into the page source: `<meta>`, `<input type="hidden">` and `<script></script>`. All those HTML elements **are invisible elements by definition** and should not be visibly rendered. However, some JavaScript helper libraries don’t account for those invisible elements and render some or all of them visibly nonetheless.This needs to be fixed by the developers of those render libraries. The Pixel Manager cannot work around this issue.

### [Updates not visible​](#updates-not-visible)

Sometimes it can happen that updates don’t show up anymore, despite the subscription still being active.

#### Sync the license manually[​](https://sweetcode.com/docs/wpm/troubleshooting#sync-the-license-manually)

Go to the **Account** tab of the plugin and click the **Sync** button. This will sync the license and might fix the issue already. If it doesn’t continue with the next approach.

![Freemius sync](https://d33wubrfki0l68.cloudfront.net/4a41f57cbab101104f3e82f2d7ce1e7291e48be9/346f7/assets/images/freemius-sync-f43143400d29b052c64014beb49a5b93.png)

#### Full Reset[​](https://sweetcode.com/docs/wpm/troubleshooting#full-reset)

Sometimes manually syncing the license or deactivating and reactivating the plugin will not help. In that case a full reset should help.

1.  Download the Freemius Fixer plugin from here: [https://github.com/Freemius/freemius-fixer](https://github.com/Freemius/freemius-fixer)

![Freemius Fixer download](https://d33wubrfki0l68.cloudfront.net/de7eb1bdda2c3b2f7fef7d76535eecbcde628b80/bc8c6/assets/images/freemius-fixer-1-1c7e329f347d0bd9c416c7b2327e0381.png)

2.  Install the plugin on your website.
3.  Run the Freemius Fixer.

![Freemius Fixer download](https://d33wubrfki0l68.cloudfront.net/5e2c8229d5964cd5018445a7a46e07b079426826/c4429/assets/images/freemius-fixer-2-a18416a24e9af3855ae23ba0374b1182.png)

4.  Now you will have to add your license back to the Pixel Manager by going to the **Account** page of the Pixel Manager. If you don’t have it on file you can always log into your account and get it from there: [https://sweetcode.com/freemius-account/](https://sweetcode.com/freemius-account/)

## [The REST endpoints for the Pixel Manager are not working​](#the-rest-endpoints-for-the-pixel-manager-are-not-working)

In some edge cases it can happen that the `wp-json` REST endpoints for the Pixel Manager stop working and return a `404`.

Typically, this happens when switching from pretty links to non-pretty links in the WordPress permalink settings and if the website uses caching.

Clearing all server-side cache (caching plugin, server cache, CDN cache, etc.) should fix that issue.

## [Action Scheduler​](#action-scheduler)

The Pixel Manager ships with the [Action Scheduler](https://actionscheduler.org/) library. It helps to compile reports at night, because they can take a long time to process.

In rare cases the Action Scheduler tables are bloated, locked and can cause the entire website to go down. It seems to be an ongoing issue that’s not limited to users of the Pixel Manager: [https://clicknathan.com/web-design/woocommerce-actionscheduler-table-error/](https://clicknathan.com/web-design/woocommerce-actionscheduler-table-error/)

There are various ways to deal with this. All of them have essentially the goal to clean up and fix the Action Scheduler tables.

### [Remove unnecessary records such as failed, cancelled and completed jobs](#remove-unnecessary-records-such-as-failed-cancelled-and-completed-jobs)

**DANGER**

Only do this if you know how to restore a database backup.

1.  Take a backup of your database
2.  Open your database and run the following SQL statements.

If your tables use a custom prefix other than `wp_`, adjust the prefix in the statement.

```
DELETE FROM wp_actionscheduler_actions WHERE status = 'canceled';
DELETE FROM wp_actionscheduler_actions WHERE status = 'failed';
DELETE FROM wp_actionscheduler_actions WHERE status = 'complete';
```

### [Locked database](#section-16)

**DANGER**

Only do this if you know how to restore a database backup.

It can happen that the Action Scheduler is messed up so much, that the database is constantly locked by Action Scheduler reads/writes. As a result you can’t access the database and fix the issue. Here’s how deal with this problem.

1.  Take a backup of your database.
2.  Open the `wp-config.php` file, take a note of the database password, delete the password in the file and save the file. The website will not be able to access the database anymore. The database should now be accessible again.
3.  Get your fixes done.
4.  Add the database password back to `wp-config.php`.

### [Drop current tables and replace them with fresh ones](#drop-current-tables-and-replace-them-with-fresh-ones)

**DANGER**

Only do this if you know how to restore a database backup.

1.  Take a backup of your database.
2.  Download the following file by right-clicking on it and selecting “Save link as”: [replace-as-tables.sql](https://gist.githubusercontent.com/alewolf/8ab7eef493efd9bb0518ee91769a4fca/raw/792acea4453148dd4dcce722a36917ffe35d2605/replace-as-tables.sql) and save it under the name `replace-as-tables.sql` on your local computer.
3.  Import the file into your database. If you use the default WordPress prefix `wp_` in your database it will replace the existing tables.
4.  Now you have fresh Action Scheduler tables. If you’re using the default WordPress prefix `wp_` you’re done. The tables are fixed. If you use a custom prefix, please continue with the next step.
5.  Drop the old tables manually.
6.  Take the following SQL statement and replace `custom_prefix_` with the prefix you’re using in your database. Then run the SQL statement.

```
RENAME TABLE    wp_actionscheduler_logs TO custom_prefix_actionscheduler_logs,    wp_actionscheduler_groups TO custom_prefix_actionscheduler_groups,    wp_actionscheduler_claims TO custom_prefix_actionscheduler_claims,    wp_actionscheduler_actions TO custom_prefix_actionscheduler_actions
```

6.  Now you have fresh Action Scheduler tables with the correct prefix and everything should be working again.

### [Further Action Scheduler Support​](#further-action-scheduler-support)

The Action Scheduler is maintained by the Automattic team. If you need further support, please contact them directly: [https://woocommerce.com/contact-us/](https://woocommerce.com/contact-us/)

## [Meta (Facebook)​](#facebook)

### [Server Sending Invalid Match Key Parameters​](#server-sending-invalid-match-key-parameters)

The way our plugin generates and sends the match key parameters prevents a mismatch to happen. Either they are sent correctly and matched by our plugin, or they are not sent at all.

The usual explanation for this warning is one or several of the following:

*   You recently enabled Meta (Facebook) CAPI. In that case, Meta (Facebook) sometimes, unfortunately, mixes up old with new values and generates this warning. Fortunately, this transitory situation is only temporary and resolves just by waiting a few days. In this case the recommendation is to simply dismiss the warning. If the warning shows up again, have a look at the other possible reasons. If the issue you are encountering is not listed, feel free to contact support.
*   You are running a second instance of the Meta (Facebook) pixel through another plugin or custom code. If that is the case then that code is missing the correct match keys and causes the warning. Please disable additional Meta (Facebook) plugins and/or remove additional custom Meta (Facebook) code. Then dismiss the warning in Meta (Facebook). If the warning reappears, go ahead and contact support.

### [Purchase Event delay from the server (Conversion API)​](#purchase-event-delay-from-server-conversion-api)

Under normal conditions, the plugin sends the purchase event immediately to Meta (Facebook). But, when a payment for the order fails, no purchase event is being sent through the Conversion API. Only when the payment on that order is recovered at a later point in time, then the purchase event is sent to Meta (Facebook). This can lead to a `Purchase Event delay from server` warning. It can be safely ignored.

### [Potentially violating Personal data sent to Meta (Facebook)​](#potentially-violating-personal-data-sent-to-facebook)

This happens when Meta (Facebook) detects URL parameters that potentially contain personal data (PII) in the path of the URL.

Example: `http://example.com/account/reset-password?username=johndoe`

In this case Meta (Facebook) detects that `username` probably contains personal information, issues a warning and redacts the information like this: `http://example.com/account/reset-password?username=_removed_`

> Our plugin does not add any information to the URL path. The only information that our plugin is sending through the browser pixel is product and order data. The source of this warning are URL paths generated by the server and must be fixed there.

Meta (Facebook) in some cases is “trigger happy” and issues a warning although there is no personal data in the URL path.

Example: `http://example.com?_ip=123456`

In this case `_ip=123456` resembles an IP address, but in your case, it might be something completely different. If you are sure it is not personal information, you can safely ignore the warning.

### [I am getting “Failed to load resource: net::ERR\_BLOCKED\_BY\_CLIENT”​](#i-am-getting-failed-to-load-resource-neterr_blocked_by_client)

This is usually caused by an ad-blocker in the browser.

In order to fix this, temporarily disable the ad-blocker or switch to another browser that doesn’t have an ad-blocker enabled.

Read more about this [here](https://stackoverflow.com/a/22403173/4688612).

## [Incompatible Plugins​](#incompatible-plugins)

### [WC Custom Thank You](#wc-custom-thank-you)

> Plugin homepage: [link](https://wordpress.org/plugins/wc-custom-thank-you/)

**INFO**

The plugin creates a custom order thankyou page for WooCommerce, but doesn’t follow the WooCommerce standard for the order confirmation page. In order for conversion pixels to fire on the WooCommerce order confirmation page, every WooCommerce theme must implement the correct output for the `is_order_received_page()` conditional. This is valid for plugins that modify the purchase confirmation page too. On top of that, the WC Custom Thank You plugin has not been updated in a long time and the developer has stopped to answer support requests.

## [Google Ads​](#google-ads)

### [Misconfigured Bidding Strategy](#misconfigured-bidding-strategy)

> It can happen that Google Ads throws the warning “**Misconfigured bidding strategy**“. The hover text shows “**Your campaign is running with limited performance. Set up conversion tracking for your account to improve your performance, spending and see reporting**“.

**INFO**

Unfortunately, this warning sometimes is thrown even if conversion tracking is set up just fine.

Typically, the warning is thrown on Smart Shopping campaigns. Additionally, conversion tracking for Smart Shopping campaigns have more requirements in order to run well. If those are not met, the same warning is thrown.

1.  First, make sure that conversion tracking has been set up correctly. Double check the conversion ID and conversion label.
2.  Make sure that the product ID type is the same as the one you use in Google Merchant Center. The product IDs must match.
3.  Smart Shopping campaigns require at least 30 conversions within a time frame of the past 30 days. And, in order for them to be able to use the remarketing lists, there must be at least 100 visitors per list in the past 30 days. Once the requirements are matched, the warning will go away.
4.  If you don’t think you can match the requirements in the near future, it is better to run a standard shopping campaign.

### [Issue: ID never received​](#issue-id-never-received)

Sometimes Google Ads shows a warning saying the ID was never received. Unfortunately, that warning is shown even in cases where everything works perfectly fine.

You can check yourself if IDs are being received in the audience report. Switch the graph to **Parameters > ID hits**. If you see a graph like the following, everything is ok and you can dismiss the warning and don’t need to continue reading further.

![](https://woocommerce.com/wp-content/uploads/2022/03/id-not-sent-issue-id-hits-graph-88fc9db1ffec488a988bd1aa0f5a9408.png?w=650)

If you see incoming ID hits in the graph and still want to investigate the warning further, please ask Google support.

On the other hand, if you don’t see ID hits in the graph, please continue reading.

It doesn’t mean that Google Ads is always wrong when it comes to that warning. There are cases where the Google Ads warning can be right. Here is a list of possible causes:

*   You’ve set the wrong conversion ID. Double-check and correct it if necessary.
*   When setting up the remarketing audiences you’ve enabled `retail` **and** the `custom` audience. The plugin can only send the signal for one or the other, not for both (which would not make sense anyway). So one of those verticals never receives an ID (usually `custom`), in which case you will see that warning show up regularly, but usually can dismiss it. Unfortunately the `custom` vertical can not be turned off once enabled.
*   There is some reason that is blocking the remarketing script from sending events correctly, usually some kind of JavaScript optimization plugin.

Make sure that none of the above reasons are causing this problem.

The best way to check if the ID is being sent is to use the [Google Tag Assistant](https://tagassistant.google.com/)

Here’s how to check:

1\. Open the Google Tag Assistant: [tagassistant.google.com](https://tagassistant.google.com/).

2\. In Google Tag Assistant, instruct to open one of your product pages.

3\. If the product page is a variable product, select the drop-down(s) to choose one variation.

4\. Then switch back to the Google Tag Assistant tab.

5\. In the middle pane, click on dataLayer.

![](https://woocommerce.com/wp-content/uploads/2022/03/id-not-sent-issue-datalayer-987877fcb1f0155d414dfcce5bc752f2.png?w=650)

6\. In the left sidebar, click on the view\_item event. If you’ve also set up Google Analytics, you will see several view\_item events. Click through each of those until you see in the dataLayer the event that is sending events to your Google Ads conversion ID.

7\. Once you find the correct event, check if the ID is being sent. If so, all is good. You have proof that the ID **is** being sent and the warning is wrong. You can dismiss it.

![](https://woocommerce.com/wp-content/uploads/2022/03/id-not-sent-issue-view-item-55f92db979c148560b890f219048b053.png?w=650)

8\. If you would like, you can also take those results and ask Google Ads support to fix that warning. (It would be a great help for us, because we investigate way too many of those false positive warnings).