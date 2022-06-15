import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const Reading = ({ route, navigation }) => {
  const [book, setBook] = React.useState(null);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

  const indicator = new Animated.Value(0);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  // const myArray = new Array();
  // console.log(book.description);
  // console.log(myArray.push(book?.description));

  const renderBook = () => {
    return (
      <>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={book?.lightOrange}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: SIZES.radius,
              height: 80,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: SIZES.base }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={icons.back_arrow_icon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "black",
                }}
              />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ ...FONTS.h3, color: COLORS.lightOrange2 }}>Chapter 1</Text>
            </View>

            <TouchableOpacity
              style={{ marginRigth: SIZES.base }}
              onPress={() => console.log("Click More")}
            >
              <Image
                source={icons.more_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: "black",
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "row", padding: 10, marginTop: 40 }}>
            {/* Description */}
            <ScrollView
              contentContainerStyle={{ paddingLeft: 15 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onContentSizeChange={(width, height) => {
                setScrollViewWholeHeight(height);
              }}
              onLayout={({
                nativeEvent: {
                  layout: { x, y, width, height },
                },
              }) => {
                setScrollViewVisibleHeight(height);
              }}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: indicator } } }], {
                useNativeDriver: false,
              })}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: SIZES.padding,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.black,
                    marginBottom: SIZES.padding,
                  }}
                >
                  {book?.bookName}
                </Text>
              </View>
              <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>{book?.description}</Text>
            </ScrollView>
          </View>
        </View>
      </>
    );
  };

  return <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>{renderBook()}</View>;
};

export default Reading;
