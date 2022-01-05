import React from 'react';
import Home from './screens/Home';
import Search from './screens/Search';
import Explore from './screens/Explore';
import New from './screens/New';
import VideoPlayer from './screens/VideoPlayer';
import Subscribe from './screens/Subscribe';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCompass,
  faHome,
  faPlusCircle,
  faWindowRestore,
  faFileVideo,
} from '@fortawesome/free-solid-svg-icons';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Libray from './screens/Libray';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
  },
};

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
  },
};

const RootHome = () => {
  const {colors} = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={() => ({
        tabBarIcon: () => {},
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'gray',
      })}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faHome} size={24} color="grey" />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faCompass} size={24} color="grey" />
          ),
        }}
      />
      <Tabs.Screen
        name="New"
        component={New}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faPlusCircle} size={26} color="grey" />
          ),
        }}
      />
      <Tabs.Screen
        name="Suscribe"
        component={Subscribe}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faFileVideo} size={26} color="grey" />
          ),
        }}
      />
      <Tabs.Screen
        name="Libray"
        component={Libray}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesomeIcon icon={faWindowRestore} size={26} color="grey" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDefaultTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="RootHome" component={RootHome} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
