import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { FileCard } from 'components/FileCard';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockProps = {
  name: 'Estate-rules.jpg',
  fileSize: '237Kb',
  onFavourited: () => null,
  onPress: () => null,
  isFavourite: false,
};

const getComponent = () => <FileCard {...mockProps} />;

describe('Testing base FileCard component', () => {
  it('renders name and fileSize', async () => {
    const { getByText } = render(getComponent());
    const name = await getByText('Estate-rules.jpg');
    const fileSize = await getByText('File Size: 237Kb');
    expect(name).toBeTruthy();
    expect(fileSize).toBeTruthy();
  });

  it('fires callback when Card is pressed', async () => {
    const mockFunc = jest.fn();
    const { getByTestId } = render(
      <FileCard {...mockProps} onPress={mockFunc} />,
    );

    const toPress = getByTestId('fileCard');
    fireEvent(toPress, 'press');
    expect(mockFunc).toHaveBeenCalled();
  });

  it('fires callback when Favourite button is pressed', async () => {
    const mockFunc = jest.fn();
    const { getByTestId } = render(
      <FileCard {...mockProps} onFavourited={mockFunc} />,
    );

    const toPress = getByTestId('fileFavButton');
    fireEvent(toPress, 'press');
    expect(mockFunc).toHaveBeenCalled();
  });

  it('shows the filled star component if favourited', async () => {
    const { getByTestId } = render(
      <FileCard {...mockProps} isFavourite={true} />,
    );

    const item = getByTestId('starFilled');
    expect(item).toBeTruthy();
  });
});
