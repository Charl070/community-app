import React from 'react';
import {
  TouchableCard,
  NameView,
  SizeView,
  TouchableButton,
} from './FileCard.styles';
import { FileCardProps } from './FileCard.types';
import { Typography } from 'components/Typography';
import { PaperOutline, StarFilled, StarOutline } from 'assets/svg';

const FileCard: React.FC<FileCardProps> = ({ ...props }) => (
  <TouchableCard onPress={props.onPress} testID="fileCard">
    <TouchableButton onPress={props.onFavourited} testID="fileFavButton">
      {props.isFavourite ? (
        <StarFilled height={24} width={24} testID="starFilled" />
      ) : (
        <StarOutline height={24} width={24} testID="starFilled" />
      )}
    </TouchableButton>

    <NameView>
      <PaperOutline height={60} width={60} />
      <Typography weight="medium" variant="text3">
        {props.name}
      </Typography>
    </NameView>

    <SizeView>
      <Typography variant="text3">File Size: {props.fileSize}</Typography>
    </SizeView>
  </TouchableCard>
);

export { FileCard };
