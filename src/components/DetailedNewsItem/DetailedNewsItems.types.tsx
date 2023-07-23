interface DetailedNewsProp {
  id: string;
  title: string;
  description: string;
  date: string;
  attachments?: { id: string; src: string; fileName?: string }[];
  onPress?(payload: unknown): void;
}

export type { DetailedNewsProp };
