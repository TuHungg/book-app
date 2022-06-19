import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "../screens/";
import { icons, COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const tabOptions = {
  showLabel: false,

  style: {
    height: "10%",
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.orange : COLORS.lightBlue;

          switch (route.name) {
            case "Home":
              return (
                // <Image
                //   source={icons.dashboard_icon}
                //   resizeMode="contain"
                //   style={{
                //     tintColor: tintColor,
                //     width: 25,
                //     height: 25,
                //   }}
                // />
                <AntDesign name="home" resizeMode="contain" size={28} color={tintColor} />
              );

            case "Search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Notification":
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Profile":
              return (
                // <Image
                //   source={icons.Profile_icon}
                //   resizeMode="contain"
                //   style={{
                //     tintColor: tintColor,
                //     width: 25,
                //     height: 25,
                //   }}
                // />
                <AntDesign name="user" resizeMode="contain" size={28} color={tintColor} />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* <Tab.Screen name="reading" component={Reading} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
