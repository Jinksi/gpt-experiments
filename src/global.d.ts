type ProductDescriptionRequestProps = {
  title: string
  description: string
  tone?: string
  targetAudience?: string
}

type ProductDescriptionResponseProps = {
  description: string
}

type WCPayQARequestProps = {
  question: string
  store?: string
  country?: string
  currency?: string
  supportedCurrencies?: string[]
  locale?: string
  isLive?: boolean
  hasPendingRequirements?: boolean
  hasOverdueRequirements?: boolean
  depositDestination?: string
  instantDepositsEligible?: boolean
  deposits?: {
    status?: string
    interval?: 'daily' | 'weekly' | 'monthly' | 'manual'
    weekly_anchor?: string
    monthly_anchor?: number
    delay_days?: number
    completed_waiting_period?: boolean
  }
  has_active_loan?: boolean
  has_previous_loans?: boolean
}

type WCPayQAResponseProps = {
  answer: string
  sources: string[]
}
