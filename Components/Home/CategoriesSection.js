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

import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { profileData, myBooksData, categoriesData } from "../../constants/data";
import { Feather } from "@expo/vector-icons";

import { apiGetBook } from "../../firebase/api/apiBook";

import { BookContext } from "../../store/BookContext";

const CategoriesSection = ({ navigation }) => {
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  const [stateBooks, dispatch] = React.useContext(BookContext);

  // function renderCategoryHeader() {
  //   const renderItem = ({ item }) => {
  //     return (
  //       <TouchableOpacity
  //         style={{ flex: 1, marginRight: SIZES.padding }}
  //         onPress={() => setSelectedCategory(item.id)}
  //       >
  //         {selectedCategory == item.id && (
  //           <Text style={{ ...FONTS.h2, color: COLORS.lightOrange2 }}>{item.categoryName}</Text>
  //         )}
  //         {selectedCategory != item.id && (
  //           <Text style={{ ...FONTS.h2, color: COLORS.lightBlue }}>{item.categoryName}</Text>
  //         )}
  //       </TouchableOpacity>
  //     );
  //   };

  //   return (
  //     <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
  //       <FlatList
  //         data={categories}
  //         showsHorizontalScrollIndicator={false}
  //         renderItem={renderItem}
  //         keyExtractor={(item) => `${item.id}`}
  //         horizontal
  //       />
  //     </View>
  //   );
  // }

  function renderCategoryData() {
    // var books = [];

    // let selectedCategoryBooks = categories.filter((a) => a.id == selectedCategory);

    // if (selectedCategoryBooks.length > 0) {
    //   books = selectedCategoryBooks[0].books;
    // }

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() =>
              navigation.navigate("BookDetail", {
                book: item.value,
              })
            }
          >
            {/* Book Cover */}
            {
              <Image
                source={{ uri: item.value.imageUrl }}
                // source={item.value.imageUrl}
                resizeMode="cover"
                style={{ width: 100, height: 150, borderRadius: 10 }}
              />
            }

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              {/* Book name and author */}
              <View>
                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h3, color: COLORS.black }}>
                  {item.value.name}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightBlue }}>{item.value.author}</Text>
              </View>

              {/* Book Info */}
              <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightBlue,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightBlue,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.value.page}
                </Text>

                <Feather
                  name="eye"
                  resizeMode="contain"
                  size={20}
                  style={{
                    color: COLORS.lightBlue,
                  }}
                />
                {/* <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightBlue,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.readed}
                </Text> */}
              </View>

              {/* Genre */}
              {/* <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
                {item.genre.includes("Adventure") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: 4,
                      // backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.h5, color: COLORS.lightOrange2 }}>#Adventure</Text>
                  </View>
                )}
                {item.genre.includes("Romance") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: 4,
                      // backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.h5, color: COLORS.lightOrange2 }}>#Romance</Text>
                  </View>
                )}
                {item.genre.includes("Drama") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: 4,
                      // backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.h5, color: COLORS.lightOrange2 }}>#Drama</Text>
                  </View>
                )}
              </View> */}
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 15 }}
            onPress={() => console.log("Bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightBlue,
              }}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
        <FlatList
          data={stateBooks}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <View style={{ marginTop: SIZES.padding }}>
      {/* <View>{renderCategoryHeader()}</View> */}
      <View>{renderCategoryData()}</View>
    </View>
  );
};

export default CategoriesSection;
