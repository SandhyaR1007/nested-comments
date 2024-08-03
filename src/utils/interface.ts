export interface Comment {
  id: string;
  text: string;
  likes: number;
  timestamp: string;
  parent?: string;
  replies: Comment[];
}
