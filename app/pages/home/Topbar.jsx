import { View, FlatList, StyleSheet } from 'react-native'

const data = [
    { key: "Blog", route: "Blog" },
    { key: "Map", route: "Map" },
    { key: "About", route: "About" },
    { key: "Contact", route: "Contact" },
    { key: "News", route: "News" },
  ];
  

export default function navbar({renderItem}) {

  
  return (
    <View style={styles.listContainer}>
    <FlatList
      className="py-3"
      data={data}
      renderItem={renderItem}
      horizontal={true} // Set this to true if you want horizontal buttons
      keyExtractor={(item) => item.key}
    />
</View>
  )
}


const styles = StyleSheet.create({
    listContainer: {
    fontFamily:"Quicksand_400Regular",
    flexDirection: "row", // To make buttons display horizontally
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    backgroundColor:"#D0E7D2",
  }
  
});