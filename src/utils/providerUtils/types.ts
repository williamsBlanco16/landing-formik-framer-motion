export interface Score {
  score: number;
  ranking: number;
}

export interface Scores {
  [key: string]: Score;
}

export interface Provider {
  provider: string;
  scores: Scores;
}

export interface TopicWeight {
  [key: string]: number;
}

export interface Topic {
  name: string;
  weight: number; 
}