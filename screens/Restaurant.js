import { styleSheets } from "min-document";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";

const Restaurant = ({ route, navigation }) => {
  const [restaurant, setRestaurants] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurants(item);
    setCurrentLocation(currentLocation);
  });

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            padding: SIZES.padding * 2,
            justifyContent: "center",
            paddingTop: 40,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="center"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        {/* restaurant name section */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 20,
          }}
        >
          <View
            style={{
              width: "80%",
              height: "10%",
              backgroundColor: COLORS.lightGray,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              paddingTop: 45,
            }}
          >
            <Text style={{ ...FONTS.h3, paddingBottom: 40 }}>
              {restaurant?.name}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            padding: SIZES.padding * 2,
            justifyContent: "center",
            paddingTop: 40,
            paddingLeft: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderFoodInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        // onScroll
      >
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View style={{ height: SIZES.height * 0.35 }}>
              {/* Food Image */}
              <Image
                source={item.photo}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: "100%",
                }}
              />

              {/* Quantity */}
              <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}
                  onPress={() => editOrder("-", item.menuId, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.lightGray,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...FONTS.h2 }}>5</Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name & Description */}
            <View
              style={{
                width: SIZES.width,
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
              >
                {item.name} - {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* Calories */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Image
                source={icons.fire}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.darygray,
                }}
              >
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Restaurant;
