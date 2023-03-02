type ProductDescriptionRequest = {
  title: string
  description: string
  tone?: string
  targetAudience?: string
}

type ProductDescriptionResponse = {
  description: string
}
