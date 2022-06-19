import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import { useForm } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";

import { AuthContext } from "../store/Context";

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>
      <View style={{ flex: 1, alignItems: "center", margin: 40 }}>
        <Image
          source={require("../assets/avatar-cat.jpg")}
          resizeMode="contain"
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>
          <TouchableOpacity
            onPress={() => {
              // loginHandle(data.username, data.password);
              signIn();
            }}
          >
            <LinearGradient colors={["orange", "red"]}>
              <Text
                style={{
                  color: "#fff",
                }}
              >
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              signOut();
            }}
            style={{
              borderColor: COLORS.orange,
              borderWidth: 1,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: COLORS.orange,
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>My Profile</Text> */}
    </View>
  );
};

export default Profile;
