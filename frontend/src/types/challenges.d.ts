export interface Challenge {
    challenge_id: number;
    title: string;
    start_date: string;
    end_date: string;
    status: string;
}

export interface UserChallenge {
  user_challenge_id: number;
  user_id: number;
  challenge_id: number;
  title: string;
  status: string;
  target_expense: string;
  previous_expense: string;
  total_expense: string;
  progress: string;
}

export interface ChallengeDetail extends Challenge {
  content: string;
  // point: number
  // goal: string
  // howToParticipate: string
}