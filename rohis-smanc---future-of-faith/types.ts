
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

// Interface for AI Assistant chat messages
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
