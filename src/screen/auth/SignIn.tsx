import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

interface FormType {
  name: string;
  email: string;
}

const SignIn = () => {
  const [form, setForm] = useState<FormType>({ name: "", email: "" });

  const { name, email } = form;

  const [showPassword, setShowPassword] = useState(false);

  function handleChange() {}
  function handleSubmit() {}
  function handleSubmitWithGoogle() {}

  return (
    <View className="h-full flex gap-8">
      <View className="flex items-center mt-10 mb-5">
        <Image
          source={require("../../../assets/logo/logo.png")}
          className="h-24 w-24 object-cover"
        />
      </View>
      <View>
        <Text className="text-white text-4xl ">Welcome Back</Text>
      </View>
      <View className="flex gap-6">
        <View className="flex gap-4">
          <Text className="font-normal text-lg text-[#8CAAB9]">
            Email Address
          </Text>
          <View className="relative">
            <TextInput
              className="w-full p-2 py-4 pl-16 bg-[#455A64] text-lg font-semibold text-white placeholder:text-white "
              placeholder="fazzzil72@gmail.com"
              value={name}
            />
            <View className="h-full flex justify-center absolute left-6 top-0">
              <Image
                source={require("../../../assets/icons/usertag.png")}
                className="h-6 w-6"
              />
            </View>
          </View>
        </View>
        <View className="flex gap-4">
          <Text className="font-normal text-lg text-[#8CAAB9]">Password</Text>
          <View className="relative">
            <TextInput
              className="w-full p-2 py-4 pl-16 pr-16 bg-[#455A64] text-lg font-semibold text-white placeholder:text-white "
              placeholder="00000000000"
              value={name}
            />
            <View className="h-full flex justify-center absolute left-6 top-0">
              <Image
                source={require("../../../assets/icons/lock1.png")}
                className="h-6 w-6"
              />
            </View>
            <View className="h-full flex justify-center absolute right-6 top-0">
              <Image
                source={require("../../../assets/icons/eyeslash.png")}
                className="h-6 w-6"
              />
            </View>
          </View>
          <View>
            <Text className="font-normal text-right text-lg text-[#8CAAB9] mb-2">
              Forgot Password?
            </Text>
          </View>
        </View>
        <Pressable
          className="bg-[#FED36A] p-2 py-4 mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-lg text-center font-semibold">Log In</Text>
        </Pressable>
      </View>
      <View className="flex-row items-center my-4">
        <View className="flex-1 h-[1px] bg-[#8CAAB9]" />
        <Text className="px-4 text-[#8CAAB9] text-center">
          Or continue with
        </Text>
        <View className="flex-1 h-[1px] bg-[#8CAAB9]" />
      </View>
      <Pressable className="border-2 border-white p-2 py-4 mt-4 flex flex-row items-center justify-center gap-3">
        <Image
          source={require("../../../assets/icons/google.png")}
          className="h-6 w-6"
        />
        <Text className="text-white text-lg text-center font-semibold">
          Google
        </Text>
      </Pressable>
      <View className="w-full">
        <Text className="text-center text-lg text-[#8CAAB9]">
          Don’t have an account?{" "}
          <Text className="text-center text-lg text-[#FED36A]">Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
