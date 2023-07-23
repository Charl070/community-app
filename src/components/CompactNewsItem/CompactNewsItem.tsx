type ButtonVariant = 'primary' | 'secondary';

interface CompactNewsItemProps {
  date: string;
  title: string;
  description: string;
  attachments?: { id: string; src: string; fileName?: string }[];
  onPress?(payload: unknown): void;
}

export type { CompactNewsItemProps, ButtonVariant };
