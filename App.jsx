import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

// we can have a stack attached to a Tab
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator> */}
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name == 'Screen1') {
              iconName = 'albums';
            } else if (route.name == 'Screen2') {
              iconName = 'alert-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tabs.Screen name="Screen1" component={Screen1} />
        <Tabs.Screen name="Screen2" component={Screen2} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(App);
