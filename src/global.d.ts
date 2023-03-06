type ProductDescriptionRequestProps = {
  title: string
  description: string
  tone?: string
  targetAudience?: string
}

type ProductDescriptionResponseProps = {
  description: string
}

type WCPayMerchantProps = {}

type WCPayQARequestProps = {
  question: string
  store?: string
  country?: string
  withinNewAccountPeriod?: boolean
  currency?: string
  depositDestination?: string
}

type WCPayQAResponseProps = {
  answer: string
  sources: string[]
}
