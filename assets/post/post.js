import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Post = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [species, setSpecies] = useState("");
  const [subspecies, setsubSpecies] = useState("");

  const selectImageFromCamera = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Camera permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
    }
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSpeciesChange = (text) => {
    setSpecies(text);
  };
  const handlesubSpeciesChange = (text) => {
    setsubSpecies(text);
  };

  const handlePost = () => {
    // Perform post logic here, e.g., send the image, description, species, and location to the server
    console.log("Image:", image);
    console.log("Description:", description);
    console.log("Species:", species);
    console.log("subSpecies:", subspecies);

    // Reset state after posting
    setImage(null);
    setDescription("");
    setSpecies("");
    setsubSpecies("");
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <AntDesign name="arrowleft" size={35} color="black" />
        <Text style={styles.headerText}>Post</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity onPress={selectImageFromCamera}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <AntDesign
                name="camera"
                size={50}
                color="black"
                style={styles.cameraIcon}
              />
            )}
          </TouchableOpacity>
        </View>
        {/* <View style={{ flex: 1, flexDirection: "row" }}>
          <AntDesign name="infocirlceo" size={24} color="black" /> */}
        <TextInput
          style={[styles.speciesInput]}
          placeholder="Enter species"
          value={species}
          onChangeText={handleSpeciesChange}
        />
        <TextInput
          style={[styles.speciesInput]}
          placeholder="Enter sub specie name"
          value={subspecies}
          onChangeText={handlesubSpeciesChange}
        />
        {/* </View> */}
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter description"
          value={description}
          onChangeText={handleDescriptionChange}
          multiline
        />

        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "lightgreen",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    paddingLeft: 130,
    fontWeight: "bold",
    fontSize: 25,
  },
  container: {
    flex: 1,

    alignItems: "flex-start",
    marginTop: 90,
    marginLeft: 20,
    marginBottom: 20,
    // justifyContent: "center",
    gap: 25,
  },
  cameraContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 20,
    // backgroundColor: "grey",
    // width: 80,
    // height: 100,
    // borderRadius: 10,
  },
  cameraIcon: {
    marginRight: 10,
  },
  selectImageText: {
    fontSize: 18,
    color: "#007AFF",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  descriptionInput: {
    width: "80%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
  },
  speciesInput: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
  },
  googlePlacesContainer: {
    flex: 1,
    width: "80%",
    marginBottom: 20,
  },
  googlePlacesListView: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#FFF",
  },
  googlePlacesTextInput: {
    height: 40,
    borderWidth: 0,
    borderRadius: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  locationButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  locationButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  postButton: {
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  postButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Post;
