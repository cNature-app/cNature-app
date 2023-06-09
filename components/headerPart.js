// import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.two_icon}>
            <Image style={styles.logo} source={require('../imgAssests/menu.png')} />
            </TouchableOpacity> */}
      <FontAwesome
        style={{ padding: 15, color: "#004a5e" }}
        name="bars"
        size={24}
        color="black"
      />
      <Text style={styles.explore}>Explore</Text>
      {/* <TouchableOpacity>
              <Image style={styles.search_logo} source={require('../imgAssests/Vector.png')} />
            </TouchableOpacity> */}
      <FontAwesome
        style={{ padding: 15, color: "#004a5e" }}
        name="search"
        size={24}
        color="black"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 0,
    backgroundColor: "#C9FFA8",
    // height: 63,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // marginTop:0,
  },
  explore: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#004a5e",
    borderColor: "black",
  },
  logo: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  search_logo: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
  },
  two_icon: {
    flexDirection: "row",
  },
});
