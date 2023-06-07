import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

const Postform = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [species, setSpecies] = useState("");
  const [subspecies, setsubSpecies] = useState("");
  const [location, setLocation] = useState(null);

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

  const selectImageFromGallery = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Gallery permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
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
  const handleLocationChange = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
  };

  const handlePost = () => {
    // Perform post logic here, e.g., send the image, description, species, and location to the server
    console.log("Image:", image);
    console.log("Description:", description);
    console.log("Species:", species);
    console.log("subSpecies:", subspecies);
    console.log("Location:", location);

    // Reset state after posting
    setImage(null);
    setDescription("");
    setSpecies("");
    setsubSpecies("");
    setLocation(null);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.headerContainer}>
          <AntDesign name="arrowleft" size={35} color="black" />
          <Text style={styles.headerText}>Post</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.cameraContainer}>
            <TouchableOpacity onPress={selectImageFromCamera}>
              <AntDesign
                name="camera"
                size={50}
                color="black"
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImageFromGallery}>
              <AntDesign
                name="folderopen"
                size={50}
                color="black"
                style={styles.folderIcon}
              />
            </TouchableOpacity>
          </View>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <TextInput
            style={[styles.speciesInput]}
            placeholder="Enter specie name"
            value={species}
            onChangeText={handleSpeciesChange}
          />
          <TextInput
            style={[styles.speciesInput]}
            placeholder="Enter sub specie name"
            value={subspecies}
            onChangeText={handlesubSpeciesChange}
          />
          <TextInput
            style={styles.descriptionInput}
            placeholder="Enter description"
            value={description}
            onChangeText={handleDescriptionChange}
            multiline
          />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleLocationChange}
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            )}
          </MapView>

          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    gap: 25,
  },
  cameraContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  cameraIcon: {
    marginRight: 10,
    paddingRight: 10,
    borderRightColor: "black",
    borderRightWidth: 3,
  },
  folderIcon: {
    marginRight: 15,
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
  map: {
    width: "80%",
    height: 200,
    marginBottom: 20,
  },
  postButton: {
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 26,
    width: 120,
    height: 65,
    justifyContent: "center",
  },
  postButtonText: {
    paddingLeft: 7,
    paddingBottom: 3,
    color: "black",
    fontSize: 30,
    fontWeight: "500",
  },
});

export default Postform;
