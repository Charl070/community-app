export type BottomNavParamList = {
  News: { searchQuery: string } | undefined;
  Calendar: undefined;
  Files: { searchQuery: string } | undefined;
  Report: undefined;
  NewsDetails:
    | {
        id: string;
        date: string;
        title: string;
        description: string;
        attachments?: { id: string; src: string; fileName?: string }[];
      }
    | undefined;
};
