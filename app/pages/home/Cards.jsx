import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Cards({ title, desc, image }) {
  return (
    <View className='w-[200px] m-2 relative flex items-center justify-center bg-white'>
      <Text className="absolute z-10 text-xs font-semibold text-white">{title}</Text>
      <Image blurRadius={10} source={{ uri: image }} className="w-full h-40 rounded-xl"  />
    </View>
  )
}