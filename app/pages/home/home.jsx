import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import ImageHeader from "./Header";
import Navbar from "./Topbar";
import Content from './Content'
import List from "./List";

export default function Home({ navigation }) {
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(item.route)}
    >
      
      <Text style={styles.text}>{item.key}</Text>
    </TouchableOpacity>
  );



   return (
    <View className="bg-white"> 
      <Navbar renderItem={renderItem} />
      <ImageHeader/>
      <Content />
      <View>
        <Text className="p-3 text-base font-semibold text-[#618264]">Tourest Spot</Text>
        <List />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

button: {
  backgroundColor:"#79AC78",
  padding: 5,
  width:80,
  margin: 4,
  borderRadius: 20,
  display:"flex",
  alignItems:"center",
},
text: {
  color: "white",
  fontSize: 16,
},


});