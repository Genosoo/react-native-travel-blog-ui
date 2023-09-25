import { ImageBackground, Text } from 'react-native'
import React from 'react'

const image = { uri: "https://images.pexels.com/photos/16468797/pexels-photo-16468797/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=1600"}
 
export default function imageHeader() {
    

  return (
    <ImageBackground source={image} className="m-3 p-3">
    <Text className="text-2xl text-center uppercase text-white shadow font-bold p-3">Welcome Travelers!</Text>
  </ImageBackground>
  )
}