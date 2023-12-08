import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Upcoming_Meds from './src/screens/Upcoming_Meds';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Upcoming Meds"
        component={Upcoming_Meds}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            size = focused ? 25 : 20;
            return <Ionicons name={'person'} color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
