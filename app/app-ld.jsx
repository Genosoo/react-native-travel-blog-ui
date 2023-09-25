import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/home/home';
import About from './pages/about/about';
import Blog from './pages/blog';
import Contact from './pages/contact/contact';
import Header from './components/Header';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer independent={true} >
        <Header/>
        <Tab.Navigator 
          activeColor="#435334"
          inactiveColor="#f6f6f6"
          barStyle={{ backgroundColor: '#9EB384' }}
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            
          }}>
            <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}  />
            <Tab.Screen name="Blog" component={Blog} 
            options={{
              tabBarLabel: 'Blog',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="application" color={color} size={26} />
              ),
            }}/>
            <Tab.Screen name="About" component={About}
            options={{
              tabBarLabel: 'About',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book-open" color={color} size={26} />
              ),
            }} />
            <Tab.Screen name="Contact" component={Contact} 
            options={{
              tabBarLabel: 'Contact',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cellphone" color={color} size={26} />
              ),
            }}/>
            
          </Tab.Navigator>
      </NavigationContainer>
  );
}