import { colors } from 'constants/colors';

type ColorType = keyof typeof colors;

enum ReportStatus {
  RESOLVED = 'Resolved',
  INPROGRESS = 'In Progress',
}

interface ReportProps {
  id: string;
  title: string;
  status: ReportStatus;
  createdAt?: string;
  updatedAt?: string;
  attachments?: {
    id: string;
    src: string;
  }[];
  updates?: {
    id: string;
    createdAt: string;
    updatedAt: string;
    message: string;
  }[];
}

interface CardProps {
  backGroundColor?: ColorType;
}
export type { CardProps, ReportProps };
export { ReportStatus };
