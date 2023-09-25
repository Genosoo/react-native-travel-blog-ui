import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateBlog from './createblog/createblog';
import List from './List';

const Tab = createMaterialTopTabNavigator();

export default function TabBLog() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blogs" component={List} />
      <Tab.Screen name="Create Blog" component={CreateBlog} />
    </Tab.Navigator>
  );
}