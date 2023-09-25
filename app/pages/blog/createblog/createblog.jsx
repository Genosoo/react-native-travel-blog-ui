import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />

      <Button title="Upload Image" onPress={pickImage} />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      {/* Add a button to submit the form */}
      <Button
        title="Submit"
        onPress={() => {
          // Handle the submission of title, description, and image here
          console.log("Title:", title);
          console.log("Description:", description);
          console.log("Image:", image);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 16,
  },
});
