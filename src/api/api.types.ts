interface Example {
  data: {
    sample: string;
    message: string[];
  };
}

interface File {
  id: number;
  name: string;
  fileSize: string;
  isFavourite?: boolean;
  isRecent: boolean;
  lastAccessed: Date;
}

interface Files {
  data: File[];
}
interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  attachments: {
    id: string;
    src: string;
    fileName: string;
  }[];
}

interface News {
  data: NewsItem[];
}

enum ReportStatus {
  RESOLVED = 'Resolved',
  INPROGRESS = 'In Progress',
}

interface Report {
  id: string;
  title: string;
  status: ReportStatus;
  createdAt: string;
  updatedAt: string;
  attachments: {
    id: string;
    src: string;
  }[];
  updates: {
    id: string;
    createdAt: string;
    updatedAt: string;
    message: string;
  }[];
}

interface Reports {
  data: Report[];
}

export type { Example, File, Files, News, NewsItem, Reports };
