import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.location}>{result.location.address1}</Text>
      <Text style={styles.location}>
        {result.location.city}, {result.location.state}{" "}
        {result.location.zip_code} {result?.location.address2}
      </Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },

  location: {
    fontSize: 16,
    fontWeight: "600",
  },

  phone: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 20,
  },
});

export default ResultsShowScreen;
