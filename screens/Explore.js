import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import { posts } from "../data/posts";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// simport MyProfileScreen from "./MyProfileScreen
import Header from "../components/headerPart";
import Post from "../components/Postpart";
import Tabs from "../components/Tabs";
import { useState, useEffect } from "react";

//import { Divider } from 'react-native-elements';
export default function Explorescreen() {
  return (
    <>
      <Header />
      <Post />
      {/* <NavigationContainer>
        <Tabs />
      </NavigationContainer> */}
    </>
  );
}
