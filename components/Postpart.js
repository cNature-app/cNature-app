import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { posts } from "../data/posts";
const numColumns = 2;
import { useState, useEffect } from "react";
import { db, firebase } from "../firebase";
export default function Post({ navigation }) {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const querySnapshot = await db.collectionGroup("posts").get();

      const data = [];
      querySnapshot.forEach((doc) => {
        const postData = doc.data();

        data.push(postData);
        // // Check if postData is an array
        // if (Array.isArray(postData)) {
        //   postData.forEach((post) => {
        //     data.push(post);
        //   });
        // }
      });

      setPosts(data);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  renderItem = ({ item, index }) => (
    <View style={styles.imgContainer} key={index}>
      <Image source={{ uri: item.image }} style={styles.postcss} />
      <View style={styles.imgTxtContainer}>
        <Text style={styles.imgTxt}>{item.species}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.postContainer}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        numColumns={numColumns}
        snapToAlignment="start"
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.postContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 15,
    // marginLeft: 30,
    margin: 10,
    marginBottom: 7,
    marginLeft: 15,
    position: "relative",
  },
  imgTxt: {
    color: "white",
    fontSize: 15,
  },
  imgTxtContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(28, 28, 28, 0.7)",
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  postContainer: {
    marginBottom: 250,
  },
  postcss: {
    width: 170,
    height: 170,
    borderRadius: 15,
    borderWidth: 10,
  },
});

{
  /* {
          posts.map((post, index)=>(
            <View key={index}>
              <Image source={{uri: post.img}} style={styles.postcss} />
              <Image source={{uri: post.img}} style={styles.postcss} />
            </View>
          )
          )
      } */
}
