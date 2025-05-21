export interface RewardTransaction {
  reward_transaction_id: number
  status: number
  redeemed_at: string
  expire_at: string
  reward: {
    reward_id: number
    name: string
    description: string
    cost: number
    thumbnail?: string | null
    images: string[]
  }
}