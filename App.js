import React, { useEffect } from "react";
import { ActivityIndicator, AppRegistry, Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { BookDetail, Home, Reading, Profile } from "./screens/";
import Tabs from "./navigation/tabs";
import { useFonts } from "expo-font";
import RootStackScreen from "./screens/RootStackScreen";
import { FONTS, COLORS, SIZES, icons } from "./constants";
import { AuthContext } from "./store/Context";
import { loginReducer, initiaLoginState } from "./store/Reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthentication } from "./hook/useAuthentication";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 800);
  }, []);

  const [loginState, dispatch] = React.useReducer(loginReducer, initiaLoginState);

  const { user } = useAuthentication();

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        if (userName == "user" && password == "pass") {
          userToken = "code_token";
          try {
            await AsyncStorage.setItem("userToken", userToken);
          } catch (error) {
            console.log(error);
          }
        }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (error) {
          console.log(error);
        }

        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setuseToken("code_token"), setIsLoading(false);
      },
    }),
    []
  );

  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#999999"} />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

export default App;
