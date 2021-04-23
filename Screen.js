//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// create a component
const Screen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stockName}>{props.name ? props.name : "SET"}</Text>
        <Text style={styles.stockIndex}>
          {props.stock ? props.stock.l : ""}
        </Text>
        <Text style={styles.stockChange}>
          {props.stock ? `${props.stock.c}  ${props.stock.cp}` : ""}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  stockName: {
    fontSize: 60,
  },
  stockIndex: {
    fontSize: 70,
  },
  stockChange: {
    fontSize: 20,
  },
});

//make this component available to the app
export default Screen;
