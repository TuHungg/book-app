import React, { useEffect } from "react";
import { ActivityIndicator, AppRegistry, Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { BookDetail, Home, Reading, Profile } from "./index";
import Tabs from "../navigation/tabs";
import { useFonts } from "expo-font";
import RootStackScreen from "./RootStackScreen";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthentication } from "../hook/useAuthentication";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const RootScreen = () => {
  const { user } = useAuthentication();
  const [loading, setLoading] = React.useState(false);

  // alert(user);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(true);
    }, 800);
  }, []);

  const [loaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  if (loading === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#999999"} />
      </View>
    );
  } else {
    return (
      // <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {user ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Home"}
          >
            <Stack.Screen name="Home" component={Tabs} />

            <Stack.Screen
              name="BookDetail"
              component={BookDetail}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="Reading" component={Reading} options={{ headerShown: false }} />

            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
      // </AuthContext.Provider>
    );
  }
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

export default RootScreen;
