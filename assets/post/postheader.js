import { View, Text, StyleSheet } from "react-native";
import React from "react";

const postheader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Post Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default postheader;
