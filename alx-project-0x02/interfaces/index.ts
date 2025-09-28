export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface PostProps {
  userId: number;
  id: number; 
  title: string;
  body: string; 
}