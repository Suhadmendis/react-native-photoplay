import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";

import DATA_SET from "../Data/dataset.json";

const backIcon = require("../assets/icons/backIcon.png");

const image_1 = require("../assets/images/movies/image_1.png");
const image_2 = require("../assets/images/movies/image_2.png");
const image_3 = require("../assets/images/movies/image_3.png");
const image_4 = require("../assets/images/movies/image_4.png");

const main_image = require("../assets/images/cast/MichaelPena.png");
const circle_transparent = require("../assets/images/cast/circle_transparent.png");

const data = DATA_SET.app.cast;

const CastScreen = (props) => {

  return (
    <View style={styles.container}>

    </View>
  );
};


export default CastScreen;

const styles = StyleSheet.create({
  container: {},
});
