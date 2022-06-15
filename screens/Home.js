import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, FONTS, icons, SIZES } from "../constants";
import { categoriesData, myBooksData, profileData } from "../constants/data.js";
import CategoriesSection from "../Components/Home/CategoriesSection";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View style={{ flex: 1, borderLeftColor: COLORS.lightBlue, borderLeftWidth: 1 }}></View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1, marginTop: 30 }}>
          <View style={{ flex: 1, flexDirection: "row", marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>Hello, </Text>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>{profile.name}</Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            // backgroundColor: COLORS.primary,
            // height: 60,
            // width: 60,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EvilIcons name="pencil" size={40} color="black" />

            <View
              style={{
                marginLeft: "auto",
                // width: 100,
                // height: 80,
                // alignItems: "center",
                // justifyContent: "center",

                // backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={require("../assets/avatar-cat.jpg")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>
          </View>

          {/* <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 25,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>

            <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>
              {profile.point} point
            </Text>
          </View> */}
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={{ flex: 1, justifyContent: "center", padding: SIZES.padding }}>
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Claim */}
          <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("Claim")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("Get Point")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity style={{ flex: 1 }} onPress={() => console.log("My Card")}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBookSection(myBooks) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate("BookDetail", {
              book: item,
            })
          }
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View style={{ marginTop: SIZES.radius, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.clock_icon}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
            <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightBlue }}>
              {item.lastRead}
            </Text>

            <Image
              source={icons.page_icon}
              style={{
                marginLeft: SIZES.radius,
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
            <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightBlue }}>
              {item.completion}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.black }}>My Book</Text>

          <TouchableOpacity onPress={() => console.log("See More")}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightBlue,
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              see more
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>
      {/* Header Section */}
      <View style={{ height: 100 }}>
        {renderHeader(profile)}
        {/* {renderButtonSection()} */}
      </View>

      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
        {/* <View>{renderMyBookSection(myBooks)}</View> */}

        {/* Categories Section */}
        <CategoriesSection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
