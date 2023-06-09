import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigation from "./AuthNavigation";
import Postform from "./screens/postscreen";
import PostDetail from "./screens/imageex";
import AllPosts from "./screens/PostImage";

const Stack = createNativeStackNavigator();

function App() {
  return <AuthNavigation />;
}

export default App;
