// import {Image, StyleSheet, Text, View} from 'react-native';

// import MainPage from './screens/MainPage';
// import {NavigationContainer} from '@react-navigation/native';
// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainPage />
//     </NavigationContainer>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   image: {
//     width: '100%',
//     height: 554,
//   },
// });
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import Category from './screens/Category';
// // import HomeScreen from './screens/HomeScreen';
// // import {NavigationContainer} from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // export type RootStackParamList = {
// //   HomeScreen: undefined;
// //   Category: undefined;
// // };

// // const Stack = createNativeStackNavigator<RootStackParamList>();
// // const Tab = createBottomTabNavigator()
// // const App = () => {
// //   return (
// //     <NavigationContainer >
// //       <Stack.Navigator>
// //         <Stack.Screen
// //           name="HomeScreen"
// //           component={HomeScreen}
// //           options={{headerShown: false}}
// //         />
// //         <Stack.Screen
        
// //           name="Category"
// //           component={Category}
// //           options={{headerShown: false}}
// //         />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

// // import React from 'react';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import {NavigationContainer} from '@react-navigation/native';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import HomeScreen from './screens/HomeScreen';
// // import Category from './screens/Category';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import Profile from './screens/Profile';
// // import Favorite from './screens/Favorite';
// // import Cart from './screens/Cart';

// // export type RootStackParamList = {
// //   HomeScreen: undefined;
// //   Category: undefined;
// //   Profile: undefined;
// //   Settings: undefined;
// // };

// // const Stack = createNativeStackNavigator<RootStackParamList>();
// // const Tab = createBottomTabNavigator();

// // const HomeStack = () => {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen
// //         name="HomeScreen"
// //         component={HomeScreen}
// //         options={{headerShown: false}}
// //       />
// //       <Stack.Screen
// //         name="Category"
// //         component={Category}
// //         options={{headerShown: false}}
// //       />
// //     </Stack.Navigator>
// //   );
// // };

// // const ConditionalTabBar = ({ children, routeName }:any) => {
// //   // Use the route name to determine if the current screen is 'HomeScreen'
// //   const isHomeScreen = routeName === 'Home';

// //   return isHomeScreen ? null : children;
// // };
// // const App = () => {
// //   return (
// //     // <NavigationContainer>
// //     //   <Tab.Navigator
// //     //     screenOptions={{headerShown: false}} 
// //     //   >
// //     //     <Tab.Screen
// //     //       name="Home"
// //     //       component={HomeStack}
// //     //       options={{tabBarLabel: 'Home'}} // Customize label or icon as needed
// //     //     />
// //     //     {/* <Tab.Screen
// //     //       name="Profile"
// //     //       component={Profile}
// //     //       options={{tabBarLabel: 'Profile'}} // Example additional tab
// //     //     />
// //     //     <Tab.Screen
// //     //       name="Settings"
// //     //       component={Settings}
// //     //       options={{tabBarLabel: 'Settings'}} // Example additional tab
// //     //     /> */}
// //     //   </Tab.Navigator>
// //     // </NavigationContainer>
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         screenOptions={({ route }) => ({
// //           tabBarIcon: ({ focused, color }) => {
// //             let iconName: string = 'alert-circle-outline';

// //             // Determine which icon to show based on the route name
// //             if (route.name === 'Home') {
// //               iconName = focused ? 'home' : 'home';
// //             } else if (route.name === 'Profile') {
// //               iconName = focused ? 'user' : 'user';
// //             } else if (route.name === 'Favorite') {
// //               iconName = focused ? 'heart' : 'heart-o';
// //             }
// //             else if (route.name === 'Cart') {
// //               iconName = focused ? 'shopping-cart' : 'shopping-cart';
// //             }

// //             // Return the icon component
// //             return <Icon name={iconName} size={24} color={color} />;
// //           },
// //           tabBarActiveTintColor: '#00512C', 
// //           tabBarInactiveTintColor: 'gray', 
          
       
// //         }
      
// //       )}
// //       >
// //         <Tab.Screen
// //           name="Home"
// //           component={HomeStack}
// //           options={{ tabBarLabel: 'Home' }}
// //         />
// //         <Tab.Screen
// //           name="Profile"
// //           component={Profile}
// //           options={{ tabBarLabel: 'Profile' }}
// //         />
// //         <Tab.Screen
// //           name="Favorite"
// //           component={Favorite}
// //           options={{ tabBarLabel: 'Settings' }}
// //         />
// //           <Tab.Screen
// //           name="Cart"
// //           component={Cart}
// //           options={{ tabBarLabel: 'Settings' }}
// //         />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// Import your screens
import HomeScreen from './screens/HomeScreen';  // Main screen
import Calender from './screens/Calender';
import Profile from './screens/Profile';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Message from './screens/Message';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainPage from './screens/MainPage';
import DoctorProfile from './screens/DoctorProfile';
import CallScreen from './screens/CallScreen';






export type RootStackParamList = {
    HomeScreen: undefined;
    Calender: undefined;
    Profile: undefined;
    Message: undefined;

    

  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator()


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fbfbfb',
    },
  };


const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = 'alert-circle-outline';

            if (route.name === 'HomeScreen') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'Calender') {
              iconName = focused ? 'calendar' : 'calendar';
            }
            else if (route.name === 'Message') {
              iconName = focused ? 'envelope' : 'envelope';
            }

          
            return <Icon name={iconName} size={24} color={color} />;
          },
        tabBarActiveTintColor: '#00512C',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 70, // Set the desired height here
          paddingBottom: 10, // Adjust padding for icon/text alignment
          paddingTop: 5,
          backgroundColor: '#fff', // Set a background color if needed
          borderTopWidth: 0, // Remove top border if you want a flat look
          elevation: 0, // Remove shadow/elevation if desired
        },
        tabBarLabelStyle: {
          fontSize: 14, // Adjust font size for tab labels
        },
      })}
    >
     
     <Tab.Screen name="HomeScreen" component={HomeScreen} />
     
     <Tab.Screen name="Calender" component={Calender} />
     <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// Main app component
const App = () => {
  return (
 
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
    <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
    <Stack.Screen name="DoctorProfile" component={DoctorProfile}  options={{ headerShown: false }}/>
    <Stack.Screen name="CallScreen" component={CallScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={MainApp} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
 
   
  );
};

export default App;



