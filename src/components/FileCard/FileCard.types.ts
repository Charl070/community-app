interface FileCardProps {
  name: string;
  fileSize: string;
  isFavourite?: boolean;
  onFavourited: () => null;
  onPress: () => null;
}

export type { FileCardProps };
