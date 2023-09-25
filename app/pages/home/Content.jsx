import { View, Text } from 'react-native'
import React from 'react'

export default function detail() {
  return (
    <View className="p-4 flex-col bg-[#f0fff2] m-3 rounded-xl">
         <Text className="text-lg font-bold tracking-wide text-[#618264]">Explore the Philippines! </Text>
         <Text className="text-justify text-gray-700 tracking-wide text-xs leading-5">
         Greetings, fellow adventurers, and a warm welcome to "Explore the Philippines"!
          We're thrilled to have you join us on a virtual journey through the 
          enchanting beauty and rich culture of the Philippines.
         This blog is your passport to discovering the hidden gems,
          iconic landmarks, and breathtaking landscapes that make 
          the Philippines a traveler's paradise. Whether you're a seasoned
           explorer or planning your very first adventure, we're here to be your guide and inspiration.
         </Text>
      </View>
  )
}