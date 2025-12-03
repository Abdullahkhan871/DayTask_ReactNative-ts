import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const Splash = () => {
  return (
    <View className="h-screen py-12 flex justify-evenly">
      <Image
        className="mb-8 w-15 h-15 object-contain"
        source={require("../../../assets/logo/logoType.png")}
      />
      <Image source={require("../../../assets/splash/splashHero.png")} />
      <Text className="text-7xl font-medium text-white">
        Manage your Task with <Text className="text-[#FED36A]">DayTask</Text>
      </Text>
      <Pressable
        className="bg-[#FED36A] p-2 py-4"
        onPress={() => console.log("pk")}
      >
        <Text className="text-lg text-center">Let’s Start</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
