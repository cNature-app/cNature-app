import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
//import {tabs} from '../data/tab_navigation'
import { useFonts } from "expo-font";
import Explorescreen from "../screens/Explore";
import Post from "./Postpart";
import Postform from "../screens/postscreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import { db, firebase } from "../firebase";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

//import MyProfileScreen from '../screens/MyProfileScreen';
//import PostScreen from '../screens/PostScreen';
function PostStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Postform" component={Postform} />
    </HomeStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const logoColor = (focused) => (focused ? "#00f0a2" : "#fff");

const CustomPostButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -35,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#C9FFA8",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
export default function Tabs({ navigation }) {
  return (
    // <View style={styles.container}>
    //     <FontAwesome style={styles.footerIcons} name="home" size={38} color="#00f0a2" />
    //     <FontAwesome style={styles.footerIcons}name="user" size={38} color="white" />
    // </View>
    // <View>
    //   <Tabbar
    //   tabs={tabs}
    //   tabBarContainerBackground="tomato"
    //   tabBarBackground="#fff"
    //   activeTabBackground="yellow"
    //   labelStyle={{ color: "brown", fontWeight: "600", fontSize: 11 }}
    // />
    // </View>
    <Tab.Navigator
      screenOptions={{
        // title: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          // bottom: 25,
          // left: 10,
          // width: '100%',
          // right: 10,
          elevation: 0,
          backgroundColor: "#044e5e",
          // borderRadius: 15,
          height: 75,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Explorescreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.footerIcons}>
              <FontAwesome name="home" size={38} color={logoColor(focused)} />
              <Text style={{ color: logoColor(focused) }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="plus" size={45} color="#044e5e" />
          ),
          tabBarButton: (props) => <CustomPostButton {...props} />,
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.footerIcons}>
              <FontAwesome name="user" size={38} color={logoColor(focused)} />
              <Text style={{ color: logoColor(focused) }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  // ctr:{
  //     flex: 1,
  // },
  container: {
    backgroundColor: "#044e5e",
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    marginVertical: 735,
  },
  footerIcons: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
