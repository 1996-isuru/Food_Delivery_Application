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
            <Text style={{ ...FONTS.h3, paddingBottom: 40 }}>{restaurant?.name}</Text>
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

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
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
