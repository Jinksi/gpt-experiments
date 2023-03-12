# Managing Disputes with WooCommerce Payments

A dispute is when a customer contests a payment made with their card. Handling disputes from customers can be one of the most unpleasant parts of running a business, especially when you need to challenge a dispute. However, not responding to your disputes can be problematic, because it can lead to fines and the possibility of being prohibited to do business by the card networks.

This guide provides you with guidance on how to respond to existing disputes. For more information on how to prevent disputes in the first place, please see [this document](https://woocommerce.com/document/payments/preventing-disputes-with-woocommerce-payments/).

## [Overview](#section-1)

WooCommerce Payments guides you through the process of responding to a dispute via the [**Payments > Disputes** page](https://docs.woocommerce.com/document/payments/#section-7). This document expands on information provided within those pages, and provides advice about the types of responses recommended for different types of disputes.

For each dispute type, it also provides the information required to overturn the dispute, and where to include that evidence in the fields presented by the **Challenge Dispute** form. When responding to a dispute, it’s always best to provide more information. If you have any information you think the card issuer might want to see, submit it as dispute evidence. Some example dispute evidence includes web logs, email communications, shipment tracking numbers, delivery confirmations, proof of prior refunds, replacement shipments, and so on.

![](https://woocommerce.com/wp-content/uploads/2020/07/woocommerce-payments-challenge-dispute.png?w=950)

**Payments > Disputes > Challenge Dispute** Evidence Submission Screen

## [Responding to a dispute](#section-2)

After your store receives a dispute, you can respond in one or three ways:

*   **Do nothing**: in which case, the dispute will be marked _Lost_ after the due date is reached.
*   **Accept dispute**: accepting the dispute immediately marks it as _Lost_. The funds withdrawn from your account to cover the transaction and [dispute fee](https://docs.woocommerce.com/document/payments/faq/fees/) will not be reimbursed.
*   **Challenge dispute**: submit evidence to card issuer proving that the dispute is not valid. The evidence will be reviewed by the card issuer and you will receive their determination at a later date, which can be a number of months in future.

**NOTE:** One thing you should **not** do is refund the customer for their disputed order using some other method besides WooCommerce Payments. This is because, if you lose the dispute later on, the amount of the order will automatically be refunded to them from your WooCommerce Payments account. Thus, you will then have lost **two times** the amount of the order, plus the $15 dispute fee.

The first two responses are the most efficient way to resolve a dispute. If you think the dispute is valid, or do not have the required evidence to challenge the dispute, you should accept the dispute. The card networks do not take into account the number of disputes you lose when determining the risk of your business. They look at the number of disputes your business receives.

![](https://woocommerce.com/wp-content/uploads/2020/07/woocommerce-payments-dispute-details.png?w=736)

**NOTE:** If you decide to challenge a dispute, evidence can only be submitted one time. For that reason, be sure to carefully review any evidence you plan to submit! Once the evidence has been submitted, it’s not possible (even for WooCommerce Payments support staff) to correct any mistakes.

### [Contact your customer](#section-3)

With any dispute, we recommend that you contact your customer to discuss the claim. Sometimes, customers may mistakenly dispute a charge and once reminded of the transaction, they can withdraw the dispute with their card issuer.

Importantly, even if your customer does withdraw the dispute, you still need to challenge the dispute in order for the transaction to be refunded and dispute fee returned. It will also still take approximately 75 days to be closed by the card issuer.

## [Dispute types](#section-4)

Card issuers categorize disputes in one of the following ways, base on the claim by the card holder:

*   **[Credit not processed](#credit-not-processed)**: card holder claims they are owed a refund or other credit that has not been received. For example, if your customer returns a product, but the charge has not been refunded to the card.
*   **[Duplicate](#duplicate)**: customer claims multiple charges were placed on their card for the same product or service. For example, if your customer paid for a service when booking via your website, as well as in person after receiving the service.
*   **[Fraudulent](#fraudulent)**: card holder, not necessarily the customer with your store, claims they did not authorize the payment with your store. For example, if your customer used a stolen credit card number to place an order, the holder of that card may later see the transaction and dispute it as it is not recognized.
*   **[General](#general) or [Unrecognized](#unrecognized):** the card holder notifies their card issuer that they do not recognize the charge on their card statement.
*   **[Product not received](#product-not-received)**: the good or service for which the charge was processed has not been received by the customer. For example, a shipment from your business has not been received by your customer.
*   **[Product unacceptable](#product-unacceptable)**: the card holder claims the product or service they received in return for the payment was defective, damaged, or not as described. For example, your customer was shipped a different item to the one purchased.
*   **[Subscription cancelled](#subscription-cancelled)**: after cancelling a subscription plan, the customer was charged a recurring payment for that subscription. For example, if a customer calls your business to request cancellation, but the subscription is not cancelled within WooCommerce.

Because each type of dispute represents a different claim by the customer, each requires different evidence to be submitted when challenging the dispute. The rest of this document outlines the different types of disputes, and evidence required to challenge each. This information is based on guidance from Stripe, our [payments partner](https://docs.woocommerce.com/document/payments/powered-by-stripe/), on [dispute evidence for each category](https://stripe.com/docs/disputes/categories).

## [Credit Not Processed](#section-5)

To overturn a **credit not processed** dispute, you need to demonstrate either that:

1.  Your customer is not entitled to a refund based on your store’s refund policy; or
2.  You have refunded your customer outside of the card network, e.g., via store credit.

#### Additional details text

In the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include the following information:

*   **Disclosure of refund policy**: explain how and when your refund policy was disclosed to the customer prior to purchase.
*   **Reason for refund refusal**: if you have refused to refund the customer, explain to the bank why the customer is not entitled to a refund. Reference terms in your refund policy, uploaded in the **additional details file** field.

#### Additional details file

In the **Additional Details** file upload field of the **Payments > Disputes > Challenge Dispute** screen, upload a PDF of your refund policy, as presented to the customer. Do not link to the refund policy within your response, as links will not be visited by the card issuer evaluating the dispute.

## [Duplicate](#section-6)

To overturn a **duplicate** charge dispute, you need to demonstrate that each payment was for a separate product or service.

#### Additional details text

In the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include:

*   **Duplicate charge ID:** the charge ID for the previous payment that appears to be a duplicate of the one that is disputed —the charge ID will look like this: `ch_xxxxxxxxxxxxxxxxxxxxxxx`, notice it starts with `ch_`. This ID is available on the transaction from the **WooCommerce > Edit Order** screen, or the **Payments > Transactions** screen.
*   **Duplicate charge explanation**: explain to the bank the difference between the disputed payment and the prior one that appears to be a duplicate, referencing documentation uploaded in the **additional details file** field.

#### Additional details file

In the **Additional Details** file upload field of the **Payments > Disputes > Challenge Dispute** screen, upload a document for the prior payment that can uniquely identify it, such as a separate receipt. This document should be paired with a similar document from the disputed payment that proves the two are separate.

If the dispute is on a charge for a **physical product**, this should also include a separate shipping label for both this charge and the other payment. If multiple products were shipped together, provide a packing list that shows each purchase.

If the dispute is on a charge for an **offline service**, provide a copy of the service agreement.

## [Fraudulent](#section-7)

To overturn a **fraudulent** charge dispute, you need to prove to the card issuer that the cardholder authorized the transaction. The cardholder may not be the same person as the customer with your store.

When challenging a Fraudulent charge dispute, you must include [compelling evidence](#compelling-evidence) in order for Visa to consider the dispute if the transaction was processed on the Visa network. We recommend you always include compelling evidence, regardless of card network.

For this dispute type, you also need to include different information depending on the type of product associated with the disputed transaction.

### [Compelling Evidence](#section-8)

For Fraudulent disputes, you must include at least one piece of [compelling evidence](#compelling-evidence) in order for Visa to consider your response.

Compelling evidence for fraudulent disputes on **physical products and offline services** includes:

*   **Customer signature:** Upload a file to prove the person who signed for the products upon delivery was the cardholder, is known to the cardholder or authorized by the cardholder to sign. If the products are collected from a physical location, you must provide:
    *   Cardholder signature on the pickup form
    *   A copy of identification presented by the cardholder
    *   Details of identification presented by the cardholder
*   **Customer communication:** Evidence such as photographs or emails to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products. Its advised to not to block any of your business information, and provide a clear picture for the networks to review.

**For all product types**, the information listed below in the **Additional details file** section is also compelling evidence and you should submit any available.

### [Physical products](#section-9)

#### Additional details text

For a dispute on a transaction involving a physical product, the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include:

*   **Shipping date**: the date on which the package began its route to the shipping address, in a clear human-readable format.
*   **Shipping carrier**: include the name of the delivery service that shipped the package, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, include the names of all carriers.
*   **Shipment tracking number**: include the tracking number for a physical product, obtained from the shipping carrier or delivery service. Please include all tracking numbers for all packages associated with this transaction.

#### Additional details file

For a dispute involving a physical product, using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Shipping documentation:** upload a PDF showing:
    *   The address to which a physical product was shipped. The shipping address must match a billing address verified with AVS. (A signature is not required as evidence of delivery).
    *   Proof that the package was shipped to the cardholder at the same address the cardholder provided to you. This could include a copy of the shipment receipt or label, and show the full shipping address of the cardholder, if possible.
    *   Detailed delivery information from the carrier, like confirmation of delivery.
*   **Other evidence**: in the following situations, you should also include additional documentary evidence:
    *   If the customer has purchased the same products from you previously without lodging a dispute on those transactions, provide details of those transactions.
    *   If the package was shipped to a business address, provide evidence that the customer works there.
    *   If the transaction was completed by a member of the cardholder’s family or household, provide evidence of the connection between the two.

### [Digital product or service](#section-10)

#### Additional details file

For a dispute involving a digital product or service, the file uploaded with the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, must contain at least two of the following pieces of information in order to fulfill [compelling evidence](#compelling-evidence) requirements:

*   Customer’s IP address and their device’s geographical location at the time of purchase.
*   Device ID and name of the device used to complete the transaction.
*   Customer name and email address linked to their customer profile.
*   Evidence that the customer logged into their account for your business before the transaction date.
*   Evidence that your website or app was accessed by the cardholder for purchase or services on or after the transaction date.
*   Evidence that the same device and card used in the disputed payment was used in a previous payment that was not disputed.

### [Offline service](#section-11)

#### Additional details file

For a dispute involving an offline service, using the **Additional Details** file field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Service date:** evidence of the date on which the cardholder received or began receiving the purchased service, which should be before the dispute date.
*   **Service documentation:** Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.
*   **Other evidence:**
    
    *   If the customer has purchased the same service from you previously without lodging a dispute, provide details of those transactions.
    
    *   If the transaction was completed by a member of the cardholder’s family or household, provide evidence of the connection between the two.

## [Product Not Received](#section-12)

To overturn a **product not received** dispute, you need to prove a customer received a physical product or offline service, or made use of a digital product or online service prior to the date of the dispute.

When challenging a **product not received** dispute, you must include [compelling evidence](#compelling-evidence) in order for Visa to consider the dispute.

For this dispute type, you also need to include different information depending on the type of product associated with the disputed transaction.

### [Compelling Evidence](#section-13)

For **product not received** disputes, you must include at least one piece of [compelling evidence](#compelling-evidence). Compelling evidence for disputes involving **physical products**, and **offline services** includes:

*   **Customer signature:** upload a file to prove the person who signed for the products upon delivery was the cardholder, is known to the cardholder or authorized by the cardholder to sign. If the products are collected from a physical location, you must provide:
    *   Cardholder signature on the pickup form
    *   A copy of identification presented by the cardholder
    *   Details of identification presented by the cardholder
*   **Customer communication:** Evidence such as photographs or emails to prove a link between the person receiving products and the cardholder, or proving that the cardholder disputing the transaction is in possession of the products.

For all product types, the information listed below in the **Additional Details** file section is also compelling evidence. You should submit any such file evidence available.

### [Physical product](#section-14)

#### Additional details text

For a dispute on a transaction involving a physical product, the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include:

*   **Shipping date**: the date on which the package began its route to the shipping address, in a clear human-readable format.
*   **Shipping carrier**: include the name of the delivery service that shipped the package, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, include the names of all carriers.
*   **Shipment tracking number**: include the tracking number for a physical product, obtained from the shipping carrier or delivery service. Please include all tracking numbers for all packages associated with this transaction.

#### Additional details file

For a dispute involving a physical product, using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Shipping documentation:** upload a PDF showing:
    *   The address to which a physical product was shipped. The shipping address must match a billing address verified with AVS. (A signature is not required as evidence of delivery).
    *   Proof that the package was shipped to the cardholder at the same address the cardholder provided to you. This could include a copy of the shipment receipt or label, and show the full shipping address of the cardholder, if possible.
    *   Detailed delivery information from the carrier, like confirmation of delivery.
*   **Other evidence**: in the following situations, you should also include additional documentary evidence:If the customer has purchased the same products from you previously without lodging a dispute on those transactions, provide details of those transactions.
    *   If the package was shipped to a business address, provide evidence that the customer works there.
    *   If the transaction was completed by a member of the cardholder’s family or household, provide evidence of the connection between the two.

### [Digital product or service](#section-15)

#### Additional details file

For a dispute involving a digital product or service, the file uploaded with the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, must contain at least two of the following pieces of information in order to fulfill [compelling evidence](#compelling-evidence) requirements:

*   Customer’s IP address and their device’s geographical location at the time of purchase.
*   Device ID and name of the device used to complete the transaction.
*   Customer name and email address linked to their customer profile.
*   Evidence that the customer logged into their account for your business before the transaction date.
*   Evidence that your website or app was accessed by the cardholder for purchase or services on or after the transaction date.
*   Evidence that the same device and card used in the disputed payment was used in a previous payment that was not disputed.

### [Offline service](#section-16)

#### Additional details file

For a dispute involving an offline service, using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Service date:** evidence of the date on which the cardholder received or began receiving the purchased service, which should be before the dispute date.
*   **Service documentation:** Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.
*   **Other evidence:**
    *   If the customer has purchased the same service from you previously without lodging a dispute, provide details of those transactions.
    *   If the transaction was completed by a member of the cardholder’s family or household, provide evidence of the connection between the two.

## [Product Unacceptable](#section-17)

To overturn a **product unacceptable** dispute, you need to demonstrate that the product or service was provided to the customer as advertised to the customer at the time of purchase.

For this dispute type, you should include different information depending on the type of product associated with the disputed transaction.

For all product types:

*   If the product or service was delivered as described to the cardholder, provide evidence of that, e.g., a contract, service agreement, or screenshot of the product page at the time of purchase as part of the **Additional Details** file upload field.
*   If you have processed a credit or reversal for this transaction, provide a document evidencing this as part of the **Additional Details** file upload field.
*   If your customer made no attempt to return the product or cancel the service, or if you provided a replacement product or service, make sure to note that as well.

### [Physical product](#section-18)

For disputes on products that have been repaired or replaced, as part of the **Customer Communication** file upload, provide evidence that:

*   The cardholder agreed to a repair or replacement;
*   It has been received by the customer, and
*   The repair or replacement has not since been disputed.

#### Additional details text

For a dispute on a transaction involving a physical product, the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include:

*   **Shipping date**: the date on which the package began its route to the shipping address, in a clear human-readable format.
*   **Shipping carrier**: include the name of the delivery service that shipped the package, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, include the names of all carriers.
*   **Shipment tracking number**: include the tracking number for a physical product, obtained from the shipping carrier or delivery service. Please include all tracking numbers for all packages associated with this transaction.

#### Additional details file

For a dispute involving a physical product, using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Shipping documentation:** upload a PDF showing:
    *   The address to which a physical product was shipped. The shipping address must match a billing address verified with AVS. (A signature is not required as evidence of delivery).
    *   Proof that the package was shipped to the cardholder at the same address the cardholder provided to you. This could include a copy of the shipment receipt or label, and show the full shipping address of the cardholder, if possible.
    *   Detailed delivery information from the carrier, like confirmation of delivery.
*   **Other evidence**: in the following situations, you should also include additional documentary evidence:If the customer has purchased the same products from you previously without lodging a dispute on those transactions, provide details of those transactions.
    *   If the package was shipped to a business address, provide evidence that the customer works there.
    *   If the transaction was completed by a member of the cardholder’s family or household, provide evidence of the connection between the two.

### [Digital product or service](#section-19)

For a dispute involving a digital product or service, the file uploaded with the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, should include access or activity logs.

This should include IP addresses, corresponding timestamps, and any detailed recorded activity.

The file needs to prove that the cardholder accessed or downloaded the digital product or service after the purchase.

### [Offline service](#section-20)

For a dispute involving an offline service, using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Service date:** Evidence of the date on which the cardholder received or began receiving the purchased service, which should be before the dispute date.
*   **Service documentation:** Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.

## [Subscription Canceled](#section-21)

With this type of dispute, the customer is claiming that you continued to charge them recurring payments after they had cancelled the associated subscription agreement.

To overturn a **subscription canceled** dispute, you need to prove to the bank that the subscription was still active as the customer had not followed your cancellation procedure.

You should also prove that the customer was aware of your cancellation policies and procedure. For example, demonstrate that the customer accepted the cancellation terms at the time of sign-up.

### [Customer communication](#section-22)

Using the **Customer Communication** file upload field on the **Payments > Disputes > Challenge Dispute** screen, provide the bank with a file showing:

*   Any notifications sent to the customer of a renewal or continuation of the subscription, for example, pre-renewal email notifications, or
*   Acknowledgement from the customer of their continued use of the product or service after the date they claim they canceled the subscription (if available).

#### Additional details text

In the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include:

*   **Disclosure of cancelation policy**: explain how and when your cancelation policy was disclosed to the customer prior to purchase.
*   **Reason for cancelation refusal**: if you have refused to cancel the customer’s subscription, explain to the bank why why the customer’s subscription was not canceled. Reference terms in your cancelation policy, uploaded in the **Additional Details** file upload field.

#### Additional details file

Using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a PDF of your cancellation policy, as presented to the customer.

Do not link to the cancellation policy in your response, as links will not be visited by the card issuer evaluating the dispute.

For **digital products or services**, the file uploaded in the additional details field should also provide server or other activity logs showing proof that the cardholder accessed or downloaded the digital product or service after the disputed cancelation date. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.

For **offline services**, you should also include in the file:

*   **Service date:** evidence of the date on which the cardholder received or began receiving the purchased service, which should be before the dispute date.
*   **Service documentation:** Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.

## [General and Unrecognized](#section-23)

In a **General** or an **Unrecognized** dispute, the customer doesn’t recognize the payment appearing on their card statement. To overturn the dispute, you need your customer to withdraw the dispute. You can achieve this by helping them identify the payment.

When challenging a dispute of this type, you should also include different information depending on the type of product associated with the disputed transaction.

### [Physical product](#section-24)

#### Additional details text

For a dispute on a transaction involving a physical product, the **Additional Details** text field of the **Payments > Disputes > Challenge Dispute** screen, your response should include:

*   **Shipping date**: the date on which the package began its route to the shipping address, in a clear human-readable format.
*   **Shipping carrier**: include the name of the delivery service that shipped the package, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, include the names of all carriers.
*   **Shipment tracking number**: include the tracking number for a physical product, obtained from the shipping carrier or delivery service. Please include all tracking numbers for all packages associated with this transaction.

#### Additional details file

For a dispute involving a physical product, using the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, upload a file with the following:

*   **Shipping documentation:** upload a PDF showing:
    *   The address to which a physical product was shipped. The shipping address must match a billing address verified with AVS. (A signature is not required as evidence of delivery).
    *   Proof that the package was shipped to the cardholder at the same address the cardholder provided to you. This could include a copy of the shipment receipt or label, and show the full shipping address of the cardholder, if possible.
    *   Detailed delivery information from the carrier, like confirmation of delivery.
*   **Other evidence**: in the following situations, you should also include additional documentary evidence:If the customer has purchased the same products from you previously without lodging a dispute on those transactions, provide details of those transactions.
    *   If the package was shipped to a business address, provide evidence that the customer works there.
    *   If the transaction was completed by a member of the cardholder’s family or household, provide evidence of the connection between the two.

### [Digital product or service](#section-25)

For a dispute involving a digital product or service, the file uploaded with the **Additional Details** file upload field on the **Payments > Disputes > Challenge Dispute** screen, must contain at least two of the following pieces of information in order to fulfill [compelling evidence](#compelling-evidence) requirements:

*   Customer’s IP address and their device’s geographical location at the time of purchase.
*   Device ID and name of the device used to complete the transaction.
*   Customer name and email address linked to their customer profile.
*   Evidence that the customer logged into their account for your business before the transaction date.
*   Evidence that your website or app was accessed by the cardholder for purchase or services on or after the transaction date.
*   Evidence that the same device and card used in the disputed payment was used in a previous payment that was not disputed.

### [Offline service](#section-26)

In the **additional details** file, your response should include a file with:

*   **Service date:** evidence of the date on which the cardholder received or began receiving the purchased service, which should be before the dispute date.
*   **Service documentation:** Documentation showing proof that a service was provided to the cardholder. This could include a copy of a signed contract, work order, or other form of written agreement.

## [Compelling Evidence](#section-27)

Visa has special evidence requirements for overturning Fraudulent and Product Not Received disputes. These requirements are referred to as _compelling evidence_.

In order for Visa to consider a response for a **fraudulent** or **product not received** dispute, you must provide at least one piece of compelling evidence. This evidence proves that the cardholder participated in the transaction, received any goods or services, or benefited from the transaction.

While compelling evidence is only required by Visa, we recommended you collect and submit this evidence regardless of the card brand used in the transaction.

You can learn more about Visa’s compelling evidence requirements in [their online courses](https://www.visauniversity.com/en/catalog/liveonline/introduction-to-dispute-resolution).

## [Dispute Decisions](#section-28)

Although WooCommerce Payments is used to submit evidence and challenge the dispute, the dispute outcome is determined exclusively by the bank. Neither Automattic nor our financial service providers influence the decision outside of submitting the evidence to them. Unfortunately once decided, these decisions can not be overturned.

On average, banks take 2 to 3 months after evidence has been submitted to determine the outcome of a dispute.

## [SEPA Disputes](#section-29)

Like other payment methods, SEPA provides a dispute process for customers to dispute payments. However, their dispute process works differently than that of other payment methods.

After paying with SEPA, customers can dispute a payment through their bank on a “no questions asked” basis up to eight weeks after their account is debited. **The customer will automatically win any dispute filed within this time period.**

After eight weeks and up to 13 months, a customer can only dispute a payment with their bank if the debit is considered unauthorized. If this occurs, WooCommerce Payments automatically provides the bank with the mandate that the customer approved. This does not guarantee cancellation of the dispute however: the bank can still decide that the debit was unauthorized and the customer is entitled to a refund.