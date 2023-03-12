# Is WooCommerce Payments PCI Compliant?

Yes, WooCommerce Payments itself is PCI compliant, but merchants still need to be aware of the core PCI-DSS core requirements. For more general information, please see our [PCI-DSS Compliance and WooCommerce](https://woocommerce.com/document/pci-dss-compliance-and-woocommerce/) documentation.

## [What makes WooCommerce Payments PCI Compliant?](#what-makes-woocommerce-payments-pci-compliant)

WooCommerce Payments uses a hosted payment field for handling all payment card data, so the cardholder enters all sensitive payment information in a payment field that originates directly from our partner’s PCI-DSS validated servers. This means the information is not directly stored on your site.

## [What data is stored on my site?](#what-data-is-stored-on-my-site)

WooCommerce stores the data entered in the other checkout fields, such as name, address, country, and so on. This data is separate from the billing field data, such as the card number and CVC code.

## [What about saved cards and subscriptions?](#what-about-saved-cards-and-subscriptions)

When a customer completes a purchase on your site and chooses to save their payment method for future use, or when they purchase a subscription product, your site needs to “remember” the customer’s payment details in order to use them again in the future.

WooCommerce Payments uses a token and API-based method to do this. In short, this means your site will communicate with our payments system using [the WordPress.com connection](https://woocommerce.com/document/payments/connection/) and request the card details using a payment token. Payment method details such as the card number and CVC code are not stored directly on your site.

## [Further reading](#futher-reading)

WooCommerce Payments is [built in partnership with Stripe](https://woocommerce.com/document/payments/built-in-partnership-with-stripe/). Along with [our own general documentation](https://woocommerce.com/document/pci-dss-compliance-and-woocommerce/), the Stripe team has written [their own in-depth article](https://stripe.com/guides/pci-compliance).