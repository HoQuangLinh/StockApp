//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const StockButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => props.onPress(props.name)}
    >
      <Text style={styles.loginText}>{props.name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  loginBtn: {
    marginHorizontal: 10,
    width: "28%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#ebdb2d",
  },
  loginText: {
    alignItems: "center",
  },
});

export default StockButton;
