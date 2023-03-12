# Is WooCommerce Payments compatible with High-Performance Order Storage?

High-performance order storage (HPOS), formerly known as custom order tables (COT), is the name given to a new way in which the core WooCommerce plugin plans to store data inside the WordPress database. Please see [this page](https://woocommerce.com/document/high-performance-order-storage/) for additional information.

As of version 5.5.0, WooCommerce Payments is compatible with HPOS and should function with it enabled. However, **HPOS itself is still considered experimental**, and should only be enabled on staging or test environments. It is not yet ready for use on production sites.