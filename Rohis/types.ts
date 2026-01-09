export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Pillar {
  name: string;
  arabic: string;
  description: string;
}

/* Chat message interface for Noor AI Assistant */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}