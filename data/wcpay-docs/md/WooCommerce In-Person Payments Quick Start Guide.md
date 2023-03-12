# WooCommerce In-Person Payments: M2 Card Reader Quick Start Guide

The M2 Card Reader is supported for merchants in the **United States**.

## [Package contents](#package-contents)

*   1x M2 Card Reader
*   1x USB-C Charging Cable

![](https://woocommerce.com/wp-content/uploads/2022/08/Pack-reader.jpg?w=650)

## [Application download and installation](#application-download-installation)

This device supports iOS and Android.

1.  Make sure you have [WooCommerce](https://woocommerce.com/start/#/) and [WooCommerce Payments](https://woocommerce.com/products/woocommerce-payments/) installed and activated on your store.
2.  Download the [WooCommerce Mobile App](https://woocommerce.com/mobile/) for [iOS](https://apps.apple.com/us/app/id1389130815) or [Android](https://play.google.com/store/apps/details?id=com.woocommerce.android). If you already have the app installed, ensure that it has been updated to the latest version.
3.  Follow the [iOS](https://woocommerce.com/document/woocommerce-ios/) or [Android](https://woocommerce.com/document/android/) app instructions to register and/or log in.

## [Connecting the reader](#Connecting-the-Reader)

### [Charge the reader](#charge-the-reader)

Charge the reader using the included charger for approximately two (2) hours. Charging before the first use helps to prevent potential damage to it. The reader’s bottom-left LED light will momentarily turn solid green (🟢) when connected to a charger. 

The LED status lights help to track the level of the charge when the reader is connected to a power source via the included USB-C cable. The status lights will only appear momentarily before turning off.

![](https://lh3.googleusercontent.com/g-9m-FoPo6VLK4DTrxSBA1HJ6EtnjrnLExoBX5NPZzcUQne3p1YNpP_1YzVW-xYi2B0ehsY1rcxOsxd6rDhUDvGewsFbldCv7Yrg8aR_ovYwNj8u6I9tG187wEARSM8k7qVvBc4)

**Note:** For typical usage, you should charge the reader once a day. A fully charged reader can run ~1,000 transactions on a single charge.

### [Turn on the reader](#turn-on-the-reader)

After charging, turn on the device by briefly pressing the power button on the side of the reader. The status LEDs will turn on and the reader will beep twice. The reader will wait five minutes for a Bluetooth connection before automatically shutting off.

### [Enable your device’s Bluetooth](#enable-your-device-bluetooth)

****Before you start:**** Do not pair the card reader in your device’s Bluetooth settings. The WooCommerce Mobile App will manage the connection automatically.

Ensure that Bluetooth is enabled on your device. Open the WooCommerce Mobile App. Navigate to **Settings (Gear Icon) > In-Person Payments > Manage Card Reader**.

### [Connect via the mobile app](#connect-via-the-app)

Click on **Connect Card Reader**. If prompted, allow the app to see your location while using the app.

After connecting, the first status LED will begin flashing at five-second intervals. The reader will stay connected to your iOS or Android device while in standby, automatically exiting standby mode when you resume activity. Once the reader is connected it will automatically turn off after 10 hours of inactivity. To turn the reader off manually, press and hold the power button for four (4) seconds. You don’t need to turn off the reader to conserve power.

**Note:** If you would like to use the card reader for collecting payment in person for orders placed online, such as for curbside or local pickup, you will need to make some changes in your store’s WP Admin settings by [following these instructions](https://woocommerce.com/document/getting-started-with-in-person-payments-with-woocommerce-payments/#section-2). This includes setting up a local pickup zone, enabling cash on delivery, and making sure your products are set to this zone.

### [Collect payment](#collect-payment)

To **create a brand new order** inside the Mobile App, navigate to the Orders tab, click on ‘Create order’, select the products to add from your product inventory, and then fill out the rest of the fields that you would like to use. Finally, swipe, tap, or insert the card to accept the payment. Once payment is collected, this order will adjust your inventory automatically.

To use **Simple Payments for a quick transaction**, navigate to the Orders tab in the Mobile App, click on the ‘+’ sign, and select ‘Simple payment’. Enter in the amount to collect, a note about the transaction (optional), and toggle the tax collection on or off, as needed. Then use the card reader to collect payment. This method of payment collection will not adjust your inventory.

For orders placed online for local pickup collection, navigate to that order in your WooCommerce Mobile App and click on ‘Collect Payment’ to finish the transaction.

## [NFC transaction status](#nfc-transaction-status)

Near Field Communication (NFC) is a feature that enables short-range communication between compatible devices. In the case of In-Person Payments, it’s the communication between a customer’s NFC-enabled bank card and the card reader.

When payment is made via this method, success or failure is signaled via audible beep(s). All four (4) LED lights will display as green on the reader when reading the card information. Once the card is read successfully, it will be accompanied by **a single beep**. If there are two (2) beeps, there has been an error and you should retry.

![](https://woocommerce.com/wp-content/uploads/2022/01/Illustration-beep.jpg?w=650)

Transaction successful

![](https://woocommerce.com/wp-content/uploads/2022/01/Illustration-beep-beep.jpg?w=650)

Transaction failed

## [Troubleshooting](#troubleshooting)

### [The WooCommerce Mobile App does not show a “Manage Your Card Reader” option](#the-woocommerce-mobile-app-does-not-show-a-manage-your-card-reader-option)

Ensure that WooCommerce, WooCommerce Payments, and the WooCommerce Mobile App have been updated to the latest version and that you are logged in to the mobile app.

### [If the WooCommerce Mobile App is unable to connect to your reader](#if-the-woocommerce-mobile-app-is-unable-to-connect-to-your-reader)

*   Reboot the reader by pressing the power button once to turn off and again to turn on.
*   If the problem persists, force quit the WooCommerce Mobile App and open it again, or reboot your device and reader.
*   Confirm that the reader is charged and not connected to another device.  
*   Ensure that the reader was not previously paired directly via the device’s Bluetooth settings. Go to the Bluetooth settings in any previously paired devices and select “Forget device”.
*   Confirm the reader is within range (usually 10-20 ft) of the WooCommerce Mobile App.
*   Attempt to connect to the reader with the mobile device’s WiFi settings turned off. It’s possible that the WiFi is interfering with the ability to connect to the reader via Bluetooth. If the connection succeeds with WiFi turned off, take one of the following approaches to resolve it:
    *   Reconnect the device to the internet using a cellular connection.
    *   Move closer to the WiFi access point to reduce WiFi interference.
    *   Reset the WiFi router to a 5GHz band to ensure the 2.4GHz band (shared by Bluetooth) isn’t too crowded.

### [The card reader does not process a payment successfully](#the-card-reader-does-not-process-a-payment-successfully)

*   Turn off the card reader on and off. The card reader should automatically reconnect with your smartphone or tablet if you have completed the initial setup.
*   The battery level may be too low. Use the USB cable to recharge the reader then retry.
*   Check that the device or smartphone/tablet is within the WiFi reception range.
*   Check that your WooCommerce Payments account is set up and connected in your WooCommerce Payments extension settings under **WooCommerce > Settings > Payments**.
*   If swiping or inserting a card, check whether the card’s magstripe or chip is facing the right direction.
*   If tapping a card, check whether the card supports the chosen payment method (e.g. tap function should have the [**correct symbol on the card**](https://woocommerce.com/document/payments/woocommerce-in-person-payments-quick-start-guide/?_gac=1.95202670.1639425597.CjwKCAiA-9uNBhBTEiwAN3IlNA246M_1Idu8epW3StoRun9vyuFdkaxXMRAvs5XGFOe8PuIURTko9BoCwcQQAvD_BwE#nfc-transaction-status)). The card should be placed within a 1.5inch/4cm range of the tap marking and **not** inside a wallet.

### [Device lost the connection with your smartphone or tablet when the device shuts down automatically](#device-lost-the-connection-with-your-smartphone-or-tablet-when-the-device-shuts-down-automatically)

*   Press the power on button to turn on the reader again. The reader should automatically connect with your smartphone or tablet.
*   The battery level may be too low; use the USB cable to recharge it, then retry.
*   Check that the smartphone/tablet is within range of the card reader.

For additional troubleshooting support, refer to the [Getting started with In-Person Payments with WooCommerce Payments](https://woocommerce.com/document/getting-started-with-in-person-payments-with-woocommerce-payments/) guide.