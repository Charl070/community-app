import * as React from 'react';
import { CustomHeader } from 'navigation/CustomHeader';
import { News } from 'screens/News';
import { Button } from 'components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { renderWithProviders } from '../../../tests/utils';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tabs = createNativeStackNavigator();

const getComponent = () => (
  <NavigationContainer>
    <Tabs.Navigator
      screenOptions={{ header: props => <CustomHeader {...props} /> }}>
      <Tabs.Screen
        name="Page Title"
        component={News}
        options={{
          headerLeft: () => (
            <Button variant={'primary'} title={'Search Input'} />
          ),
          headerRight: () => (
            <Button variant={'primary'} title={'Dummy Filter'} />
          ),
        }}
      />
    </Tabs.Navigator>
  </NavigationContainer>
);

describe('Test CustomHeader component', () => {
  it('It renders the CustomHeader component', async () => {
    const { getByTestId } = renderWithProviders(getComponent());
    const header = await getByTestId('CustomHeader');
    const title = await getByTestId('TitleView');
    expect(header).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
