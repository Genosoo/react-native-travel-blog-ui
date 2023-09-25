import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/home';
import Blog from './pages/blog/index';
import Maps from './pages/maps/maps';

import About from './pages/about/about';
import Contact from './pages/contact/contact';


const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor:"#79AC78"},
        headerTintColor: '#e4fde4',
        headerTitleStyle: {
            fontWeight: 'bold',
            textTransform:"uppercase"
          },
          headerStatusBarHeight:3,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}