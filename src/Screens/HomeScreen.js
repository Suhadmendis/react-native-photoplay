import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import DATA_SET from "../Data/dataset.json";
import { FlatList } from "react-native";

const doraMainImage = require("../assets/images/doramainImage.png");
const image_1 = require("../assets/images/1.png");
const image_2 = require("../assets/images/2.png");
const image_3 = require("../assets/images/3.png");
const image_4 = require("../assets/images/4.png");

const star = require("../assets/icons/star.png");
const star_active = require("../assets/icons/star_active.png");

const data = DATA_SET.app;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
