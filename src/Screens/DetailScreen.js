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
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import DATA_SET from "../Data/dataset.json";

const detailbgimage = require("../assets/images/detailbgimage.png");
const image_1 = require("../assets/images/cast/cast_1.png");
const image_2 = require("../assets/images/cast/cast_2.png");
const image_3 = require("../assets/images/cast/cast_3.png");
const image_4 = require("../assets/images/cast/cast_4.png");

const backIcon = require("../assets/icons/backIcon.png");
const play_button = require("../assets/icons/play_button.png");
const star = require("../assets/icons/star.png");
const star_active = require("../assets/icons/star_active.png");

const data = DATA_SET.app;

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {},
});
