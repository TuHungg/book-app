import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Modal,
  Pressable,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "../screens/";
import { icons, COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { useAuthentication } from "./../hook/useAuthentication";
import * as Animatable from "react-native-animatable";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,

  style: {
    height: "10%",
    backgroundColor: COLORS.black,
  },
};

const case1 = {
  0: { scale: 0.5, translateY: 8, rotate: "0deg" },
  1: { scale: 1.2, translateY: -24, rotate: "360deg" },
};
const case2 = {
  0: { scale: 1.2, translateY: -24, rotate: "360deg" },
  1: { scale: 1, translateY: 8, rotate: "0deg" },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.2 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
};

const circle2 = {
  0: { scale: 1 },
  1: { scale: 0 },
};

const Tabs = () => {
  const { user } = useAuthentication();

  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: "10%",
          position: "absolute",
        },
        tabBarButton: ({ accessibilityState, onPress }) => {
          const focused = accessibilityState.selected;
          const tintColor = focused ? COLORS.white : COLORS.lightBlue;
          // const animate = focused ? "bounceInUp" : "rotate";
          const animate = focused ? case1 : case2;
          const animateCircle = focused ? circle1 : circle2;

          // const animationText = focused
          //   ? {
          //       opacity: 1,
          //       scale: 1,
          //     }
          //   : {
          //       opacity: 0,
          //       scale: 0,
          //     };

          const animationText = focused ? "shake" : "zoomOut";

          switch (route.name) {
            case "Home":
              return (
                <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.centeredView}>
                  <Animatable.View animation={animate} duration={2000} style={styles.btn}>
                    <Animatable.View
                      style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: COLORS.orange,
                        borderRadius: 25,
                      }}
                      animation={animateCircle}
                    />
                    <AntDesign
                      style={
                        {
                          // backgroundColor: COLORS.orange,
                          // borderRadius: 16,
                        }
                      }
                      name="home"
                      resizeMode="contain"
                      size={28}
                      color={tintColor}
                    />
                  </Animatable.View>
                  <Animatable.Text
                    style={{ fontSize: 10, color: COLORS.lightGray, textAlign: "center" }}
                    animation={animationText}
                  >
                    Home
                  </Animatable.Text>
                </TouchableOpacity>
              );

            case "Search":
              return (
                <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.centeredView}>
                  <Animatable.View
                    // ref={viewRef}
                    animation={animate}
                    duration={2000}
                    style={styles.btn}
                  >
                    <Animatable.View
                      style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: COLORS.orange,
                        borderRadius: 25,
                      }}
                      animation={animateCircle}
                    />
                    <Image
                      source={icons.search_icon}
                      resizeMode="contain"
                      style={{
                        tintColor: tintColor,
                        width: 25,
                        height: 25,
                      }}
                    />
                  </Animatable.View>
                  <Animatable.Text
                    style={{ fontSize: 10, color: COLORS.lightGray, textAlign: "center" }}
                    animation={animationText}
                  >
                    Search
                  </Animatable.Text>
                </TouchableOpacity>
              );

            case "Notification":
              return (
                <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.centeredView}>
                  <Animatable.View
                    // ref={viewRef}
                    animation={animate}
                    duration={2000}
                    style={styles.btn}
                  >
                    <Animatable.View
                      style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: COLORS.orange,
                        borderRadius: 25,
                      }}
                      animation={animateCircle}
                    />
                    <Image
                      source={icons.notification_icon}
                      resizeMode="contain"
                      style={{
                        tintColor: tintColor,
                        width: 25,
                        height: 25,
                      }}
                    />
                  </Animatable.View>
                  <Animatable.Text
                    style={{ fontSize: 10, color: COLORS.lightGray, textAlign: "center" }}
                    animation={animationText}
                  >
                    Notice
                  </Animatable.Text>
                </TouchableOpacity>
              );

            case "Profile":
              return (
                <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.centeredView}>
                  <Animatable.View
                    // ref={viewRef}
                    animation={animate}
                    duration={2000}
                    style={styles.btn}
                  >
                    <Animatable.View
                      style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor: COLORS.orange,
                        borderRadius: 25,
                      }}
                      animation={animateCircle}
                    />
                    <AntDesign name="user" resizeMode="contain" size={28} color={tintColor} />
                  </Animatable.View>
                  <Animatable.Text
                    style={{ fontSize: 10, color: COLORS.lightGray, textAlign: "center" }}
                    animation={animationText}
                  >
                    User
                  </Animatable.Text>
                </TouchableOpacity>
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Notification" component={Home} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
