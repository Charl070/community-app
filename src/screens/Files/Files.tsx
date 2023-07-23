import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Typography } from 'components/Typography';
import { StyledScrollView, StyledSafeAreaView } from '../common.styles';
import { FileCard } from 'components/FileCard';
import { File } from 'api/api.types';
import { CardProps, ScreenProps, SubheaderProps } from './File.types';
import {
  ActivityView,
  StyledCardLayout,
  StyledCardView,
  HeadingView,
} from './Files.styles';
import { useGetFiles, useFileUpdate } from './useFiles';

const Subheader: React.FC<SubheaderProps> = ({ children }) => {
  return (
    <HeadingView>
      <Typography variant="text1" weight="medium">
        {children}
      </Typography>
    </HeadingView>
  );
};

export const Card: React.FC<CardProps> = ({ file, handleFavourite }) => {
  return (
    <StyledCardView>
      <FileCard
        name={file.name}
        fileSize={file.fileSize}
        isFavourite={file.isFavourite}
        onPress={() => null}
        onFavourited={() => handleFavourite(file)}
      />
    </StyledCardView>
  );
};

const Files = ({ route }: ScreenProps): JSX.Element => {
  const { data, isLoading } = useGetFiles();
  const udpateFile = useFileUpdate();

  const files = data?.data || [];

  const searchQuery = route?.params?.searchQuery;

  /**
   * Filter files by searchQuery
   */
  const filteredFiles = searchQuery
    ? files.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : files;

  /**
   * Filtering for favourties and recent files
   * */
  const favourites = filteredFiles?.filter(file => file.isFavourite);
  const recentFiles = filteredFiles?.filter(file => file.isRecent);

  const handleFavourite = (file: File) => {
    const newFile = { ...file, isFavourite: !file.isFavourite };
    udpateFile.mutate(newFile);
    return null;
  };

  return (
    <StyledSafeAreaView testID="FilesScreen">
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        {isLoading ? (
          <ActivityView testID="loadingIndicator">
            <ActivityIndicator />
          </ActivityView>
        ) : (
          <>
            {favourites?.length > 0 && (
              <>
                <Subheader>Favourites</Subheader>
                <StyledCardLayout testID="favouritesArea">
                  {favourites.map(file => (
                    <Card
                      key={`${file.id}${file.name}`}
                      file={file}
                      handleFavourite={handleFavourite}
                    />
                  ))}
                </StyledCardLayout>
              </>
            )}

            {recentFiles?.length > 0 && (
              <>
                <Subheader>Recent</Subheader>
                <StyledCardLayout testID="recentsArea">
                  {recentFiles.map(file => (
                    <Card
                      key={`${file.id}${file.name}`}
                      file={file}
                      handleFavourite={handleFavourite}
                    />
                  ))}
                </StyledCardLayout>
              </>
            )}
          </>
        )}
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default Files;
