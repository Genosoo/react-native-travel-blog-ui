import { View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';

import App from "./app"
import Footer from "./components/Footer";

export default function Main() {
  return (
    <NavigationContainer independent={true}>
      <App />
      <Footer />
    </NavigationContainer>
  )
}