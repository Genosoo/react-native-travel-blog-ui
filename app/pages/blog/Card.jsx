import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useColorScheme } from "nativewind";

export default function TravelCard({ title, desc, image }) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const { colorScheme } = useColorScheme();
  // Function to toggle the "Read More" state
  const toggleReadMore = () => {
    setShowFullDesc(!showFullDesc);
  };

  // Truncate the description to 30 words or less
  const truncatedDesc = showFullDesc
    ? desc
    : desc.split(" ").slice(0, 30).join(" ");

  return (
    <View className="m-3 p-5 bg-[#D0E7D2] rounded-xl ">
      <Text className="text-base font-semibold py-2 text-[#163218]">{title}</Text>
      <Image source={{ uri: image }} className="w-full h-40" />
      <Text className="leading-4 text-justify py-3">{truncatedDesc}</Text>
      {/* Render "Read More" button if description is truncated */}
      <View className="flex items-start">
        {desc.split(" ").length > 30 && (
          <TouchableOpacity
            onPress={toggleReadMore}
            className=" bg-[#618264] text-[#CEDEBD] p-2 px-3  rounded-md"
          >
            <Text className="text-white ">
              {showFullDesc ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
