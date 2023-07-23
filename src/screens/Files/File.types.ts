import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomNavParamList } from 'navigation/BottomNavigator';
import { File } from 'api/api.types';

interface SubheaderProps {
  children: string;
}

interface CardProps {
  file: File;
  handleFavourite: (file: File) => null;
}

type ScreenProps = BottomTabScreenProps<BottomNavParamList, 'Files'>;

export type { CardProps, ScreenProps, SubheaderProps };
