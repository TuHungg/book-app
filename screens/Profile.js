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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import { FONTS, COLORS, SIZES, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useForm, Controller } from "react-hook-form";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { apiCurrentUser, apiSigOut, getAllUser } from "../firebase/api/apiUser";
import { useAuthentication } from "../hook/useAuthentication";

const Profile = () => {
  const { colors } = useTheme();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { user } = useAuthentication();
  // console.log(user?.uid);
  const [profile, setProfile] = React.useState();

  React.useEffect(() => {
    const getDb = async () => {
      const result = await apiCurrentUser(user?.uid);
      // alert(result?.email);
      setProfile(result);
    };

    getDb();
  }, [user]);

  const [modalVisible, setModalVisible] = React.useState(false);

  const SigOut = async () => {
    apiSigOut();
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={{ flex: 1, alignItems: "center", margin: 40 }}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Profile</Text>
        </View>

        <Animatable.View
          animation="bounceInUp"
          style={[
            styles.footer,

            {
              width: 300,
              backgroundColor: colors.background,
            },
          ]}
        >
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
          </View>

          <Image
            source={require("../assets/avatar-cat.jpg")}
            resizeMode="contain"
            style={{
              width: 80,
              height: 80,
              borderRadius: 25,
            }}
          />
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}
          >
            Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Your name"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={profile?.username}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              )}
              name="username"
              rules={{ required: true }}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Your password"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              )}
              name="password"
              rules={{ required: true }}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Your password"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              )}
              name="password"
              rules={{ required: true }}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}
          >
            Email
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  // readOnly={false}
                  placeholder="Your email"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  value={profile?.email}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
              )}
              name="email"
              rules={{ required: true }}
            />
          </View>
        </Animatable.View>

        <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => SigOut()}
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
              SigOut
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>My Profile</Text> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    // flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#00000",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
